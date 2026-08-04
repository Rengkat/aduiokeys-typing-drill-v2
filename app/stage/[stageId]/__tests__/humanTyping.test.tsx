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

describe("Human-speed typing across many single-character words", () => {
  it("advances through 15 consecutive words with realistic (non-zero) gaps between keystrokes", async () => {
    await renderStage("1");
    const input = getInput();
    input.focus();

    const seenPositions: number[] = [];
    for (let i = 0; i < 15; i++) {
      const word = getExpectedWord();
      seenPositions.push(getCurrentWordIndex());
      await act(async () => {
        fireEvent.keyDown(input, { key: word[0] });
        // realistic human gap between keystrokes
        await new Promise((r) => setTimeout(r, 120));
      });
    }

    // Position must strictly increase by exactly 1 each keystroke -- any
    // repeat or skip means a keystroke was dropped or double-counted.
    for (let i = 1; i < seenPositions.length; i++) {
      expect(seenPositions[i]).toBe(seenPositions[i - 1] + 1);
    }
  });
});
