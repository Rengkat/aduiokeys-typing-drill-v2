// engines/adaptive/spacedRepetition.ts
import type { SpacedRepetitionItem } from "@/types/metrics";

const MIN_EASE_FACTOR = 1.3;
const DEFAULT_EASE_FACTOR = 2.5;

export function createSpacedRepetitionItem(
  username: string,
  key: string,
  stage: string,
): SpacedRepetitionItem {
  const now = new Date().toISOString();
  return {
    username,
    key,
    stage,
    easeFactor: DEFAULT_EASE_FACTOR,
    interval: 0,
    lastPracticed: now,
    nextReview: now, // due immediately the first time
    repetitionCount: 0,
    correctCount: 0,
    incorrectCount: 0,
    consecCorrect: 0,
    consecIncorrect: 0,
  };
}

/**
 * Standard SM-2 algorithm, adapted for a binary correct/incorrect signal
 * (rather than SM-2's usual 0-5 quality score) since that's what a typing
 * drill naturally produces. Treated as quality=5 on correct, quality=2 on
 * incorrect (a "near miss", not a total blank — the student was attempting
 * the right key, just missing it).
 */
export function scheduleReview(item: SpacedRepetitionItem, wasCorrect: boolean): SpacedRepetitionItem {
  const quality = wasCorrect ? 5 : 2;
  const now = new Date();

  let { easeFactor, interval, repetitionCount, correctCount, incorrectCount, consecCorrect, consecIncorrect } =
    item;

  easeFactor = Math.max(
    MIN_EASE_FACTOR,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
  );

  if (wasCorrect) {
    correctCount += 1;
    consecCorrect += 1;
    consecIncorrect = 0;

    if (repetitionCount === 0) {
      interval = 1;
    } else if (repetitionCount === 1) {
      interval = 3;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitionCount += 1;
  } else {
    incorrectCount += 1;
    consecIncorrect += 1;
    consecCorrect = 0;
    // A miss resets the interval — review again soon rather than in days.
    repetitionCount = 0;
    interval = 0; // due again today
  }

  const nextReview = new Date(now);
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    ...item,
    easeFactor: Math.round(easeFactor * 100) / 100,
    interval,
    repetitionCount,
    correctCount,
    incorrectCount,
    consecCorrect,
    consecIncorrect,
    lastPracticed: now.toISOString(),
    nextReview: nextReview.toISOString(),
  };
}

export function isDue(item: SpacedRepetitionItem, asOf: Date = new Date()): boolean {
  return new Date(item.nextReview).getTime() <= asOf.getTime();
}
