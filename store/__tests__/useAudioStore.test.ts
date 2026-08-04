import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

class FakeSpeechSynthesisUtterance {
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

function makeFakeSynthesis() {
  const spoken: string[] = [];
  let current: FakeSpeechSynthesisUtterance | null = null;

  return {
    spoken,
    getVoices: () => [{ lang: "en-US", localService: true, name: "Fake" }],
    onvoiceschanged: null as (() => void) | null,
    speak: vi.fn((utterance: FakeSpeechSynthesisUtterance) => {
      current = utterance;
      spoken.push(utterance.text);
      // Real browsers fire onstart/onend asynchronously, never
      // synchronously within the speak() call itself.
      setTimeout(() => {
        if (current !== utterance) return;
        utterance.onstart?.();
        setTimeout(() => {
          if (current !== utterance) return;
          current = null;
          utterance.onend?.();
        }, 15);
      }, 5);
    }),
    cancel: vi.fn(() => {
      current = null;
    }),
  };
}

describe("useAudioStore speak() — no cancel() in the routine announcement path", () => {
  let fakeSynthesis: ReturnType<typeof makeFakeSynthesis>;

  beforeEach(async () => {
    vi.resetModules();
    fakeSynthesis = makeFakeSynthesis();
    (window as any).SpeechSynthesisUtterance = FakeSpeechSynthesisUtterance;
    (window as any).speechSynthesis = fakeSynthesis;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it("speaks immediately when nothing is currently playing, high or low priority", async () => {
    const { useAudioStore } = await import("../useAudioStore");
    useAudioStore.getState().init();

    useAudioStore.getState().speak("hello", { priority: "high" });
    expect(fakeSynthesis.speak).toHaveBeenCalledTimes(1);
    expect(fakeSynthesis.spoken).toEqual(["hello"]);
    expect(fakeSynthesis.cancel).not.toHaveBeenCalled();
  });

  it("never calls cancel() for routine high-priority announcements, even several in a row while one is playing", async () => {
    vi.useFakeTimers();
    const { useAudioStore } = await import("../useAudioStore");
    useAudioStore.getState().init();

    useAudioStore.getState().speak("word one", { priority: "high" });
    // Several rapid keystrokes' worth of letter announcements arrive while
    // "word one" is still playing.
    useAudioStore.getState().speak("letter a", { priority: "high" });
    useAudioStore.getState().speak("letter b", { priority: "high" });
    useAudioStore.getState().speak("letter c", { priority: "high" });

    // Only "word one" has actually been sent to the browser so far --
    // nothing was cancelled or force-interrupted.
    expect(fakeSynthesis.speak).toHaveBeenCalledTimes(1);
    expect(fakeSynthesis.cancel).not.toHaveBeenCalled();

    // Let "word one" finish playing.
    await vi.advanceTimersByTimeAsync(100);

    // Only the LATEST queued high-priority item plays next -- "letter a"
    // and "letter b" were superseded and should never be spoken at all
    // (no backlog of stale letters).
    expect(fakeSynthesis.spoken).toEqual(["word one", "letter c"]);
    expect(fakeSynthesis.cancel).not.toHaveBeenCalled();
  });

  it("low-priority messages queue in order behind whatever is currently playing, without being dropped", async () => {
    vi.useFakeTimers();
    const { useAudioStore } = await import("../useAudioStore");
    useAudioStore.getState().init();

    useAudioStore.getState().speak("Welcome message", { priority: "high" });
    useAudioStore.getState().speak("Informational aside");

    expect(fakeSynthesis.speak).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(100);

    expect(fakeSynthesis.spoken).toEqual(["Welcome message", "Informational aside"]);
    expect(fakeSynthesis.cancel).not.toHaveBeenCalled();
  });

  it("cancel() (restart/pause) still genuinely interrupts and clears everything pending", async () => {
    vi.useFakeTimers();
    const { useAudioStore } = await import("../useAudioStore");
    useAudioStore.getState().init();

    useAudioStore.getState().speak("word one", { priority: "high" });
    useAudioStore.getState().speak("letter a", { priority: "high" });
    useAudioStore.getState().cancel();

    expect(fakeSynthesis.cancel).toHaveBeenCalledTimes(1);
    expect(useAudioStore.getState().isSpeaking).toBe(false);

    // Nothing pending should play after a cancel -- the queue was cleared.
    await vi.advanceTimersByTimeAsync(200);
    expect(fakeSynthesis.spoken).toEqual(["word one"]);

    // A fresh speak() after cancel() works normally.
    useAudioStore.getState().speak("Practice restarted.", { priority: "high" });
    expect(fakeSynthesis.spoken).toEqual(["word one", "Practice restarted."]);
  });
});
