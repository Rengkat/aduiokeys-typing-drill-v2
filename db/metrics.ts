import { getDB } from "./client";
import type { StageProgressRow } from "./schema";
import type {
  KeystrokeLog,
  SessionMetrics,
  FingerHealthIndex,
  WeakKeyPair,
  SpacedRepetitionItem,
} from "@/types/metrics";

/* ---------------------------------------------------------------------- */
/* Session metrics (one row per completed drill/session)                  */
/* ---------------------------------------------------------------------- */

export async function addSessionMetrics(metrics: Omit<SessionMetrics, "id">): Promise<number> {
  const db = await getDB();
  return db.add("metrics", metrics as SessionMetrics);
}

export async function getMetricsByUser(username: string): Promise<SessionMetrics[]> {
  const db = await getDB();
  return db.getAllFromIndex("metrics", "username", username);
}

export async function getMetricsByUserAndStage(
  username: string,
  stage: string,
): Promise<SessionMetrics[]> {
  const db = await getDB();
  return db.getAllFromIndex("metrics", "username_stage", [username, stage]);
}

export async function getLatestMetric(username: string): Promise<SessionMetrics | undefined> {
  const all = await getMetricsByUser(username);
  return all.sort((a, b) => b.timestamp.localeCompare(a.timestamp))[0];
}

/* ---------------------------------------------------------------------- */
/* Keystroke logs (raw, high-volume — written in batches by the logger)   */
/* ---------------------------------------------------------------------- */

export async function addKeystrokeLogs(logs: KeystrokeLog[]): Promise<void> {
  if (logs.length === 0) return;
  const db = await getDB();
  const tx = db.transaction("keystrokes", "readwrite");
  await Promise.all(logs.map((log) => tx.store.add(log)));
  await tx.done;
}

export async function getKeystrokesBySession(sessionId: string): Promise<KeystrokeLog[]> {
  const db = await getDB();
  return db.getAllFromIndex("keystrokes", "sessionId", sessionId);
}

export async function getRecentKeystrokes(username: string, limit = 500): Promise<KeystrokeLog[]> {
  const db = await getDB();
  const all = await db.getAllFromIndex("keystrokes", "username", username);
  return all.slice(-limit);
}

/* ---------------------------------------------------------------------- */
/* Finger health                                                          */
/* ---------------------------------------------------------------------- */

export async function addFingerHealthSnapshot(snapshot: FingerHealthIndex): Promise<void> {
  const db = await getDB();
  await db.add("fingerHealth", snapshot);
}

export async function getLatestFingerHealth(
  username: string,
): Promise<FingerHealthIndex | undefined> {
  const db = await getDB();
  const all = await db.getAllFromIndex("fingerHealth", "username", username);
  return all.sort((a, b) => b.timestamp.localeCompare(a.timestamp))[0];
}

/* ---------------------------------------------------------------------- */
/* Weak key pairs                                                         */
/* ---------------------------------------------------------------------- */

export async function saveWeakKeyPairs(username: string, pairs: WeakKeyPair[]): Promise<void> {
  const db = await getDB();
  const tx = db.transaction("weakKeyPairs", "readwrite");
  // Replace this user's existing rows with the freshly computed set.
  const existing = await tx.store.index("username").getAll(username);
  await Promise.all(existing.map((row: any) => tx.store.delete(row.id)));
  await Promise.all(pairs.map((pair) => tx.store.add({ ...pair, username } as any)));
  await tx.done;
}

export async function getWeakKeyPairs(username: string): Promise<WeakKeyPair[]> {
  const db = await getDB();
  return db.getAllFromIndex("weakKeyPairs", "username", username);
}

/* ---------------------------------------------------------------------- */
/* Spaced repetition (SM-2 items, one per practiced key/key-pair)         */
/* ---------------------------------------------------------------------- */

export async function getSpacedRepetitionItems(username: string): Promise<SpacedRepetitionItem[]> {
  const db = await getDB();
  return db.getAllFromIndex("spacedRepetition", "username", username);
}

export async function getDueSpacedRepetitionItems(
  username: string,
  asOf: string = new Date().toISOString(),
): Promise<SpacedRepetitionItem[]> {
  const items = await getSpacedRepetitionItems(username);
  return items.filter((item) => item.nextReview <= asOf);
}

export async function upsertSpacedRepetitionItem(item: SpacedRepetitionItem): Promise<void> {
  const db = await getDB();
  const tx = db.transaction("spacedRepetition", "readwrite");
  const existing = await tx.store.index("username_key").get([item.username, item.key]);
  if (existing) {
    await tx.store.put({ ...(existing as any), ...item });
  } else {
    await tx.store.add(item as any);
  }
  await tx.done;
}

/* ---------------------------------------------------------------------- */
/* Stage progress                                                         */
/* ---------------------------------------------------------------------- */

export async function markStageComplete(username: string, stage: string): Promise<void> {
  const db = await getDB();
  const tx = db.transaction("stageProgress", "readwrite");
  const existing = await tx.store.index("username_stage").get([username, stage]);
  const row: StageProgressRow = {
    ...(existing as StageProgressRow | undefined),
    username,
    stage,
    completed: true,
    updatedAt: new Date().toISOString(),
  };
  if (existing) {
    await tx.store.put({ ...(existing as any), ...row });
  } else {
    await tx.store.add(row as any);
  }
  await tx.done;
}

export async function getStageProgress(username: string): Promise<StageProgressRow[]> {
  const db = await getDB();
  return db.getAllFromIndex("stageProgress", "username", username);
}
