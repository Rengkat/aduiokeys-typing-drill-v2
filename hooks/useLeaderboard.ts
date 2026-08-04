"use client";

import { useState, useEffect, useCallback } from "react";
import { getDB } from "@/db/client";
import { calculateFluencyScore } from "@/engines/leaderboard/fluencyScore";
import { findUserRank, comparePersonalBest } from "@/engines/leaderboard/rankings";
import type { LeaderboardEntry } from "@/types/leaderboard";

export function useLeaderboard(stage?: string) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadLeaderboard = useCallback(async () => {
    setIsLoading(true);
    try {
      const db = await getDB();
      const allMetrics = await db.getAll("metrics");
      const filtered = stage ? allMetrics.filter((m) => m.stage === stage) : allMetrics;

      // Only students who opted in appear on the leaderboard.
      const profiles = await db.getAll("profiles");
      const optedIn = new Set(
        profiles.filter((p) => p.leaderboardOptIn).map((p) => p.username),
      );

      // Group by username, keep each student's single best session.
      const bestByUser = new Map<string, (typeof filtered)[number]>();
      for (const metric of filtered) {
        if (!optedIn.has(metric.username)) continue;
        const existing = bestByUser.get(metric.username);
        if (!existing || metric.fluencyScore > existing.fluencyScore) {
          bestByUser.set(metric.username, metric);
        }
      }

      const ranked = Array.from(bestByUser.entries())
        .map(([username, metric]) => ({
          username,
          stage: metric.stage,
          wpm: metric.wpm,
          accuracy: metric.accuracy,
          fluencyScore: calculateFluencyScore(metric.wpm, metric.accuracy),
          rank: 0,
        }))
        .sort((a, b) => b.fluencyScore - a.fluencyScore || b.accuracy - a.accuracy)
        .map((entry, index) => ({ ...entry, rank: index + 1 }));

      setEntries(ranked);
    } catch (error) {
      console.error("Failed to load leaderboard:", error);
    } finally {
      setIsLoading(false);
    }
  }, [stage]);

  const getPersonalBest = useCallback(
    (username: string) => findUserRank(entries, username),
    [entries],
  );

  useEffect(() => {
    loadLeaderboard();
  }, [loadLeaderboard]);

  return {
    entries,
    isLoading,
    refresh: loadLeaderboard,
    getPersonalBest,
    calculateFluencyScore,
    comparePersonalBest,
  };
}
