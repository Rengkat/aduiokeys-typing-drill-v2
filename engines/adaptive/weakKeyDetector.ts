// engines/adaptive/weakKeyDetector.ts
import type { KeystrokeLog, WeakKeyPair } from "@/types/metrics";
import { classifyKey } from "./keyLogger";

const MIN_ATTEMPTS_TO_FLAG = 5;
const ERROR_RATE_THRESHOLD = 0.25; // 25%+ wrong = "weak"

/**
 * Scans keystroke logs for substitution patterns: whenever a student typed
 * a wrong key, we pair (expectedKey, actualKey typed) and track how often
 * that mistake happens. Pairs that happen often enough become WeakKeyPairs.
 */
export function detectWeakKeyPairs(logs: KeystrokeLog[]): WeakKeyPair[] {
  const pairStats = new Map<string, { key1: string; key2: string; errors: number; attempts: number }>();

  // Attempts-per-expected-key, so error rate is "how often was this key
  // pair involved in a mistake" relative to how often the expected key
  // was attempted at all.
  const attemptsPerKey = new Map<string, number>();
  for (const log of logs) {
    const expected = log.expectedKey.toLowerCase();
    attemptsPerKey.set(expected, (attemptsPerKey.get(expected) ?? 0) + 1);
  }

  for (const log of logs) {
    if (log.isCorrect) continue;
    const expected = log.expectedKey.toLowerCase();
    const actual = log.key.toLowerCase();
    if (!expected || !actual || expected === actual) continue;

    const pairKey = [expected, actual].sort().join("-");
    const entry = pairStats.get(pairKey) ?? {
      key1: expected,
      key2: actual,
      errors: 0,
      attempts: 0,
    };
    entry.errors += 1;
    entry.attempts = (attemptsPerKey.get(expected) ?? 0) + (attemptsPerKey.get(actual) ?? 0);
    pairStats.set(pairKey, entry);
  }

  const weakPairs: WeakKeyPair[] = [];

  for (const { key1, key2, errors, attempts } of pairStats.values()) {
    if (attempts < MIN_ATTEMPTS_TO_FLAG) continue;
    const errorRate = attempts === 0 ? 0 : errors / attempts;
    if (errorRate < ERROR_RATE_THRESHOLD) continue;

    const finger1 = classifyKey(key1);
    const finger2 = classifyKey(key2);
    const fingerConflict = Boolean(
      finger1 && finger2 && finger1.finger === finger2.finger && finger1.hand === finger2.hand,
    );

    weakPairs.push({
      key1,
      key2,
      errorRate: Math.round(errorRate * 1000) / 1000,
      attempts,
      fingerConflict,
      recommendation: buildRecommendation(key1, key2, fingerConflict),
    });
  }

  return weakPairs.sort((a, b) => b.errorRate - a.errorRate);
}

function buildRecommendation(key1: string, key2: string, fingerConflict: boolean): string {
  if (fingerConflict) {
    return `"${key1}" and "${key2}" share the same finger — slow down and let the finger fully reset between them.`;
  }
  return `Mixing up "${key1}" and "${key2}" — try a short drill alternating just these two keys.`;
}
