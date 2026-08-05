// engines/stage/stageConfig.ts
import type { LucideIcon } from "lucide-react";
import { Sparkles, Star, Target, Trophy, Hash, Type, Quote, BookOpen, Library } from "lucide-react";
import type { StageId } from "@/types/profile";
import type { WeakKeyPair, SpacedRepetitionItem } from "@/types/metrics";
import { generateLesson } from "@/engines/adaptive/lessonGenerator";
import rawStageConfig from "@/data/stageConfig.json";

export type StageRouteId = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

/** Route segment ("1".."9") <-> profile-level StageId ("Stage_1".."Stage_9"). */
export const STAGE_ROUTE_TO_ID: Record<StageRouteId, StageId> = {
  "1": "Stage_1",
  "2": "Stage_2",
  "3": "Stage_3",
  "4": "Stage_4",
  "5": "Stage_5",
  "6": "Stage_6",
  "7": "Stage_7",
  "8": "Stage_8",
  "9": "Stage_9",
};

export const STAGE_ID_TO_ROUTE: Record<StageId, StageRouteId> = {
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

const STAGE_ICONS: Record<StageRouteId, LucideIcon> = {
  "1": Sparkles,
  "2": Star,
  "3": Target,
  "4": Trophy,
  "5": Hash,
  "6": Type,
  "7": Quote,
  "8": BookOpen,
  "9": Library,
};

// Session length climbs with stage difficulty. This is a pacing/UI decision,
// not curriculum content, so it lives here rather than in stageConfig.json.
// Lower stages (1-2) are single-letter drills, so nearly every second of the
// session is "wait for the announcement, then react" — that overhead eats a
// much bigger share of a short timer than it does once students are typing
// whole words/sentences at the higher stages. Durations below give the
// biggest relief where the announcement-to-timer ratio is worst and taper
// off higher up.
const STAGE_DURATIONS: Record<StageRouteId, number> = {
  "1": 90,
  "2": 90,
  "3": 105,
  "4": 105,
  "5": 120,
  "6": 120,
  "7": 135,
  "8": 150,
  "9": 180,
};

export interface StageConfig {
  id: StageRouteId;
  stageId: StageId;
  title: string;
  description: string;
  /** Spoken the moment this stage's target is cleared — from stageConfig.json. */
  celebration: string;
  icon: LucideIcon;
  duration: number; // seconds
  mode: "keys" | "words" | "sentences";
  /** Which speed metric this stage is scored on. Stages 1-5 are single-key
   *  drills — WPM (a words-per-5-chars formula) is meaningless for them, so
   *  they're scored on raw keystrokes-per-minute instead. */
  metric: "kpm" | "wpm";
  levelUpAccuracy: number; // 0-100
  levelUpTarget: number; // KPM or WPM threshold, per `metric`
}

// Built directly from data/stageConfig.json — the single source of truth for
// titles, descriptions, modes, targets, and celebration copy. Previously this
// object hardcoded its own (wrong) values here instead.
export const STAGE_CONFIG: Record<StageRouteId, StageConfig> = Object.fromEntries(
  rawStageConfig.stages.map((s) => {
    const routeId = String(s.order) as StageRouteId;
    const config: StageConfig = {
      id: routeId,
      stageId: s.id as StageId,
      title: s.title,
      description: s.description,
      celebration: s.celebration,
      icon: STAGE_ICONS[routeId],
      duration: STAGE_DURATIONS[routeId],
      mode: s.mode as "keys" | "words" | "sentences",
      metric: s.metric as "kpm" | "wpm",
      levelUpAccuracy: s.targetAccuracy,
      levelUpTarget: s.targetValue,
    };
    return [routeId, config];
  }),
) as Record<StageRouteId, StageConfig>;

export function getStageByRoute(routeId: string): StageConfig {
  return STAGE_CONFIG[routeId as StageRouteId] ?? STAGE_CONFIG["1"];
}

export function getNextStageRoute(routeId: StageRouteId): StageRouteId | null {
  const next = String(Number(routeId) + 1);
  return next in STAGE_CONFIG ? (next as StageRouteId) : null;
}

export interface QueueWord {
  word: string;
  /** Present only on the first word of a new sentence (sentence-mode
   *  stages) — the full sentence text to announce before the word. */
  sentenceIntro?: string;
  sentenceIndex?: number;
}

export interface BuildQueueOptions {
  /** Detected trouble spots — when supplied, the generator biases word/key
   *  selection toward the student's actual weak points instead of picking
   *  evenly at random. Both come from engines/adaptive + db/metrics.ts. */
  weakKeyPairs?: WeakKeyPair[];
  dueSpacedRepetitionItems?: SpacedRepetitionItem[];
  itemCount?: number;
}

/**
 * Builds the ordered list of items a student types through this session,
 * sourced from the real curriculum data via generateLesson() — not a
 * hardcoded per-stage list.
 *
 * Word-mode/keys-mode stages: one queue entry per key or word.
 * Sentence-mode stages (Stage_8): generateLesson returns full sentences —
 * each is read in full once (sentenceIntro on its first word), then
 * flattened into individual words so the student types through them one at
 * a time, same word -> letter loop as every other stage.
 */
export function buildWordQueue(stage: StageConfig, options: BuildQueueOptions = {}): QueueWord[] {
  const { weakKeyPairs = [], dueSpacedRepetitionItems = [], itemCount } = options;

  // Key drills repeat a small alphabet many times over a session; word
  // stages want more variety; sentences are long, so fewer of them.
  const defaultItemCount = stage.mode === "keys" ? 40 : stage.mode === "words" ? 25 : 8;

  const lesson = generateLesson({
    stage: stage.stageId,
    weakKeyPairs,
    dueSpacedRepetitionItems,
    wordCount: itemCount ?? defaultItemCount,
  });

  if (stage.mode !== "sentences") {
    return lesson.words.map((word) => ({ word }));
  }

  const queue: QueueWord[] = [];
  lesson.words.forEach((sentence, sentenceIndex) => {
    const words = sentence.trim().split(/\s+/);
    words.forEach((word, i) => {
      queue.push({
        word,
        sentenceIntro: i === 0 ? sentence : undefined,
        sentenceIndex,
      });
    });
  });
  return queue;
}
