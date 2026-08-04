import type { FluencyScoreWeights } from "@/types/leaderboard";

/** 60% accuracy / 40% speed — accuracy weighted higher since speed without
 *  accuracy isn't the goal for beginners (see functionality doc §1). */
export const DEFAULT_FLUENCY_WEIGHTS: FluencyScoreWeights = {
  accuracyWeight: 0.6,
  speedWeight: 0.4,
  wpmCapForNormalization: 60,
};

/**
 * Computes a single 0-100 fluency score from raw WPM + accuracy.
 * WPM is normalized against `wpmCapForNormalization` (anything at/above the
 * cap counts as "full speed marks") so a Stage 1 beginner's 15 WPM and a
 * Stage 4 student's 60 WPM are comparable on the same 0-1 speed scale.
 */
export function calculateFluencyScore(
  wpm: number,
  accuracy: number, // 0-100
  weights: FluencyScoreWeights = DEFAULT_FLUENCY_WEIGHTS,
): number {
  const normalizedSpeed = Math.min(wpm / weights.wpmCapForNormalization, 1);
  const normalizedAccuracy = Math.min(Math.max(accuracy, 0), 100) / 100;

  const score =
    normalizedAccuracy * weights.accuracyWeight * 100 + normalizedSpeed * weights.speedWeight * 100;

  return Math.round(score * 100) / 100;
}

/**
 * Overall (cross-stage) score weights later stages more heavily — harder
 * content earns more points per correct word, per the functionality doc.
 * `stageMultipliers` defaults to Stage_1..Stage_8 -> 1.0..2.75, continuing
 * the same +0.25-per-stage progression across all 8 stages (previously
 * only Stage_1-4 were defined, so Stage_5-8 silently fell back to the
 * `?? 1` default below and were scored as if no harder than Stage_1).
 */
const DEFAULT_STAGE_MULTIPLIERS: Record<string, number> = {
  Stage_1: 1.0,
  Stage_2: 1.25,
  Stage_3: 1.5,
  Stage_4: 1.75,
  Stage_5: 2.0,
  Stage_6: 2.25,
  Stage_7: 2.5,
  Stage_8: 2.75,
};

export function calculateOverallFluencyScore(
  stageScores: { stage: string; fluencyScore: number }[],
  stageMultipliers: Record<string, number> = DEFAULT_STAGE_MULTIPLIERS,
): number {
  if (stageScores.length === 0) return 0;

  const weightedSum = stageScores.reduce(
    (sum, { stage, fluencyScore }) => sum + fluencyScore * (stageMultipliers[stage] ?? 1),
    0,
  );
  const weightTotal = stageScores.reduce(
    (sum, { stage }) => sum + (stageMultipliers[stage] ?? 1),
    0,
  );

  return Math.round((weightedSum / weightTotal) * 100) / 100;
}
