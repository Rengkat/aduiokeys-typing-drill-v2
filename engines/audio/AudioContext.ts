// engines/audio/AudioContext.ts

/**
 * Single shared Web Audio API context for the whole app. Browsers only allow
 * a limited number of AudioContexts and require one user gesture before audio
 * can play, so every engine (sfx, narrator, spatialPanner) should pull the
 * context from here instead of constructing its own.
 */
let sharedContext: AudioContext | null = null;

export function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!sharedContext) {
    const Ctor = window.AudioContext || (window as any).webkitAudioContext;
    if (!Ctor) return null;
    sharedContext = new Ctor();
  }
  return sharedContext;
}

/** Must be called from inside a user gesture handler (keydown/click) the first
 *  time audio is needed — browsers start contexts in a "suspended" state. */
export async function resumeAudioContext(): Promise<void> {
  const ctx = getAudioContext();
  if (ctx && ctx.state === "suspended") {
    await ctx.resume();
  }
}

export function createGain(initialValue = 1): GainNode | null {
  const ctx = getAudioContext();
  if (!ctx) return null;
  const gain = ctx.createGain();
  gain.gain.value = initialValue;
  gain.connect(ctx.destination);
  return gain;
}
