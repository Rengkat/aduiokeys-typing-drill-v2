import { getDB } from "./client";
import type { UserProfile } from "@/types/profile";

/** Plain data-access helpers for the "profiles" store — no React involved.
 *  useProfileStore (zustand) calls these; exportImport.ts also reuses them. */

export async function getProfile(username: string): Promise<UserProfile | undefined> {
  const db = await getDB();
  return db.get("profiles", username);
}

export async function getAllProfiles(): Promise<UserProfile[]> {
  const db = await getDB();
  return db.getAll("profiles");
}

export async function addProfile(profile: UserProfile): Promise<void> {
  const db = await getDB();
  await db.add("profiles", profile);
}

export async function putProfile(profile: UserProfile): Promise<void> {
  const db = await getDB();
  await db.put("profiles", profile);
}

export async function deleteProfile(username: string): Promise<void> {
  const db = await getDB();
  await db.delete("profiles", username);
}

export async function getProfilesByClassCode(classCode: string): Promise<UserProfile[]> {
  const db = await getDB();
  return db.getAllFromIndex("profiles", "classCode", classCode);
}

export function createDefaultProfile(username: string): UserProfile {
  const now = new Date().toISOString();
  return {
    username,
    level: "Stage_1",
    wpmTarget: 25,
    soundPack: "default",
    classCode: null,
    leaderboardOptIn: true,
    fluencyScore: 0,
    createdAt: now,
    updatedAt: now,
  };
}
