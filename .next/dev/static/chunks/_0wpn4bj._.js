(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/db/schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// db/schema.ts
__turbopack_context__.s([
    "DB_NAME",
    ()=>DB_NAME,
    "DB_VERSION",
    ()=>DB_VERSION
]);
const DB_NAME = "AudioKeysDB";
const DB_VERSION = 2;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/db/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDB",
    ()=>getDB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/schema.ts [app-client] (ecmascript)");
;
;
let dbPromise = null;
function getDB() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!dbPromise) {
        dbPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_NAME"], __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DB_VERSION"], {
            upgrade (db) {
                if (!db.objectStoreNames.contains("profiles")) {
                    const profileStore = db.createObjectStore("profiles", {
                        keyPath: "username"
                    });
                    profileStore.createIndex("level", "level");
                    profileStore.createIndex("classCode", "classCode");
                    profileStore.createIndex("fluencyScore", "fluencyScore");
                }
                if (!db.objectStoreNames.contains("metrics")) {
                    const metricsStore = db.createObjectStore("metrics", {
                        keyPath: "id",
                        autoIncrement: true
                    });
                    metricsStore.createIndex("username", "username");
                    metricsStore.createIndex("stage", "stage");
                    metricsStore.createIndex("timestamp", "timestamp");
                    metricsStore.createIndex("fluencyScore", "fluencyScore");
                    metricsStore.createIndex("username_stage", [
                        "username",
                        "stage"
                    ]);
                }
                if (!db.objectStoreNames.contains("keystrokes")) {
                    const keystrokeStore = db.createObjectStore("keystrokes", {
                        keyPath: "id",
                        autoIncrement: true
                    });
                    keystrokeStore.createIndex("username", "username");
                    keystrokeStore.createIndex("sessionId", "sessionId");
                    keystrokeStore.createIndex("timestamp", "timestamp");
                    keystrokeStore.createIndex("username_session", [
                        "username",
                        "sessionId"
                    ]);
                }
                if (!db.objectStoreNames.contains("fingerHealth")) {
                    const healthStore = db.createObjectStore("fingerHealth", {
                        keyPath: "id",
                        autoIncrement: true
                    });
                    healthStore.createIndex("username", "username");
                    healthStore.createIndex("timestamp", "timestamp");
                    healthStore.createIndex("username_stage", [
                        "username",
                        "stage"
                    ]);
                }
                if (!db.objectStoreNames.contains("weakKeyPairs")) {
                    const weakKeyStore = db.createObjectStore("weakKeyPairs", {
                        keyPath: "id",
                        autoIncrement: true
                    });
                    weakKeyStore.createIndex("username", "username");
                    weakKeyStore.createIndex("keyPair", "keyPair");
                    weakKeyStore.createIndex("errorRate", "errorRate");
                }
                if (!db.objectStoreNames.contains("spacedRepetition")) {
                    const srStore = db.createObjectStore("spacedRepetition", {
                        keyPath: "id",
                        autoIncrement: true
                    });
                    srStore.createIndex("username", "username");
                    srStore.createIndex("nextReview", "nextReview");
                    srStore.createIndex("key", "key");
                    srStore.createIndex("username_key", [
                        "username",
                        "key"
                    ]);
                }
                if (!db.objectStoreNames.contains("leaderboard")) {
                    const lbStore = db.createObjectStore("leaderboard", {
                        keyPath: "id",
                        autoIncrement: true
                    });
                    lbStore.createIndex("stage", "stage");
                    lbStore.createIndex("fluencyScore", "fluencyScore");
                    lbStore.createIndex("username", "username");
                }
                if (!db.objectStoreNames.contains("stageProgress")) {
                    const progressStore = db.createObjectStore("stageProgress", {
                        keyPath: "id",
                        autoIncrement: true
                    });
                    progressStore.createIndex("username", "username");
                    progressStore.createIndex("stage", "stage");
                    progressStore.createIndex("username_stage", [
                        "username",
                        "stage"
                    ]);
                }
            }
        });
    }
    return dbPromise;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/useProfileStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProfileStore",
    ()=>useProfileStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/client.ts [app-client] (ecmascript)");
