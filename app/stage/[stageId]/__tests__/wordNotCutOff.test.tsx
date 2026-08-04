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
import type { UserProfile } from "@/types/profile";

type SpeakCall = { text: string; priority?: string };
let speakCalls: SpeakCall[] = [];
let cancelCalls = 0;
let holding = false;

/**
 * `holding` lets the test precisely control when a speak() call "hangs"
 * (isSpeaking stays true, as if mid-utterance) vs. resolves instantly. Mount
 * announcements (Welcome message, item count, word 0) run with holding=false
 * so setup zips through deterministically; the test then flips holding=true
 * right before the transition it actually wants to inspect.
 */
function mockControllableAudio() {
  speakCalls = [];
  cancelCalls = 0;
  holding = false;
  useAudioStore.setState({
    speak: vi.fn((text: string, options?: { priority?: string }) => {
      speakCalls.push({ text, priority: options?.priority });
      if (options?.priority === "high") {
        // Real store behavior: priority:"high" cancels whatever was playing
        // before starting the new utterance.
        useAudioStore.setState({ isSpeaking: false });
      }
      useAudioStore.setState({ isSpeaking: holding });
    }),
    playSound: vi.fn(),
    cancel: vi.fn(() => {
      cancelCalls += 1;
      useAudioStore.setState({ isSpeaking: false });
    }),
    isSpeaking: false,
  });
}

function makeProfile(overrides: Partial<UserProfile> = {}): UserProfile {
  return {
    username: "tester",
    level: "Stage_6",
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
    await new Promise((r) => setTimeout(r, 0));
  });
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

beforeEach(() => {
  mockControllableAudio();
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

describe("Word pronunciation is never cut off by a fast typist's keystroke", () => {
  it("does not cancel/re-speak while the word is still mid-utterance, then announces the letter once it finishes", async () => {
    await renderStage("6");
    const input = getInput();
    input.focus();

    // Finish word 0 up to its last letter with holding=false (normal, fast
    // resolution), so setup is deterministic. The LAST keystroke of word0
    // is what triggers the transition to word1 -- and word1's own
    // announcement fires immediately as part of that same transition -- so
    // holding must already be true *before* that final keystroke, or
    // word1's announcement resolves before we get a chance to hold it.
    const word0 = getExpectedWord();
    for (const ch of word0.slice(0, -1)) {
      await act(async () => {
        fireEvent.keyDown(input, { key: ch });
        await new Promise((r) => setTimeout(r, 20));
      });
    }

    holding = true;
    await act(async () => {
      fireEvent.keyDown(input, { key: word0[word0.length - 1] });
      await new Promise((r) => setTimeout(r, 20));
    });

    await waitFor(() => {
      expect(getExpectedWord()).not.toBe(word0);
    });

    const word1 = getExpectedWord();
    console.log("Word 1 to test:", word1);
    expect(word1.length).toBeGreaterThan(1);

    await waitFor(() => {
      expect(speakCalls.some((c) => c.text === word1)).toBe(true);
    });

    const speakCallsAtWordStart = speakCalls.length;
    const cancelCallsAtWordStart = cancelCalls;
    console.log("speakCalls once word1 announcement started:", JSON.stringify(speakCalls));

    // Student recognizes word1 instantly and types its first letter WHILE
    // it's still (per our simulation) mid-utterance.
    await act(async () => {
      fireEvent.keyDown(input, { key: word1[0] });
      await new Promise((r) => setTimeout(r, 150));
    });

    console.log(
      "After typing mid-utterance -- speakCalls:",
      JSON.stringify(speakCalls),
      "cancelCalls:",
      cancelCalls,
    );

    // The critical assertion: no new speak() or cancel() call happened as
    // a result of typing while the word was still playing -- the letter
    // announcement must be waiting, not interrupting.
    expect(speakCalls.length).toBe(speakCallsAtWordStart);
    expect(cancelCalls).toBe(cancelCallsAtWordStart);

    // Now let the word's utterance actually finish, and confirm the
    // (still-current) letter announcement fires afterward.
    holding = false;
    await act(async () => {
      useAudioStore.setState({ isSpeaking: false });
      await new Promise((r) => setTimeout(r, 200));
    });

    console.log("After word1 finishes -- speakCalls:", JSON.stringify(speakCalls));
    const newCalls = speakCalls.slice(speakCallsAtWordStart);
    expect(newCalls.some((c) => c.text.toLowerCase() === word1[1]?.toLowerCase())).toBe(true);
  });
});
