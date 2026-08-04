// engines/audio/sfx.ts
import { Howl } from "howler";
import { getAudioContext } from "./AudioContext";

export type SfxName =
  | "success"
  | "error"
  | "select"
  | "keypress"
  | "correct"
  | "incorrect"
  | "levelup"
  | "hover"
  | "whoosh"
  | "fanfare"
  | "welcome";

/** Maps each sfx name to its file under public/audio/sfx/. Drop matching
 *  .mp3 files there and playback switches from synth tones to real audio
 *  automatically — no code changes needed. */
const SFX_FILES: Record<SfxName, string> = {
  success: "/audio/sfx/success.mp3",
  error: "/audio/sfx/error.mp3",
  select: "/audio/sfx/select.mp3",
  keypress: "/audio/sfx/keypress.mp3",
  correct: "/audio/sfx/correct.mp3",
  incorrect: "/audio/sfx/incorrect.mp3",
  levelup: "/audio/sfx/levelup.mp3",
  hover: "/audio/sfx/hover.mp3",
  whoosh: "/audio/sfx/whoosh.mp3",
  fanfare: "/audio/sfx/fanfare.mp3",
  welcome: "/audio/sfx/welcome.mp3",
};

const howlCache = new Map<SfxName, Howl>();
const knownMissing = new Set<SfxName>();

function getHowl(name: SfxName): Howl {
  let howl = howlCache.get(name);
  if (!howl) {
    howl = new Howl({
      src: [SFX_FILES[name]],
      preload: true,
      onloaderror: () => knownMissing.add(name),
    });
    howlCache.set(name, howl);
  }
  return howl;
}

/** Preload every sfx up front (call once on app init, e.g. from useAudioStore.init). */
export function preloadSfx() {
  (Object.keys(SFX_FILES) as SfxName[]).forEach(getHowl);
}

export function playSfx(name: SfxName, volume = 1) {
  if (!knownMissing.has(name)) {
    const howl = getHowl(name);
    if (howl.state() === "loaded") {
      howl.volume(volume);
      howl.play();
      return;
    }
  }
  // No audio file yet (or it failed to load) — fall back to a synthesized tone
  // so the app still has audio feedback during development.
  playSynthTone(name, volume);
}

function playSynthTone(type: SfxName, volume: number) {
  const context = getAudioContext();
  if (!context) return;
  if (context.state === "suspended") context.resume();

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  gainNode.gain.value = volume * 0.5;

  switch (type) {
    case "success":
    case "correct":
      oscillator.frequency.setValueAtTime(880, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1320, context.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.15);
      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + 0.15);
      break;
    case "error":
    case "incorrect":
      oscillator.type = "sawtooth";
      oscillator.frequency.setValueAtTime(220, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(110, context.currentTime + 0.2);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.3);
      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + 0.3);
      break;
    case "select":
      oscillator.frequency.setValueAtTime(660, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.1);
      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + 0.1);
      break;
    case "keypress":
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(440, context.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.05);
      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + 0.05);
      break;
    case "levelup": {
      [523, 659, 784, 1047].forEach((freq, i) => {
        const osc = context.createOscillator();
        const gain = context.createGain();
        osc.connect(gain);
        gain.connect(context.destination);
        gain.gain.value = volume * 0.35;
        osc.frequency.setValueAtTime(freq, context.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + i * 0.1 + 0.1);
        osc.start(context.currentTime + i * 0.1);
        osc.stop(context.currentTime + i * 0.1 + 0.1);
      });
      break;
    }
    case "hover":
      // Deliberately tiny — a soft high tick, not a beep. Meant to be heard
      // dozens of times per minute without becoming noise.
      oscillator.type = "sine";
      gainNode.gain.value = volume * 0.08;
      oscillator.frequency.setValueAtTime(1400, context.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.035);
      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + 0.035);
      break;
    case "whoosh": {
      // A downward pitch + lowpass sweep reads as motion/air rather than a tone —
      // used for page/route transitions.
      oscillator.type = "sawtooth";
      const filter = context.createBiquadFilter();
      filter.type = "lowpass";
      oscillator.disconnect();
      oscillator.connect(filter);
      filter.connect(gainNode);
      filter.frequency.setValueAtTime(3000, context.currentTime);
      filter.frequency.exponentialRampToValueAtTime(200, context.currentTime + 0.25);
      oscillator.frequency.setValueAtTime(900, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(160, context.currentTime + 0.25);
      gainNode.gain.value = volume * 0.18;
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.25);
      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + 0.25);
      break;
    }
    case "fanfare": {
      // A brighter, bigger sibling of "levelup" — for the returning-user
      // welcome-back moment. Two-note chord stabs rising into a held top note,
      // plus a soft sub-note underneath for a little brass weight.
      const notes: [number, number, number][] = [
        // [frequency, startOffset, duration]
        [523.25, 0, 0.12], // C5
        [659.25, 0, 0.12], // E5 (played together with C5 — a stab)
        [783.99, 0.12, 0.12], // G5
        [1046.5, 0.24, 0.35], // C6, held
      ];
      notes.forEach(([freq, offset, dur]) => {
        const osc = context.createOscillator();
        const gain = context.createGain();
        osc.type = "triangle";
        osc.connect(gain);
        gain.connect(context.destination);
        gain.gain.value = volume * 0.22;
        osc.frequency.setValueAtTime(freq, context.currentTime + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + offset + dur);
        osc.start(context.currentTime + offset);
        osc.stop(context.currentTime + offset + dur);
      });
      // Sub note for weight
      const sub = context.createOscillator();
      const subGain = context.createGain();
      sub.type = "sine";
      sub.connect(subGain);
      subGain.connect(context.destination);
      subGain.gain.value = volume * 0.15;
      sub.frequency.setValueAtTime(130.81, context.currentTime); // C3
      subGain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.5);
      sub.start(context.currentTime);
      sub.stop(context.currentTime + 0.5);
      break;
    }
    case "welcome": {
      // A warm, unhurried bell arpeggio for the very first thing a new (or
      // returning) user hears — precedes the spoken welcome line. Each note
      // layers a quiet octave-up partial on top of the fundamental for a
      // bell-like shimmer rather than a flat synth beep.
      const pentatonic = [392.0, 523.25, 659.25, 784.0]; // G4, C5, E5, G5
      pentatonic.forEach((freq, i) => {
        const offset = i * 0.14;
        const fundamental = context.createOscillator();
        const fundamentalGain = context.createGain();
        fundamental.type = "sine";
        fundamental.connect(fundamentalGain);
        fundamentalGain.connect(context.destination);
        fundamentalGain.gain.value = volume * 0.24;
        fundamental.frequency.setValueAtTime(freq, context.currentTime + offset);
        fundamentalGain.gain.exponentialRampToValueAtTime(
          0.001,
          context.currentTime + offset + 0.5,
        );
        fundamental.start(context.currentTime + offset);
        fundamental.stop(context.currentTime + offset + 0.5);

        const partial = context.createOscillator();
        const partialGain = context.createGain();
        partial.type = "sine";
        partial.connect(partialGain);
        partialGain.connect(context.destination);
        partialGain.gain.value = volume * 0.08;
        partial.frequency.setValueAtTime(freq * 2, context.currentTime + offset);
        partialGain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + offset + 0.3);
        partial.start(context.currentTime + offset);
        partial.stop(context.currentTime + offset + 0.3);
      });
      break;
    }
  }
}