"use client";
;
;
const useProfileStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        profiles: [],
        currentProfile: null,
        isLoading: false,
        isHydrated: false,
        loadProfiles: async ()=>{
            set({
                isLoading: true
            });
            try {
                const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
                const allProfiles = await db.getAll("profiles");
                const { currentProfile } = get();
                set({
                    profiles: allProfiles,
                    currentProfile: currentProfile ?? allProfiles[0] ?? null,
                    isHydrated: true
                });
            } catch (error) {
                console.error("Failed to load profiles:", error);
                set({
                    isHydrated: true
                });
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        createProfile: async (username)=>{
            const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
            const existing = await db.get("profiles", username);
            if (existing) throw new Error("Profile already exists");
            const newProfile = {
                username,
                level: "Stage_1",
                wpmTarget: 25,
                soundPack: "default",
                classCode: null,
                leaderboardOptIn: true,
                fluencyScore: 0,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            await db.add("profiles", newProfile);
            set((state)=>({
                    profiles: [
                        ...state.profiles,
                        newProfile
                    ],
                    currentProfile: newProfile
                }));
        },
        switchProfile: (username)=>{
            const profile = get().profiles.find((p)=>p.username === username);
            if (profile) set({
                currentProfile: profile
            });
        },
        updateProfile: async (updates)=>{
            const { currentProfile } = get();
            if (!currentProfile) return;
            const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
            const updated = {
                ...currentProfile,
                ...updates,
                updatedAt: new Date().toISOString()
            };
            await db.put("profiles", updated);
            set((state)=>({
                    currentProfile: updated,
                    profiles: state.profiles.map((p)=>p.username === updated.username ? updated : p)
                }));
        },
        deleteProfile: async (username)=>{
            const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
            await db.delete("profiles", username);
            set((state)=>{
                const remaining = state.profiles.filter((p)=>p.username !== username);
                return {
                    profiles: remaining,
                    currentProfile: state.currentProfile?.username === username ? remaining[0] ?? null : state.currentProfile
                };
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/audio/AudioContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGain",
    ()=>createGain,
    "getAudioContext",
    ()=>getAudioContext,
    "resumeAudioContext",
    ()=>resumeAudioContext
]);
// engines/audio/AudioContext.ts
/**
 * Single shared Web Audio API context for the whole app. Browsers only allow
 * a limited number of AudioContexts and require one user gesture before audio
 * can play, so every engine (sfx, narrator, spatialPanner) should pull the
 * context from here instead of constructing its own.
 */ let sharedContext = null;
function getAudioContext() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!sharedContext) {
        const Ctor = window.AudioContext || window.webkitAudioContext;
        if (!Ctor) return null;
        sharedContext = new Ctor();
    }
    return sharedContext;
}
async function resumeAudioContext() {
    const ctx = getAudioContext();
    if (ctx && ctx.state === "suspended") {
        await ctx.resume();
    }
}
function createGain(initialValue = 1) {
    const ctx = getAudioContext();
    if (!ctx) return null;
    const gain = ctx.createGain();
    gain.gain.value = initialValue;
    gain.connect(ctx.destination);
    return gain;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/audio/sfx.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playSfx",
    ()=>playSfx,
    "preloadSfx",
    ()=>preloadSfx
]);
// engines/audio/sfx.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$AudioContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/audio/AudioContext.ts [app-client] (ecmascript)");
;
;
/** Maps each sfx name to its file under public/audio/sfx/. Drop matching
 *  .mp3 files there and playback switches from synth tones to real audio
 *  automatically — no code changes needed. */ const SFX_FILES = {
    success: "/audio/sfx/success.mp3",
    error: "/audio/sfx/error.mp3",
    select: "/audio/sfx/select.mp3",
    keypress: "/audio/sfx/keypress.mp3",
    correct: "/audio/sfx/correct.mp3",
    incorrect: "/audio/sfx/incorrect.mp3",
    levelup: "/audio/sfx/levelup.mp3",
    hover: "/audio/sfx/hover.mp3",
    whoosh: "/audio/sfx/whoosh.mp3",
    fanfare: "/audio/sfx/fanfare.mp3",
    welcome: "/audio/sfx/welcome.mp3"
};
const howlCache = new Map();
const knownMissing = new Set();
function getHowl(name) {
    let howl = howlCache.get(name);
    if (!howl) {
        howl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howl"]({
            src: [
                SFX_FILES[name]
            ],
            preload: true,
            onloaderror: ()=>knownMissing.add(name)
        });
        howlCache.set(name, howl);
    }
    return howl;
}
function preloadSfx() {
    Object.keys(SFX_FILES).forEach(getHowl);
}
function playSfx(name, volume = 1) {
    if (!knownMissing.has(name)) {
        const howl = getHowl(name);
        if (howl.state() === "loaded") {
            howl.volume(volume);
            howl.play();
            return;
        }
    }
    // No audio file yet (or it failed to load) — fall back to a synthesized tone
    // so the app still has audio feedback during development.
    playSynthTone(name, volume);
}
function playSynthTone(type, volume) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$AudioContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAudioContext"])();
    if (!context) return;
    if (context.state === "suspended") context.resume();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    gainNode.gain.value = volume * 0.5;
    switch(type){
        case "success":
        case "correct":
            oscillator.frequency.setValueAtTime(880, context.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1320, context.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.15);
            oscillator.start(context.currentTime);
            oscillator.stop(context.currentTime + 0.15);
            break;
        case "error":
        case "incorrect":
            oscillator.type = "sawtooth";
            oscillator.frequency.setValueAtTime(220, context.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(110, context.currentTime + 0.2);
            gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.3);
            oscillator.start(context.currentTime);
            oscillator.stop(context.currentTime + 0.3);
            break;
        case "select":
            oscillator.frequency.setValueAtTime(660, context.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.1);
            oscillator.start(context.currentTime);
            oscillator.stop(context.currentTime + 0.1);
            break;
        case "keypress":
            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(440, context.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.05);
            oscillator.start(context.currentTime);
            oscillator.stop(context.currentTime + 0.05);
            break;
        case "levelup":
            {
                [
                    523,
                    659,
                    784,
                    1047
                ].forEach((freq, i)=>{
                    const osc = context.createOscillator();
                    const gain = context.createGain();
                    osc.connect(gain);
                    gain.connect(context.destination);
                    gain.gain.value = volume * 0.35;
                    osc.frequency.setValueAtTime(freq, context.currentTime + i * 0.1);
                    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + i * 0.1 + 0.1);
                    osc.start(context.currentTime + i * 0.1);
                    osc.stop(context.currentTime + i * 0.1 + 0.1);
                });
                break;
            }
        case "hover":
            // Deliberately tiny — a soft high tick, not a beep. Meant to be heard
            // dozens of times per minute without becoming noise.
            oscillator.type = "sine";
            gainNode.gain.value = volume * 0.08;
            oscillator.frequency.setValueAtTime(1400, context.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.035);
            oscillator.start(context.currentTime);
            oscillator.stop(context.currentTime + 0.035);
            break;
        case "whoosh":
            {
                // A downward pitch + lowpass sweep reads as motion/air rather than a tone —
                // used for page/route transitions.
                oscillator.type = "sawtooth";
                const filter = context.createBiquadFilter();
                filter.type = "lowpass";
                oscillator.disconnect();
                oscillator.connect(filter);
                filter.connect(gainNode);
                filter.frequency.setValueAtTime(3000, context.currentTime);
                filter.frequency.exponentialRampToValueAtTime(200, context.currentTime + 0.25);
                oscillator.frequency.setValueAtTime(900, context.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(160, context.currentTime + 0.25);
                gainNode.gain.value = volume * 0.18;
                gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.25);
                oscillator.start(context.currentTime);
                oscillator.stop(context.currentTime + 0.25);
                break;
            }
        case "fanfare":
            {
                // A brighter, bigger sibling of "levelup" — for the returning-user
                // welcome-back moment. Two-note chord stabs rising into a held top note,
                // plus a soft sub-note underneath for a little brass weight.
                const notes = [
                    // [frequency, startOffset, duration]
                    [
                        523.25,
                        0,
                        0.12
                    ],
                    [
                        659.25,
                        0,
                        0.12
                    ],
                    [
                        783.99,
                        0.12,
                        0.12
                    ],
                    [
                        1046.5,
                        0.24,
                        0.35
                    ]
                ];
                notes.forEach(([freq, offset, dur])=>{
                    const osc = context.createOscillator();
                    const gain = context.createGain();
                    osc.type = "triangle";
                    osc.connect(gain);
                    gain.connect(context.destination);
                    gain.gain.value = volume * 0.22;
                    osc.frequency.setValueAtTime(freq, context.currentTime + offset);
                    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + offset + dur);
                    osc.start(context.currentTime + offset);
                    osc.stop(context.currentTime + offset + dur);
                });
                // Sub note for weight
                const sub = context.createOscillator();
                const subGain = context.createGain();
                sub.type = "sine";
                sub.connect(subGain);
                subGain.connect(context.destination);
                subGain.gain.value = volume * 0.15;
                sub.frequency.setValueAtTime(130.81, context.currentTime); // C3
                subGain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.5);
                sub.start(context.currentTime);
                sub.stop(context.currentTime + 0.5);
                break;
            }
        case "welcome":
            {
                // A warm, unhurried bell arpeggio for the very first thing a new (or
                // returning) user hears — precedes the spoken welcome line. Each note
                // layers a quiet octave-up partial on top of the fundamental for a
                // bell-like shimmer rather than a flat synth beep.
                const pentatonic = [
                    392.0,
                    523.25,
                    659.25,
                    784.0
                ]; // G4, C5, E5, G5
                pentatonic.forEach((freq, i)=>{
                    const offset = i * 0.14;
                    const fundamental = context.createOscillator();
                    const fundamentalGain = context.createGain();
                    fundamental.type = "sine";
                    fundamental.connect(fundamentalGain);
                    fundamentalGain.connect(context.destination);
                    fundamentalGain.gain.value = volume * 0.24;
                    fundamental.frequency.setValueAtTime(freq, context.currentTime + offset);
                    fundamentalGain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + offset + 0.5);
                    fundamental.start(context.currentTime + offset);
                    fundamental.stop(context.currentTime + offset + 0.5);
                    const partial = context.createOscillator();
                    const partialGain = context.createGain();
                    partial.type = "sine";
                    partial.connect(partialGain);
                    partialGain.connect(context.destination);
                    partialGain.gain.value = volume * 0.08;
                    partial.frequency.setValueAtTime(freq * 2, context.currentTime + offset);
                    partialGain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + offset + 0.3);
                    partial.start(context.currentTime + offset);
                    partial.stop(context.currentTime + offset + 0.3);
                });
                break;
            }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/useAudioStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAudioStore",
    ()=>useAudioStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$AudioContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/audio/AudioContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$sfx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/audio/sfx.ts [app-client] (ecmascript)");
