"use client";

import { useState, useCallback, useRef } from "react";
import { useProfile } from "./useProfile";
import { addKeystrokeLogs } from "@/db/metrics";
import { buildKeystrokeLog } from "@/engines/adaptive/keyLogger";
import type { KeystrokeLog } from "@/types/metrics";

export function useKeystrokeLogger() {
  const { currentProfile } = useProfile();
  const [sessionId] = useState(() => `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`);
  const lastKeyTimeRef = useRef<number>(Date.now());
  const keystrokeBufferRef = useRef<KeystrokeLog[]>([]);
  const bufferTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flushBuffer = useCallback(async () => {
    if (keystrokeBufferRef.current.length === 0) return;
    const batch = keystrokeBufferRef.current;
    keystrokeBufferRef.current = [];
    try {
      await addKeystrokeLogs(batch);
    } catch (error) {
      console.error("Failed to flush keystroke buffer:", error);
    }
  }, []);

  const logKeystroke = useCallback(
    (key: string, expectedKey: string, isCorrect: boolean) => {
      if (!currentProfile) return;

      const now = Date.now();
      const log = buildKeystrokeLog({
        username: currentProfile.username,
        sessionId,
        key,
        expectedKey,
        isCorrect,
        nowMs: now,
        lastKeyTimestampMs: lastKeyTimeRef.current,
      });
      lastKeyTimeRef.current = now;

      keystrokeBufferRef.current.push(log);

      if (bufferTimeoutRef.current) clearTimeout(bufferTimeoutRef.current);
      bufferTimeoutRef.current = setTimeout(() => {
        flushBuffer();
      }, 1000);

      // Flush immediately once the buffer gets large, so a long session
      // doesn't hold hundreds of unsaved keystrokes in memory.
      if (keystrokeBufferRef.current.length >= 100) {
        flushBuffer();
      }
    },
    [currentProfile, sessionId, flushBuffer],
  );

  const cleanup = useCallback(async () => {
    if (bufferTimeoutRef.current) clearTimeout(bufferTimeoutRef.current);
    await flushBuffer();
  }, [flushBuffer]);

  return {
    logKeystroke,
    sessionId,
    // Returns a promise now — callers that need every keystroke persisted
    // before reading it back (e.g. adaptive scoring right after a session
    // ends) can `await` this instead of racing an unresolved flush.
    flushBuffer: cleanup,
  };
}
