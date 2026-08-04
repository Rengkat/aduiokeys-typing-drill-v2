"use client";

import { create } from "zustand";
import { getDB } from "@/db/client";
import type { UserProfile } from "@/types/profile";

interface ProfileState {
  profiles: UserProfile[];
  currentProfile: UserProfile | null;
  isLoading: boolean;
  isHydrated: boolean;
  loadProfiles: () => Promise<void>;
  createProfile: (username: string) => Promise<void>;
  switchProfile: (username: string) => void;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  deleteProfile: (username: string) => Promise<void>;
}

export const useProfileStore = create<ProfileState>((set, get) => ({
  profiles: [],
  currentProfile: null,
  isLoading: false,
  isHydrated: false,

  loadProfiles: async () => {
    set({ isLoading: true });
    try {
      const db = await getDB();
      const allProfiles = await db.getAll("profiles");
      const { currentProfile } = get();
      set({
        profiles: allProfiles,
        currentProfile: currentProfile ?? allProfiles[0] ?? null,
        isHydrated: true,
      });
    } catch (error) {
      console.error("Failed to load profiles:", error);
      set({ isHydrated: true });
    } finally {
      set({ isLoading: false });
    }
  },

  createProfile: async (username) => {
    const db = await getDB();
    const existing = await db.get("profiles", username);
    if (existing) throw new Error("Profile already exists");

    const newProfile: UserProfile = {
      username,
      level: "Stage_1",
      wpmTarget: 25,
      soundPack: "default",
      classCode: null,
      leaderboardOptIn: true,
      fluencyScore: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await db.add("profiles", newProfile);
    set((state) => ({
      profiles: [...state.profiles, newProfile],
      currentProfile: newProfile,
    }));
  },

  switchProfile: (username) => {
    const profile = get().profiles.find((p) => p.username === username);
    if (profile) set({ currentProfile: profile });
  },

  updateProfile: async (updates) => {
    const { currentProfile } = get();
    if (!currentProfile) return;
    const db = await getDB();

    const updated: UserProfile = {
      ...currentProfile,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    await db.put("profiles", updated);
    set((state) => ({
      currentProfile: updated,
      profiles: state.profiles.map((p) => (p.username === updated.username ? updated : p)),
    }));
  },

  deleteProfile: async (username) => {
    const db = await getDB();
    await db.delete("profiles", username);
    set((state) => {
      const remaining = state.profiles.filter((p) => p.username !== username);
      return {
        profiles: remaining,
        currentProfile:
          state.currentProfile?.username === username
            ? (remaining[0] ?? null)
            : state.currentProfile,
      };
    });
  },
}));
