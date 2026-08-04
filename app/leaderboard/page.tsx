// app/leaderboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Trophy, Medal, Star, Users, Users2, Crown, Award } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { useAudio } from "@/hooks/useAudioEngine";

export default function LeaderboardPage() {
  const router = useRouter();
  const { profiles, currentProfile } = useProfile();
  const { speak, playSound } = useAudio();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    speak("Leaderboard. Ranking all profiles.", { priority: "high" });
    playSound("select");
  }, [speak, playSound]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-accent text-xl">Loading...</div>
      </div>
    );
  }

  // Opt-in only — a profile can disable leaderboard participation, and
  // shouldn't show up here if they have.
  const sortedProfiles = [...profiles]
    .filter((p) => p.leaderboardOptIn)
    .sort((a, b) => (b.fluencyScore || 0) - (a.fluencyScore || 0));

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

  return (
    <div className="min-h-screen py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-6">
        <button
          onClick={() => router.push("/")}
          className="text-accent hover:text-accent-hover flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="glass-card">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <div>
                <h1 className="text-3xl font-bold">Leaderboard</h1>
                <p className="text-text-muted">Ranking based on fluency score</p>
              </div>
            </div>
            <button
              onClick={() => {
                playSound("select");
                router.push("/leaderboard/class");
              }}
              className="btn-secondary px-4 py-2 text-sm flex items-center gap-2 shrink-0">
              <Users2 className="w-4 h-4" />
              Class Leaderboard
            </button>
          </div>
        </div>

        {profiles.length === 0 ? (
          <div className="glass-card text-center py-12">
            <Users className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <p className="text-text-muted text-lg">No profiles yet. Create one to get started!</p>
            <button onClick={() => router.push("/")} className="btn-primary mt-4">
              Create Profile
            </button>
          </div>
        ) : (
          <div className="glass-card">
            <div className="space-y-2">
              {sortedProfiles.map((profile, index) => {
                const isCurrentUser = profile.username === currentProfile?.username;
                const rank = index + 1;

                return (
                  <div
                    key={profile.username}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                      isCurrentUser
                        ? "bg-accent/20 border border-accent/30"
                        : "bg-dark-secondary/50 hover:bg-dark-secondary/80"
                    }`}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 flex justify-center">{getMedalIcon(rank)}</div>
                      <div>
                        <div
                          className={`font-semibold flex items-center gap-2 ${isCurrentUser ? "text-accent" : "text-text"}`}>
                          {profile.username}
                          {isCurrentUser && (
                            <span className="text-xs bg-accent/30 text-accent px-2 py-0.5 rounded-full">
                              You
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-text-muted flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {profile.level.replace("_", " ")}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-accent flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {profile.fluencyScore ? `${Math.round(profile.fluencyScore)}%` : "—"}
                      </div>
                      <div className="text-xs text-text-muted">Fluency Score</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
