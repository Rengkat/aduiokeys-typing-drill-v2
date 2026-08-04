"use client";

import { useState, useEffect, useRef, useCallback, use } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  RotateCw,
  CheckCircle,
  XCircle,
  Target,
  Clock,
  Award,
  Star,
} from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { useAudio } from "@/hooks/useAudioEngine";
import { useKeystrokeLogger } from "@/hooks/useKeystrokeLogger";
import { getDB } from "@/db/client";
import {
  getWeakKeyPairs,
  getDueSpacedRepetitionItems,
  getSpacedRepetitionItems,
  saveWeakKeyPairs,
  upsertSpacedRepetitionItem,
  getKeystrokesBySession,
  markStageComplete,
} from "@/db/metrics";
import { detectWeakKeyPairs } from "@/engines/adaptive/weakKeyDetector";
import { createSpacedRepetitionItem, scheduleReview } from "@/engines/adaptive/spacedRepetition";
import {
  STAGE_CONFIG,
  STAGE_ROUTE_TO_ID,
  getStageByRoute,
  getNextStageRoute,
  buildWordQueue,
  type QueueWord,
} from "@/engines/stage/stageConfig";
import { speakAndWait, cancelSpeech } from "@/engines/audio/speechSequencer";
import { playLongFormTrack, pickCelebrationTrack } from "@/engines/audio/longFormTracks";
import { getKeyPan } from "@/engines/audio/spatialPanner";
import { speakableChar, speakableWord } from "@/engines/audio/narrator";
import { useAudioStore } from "@/store/useAudioStore";

interface StagePageProps {
  // Next.js 15+/16 App Router passes params as a Promise, even to Client
  // Component pages. Destructuring it synchronously throws/warns at
  // runtime, so unwrap with React's use().
  params: Promise<{ stageId: string }>;
}

const ENCOURAGEMENTS = ["Nice!", "Great!", "Keep going!", "Well done!", "You've got it!"];

const STAGE_COLORS: Record<string, string> = {
  "1": "from-emerald-500 to-emerald-400",
  "2": "from-blue-500 to-blue-400",
  "3": "from-purple-500 to-purple-400",
  "4": "from-orange-500 to-orange-400",
  "5": "from-pink-500 to-pink-400",
  "6": "from-cyan-500 to-cyan-400",
  "7": "from-amber-500 to-amber-400",
  "8": "from-red-500 to-red-400",
};

