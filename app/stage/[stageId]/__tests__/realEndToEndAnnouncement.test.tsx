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
vi.mock("@/engines/audio/longFormTracks", () => ({
  playLongFormTrack: vi.fn().mockResolvedValue(undefined),
  pickCelebrationTrack: vi.fn().mockReturnValue("celebration"),
}));
import { Suspense } from "react";
import { render, screen, waitFor, act, cleanup } from "@testing-library/react";
import StagePage from "../page";
import { useProfileStore } from "@/store/useProfileStore";
import { useAudioStore } from "@/store/useAudioStore";
import type { UserProfile } from "@/types/profile";

class RealisticFakeUtterance {
  text: string;
  rate = 1;
  pitch = 1;
  volume = 1;
  lang = "en-US";
  voice: unknown = null;
  onstart: (() => void) | null = null;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(text: string) {
    this.text = text;
  }
}

let spokenTexts: string[] = [];

/**
 * Simulates real speechSynthesis timing: onstart fires shortly after
 * speak() is called (never perfectly synchronous, like a real browser),
 * and onend fires after a short simulated speaking duration. This is what
 * makes it possible to catch bugs in the REAL store's cancel/settle/wait
 * logic -- a fake that never fires these callbacks (like the global test
 * stub in vitest.setup.ts, or a fully-replaced speak() mock) can't
 * exercise that logic at all.
 */
function installRealisticSpeechSynthesis() {
  spokenTexts = [];
  let current: RealisticFakeUtterance | null = null;

  // Sound effects (playSound/Howler) are unrelated to the speech engine
  // this test suite is actually exercising, and jsdom has no real
  // AudioContext for Howler to use -- stub it out so keystroke sound
  // effects don't throw, while leaving speak()/cancel()/init() untouched
  // (this test deliberately uses the real implementation of those).
  useAudioStore.setState({ playSound: vi.fn() });

  const fakeSynthesis = {
    getVoices: () => [{ lang: "en-US", localService: true, name: "Fake" }],
    onvoiceschanged: null as (() => void) | null,
    speak: vi.fn((utterance: RealisticFakeUtterance) => {
      current = utterance;
      spokenTexts.push(utterance.text);
      const thisUtterance = utterance;
      setTimeout(() => {
        if (current !== thisUtterance) return; // superseded by a cancel()
        thisUtterance.onstart?.();
        setTimeout(() => {
          if (current !== thisUtterance) return;
          current = null;
          thisUtterance.onend?.();
        }, 20);
      }, 5);
    }),
    cancel: vi.fn(() => {
      current = null;
    }),
  };

  // @ts-expect-error -- test stub, not the full browser type
  window.speechSynthesis = fakeSynthesis;
  // @ts-expect-error -- test stub
  window.SpeechSynthesisUtterance = RealisticFakeUtterance;

  return fakeSynthesis;
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

describe("Real end-to-end announcement flow (real store, no speak()/cancel() overrides)", () => {
  it("actually speaks the word during the mount announcement sequence, not just the welcome message", async () => {
    const fakeSynthesis = installRealisticSpeechSynthesis();
    useAudioStore.getState().init();
    await renderStage("6");

    const word = getExpectedWord();
    expect(word.length).toBeGreaterThan(1);

    // Give the real Welcome -> item-count -> word sequence enough
    // simulated real time to run through all three steps.
    await waitFor(
      () => {
        expect(spokenTexts.some((t) => t === word)).toBe(true);
      },
      { timeout: 8000, interval: 100 },
    );

    // The welcome message must have been spoken too -- confirming this
    // isn't a case where only the word played and welcome was skipped,
    // but a genuine full sequence.
    expect(spokenTexts.some((t) => t.toLowerCase().includes("welcome"))).toBe(true);
    expect(fakeSynthesis.speak).toHaveBeenCalled();

    // And the first letter of the word should follow too (announceItemStart's
    // final step), for a multi-letter word.
    if (word.length > 1) {
      await waitFor(
        () => {
          expect(spokenTexts.some((t) => t.toLowerCase() === word[0].toLowerCase())).toBe(true);
        },
        { timeout: 4000, interval: 100 },
      );
    }

    console.log("Full real speech sequence:", JSON.stringify(spokenTexts));
  });
});

describe("Stage 8 (sentences): every sentence gets announced, not just the first", () => {
  function makeSentenceProfile(): UserProfile {
    return {
      username: "tester",
      level: "Stage_8",
      wpmTarget: 25,
      soundPack: "default",
      classCode: null,
      leaderboardOptIn: true,
      fluencyScore: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  beforeEach(() => {
    useProfileStore.setState({
      currentProfile: makeSentenceProfile(),
      profiles: [],
      isHydrated: true,
      isLoading: false,
    });
  });

  it("speaks the sentence intro for at least the first three sentences across a session, not just sentence one", async () => {
    installRealisticSpeechSynthesis();
    useAudioStore.getState().init();
    await renderStage("8");

    // Type through a generous number of words -- enough to cross several
    // sentence boundaries in an 8-sentence session -- pausing briefly
    // between words for the real (simulated) announcement chain to settle,
    // the way an actual person typing at a normal pace would.
    for (let i = 0; i < 40; i++) {
      const word = getExpectedWord();
      if (!word) break;
      for (const ch of word) {
        await act(async () => {
          const { fireEvent } = await import("@testing-library/react");
          fireEvent.keyDown(getInput(), { key: ch });
          await new Promise((r) => setTimeout(r, 60));
        });
      }
      // Let any pending announcement settle before reading the next word.
      await act(async () => {
        await new Promise((r) => setTimeout(r, 80));
      });
    }

    // Sentences are the only multi-word entries spoken (words and letters
    // are always single tokens) other than the two fixed instructional
    // messages at mount -- filter those out to isolate actual sentence
    // announcements.
    const sentenceAnnouncements = spokenTexts.filter(
      (t) =>
        t.includes(" ") &&
        !t.toLowerCase().startsWith("welcome") &&
        !t.toLowerCase().includes("items to practice"),
    );

    console.log("Sentence-level announcements heard:", JSON.stringify(sentenceAnnouncements));
    console.log("Full sequence:", JSON.stringify(spokenTexts));

    expect(sentenceAnnouncements.length).toBeGreaterThanOrEqual(3);
    // And they must be genuinely different sentences, not the same one
    // repeated (which would indicate getting stuck rather than progressing).
    expect(new Set(sentenceAnnouncements).size).toBeGreaterThanOrEqual(3);
  }, 30000);
});
