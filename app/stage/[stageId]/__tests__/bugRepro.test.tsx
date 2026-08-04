import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  }),
}));
import { Suspense } from "react";
import { render, screen, fireEvent, cleanup, waitFor, act } from "@testing-library/react";
import StagePage from "../page";
import { useProfileStore } from "@/store/useProfileStore";
import { useAudioStore } from "@/store/useAudioStore";
import { getDB } from "@/db/client";
import type { UserProfile } from "@/types/profile";

// Real speechSynthesis timing is irrelevant to the two bugs being tested and
// would just slow the test down / risk flakiness. Point the audio store's
// `speak` at a no-op so speakAndWait's "isSpeaking" wait resolves instantly,
// same as muting the app rather than changing any of its logic.
function silenceAudio() {
  useAudioStore.setState({
    speak: vi.fn(),
    playSound: vi.fn(),
    cancel: vi.fn(),
    isSpeaking: false,
  });
}

function makeProfile(overrides: Partial<UserProfile> = {}): UserProfile {
  return {
    username: "tester",
    level: "Stage_1",
    wpmTarget: 25,
    soundPack: "default",
    classCode: null,
    leaderboardOptIn: true,
    fluencyScore: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...overrides,
  };
}

async function renderStage(stageRoute: string) {
  let utils!: ReturnType<typeof render>;
  await act(async () => {
    utils = render(
      <Suspense fallback={<div>loading route</div>}>
        <StagePage params={Promise.resolve({ stageId: stageRoute })} />
      </Suspense>,
    );
    // Give the use(params) suspension + microtask queue a couple of ticks
    // to resolve and re-render before we start polling for content.
    await new Promise((r) => setTimeout(r, 0));
  });
  // Wait past the "Preparing your lesson..." loading state (queueReady).
  await waitFor(() => expect(screen.getByLabelText(/^Type the word:/)).toBeInTheDocument(), {
    timeout: 10000,
  });
  return utils;
}

function getInput(): HTMLInputElement {
  return screen.getByLabelText(/^Type the word:/) as HTMLInputElement;
}

function getExpectedWord(): string {
  const label = getInput().getAttribute("aria-label") || "";
  return label.replace("Type the word: ", "");
}

// Tracks queue position rather than word text. The curriculum can
// legitimately repeat the same single-letter word back-to-back (e.g. two
// "s" drills in a row), so "the word changed" is not a reliable signal
// that progress happened -- "the position advanced" is.
function getCurrentWordIndex(): number {
  const label = screen.getByText(/^\(\d+\/\d+\)$/).textContent || "";
  const match = label.match(/\((\d+)\/(\d+)\)/);
  return match ? parseInt(match[1], 10) : -1;
}

beforeEach(() => {
  silenceAudio();
  useProfileStore.setState({
    currentProfile: makeProfile(),
    profiles: [],
    isHydrated: true,
    isLoading: false,
  });
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe("Bug report 1: typing shouldn't require pressing Enter between letters", () => {
  it("advances through every letter of a word from real keydown events alone, no Enter/Space in between", async () => {
    await renderStage("1");
    const input = getInput();
    input.focus();

    const word = getExpectedWord();
    expect(word.length).toBeGreaterThan(0);
    const startIndex = getCurrentWordIndex();

    // Type every letter of the word via keydown only. If the app requires
    // Enter after each letter (the reported bug), the word/progress won't
    // advance and the input will still be waiting on the same character.
    for (const ch of word) {
      fireEvent.keyDown(input, { key: ch });
    }

    // No Enter or Space was ever sent. If typing genuinely needs one after
    // each letter, this assertion fails because the app is stuck on `word`.
    await waitFor(() => {
      expect(getCurrentWordIndex()).not.toBe(startIndex);
    });
  });

  it("does NOT advance to the next letter/word on its own without any keystroke (sanity check for the harness itself)", async () => {
    await renderStage("1");
    const word = getExpectedWord();
    // No keys pressed at all — word must still be the same one.
    await new Promise((r) => setTimeout(r, 300));
    expect(getExpectedWord()).toBe(word);
  });
});

describe("Bug report 3: 'Try again' should let you type immediately", () => {
  it("accepts keydown input right after clicking Practice Again", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    await renderStage("1");
    const input = getInput();
    input.focus();

    // Blow through the timer without meeting the target, so we land on the
    // non-level-up "Session Complete" screen with a "Practice Again" button.
    fireEvent.keyDown(input, { key: getExpectedWord()[0] });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(61_000);
    });
    const practiceAgain = await screen.findByRole("button", { name: /practice again/i });

    await act(async () => {
      fireEvent.click(practiceAgain);
      // Flush the requestAnimationFrame-deferred focus() call.
      await vi.advanceTimersByTimeAsync(50);
    });

    const freshInput = getInput();
    expect(freshInput).not.toBeDisabled();
    expect(freshInput).toHaveFocus();

    const word = getExpectedWord();
    const startIndex = getCurrentWordIndex();
    fireEvent.keyDown(freshInput, { key: word[0] });

    // If focus never actually landed (the original bug), this keystroke is
    // silently dropped and nothing changes. Stage 1 words are single
    // letters, so a correct keystroke completes the word instantly and the
    // input clears again as it advances — so "progress happened" is proven
    // by the queue position advancing, not by the input holding a value
    // (and not by the announced word text, which can legitimately repeat).
    await waitFor(() => {
      expect(getCurrentWordIndex()).not.toBe(startIndex);
    });
  });
});

describe("Bug report 2: timer running out should always show an outcome, not silently stop", () => {
  it("shows a completion/outcome screen when time runs out and the DB write fails", async () => {
    // Force the exact failure mode described in the code: the metrics save
    // throws mid-finishSession(). Before the fix, this exception happened
    // *before* the code path that calls setSessionComplete(true), so the UI
    // never updated — the timer would hit zero and nothing would happen.
    vi.spyOn(await import("@/db/client"), "getDB").mockRejectedValue(
      new Error("simulated IndexedDB failure"),
    );

    vi.useFakeTimers({ shouldAdvanceTime: true });
    await renderStage("1");
    const input = getInput();
    input.focus();

    // Start the session (first keystroke arms the timer), then let stage 1's
    // full 60s duration elapse.
    fireEvent.keyDown(input, { key: getExpectedWord()[0] });

    await act(async () => {
      await vi.advanceTimersByTimeAsync(61_000);
    });

    await waitFor(
      () => {
        expect(
          screen.getByText(/Stage Complete!|Session Complete!/i),
        ).toBeInTheDocument();
      },
      { timeout: 10000 },
    );
  });

  it("shows a completion screen when time runs out normally (no forced failure)", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    await renderStage("2");
    const input = getInput();
    input.focus();

    fireEvent.keyDown(input, { key: getExpectedWord()[0] });

    await act(async () => {
      await vi.advanceTimersByTimeAsync(61_000);
    });

    await waitFor(
      () => {
        expect(
          screen.getByText(/Stage Complete!|Session Complete!/i),
        ).toBeInTheDocument();
      },
      { timeout: 10000 },
    );
  });
});
