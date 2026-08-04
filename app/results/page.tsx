// app/results/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Target,
  Zap,
  Hand,
  Clock,
  CheckCircle,
  Lock,
  RotateCcw,
} from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { useAudio } from "@/hooks/useAudioEngine";
import {
  getMetricsByUser,
  getWeakKeyPairs,
  getRecentKeystrokes,
  getDueSpacedRepetitionItems,
} from "@/db/metrics";
import { computeFingerHealthIndex } from "@/engines/adaptive/fingerHealthIndex";
import { STAGE_CONFIG, STAGE_ID_TO_ROUTE, type StageRouteId } from "@/engines/stage/stageConfig";
import type { SessionMetrics, WeakKeyPair, FingerHealthIndex } from "@/types/metrics";

const STAGE_ROUTES: StageRouteId[] = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function ResultsPage() {
  const router = useRouter();
  const { currentProfile } = useProfile();
  const { speak, playSound } = useAudio();

  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState<SessionMetrics[]>([]);
  const [weakKeys, setWeakKeys] = useState<WeakKeyPair[]>([]);
  const [fingerHealth, setFingerHealth] = useState<FingerHealthIndex | null>(null);
  const [dueReviewCount, setDueReviewCount] = useState(0);
  const [liveMessage, setLiveMessage] = useState("");

  const announce = (text: string, options?: Parameters<typeof speak>[1]) => {
    setLiveMessage(text);
    speak(text, options);
  };

  useEffect(() => {
    if (!currentProfile) {
      router.push("/");
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const [metrics, pairs, recentLogs, dueItems] = await Promise.all([
          getMetricsByUser(currentProfile.username),
          getWeakKeyPairs(currentProfile.username),
          getRecentKeystrokes(currentProfile.username, 500),
          getDueSpacedRepetitionItems(currentProfile.username),
        ]);
        if (cancelled) return;

        const sorted = [...metrics].sort((a, b) => b.timestamp.localeCompare(a.timestamp));
        setSessions(sorted);
        setWeakKeys(pairs.sort((a, b) => b.errorRate - a.errorRate).slice(0, 5));
        setDueReviewCount(dueItems.length);

        if (recentLogs.length > 0) {
          setFingerHealth(
            computeFingerHealthIndex(currentProfile.username, currentProfile.level, recentLogs),
          );
        }

        setLoading(false);

        // Spoken progress report — "on demand" per the app's design, read
        // automatically the moment the report finishes loading.
        const latest = sorted[0];
        const stageTitle =
          STAGE_CONFIG[STAGE_ID_TO_ROUTE[currentProfile.level]]?.title ?? currentProfile.level;
        const fluencyLine = currentProfile.fluencyScore
          ? `Your fluency score is ${Math.round(currentProfile.fluencyScore)} percent.`
          : "You don't have a fluency score yet — complete a session to get one.";
        const latestLine = latest
          ? `Your most recent session: ${latest.wpm} ${latest.stage.startsWith("Stage_1") || latest.stage.startsWith("Stage_2") || latest.stage.startsWith("Stage_3") || latest.stage.startsWith("Stage_4") || latest.stage.startsWith("Stage_5") ? "keystrokes per minute" : "words per minute"}, ${latest.accuracy} percent accuracy.`
          : "You haven't completed a session yet.";
        const weakLine =
          pairs.length > 0
            ? `You have ${pairs.length} key ${pairs.length === 1 ? "pair" : "pairs"} that need practice.`
            : "No trouble spots detected yet.";

        announce(
          `Progress report for ${currentProfile.username}. You're on ${stageTitle}. ${fluencyLine} ${latestLine} ${weakLine}`,
          { priority: "high" },
        );
      } catch (error) {
        console.error("Failed to load progress report:", error);
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProfile?.username]);

  // Re-read the spoken summary on demand.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "r" && !e.ctrlKey && !e.metaKey) {
        const latest = sessions[0];
        announce(
          latest
            ? `Most recent session: ${latest.wpm} on ${latest.stage.replace("_", " ")}, ${latest.accuracy} percent accuracy.`
            : "No sessions recorded yet.",
          { priority: "high" },
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessions]);

  if (!currentProfile) return null;

  const currentStageOrder = STAGE_ROUTES.findIndex(
    (route) => STAGE_CONFIG[route].stageId === currentProfile.level,
  );

  const speedLabelFor = (stageId: string) =>
    ["Stage_1", "Stage_2", "Stage_3", "Stage_4", "Stage_5"].includes(stageId) ? "KPM" : "WPM";

  const fingerLabel: Record<string, string> = {
    leftPinky: "Left pinky",
    leftRing: "Left ring",
    leftMiddle: "Left middle",
    leftIndex: "Left index",
    rightIndex: "Right index",
    rightMiddle: "Right middle",
    rightRing: "Right ring",
    rightPinky: "Right pinky",
  };

  return (
    <div className="min-h-screen py-8 animate-fade-in">
      <div aria-live="assertive" className="sr-only">
        {liveMessage}
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="text-accent hover:text-accent-hover flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <button
            onClick={() => {
              playSound("select");
              const latest = sessions[0];
              announce(
                latest
                  ? `Most recent session: ${latest.wpm} on ${latest.stage.replace("_", " ")}, ${latest.accuracy} percent accuracy.`
                  : "No sessions recorded yet.",
                { priority: "high" },
              );
            }}
            className="btn-secondary px-4 py-2 text-sm flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Repeat Summary (R)
          </button>
        </div>

        <div className="glass-card">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-accent" />
            <div>
              <h1 className="text-3xl font-bold">Progress Report</h1>
              <p className="text-text-muted">{currentProfile.username}</p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="glass-card text-center py-12 text-text-muted">Loading your progress...</div>
        ) : (
          <>
            {/* Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-accent mb-1">
                  <Target className="w-4 h-4" />
                  <span className="text-xs text-text-muted">Current Stage</span>
                </div>
                <div className="text-lg font-bold">
                  {STAGE_CONFIG[STAGE_ROUTES[currentStageOrder] ?? "1"]?.title.split(":")[0] ??
                    currentProfile.level}
                </div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-yellow-400 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs text-text-muted">Fluency Score</span>
                </div>
                <div className="text-2xl font-bold">
                  {currentProfile.fluencyScore ? `${Math.round(currentProfile.fluencyScore)}%` : "—"}
                </div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-success mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs text-text-muted">Sessions</span>
                </div>
                <div className="text-2xl font-bold">{sessions.length}</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-purple-400 mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs text-text-muted">Due for Review</span>
                </div>
                <div className="text-2xl font-bold">{dueReviewCount}</div>
              </div>
            </div>

            {/* Stage progress */}
            <div className="glass-card">
              <h2 className="text-lg font-semibold mb-4">Stage Progress</h2>
              <div className="space-y-2">
                {STAGE_ROUTES.map((route, index) => {
                  const cfg = STAGE_CONFIG[route];
                  const isComplete = index < currentStageOrder;
                  const isCurrent = index === currentStageOrder;
                  const isLocked = index > currentStageOrder;
                  return (
                    <div
                      key={route}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        isCurrent ? "bg-accent/20 border border-accent/30" : "bg-dark-secondary/50"
                      }`}>
                      {isComplete ? (
                        <CheckCircle className="w-5 h-5 text-success shrink-0" />
                      ) : isLocked ? (
                        <Lock className="w-5 h-5 text-text-muted shrink-0" />
                      ) : (
                        <cfg.icon className="w-5 h-5 text-accent shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className={isLocked ? "text-text-muted" : "text-text"}>{cfg.title}</div>
                      </div>
                      <div className="text-xs text-text-muted">
                        {cfg.levelUpTarget} {cfg.metric.toUpperCase()} · {cfg.levelUpAccuracy}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent sessions */}
            <div className="glass-card">
              <h2 className="text-lg font-semibold mb-4">Recent Sessions</h2>
              {sessions.length === 0 ? (
                <p className="text-text-muted text-sm">No sessions recorded yet — start practicing!</p>
              ) : (
                <div className="space-y-2">
                  {sessions.slice(0, 10).map((session, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-dark-secondary/50">
                      <div>
                        <div className="font-medium">{session.stage.replace("_", " ")}</div>
                        <div className="text-xs text-text-muted">
                          {new Date(session.timestamp).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <span>
                          {session.wpm} {speedLabelFor(session.stage)}
                        </span>
                        <span className="text-success">{session.accuracy}%</span>
                        <span className="text-yellow-400">{Math.round(session.fluencyScore)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Weak keys */}
            {weakKeys.length > 0 && (
              <div className="glass-card">
                <h2 className="text-lg font-semibold mb-4">Keys to Practice</h2>
                <div className="space-y-2">
                  {weakKeys.map((pair, i) => (
                    <div key={i} className="p-3 rounded-lg bg-dark-secondary/50">
                      <div className="font-medium mb-1">
                        &ldquo;{pair.key1}&rdquo; ↔ &ldquo;{pair.key2}&rdquo;{" "}
                        <span className="text-xs text-text-muted">
                          ({Math.round(pair.errorRate * 100)}% error rate)
                        </span>
                      </div>
                      <div className="text-sm text-text-muted">{pair.recommendation}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Finger health */}
            {fingerHealth && (
              <div className="glass-card">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Hand className="w-5 h-5 text-accent" />
                  Finger Health
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xs text-text-muted mb-1">Left Hand</div>
                    <div className="text-2xl font-bold text-accent">{fingerHealth.leftHand}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-text-muted mb-1">Right Hand</div>
                    <div className="text-2xl font-bold text-accent">{fingerHealth.rightHand}%</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                  {Object.entries(fingerHealth.byFinger).map(([finger, score]) => (
                    <div key={finger} className="bg-dark-secondary/50 rounded-lg p-2 text-center">
                      <div className="text-xs text-text-muted">{fingerLabel[finger] ?? finger}</div>
                      <div
                        className={`text-lg font-bold ${score < 70 ? "text-error" : "text-success"}`}>
                        {score}%
                      </div>
                    </div>
                  ))}
                </div>
                {fingerHealth.recommendations.length > 0 && (
                  <div className="space-y-1 text-sm text-text-muted">
                    {fingerHealth.recommendations.map((rec, i) => (
                      <div key={i}>• {rec}</div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

