// app/leaderboard/class/page.tsx
"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Users2, Crown, Medal, Award, LogOut, UserPlus } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { useAudio } from "@/hooks/useAudioEngine";
import { getDB } from "@/db/client";
import { rankEntries } from "@/engines/leaderboard/rankings";
import type { LeaderboardCacheRow, LeaderboardEntry } from "@/types/leaderboard";

export default function ClassLeaderboardPage() {
  const router = useRouter();
  const { currentProfile, updateProfile } = useProfile();
  const { speak, playSound } = useAudio();

  const [classCodeInput, setClassCodeInput] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [classmateCount, setClassmateCount] = useState(0);
  const [liveMessage, setLiveMessage] = useState("");

  const announce = (text: string, options?: Parameters<typeof speak>[1]) => {
    setLiveMessage(text);
    speak(text, options);
  };

  const loadClassLeaderboard = useCallback(async (classCode: string) => {
    setLoading(true);
    try {
      const db = await getDB();
      const [profiles, allMetrics] = await Promise.all([
        db.getAll("profiles"),
        db.getAll("metrics"),
      ]);

      const classmates = profiles.filter(
        (p) => p.classCode === classCode && p.leaderboardOptIn,
      );
      setClassmateCount(classmates.length);

      const rows: LeaderboardCacheRow[] = [];
      for (const profile of classmates) {
        const userMetrics = allMetrics.filter((m) => m.username === profile.username);
        const best = userMetrics.reduce<(typeof userMetrics)[number] | null>(
          (top, m) => (!top || m.fluencyScore > top.fluencyScore ? m : top),
          null,
        );
        if (best) {
          rows.push({
            username: profile.username,
            stage: best.stage,
            fluencyScore: best.fluencyScore,
            wpm: best.wpm,
            accuracy: best.accuracy,
            updatedAt: best.timestamp,
          });
        }
      }

      setEntries(rankEntries(rows, "overall"));
    } catch (error) {
      console.error("Failed to load class leaderboard:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!currentProfile) {
      router.push("/");
      return;
    }

    (async () => {
      if (currentProfile.classCode) {
        await loadClassLeaderboard(currentProfile.classCode);
        announce(`Class leaderboard for class ${currentProfile.classCode}.`, { priority: "high" });
      } else {
        setLoading(false);
        announce("You haven't joined a class yet. Enter a class code to see your classmates.", {
          priority: "high",
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProfile?.username, currentProfile?.classCode]);

  const handleJoinClass = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = classCodeInput.trim().toUpperCase();
    if (!code) {
      announce("Please enter a class code.", { priority: "high" });
      playSound("error");
      return;
    }
    setIsJoining(true);
    try {
      await updateProfile({ classCode: code });
      playSound("success");
      announce(`Joined class ${code}.`, { priority: "high" });
      setClassCodeInput("");
    } catch {
      announce("Couldn't join that class. Please try again.", { priority: "high" });
      playSound("error");
    } finally {
      setIsJoining(false);
    }
  };

  const handleLeaveClass = async () => {
    await updateProfile({ classCode: null });
    playSound("select");
    announce("Left the class.", { priority: "high" });
  };

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-text-muted">
            #{rank}
          </span>
        );
    }
  };

  if (!currentProfile) return null;

  return (
    <div className="min-h-screen py-8 animate-fade-in">
      <div aria-live="assertive" className="sr-only">
        {liveMessage}
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <button
          onClick={() => router.push("/leaderboard")}
          className="text-accent hover:text-accent-hover flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Leaderboard
        </button>

        <div className="glass-card">
          <div className="flex items-center gap-3">
            <Users2 className="w-8 h-8 text-accent" />
            <div>
              <h1 className="text-3xl font-bold">Class Leaderboard</h1>
              <p className="text-text-muted">
                {currentProfile.classCode
                  ? `Class ${currentProfile.classCode} · ${classmateCount} student${classmateCount === 1 ? "" : "s"}`
                  : "Join a class to compare progress with classmates"}
              </p>
            </div>
          </div>
        </div>

        {!currentProfile.classCode ? (
          <div className="glass-card">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-accent" />
              Join a Class
            </h2>
            <form onSubmit={handleJoinClass} className="space-y-4">
              <div>
                <label htmlFor="classCode" className="block text-sm font-medium text-text-muted mb-2">
                  Enter the class code your teacher gave you
                </label>
                <input
                  id="classCode"
                  type="text"
                  value={classCodeInput}
                  onChange={(e) => setClassCodeInput(e.target.value)}
                  className="input-field text-lg uppercase"
                  placeholder="e.g., MRSMITH1"
                  autoFocus
                />
              </div>
              <button type="submit" className="btn-primary" disabled={isJoining}>
                {isJoining ? "Joining..." : "Join Class"}
              </button>
            </form>
            <p className="text-xs text-text-muted mt-4">
              This ranks students who share the same class code on this device. Profiles must also
              have leaderboard participation turned on to appear.
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-end">
              <button
                onClick={handleLeaveClass}
                className="text-text-muted hover:text-error text-sm flex items-center gap-2 transition-colors">
                <LogOut className="w-4 h-4" />
                Leave class
              </button>
            </div>

            {loading ? (
              <div className="glass-card text-center py-12 text-text-muted">Loading class results...</div>
            ) : entries.length === 0 ? (
              <div className="glass-card text-center py-12">
                <Users2 className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <p className="text-text-muted text-lg">
                  No classmates with recorded sessions yet — check back once your class starts
                  practicing!
                </p>
              </div>
            ) : (
              <div className="glass-card">
                <div className="space-y-2">
                  {entries.map((entry) => {
                    const isCurrentUser = entry.username === currentProfile.username;
                    return (
                      <div
                        key={entry.username}
                        className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                          isCurrentUser
                            ? "bg-accent/20 border border-accent/30"
                            : "bg-dark-secondary/50 hover:bg-dark-secondary/80"
                        }`}>
                        <div className="flex items-center gap-4">
                          <div className="w-10 flex justify-center">{getMedalIcon(entry.rank)}</div>
                          <div>
                            <div
                              className={`font-semibold flex items-center gap-2 ${isCurrentUser ? "text-accent" : "text-text"}`}>
                              {entry.username}
                              {isCurrentUser && (
                                <span className="text-xs bg-accent/30 text-accent px-2 py-0.5 rounded-full">
                                  You
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-text-muted">
                              {entry.stage.replace("_", " ")} · {entry.wpm} · {entry.accuracy}% accuracy
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-accent flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {Math.round(entry.fluencyScore)}%
                          </div>
                          <div className="text-xs text-text-muted">Fluency Score</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
