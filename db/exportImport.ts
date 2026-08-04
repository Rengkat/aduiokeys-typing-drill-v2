import { getDB } from "./client";
import { getProfile, putProfile } from "./profiles";
import type { UserProfile } from "@/types/profile";
import type {
  SessionMetrics,
  FingerHealthIndex,
  WeakKeyPair,
  SpacedRepetitionItem,
} from "@/types/metrics";
import type { StageProgressRow } from "./schema";

/** Everything needed to fully restore one student's progress on another device.
 *  Deliberately excludes raw `keystrokes` — that table can get huge and isn't
 *  needed to reconstruct progress, only the aggregated `metrics` rows are. */
export interface ProfileExportBundle {
  version: 1;
  exportedAt: string;
  profile: UserProfile;
  metrics: SessionMetrics[];
  fingerHealth: FingerHealthIndex[];
  weakKeyPairs: WeakKeyPair[];
  spacedRepetition: SpacedRepetitionItem[];
  stageProgress: StageProgressRow[];
}

export async function exportProfileData(username: string): Promise<ProfileExportBundle> {
  const db = await getDB();
  const profile = await getProfile(username);
  if (!profile) throw new Error(`No profile found for "${username}"`);

  const [metrics, fingerHealth, weakKeyPairs, spacedRepetition, stageProgress] = await Promise.all([
    db.getAllFromIndex("metrics", "username", username),
    db.getAllFromIndex("fingerHealth", "username", username),
    db.getAllFromIndex("weakKeyPairs", "username", username),
    db.getAllFromIndex("spacedRepetition", "username", username),
    db.getAllFromIndex("stageProgress", "username", username),
  ]);

  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    profile,
    metrics,
    fingerHealth,
    weakKeyPairs,
    spacedRepetition,
    stageProgress,
  };
}

/** Serializes a bundle to a downloadable JSON string (feed this into a Blob for
 *  a file download, or into a QR-code generator if it's small enough). */
export function serializeExportBundle(bundle: ProfileExportBundle): string {
  return JSON.stringify(bundle);
}

export function parseExportBundle(json: string): ProfileExportBundle {
  const parsed = JSON.parse(json);
  if (parsed?.version !== 1 || !parsed?.profile?.username) {
    throw new Error("This file doesn't look like a valid AudioKeys export.");
  }
  return parsed as ProfileExportBundle;
}

/**
 * Imports a bundle produced by exportProfileData(). By default this merges:
 * newer session metrics/keys are added, and the profile is only overwritten
 * if the incoming one is more recently updated than what's on this device.
 */
export async function importProfileData(
  bundle: ProfileExportBundle,
  options: { overwriteProfile?: boolean } = {},
): Promise<void> {
  const db = await getDB();
  const existingProfile = await getProfile(bundle.profile.username);

  const shouldOverwrite =
    options.overwriteProfile ??
    (!existingProfile || bundle.profile.updatedAt > existingProfile.updatedAt);

  if (shouldOverwrite) {
    await putProfile(bundle.profile);
  }

  const tx = db.transaction(
    ["metrics", "fingerHealth", "weakKeyPairs", "spacedRepetition", "stageProgress"],
    "readwrite",
  );

  await Promise.all([
    ...bundle.metrics.map((row) => tx.objectStore("metrics").put({ ...row, id: undefined } as any)),
    ...bundle.fingerHealth.map((row) =>
      tx.objectStore("fingerHealth").put({ ...row, id: undefined } as any),
    ),
    ...bundle.weakKeyPairs.map((row) =>
      tx.objectStore("weakKeyPairs").put({ ...row, id: undefined } as any),
    ),
    ...bundle.spacedRepetition.map((row) =>
      tx.objectStore("spacedRepetition").put({ ...row, id: undefined } as any),
    ),
    ...bundle.stageProgress.map((row) =>
      tx.objectStore("stageProgress").put({ ...row, id: undefined } as any),
    ),
  ]);

  await tx.done;
}

/** Triggers a browser file download of a profile's export bundle. Call from a click/keydown handler. */
export function downloadProfileExport(bundle: ProfileExportBundle) {
  const json = serializeExportBundle(bundle);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `audiokeys-${bundle.profile.username}-${bundle.exportedAt.slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