export default function StagePage({ params }: StagePageProps) {
  const { stageId: routeParam } = use(params);
  const router = useRouter();
  const { currentProfile, updateProfile, isHydrated } = useProfile();
  const { speak, playSound } = useAudio();
  const { logKeystroke, sessionId, flushBuffer } = useKeystrokeLogger();

  const stage = getStageByRoute(routeParam);
  const speedLabel = stage.metric === "kpm" ? "KPM" : "WPM";

  const [wordQueue, setWordQueue] = useState<QueueWord[]>([]);
  const [queueReady, setQueueReady] = useState(false);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [speed, setSpeed] = useState(0); // KPM or WPM, depending on stage.metric
  const [accuracy, setAccuracy] = useState(0);
  const [timeLeft, setTimeLeft] = useState(stage.duration);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"correct" | "incorrect" | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [keystrokes, setKeystrokes] = useState<{ correct: number; total: number }>({
    correct: 0,
    total: 0,
  });
  const [sessionComplete, setSessionComplete] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");
  const [levelUpInfo, setLevelUpInfo] = useState<{ title: string } | null>(null);
  const [currentSentenceText, setCurrentSentenceText] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const wordListRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<globalThis.AudioContext | null>(null);

  // cooldown.
  const lastCompletedWordIndexRef = useRef(-1);
  const announcedTimeWarnings = useRef<Set<number>>(new Set());
  const wordCompleteCount = useRef(0);

  const currentWordIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);
  const keystrokesRef = useRef({ correct: 0, total: 0 });
  const speedRef = useRef(0);

  // Cancellation token for the async announcement chains (sentence -> word
  // -> letter). Bumped whenever the flow needs to abandon an in-flight
  // chain — restart, session end, unmount — so a stale chain can't finish
  // speaking over a fresh one.
  const speechTokenRef = useRef(0);
  // Skips the generic "new word" announcement effect exactly once, for
  // cases where the word-start announcement is already being handled
  // manually (initial mount, restart).
  const suppressNextWordAnnounceRef = useRef(true);

  const introInFlightRef = useRef<Promise<void>>(Promise.resolve());

  const currentItem = wordQueue[currentWordIndex];
  const currentWord = currentItem?.word || "";
  const totalWords = wordQueue.length;

  const setLiveMessageForced = useCallback((text: string) => {
    setLiveMessage("");
    requestAnimationFrame(() => setLiveMessage(text));
  }, []);

  const announce = (text: string, options?: Parameters<typeof speak>[1]) => {
    setLiveMessageForced(text);
    speak(text, options);
  };

  // Redirect if an unknown stage id slipped through — done in an effect,
  // not during render, since router.push is a side effect.
  useEffect(() => {
    if (!routeParam) router.push("/");
  }, [routeParam, router]);

  useEffect(() => {
    // currentProfile briefly starts out null on a hard refresh, while the
    // persisted profile store is still hydrating from IndexedDB — that was
    // being misread as "no profile" and bouncing the student straight back
    // to the home page mid-lesson. Only redirect once hydration has
    // actually finished and there's still no profile.
    if (isHydrated && !currentProfile) router.push("/");
  }, [currentProfile, isHydrated, router]);

  useEffect(() => {
    return () => {
      speechTokenRef.current += 1;
      cancelSpeech();
      flushBuffer(); // don't lose any buffered-but-unsaved keystrokes on unmount
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lazily create a dedicated AudioContext for panned feedback tones.
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Spatial feedback tone: correct = bright chime, incorrect = low thump,
  // panned left/right to match the hand that should have pressed the key.
  const playSpatialFeedback = (key: string, correct: boolean) => {
    try {
      const ctx = getAudioContext();
      const pan = ctx.createStereoPanner();
      pan.pan.value = getKeyPan(key);
      const gain = ctx.createGain();
      const osc = ctx.createOscillator();
      // These tones previously ignored the user's volume setting entirely —
      // raising the slider had no effect on them. Scale by the current
      // store volume so "louder" actually makes them louder.
      const userVolume = useAudioStore.getState().volume;

      osc.connect(gain);
      gain.connect(pan);
      pan.connect(ctx.destination);

      if (correct) {
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08);
        gain.gain.value = 0.35 * userVolume;
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      } else {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(180, ctx.currentTime);
        gain.gain.value = 0.35 * userVolume;
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      }

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + (correct ? 0.1 : 0.18));
    } catch {
      // Web Audio unsupported/blocked — fall back silently, the app-level
      // playSound() correct/incorrect tones below still cover feedback.
    }
  };

  // --- Announcement sequencing ---------------------------------------
  // The core "hear it, then strike it" loop, used identically by every
  // stage: on sentence-mode stages (Stage_8), the full sentence is read
  // once, on the first word of that sentence, before falling into the same
  // word -> letter flow that every stage uses. For single-character items
  // (Stage_1-5 key drills), the "word" and the "first letter" are the same
  // character, so the letter announcement is skipped to avoid saying it twice.
  const announceItemStart = useCallback(
    async (item: QueueWord, token: number) => {
      let resolveIntro!: () => void;
      introInFlightRef.current = new Promise<void>((resolve) => {
        resolveIntro = resolve;
      });

      try {
        if (item.sentenceIntro) {
          setCurrentSentenceText(item.sentenceIntro);
          setLiveMessageForced(item.sentenceIntro);
          await speakAndWait(item.sentenceIntro, { priority: "high" });
          if (speechTokenRef.current !== token) return;
        }

        setLiveMessageForced(item.word);
        await speakAndWait(speakableWord(item.word), { priority: "high" });
        if (speechTokenRef.current !== token) return;
      } finally {
        // Resolve even on early return/abandonment, or any waiting letter
        // announcement would hang forever.
        resolveIntro();
      }

      if (item.word.length > 1) {
        const firstLetter = item.word[0];
        if (firstLetter) {
          setLiveMessageForced(firstLetter);
          await speakAndWait(speakableChar(firstLetter), { priority: "high" });
        }
      }
    },
    [setLiveMessageForced],
  );

  // Fetch the student's weak keys + due spaced-repetition items, build the
  // real lesson queue from them, then kick off the mount announcement chain.
  // Runs once per stage visit.
  useEffect(() => {
    if (!currentProfile) return;
    let cancelled = false;

    (async () => {
      let weakKeyPairs: Awaited<ReturnType<typeof getWeakKeyPairs>> = [];
      let dueItems: Awaited<ReturnType<typeof getDueSpacedRepetitionItems>> = [];
      try {
        [weakKeyPairs, dueItems] = await Promise.all([
          getWeakKeyPairs(currentProfile.username),
          getDueSpacedRepetitionItems(currentProfile.username),
        ]);
      } catch (error) {
        console.error("Failed to load adaptive data, using an unpersonalized lesson:", error);
      }
      if (cancelled) return;

      const queue = buildWordQueue(stage, {
        weakKeyPairs,
        dueSpacedRepetitionItems: dueItems,
      });
      setWordQueue(queue);
      setQueueReady(true);

      const focusWhenMounted = (attemptsLeft = 20) => {
        if (inputRef.current) {
          requestAnimationFrame(() => inputRef.current?.focus());
        } else if (attemptsLeft > 0) {
          requestAnimationFrame(() => focusWhenMounted(attemptsLeft - 1));
        }
      };
      focusWhenMounted();
      const token = ++speechTokenRef.current;

      await speakAndWait(`Welcome to ${stage.title}. ${stage.description}.`, { priority: "high" });
      if (speechTokenRef.current !== token || cancelled) return;

      await speakAndWait(
        `${queue.length} ${queue.length === 1 ? "item" : "items"} to practice. Press Escape any time to pause.`,
      );
      if (speechTokenRef.current !== token || cancelled) return;

      const first = queue[0];
      if (first) await announceItemStart(first, token);
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage.stageId, currentProfile?.username]);

  // Every time we land on a new word (after the very first, which the load
  // effect above already handles), announce it: sentence-if-new, the word,
  // then its first letter.
  useEffect(() => {
    if (!queueReady) return;
    if (suppressNextWordAnnounceRef.current) {
      suppressNextWordAnnounceRef.current = false;
      return;
    }
    const item = wordQueue[currentWordIndex];
    if (!item) return;
    const token = ++speechTokenRef.current;
    announceItemStart(item, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWordIndex, queueReady]);

  // Every time the student advances a letter within the current word,
  // announce the next letter to strike. currentCharIndex === 0 is skipped
  // because that case is already covered by announceItemStart above (word
  // start already announces the first letter).
  useEffect(() => {
    if (currentCharIndex === 0) return;
    const letter = currentWord[currentCharIndex];
    if (!letter) return; // word just completed — handled by word-complete flow
    const token = ++speechTokenRef.current;
    const introWait = introInFlightRef.current;
    (async () => {
      // Never interrupt the word's (or sentence's) own introduction — let
      // it finish playing in full first.
      await introWait;
      // If several keystrokes landed while we were waiting, only the most
      // recent one should still announce; older ones are stale by now.
      if (speechTokenRef.current !== token) return;
      setLiveMessageForced(letter);
      await speakAndWait(speakableChar(letter), { priority: "high" });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCharIndex]);

  // Timer logic
  useEffect(() => {
    if (isActive && !isPaused && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev: any) => {
          const next = prev - 1;

          if ([30, 10, 5, 3, 2, 1].includes(next) && !announcedTimeWarnings.current.has(next)) {
            announcedTimeWarnings.current.add(next);
            announce(next <= 5 ? `${next}` : `${next} seconds left`);
          }

          if (prev <= 1) {
            clearInterval(timerRef.current!);
            finishSession();
            return 0;
          }
          return next;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, isPaused, timeLeft]);

  // Calculate live speed (KPM for key-drill stages, WPM for word/sentence
  // stages) and accuracy. Using WPM's "correct/5/minutes" formula for a
  // single-key stage would badly understate speed (each keystroke only
  // counts as 1/5 of a "word"), which is why keys-mode stages score on raw
  // keystrokes-per-minute instead.
  useEffect(() => {
    if (startTime && keystrokes.total > 0) {
      const elapsed = (Date.now() - startTime) / 60000 || 0.001;
      const speedCalc =
        stage.metric === "kpm" ? keystrokes.correct / elapsed : keystrokes.correct / 5 / elapsed;
      const roundedSpeed = Math.round(speedCalc);
      setSpeed(roundedSpeed);
      speedRef.current = roundedSpeed;
      setAccuracy(Math.round((keystrokes.correct / keystrokes.total) * 100));
    }
  }, [keystrokes, startTime, stage.metric]);

  // Scroll to current word (visual convenience only — irrelevant for
  // screen-reader users, who get the spoken announcement instead)
  useEffect(() => {
    if (wordListRef.current) {
      const wordElements = wordListRef.current.querySelectorAll(".word-item");
      wordElements[currentWordIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentWordIndex]);

  // After a session ends, feed its keystrokes back into the adaptive engine:
  // recompute this student's weak key pairs, and update (or create) a
  // spaced-repetition item for every key they practiced this session — this
  // is what makes the *next* session's buildWordQueue() call actually
  // personalized, closing the loop the adaptive engine was built for but
  // never previously connected to.
  const updateAdaptiveData = async (username: string) => {
    try {
      const sessionLogs = await getKeystrokesBySession(sessionId);
      if (sessionLogs.length === 0) return;

      const weakPairs = detectWeakKeyPairs(sessionLogs);
      await saveWeakKeyPairs(username, weakPairs);

      const statsByKey = new Map<string, { correct: number; total: number }>();
      for (const log of sessionLogs) {
        const key = log.expectedKey.toLowerCase();
        const entry = statsByKey.get(key) ?? { correct: 0, total: 0 };
        entry.total += 1;
        if (log.isCorrect) entry.correct += 1;
        statsByKey.set(key, entry);
      }

      const existingItems = await getSpacedRepetitionItems(username);
      for (const [key, stats] of statsByKey.entries()) {
        const wasMostlyCorrect = stats.correct / stats.total >= 0.7;
        const existing = existingItems.find((item) => item.key === key);
        const base = existing ?? createSpacedRepetitionItem(username, key, stage.stageId);
        const updated = scheduleReview(base, wasMostlyCorrect);
        await upsertSpacedRepetitionItem(updated);
      }
    } catch (error) {
      console.error("Failed to update adaptive data:", error);
    }
  };

  const finishSession = async () => {
    setIsActive(false);
    speechTokenRef.current += 1; // abandon any pending letter/word announcement
    await flushBuffer(); // make sure every keystroke from this session is persisted

    // Read from the refs, not the closed-over state values — this function
    // is frequently invoked from a setTimeout scheduled by a prior render's
    // handleKeyDown/handleWordComplete, whose `keystrokes`/`speed`/index
    // variables are frozen snapshots from before the final keystroke.
    const finalKeystrokes = keystrokesRef.current;
    const finalWordIndex = currentWordIndexRef.current;
    const finalCharIndex = currentCharIndexRef.current;
    const finalSpeed = speedRef.current;
    const finalWord = wordQueue[finalWordIndex]?.word || "";

    const finalAccuracy =
      finalKeystrokes.total > 0
        ? Math.round((finalKeystrokes.correct / finalKeystrokes.total) * 100)
        : 0;
    // Fluency here is scored relative to *this stage's own target* (so it's
    // meaningful whether the stage is measured in KPM or WPM), not against a
    // fixed speed cap — that fixed-cap version is what the leaderboard uses
    // separately, for fair cross-stage ranking (see engines/leaderboard).
    const speedRatio = Math.min(finalSpeed / stage.levelUpTarget, 1);
    const fluencyScore = Math.round(finalAccuracy * 0.6 + speedRatio * 100 * 0.4);

    const clearedAllWords = finalWordIndex >= totalWords - 1 && finalCharIndex >= finalWord.length;
    const meetsThreshold =
      finalAccuracy >= stage.levelUpAccuracy && finalSpeed >= stage.levelUpTarget;
    const eligibleToLevelUp =
      clearedAllWords && meetsThreshold && currentProfile?.level === stage.stageId;

    let handled = false;

    try {
      if (currentProfile) {
        const db = await getDB();
        await db.add("metrics", {
          username: currentProfile.username,
          stage: stage.stageId,
          timestamp: new Date().toISOString(),
          wpm: finalSpeed,
          accuracy: finalAccuracy,
          fluencyScore,
          totalKeystrokes: finalKeystrokes.total,
          correctKeystrokes: finalKeystrokes.correct,
          errors: finalKeystrokes.total - finalKeystrokes.correct,
          duration: stage.duration - timeLeft,
        });

        await updateAdaptiveData(currentProfile.username);

        if (fluencyScore > (currentProfile.fluencyScore || 0)) {
          await updateProfile({ fluencyScore });
        }

        if (eligibleToLevelUp) {
          await markStageComplete(currentProfile.username, stage.stageId);
          const nextRoute = getNextStageRoute(stage.id);

          if (nextRoute) {
            const nextStageId = STAGE_ROUTE_TO_ID[nextRoute];
            const nextTitle = STAGE_CONFIG[nextRoute].title;
            await updateProfile({ level: nextStageId });
            setLevelUpInfo({ title: nextTitle });
            setSessionComplete(true);
            handled = true;

            const track = pickCelebrationTrack();
            await playLongFormTrack(track);
            announce(`${stage.celebration} Congratulations! You are moving to ${nextTitle}.`, {
              priority: "high",
            });
            return; // skip the generic session-complete announcement below
          }

          // Already on the final stage and just cleared it.
          setLevelUpInfo({ title: "the final stage" });
          setSessionComplete(true);
          handled = true;
          const track = pickCelebrationTrack();
          await playLongFormTrack(track);
          announce(
            `${stage.celebration} Congratulations, ${currentProfile.username}! You've completed every stage of AudioKeys.`,
            { priority: "high" },
          );
          return;
        }
      }
    } catch (error) {
      console.error("Failed to save metrics:", error);
    } finally {
      if (!handled) {
        // Covers both "didn't hit the target this time" (student needs to
        // try again) and "profile/save step threw" cases — either way the
        // student gets told what happened and can act on it, instead of
        // silence.
        setSessionComplete(true);
        announce(
          eligibleToLevelUp
            ? `Session complete! You typed ${finalSpeed} ${speedLabel} with ${finalAccuracy} percent accuracy.`
            : `Time's up. You typed ${finalSpeed} ${speedLabel} with ${finalAccuracy} percent accuracy. ` +
                `That's below this stage's target of ${stage.levelUpTarget} ${speedLabel} at ${stage.levelUpAccuracy} percent accuracy, ` +
                `so let's try this stage again.`,
          { priority: "high" },
        );
        playSound("levelup");
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (sessionComplete || !queueReady) return;

    // Escape pauses/resumes.
    if (e.key === "Escape") {
      e.preventDefault();
      togglePause();
      return;
    }

    // F2 repeats the current word on demand
    if (e.key === "F2") {
      e.preventDefault();
      announce(`Current word: ${speakableWord(currentWord)}.`, { priority: "high" });
      return;
    }

    if (!isActive && !startTime) {
      setIsActive(true);
      setStartTime(Date.now());
      announce("Started!", { priority: "high" });
    }

    const rawKey = e.key;
    const expectedChar = currentWord[currentCharIndex];

    if (rawKey === "Backspace") {
      e.preventDefault();
      if (currentCharIndexRef.current > 0) {
        const next = currentCharIndexRef.current - 1;
        currentCharIndexRef.current = next;
        setCurrentCharIndex(next);
        setInputValue((prev) => prev.slice(0, -1));
        playSound("keypress");
      }
      return;
    }

    if (rawKey === "Enter" || rawKey === " ") {
      e.preventDefault();
      if (currentCharIndexRef.current === currentWord.length) {
        handleWordComplete();
      }
      return;
    }

    if (rawKey.length > 1) return; // ignore Shift, Tab, arrow keys, etc.

    // Guard against processing input for a word that's already been
    // completed. Reads the ref (always current) rather than the possibly
    // stale `currentCharIndex` state variable closed over by this render.
    if (currentCharIndexRef.current >= currentWord.length) return;

    e.preventDefault();

    // Every key this curriculum ever expects is lowercase, so normalize
    // letter case before comparing. Without this, a student with Caps Lock
    // on (easy to trigger by touch, especially without being able to see
    // an indicator light) would type the physically correct key and have
    // it recorded — and announced — as wrong every single time.
    const key = rawKey.length === 1 ? rawKey.toLowerCase() : rawKey;
    const isKeyCorrect = key === expectedChar;

    logKeystroke(key, expectedChar, isKeyCorrect);

    setKeystrokes((prev) => {
      const next = {
        correct: prev.correct + (isKeyCorrect ? 1 : 0),
        total: prev.total + 1,
      };
      keystrokesRef.current = next;
      return next;
    });

    playSpatialFeedback(key, isKeyCorrect);

    if (isKeyCorrect) {
      playSound("correct");
      setFeedbackType("correct");
    } else {
      playSound("incorrect");
      setFeedbackType("incorrect");

      const correctionIntroWait = introInFlightRef.current;
      const correctionToken = ++speechTokenRef.current;
      (async () => {
        await correctionIntroWait;
        if (speechTokenRef.current !== correctionToken) return;
        announce(`You pressed ${speakableChar(key)}, expected ${speakableChar(expectedChar)}.`, {
          priority: "high",
        });
      })();
    }

    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 150);

    setInputValue((prev) => prev + key);
    const nextCharIndex = currentCharIndexRef.current + 1;
    currentCharIndexRef.current = nextCharIndex;
    setCurrentCharIndex(nextCharIndex);

    if (nextCharIndex === currentWord.length) {
      handleWordComplete();
    }
  };

  const handleWordComplete = () => {
    const wordIndex = currentWordIndexRef.current;
    if (lastCompletedWordIndexRef.current === wordIndex) return; // this word already advanced
    lastCompletedWordIndexRef.current = wordIndex;

    if (wordIndex < totalWords - 1) {
      wordCompleteCount.current += 1;
      const nextWordIndex = wordIndex + 1;
      currentWordIndexRef.current = nextWordIndex;
      setCurrentWordIndex(nextWordIndex);
      setCurrentCharIndex(0);
      currentCharIndexRef.current = 0;
      setInputValue("");
      playSound("select");

      if (wordCompleteCount.current % 3 === 0) {
        const phrase = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
        setTimeout(() => announce(phrase), 50);
      }
    } else {
      finishSession();
    }
  };

  const handleRestart = () => {
    speechTokenRef.current += 1;
    cancelSpeech();
    suppressNextWordAnnounceRef.current = true;

    setCurrentWordIndex(0);
    currentWordIndexRef.current = 0;
    setCurrentCharIndex(0);
    currentCharIndexRef.current = 0;
    setInputValue("");
    setSpeed(0);
    speedRef.current = 0;
    setAccuracy(0);
    setTimeLeft(stage.duration);
    setIsActive(false);
    setIsPaused(false);
    setStartTime(null);
    setKeystrokes({ correct: 0, total: 0 });
    keystrokesRef.current = { correct: 0, total: 0 };
    setSessionComplete(false);
    setLevelUpInfo(null);
    setShowFeedback(false);
    setFeedbackType(null);
    lastCompletedWordIndexRef.current = -1;
    announcedTimeWarnings.current.clear();
    wordCompleteCount.current = 0;

    requestAnimationFrame(() => inputRef.current?.focus());

    const token = speechTokenRef.current;
    (async () => {
      await speakAndWait("Practice restarted.", { priority: "high" });
      if (speechTokenRef.current !== token) return;
      const first = wordQueue[0];
      if (first) await announceItemStart(first, token);
    })();
  };

  const togglePause = () => {
    setIsPaused((prev) => {
      const next = !prev;
      announce(next ? "Practice paused. Press Escape to resume." : "Resuming practice.", {
        priority: "high",
      });
      return next;
    });
  };

  const getProgress = () =>
    totalWords > 0 ? Math.round((currentWordIndex / totalWords) * 100) : 0;

  const getTimeDisplay = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const getStageColor = () => STAGE_COLORS[stage.id] || STAGE_COLORS["1"];

  if (!currentProfile) return null;

  if (!queueReady) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        role="application"
        aria-roledescription="typing practice"
        aria-label={`${stage.title} typing practice, loading.`}>
        <div aria-live="assertive" className="sr-only">
          Preparing your lesson.
        </div>
        <div className="text-accent text-xl animate-pulse">Preparing your lesson...</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-8 animate-fade-in"
      role="application"
      aria-roledescription="typing practice"
      aria-label={`${stage.title} typing practice. Type the letters as they are announced — every key goes straight to the lesson, no Enter required.`}>
      <div aria-live="assertive" className="sr-only">
        {liveMessage}
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="text-accent hover:text-accent-hover flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={togglePause}
              className="btn-secondary px-4 py-2 text-sm"
              disabled={sessionComplete || !isActive}
              aria-label={isPaused ? "Resume practice" : "Pause practice"}>
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={handleRestart}
              className="btn-secondary px-4 py-2 text-sm flex items-center gap-2">
              <RotateCw className="w-4 h-4" />
              Restart
            </button>
          </div>
        </div>

        {/* Stage Info */}
        <div className="glass-card">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl bg-gradient-to-r ${getStageColor()}`}>
              {stage.icon && <stage.icon className="w-8 h-8 text-white" />}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{stage.title}</h1>
              <p className="text-text-muted">{stage.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-text-muted">Player</div>
              <div className="font-semibold text-accent">{currentProfile.username}</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-accent">
              <Target className="w-4 h-4" />
              <span className="text-xs text-text-muted">{speedLabel}</span>
            </div>
            <div className="text-2xl font-bold">{speed}</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-success">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs text-text-muted">Accuracy</span>
            </div>
            <div className="text-2xl font-bold">{accuracy}%</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-yellow-400">
              <Star className="w-4 h-4" />
              <span className="text-xs text-text-muted">Progress</span>
            </div>
            <div className="text-2xl font-bold">{getProgress()}%</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-text-muted">
              <Clock className="w-4 h-4" />
              <span className="text-xs text-text-muted">Time Left</span>
            </div>
            <div className="text-2xl font-bold font-mono">{getTimeDisplay()}</div>
          </div>
        </div>

        {/* Sentence context (Stage_8 only) */}
        {stage.mode === "sentences" && currentSentenceText && (
          <div className="glass-card">
            <div className="text-sm text-text-muted mb-1">Current sentence</div>
            <div className="text-lg text-text">{currentSentenceText}</div>
          </div>
        )}

        {/* Word Display */}
        <div className="glass-card">
          <div className="mb-4">
            <div className="text-sm text-text-muted mb-2">
              Type the highlighted word
              <span className="ml-2 text-xs">
                ({currentWordIndex + 1}/{totalWords})
              </span>
            </div>

            <div className="bg-dark rounded-xl p-6 mb-4">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-mono tracking-wider flex items-center justify-center gap-1 flex-wrap">
                  {currentWord.split("").map((char, index) => (
                    <span
                      key={index}
                      className={`transition-all duration-200 ${
                        index < currentCharIndex
                          ? index < currentCharIndex - 1
                            ? "text-success"
                            : "text-accent"
                          : "text-text-muted"
                      } ${index === currentCharIndex ? "animate-pulse-glow" : ""}`}>
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={() => {}}
              onKeyDown={handleKeyDown}
              onBlur={() => {
                // If focus slips off this field mid-session — some
                // screen-reader/browser combos will do this on their own,
                // e.g. after an aria-live region updates — keystrokes stop
                // reaching handleKeyDown entirely and nothing the student
                // types does anything until they manually refocus (often by
                // pressing Enter, which is exactly the "stuck until I press
                // Enter" symptom). Reclaim focus automatically rather than
                // requiring a manual re-focus action.
                if (!sessionComplete && !isPaused) {
                  requestAnimationFrame(() => inputRef.current?.focus());
                }
              }}
              className="sr-only"
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label={`Type the word: ${currentWord}`}
              disabled={sessionComplete}
            />

            <div className="w-full h-2 bg-dark-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-purple-400 transition-all duration-300"
                style={{ width: `${getProgress()}%` }}
              />
            </div>

            <div
              ref={wordListRef}
              className="mt-4 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-dark-secondary">
              <div className="flex flex-wrap gap-2">
                {wordQueue.map((item, index) => (
                  <span
                    key={index}
                    className={`word-item text-sm px-2 py-1 rounded transition-all ${
                      index === currentWordIndex
                        ? "bg-accent text-white"
                        : index < currentWordIndex
                          ? "text-success"
                          : "text-text-muted"
                    }`}>
                    {item.word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {showFeedback && (
            <div
              className={`text-center transition-all duration-200 ${
                feedbackType === "correct" ? "text-success" : "text-error"
              }`}
              aria-hidden="true">
              {feedbackType === "correct" ? (
                <CheckCircle className="w-8 h-8 mx-auto animate-bounce" />
              ) : (
                <XCircle className="w-8 h-8 mx-auto animate-bounce" />
              )}
            </div>
          )}
        </div>

        {/* Session Complete */}
        {sessionComplete && (
          <div className="glass-card bg-success/10 border-success/20">
            <div className="text-center">
              <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">
                {levelUpInfo ? "Stage Complete!" : "Session Complete!"}
              </h2>
              <p className="text-text-muted mb-4">
                {levelUpInfo
                  ? `You're moving on to ${levelUpInfo.title}!`
                  : `Great job, ${currentProfile.username}!`}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
                <div className="bg-dark/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent">{speed}</div>
                  <div className="text-xs text-text-muted">{speedLabel}</div>
                </div>
                <div className="bg-dark/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-success">{accuracy}%</div>
                  <div className="text-xs text-text-muted">Accuracy</div>
                </div>
                <div className="bg-dark/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">
                    {Math.round(
                      accuracy * 0.6 + Math.min(speed / stage.levelUpTarget, 1) * 100 * 0.4,
                    )}
                    %
                  </div>
                  <div className="text-xs text-text-muted">Fluency Score</div>
                </div>
                <div className="bg-dark/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-text">{keystrokes.total}</div>
                  <div className="text-xs text-text-muted">Keystrokes</div>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                {levelUpInfo && getNextStageRoute(stage.id) ? (
                  <button
                    onClick={() => router.push(`/stage/${getNextStageRoute(stage.id)}`)}
                    className="btn-primary">
                    Start {levelUpInfo.title}
                  </button>
                ) : (
                  <button onClick={handleRestart} className="btn-primary">
                    Practice Again
                  </button>
                )}
                <button onClick={() => router.push("/")} className="btn-secondary">
                  Go Home
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Keyboard shortcuts */}
        <div className="text-center text-xs text-text-muted pt-4 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-4">
            <span>
              <kbd className="px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10">
                Space/Enter
              </kbd>
              <span className="ml-1">Next word</span>
            </span>
            <span>
              <kbd className="px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10">
                Backspace
              </kbd>
              <span className="ml-1">Delete character</span>
            </span>
            <span>
              <kbd className="px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10">
                Escape
              </kbd>
              <span className="ml-1">Pause/Resume</span>
            </span>
            <span>
              <kbd className="px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10">
                F2
              </kbd>
              <span className="ml-1">Repeat word</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
