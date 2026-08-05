export type StageId =
  | "Stage_1"
  | "Stage_2"
  | "Stage_3"
  | "Stage_4"
  | "Stage_5"
  | "Stage_6"
  | "Stage_7"
  | "Stage_8"
  | "Stage_9";

export interface UserProfile {
  username: string;
  level: StageId;
  wpmTarget: number;
  soundPack: string;
  classCode: string | null;
  leaderboardOptIn: boolean;
  fluencyScore: number;
  createdAt: string;
  updatedAt: string;
  // Additional optional fields
  totalPracticeTime?: number;
  currentStreak?: number;
  longestStreak?: number;
  achievements?: string[];
  unlockedSoundPacks?: string[];
}
