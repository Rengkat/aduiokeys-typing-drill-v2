"use client";

import { useShallow } from "zustand/react/shallow";
import { useProfileStore } from "@/store/useProfileStore";

export function useProfile() {
  return useProfileStore(
    useShallow((state) => ({
      profiles: state.profiles,
      currentProfile: state.currentProfile,
      isLoading: state.isLoading,
      isHydrated: state.isHydrated,
      createProfile: state.createProfile,
      switchProfile: state.switchProfile,
      updateProfile: state.updateProfile,
      deleteProfile: state.deleteProfile,
    })),
  );
}
