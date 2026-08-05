import type { WeakKeyPair, SpacedRepetitionItem } from "@/types/metrics";

import stage1 from "@/data/dictionaries/stage1.json";
import stage2 from "@/data/dictionaries/stage2.json";
import stage3 from "@/data/dictionaries/stage3.json";
import stage4 from "@/data/dictionaries/stage4.json";
import stage5 from "@/data/dictionaries/stage5.json";
import stage6 from "@/data/dictionaries/stage6.json";
import stage7 from "@/data/dictionaries/stage7.json";
import stage8 from "@/data/dictionaries/stage8.json";
import ngrams from "@/data/ngrams.json";
import stageConfig from "@/data/stageConfig.json";

// Stage_1-5 are single-key drills (their dictionary files expose a `keys`
// array, not `words`), Stage_6-7 are real word lists, Stage_8 is short
// sentences, and Stage_9 is the longer "advanced"/"paragraphs" pool from
// the same stage8.json — that data already existed but was never wired to
// any stage, so those longer sentences never actually appeared in the app.
const DICTIONARIES: Record<string, string[]> = {
  Stage_1: stage1.keys,
  Stage_2: stage2.keys,
  Stage_3: stage3.keys,
  Stage_4: stage4.keys,
  Stage_5: stage5.keys,
  Stage_6: stage6.words,
  Stage_7: stage7.words,
  Stage_8: stage8.sentences.short,
  Stage_9: stage8.sentences.advanced,
};

// Which stages mix n-gram fragments into their drills — sourced from
// stageConfig.json's reinforcementData rather than hardcoded, since that's
// the single source of truth (previously hardcoded to "Stage_3", but the
// config specifies Stage_6/Stage_7).
const NGRAM_STAGES: string[] = stageConfig.reinforcementData.ngrams.appliesTo;

export interface LessonGeneratorParams {
  stage: string;
  weakKeyPairs?: WeakKeyPair[];
  dueSpacedRepetitionItems?: SpacedRepetitionItem[];
  wordCount?: number;
}

export interface GeneratedLesson {
  stage: string;
  words: string[];
  focusKeys: string[]; // the keys this lesson is deliberately drilling
  reason: string; // human/narrator-readable explanation, for transparency
}

/**
 * Builds a word list for a drill, prioritized in this order:
 *  1. Words containing letters that are due for spaced-repetition review.
 *  2. Words containing letters involved in a detected weak-key pair.
 *  3. Fresh dictionary words for the student's current stage (variety).
 * Stage_6 and Stage_7 additionally mix in n-gram fragments per the
 * "n-gram drilling" feature (see stageConfig.json's reinforcementData),
 * since single dictionary words alone don't drill digraphs/trigraphs enough.
 */
export function generateLesson(params: LessonGeneratorParams): GeneratedLesson {
  const { stage, weakKeyPairs = [], dueSpacedRepetitionItems = [], wordCount = 15 } = params;

  const dictionary = DICTIONARIES[stage] ?? DICTIONARIES.Stage_1;
  const focusKeys = Array.from(
    new Set([
      ...dueSpacedRepetitionItems.map((item) => item.key.toLowerCase()),
      ...weakKeyPairs.flatMap((pair) => [pair.key1.toLowerCase(), pair.key2.toLowerCase()]),
    ]),
  );

  const words: string[] = [];

  // 1 + 2: prioritize dictionary words that exercise a focus key.
  if (focusKeys.length > 0) {
    const focusWords = dictionary.filter((word) =>
      focusKeys.some((key) => word.toLowerCase().includes(key)),
    );
    words.push(...shuffle(focusWords).slice(0, Math.ceil(wordCount * 0.6)));
  }

  // Sprinkle in n-gram fragments alongside real words, for whichever
  // stages stageConfig.json designates (currently Stage_6 and Stage_7).
  if (NGRAM_STAGES.includes(stage) && words.length < wordCount) {
    const ngramPool = [...ngrams.digraphs, ...ngrams.trigraphs];
    const ngramCount = Math.min(3, wordCount - words.length);
    words.push(...shuffle(ngramPool).slice(0, ngramCount));
  }

  // 3: fill the remainder with fresh dictionary entries not already picked.
  // Word-mode dictionaries (Stage_6/7, 1000+ entries) will always have
  // enough unique entries. Key-drill dictionaries (Stage_1-5) can be as
  // small as 8 symbols, well under a typical wordCount — once those run
  // out, cycle back through the full set so the drill still repeats keys
  // rather than coming back short.
  let pool: string[] = [];
  while (words.length < wordCount && dictionary.length > 0) {
    if (pool.length === 0) {
      const fresh = dictionary.filter((w) => !words.includes(w));
      pool = shuffle(fresh.length > 0 ? fresh : dictionary);
    }
    words.push(pool.shift()!);
  }

  const reason =
    focusKeys.length > 0
      ? `Focusing on ${focusKeys.join(", ")} — due for review or recently mixed up.`
      : `Fresh ${stage.replace("_", " ")} vocabulary — no weak spots detected yet.`;

  return { stage, words: shuffle(words).slice(0, wordCount), focusKeys, reason };
}

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
