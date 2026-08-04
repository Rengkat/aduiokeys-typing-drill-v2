"use client";

import { create } from "zustand";
import { getAudioContext, resumeAudioContext } from "@/engines/audio/AudioContext";
import { playSfx, type SfxName } from "@/engines/audio/sfx";

export interface SpeechOptions {
  priority?: "low" | "high";
  rate?: number;
  pitch?: number;
  volume?: number;
  lang?: string;
}

// Singletons live outside the store — SpeechSynthesis isn't plain data.
let synthesis: SpeechSynthesis | null = null;

// Synchronously tracks "is something in flight right now" — set the
// instant speakNow() calls synthesis.speak(), cleared only on that
// utterance's onend/onerror. This has to be separate from the store's
// public isSpeaking flag: isSpeaking only flips true once the browser's
// onstart callback actually fires, which is asynchronous, so checking it
// immediately after calling speak() has a race window where several rapid
// calls in the same tick would all see "nothing is playing yet" and all
// speak at once instead of queuing behind each other.
let activeUtterance: SpeechSynthesisUtterance | null = null;

// Ordinary informational messages (priority !== "high") — always spoken in
// order, never skipped.
let backgroundQueue: { text: string; options: SpeechOptions }[] = [];

// The single most recent "high priority" announcement requested while
// something else was already speaking. Not a growing queue — a fast typist
// racing ahead of the audio shouldn't leave a backlog of stale letter cues
// to play out one after another; only the latest one still matters once the
// current utterance is free.
let pendingResponsive: { text: string; options: SpeechOptions } | null = null;

// EARLIER APPROACH (removed): every priority:"high" call used to call
// speechSynthesis.cancel() immediately before speaking, to interrupt
// whatever was currently playing and stay in sync with fast typing. That
// turned out to be the actual root cause of words/sentences going
// completely unspoken: speechSynthesis.cancel() looks synchronous but
// isn't internally, and calling speak() again too soon after it makes many
// real browsers (Chrome especially) silently drop the new utterance
// entirely — no event fires, it just never speaks. A fixed settle-delay
// workaround helped sometimes but was still timing-dependent and, worse,
// calling cancel() this frequently over a long session (every keystroke,
// for an entire typing-tutor session) can push some browsers' speech
// engines into a broken state that stops firing events altogether — which
// is exactly what "reads the first sentence, then nothing ever again"
// looks like: not a dropped utterance, a wedged engine.
//
// The fix is architectural, not a timing tweak: routine announcements
// (words, letters, sentences) NEVER call cancel() at all. Instead, when
// something is already speaking, a new "high priority" announcement simply
// replaces whatever was waiting to go next (pendingResponsive, above) —
// once the current utterance naturally finishes, the *latest* relevant
// announcement plays, with no backlog and no forced interruption. cancel()
// is reserved for genuinely deliberate, infrequent user actions (restart,
// pause) where immediate interruption really is required and isn't
// happening dozens of times a minute.
function playNextFromQueues() {
  if (!synthesis) return;
  const next = pendingResponsive ?? backgroundQueue.shift();
  if (!next) return;
  pendingResponsive = null;
  speakNow(next.text, next.options);
}

// Base speaking rate for every announcement in the app (1.0 = a voice's own
// natural pace). Previously this was 0.9 — slower than natural — which was
// the actual cause of "not enough time" on lower stages: each per-letter
// announcement ate into the session timer before the student could even
// react. Raised here, in one place, so it applies uniformly no matter which
// voice is installed/selected (SpeechSynthesisUtterance.rate is a relative
// multiplier on that voice's own base pace, so this scales consistently
// across voices even though their absolute speeds still differ slightly).
const DEFAULT_SPEECH_RATE = 1.15;

function speakNow(text: string, options: SpeechOptions) {
  if (!synthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = options.rate ?? DEFAULT_SPEECH_RATE;
  utterance.pitch = options.pitch ?? 1;
  utterance.volume = options.volume ?? 1;
  utterance.lang = options.lang ?? "en-US";

  const voices = synthesis.getVoices();
  // A person's chosen voice (see setVoiceURI) always wins when it's still
  // installed. Falls through to the old auto-pick (prefer an on-device
  // English voice, since those tend to sound less robotic than
  // network-only ones and work offline) only if nothing's been chosen yet
  // or the chosen voice disappeared (e.g. switched machines).
  const chosenURI = useAudioStore.getState().voiceURI;
  const preferredVoice =
    (chosenURI && voices.find((v) => v.voiceURI === chosenURI)) ||
    voices.find((v) => v.lang.startsWith("en") && v.localService) ||
    voices.find((v) => v.lang.startsWith("en")) ||
    voices[0];
  if (preferredVoice) utterance.voice = preferredVoice;

  activeUtterance = utterance;
  useAudioStore.setState({ isSpeaking: true });

  utterance.onstart = () => {
    if (activeUtterance !== utterance) return; // superseded already
    useAudioStore.setState({ isSpeaking: true });
  };
  utterance.onend = () => {
    if (activeUtterance !== utterance) return; // superseded already
    activeUtterance = null;
    useAudioStore.setState({ isSpeaking: false });
    playNextFromQueues();
  };
  utterance.onerror = () => {
    if (activeUtterance !== utterance) return;
    activeUtterance = null;
    useAudioStore.setState({ isSpeaking: false });
    playNextFromQueues();
  };

  synthesis.speak(utterance);
}

const SCREEN_READER_MODE_KEY = "audiokeys_screen_reader_mode";
const VOICE_URI_KEY = "audiokeys_voice_uri";

function loadScreenReaderMode(): boolean {
  // Defaults to ON. Most of AudioKeys' users are blind students who
  // already run JAWS/NVDA/VoiceOver, so the safe out-of-the-box behavior
  // is to stay quiet and let their screen reader do the narrating —
  // exactly the mode that avoids the double-voice problem. A sighted
  // student/teacher setting up a profile is the exception, and opts out
  // explicitly (see the "use AudioKeys' own voice" checkbox), which is
  // the only thing that ever writes an explicit "0" here.
  if (typeof window === "undefined") return true;
  try {
    const stored = window.localStorage.getItem(SCREEN_READER_MODE_KEY);
    return stored === null ? true : stored === "1";
  } catch {
    return true;
  }
}

function loadVoiceURI(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(VOICE_URI_KEY);
  } catch {
    return null;
  }
}

