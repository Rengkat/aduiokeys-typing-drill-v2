import type { KeystrokeLog } from "@/types/metrics";

/** Canonical finger/hand/row map — the source of truth for classifying a
 *  keystroke. (engines/audio/spatialPanner.ts has its own map because it
 *  also needs a *pan value*, which isn't a typing-analytics concern.) */
export const FINGER_MAP: Record<
  string,
  { finger: string; hand: "left" | "right"; row: "top" | "home" | "bottom" }
> = {
  q: { finger: "pinky", hand: "left", row: "top" },
  w: { finger: "ring", hand: "left", row: "top" },
  e: { finger: "middle", hand: "left", row: "top" },
  r: { finger: "index", hand: "left", row: "top" },
  t: { finger: "index", hand: "left", row: "top" },
  a: { finger: "pinky", hand: "left", row: "home" },
  s: { finger: "ring", hand: "left", row: "home" },
  d: { finger: "middle", hand: "left", row: "home" },
  f: { finger: "index", hand: "left", row: "home" },
  g: { finger: "index", hand: "left", row: "home" },
  z: { finger: "pinky", hand: "left", row: "bottom" },
  x: { finger: "ring", hand: "left", row: "bottom" },
  c: { finger: "middle", hand: "left", row: "bottom" },
  v: { finger: "index", hand: "left", row: "bottom" },
  b: { finger: "index", hand: "left", row: "bottom" },
  y: { finger: "index", hand: "right", row: "top" },
  u: { finger: "index", hand: "right", row: "top" },
  i: { finger: "middle", hand: "right", row: "top" },
  o: { finger: "ring", hand: "right", row: "top" },
  p: { finger: "pinky", hand: "right", row: "top" },
  h: { finger: "index", hand: "right", row: "home" },
  j: { finger: "index", hand: "right", row: "home" },
  k: { finger: "middle", hand: "right", row: "home" },
  l: { finger: "ring", hand: "right", row: "home" },
  ";": { finger: "pinky", hand: "right", row: "home" },
  n: { finger: "index", hand: "right", row: "bottom" },
  m: { finger: "index", hand: "right", row: "bottom" },
  ",": { finger: "middle", hand: "right", row: "bottom" },
  ".": { finger: "ring", hand: "right", row: "bottom" },
  "/": { finger: "pinky", hand: "right", row: "bottom" },
  // Number row + shifted symbols (Stage_5's key set, see
  // data/dictionaries/stage5.json). Row is approximated as "top" since the
  // number row sits directly above it and there's no dedicated bucket.
  "1": { finger: "pinky", hand: "left", row: "top" },
  "2": { finger: "ring", hand: "left", row: "top" },
  "3": { finger: "middle", hand: "left", row: "top" },
  "4": { finger: "index", hand: "left", row: "top" },
  "5": { finger: "index", hand: "left", row: "top" },
  "6": { finger: "index", hand: "right", row: "top" },
  "7": { finger: "index", hand: "right", row: "top" },
  "8": { finger: "middle", hand: "right", row: "top" },
  "9": { finger: "ring", hand: "right", row: "top" },
  "0": { finger: "pinky", hand: "right", row: "top" },
  "!": { finger: "pinky", hand: "left", row: "top" }, // shift+1
  "@": { finger: "ring", hand: "left", row: "top" }, // shift+2
  "#": { finger: "middle", hand: "left", row: "top" }, // shift+3
  $: { finger: "index", hand: "left", row: "top" }, // shift+4
  "%": { finger: "index", hand: "left", row: "top" }, // shift+5
  "&": { finger: "index", hand: "right", row: "top" }, // shift+7
  "-": { finger: "pinky", hand: "right", row: "top" },
  "'": { finger: "pinky", hand: "right", row: "home" },
};

export function classifyKey(key: string) {
  return FINGER_MAP[key.toLowerCase()];
}

/** Builds a well-formed KeystrokeLog row. `lastKeyTimestampMs` is the caller's
 *  own running clock (kept in a ref in the hook) — pure functions can't hold
 *  that state themselves. */
export function buildKeystrokeLog(params: {
  username: string;
  sessionId: string;
  key: string;
  expectedKey: string;
  isCorrect: boolean;
  nowMs: number;
  lastKeyTimestampMs: number;
}): KeystrokeLog {
  const mapping = classifyKey(params.key);
  return {
    username: params.username,
    sessionId: params.sessionId,
    key: params.key,
    expectedKey: params.expectedKey,
    isCorrect: params.isCorrect,
    timestamp: new Date(params.nowMs).toISOString(),
    interKeyInterval: params.nowMs - params.lastKeyTimestampMs,
    finger: mapping?.finger ?? "unknown",
    hand: mapping?.hand,
    row: mapping?.row,
  };
}

/** Standard WPM: (correct chars / 5) / minutes elapsed. */
export function calculateWPM(correctKeystrokes: number, durationSeconds: number): number {
  if (durationSeconds <= 0) return 0;
  const minutes = durationSeconds / 60;
  return Math.round((correctKeystrokes / 5 / minutes) * 100) / 100;
}

export function calculateAccuracy(correctKeystrokes: number, totalKeystrokes: number): number {
  if (totalKeystrokes === 0) return 100;
  return Math.round((correctKeystrokes / totalKeystrokes) * 10000) / 100; // 0-100, 2dp
}

/** Aggregate stats for a finished session, given its raw keystroke logs. */
export function summarizeSession(logs: KeystrokeLog[]) {
  const totalKeystrokes = logs.length;
  const correctKeystrokes = logs.filter((l) => l.isCorrect).length;
  const errors = totalKeystrokes - correctKeystrokes;

  const durationSeconds =
    logs.length > 1
      ? (new Date(logs[logs.length - 1].timestamp).getTime() -
          new Date(logs[0].timestamp).getTime()) /
        1000
      : 0;

  const leftHandLogs = logs.filter((l) => l.hand === "left");
  const rightHandLogs = logs.filter((l) => l.hand === "right");

  const fingerAccuracy: Record<string, number> = {};
  const byFinger = groupBy(logs, (l) => l.finger);
  for (const [finger, fingerLogs] of Object.entries(byFinger)) {
    fingerAccuracy[finger] = calculateAccuracy(
      fingerLogs.filter((l) => l.isCorrect).length,
      fingerLogs.length,
    );
  }

  return {
    totalKeystrokes,
    correctKeystrokes,
    errors,
    durationSeconds,
    wpm: calculateWPM(correctKeystrokes, durationSeconds),
    accuracy: calculateAccuracy(correctKeystrokes, totalKeystrokes),
    leftHandAccuracy: calculateAccuracy(
      leftHandLogs.filter((l) => l.isCorrect).length,
      leftHandLogs.length,
    ),
    rightHandAccuracy: calculateAccuracy(
      rightHandLogs.filter((l) => l.isCorrect).length,
      rightHandLogs.length,
    ),
    fingerAccuracy,
    averageInterKeyIntervalMs:
      logs.length > 0 ? logs.reduce((sum, l) => sum + l.interKeyInterval, 0) / logs.length : 0,
  };
}

function groupBy<T>(items: T[], keyFn: (item: T) => string): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((acc, item) => {
    const key = keyFn(item);
    (acc[key] ??= []).push(item);
    return acc;
  }, {});
}
