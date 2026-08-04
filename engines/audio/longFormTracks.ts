// engines/audio/longFormTracks.ts
"use client";

import { Howl } from "howler";

const TRACKS = {
  welcome: "/audio/sounds/welcome_track.mp3",
  celebrate1: "/audio/sounds/celebrate1.mp3",
  celebrate2: "/audio/sounds/celebrate2.mp3",
} as const;

export type LongFormTrackId = keyof typeof TRACKS;

let currentHowl: Howl | null = null;

/**
 * Plays one of the long-form narrative tracks (the landing welcome jingle,
 * or a celebration track) and resolves once playback finishes, so callers
 * can follow it with spoken text ("...then says welcome, then the name").
 *
 * These are separate from the short UI sound effects played through
 * useAudio()'s playSound() — that goes through the app's existing sound
 * registry; these three are full narrative tracks played directly via
 * Howler so they don't need to be registered there.
 */
export function playLongFormTrack(id: LongFormTrackId): Promise<void> {
  return new Promise((resolve) => {
    if (currentHowl) {
      currentHowl.stop();
      currentHowl.unload();
      currentHowl = null;
    }

    const howl = new Howl({
      src: [TRACKS[id]],
      html5: true,
      onend: () => {
        if (currentHowl === howl) currentHowl = null;
        resolve();
      },
      onloaderror: () => {
        // Don't let a missing/broken audio file block the welcome or
        // celebration flow — fall through to the spoken announcement.
        if (currentHowl === howl) currentHowl = null;
        resolve();
      },
      onplayerror: () => {
        howl.once("unlock", () => howl.play());
      },
    });

    currentHowl = howl;
    howl.play();
  });
}

export function stopLongFormTrack(): void {
  if (currentHowl) {
    currentHowl.stop();
    currentHowl.unload();
    currentHowl = null;
  }
}

/** Alternates between the two celebration tracks so the same one doesn't
 *  play twice in a row for a student leveling up through several stages
 *  back to back. */
let lastCelebration: LongFormTrackId | null = null;
export function pickCelebrationTrack(): LongFormTrackId {
  const next: LongFormTrackId = lastCelebration === "celebrate1" ? "celebrate2" : "celebrate1";
  lastCelebration = next;
  return next;
}
