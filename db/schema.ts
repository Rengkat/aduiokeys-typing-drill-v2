// db/schema.ts
import type { DBSchema } from "idb";
import type { UserProfile } from "@/types/profile";
import type {
  KeystrokeLog,
  SessionMetrics,
  FingerHealthIndex,
  WeakKeyPair,
  SpacedRepetitionItem,
} from "@/types/metrics";
import type { LeaderboardCacheRow } from "@/types/leaderboard";

export const DB_NAME = "AudioKeysDB";
export const DB_VERSION = 2;

export interface StageProgressRow {
  id?: number;
  username: string;
  stage: string;
  completed: boolean;
  updatedAt: string;
}

export interface AudioKeysDB extends DBSchema {
  profiles: {
    key: string;
    value: UserProfile;
    indexes: {
      level: string;
      classCode: string;
      fluencyScore: number;
    };
  };
  metrics: {
    key: number;
    value: SessionMetrics;
    indexes: {
      username: string;
      stage: string;
      timestamp: string;
      fluencyScore: number;
      username_stage: [string, string];
    };
  };
  keystrokes: {
    key: number;
    value: KeystrokeLog;
    indexes: {
      username: string;
      sessionId: string;
      timestamp: string;
      username_session: [string, string];
    };
  };
  fingerHealth: {
    key: number;
    value: FingerHealthIndex;
    indexes: {
      username: string;
      timestamp: string;
      username_stage: [string, string];
    };
  };
  weakKeyPairs: {
    key: number;
    value: WeakKeyPair;
    indexes: {
      username: string;
      keyPair: string;
      errorRate: number;
    };
  };
  spacedRepetition: {
    key: number;
    value: SpacedRepetitionItem;
    indexes: {
      username: string;
      nextReview: string;
      key: string;
      username_key: [string, string];
    };
  };
  leaderboard: {
    key: number;
    value: LeaderboardCacheRow;
    indexes: {
      stage: string;
      fluencyScore: number;
      username: string;
    };
  };
  stageProgress: {
    key: number;
    value: StageProgressRow;
    indexes: {
      username: string;
      stage: string;
      username_stage: [string, string];
    };
  };
}