interface AudioState {
  isSpeaking: boolean;
  volume: number;
  // When true, this app's own speechSynthesis narration is muted entirely.
  // AudioKeys normally self-voices every event (correct/incorrect key,
  // word/letter announcements, timers, etc.) via speak(), while ALSO
  // mirroring the same text into aria-live regions in the stage UI. That's
  // harmless with no assistive tech running, but the moment a real screen
  // reader (JAWS, NVDA, VoiceOver) is active it watches those same
  // aria-live regions and speaks them too — in its own voice, on its own
  // timing — on top of this app's TTS. Two voices reading the same text at
  // once. Rather than try to sniff out whether a screen reader is present
  // (there is no reliable, standard way to detect that from the page),
  // the person tells us once via a setting. When screenReaderMode is on,
  // speak() below becomes a no-op and the aria-live regions become the
  // single source of narration, read by the user's own screen reader at
  // their own configured voice/rate/verbosity — exactly what they expect.
  screenReaderMode: boolean;
  // The full list of voices this browser/OS currently offers, refreshed
  // whenever the platform reports new ones (voices often load
  // asynchronously, sometimes seconds after the page loads). Exposed so a
  // settings UI can let the person pick a better-sounding one than
  // whatever got auto-selected.
  availableVoices: SpeechSynthesisVoice[];
  // voiceURI of the person's chosen voice, or null to keep auto-picking.
  voiceURI: string | null;
  init: () => void;
  speak: (text: string, options?: SpeechOptions) => void;
  playSound: (type: SfxName) => void;
  setVolume: (volume: number) => void;
  setScreenReaderMode: (enabled: boolean) => void;
  setVoiceURI: (voiceURI: string | null) => void;
  cancel: () => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  isSpeaking: false,
  volume: 1,
  // Matches loadScreenReaderMode()'s default below — true until init() has
  // had a chance to read any explicit stored preference.
  screenReaderMode: true,
  availableVoices: [],
  voiceURI: null,

  init: () => {
    if (typeof window === "undefined") return;
    synthesis = window.speechSynthesis;
    const refreshVoices = () => set({ availableVoices: synthesis?.getVoices() ?? [] });
    refreshVoices();
    synthesis.onvoiceschanged = refreshVoices;
    getAudioContext();
    set({ screenReaderMode: loadScreenReaderMode(), voiceURI: loadVoiceURI() });
  },

  speak: (text, options = {}) => {
    if (!synthesis || !text.trim()) return;
    // Screen reader mode: don't narrate ourselves — the aria-live regions
    // are already announcing this same text to the user's own AT. Speaking
    // it too is exactly the "two voices" bug.
    if (get().screenReaderMode) return;
    const resolvedOptions: SpeechOptions = { ...options, volume: options.volume ?? get().volume };

    if (!activeUtterance) {
      speakNow(text, resolvedOptions);
      return;
    }

    if (resolvedOptions.priority === "high") {
      pendingResponsive = { text, options: resolvedOptions };
    } else {
      backgroundQueue.push({ text, options: resolvedOptions });
    }
  },

  setScreenReaderMode: (enabled) => {
    if (enabled) {
      // Stop and flush anything already in flight/queued so no stray
      // utterance survives the switch-over.
      synthesis?.cancel();
      activeUtterance = null;
      backgroundQueue = [];
      pendingResponsive = null;
    }
    try {
      window.localStorage.setItem(SCREEN_READER_MODE_KEY, enabled ? "1" : "0");
    } catch {
      // localStorage unavailable (private browsing, etc.) — setting just
      // won't persist across reloads; not worth failing the toggle over.
    }
    set({ screenReaderMode: enabled, isSpeaking: false });
  },

  setVoiceURI: (voiceURI) => {
    try {
      if (voiceURI) window.localStorage.setItem(VOICE_URI_KEY, voiceURI);
      else window.localStorage.removeItem(VOICE_URI_KEY);
    } catch {
      // Not persisted this session; the picker still applies immediately.
    }
    set({ voiceURI });
  },

  cancel: () => {
    // Reserved for deliberate, infrequent interruptions (restart, pause) —
    // not part of the routine per-keystroke announcement path.
    synthesis?.cancel();
    activeUtterance = null;
    backgroundQueue = [];
    pendingResponsive = null;
    set({ isSpeaking: false });
  },

  setVolume: (volume) => set({ volume: Math.max(0, Math.min(1, volume)) }),

  playSound: (type) => {
    resumeAudioContext();
    playSfx(type, get().volume);
  },
}));
