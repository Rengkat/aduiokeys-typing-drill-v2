// engines/audio/narrator.ts
import { Howl } from "howler";
import specialCharacters from "@/data/specialCharacters.json";

/**
 * speechSynthesis frequently produces no audible sound at all for bare
 * punctuation characters (";", ",", etc.) — there's no "word" for it to
 * say. data/specialCharacters.json maps every punctuation/symbol key in
 * the curriculum to a readable name ("Semicolon", "Comma", ...). Any place
 * that speaks a single character — not a whole word — must route through
 * this so those keys are actually announced instead of silently skipped.
 */
const SPECIAL_CHARACTERS = specialCharacters as Record<string, string>;

export function speakableChar(char: string): string {
  return SPECIAL_CHARACTERS[char] ?? char;
}

/** Same idea, but for a whole "word" that might just be a single key (as in
 *  the Stage_1-5 key drills, where a "word" and a character are the same
 *  thing) — falls through to the raw text for anything longer than 1 char. */
export function speakableWord(word: string): string {
  return word.length === 1 ? speakableChar(word) : word;
}

/**
 * Pure phrase builders. These just return strings — pass the result into
 * useAudioStore().speak(text) from a component. Keeping phrasing here (instead
 * of scattered across components) means tone/wording stays consistent and is
 * easy to translate or A/B test later.
 */
export const narratorPhrases = {
  welcomeBack: (username: string) => `Welcome back, ${username}!`,
  welcomeNew: () =>
    "Welcome to AudioKeys! Let's create your first profile and start learning to type by ear.",
  stageIntro: (stage: string) => `Starting ${stage.replace("_", " ")}. Get your fingers ready.`,
  correctKey: (key: string) => `${speakableChar(key)}, correct.`,
  incorrectKey: (expected: string, actual: string) =>
    `Try again. That was ${speakableChar(actual)}, needed ${speakableChar(expected)}.`,
  sessionComplete: (wpm: number, accuracy: number) =>
    `Session complete. ${Math.round(wpm)} words per minute, ${Math.round(accuracy)} percent accuracy.`,
  personalBest: (metric: string, delta: number) =>
    delta > 0
      ? `New personal best! You beat your last ${metric} by ${Math.round(delta)}.`
      : `Keep going — you're ${Math.round(Math.abs(delta))} away from your personal best ${metric}.`,
  leaderboardEntry: (rank: number, username: string, wpm: number, accuracy: number) =>
    `Rank ${rank}: ${username}, ${Math.round(wpm)} words per minute, ${Math.round(accuracy)} percent accuracy.`,
  weakKeyCallout: (keyPair: string) => `Let's work on ${keyPair.split("").join(" and ")} — that pair needs practice.`,
  achievementUnlocked: (name: string) => `Achievement unlocked: ${name}!`,
};

/* ---------------------------------------------------------------------- */
/* Pre-recorded narrator audio (optional) — for a warmer voice than the    */
/* browser's built-in speechSynthesis. Falls back silently if a clip is    */
/* missing, so `speak(narratorPhrases.stageIntro(...))` via TTS remains    */
/* the source of truth and this is purely a nicer-sounding overlay.        */
/* ---------------------------------------------------------------------- */

const clipCache = new Map<string, Howl>();

function clipPath(clipId: string) {
  return `/audio/narrator/${clipId}.mp3`;
}

export function playNarratorClip(clipId: string, onMissing?: () => void): void {
  let howl = clipCache.get(clipId);
  if (!howl) {
    howl = new Howl({
      src: [clipPath(clipId)],
      preload: true,
      onloaderror: () => onMissing?.(),
    });
    clipCache.set(clipId, howl);
  }
  if (howl.state() === "loaded") {
    howl.play();
  } else {
    howl.once("load", () => howl!.play());
    howl.once("loaderror", () => onMissing?.());
  }
}
