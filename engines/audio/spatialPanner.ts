// engines/audio/spatialPanner.ts
import { getAudioContext } from "./AudioContext";

export type Hand = "left" | "right";

/** Standard touch-typing home-row finger map, reused by the adaptive engine too.
 *  Pan value: -1 = full left ear, 0 = center, 1 = full right ear. */
export const KEY_HAND_MAP: Record<string, { hand: Hand; pan: number; finger: string }> = {
  q: { hand: "left", pan: -1, finger: "left-pinky" },
  a: { hand: "left", pan: -1, finger: "left-pinky" },
  z: { hand: "left", pan: -1, finger: "left-pinky" },
  w: { hand: "left", pan: -0.7, finger: "left-ring" },
  s: { hand: "left", pan: -0.7, finger: "left-ring" },
  x: { hand: "left", pan: -0.7, finger: "left-ring" },
  e: { hand: "left", pan: -0.4, finger: "left-middle" },
  d: { hand: "left", pan: -0.4, finger: "left-middle" },
  c: { hand: "left", pan: -0.4, finger: "left-middle" },
  r: { hand: "left", pan: -0.15, finger: "left-index" },
  f: { hand: "left", pan: -0.15, finger: "left-index" },
  v: { hand: "left", pan: -0.15, finger: "left-index" },
  t: { hand: "left", pan: -0.15, finger: "left-index" },
  g: { hand: "left", pan: -0.15, finger: "left-index" },
  b: { hand: "left", pan: -0.15, finger: "left-index" },
  y: { hand: "right", pan: 0.15, finger: "right-index" },
  h: { hand: "right", pan: 0.15, finger: "right-index" },
  n: { hand: "right", pan: 0.15, finger: "right-index" },
  u: { hand: "right", pan: 0.15, finger: "right-index" },
  j: { hand: "right", pan: 0.15, finger: "right-index" },
  m: { hand: "right", pan: 0.15, finger: "right-index" },
  i: { hand: "right", pan: 0.4, finger: "right-middle" },
  k: { hand: "right", pan: 0.4, finger: "right-middle" },
  o: { hand: "right", pan: 0.7, finger: "right-ring" },
  l: { hand: "right", pan: 0.7, finger: "right-ring" },
  p: { hand: "right", pan: 1, finger: "right-pinky" },
  ";": { hand: "right", pan: 1, finger: "right-pinky" },
  "/": { hand: "right", pan: 1, finger: "right-pinky" },
  ",": { hand: "right", pan: 0.4, finger: "right-middle" },
  ".": { hand: "right", pan: 0.7, finger: "right-ring" },
  " ": { hand: "left", pan: 0, finger: "thumb" },
  // Stage_5's number row + shifted symbols (data/dictionaries/stage5.json) —
  // panned by the same finger-distance-from-center scale used above.
  "1": { hand: "left", pan: -1, finger: "left-pinky" },
  "2": { hand: "left", pan: -0.7, finger: "left-ring" },
  "3": { hand: "left", pan: -0.4, finger: "left-middle" },
  "4": { hand: "left", pan: -0.15, finger: "left-index" },
  "5": { hand: "left", pan: -0.15, finger: "left-index" },
  "6": { hand: "right", pan: 0.15, finger: "right-index" },
  "7": { hand: "right", pan: 0.15, finger: "right-index" },
  "8": { hand: "right", pan: 0.4, finger: "right-middle" },
  "9": { hand: "right", pan: 0.7, finger: "right-ring" },
  "0": { hand: "right", pan: 1, finger: "right-pinky" },
  "!": { hand: "left", pan: -1, finger: "left-pinky" },
  "@": { hand: "left", pan: -0.7, finger: "left-ring" },
  "#": { hand: "left", pan: -0.4, finger: "left-middle" },
  $: { hand: "left", pan: -0.15, finger: "left-index" },
  "%": { hand: "left", pan: -0.15, finger: "left-index" },
  "&": { hand: "right", pan: 0.15, finger: "right-index" },
  "-": { hand: "right", pan: 1, finger: "right-pinky" },
  "'": { hand: "right", pan: 1, finger: "right-pinky" },
};

export function getKeyPan(key: string): number {
  return KEY_HAND_MAP[key.toLowerCase()]?.pan ?? 0;
}

export function getKeyHand(key: string): Hand | null {
  return KEY_HAND_MAP[key.toLowerCase()]?.hand ?? null;
}

export function getKeyFinger(key: string): string {
  return KEY_HAND_MAP[key.toLowerCase()]?.finger ?? "unknown";
}

/**
 * Plays a short tone panned to whichever ear corresponds to the key's hand —
 * this is the "3D spatial / binaural panning" feature: it teaches which hand
 * should reach for a key purely by which ear the sound comes from.
 */
export function playPannedTone(key: string, frequency = 440, durationSeconds = 0.08, volume = 0.3) {
  const context = getAudioContext();
  if (!context) return;
  if (context.state === "suspended") context.resume();

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const panner = context.createStereoPanner();

  panner.pan.value = getKeyPan(key);
  gain.gain.value = volume;

  oscillator.frequency.value = frequency;
  oscillator.connect(gain);
  gain.connect(panner);
  panner.connect(context.destination);

  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + durationSeconds);
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + durationSeconds);
}
