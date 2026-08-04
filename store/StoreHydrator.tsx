"use client";

import { useEffect } from "react";
import { useProfileStore } from "./useProfileStore";
import { useAudioStore } from "./useAudioStore";

/** Renders nothing — its only job is to trigger the one-time setup that used
 *  to happen inside DBProvider/ProfileProvider/AudioProvider's mount effects.
 *  Mount this once in app/layout.tsx, no wrapping required. */
export function StoreHydrator() {
  useEffect(() => {
    useAudioStore.getState().init();
    useProfileStore.getState().loadProfiles();
  }, []);

  return null;
}
