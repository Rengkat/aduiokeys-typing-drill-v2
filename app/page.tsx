"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Keyboard,
  BarChart3,
  UserPlus,
  Users,
  Trophy,
  Star,
  Target,
  Sparkles,
  Hash,
  Type,
  Quote,
  BookOpen,
  Library,
  X,
} from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { useAudio } from "@/hooks/useAudioEngine";
import { playLongFormTrack } from "@/engines/audio/longFormTracks";
import { speakAndWait } from "@/engines/audio/speechSequencer";

const STAGE_ROUTE: Record<string, string> = {
  Stage_1: "1",
  Stage_2: "2",
  Stage_3: "3",
  Stage_4: "4",
  Stage_5: "5",
  Stage_6: "6",
  Stage_7: "7",
  Stage_8: "8",
  Stage_9: "9",
};

const STAGE_ORDER = [
  "Stage_1",
  "Stage_2",
  "Stage_3",
  "Stage_4",
  "Stage_5",
  "Stage_6",
  "Stage_7",
  "Stage_8",
  "Stage_9",
];

// Every keyboard command available on the home page, spoken in full right
// after the welcome greeting — before the student does anything else — so
// a blind student never has to hunt around to discover what's available.
// Mirrors the pattern used for SHORTCUT_HELP on the stage page, and is
// kept as a single source of truth so it can't drift from the on-screen
// ShortcutBar legend.
const buildHomeShortcutHelp = (hasProfile: boolean) =>
  "Keyboard commands: " +
  (hasProfile ? "Control Shift C to continue practice. " : "") +
  "Control Shift R to view your progress report. " +
  "Control Shift L to open the leaderboard. " +
  (hasProfile ? "Control Shift N to create a new profile. " : "") +
  "Tab to move between buttons, and Enter or Space to activate the one you're on.";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateProfile, setShowCreateProfile] = useState(false);
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");
  const { createProfile, profiles, switchProfile, currentProfile } = useProfile();
  const { speak, playSound, screenReaderMode, setScreenReaderMode, availableVoices, voiceURI, setVoiceURI } =
    useAudio();
  const router = useRouter();
  const usernameInputRef = useRef<HTMLInputElement>(null);

  const announce = (text: string, options?: Parameters<typeof speak>[1]) => {
    setLiveMessage(text);
    speak(text, options);
  };

  // Same idea as announce() above, but for sequential, *awaited* chains
  // (welcome greeting -> keyboard commands) where each step genuinely
  // needs to finish — for a real screen reader as well as the app's own
  // voice — before the next one starts. Without this, the shortcuts
  // announcement could fire on top of (or before) the welcome greeting,
  // or the student could start tabbing around before either has finished.
  const announceAndWait = async (text: string, options?: Parameters<typeof speak>[1]) => {
    setLiveMessage(text);
    await speakAndWait(text, options);
  };

  const hoverTick = () => playSound("hover");

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Landing sequence: the welcome track plays to completion, then the
  // spoken greeting follows (with the profile's name, for a returning
  // learner). Guarded by hasWelcomed so this only ever runs once per load.
  useEffect(() => {
    if (!hydrated || hasWelcomed) return;

    if (currentProfile) {
      setHasWelcomed(true);
      const fluency = currentProfile.fluencyScore
        ? `Your fluency score is ${Math.round(currentProfile.fluencyScore)} percent.`
        : "You're just getting started — no fluency score yet.";
      const stageLabel = currentProfile.level.replace("_", " ");

      (async () => {
        await playLongFormTrack("welcome");
        // Keyboard commands are announced immediately after the greeting —
        // before the student has any chance to start tabbing/navigating —
        // not left to the silent, visual-only ShortcutBar at the bottom.
        await announceAndWait(
          `Welcome, ${currentProfile.username}! You're on ${stageLabel}, targeting ${currentProfile.wpmTarget} words per minute. ${fluency}`,
          { priority: "high" },
        );
        await announceAndWait(buildHomeShortcutHelp(true), { priority: "high" });
      })();
    } else if (profiles.length === 0) {
      setHasWelcomed(true);
      (async () => {
        await playLongFormTrack("welcome");
        await announceAndWait(
          "Welcome to AudioKeys! Let's create your first profile and start learning to type by ear.",
          { priority: "high" },
        );
        await announceAndWait(
          "Type your username into the field and press Enter to continue.",
          { priority: "high" },
        );
      })();
    } else if (profiles.length > 0 && !currentProfile) {
      setHasWelcomed(true);
      playSound("whoosh");
      (async () => {
        await announceAndWait("Welcome back! Please select your profile to continue.", {
          priority: "high",
        });
        await announceAndWait(buildHomeShortcutHelp(false), { priority: "high" });
      })();
    }
  }, [currentProfile, profiles.length, hasWelcomed, hydrated]);

  const handleContinuePractice = () => {
    if (!currentProfile) return;
    playSound("whoosh");
    const stagePath = STAGE_ROUTE[currentProfile.level] ?? "1";
    announce(`Continuing ${currentProfile.level.replace("_", " ")} practice.`, {
      priority: "high",
    });
    router.push(`/stage/${stagePath}`);
  };

  useEffect(() => {
    if (!hydrated) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showCreateProfile) {
        e.preventDefault();
        setShowCreateProfile(false);
        playSound("select");
        announce("Cancelled.", { priority: "high" });
        return;
      }

      if (!e.ctrlKey || !e.shiftKey) return;

      if (e.key.toLowerCase() === "c" && currentProfile) {
        e.preventDefault();
        handleContinuePractice();
      } else if (e.key.toLowerCase() === "r") {
        e.preventDefault();
        if (currentProfile) {
          playSound("whoosh");
          router.push("/results");
        } else {
          announce("Please select a profile first to view progress.", { priority: "high" });
          playSound("error");
        }
      } else if (e.key.toLowerCase() === "l") {
        e.preventDefault();
        playSound("whoosh");
        router.push("/leaderboard");
      } else if (e.key.toLowerCase() === "n" && currentProfile) {
        e.preventDefault();
        setShowCreateProfile(true);
        playSound("select");
        announce("Creating new profile.", { priority: "high" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, currentProfile, hydrated, showCreateProfile, handleContinuePractice]);

  useEffect(() => {
    if (showCreateProfile) {
      usernameInputRef.current?.focus();
    }
  }, [showCreateProfile]);

  const handleCreateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      announce("Please enter a username.", { priority: "high" });
      playSound("error");
      return;
    }

    const isFirstEverProfile = profiles.length === 0;
    setIsLoading(true);
    try {
      const createdUsername = username.trim();
      await createProfile(createdUsername);
      playSound(isFirstEverProfile ? "welcome" : "success");
      setUsername("");
      setShowCreateProfile(false);
      // Greeting first, then the keyboard commands — announced before the
      // student has a chance to start navigating, same as every other
      // "arriving on the home page" moment.
      (async () => {
        await announceAndWait(`Welcome, ${createdUsername}! Your typing journey begins now.`, {
          priority: "high",
        });
        await announceAndWait(buildHomeShortcutHelp(true), { priority: "high" });
      })();
    } catch {
      announce("There was an error creating your profile. Please try again.", {
        priority: "high",
      });
      playSound("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileSelect = (profileName: string) => {
    switchProfile(profileName);
    playSound("select");
    (async () => {
      await announceAndWait(`Switched to ${profileName}.`, { priority: "high" });
      await announceAndWait(buildHomeShortcutHelp(true), { priority: "high" });
    })();
  };

  const handleViewProgress = () => {
    if (!currentProfile) return;
    playSound("whoosh");
    announce(`Opening progress report for ${currentProfile.username}.`, { priority: "high" });
    router.push("/results");
  };

  const handleOpenLeaderboard = () => {
    playSound("whoosh");
    announce("Opening leaderboard.", { priority: "high" });
    router.push("/leaderboard");
  };

  const handleNewProfileClick = () => {
    playSound("select");
    setShowCreateProfile(true);
    announce("Creating new profile.", { priority: "high" });
  };

  const handleCloseCreateProfile = () => {
    setShowCreateProfile(false);
    playSound("select");
  };

  const getStageIcon = (level: string) => {
    const props = { className: "w-8 h-8 text-accent" };
    switch (level) {
      case "Stage_1":
        return <Sparkles {...props} />;
      case "Stage_2":
        return <Star {...props} />;
      case "Stage_3":
        return <Target {...props} />;
      case "Stage_4":
        return <Trophy {...props} />;
      case "Stage_5":
        return <Hash {...props} />;
      case "Stage_6":
        return <Type {...props} />;
      case "Stage_7":
        return <Quote {...props} />;
      case "Stage_8":
        return <BookOpen {...props} />;
      case "Stage_9":
        return <Library {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const getStageDisplay = (level: string) => level.replace("_", " ");

  const getFluencyScore = () =>
    currentProfile?.fluencyScore ? `${Math.round(currentProfile.fluencyScore)}%` : "—";

  const getWPMTarget = () => currentProfile?.wpmTarget || 25;

  if (!hydrated) {
    return (
      <div className="h-dvh flex items-center justify-center bg-dark">
        <div className="flex flex-col items-center gap-4">
          <Keyboard className="w-12 h-12 text-accent animate-pulse" />
          <div className="text-accent text-xl font-medium tracking-wide">Loading AudioKeys...</div>
        </div>
      </div>
    );
  }

  const LiveRegion = (
    <div aria-live="assertive" className="sr-only">
      {liveMessage}
    </div>
  );

  // Toggling this mutes AudioKeys' own spoken narration (speechSynthesis)
  // and leaves narration entirely to the person's screen reader, which
  // reads the same aria-live regions the app already updates. Without
  // this, a screen reader user hears every announcement twice — once in
  // this app's voice, once in JAWS/NVDA/VoiceOver's voice, talking over
  // each other. Keyboard-operable: a native checkbox, focusable and
  // toggled with Space, no mouse needed.
  //
  // Screen reader mode is the DEFAULT (see loadScreenReaderMode in the
  // store) — most AudioKeys students are blind and already running
  // JAWS/NVDA/VoiceOver, so staying quiet and deferring to it is the safe
  // out-of-the-box behavior. This checkbox is the opt-OUT: unchecked
  // (default) means screen reader mode stays on; checking it is an
  // explicit "I don't have a screen reader, use AudioKeys' own voice"
  // — for a sighted student, teacher, or anyone trying the app without
  // assistive tech running.
  const handleUseAppVoiceToggle = () => {
    // Simply flip current state. (A previous version of this computed
    // `useAppVoice = !screenReaderMode` then `next = !useAppVoice` —
    // those two negations cancel out, so it always set screenReaderMode
    // back to itself. That's the exact bug where the checkbox looked
    // checked and refused to uncheck: clicking it did compute a "next"
    // value, it just always came out equal to the current one.)
    const nextScreenReaderMode = !screenReaderMode;
    setScreenReaderMode(nextScreenReaderMode);
    playSound("select");
    setLiveMessage(
      nextScreenReaderMode
        ? "Screen reader mode on. AudioKeys will stay quiet and let your screen reader announce everything."
        : "AudioKeys' own voice is on. It will speak announcements itself.",
    );
  };

  const ScreenReaderModeToggle = (
    <label
      className="shrink-0 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-dark-secondary border border-white/10 text-sm cursor-pointer focus-within:ring-2 focus-within:ring-accent"
      htmlFor="use-app-voice-toggle">
      <span className="text-text-muted">
        I don&apos;t use a screen reader — use AudioKeys&apos; own voice instead of JAWS, NVDA, or VoiceOver
      </span>
      <input
        id="use-app-voice-toggle"
        type="checkbox"
        checked={!screenReaderMode}
        onChange={handleUseAppVoiceToggle}
        className="w-5 h-5 shrink-0 accent-accent"
      />
    </label>
  );

  // Only relevant while AudioKeys is doing its own narration — in screen
  // reader mode speak() is muted entirely, so picking a voice for it would
  // have no audible effect and would just be a confusing dead control.
  const VoicePicker = !screenReaderMode && (
    <label
      className="shrink-0 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-dark-secondary border border-white/10 text-sm"
      htmlFor="voice-picker">
      <span className="text-text-muted">AudioKeys&apos; voice</span>
      <select
        id="voice-picker"
        value={voiceURI ?? ""}
        onChange={(e) => {
          const uri = e.target.value || null;
          setVoiceURI(uri);
          playSound("select");
          // Preview immediately so the person hears the new voice without
          // needing to trigger a lesson event first.
          speak("This is your new voice.", { priority: "high" });
        }}
        className="bg-dark border border-white/10 rounded-lg px-2 py-1.5 text-text max-w-[55%]">
        <option value="">Auto (device default)</option>
        {availableVoices
          .filter((v) => v.lang.startsWith("en"))
          .map((v) => (
            <option key={v.voiceURI} value={v.voiceURI}>
              {v.name} ({v.lang}
              {v.localService ? "" : ", online"})
            </option>
          ))}
      </select>
    </label>
  );

  const CreateProfileDialog = showCreateProfile && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-profile-title">
      <div className="glass-card w-full max-w-md animate-fade-in border border-white/15">
        <div className="flex items-center justify-between mb-4">
          <h2
            id="create-profile-title"
            className="text-lg font-semibold flex items-center gap-2 text-white">
            <UserPlus className="w-5 h-5 text-accent" />
            {profiles.length === 0 ? "Create Your First Profile" : "Create New Profile"}
          </h2>
          {profiles.length > 0 && (
            <button
              type="button"
              onClick={handleCloseCreateProfile}
              onMouseEnter={hoverTick}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Cancel — close dialog">
              <X className="w-5 h-5 text-text-muted" />
            </button>
          )}
        </div>
        <form onSubmit={handleCreateProfile} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-text-muted mb-2">
              Enter your username
            </label>
            <input
              ref={usernameInputRef}
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field text-lg"
              placeholder="e.g., alexander"
              aria-describedby="username-hint"
              autoFocus
            />
            <p id="username-hint" className="text-xs text-text-muted mt-1.5">
              Press Enter to continue, Escape to cancel
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="btn-primary flex-1 py-3 text-base flex items-center justify-center gap-2"
              disabled={isLoading}>
              {isLoading ? (
                "Creating..."
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Start Learning
                </>
              )}
            </button>
            {profiles.length > 0 && (
              <button
                type="button"
                onClick={handleCloseCreateProfile}
                className="btn-secondary px-5">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );

  const ShortcutBar = (
    <div className="shrink-0 text-center text-xs text-text-muted pt-3 border-t border-white/10">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {currentProfile && (
          <span className="flex items-center gap-2">
            <kbd className="px-2 py-0.5 bg-white/10 rounded text-text font-mono text-xs border border-white/10 shadow-inner">
              Ctrl+Shift+C
            </kbd>
            <span className="flex items-center gap-1">
              <Keyboard className="w-3.5 h-3.5 text-accent" /> Continue Practice
            </span>
          </span>
        )}
        <span className="flex items-center gap-2">
          <kbd className="px-2 py-0.5 bg-white/10 rounded text-text font-mono text-xs border border-white/10 shadow-inner">
            Ctrl+Shift+R
          </kbd>
          <span className="flex items-center gap-1">
            <BarChart3 className="w-3.5 h-3.5 text-accent" /> Progress
          </span>
        </span>
        <span className="flex items-center gap-2">
          <kbd className="px-2 py-0.5 bg-white/10 rounded text-text font-mono text-xs border border-white/10 shadow-inner">
            Ctrl+Shift+L
          </kbd>
          <span className="flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" /> Leaderboard
          </span>
        </span>
        {currentProfile && (
          <span className="flex items-center gap-2">
            <kbd className="px-2 py-0.5 bg-white/10 rounded text-text font-mono text-xs border border-white/10 shadow-inner">
              Ctrl+Shift+N
            </kbd>
            <span className="flex items-center gap-1">
              <UserPlus className="w-3.5 h-3.5 text-success" /> New Profile
            </span>
          </span>
        )}
      </div>
    </div>
  );

  // ============================================
  // RETURNING USER — dashboard layout
  // ============================================
  if (currentProfile) {
    const stageIndex = STAGE_ORDER.indexOf(currentProfile.level);

    return (
      <div className="min-h-dvh w-full flex flex-col p-4 md:p-6 gap-3 md:gap-4 bg-dark">
        {LiveRegion}
        {CreateProfileDialog}

        {ScreenReaderModeToggle}
        {VoicePicker}

        {/* Zone 1 — User Header Hero */}
        <div className="relative overflow-hidden glass-card p-4 md:p-6 shrink-0">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-3 bg-accent/10 border border-accent/20 rounded-2xl animate-float">
                  {getStageIcon(currentProfile.level)}
                </div>
                <div>
                  <p className="text-xs text-accent font-bold uppercase tracking-widest">
                    Welcome Back
                  </p>
                  <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-white via-text to-accent bg-clip-text text-transparent">
                    {currentProfile.username}
                  </h1>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="px-3 py-1 bg-accent/15 border border-accent/30 text-accent rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  {getStageDisplay(currentProfile.level)}
                </span>
                <span className="px-3 py-1 bg-success/15 border border-success/30 text-success rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5" />
                  {currentProfile.fluencyScore
                    ? `${Math.round(currentProfile.fluencyScore)}% Fluency`
                    : "New Learner"}
                </span>
              </div>
            </div>

            {/* Stage Progress Bar */}
            <div
              className="mt-4"
              role="img"
              aria-label={`Stage ${stageIndex + 1} of ${STAGE_ORDER.length}`}>
              <div className="flex gap-1.5">
                {STAGE_ORDER.map((stage, i) => (
                  <div
                    key={stage}
                    className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                      i <= stageIndex
                        ? "bg-accent shadow-sm shadow-accent/50"
                        : "bg-white/5 border border-white/10"
                    }`}
                  />
                ))}
              </div>
              <div className="text-[11px] text-text-muted mt-1.5 font-medium">
                Stage {stageIndex + 1} of {STAGE_ORDER.length}
              </div>
            </div>

            {/* Top Level Stats */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="stat-card group">
                <div className="text-2xl md:text-3xl font-bold text-accent group-hover:scale-105 transition-transform">
                  {getFluencyScore()}
                </div>
                <div className="text-xs text-text-muted mt-1 flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 text-accent" />
                  Fluency
                </div>
              </div>

              <div className="stat-card group">
                <div className="text-2xl md:text-3xl font-bold text-success group-hover:scale-105 transition-transform">
                  {getWPMTarget()}
                </div>
                <div className="text-xs text-text-muted mt-1 flex items-center justify-center gap-1">
                  <Target className="w-3 h-3 text-success" />
                  Target WPM
                </div>
              </div>

              <button
                type="button"
                onClick={handleOpenLeaderboard}
                onMouseEnter={hoverTick}
                className="stat-card group cursor-pointer focus-visible:ring-2 focus-visible:ring-accent outline-none"
                aria-label="Open leaderboard">
                <Trophy className="w-7 h-7 md:w-8 md:h-8 mx-auto text-yellow-400 group-hover:scale-110 group-hover:-rotate-6 transition-transform" />
                <div className="text-xs text-text-muted mt-1 font-medium">Leaderboard</div>
              </button>
            </div>
          </div>
        </div>

        {/* Zone 2 — Main Practice CTA */}
        <button
          onClick={handleContinuePractice}
          onMouseEnter={hoverTick}
          className="shrink-0 btn-primary w-full py-4 md:py-5 text-lg md:text-xl font-bold flex items-center justify-center gap-3 border border-white/10 group"
          aria-label="Continue practicing">
          <Keyboard className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-6 transition-transform" />
          Continue Practice
        </button>

        {/* Zone 3 & 4 — Bottom Container with fixed internal scrolling */}
        <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {/* Card A: Recent Progress */}
          <div className="glass-card flex flex-col justify-between p-4 md:p-5 overflow-hidden">
            <div className="flex flex-col justify-center flex-1">
              <h2 className="shrink-0 text-xs font-bold text-text-muted uppercase tracking-wider mb-2 md:mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-accent" />
                Recent Progress
              </h2>
              <div className="space-y-1.5 md:space-y-2">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-text-muted text-sm">Current stage</span>
                  <span className="text-text font-semibold">
                    {getStageDisplay(currentProfile.level)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-text-muted text-sm">Fluency score</span>
                  <span className="text-text font-semibold">{getFluencyScore()}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-text-muted text-sm">Target speed</span>
                  <span className="text-text font-semibold">{getWPMTarget()} WPM</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleViewProgress}
              onMouseEnter={hoverTick}
              className="btn-secondary w-full mt-2 md:mt-3 py-2 text-sm flex items-center justify-center gap-2 shrink-0"
              aria-label="View full progress report">
              <BarChart3 className="w-4 h-4 text-accent" />
              View Full Report
            </button>
          </div>

          {/* Card B: Switch Profile / New Learner */}
          <div className="glass-card flex flex-col justify-between p-4 md:p-5 overflow-hidden">
            <div className="flex flex-col min-h-0 flex-1 justify-between">
              {profiles.length > 1 && (
                <div className="flex flex-col min-h-0 mb-2">
                  <h2 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2 shrink-0">
                    <Users className="w-4 h-4 text-accent" />
                    Switch Profile
                  </h2>
                  <div className="space-y-1.5 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-1">
                    {profiles
                      .filter((p) => p.username !== currentProfile.username)
                      .map((profile) => (
                        <button
                          key={profile.username}
                          onClick={() => handleProfileSelect(profile.username)}
                          onMouseEnter={hoverTick}
                          className="w-full p-2 rounded-xl text-left bg-dark-secondary/80 hover:bg-white/10 border border-white/10 transition-colors flex justify-between items-center">
                          <div className="font-medium text-sm text-text">{profile.username}</div>
                          <div className="text-xs text-text-muted">
                            {getStageDisplay(profile.level)}
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              )}

              <div className="shrink-0 mt-auto">
                <h2 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                  <UserPlus className="w-4 h-4 text-accent" />
                  New Learner?
                </h2>
                <button
                  onClick={handleNewProfileClick}
                  onMouseEnter={hoverTick}
                  className="btn-secondary w-full py-2 text-sm flex items-center justify-center gap-2 border-dashed hover:border-accent/40"
                  aria-label="Create new profile">
                  <UserPlus className="w-4 h-4" />
                  Create New Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {ShortcutBar}
      </div>
    );
  }

  // ============================================
  // NO ACTIVE PROFILE — onboarding/selection
  // ============================================
  return (
    <div className="min-h-dvh w-full flex flex-col items-center justify-center p-4 md:p-6 bg-dark">
      {LiveRegion}
      {CreateProfileDialog}

      <div className="w-full max-w-xl flex flex-col min-h-0 gap-6">
        <div className="shrink-0 text-center space-y-3" role="banner">
          <div className="flex justify-center">
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-3xl animate-float">
              <Keyboard className="w-12 h-12 md:w-16 md:h-16 text-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-text to-accent bg-clip-text text-transparent">
            AudioKeys
          </h1>
          <p className="text-text-muted text-base md:text-lg">Learn to type by ear</p>
        </div>

        {ScreenReaderModeToggle}
        {VoicePicker}

        {profiles.length > 0 ? (
          <div className="glass-card flex flex-col min-h-0 p-5 md:p-6">
            <h2
              className="shrink-0 text-base font-semibold mb-3 flex items-center gap-2 text-white"
              id="profile-list-title">
              <Users className="w-5 h-5 text-accent" />
              Select Your Profile
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto min-h-0 pr-1"
              role="list"
              aria-labelledby="profile-list-title">
              {profiles.map((profile) => (
                <button
                  key={profile.username}
                  onClick={() => handleProfileSelect(profile.username)}
                  onMouseEnter={hoverTick}
                  className="p-3.5 rounded-xl bg-dark-secondary hover:bg-white/10 border border-white/10 text-left transition-all hover:scale-[1.02] hover:border-accent/40 group"
                  role="listitem">
                  <div className="font-semibold text-base group-hover:text-accent transition-colors">
                    {profile.username}
                  </div>
                  <div className="text-xs text-text-muted">{getStageDisplay(profile.level)}</div>
                </button>
              ))}
            </div>
            <div className="shrink-0 mt-4 pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  playSound("select");
                  setShowCreateProfile(true);
                }}
                onMouseEnter={hoverTick}
                className="text-accent hover:text-accent-hover text-sm font-medium flex items-center gap-2 transition-colors">
                <UserPlus className="w-4 h-4" />
                Create new profile instead
              </button>
            </div>
          </div>
        ) : (
          <div className="glass-card shrink-0 p-5 md:p-6">
            <h2 className="text-base font-semibold mb-3 flex items-center gap-2 text-white">
              <UserPlus className="w-5 h-5 text-accent" />
              Create Your First Profile
            </h2>
            <form onSubmit={handleCreateProfile} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-text-muted mb-1.5">
                  Enter your username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-field text-base"
                  placeholder="e.g., alexander"
                  aria-describedby="username-hint"
                  autoFocus
                />
                <p id="username-hint" className="text-xs text-text-muted mt-1.5">
                  Press Enter to continue
                </p>
              </div>
              <button
                type="submit"
                className="btn-primary w-full py-3.5 text-base flex items-center justify-center gap-2"
                disabled={isLoading}>
                {isLoading ? (
                  "Creating..."
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Start Learning
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {ShortcutBar}
      </div>
    </div>
  );
}
