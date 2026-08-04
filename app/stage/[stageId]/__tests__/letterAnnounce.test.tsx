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

let speakCalls: string[] = [];

function silenceAudio() {
  speakCalls = [];
  useAudioStore.setState({
    speak: vi.fn((text: string) => {
      speakCalls.push(text);
    }),
    playSound: vi.fn(),
    cancel: vi.fn(),
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

describe("Letter-by-letter announcement in word-mode stages", () => {
  it("announces each letter of a multi-letter word as it's typed", async () => {
    await renderStage("6");
    const input = getInput();
    input.focus();

    const word = getExpectedWord();
    console.log("Word to type:", word, "length:", word.length);
    expect(word.length).toBeGreaterThan(1);

    speakCalls = []; // clear whatever the mount announcement chain said

    for (let i = 0; i < word.length; i++) {
      await act(async () => {
        fireEvent.keyDown(input, { key: word[i] });
        await new Promise((r) => setTimeout(r, 150));
      });
      console.log(`After typing letter ${i} ('${word[i]}'), speakCalls:`, JSON.stringify(speakCalls));
    }

    // After typing letters 0..n-2, each subsequent letter should have been
    // announced (word.length - 1 announcements: letters at index 1..n-1).
    expect(speakCalls.length).toBeGreaterThanOrEqual(word.length - 1);
  });

  it("still announces letters when typed at fast/near-zero-delay speed", async () => {
    await renderStage("6");
    const input = getInput();
    input.focus();

    const word = getExpectedWord();
    console.log("Fast-typing word:", word, "length:", word.length);
    speakCalls = [];

    for (let i = 0; i < word.length; i++) {
      await act(async () => {
        fireEvent.keyDown(input, { key: word[i] });
      });
    }
    // let any pending effects/microtasks settle
    await act(async () => {
      await new Promise((r) => setTimeout(r, 300));
    });

    console.log("Fast-typing speakCalls:", JSON.stringify(speakCalls));
    expect(speakCalls.length).toBeGreaterThanOrEqual(word.length - 1);
  });
});
