import type { KeystrokeLog, FingerHealthIndex } from "@/types/metrics";

const FINGER_KEYS = [
  "leftPinky",
  "leftRing",
  "leftMiddle",
  "leftIndex",
  "rightIndex",
  "rightMiddle",
  "rightRing",
  "rightPinky",
] as const;

type FingerKey = (typeof FINGER_KEYS)[number];

/** Maps the raw `finger`/`hand` fields on a KeystrokeLog to one of the 8
 *  FingerHealthIndex buckets (KeystrokeLog only stores "pinky"/"ring"/etc,
 *  not which hand — hand comes from the separate `hand` field). */
function toFingerKey(finger: string, hand?: "left" | "right"): FingerKey | null {
  if (!hand) return null;
  const key = `${hand}${finger.charAt(0).toUpperCase()}${finger.slice(1)}` as FingerKey;
  return FINGER_KEYS.includes(key) ? key : null;
}

/**
 * Computes a Finger Health Index snapshot from a batch of keystrokes.
 * "Health" here combines accuracy (main signal) with a mild penalty for very
 * fast inter-key intervals on that finger, which tends to correlate with
 * rushed, error-prone strokes rather than genuine fluency.
 */
export function computeFingerHealthIndex(
  username: string,
  stage: string,
  logs: KeystrokeLog[],
): FingerHealthIndex {
  const byFinger: Record<FingerKey, KeystrokeLog[]> = FINGER_KEYS.reduce(
    (acc, key) => ({ ...acc, [key]: [] }),
    {} as Record<FingerKey, KeystrokeLog[]>,
  );

  for (const log of logs) {
    const key = toFingerKey(log.finger, log.hand);
    if (key) byFinger[key].push(log);
  }

  const byFingerScore = {} as FingerHealthIndex["byFinger"];
  const recommendations: string[] = [];

  for (const key of FINGER_KEYS) {
    const fingerLogs = byFinger[key];
    if (fingerLogs.length === 0) {
      byFingerScore[key] = 100; // no data yet — don't penalize
      continue;
    }
    const accuracy = (fingerLogs.filter((l) => l.isCorrect).length / fingerLogs.length) * 100;
    const avgIki = fingerLogs.reduce((sum, l) => sum + l.interKeyInterval, 0) / fingerLogs.length;
    // Very short IKIs (<80ms) suggest rushing rather than real speed; small penalty.
    const rushPenalty = avgIki < 80 ? 10 : 0;

    const score = Math.max(0, Math.min(100, Math.round(accuracy - rushPenalty)));
    byFingerScore[key] = score;

    if (score < 70) {
      recommendations.push(
        `${formatFingerName(key)} needs practice — accuracy is at ${Math.round(accuracy)}%.`,
      );
    }
  }

  const leftHandScore = average(
    FINGER_KEYS.filter((k) => k.startsWith("left")).map((k) => byFingerScore[k]),
  );
  const rightHandScore = average(
    FINGER_KEYS.filter((k) => k.startsWith("right")).map((k) => byFingerScore[k]),
  );

  return {
    username,
    stage,
    timestamp: new Date().toISOString(),
    leftHand: Math.round(leftHandScore),
    rightHand: Math.round(rightHandScore),
    byFinger: byFingerScore,
    recommendations,
  };
}

function formatFingerName(key: FingerKey): string {
  const hand = key.startsWith("left") ? "Left" : "Right";
  const finger = key.replace(/^(left|right)/, "");
  return `${hand} ${finger.toLowerCase()}`;
}

function average(values: number[]): number {
  if (values.length === 0) return 100;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}