"use client";
;
;
;
// Singletons live outside the store — SpeechSynthesis isn't plain data.
let synthesis = null;
// Synchronously tracks "is something in flight right now" — set the
// instant speakNow() calls synthesis.speak(), cleared only on that
// utterance's onend/onerror. This has to be separate from the store's
// public isSpeaking flag: isSpeaking only flips true once the browser's
// onstart callback actually fires, which is asynchronous, so checking it
// immediately after calling speak() has a race window where several rapid
// calls in the same tick would all see "nothing is playing yet" and all
// speak at once instead of queuing behind each other.
let activeUtterance = null;
// Ordinary informational messages (priority !== "high") — always spoken in
// order, never skipped.
let backgroundQueue = [];
// The single most recent "high priority" announcement requested while
// something else was already speaking. Not a growing queue — a fast typist
// racing ahead of the audio shouldn't leave a backlog of stale letter cues
// to play out one after another; only the latest one still matters once the
// current utterance is free.
let pendingResponsive = null;
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
function speakNow(text, options) {
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
    const preferredVoice = chosenURI && voices.find((v)=>v.voiceURI === chosenURI) || voices.find((v)=>v.lang.startsWith("en") && v.localService) || voices.find((v)=>v.lang.startsWith("en")) || voices[0];
    if (preferredVoice) utterance.voice = preferredVoice;
    activeUtterance = utterance;
    useAudioStore.setState({
        isSpeaking: true
    });
    utterance.onstart = ()=>{
        if (activeUtterance !== utterance) return; // superseded already
        useAudioStore.setState({
            isSpeaking: true
        });
    };
    utterance.onend = ()=>{
        if (activeUtterance !== utterance) return; // superseded already
        activeUtterance = null;
        useAudioStore.setState({
            isSpeaking: false
        });
        playNextFromQueues();
    };
    utterance.onerror = ()=>{
        if (activeUtterance !== utterance) return;
        activeUtterance = null;
        useAudioStore.setState({
            isSpeaking: false
        });
        playNextFromQueues();
    };
    synthesis.speak(utterance);
}
const SCREEN_READER_MODE_KEY = "audiokeys_screen_reader_mode";
const VOICE_URI_KEY = "audiokeys_voice_uri";
function loadScreenReaderMode() {
    // Defaults to ON. Most of AudioKeys' users are blind students who
    // already run JAWS/NVDA/VoiceOver, so the safe out-of-the-box behavior
    // is to stay quiet and let their screen reader do the narrating —
    // exactly the mode that avoids the double-voice problem. A sighted
    // student/teacher setting up a profile is the exception, and opts out
    // explicitly (see the "use AudioKeys' own voice" checkbox), which is
    // the only thing that ever writes an explicit "0" here.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = window.localStorage.getItem(SCREEN_READER_MODE_KEY);
        return stored === null ? true : stored === "1";
    } catch  {
        return true;
    }
}
function loadVoiceURI() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return window.localStorage.getItem(VOICE_URI_KEY);
    } catch  {
        return null;
    }
}
const useAudioStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        isSpeaking: false,
        volume: 1,
        // Matches loadScreenReaderMode()'s default below — true until init() has
        // had a chance to read any explicit stored preference.
        screenReaderMode: true,
        availableVoices: [],
        voiceURI: null,
        init: ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            synthesis = window.speechSynthesis;
            const refreshVoices = ()=>set({
                    availableVoices: synthesis?.getVoices() ?? []
                });
            refreshVoices();
            synthesis.onvoiceschanged = refreshVoices;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$AudioContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAudioContext"])();
            set({
                screenReaderMode: loadScreenReaderMode(),
                voiceURI: loadVoiceURI()
            });
        },
        speak: (text, options = {})=>{
            if (!synthesis || !text.trim()) return;
            // Screen reader mode: don't narrate ourselves — the aria-live regions
            // are already announcing this same text to the user's own AT. Speaking
            // it too is exactly the "two voices" bug.
            if (get().screenReaderMode) return;
            const resolvedOptions = {
                ...options,
                volume: options.volume ?? get().volume
            };
            if (!activeUtterance) {
                speakNow(text, resolvedOptions);
                return;
            }
            if (resolvedOptions.priority === "high") {
                pendingResponsive = {
                    text,
                    options: resolvedOptions
                };
            } else {
                backgroundQueue.push({
                    text,
                    options: resolvedOptions
                });
            }
        },
        setScreenReaderMode: (enabled)=>{
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
            } catch  {
            // localStorage unavailable (private browsing, etc.) — setting just
            // won't persist across reloads; not worth failing the toggle over.
            }
            set({
                screenReaderMode: enabled,
                isSpeaking: false
            });
        },
        setVoiceURI: (voiceURI)=>{
            try {
                if (voiceURI) window.localStorage.setItem(VOICE_URI_KEY, voiceURI);
                else window.localStorage.removeItem(VOICE_URI_KEY);
            } catch  {
            // Not persisted this session; the picker still applies immediately.
            }
            set({
                voiceURI
            });
        },
        cancel: ()=>{
            // Reserved for deliberate, infrequent interruptions (restart, pause) —
            // not part of the routine per-keystroke announcement path.
            synthesis?.cancel();
            activeUtterance = null;
            backgroundQueue = [];
            pendingResponsive = null;
            set({
                isSpeaking: false
            });
        },
        setVolume: (volume)=>set({
                volume: Math.max(0, Math.min(1, volume))
            }),
        playSound: (type)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$AudioContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeAudioContext"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$sfx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playSfx"])(type, get().volume);
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/StoreHydrator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreHydrator",
    ()=>StoreHydrator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useProfileStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useAudioStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function StoreHydrator() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreHydrator.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"].getState().init();
            __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfileStore"].getState().loadProfiles();
        }
    }["StoreHydrator.useEffect"], []);
    return null;
}
_s(StoreHydrator, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = StoreHydrator;
var _c;
__turbopack_context__.k.register(_c, "StoreHydrator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/ServiceWorkerRegister.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceWorkerRegister",
    ()=>ServiceWorkerRegister
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function ServiceWorkerRegister() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceWorkerRegister.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!("serviceWorker" in navigator)) return;
            // Skip in local dev to avoid caching interfering with hot reload.
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
        }
    }["ServiceWorkerRegister.useEffect"], []);
    return null;
}
_s(ServiceWorkerRegister, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ServiceWorkerRegister;
var _c;
__turbopack_context__.k.register(_c, "ServiceWorkerRegister");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0wpn4bj._.js.map