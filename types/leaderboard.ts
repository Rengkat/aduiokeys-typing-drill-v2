// types/leaderboard.ts

/** A single ranked row in either a per-stage or overall leaderboard. */
export interface LeaderboardEntry {
  username: string;
  stage: string;
  wpm: number;
  accuracy: number; // 0-100
  fluencyScore: number; // 0-100, weighted accuracy + speed
  rank: number;
}

/** Scope for a leaderboard query. "overall" ignores stage filtering. */
export type LeaderboardScope = "overall" | "per-stage";

/** Config used by engines/leaderboard/fluencyScore.ts */
export interface FluencyScoreWeights {
  accuracyWeight: number; // e.g. 0.6
  speedWeight: number; // e.g. 40 (applied to normalized wpm/60 capped at 1)
  wpmCapForNormalization: number; // e.g. 60
}

/** Row shape persisted in the IndexedDB "leaderboard" cache store (see DBProvider). */
export interface LeaderboardCacheRow {
  id?: number;
  username: string;
  stage: string;
  fluencyScore: number;
  wpm: number;
  accuracy: number;
  updatedAt: string;
}
