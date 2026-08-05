// engines/audio/speechSequencer.ts
"use client";

import { useAudioStore } from "@/store/useAudioStore";

type SpeakFn = ReturnType<typeof useAudioStore.getState>["speak"];
type SpeakOptions = Parameters<SpeakFn>[1];

/**
 * Resolves once the audio store reports speech has stopped (isSpeaking ->
 * false), or after maxWaitMs, whichever comes first. The timeout is a
 * safety net only — it guards against a stuck isSpeaking flag ever hanging
 * the stage — normal chains resolve via the store update.
 */
function waitForSpeechEnd(maxWaitMs: number): Promise<void> {
  return new Promise((resolve) => {
    // Short utterances (a single letter) can start and finish inside the
    // 50ms grace period speakAndWait waits before calling this. If we only
    // ever listened for a future isSpeaking:true->false transition, we'd
    // miss it entirely and fall all the way through to the multi-second
    // safety timeout — on every single letter, during fast typing this
    // stacked up and made the app feel like it had frozen. So check the
    // current state up front, before setting up the timeout/subscription
    // at all, and resolve immediately if speech has already ended.
    if (!useAudioStore.getState().isSpeaking) {
      resolve();
      return;
    }

    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(safety);
      unsubscribe();
      resolve();
    };

    const unsubscribe = useAudioStore.subscribe((state) => {
      if (!state.isSpeaking) finish();
    });

    const safety = setTimeout(finish, maxWaitMs);
  });
}

/**
 * Speaks text and resolves only once speech has finished, so callers can
 * chain announcements (e.g. sentence, then word, then letter) without one
 * clipping or talking over the previous one.
 *
 * If the person is deep in a fast typing flow and doesn't need every
 * announcement to fully complete before the next state change, callers can
 * still fire `speak()` directly via useAudio() instead of this helper.
 */
export async function speakAndWait(text: string, options?: SpeakOptions): Promise<void> {
  const { speak, screenReaderMode } = useAudioStore.getState();
  speak(text, options);

  if (screenReaderMode) {
    // In screen reader mode, useAudioStore.speak() is a deliberate no-op —
    // narration comes from the aria-live regions instead, read by the
    // person's own JAWS/NVDA/VoiceOver. That means isSpeaking never flips
    // true for this utterance, so waitForSpeechEnd below would see "not
    // speaking" immediately and resolve in ~0ms regardless of how long the
    // text actually takes a screen reader to read. Callers that chain
    // several announcements (sentence -> word -> letter, in
    // announceItemStart) rely on speakAndWait to pace them apart; without
    // real pacing here, all three fire within milliseconds of each other
    // and stomp the live region's single high-priority slot before a
    // screen reader ever gets to read the earlier ones — which is exactly
    // why only the last announcement (usually the letter) was ever heard,
    // with full words and sentences going silent. Estimate a reading
    // duration instead, matching the same formula the live-region drain
    // queue uses, so this promise doesn't resolve until a screen reader
    // would plausibly have finished.
    const estimatedMs = Math.max(900, text.length * 90);
    await new Promise((r) => setTimeout(r, estimatedMs));
    return;
  }

  // Brief grace period so we don't sample isSpeaking before the store has
  // had a chance to flip it true for this utterance.
  await new Promise((r) => setTimeout(r, 50));
  const estimatedMs = Math.max(900, text.length * 90);
  await waitForSpeechEnd(estimatedMs + 1500);
}

/** Stops in-flight speech immediately — used when abandoning an announcement
 *  chain (restart, unmount, pause). */
export function cancelSpeech(): void {
  useAudioStore.getState().cancel();
}
