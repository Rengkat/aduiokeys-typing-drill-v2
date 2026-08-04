// types/metrics.ts
export interface KeystrokeLog {
  id?: number;
  username: string;
  sessionId: string;
  key: string;
  expectedKey: string;
  isCorrect: boolean;
  timestamp: string;
  interKeyInterval: number; // ms since last key
  finger: string; // which finger used
  hand?: "left" | "right";
  row?: "top" | "home" | "bottom";
}

export interface SessionMetrics {
  id?: number;
  username: string;
  stage: string;
  timestamp: string;
  wpm: number;
  accuracy: number;
  fluencyScore: number;
  totalKeystrokes: number;
  correctKeystrokes: number;
  errors: number;
  duration: number; // in seconds
  // Detailed breakdown
  leftHandAccuracy?: number;
  rightHandAccuracy?: number;
  fingerAccuracy?: Record<string, number>;
  weakKeys?: string[];
  // Spaced repetition data
  lastPractice?: string;
  nextReview?: string;
  repetitionCount?: number;
}

export interface FingerHealthIndex {
  username: string;
  stage: string;
  timestamp: string;
  leftHand: number; // 0-100
  rightHand: number; // 0-100
  byFinger: {
    leftPinky: number;
    leftRing: number;
    leftMiddle: number;
    leftIndex: number;
    rightIndex: number;
    rightMiddle: number;
    rightRing: number;
    rightPinky: number;
  };
  recommendations: string[];
}

export interface WeakKeyPair {
  key1: string;
  key2: string;
  errorRate: number; // 0-1
  attempts: number;
  fingerConflict: boolean;
  recommendation: string;
}

export interface SpacedRepetitionItem {
  username: string;
  key: string;
  stage: string;
  easeFactor: number; // 1.3 - 2.5
  interval: number; // days
  lastPracticed: string;
  nextReview: string;
  repetitionCount: number;
  correctCount: number;
  incorrectCount: number;
  consecCorrect: number;
  consecIncorrect: number;
}
