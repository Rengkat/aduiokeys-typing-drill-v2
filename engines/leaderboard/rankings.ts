// engines/leaderboard/rankings.ts
import type { LeaderboardEntry, LeaderboardCacheRow, LeaderboardScope } from "@/types/leaderboard";

/**
 * Sorts cached leaderboard rows into ranked entries. Ties are broken by
 * accuracy (the design principle in §1 favors accuracy over raw speed).
 */
export function rankEntries(
  rows: LeaderboardCacheRow[],
  scope: LeaderboardScope,
  stage?: string,
): LeaderboardEntry[] {
  const filtered =
    scope === "per-stage" && stage ? rows.filter((r) => r.stage === stage) : rows;

  // For "overall", collapse to one row per user (their best fluency score).
  const deduped =
    scope === "overall"
      ? Array.from(
          filtered
            .reduce((map, row) => {
              const existing = map.get(row.username);
              if (!existing || row.fluencyScore > existing.fluencyScore) {
                map.set(row.username, row);
              }
              return map;
            }, new Map<string, LeaderboardCacheRow>())
            .values(),
        )
      : filtered;

  const sorted = [...deduped].sort(
    (a, b) => b.fluencyScore - a.fluencyScore || b.accuracy - a.accuracy,
  );

  return sorted.map((row, index) => ({
    username: row.username,
    stage: row.stage,
    wpm: row.wpm,
    accuracy: row.accuracy,
    fluencyScore: row.fluencyScore,
    rank: index + 1,
  }));
}

export function findUserRank(entries: LeaderboardEntry[], username: string): LeaderboardEntry | null {
  return entries.find((e) => e.username === username) ?? null;
}

/** "You beat your last WPM by 4" — positive framing per design principle §1(C). */
export function comparePersonalBest(
  current: number,
  previousBest: number | null,
): { isNewBest: boolean; delta: number } {
  if (previousBest === null) return { isNewBest: true, delta: current };
  return { isNewBest: current > previousBest, delta: current - previousBest };
}
