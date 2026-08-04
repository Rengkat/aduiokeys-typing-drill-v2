"use client";

import { useShallow } from "zustand/react/shallow";
import { useAudioStore } from "@/store/useAudioStore";

export function useAudio() {
  return useAudioStore(
    useShallow((s) => ({
      speak: s.speak,
      playSound: s.playSound,
      setVolume: s.setVolume,
      isSpeaking: s.isSpeaking,
      cancel: s.cancel,
      screenReaderMode: s.screenReaderMode,
      setScreenReaderMode: s.setScreenReaderMode,
      availableVoices: s.availableVoices,
      voiceURI: s.voiceURI,
      setVoiceURI: s.setVoiceURI,
    })),
  );
}

export function useAudioEngine() {
  return useAudio();
}
