(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/useProfile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProfile",
    ()=>useProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react/shallow.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useProfileStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useProfile() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfileStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "useProfile.useProfileStore.useShallow": (state)=>({
                profiles: state.profiles,
                currentProfile: state.currentProfile,
                isLoading: state.isLoading,
                isHydrated: state.isHydrated,
                createProfile: state.createProfile,
                switchProfile: state.switchProfile,
                updateProfile: state.updateProfile,
                deleteProfile: state.deleteProfile
            })
    }["useProfile.useProfileStore.useShallow"]));
}
_s(useProfile, "OMRAbLCgxe6o4tkepanLHDIdBOo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useProfileStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfileStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useAudioEngine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAudio",
    ()=>useAudio,
    "useAudioEngine",
    ()=>useAudioEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react/shallow.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useAudioStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function useAudio() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "useAudio.useAudioStore.useShallow": (s)=>({
                speak: s.speak,
                playSound: s.playSound,
                setVolume: s.setVolume,
                isSpeaking: s.isSpeaking,
                cancel: s.cancel,
                screenReaderMode: s.screenReaderMode,
                setScreenReaderMode: s.setScreenReaderMode,
                availableVoices: s.availableVoices,
                voiceURI: s.voiceURI,
                setVoiceURI: s.setVoiceURI
            })
    }["useAudio.useAudioStore.useShallow"]));
}
_s(useAudio, "YE/HhEivzqRpzK4i6K1mx6tqL94=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"]
    ];
});
function useAudioEngine() {
    _s1();
    return useAudio();
}
_s1(useAudioEngine, "sMyln5sZqiMAWFq3eAbAtAe4A98=", false, function() {
    return [
        useAudio
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/db/metrics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addFingerHealthSnapshot",
    ()=>addFingerHealthSnapshot,
    "addKeystrokeLogs",
    ()=>addKeystrokeLogs,
    "addSessionMetrics",
    ()=>addSessionMetrics,
    "getDueSpacedRepetitionItems",
    ()=>getDueSpacedRepetitionItems,
    "getKeystrokesBySession",
    ()=>getKeystrokesBySession,
    "getLatestFingerHealth",
    ()=>getLatestFingerHealth,
    "getLatestMetric",
    ()=>getLatestMetric,
    "getMetricsByUser",
    ()=>getMetricsByUser,
    "getMetricsByUserAndStage",
    ()=>getMetricsByUserAndStage,
    "getRecentKeystrokes",
    ()=>getRecentKeystrokes,
    "getSpacedRepetitionItems",
    ()=>getSpacedRepetitionItems,
    "getStageProgress",
    ()=>getStageProgress,
    "getWeakKeyPairs",
    ()=>getWeakKeyPairs,
    "markStageComplete",
    ()=>markStageComplete,
    "saveWeakKeyPairs",
    ()=>saveWeakKeyPairs,
    "upsertSpacedRepetitionItem",
    ()=>upsertSpacedRepetitionItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/client.ts [app-client] (ecmascript)");
;
async function addSessionMetrics(metrics) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    return db.add("metrics", metrics);
}
async function getMetricsByUser(username) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    return db.getAllFromIndex("metrics", "username", username);
}
async function getMetricsByUserAndStage(username, stage) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    return db.getAllFromIndex("metrics", "username_stage", [
        username,
        stage
    ]);
}
async function getLatestMetric(username) {
    const all = await getMetricsByUser(username);
    return all.sort((a, b)=>b.timestamp.localeCompare(a.timestamp))[0];
}
async function addKeystrokeLogs(logs) {
    if (logs.length === 0) return;
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    const tx = db.transaction("keystrokes", "readwrite");
    await Promise.all(logs.map((log)=>tx.store.add(log)));
    await tx.done;
}
async function getKeystrokesBySession(sessionId) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    return db.getAllFromIndex("keystrokes", "sessionId", sessionId);
}
async function getRecentKeystrokes(username, limit = 500) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    const all = await db.getAllFromIndex("keystrokes", "username", username);
    return all.slice(-limit);
}
async function addFingerHealthSnapshot(snapshot) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    await db.add("fingerHealth", snapshot);
}
async function getLatestFingerHealth(username) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    const all = await db.getAllFromIndex("fingerHealth", "username", username);
    return all.sort((a, b)=>b.timestamp.localeCompare(a.timestamp))[0];
}
async function saveWeakKeyPairs(username, pairs) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    const tx = db.transaction("weakKeyPairs", "readwrite");
    // Replace this user's existing rows with the freshly computed set.
    const existing = await tx.store.index("username").getAll(username);
    await Promise.all(existing.map((row)=>tx.store.delete(row.id)));
    await Promise.all(pairs.map((pair)=>tx.store.add({
            ...pair,
            username
        })));
    await tx.done;
}
async function getWeakKeyPairs(username) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    return db.getAllFromIndex("weakKeyPairs", "username", username);
}
async function getSpacedRepetitionItems(username) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    return db.getAllFromIndex("spacedRepetition", "username", username);
}
async function getDueSpacedRepetitionItems(username, asOf = new Date().toISOString()) {
    const items = await getSpacedRepetitionItems(username);
    return items.filter((item)=>item.nextReview <= asOf);
}
async function upsertSpacedRepetitionItem(item) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    const tx = db.transaction("spacedRepetition", "readwrite");
    const existing = await tx.store.index("username_key").get([
        item.username,
        item.key
    ]);
    if (existing) {
        await tx.store.put({
            ...existing,
            ...item
        });
    } else {
        await tx.store.add(item);
    }
    await tx.done;
}
async function markStageComplete(username, stage) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    const tx = db.transaction("stageProgress", "readwrite");
    const existing = await tx.store.index("username_stage").get([
        username,
        stage
    ]);
    const row = {
        ...existing,
        username,
        stage,
        completed: true,
        updatedAt: new Date().toISOString()
    };
    if (existing) {
        await tx.store.put({
            ...existing,
            ...row
        });
    } else {
        await tx.store.add(row);
    }
    await tx.done;
}
async function getStageProgress(username) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
    return db.getAllFromIndex("stageProgress", "username", username);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/adaptive/keyLogger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FINGER_MAP",
    ()=>FINGER_MAP,
    "buildKeystrokeLog",
    ()=>buildKeystrokeLog,
    "calculateAccuracy",
    ()=>calculateAccuracy,
    "calculateWPM",
    ()=>calculateWPM,
    "classifyKey",
    ()=>classifyKey,
    "summarizeSession",
    ()=>summarizeSession
]);
const FINGER_MAP = {
    q: {
        finger: "pinky",
        hand: "left",
        row: "top"
    },
    w: {
        finger: "ring",
        hand: "left",
        row: "top"
    },
    e: {
        finger: "middle",
        hand: "left",
        row: "top"
    },
    r: {
        finger: "index",
        hand: "left",
        row: "top"
    },
    t: {
        finger: "index",
        hand: "left",
        row: "top"
    },
    a: {
        finger: "pinky",
        hand: "left",
        row: "home"
    },
    s: {
        finger: "ring",
        hand: "left",
        row: "home"
    },
    d: {
        finger: "middle",
        hand: "left",
        row: "home"
    },
    f: {
        finger: "index",
        hand: "left",
        row: "home"
    },
    g: {
        finger: "index",
        hand: "left",
        row: "home"
    },
    z: {
        finger: "pinky",
        hand: "left",
        row: "bottom"
    },
    x: {
        finger: "ring",
        hand: "left",
        row: "bottom"
    },
    c: {
        finger: "middle",
        hand: "left",
        row: "bottom"
    },
    v: {
        finger: "index",
        hand: "left",
        row: "bottom"
    },
    b: {
        finger: "index",
        hand: "left",
        row: "bottom"
    },
    y: {
        finger: "index",
        hand: "right",
        row: "top"
    },
    u: {
        finger: "index",
        hand: "right",
        row: "top"
    },
    i: {
        finger: "middle",
        hand: "right",
        row: "top"
    },
    o: {
        finger: "ring",
        hand: "right",
        row: "top"
    },
    p: {
        finger: "pinky",
        hand: "right",
        row: "top"
    },
    h: {
        finger: "index",
        hand: "right",
        row: "home"
    },
    j: {
        finger: "index",
        hand: "right",
        row: "home"
    },
    k: {
        finger: "middle",
        hand: "right",
        row: "home"
    },
    l: {
        finger: "ring",
        hand: "right",
        row: "home"
    },
    ";": {
        finger: "pinky",
        hand: "right",
        row: "home"
    },
    n: {
        finger: "index",
        hand: "right",
        row: "bottom"
    },
    m: {
        finger: "index",
        hand: "right",
        row: "bottom"
    },
    ",": {
        finger: "middle",
        hand: "right",
        row: "bottom"
    },
    ".": {
        finger: "ring",
        hand: "right",
        row: "bottom"
    },
    "/": {
        finger: "pinky",
        hand: "right",
        row: "bottom"
    },
    // Number row + shifted symbols (Stage_5's key set, see
    // data/dictionaries/stage5.json). Row is approximated as "top" since the
    // number row sits directly above it and there's no dedicated bucket.
    "1": {
        finger: "pinky",
        hand: "left",
        row: "top"
    },
    "2": {
        finger: "ring",
        hand: "left",
        row: "top"
    },
    "3": {
        finger: "middle",
        hand: "left",
        row: "top"
    },
    "4": {
        finger: "index",
        hand: "left",
        row: "top"
    },
    "5": {
        finger: "index",
        hand: "left",
        row: "top"
    },
    "6": {
        finger: "index",
        hand: "right",
        row: "top"
    },
    "7": {
        finger: "index",
        hand: "right",
        row: "top"
    },
    "8": {
        finger: "middle",
        hand: "right",
        row: "top"
    },
    "9": {
        finger: "ring",
        hand: "right",
        row: "top"
    },
    "0": {
        finger: "pinky",
        hand: "right",
        row: "top"
    },
    "!": {
        finger: "pinky",
        hand: "left",
        row: "top"
    },
    "@": {
        finger: "ring",
        hand: "left",
        row: "top"
    },
    "#": {
        finger: "middle",
        hand: "left",
        row: "top"
    },
    $: {
        finger: "index",
        hand: "left",
        row: "top"
    },
    "%": {
        finger: "index",
        hand: "left",
        row: "top"
    },
    "&": {
        finger: "index",
        hand: "right",
        row: "top"
    },
    "-": {
        finger: "pinky",
        hand: "right",
        row: "top"
    },
    "'": {
        finger: "pinky",
        hand: "right",
        row: "home"
    }
};
function classifyKey(key) {
    return FINGER_MAP[key.toLowerCase()];
}
function buildKeystrokeLog(params) {
    const mapping = classifyKey(params.key);
    return {
        username: params.username,
        sessionId: params.sessionId,
        key: params.key,
        expectedKey: params.expectedKey,
        isCorrect: params.isCorrect,
        timestamp: new Date(params.nowMs).toISOString(),
        interKeyInterval: params.nowMs - params.lastKeyTimestampMs,
        finger: mapping?.finger ?? "unknown",
        hand: mapping?.hand,
        row: mapping?.row
    };
}
function calculateWPM(correctKeystrokes, durationSeconds) {
    if (durationSeconds <= 0) return 0;
    const minutes = durationSeconds / 60;
    return Math.round(correctKeystrokes / 5 / minutes * 100) / 100;
}
function calculateAccuracy(correctKeystrokes, totalKeystrokes) {
    if (totalKeystrokes === 0) return 100;
    return Math.round(correctKeystrokes / totalKeystrokes * 10000) / 100; // 0-100, 2dp
}
function summarizeSession(logs) {
    const totalKeystrokes = logs.length;
    const correctKeystrokes = logs.filter((l)=>l.isCorrect).length;
    const errors = totalKeystrokes - correctKeystrokes;
    const durationSeconds = logs.length > 1 ? (new Date(logs[logs.length - 1].timestamp).getTime() - new Date(logs[0].timestamp).getTime()) / 1000 : 0;
    const leftHandLogs = logs.filter((l)=>l.hand === "left");
    const rightHandLogs = logs.filter((l)=>l.hand === "right");
    const fingerAccuracy = {};
    const byFinger = groupBy(logs, (l)=>l.finger);
    for (const [finger, fingerLogs] of Object.entries(byFinger)){
        fingerAccuracy[finger] = calculateAccuracy(fingerLogs.filter((l)=>l.isCorrect).length, fingerLogs.length);
    }
    return {
        totalKeystrokes,
        correctKeystrokes,
        errors,
        durationSeconds,
        wpm: calculateWPM(correctKeystrokes, durationSeconds),
        accuracy: calculateAccuracy(correctKeystrokes, totalKeystrokes),
        leftHandAccuracy: calculateAccuracy(leftHandLogs.filter((l)=>l.isCorrect).length, leftHandLogs.length),
        rightHandAccuracy: calculateAccuracy(rightHandLogs.filter((l)=>l.isCorrect).length, rightHandLogs.length),
        fingerAccuracy,
        averageInterKeyIntervalMs: logs.length > 0 ? logs.reduce((sum, l)=>sum + l.interKeyInterval, 0) / logs.length : 0
    };
}
function groupBy(items, keyFn) {
    return items.reduce((acc, item)=>{
        const key = keyFn(item);
        (acc[key] ??= []).push(item);
        return acc;
    }, {});
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useKeystrokeLogger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeystrokeLogger",
    ()=>useKeystrokeLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useProfile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/metrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$keyLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/adaptive/keyLogger.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useKeystrokeLogger() {
    _s();
    const { currentProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"])();
    const [sessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useKeystrokeLogger.useState": ()=>`${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
    }["useKeystrokeLogger.useState"]);
    const lastKeyTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const keystrokeBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const bufferTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flushBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKeystrokeLogger.useCallback[flushBuffer]": async ()=>{
            if (keystrokeBufferRef.current.length === 0) return;
            const batch = keystrokeBufferRef.current;
            keystrokeBufferRef.current = [];
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addKeystrokeLogs"])(batch);
            } catch (error) {
                console.error("Failed to flush keystroke buffer:", error);
            }
        }
    }["useKeystrokeLogger.useCallback[flushBuffer]"], []);
    const logKeystroke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKeystrokeLogger.useCallback[logKeystroke]": (key, expectedKey, isCorrect)=>{
            if (!currentProfile) return;
            const now = Date.now();
            const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$keyLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildKeystrokeLog"])({
                username: currentProfile.username,
                sessionId,
                key,
                expectedKey,
                isCorrect,
                nowMs: now,
                lastKeyTimestampMs: lastKeyTimeRef.current
            });
            lastKeyTimeRef.current = now;
            keystrokeBufferRef.current.push(log);
            if (bufferTimeoutRef.current) clearTimeout(bufferTimeoutRef.current);
            bufferTimeoutRef.current = setTimeout({
                "useKeystrokeLogger.useCallback[logKeystroke]": ()=>{
                    flushBuffer();
                }
            }["useKeystrokeLogger.useCallback[logKeystroke]"], 1000);
            // Flush immediately once the buffer gets large, so a long session
            // doesn't hold hundreds of unsaved keystrokes in memory.
            if (keystrokeBufferRef.current.length >= 100) {
                flushBuffer();
            }
        }
    }["useKeystrokeLogger.useCallback[logKeystroke]"], [
        currentProfile,
        sessionId,
        flushBuffer
    ]);
    const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKeystrokeLogger.useCallback[cleanup]": async ()=>{
            if (bufferTimeoutRef.current) clearTimeout(bufferTimeoutRef.current);
            await flushBuffer();
        }
    }["useKeystrokeLogger.useCallback[cleanup]"], [
        flushBuffer
    ]);
    return {
        logKeystroke,
        sessionId,
        // Returns a promise now — callers that need every keystroke persisted
        // before reading it back (e.g. adaptive scoring right after a session
        // ends) can `await` this instead of racing an unresolved flush.
        flushBuffer: cleanup
    };
}
_s(useKeystrokeLogger, "70Q+WnsTm6+LIBFROMRMBVGKOPo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/adaptive/weakKeyDetector.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// engines/adaptive/weakKeyDetector.ts
__turbopack_context__.s([
    "detectWeakKeyPairs",
    ()=>detectWeakKeyPairs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$keyLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/adaptive/keyLogger.ts [app-client] (ecmascript)");
;
const MIN_ATTEMPTS_TO_FLAG = 5;
const ERROR_RATE_THRESHOLD = 0.25; // 25%+ wrong = "weak"
function detectWeakKeyPairs(logs) {
    const pairStats = new Map();
    // Attempts-per-expected-key, so error rate is "how often was this key
    // pair involved in a mistake" relative to how often the expected key
    // was attempted at all.
    const attemptsPerKey = new Map();
    for (const log of logs){
        const expected = log.expectedKey.toLowerCase();
        attemptsPerKey.set(expected, (attemptsPerKey.get(expected) ?? 0) + 1);
    }
    for (const log of logs){
        if (log.isCorrect) continue;
        const expected = log.expectedKey.toLowerCase();
        const actual = log.key.toLowerCase();
        if (!expected || !actual || expected === actual) continue;
        const pairKey = [
            expected,
            actual
        ].sort().join("-");
        const entry = pairStats.get(pairKey) ?? {
            key1: expected,
            key2: actual,
            errors: 0,
            attempts: 0
        };
        entry.errors += 1;
        entry.attempts = (attemptsPerKey.get(expected) ?? 0) + (attemptsPerKey.get(actual) ?? 0);
        pairStats.set(pairKey, entry);
    }
    const weakPairs = [];
    for (const { key1, key2, errors, attempts } of pairStats.values()){
        if (attempts < MIN_ATTEMPTS_TO_FLAG) continue;
        const errorRate = attempts === 0 ? 0 : errors / attempts;
        if (errorRate < ERROR_RATE_THRESHOLD) continue;
        const finger1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$keyLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classifyKey"])(key1);
        const finger2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$keyLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classifyKey"])(key2);
        const fingerConflict = Boolean(finger1 && finger2 && finger1.finger === finger2.finger && finger1.hand === finger2.hand);
        weakPairs.push({
            key1,
            key2,
            errorRate: Math.round(errorRate * 1000) / 1000,
            attempts,
            fingerConflict,
            recommendation: buildRecommendation(key1, key2, fingerConflict)
        });
    }
    return weakPairs.sort((a, b)=>b.errorRate - a.errorRate);
}
function buildRecommendation(key1, key2, fingerConflict) {
    if (fingerConflict) {
        return `"${key1}" and "${key2}" share the same finger — slow down and let the finger fully reset between them.`;
    }
    return `Mixing up "${key1}" and "${key2}" — try a short drill alternating just these two keys.`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/adaptive/spacedRepetition.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// engines/adaptive/spacedRepetition.ts
__turbopack_context__.s([
    "createSpacedRepetitionItem",
    ()=>createSpacedRepetitionItem,
    "isDue",
    ()=>isDue,
    "scheduleReview",
    ()=>scheduleReview
]);
const MIN_EASE_FACTOR = 1.3;
const DEFAULT_EASE_FACTOR = 2.5;
function createSpacedRepetitionItem(username, key, stage) {
    const now = new Date().toISOString();
    return {
        username,
        key,
        stage,
        easeFactor: DEFAULT_EASE_FACTOR,
        interval: 0,
        lastPracticed: now,
        nextReview: now,
        repetitionCount: 0,
        correctCount: 0,
        incorrectCount: 0,
        consecCorrect: 0,
        consecIncorrect: 0
    };
}
function scheduleReview(item, wasCorrect) {
    const quality = wasCorrect ? 5 : 2;
    const now = new Date();
    let { easeFactor, interval, repetitionCount, correctCount, incorrectCount, consecCorrect, consecIncorrect } = item;
    easeFactor = Math.max(MIN_EASE_FACTOR, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    if (wasCorrect) {
        correctCount += 1;
        consecCorrect += 1;
        consecIncorrect = 0;
        if (repetitionCount === 0) {
            interval = 1;
        } else if (repetitionCount === 1) {
            interval = 3;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        repetitionCount += 1;
    } else {
        incorrectCount += 1;
        consecIncorrect += 1;
        consecCorrect = 0;
        // A miss resets the interval — review again soon rather than in days.
        repetitionCount = 0;
        interval = 0; // due again today
    }
    const nextReview = new Date(now);
    nextReview.setDate(nextReview.getDate() + interval);
    return {
        ...item,
        easeFactor: Math.round(easeFactor * 100) / 100,
        interval,
        repetitionCount,
        correctCount,
        incorrectCount,
        consecCorrect,
        consecIncorrect,
        lastPracticed: now.toISOString(),
        nextReview: nextReview.toISOString()
    };
}
function isDue(item, asOf = new Date()) {
    return new Date(item.nextReview).getTime() <= asOf.getTime();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/dictionaries/stage1.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "stage": "Stage_1",
    "mode": "keys",
    "keys": [
        "a",
        "s",
        "d",
        "f",
        "j",
        "k",
        "l",
        ";"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/dictionaries/stage2.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "stage": "Stage_2",
    "mode": "keys",
    "keys": [
        "g",
        "h",
        "a",
        "s",
        "d",
        "f",
        "j",
        "k",
        "l",
        ";"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/dictionaries/stage3.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "stage": "Stage_3",
    "mode": "keys",
    "keys": [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/dictionaries/stage4.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "stage": "Stage_4",
    "mode": "keys",
    "keys": [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "/"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/dictionaries/stage5.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "stage": "Stage_5",
    "mode": "keys",
    "keys": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "!",
        "@",
        "#",
        "$",
        "%",
        "&",
        "-",
        "'"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/dictionaries/stage6.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"stage\":\"Stage_6\",\"mode\":\"words\",\"words\":[\"in\",\"on\",\"at\",\"it\",\"is\",\"up\",\"an\",\"as\",\"am\",\"if\",\"go\",\"no\",\"so\",\"to\",\"we\",\"cat\",\"dog\",\"run\",\"sun\",\"hat\",\"bat\",\"top\",\"cup\",\"red\",\"big\",\"hot\",\"wet\",\"yes\",\"fun\",\"bag\",\"box\",\"key\",\"leg\",\"map\",\"net\",\"pig\",\"rug\",\"van\",\"web\",\"zoo\",\"jam\",\"kid\",\"lid\",\"mud\",\"nap\",\"oil\",\"pen\",\"rat\",\"sit\",\"tan\",\"wig\",\"yak\",\"far\",\"wave\",\"hope\",\"calm\",\"kind\",\"warm\",\"safe\",\"true\",\"free\",\"easy\",\"fair\",\"my\",\"me\",\"he\",\"be\",\"by\",\"do\",\"of\",\"or\",\"out\",\"see\",\"all\",\"and\",\"but\",\"not\",\"one\",\"two\",\"day\",\"man\",\"boy\",\"girl\",\"home\",\"work\",\"food\",\"play\",\"love\",\"life\",\"time\",\"hand\",\"eye\",\"ear\",\"nose\",\"face\",\"head\",\"back\",\"arm\",\"foot\",\"book\",\"desk\",\"door\",\"room\",\"car\",\"bus\",\"rain\",\"wind\",\"snow\",\"cold\",\"cool\",\"star\",\"moon\",\"week\",\"year\",\"sad\",\"nice\",\"mean\",\"tall\",\"long\",\"wide\",\"deep\",\"high\",\"low\",\"fast\",\"slow\",\"hard\",\"soft\",\"dark\",\"open\",\"good\",\"bad\",\"new\",\"old\",\"weak\",\"sick\",\"full\",\"same\",\"much\",\"many\",\"few\",\"most\",\"some\",\"any\",\"soon\",\"late\",\"also\",\"too\",\"very\",\"just\",\"only\",\"know\",\"feel\",\"want\",\"need\",\"ask\",\"tell\",\"talk\",\"look\",\"hear\",\"hold\",\"walk\",\"jump\",\"lie\",\"wake\",\"eat\",\"cook\",\"bake\",\"wash\",\"dust\",\"fix\",\"draw\",\"read\",\"sing\",\"cry\",\"push\",\"pull\",\"lift\",\"drop\",\"kick\",\"hit\",\"clap\",\"come\",\"stay\",\"lead\",\"help\",\"save\",\"grow\",\"try\",\"win\",\"lose\",\"add\",\"age\",\"aid\",\"aim\",\"air\",\"ale\",\"ant\",\"ape\",\"arc\",\"are\",\"ark\",\"art\",\"ash\",\"ate\",\"awe\",\"axe\",\"ban\",\"bar\",\"bay\",\"bed\",\"bee\",\"bet\",\"bid\",\"bin\",\"bit\",\"bow\",\"bud\",\"bug\",\"bun\",\"buy\",\"cab\",\"cam\",\"cap\",\"cop\",\"cow\",\"cub\",\"cut\",\"dad\",\"dam\",\"den\",\"dew\",\"did\",\"die\",\"dig\",\"dim\",\"dip\",\"doe\",\"dot\",\"dry\",\"dub\",\"dud\",\"due\",\"dug\",\"dye\",\"eel\",\"egg\",\"end\",\"era\",\"eve\",\"ewe\",\"fan\",\"fat\",\"fax\",\"fed\",\"fee\",\"fig\",\"fin\",\"fir\",\"fit\",\"fly\",\"foe\",\"for\",\"fox\",\"fry\",\"fur\",\"gag\",\"gal\",\"gap\",\"gas\",\"gel\",\"gin\",\"gnu\",\"god\",\"got\",\"gum\",\"gun\",\"gut\",\"guy\",\"gym\",\"had\",\"ham\",\"has\",\"hay\",\"hen\",\"her\",\"hew\",\"hex\",\"hid\",\"him\",\"hip\",\"his\",\"hog\",\"hop\",\"how\",\"hub\",\"hue\",\"hug\",\"hum\",\"hut\",\"ice\",\"icy\",\"ill\",\"imp\",\"ink\",\"inn\",\"ion\",\"ire\",\"irk\",\"its\",\"ivy\",\"jab\",\"jag\",\"jar\",\"jaw\",\"jay\",\"jet\",\"jig\",\"job\",\"jog\",\"jot\",\"joy\",\"jug\",\"jut\",\"keg\",\"ken\",\"kin\",\"kit\",\"lab\",\"lad\",\"lag\",\"lap\",\"law\",\"lay\",\"lea\",\"led\",\"let\",\"lip\",\"lit\",\"log\",\"lot\",\"mad\",\"mar\",\"mat\",\"maw\",\"max\",\"may\",\"men\",\"met\",\"mid\",\"mix\",\"mob\",\"mod\",\"mom\",\"mop\",\"mow\",\"mug\",\"nab\",\"nag\",\"nil\",\"nip\",\"nit\",\"nod\",\"nor\",\"now\",\"oak\",\"oar\",\"oat\",\"odd\",\"ode\",\"off\",\"oft\",\"opt\",\"orb\",\"ore\",\"our\",\"owe\",\"owl\",\"own\",\"pad\",\"pal\",\"pan\",\"pap\",\"par\",\"pat\",\"paw\",\"pay\",\"pea\",\"peg\",\"pep\",\"per\",\"pet\",\"pie\",\"pin\",\"pit\",\"ply\",\"pod\",\"pop\",\"pot\",\"pow\",\"pro\",\"pry\",\"pub\",\"pug\",\"pun\",\"pus\",\"put\",\"rag\",\"ram\",\"ran\",\"rap\",\"raw\",\"ray\",\"ref\",\"rep\",\"rib\",\"rid\",\"rig\",\"rim\",\"rip\",\"rob\",\"rod\",\"roe\",\"rot\",\"row\",\"rub\",\"rum\",\"rut\",\"rye\",\"sac\",\"sag\",\"sap\",\"sat\",\"saw\",\"sea\",\"set\",\"sew\",\"she\",\"shy\",\"sin\",\"sip\",\"sir\",\"sis\",\"six\",\"ski\",\"sky\",\"sly\",\"sob\",\"sod\",\"son\",\"sot\",\"sow\",\"soy\",\"spa\",\"spy\",\"sty\",\"sub\",\"sue\",\"sum\",\"tab\",\"tad\",\"tag\",\"tam\",\"tap\",\"tar\",\"tea\",\"ten\",\"the\",\"thy\",\"tie\",\"tin\",\"tip\",\"toe\",\"ton\",\"tot\",\"tow\",\"urn\",\"use\",\"vat\",\"vet\",\"vex\",\"via\",\"vie\",\"vim\",\"vow\",\"wad\",\"wag\",\"war\",\"was\",\"wax\",\"way\",\"wed\",\"who\",\"why\",\"wit\",\"woe\",\"wok\",\"won\",\"woo\",\"wow\",\"yam\",\"yap\",\"yaw\",\"yea\",\"yet\",\"yew\",\"zap\",\"zen\",\"zig\",\"zip\",\"able\",\"ache\",\"acid\",\"acme\",\"acre\",\"aged\",\"agog\",\"airy\",\"ajar\",\"ally\",\"arch\",\"area\",\"army\",\"away\",\"awed\",\"axle\",\"baby\",\"bald\",\"bale\",\"ball\",\"band\",\"bare\",\"bark\",\"barn\",\"base\",\"bath\",\"bead\",\"beak\",\"beam\",\"bean\",\"bear\",\"beat\",\"beef\",\"been\",\"beer\",\"bell\",\"belt\",\"bend\",\"bent\",\"best\",\"bike\",\"bill\",\"bind\",\"bite\",\"blew\",\"blob\",\"blot\",\"blow\",\"blue\",\"blur\",\"boar\",\"boat\",\"body\",\"bold\",\"bolt\",\"bomb\",\"bond\",\"bone\",\"boom\",\"boot\",\"bore\",\"born\",\"boss\",\"both\",\"bout\",\"bowl\",\"bred\",\"brew\",\"brim\",\"brow\",\"buck\",\"buff\",\"bulb\",\"bulk\",\"bull\",\"bump\",\"burn\",\"bury\",\"bush\",\"busy\",\"butt\",\"buzz\",\"cafe\",\"cage\",\"cake\",\"calf\",\"call\",\"came\",\"cane\",\"cape\",\"card\",\"care\",\"cart\",\"case\",\"cash\",\"cast\",\"cave\",\"cell\",\"chat\",\"chef\",\"chew\",\"chin\",\"chip\",\"chop\",\"cite\",\"city\",\"clad\",\"clam\",\"clan\",\"claw\",\"clay\",\"clip\",\"clog\",\"clot\",\"club\",\"clue\",\"coal\",\"coat\",\"code\",\"coil\",\"coin\",\"cope\",\"copy\",\"cord\",\"core\",\"cork\",\"corn\",\"cost\",\"cosy\",\"coup\",\"cove\",\"cozy\",\"crab\",\"crew\",\"crib\",\"crop\",\"crow\",\"cube\",\"cult\",\"curb\",\"cute\",\"daft\",\"dawn\",\"dead\",\"deal\",\"dear\",\"debt\",\"deck\",\"deed\",\"deli\",\"deny\",\"dial\",\"dice\",\"diet\",\"dive\",\"dock\",\"does\",\"doll\",\"dome\",\"done\",\"dose\",\"down\",\"doze\",\"drab\",\"drag\",\"drew\",\"drip\",\"drum\",\"dual\",\"dumb\",\"dump\",\"dung\",\"dusk\",\"duty\",\"dyed\",\"each\",\"earl\",\"earn\",\"ease\",\"edge\",\"edit\",\"else\",\"emit\",\"emu\",\"ends\",\"envy\",\"eons\",\"epic\",\"even\",\"ever\",\"evil\",\"exam\",\"exec\",\"exit\",\"fade\",\"fail\",\"fame\",\"fang\",\"fare\",\"farm\",\"fate\",\"fear\",\"feat\",\"feed\",\"feet\",\"fell\",\"felt\",\"file\",\"fill\",\"film\",\"find\",\"fine\",\"fire\",\"firm\",\"fish\",\"five\",\"flag\",\"flap\",\"flat\",\"flea\",\"fled\",\"flew\",\"flex\",\"flip\",\"flop\",\"flow\",\"flub\",\"flue\",\"foam\",\"fold\",\"folk\",\"fond\",\"fool\",\"ford\",\"fore\",\"fork\",\"form\",\"fort\",\"foul\",\"four\",\"fowl\",\"frog\",\"from\",\"fuel\",\"fume\",\"fund\",\"fuse\",\"fuss\",\"fuzz\",\"gale\",\"game\",\"gang\",\"gape\",\"garb\",\"gash\",\"gasp\",\"gate\",\"gave\",\"gaze\",\"gear\",\"geek\",\"geld\",\"germ\",\"gift\",\"gild\",\"give\",\"glad\",\"glow\",\"glue\",\"gnat\",\"gnaw\",\"goat\",\"goad\",\"goal\",\"gold\",\"golf\",\"gone\",\"gore\",\"gosh\",\"grab\",\"grad\",\"gram\",\"gray\",\"grey\",\"grid\",\"grim\",\"grin\",\"grip\",\"grit\",\"grog\",\"grub\",\"gulf\",\"gull\",\"gulp\",\"gush\",\"gust\",\"guts\",\"hack\",\"hail\",\"hair\",\"hale\",\"half\",\"hall\",\"halo\",\"halt\",\"hang\",\"hare\",\"harm\",\"harp\",\"hash\",\"hate\",\"haul\",\"have\",\"haze\",\"hazy\",\"heal\",\"heap\",\"heat\",\"heed\",\"heel\",\"heft\",\"held\",\"hell\",\"helm\",\"herb\",\"herd\",\"hero\",\"hers\",\"hike\",\"hill\",\"hilt\",\"hind\",\"hint\",\"hire\",\"hiss\",\"hive\",\"hoax\",\"hoe\",\"hole\",\"holy\",\"hone\",\"hood\",\"hoof\",\"hook\",\"hoop\",\"hoot\",\"horn\",\"hose\",\"host\",\"hour\",\"howl\",\"huge\",\"hull\",\"hump\",\"hung\",\"hunk\",\"hunt\",\"hurl\",\"hurt\",\"hush\",\"husk\",\"hymn\",\"hype\",\"icon\",\"idea\",\"idle\",\"idol\",\"inch\",\"into\",\"iron\",\"isle\",\"item\",\"jack\",\"jade\",\"jail\",\"jazz\",\"jean\",\"jeer\",\"jerk\",\"jest\",\"jive\",\"joan\",\"jobs\",\"jock\",\"joe\",\"john\",\"join\",\"joke\",\"jolt\",\"josh\",\"jowl\",\"jude\",\"judo\",\"jugs\",\"july\",\"june\",\"jung\",\"junk\",\"jury\",\"kale\",\"kang\",\"keel\",\"keen\",\"keep\",\"kelp\",\"kept\",\"kern\",\"kill\",\"kiln\",\"kilt\",\"king\",\"kirk\",\"kiss\",\"kite\",\"knee\",\"knew\",\"knit\",\"knob\",\"knot\",\"kohl\",\"kola\",\"kudu\",\"labs\",\"lace\",\"lack\",\"lacy\",\"lady\",\"laid\",\"lain\",\"lair\",\"lake\",\"lamb\",\"lame\",\"lamp\",\"land\",\"lane\",\"lang\",\"lard\",\"lash\",\"lass\",\"last\",\"laud\",\"lava\",\"lawn\",\"lazy\",\"leaf\",\"leak\",\"lean\",\"leap\",\"left\",\"lend\",\"lens\",\"lent\",\"less\",\"lest\",\"levy\",\"liar\",\"lice\",\"lick\",\"lids\",\"lied\",\"lien\",\"lieu\",\"like\",\"lily\",\"limb\",\"lime\",\"limn\",\"limp\",\"line\",\"link\",\"lint\",\"lion\",\"list\",\"live\",\"load\",\"loaf\",\"loan\",\"lobe\",\"lobo\",\"loch\",\"lock\",\"loco\",\"lode\",\"loft\",\"logo\",\"lone\",\"loom\",\"loon\",\"loop\",\"loot\",\"lord\",\"lore\",\"loss\",\"lost\",\"loud\",\"lowe\",\"luck\",\"lull\",\"lump\",\"lung\",\"lure\",\"lurk\",\"lush\",\"lust\",\"lute\",\"lynx\",\"lyre\",\"macs\",\"made\",\"maid\",\"mail\",\"main\",\"make\",\"male\",\"mall\",\"malt\",\"mane\",\"mare\",\"mark\",\"mars\",\"mart\",\"mash\",\"mask\",\"mass\",\"mast\",\"mate\",\"math\",\"mats\",\"maul\",\"maze\",\"mead\",\"meal\",\"meat\",\"meet\",\"meld\",\"melt\",\"memo\",\"mend\",\"menu\",\"meow\",\"mere\",\"mess\",\"mete\",\"mewl\",\"mice\",\"mick\",\"midi\",\"mild\",\"mile\",\"milk\",\"mill\",\"milt\",\"mind\",\"mine\",\"mini\",\"mink\",\"mint\",\"miss\",\"mist\",\"mite\",\"mitt\",\"moan\",\"moat\",\"mobs\",\"mock\",\"mode\",\"mold\",\"mole\",\"molt\",\"monk\",\"mood\",\"moor\",\"moos\",\"moot\",\"more\",\"morn\",\"mort\",\"moss\",\"mote\",\"moth\",\"move\",\"muck\",\"mule\",\"mull\",\"mult\",\"mump\",\"mums\",\"muse\",\"mush\",\"musk\",\"must\",\"mute\",\"mutt\",\"myth\",\"nail\",\"name\",\"nape\",\"navy\",\"near\",\"neat\",\"neck\",\"neon\",\"nest\",\"nets\",\"neve\",\"nevi\",\"newt\",\"next\",\"nick\",\"nigh\",\"nine\",\"node\",\"none\",\"noon\",\"norm\",\"note\",\"noun\",\"nova\",\"nude\",\"nuke\",\"null\",\"numb\",\"nuts\",\"oath\",\"obey\",\"odds\",\"oils\",\"oily\",\"oboe\",\"ogle\",\"okay\",\"omen\",\"omit\",\"once\",\"onto\",\"onus\",\"ooze\",\"opts\",\"oral\",\"orca\",\"oreo\",\"ouch\",\"ours\",\"oust\",\"oven\",\"over\",\"owes\",\"owls\",\"owns\",\"pace\",\"pack\",\"pact\",\"page\",\"paid\",\"pail\",\"pain\",\"pair\",\"pale\",\"pall\",\"palm\",\"pane\",\"pans\",\"pant\",\"papa\",\"pare\",\"park\",\"parr\",\"part\",\"pass\",\"past\",\"pate\",\"path\",\"pats\",\"pave\",\"pawn\",\"peak\",\"peal\",\"pear\",\"peat\",\"peck\",\"peek\",\"peel\",\"peep\",\"peer\",\"pelt\",\"pend\",\"pent\",\"peps\",\"perk\",\"perm\",\"pert\",\"pest\",\"pick\",\"pier\",\"pike\",\"pile\",\"pill\",\"pine\",\"pink\",\"pins\",\"pint\",\"pipe\",\"pity\",\"plan\",\"plat\",\"plea\",\"plod\",\"plop\",\"plot\",\"plow\",\"ploy\",\"plug\",\"plum\",\"plus\",\"pock\",\"poem\",\"poet\",\"poke\",\"pole\",\"poll\",\"polo\",\"pomp\",\"pond\",\"pony\",\"poof\",\"pool\",\"poor\",\"pope\",\"pops\",\"pore\",\"pork\",\"port\",\"pose\",\"posh\",\"post\",\"pots\",\"pour\",\"pout\",\"pray\",\"prep\",\"prey\",\"prig\",\"prim\",\"prod\",\"prof\",\"prom\",\"prop\",\"pros\",\"prow\",\"pubs\",\"puck\",\"puff\",\"puke\",\"pulp\",\"pump\",\"puns\",\"pupa\",\"pups\",\"pure\",\"purr\",\"puss\",\"puts\",\"putt\",\"quid\",\"quip\",\"quit\",\"quiz\",\"race\",\"rack\",\"raft\",\"rage\",\"raid\",\"rail\",\"rake\",\"ramp\",\"rang\",\"rank\",\"rant\",\"rape\",\"rare\",\"rash\",\"rasp\",\"rate\",\"rats\",\"rave\",\"raws\",\"rays\",\"real\",\"ream\",\"reap\",\"rear\",\"reef\",\"reel\",\"refs\",\"rein\",\"rely\",\"rend\",\"rent\",\"reps\",\"rest\",\"rich\",\"ride\",\"rift\",\"rill\",\"rime\",\"ring\",\"rink\",\"riot\",\"ripe\",\"rise\",\"risk\",\"rite\",\"ritz\",\"road\",\"roam\",\"roan\",\"roar\",\"robe\",\"rock\",\"rode\",\"roil\",\"roll\",\"romp\",\"rood\",\"roof\",\"rook\",\"root\",\"rope\",\"rose\",\"rosy\",\"rote\",\"rout\",\"rove\",\"rows\",\"rube\",\"ruck\",\"rude\",\"ruff\",\"ruin\",\"rule\",\"rump\",\"rung\",\"runs\",\"runt\",\"ruse\",\"rush\",\"rusk\",\"rust\",\"ruts\",\"sack\",\"sacs\",\"sade\",\"saga\",\"sage\",\"said\",\"sail\",\"sake\",\"sale\",\"salt\",\"sand\",\"sane\",\"sang\",\"sank\",\"saps\",\"sash\",\"sass\",\"sate\",\"sawn\",\"scab\",\"scad\",\"scag\",\"scam\",\"scan\",\"scar\",\"scat\",\"scow\",\"scud\",\"scum\",\"seal\",\"seam\",\"sear\",\"seas\",\"seat\",\"sect\",\"seed\",\"seek\",\"seem\",\"seen\",\"seep\",\"self\",\"sell\",\"semi\",\"send\",\"sent\",\"sept\",\"serf\",\"sets\",\"sett\",\"sewn\",\"shad\",\"shah\",\"sham\",\"shea\",\"shed\",\"shin\",\"ship\",\"shod\",\"shoe\",\"shog\",\"shoo\",\"shop\",\"shot\",\"show\",\"shun\",\"shut\",\"side\",\"sift\",\"sigh\",\"sign\",\"silk\",\"sill\",\"silt\",\"sine\",\"sink\",\"sips\",\"sire\",\"sirs\",\"site\",\"size\",\"skid\",\"skit\",\"slab\",\"slag\",\"slam\",\"slap\",\"slat\",\"slaw\",\"slay\",\"sled\",\"slew\",\"slid\",\"slim\",\"slip\",\"slit\",\"slob\",\"slog\",\"slop\",\"slot\",\"slub\",\"slue\",\"slug\",\"slum\",\"slur\",\"smog\",\"smug\",\"snag\",\"snap\",\"snip\",\"snob\",\"snub\",\"snug\",\"soak\",\"soap\",\"soar\",\"sock\",\"soda\",\"sofa\",\"soil\",\"sold\",\"sole\",\"solo\",\"song\",\"soot\",\"sore\",\"sort\",\"soul\",\"sour\",\"span\",\"spar\",\"spas\",\"spat\",\"spay\",\"spin\",\"spit\",\"spot\",\"spry\",\"spud\",\"spur\",\"stab\",\"stag\",\"stem\",\"step\",\"stew\",\"stir\",\"stop\",\"stub\",\"stud\",\"stun\",\"such\",\"suds\",\"sued\",\"suer\",\"sues\",\"sulk\",\"sump\",\"sung\",\"sunk\",\"suns\",\"sure\",\"surf\",\"swab\",\"swag\",\"swam\",\"swan\",\"swap\",\"swat\",\"sway\",\"swim\",\"swum\",\"sync\",\"tabs\",\"tack\",\"tact\",\"tags\",\"tail\",\"take\",\"tale\",\"tame\",\"tamp\",\"tang\",\"tank\",\"tape\",\"taps\",\"tare\",\"tarn\",\"tarp\",\"tart\",\"task\",\"tass\",\"taut\",\"tawn\",\"teak\",\"teal\",\"team\",\"tear\",\"teat\",\"tech\",\"teem\",\"teen\",\"tend\",\"tent\",\"term\",\"tern\",\"test\",\"text\",\"than\",\"that\",\"thee\",\"them\",\"then\",\"they\",\"thin\",\"this\",\"thou\",\"thud\",\"thug\",\"thus\",\"tick\",\"tide\",\"tidy\",\"tied\",\"tier\",\"tiff\",\"tile\",\"till\",\"tilt\",\"tine\",\"tint\",\"tiny\",\"tire\",\"toad\",\"toes\",\"toga\",\"toil\",\"told\",\"toll\",\"tomb\",\"tome\",\"tone\",\"tong\",\"tons\",\"took\",\"tool\",\"toot\",\"tops\",\"tore\",\"torn\",\"tote\",\"tour\",\"tout\",\"town\",\"toys\",\"tram\",\"trap\",\"tray\",\"tree\",\"trey\",\"trip\",\"trot\",\"trow\",\"troy\",\"tubs\",\"tuck\",\"tuff\",\"tugs\",\"tuna\",\"tune\",\"turf\",\"turn\",\"tush\",\"tusk\",\"tuts\",\"twig\",\"twin\",\"twit\",\"type\",\"typo\",\"tyre\",\"ugly\",\"ulna\",\"undo\",\"unit\",\"unto\",\"upas\",\"upon\",\"urea\",\"urge\",\"urns\",\"used\",\"user\",\"uses\",\"vain\",\"vale\",\"vamp\",\"vane\",\"vary\",\"vase\",\"vast\",\"vats\",\"veal\",\"veep\",\"veer\",\"veil\",\"vein\",\"vent\",\"verb\",\"vest\",\"veto\",\"vets\",\"vial\",\"vibe\",\"vice\",\"view\",\"vine\",\"visa\",\"vise\",\"void\",\"volt\",\"vote\",\"vows\",\"wade\",\"wadi\",\"waft\",\"wage\",\"wags\",\"waif\",\"wail\",\"wait\",\"wale\",\"wall\",\"walt\",\"wand\",\"wane\",\"ward\",\"ware\",\"warn\",\"warp\",\"wart\",\"wary\",\"wasp\",\"watt\",\"wavy\",\"weal\",\"wear\",\"weed\",\"weep\",\"weft\",\"weir\",\"weka\",\"weld\",\"well\",\"welt\",\"wend\",\"went\",\"wept\",\"were\",\"west\",\"wham\",\"what\",\"when\",\"whet\",\"whew\",\"whey\",\"whig\",\"whim\",\"whip\",\"whir\",\"whit\",\"whiz\",\"whoa\",\"whom\",\"wick\",\"wife\",\"wild\",\"wile\",\"will\",\"wilt\",\"wily\",\"wine\",\"wing\",\"wink\",\"wino\",\"wire\",\"wise\",\"wish\",\"wisp\",\"with\",\"wits\",\"woke\",\"wolf\",\"womb\",\"wont\",\"wood\",\"woof\",\"wool\",\"word\",\"wore\",\"worn\",\"wove\",\"wrap\",\"wren\",\"yard\",\"yarn\",\"yawn\",\"yell\",\"yelp\",\"yoga\",\"yoke\",\"yolk\",\"yore\",\"your\",\"yowl\",\"yule\",\"zero\",\"zest\",\"zigs\",\"zinc\",\"zing\",\"zion\",\"zone\",\"zoom\"],\"ngramHighlights\":{\"in\":[\"in\"],\"the\":[\"th\",\"he\"],\"her\":[\"he\",\"er\"],\"hen\":[\"he\"],\"win\":[\"in\"],\"pin\":[\"in\"],\"fin\":[\"in\"],\"germ\":[\"er\"]}}");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/dictionaries/stage7.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"stage\":\"Stage_7\",\"mode\":\"words\",\"words\":[\"jump!\",\"coding.\",\"fast?\",\"home;\",\"quiet,\",\"type!\",\"focus.\",\"speed?\",\"reach;\",\"learn!\",\"target.\",\"level?\",\"steady;\",\"rhythm!\",\"sprint.\",\"energy?\",\"signal;\",\"rocket!\",\"planet.\",\"wizard?\",\"castle;\",\"dragon!\",\"shadow.\",\"legend?\",\"portal;\",\"gentle!\",\"bright.\",\"silent?\",\"morning;\",\"evening!\",\"journey.\",\"victory?\",\"compass;\",\"chapter!\",\"mystery.\",\"courage?\",\"horizon;\",\"welcome!\",\"patient.\",\"confident?\",\"about?\",\"above;\",\"across!\",\"action.\",\"active?\",\"actual;\",\"addict!\",\"admit.\",\"adopt?\",\"adult;\",\"after!\",\"again.\",\"against?\",\"ageing;\",\"agency!\",\"agenda.\",\"agreed?\",\"ahead;\",\"alarm!\",\"alien.\",\"alive?\",\"allow;\",\"alone!\",\"along.\",\"already?\",\"also;\",\"alter!\",\"always.\",\"amazing?\",\"angel;\",\"anger!\",\"angle.\",\"angry?\",\"animal;\",\"annual!\",\"answer.\",\"anyway?\",\"apart;\",\"apple!\",\"apply.\",\"arena?\",\"argue;\",\"arise!\",\"armor.\",\"army?\",\"around;\",\"arrange!\",\"arrive.\",\"artist?\",\"aside;\",\"asset!\",\"assign.\",\"assist?\",\"attach;\",\"attack!\",\"attain.\",\"attempt?\",\"attend;\",\"attract!\",\"audio.\",\"audit?\",\"author;\",\"autumn!\",\"avenue.\",\"average?\",\"avoid;\",\"awake!\",\"award.\",\"aware?\",\"awful;\",\"baby!\",\"backup.\",\"balance?\",\"ballot;\",\"banker!\",\"barely.\",\"barrel?\",\"basket;\",\"battle!\",\"beach.\",\"beacon?\",\"beauty;\",\"become!\",\"before.\",\"behind?\",\"belong;\",\"beneath!\",\"benefit.\",\"beside?\",\"beyond;\",\"bishop!\",\"bitter.\",\"blame?\",\"blanket;\",\"blossom!\",\"board.\",\"boast?\",\"boost;\",\"border!\",\"bother.\",\"bottle?\",\"bottom;\",\"bounce!\",\"branch.\",\"breach?\",\"breath;\",\"bridge!\",\"brief.\",\"bright?\",\"bring;\",\"broad!\",\"broken.\",\"brother?\",\"brown;\",\"bucket!\",\"budget.\",\"build?\",\"bullet;\",\"bundle!\",\"burden.\",\"burner?\",\"burst;\",\"butter!\",\"button.\",\"buyer?\",\"cabin;\",\"camera!\",\"campus.\",\"cancel?\",\"cancer;\",\"candle!\",\"captain.\",\"carbon?\",\"career;\",\"carpet!\",\"carry.\",\"castle?\",\"casual;\",\"catcher!\",\"caution.\",\"center?\",\"chance;\",\"change!\",\"charge.\",\"cheap?\",\"check;\",\"cheese!\",\"cherry.\",\"chest?\",\"chief;\",\"child!\",\"choice.\",\"choose?\",\"church;\",\"circle!\",\"citizen.\",\"city?\",\"civil;\",\"claim!\",\"clarity.\",\"classic?\",\"clean;\",\"clear!\",\"client.\",\"climate?\",\"climb;\",\"clinic!\",\"clock.\",\"close?\",\"closer;\",\"clothes!\",\"cloudy.\",\"coach?\",\"coast;\",\"coffee!\",\"college.\",\"color?\",\"column;\",\"combat!\",\"comedy.\",\"coming?\",\"common;\",\"company!\",\"complain.\",\"complex?\",\"concept;\",\"concern!\",\"conduct.\",\"confirm?\",\"connect;\",\"conquer!\",\"consent.\",\"consider?\",\"contact;\",\"contain!\",\"content.\",\"contest?\",\"context;\",\"control!\",\"convince.\",\"corner?\",\"correct;\",\"costume!\",\"council.\",\"counter?\",\"country;\",\"couple!\",\"course.\",\"cousin?\",\"cover;\",\"crack!\",\"craft.\",\"crazy?\",\"create;\",\"credit!\",\"crime.\",\"crisis?\",\"critic;\",\"cross!\",\"crowd.\",\"crucial?\",\"crush;\",\"crystal!\",\"culture.\",\"curious?\",\"current;\",\"custom!\",\"cutter.\",\"cycle?\",\"daily;\",\"damage!\",\"dancer.\",\"danger?\",\"daring;\",\"dealer!\",\"debate.\",\"decade?\",\"defeat;\",\"defend!\",\"define.\",\"degree?\",\"delay;\",\"deliver!\",\"demand.\",\"denial?\",\"dental;\",\"deny!\",\"depart.\",\"depend?\",\"deploy;\",\"deposit!\",\"derive.\",\"deserve?\",\"design;\",\"desire!\",\"detail.\",\"detect?\",\"device;\",\"devote!\",\"differ.\",\"digest?\",\"dinner;\",\"direct!\",\"dirt.\",\"disable?\",\"discover;\",\"disease!\",\"dismiss.\",\"display?\",\"dispute;\",\"distant!\",\"divide.\",\"divine?\",\"doctor;\",\"document!\",\"dollar.\",\"domain?\",\"domestic;\",\"donate!\",\"double.\",\"doubt?\",\"downtown;\",\"dozen!\",\"dragon.\",\"drain?\",\"drama;\",\"drawn!\",\"dread.\",\"dream?\",\"dress;\",\"drink!\",\"driven.\",\"driver?\",\"during;\",\"duties!\",\"eager.\",\"earlier?\",\"earnest;\",\"eastern!\",\"economy.\",\"editor?\",\"educate;\",\"effect!\",\"effort.\",\"either?\",\"elder;\",\"elect!\",\"elegant.\",\"element?\",\"eleven;\",\"eliminate!\",\"embrace.\",\"emerge?\",\"emotion;\",\"empire!\",\"employ.\",\"enable?\",\"encounter;\",\"encourage!\",\"energy.\",\"engage?\",\"engine;\",\"enhance!\",\"enjoy.\",\"enough?\",\"ensure;\",\"enter!\",\"entire.\",\"entity?\",\"entrance;\",\"envelope!\",\"environment.\",\"episode?\",\"equal;\",\"equip!\",\"errand.\",\"escape?\",\"essential;\",\"estate!\",\"evaluate.\",\"evening?\",\"event;\",\"evident!\",\"exactly.\",\"examine?\",\"example;\",\"exceed!\",\"excellent.\",\"except?\",\"exchange;\",\"excited!\",\"exclude.\",\"execute?\",\"exist;\",\"expand!\",\"expect.\",\"expert?\",\"explain;\",\"explore!\",\"export.\",\"expose?\",\"extend;\",\"extent!\",\"extract.\",\"extreme?\",\"fabric;\",\"factor!\",\"factory.\",\"failed?\",\"fairly;\",\"faith!\",\"familiar.\",\"family?\",\"famous;\",\"faster!\",\"father.\",\"fault?\",\"favor;\",\"feather!\",\"feature.\",\"federal?\",\"feeling;\",\"female!\",\"festival.\",\"fever?\",\"fewer;\",\"fierce!\",\"figure.\",\"filter?\",\"final;\",\"finance!\",\"finding.\",\"finger?\",\"finish;\",\"firmly!\",\"first.\",\"fiscal?\",\"fitness;\",\"flavor!\",\"flexible.\",\"flight?\",\"float;\",\"flood!\",\"flour.\",\"flow?\",\"flower;\",\"fluent!\",\"flying.\",\"focus?\",\"follow;\",\"footer!\",\"forbid.\",\"force?\",\"forever;\",\"forget!\",\"formal.\",\"former?\",\"foster;\",\"found!\",\"fountain.\",\"fourth?\",\"fragile;\",\"frame!\",\"freedom.\",\"freeze?\",\"frequent;\",\"friend!\",\"fright.\",\"front?\",\"frozen;\",\"fruit!\",\"frustrate.\",\"fuel?\",\"full;\",\"function!\",\"fundamental.\",\"funny?\",\"further;\",\"future!\",\"gained.\",\"gallery?\",\"garbage;\",\"garden!\",\"garlic.\",\"gather?\",\"gender;\",\"general!\",\"gentle.\",\"genuine?\",\"gesture;\",\"giant!\",\"gladly.\",\"glance?\",\"global;\",\"glory!\",\"golden.\",\"govern?\",\"graceful;\",\"gradual!\",\"grand.\",\"grant?\",\"grateful;\",\"gravity!\",\"greater.\",\"greatest?\",\"green;\",\"greet!\",\"grief.\",\"grind?\",\"grip;\",\"ground!\",\"group.\",\"grow?\",\"growth;\",\"guarantee!\",\"guard.\",\"guessed?\",\"guest;\",\"guide!\",\"guilty.\",\"guitar?\",\"gym;\",\"habit!\",\"happen.\",\"happily?\",\"harbor;\",\"hardly!\",\"harmony.\",\"harvest?\",\"haste;\",\"hazard!\",\"headache.\",\"health?\",\"heaven;\",\"heavily!\",\"height.\",\"helmet?\",\"hero;\",\"hidden!\",\"highly.\",\"highway?\",\"hillside;\",\"hiring!\",\"hobby.\",\"holder?\",\"holiday;\",\"hollow!\",\"holy.\",\"honest?\",\"honor;\",\"horror!\",\"horse.\",\"hospital?\",\"hostile;\",\"hotel!\",\"hourly.\",\"housing?\",\"however;\",\"huge!\",\"human.\",\"humble?\",\"humor;\",\"hungry!\",\"hunter.\",\"hurry?\",\"hurt;\",\"husband!\",\"hybrid.\",\"ideal?\",\"ignore;\",\"immune!\",\"impact.\",\"impose?\",\"improve;\",\"income!\",\"indeed.\",\"indicate?\",\"individual;\",\"indoor!\",\"induce.\",\"industry?\",\"inevitable;\",\"infant!\",\"inform.\",\"initial?\",\"injury;\",\"inland!\",\"inner.\",\"insect?\",\"insert;\",\"inside!\",\"insist.\",\"inspect?\",\"install;\",\"instant!\",\"instead.\",\"institute?\",\"insure;\",\"intact!\",\"integral.\",\"intend?\",\"interact;\",\"interest!\",\"interim.\",\"internal?\",\"intervene;\",\"intimate!\",\"introduce.\",\"invest?\",\"invite;\",\"involve!\",\"ironic.\",\"island?\",\"isolate;\",\"issue!\",\"itself.\",\"jacket?\",\"jeans;\",\"jewel!\",\"joint.\",\"joke?\",\"journal;\",\"journey!\",\"joyful.\",\"judge?\",\"juice;\",\"junior.\",\"justice?\",\"justify;\",\"keeper!\",\"kernel.\",\"keyboard?\",\"kick;\",\"killer!\",\"kindly.\",\"kingdom?\",\"kitchen;\",\"knight!\",\"knowledge.\",\"label?\",\"labor;\",\"lack!\",\"ladder.\",\"landing?\",\"landscape;\",\"language!\",\"largely.\",\"laser?\",\"lasting;\",\"launch!\",\"lawyer.\",\"layer?\",\"lazy;\",\"leader!\",\"league.\",\"leather?\",\"lecture;\",\"legacy!\",\"legend.\",\"legislate?\",\"leisure;\",\"length!\",\"lesson.\",\"letter?\",\"level;\",\"liberty!\",\"library.\",\"license?\",\"lifestyle;\",\"light!\",\"likely.\",\"limit?\",\"linear;\",\"liquid!\",\"listen.\",\"literally?\",\"literary;\",\"little!\",\"living.\",\"local?\",\"located;\",\"logic!\",\"lonely.\",\"longer?\",\"look;\",\"loose!\",\"losing.\",\"loss?\",\"loud;\",\"lovely!\",\"loyal.\",\"lucky?\",\"lunch;\",\"luxury!\",\"machine.\",\"magazine?\",\"magic;\",\"mainly!\",\"maintain.\",\"major?\",\"maker;\",\"manage!\",\"manner.\",\"manual?\",\"manufacture;\",\"margin!\",\"marine.\",\"marker?\",\"market;\",\"marriage!\",\"married.\",\"master?\",\"matching;\",\"material!\",\"matter.\",\"mature?\",\"maximum;\",\"maybe!\",\"mayor.\",\"measure?\",\"media;\",\"medical!\",\"medium.\",\"member?\",\"memory;\",\"mental!\",\"mention.\",\"merchant?\",\"mercy;\",\"merely!\",\"merge.\",\"merit?\",\"message;\",\"metal!\",\"method.\",\"middle?\",\"might;\",\"military!\",\"million.\",\"mineral?\",\"minimal;\",\"minimum!\",\"minister.\",\"minute?\",\"miracle;\",\"mirror!\",\"missile.\",\"mission?\",\"mistake;\",\"mixture!\",\"mobile.\",\"model?\",\"moderate;\",\"modern!\",\"modest.\",\"moment?\",\"monitor;\",\"monthly!\",\"monument.\",\"moral?\",\"moreover;\",\"mostly!\",\"mother.\",\"motion?\",\"motivate;\",\"motor!\",\"mountain.\",\"mouth?\",\"move;\",\"movement!\",\"movie.\",\"much?\",\"multiple;\",\"muscle!\",\"museum.\",\"music?\",\"mutual;\",\"myself!\",\"narrative?\",\"narrow;\",\"nation!\",\"natural.\",\"nature?\",\"nearby;\",\"nearly!\",\"necessary.\",\"needle?\",\"negative;\",\"neighbor!\",\"neither.\",\"nervous?\",\"network;\",\"never!\",\"nevertheless.\",\"newspaper?\",\"next;\",\"nice!\",\"night.\",\"noble?\",\"nobody;\",\"noise!\",\"normal.\",\"northern?\",\"notable;\",\"nothing!\",\"notice.\",\"novel?\",\"nowadays;\",\"nuclear!\",\"number.\",\"numerous?\",\"nurse;\",\"object!\",\"obtain.\",\"obvious?\",\"occasion;\",\"occupy!\",\"occur.\",\"ocean?\",\"offer;\",\"office!\",\"official.\",\"often?\",\"online;\",\"only!\",\"open.\",\"operate?\",\"opinion;\",\"oppose!\",\"option.\",\"order?\",\"ordinary;\",\"organize!\",\"origin.\",\"other?\",\"otherwise;\",\"outcome!\",\"outdoor.\",\"outer?\",\"outline;\",\"output!\",\"outside.\",\"overall?\",\"overcome;\",\"oversee!\",\"overwhelm.\",\"own?\",\"pace;\",\"package!\",\"page.\",\"pain?\",\"paint;\",\"pair!\",\"palace.\",\"pale?\",\"panel;\",\"panic!\",\"paper.\",\"parent?\",\"park;\",\"parliament!\",\"part.\",\"partial?\",\"participate;\",\"partner!\",\"party.\",\"pass?\",\"passage;\",\"passenger!\",\"passion.\",\"past?\",\"patent;\",\"path!\",\"patience.\",\"patient?\",\"pattern;\",\"pause!\",\"payment.\",\"peace?\",\"peak;\",\"peer!\",\"penalty.\",\"pending?\",\"penetrate;\",\"people!\",\"perceive.\",\"percent?\",\"perfect;\",\"perform!\",\"perhaps.\",\"period?\",\"permit;\",\"person!\",\"persuade.\",\"phase?\",\"phenomenon;\",\"philosophy!\",\"phone.\",\"photo?\",\"phrase;\",\"physical!\",\"pilot.\",\"pioneer?\",\"place;\",\"plain!\",\"plan.\",\"planet?\",\"plant;\",\"plastic!\",\"platform.\",\"play?\",\"player;\",\"please!\",\"pledge.\",\"plenty?\",\"plot;\",\"plugin!\",\"plunge.\",\"poem?\",\"poet;\",\"point!\",\"police.\",\"policy?\",\"polish;\",\"polite!\",\"political.\",\"pollution?\",\"poor;\",\"popular!\",\"port.\",\"portion?\",\"portrait;\",\"position!\",\"positive.\",\"possess?\",\"possible;\",\"post!\",\"potato.\",\"potential?\",\"pour;\",\"poverty!\",\"power.\",\"practice?\",\"praise;\",\"pray!\",\"precious.\",\"predict?\",\"prefer;\",\"prejudice!\",\"preliminary.\",\"premier?\",\"premise;\",\"prepare!\",\"prescription.\",\"presence?\",\"present;\",\"preserve!\",\"press.\",\"pressure?\",\"prevent;\",\"previous!\",\"price.\",\"pride?\",\"primary;\",\"prince!\",\"principal.\",\"principle?\",\"print;\",\"priority!\",\"prison.\",\"private?\",\"privilege;\",\"prize!\",\"probably.\",\"problem?\",\"procedure;\",\"proceed!\",\"process.\",\"produce?\",\"product;\",\"profession!\",\"profit.\",\"program?\",\"progress;\",\"project!\",\"promise.\",\"promote?\",\"proof;\",\"proper!\",\"property.\",\"proposal?\",\"protect;\",\"prove!\",\"provide.\",\"public?\",\"pull;\",\"purchase!\",\"pure.\",\"purpose?\",\"pursue;\",\"push!\",\"puzzle.\",\"qualify?\",\"quality;\",\"quantity!\",\"quarter.\",\"question?\",\"quick;\",\"quiet!\",\"quite.\",\"quote?\",\"race;\",\"radio!\",\"rail.\",\"raise?\",\"range;\",\"rapid!\",\"rarely.\",\"rate?\",\"rather;\",\"reach!\",\"react.\",\"read?\",\"reader;\",\"ready!\",\"real.\",\"realize?\",\"reason;\",\"recall!\",\"receive.\",\"recent?\",\"recognize;\",\"recommend!\",\"record.\",\"recover?\",\"recruit;\",\"reduce!\",\"refer.\",\"reflect?\",\"reform;\",\"refuge!\",\"refuse.\",\"regard?\",\"region;\",\"regret!\",\"regular.\",\"reject?\",\"relate;\",\"relative!\",\"relax.\",\"release?\",\"relevant;\",\"relieve!\",\"religion.\",\"remain?\",\"remember;\",\"remind!\",\"remove.\",\"render?\",\"renew;\",\"rent!\",\"repair.\",\"repeat?\",\"replace;\",\"reply!\",\"report.\",\"represent?\",\"republic;\",\"reputation!\",\"request.\",\"require?\",\"rescue;\",\"research!\",\"reserve.\",\"resident?\",\"resist;\",\"resolve!\",\"resort.\",\"resource?\",\"respect;\",\"respond!\",\"rest.\",\"restore?\",\"restrict;\",\"result!\",\"retain.\",\"retire?\",\"return;\",\"reveal!\",\"revenue.\",\"review?\",\"revolution;\",\"reward!\",\"rhythm.\",\"rich?\",\"rider;\",\"right!\",\"rigid.\",\"ring?\",\"rise;\",\"risk!\",\"rival.\",\"river?\",\"road;\",\"robust!\",\"rock.\",\"role?\",\"roll;\",\"romance!\",\"roof.\",\"room?\",\"root;\",\"rough!\",\"round.\",\"route?\",\"routine;\",\"royal!\",\"ruin.\",\"rule?\",\"ruler;\",\"running!\",\"sacrifice.\",\"sad?\",\"safety;\",\"sail!\",\"salary.\",\"sale?\",\"salt;\",\"same!\",\"sample.\",\"sanction?\",\"sand;\",\"satellite!\",\"satisfy.\",\"save?\",\"scale;\",\"scan!\",\"scared.\",\"scenario?\",\"scene;\",\"schedule!\",\"scheme.\",\"scholar?\",\"school;\",\"science!\",\"scope.\",\"score?\",\"screen;\",\"script!\",\"search.\",\"season?\",\"second;\",\"secret!\",\"section.\",\"sector?\",\"secure;\",\"select!\",\"self.\",\"sell?\",\"senate;\",\"senior!\",\"sense.\",\"sensitive?\",\"sentence;\",\"separate!\",\"sequence.\",\"serious?\",\"serve;\",\"service!\",\"session.\",\"setup?\",\"settle;\",\"seven!\",\"several.\",\"severe?\",\"shadow;\",\"shake!\",\"shall.\",\"shame?\",\"shape;\",\"share!\",\"sharp.\",\"sheer?\",\"shell;\",\"shelter!\",\"shift.\",\"shine?\",\"ship;\",\"shock!\",\"shoe.\",\"shoot?\",\"shore;\",\"short!\",\"should.\",\"shout?\",\"show;\",\"shower!\",\"shut.\",\"sick?\",\"side;\",\"sight!\",\"signal.\",\"silence?\",\"silver;\",\"similar!\",\"simple.\",\"since?\",\"sing;\",\"singer!\",\"single.\",\"sink?\",\"sister;\",\"sit!\",\"situation.\",\"six?\",\"size;\",\"sketch!\",\"skill.\",\"skin?\",\"slave;\",\"sleep!\",\"slight.\",\"slip?\",\"slow;\",\"small!\",\"smart.\",\"smell?\",\"smile;\",\"smoke!\",\"smooth.\",\"social?\",\"society;\",\"soft!\",\"solar.\",\"soldier?\",\"sole;\",\"solution!\",\"some.\",\"somebody?\",\"someone;\",\"something!\",\"sometimes.\",\"somewhat?\",\"song;\",\"soon!\",\"sophisticated.\",\"sorry?\",\"sort;\",\"soul!\",\"sound.\",\"source?\",\"south;\",\"space!\",\"spare.\",\"speak?\",\"special;\",\"species!\",\"specific.\",\"speech?\",\"speed;\",\"spell!\",\"spend.\",\"sphere?\",\"spirit;\",\"spiritual!\",\"spite.\",\"split?\",\"sponsor;\",\"sport!\",\"spot.\",\"spread?\",\"spring;\",\"square!\",\"stable.\",\"staff?\",\"stage;\",\"stake!\",\"stand.\",\"standard?\",\"star;\",\"start!\",\"state.\",\"statement?\",\"station;\",\"status!\",\"stay.\",\"steady?\",\"steal;\",\"steel!\",\"step.\",\"stick?\",\"still;\",\"stock!\",\"stomach.\",\"stone?\",\"stop;\",\"storage!\",\"store.\",\"storm?\",\"story;\",\"straight!\",\"strange.\",\"strategy?\",\"stream;\",\"street!\",\"strength.\",\"stress?\",\"stretch;\",\"strict!\",\"strike.\",\"string?\",\"strip;\",\"stroke!\",\"strong.\",\"structure?\",\"struggle;\",\"student!\",\"studio.\",\"study?\",\"stuff;\",\"style!\",\"subject.\",\"submit?\",\"substance;\",\"succeed!\",\"such.\",\"sudden?\",\"suffer;\",\"sufficient!\",\"sugar.\",\"suggest?\",\"summer;\",\"summit!\",\"sun.\",\"super?\",\"supply;\",\"support!\",\"suppose.\",\"supreme?\",\"sure;\",\"surface!\",\"surgery.\",\"surplus?\",\"surprise;\",\"surround!\",\"survey.\",\"survive?\",\"suspect;\",\"suspend!\",\"sustain.\",\"swap?\",\"sweater;\",\"sweep!\",\"sweet.\",\"swift?\",\"swim;\",\"switch!\",\"symbol.\",\"symptom?\",\"system;\",\"table!\",\"tackle.\",\"tactic?\",\"tail;\",\"take!\",\"talent.\",\"talk?\",\"tall;\",\"target!\",\"task.\",\"taste?\",\"taxi;\",\"teach!\",\"teacher.\",\"team?\",\"tear;\",\"technical!\",\"technique.\",\"teen?\",\"telephone;\",\"television!\",\"tell.\",\"temperature?\",\"temple;\",\"temporary!\",\"tend.\",\"tension?\",\"term;\",\"terminal!\",\"terrible.\",\"territory?\",\"test;\",\"testify!\",\"text.\",\"than?\",\"thank;\",\"that!\",\"theater.\",\"theft?\",\"their;\",\"theme!\",\"then.\",\"theology?\",\"theory;\",\"therapy!\",\"there.\",\"therefore?\",\"these;\",\"they!\",\"thick.\",\"thief?\",\"thin;\",\"thing!\",\"think.\",\"third?\",\"thirsty;\",\"this!\",\"thorough.\",\"those?\",\"though;\",\"threat!\",\"three.\",\"thrive?\",\"through;\",\"throw!\",\"thumb.\",\"thus?\",\"ticket;\",\"tide!\",\"tiger.\",\"tight?\",\"till;\",\"timber!\",\"time.\",\"tiny?\",\"tip;\",\"tired!\",\"title.\",\"to?\",\"today;\",\"toe!\",\"together.\",\"tomorrow?\",\"tone;\",\"tongue!\",\"tonight.\",\"too?\",\"tool;\",\"tooth!\",\"top.\",\"topic?\",\"total;\",\"touch!\",\"tough.\",\"tour?\",\"toward;\",\"tower!\",\"town.\",\"toxic?\",\"trace;\",\"track!\",\"trade.\",\"tradition?\",\"traffic;\",\"train!\",\"trait.\",\"transfer?\",\"transform;\",\"transition!\",\"translate.\",\"transport?\",\"trap;\",\"travel!\",\"treat.\",\"treatment?\",\"treaty;\",\"tree!\",\"trend.\",\"trial?\",\"tribe;\",\"trick!\",\"trip.\",\"troop?\",\"trouble;\",\"truck!\",\"true.\",\"trust?\",\"truth;\",\"try!\",\"tube.\",\"tune?\",\"turn;\",\"tutor!\",\"twice.\",\"twin?\",\"type;\",\"typical!\",\"ugly.\",\"ultimate?\",\"unable;\",\"uncle!\",\"under.\",\"undergo?\",\"understand;\",\"unfair!\",\"unfold.\",\"unhappy?\",\"unified;\",\"union!\",\"unique.\",\"unit?\",\"unite;\",\"unity!\",\"universal.\",\"universe?\",\"university;\",\"unless!\",\"unlike.\",\"unlikely?\",\"until;\",\"unusual!\",\"update.\",\"upon?\",\"upper;\",\"upset!\",\"urban.\",\"urge?\",\"urgent;\",\"us!\",\"usage.\",\"use?\",\"used;\",\"useful!\",\"user.\",\"usual?\",\"utility;\",\"vacant!\",\"vaccine.\",\"valid?\",\"valley;\",\"value!\",\"vanish.\",\"variable?\",\"variety;\",\"various!\",\"vast.\",\"vehicle?\",\"venture;\",\"version!\",\"versus.\",\"vessel?\",\"veteran;\",\"viable!\",\"vicious.\",\"victim?\",\"victory;\",\"video!\",\"view.\",\"village?\",\"violate;\",\"violence!\",\"virtue.\",\"virus?\",\"visible;\",\"vision!\",\"visit.\",\"visual?\",\"vital;\",\"vocal!\",\"voice.\",\"volume?\",\"volunteer;\",\"vote!\",\"vulnerable.\",\"wage?\",\"wait;\",\"wake!\",\"walk.\",\"wall?\",\"wander;\",\"want!\",\"war.\",\"warm?\",\"warn;\",\"warrant!\",\"warrior.\",\"was?\",\"wash;\",\"waste!\",\"watch.\",\"water?\",\"wave;\",\"way!\",\"weak.\",\"wealth?\",\"weapon;\",\"wear!\",\"weather.\",\"web?\",\"wedding;\",\"week!\",\"weekend.\",\"weigh?\",\"welcome;\",\"welfare!\",\"well.\",\"west?\",\"western;\",\"what!\",\"whatever.\",\"wheel?\",\"when;\",\"where!\",\"whether.\",\"which?\",\"while;\",\"whisper!\",\"white.\",\"who?\",\"whole;\",\"whom!\",\"whose?\",\"why;\",\"wide!\",\"wife.\",\"wild?\",\"will;\",\"win!\",\"wind.\",\"window?\",\"wine;\",\"wing!\",\"winner.\",\"winter?\",\"wise;\",\"wish!\",\"with.\",\"within?\",\"without;\",\"woman!\",\"wonder.\",\"wood?\",\"word;\",\"work!\",\"world.\",\"worry?\",\"worth;\",\"would!\",\"wound.\",\"write?\",\"writer;\",\"wrong!\",\"wrote.\",\"yard?\",\"year;\",\"yellow!\",\"yes.\",\"yesterday?\",\"yet;\",\"yield!\",\"young.\",\"your?\",\"youth;\",\"zero!\",\"zone.\"],\"ngramHighlights\":{\"coding.\":[\"in\"],\"sprint.\":[\"in\"],\"energy?\":[\"er\"],\"morning;\":[\"in\"],\"evening!\":[\"in\"],\"chapter!\":[\"er\"],\"mystery.\":[\"er\"]}}");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/dictionaries/stage8.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"stage\":\"Stage_8\",\"mode\":\"sentences\",\"sentences\":{\"short\":[\"the cat sat.\",\"i like dogs.\",\"we ran fast.\",\"she can read.\",\"he is happy.\",\"it was fun.\",\"they will win.\",\"birds can fly.\",\"the sun is hot.\",\"i see a star.\",\"my mom is kind.\",\"dad works hard.\",\"the dog ran.\",\"we eat lunch.\",\"she sings well.\",\"he writes books.\",\"i love you.\",\"you are nice.\",\"it is cold.\",\"the sky is blue.\",\"i have a pen.\",\"she has a cat.\",\"we go home.\",\"they play games.\",\"the car is red.\",\"the tree is tall.\",\"i feel good.\",\"she is smart.\",\"he is brave.\",\"we are safe.\",\"the food is hot.\",\"the water is cold.\",\"i can swim.\",\"she can dance.\",\"he can run.\",\"we can jump.\",\"they can sing.\",\"the bird sings.\",\"the wind blows.\",\"rain falls down.\",\"snow is white.\",\"the moon glows.\",\"stars shine bright.\",\"the sun rises.\",\"the day ends.\",\"night comes fast.\",\"i am tired.\",\"she is sleepy.\",\"he is awake.\",\"we are ready.\",\"they are late.\",\"the bus is here.\",\"the train moves.\",\"the plane flies.\",\"the ship sails.\",\"the bike rolls.\",\"i walk home.\",\"she drives slow.\",\"he stops fast.\",\"we go out.\",\"they come in.\",\"the door opens.\",\"the window shuts.\",\"i sit down.\",\"she stands up.\",\"he looks out.\",\"we wait here.\",\"they talk loud.\",\"the bell rings.\",\"the clock ticks.\",\"time goes on.\",\"i am fine.\",\"she is well.\",\"he is sick.\",\"we are sad.\",\"they are glad.\",\"i smile often.\",\"she laughs out.\",\"he cries soft.\",\"we shout loud.\",\"they whisper low.\",\"the baby sleeps.\",\"the child plays.\",\"the boy runs.\",\"the girl skips.\",\"the man walks.\",\"the woman talks.\",\"the old man sits.\",\"the young girl runs.\",\"the big dog barks.\",\"the small cat meows.\",\"the fast car goes.\",\"the slow bus stops.\",\"the tall tree grows.\",\"the short bush stays.\",\"the bright sun shines.\",\"the dark night falls.\",\"the warm day starts.\",\"the cool breeze blows.\",\"the soft wind blows.\",\"the hard rain falls.\"],\"advanced\":[\"the quick brown fox jumps over the lazy dog.\",\"practice makes progress, not perfection.\",\"she sells sea shells by the sea shore.\",\"learning to type by ear takes patience and rhythm.\",\"dear team, please review the attached report by friday.\",\"total: $42.50 — 10% discount applied at checkout.\",\"chapter 3: the journey begins (see page 45).\",\"the early bird catches the worm every morning.\",\"a penny saved is a penny earned in the end.\",\"all that glitters is not always gold, you know.\",\"actions speak louder than words, so be kind.\",\"the best time to start was yesterday, but now is good.\",\"don't count your chickens before they hatch, please.\",\"every cloud has a silver lining, just wait and see.\",\"honesty is the best policy, so tell the truth.\",\"the pen is mightier than the sword, they always say.\",\"rome was not built in a day, be patient now.\",\"when life gives you lemons, make lemonade and smile.\",\"you can't judge a book by its cover, look inside.\",\"a stitch in time saves nine, so fix it now.\",\"better safe than sorry, wear your helmet today.\",\"curiosity killed the cat, but satisfaction brought it back.\",\"do unto others as you would have them do to you.\",\"good things come to those who wait, so be calm.\",\"home is where the heart is, and my heart is here.\",\"if at first you don't succeed, try and try again.\",\"keep your friends close, but your enemies closer still.\",\"laughter is the best medicine, so laugh out loud.\",\"make hay while the sun shines, before the rain comes.\",\"no pain, no gain, so keep pushing through the hard work.\",\"out of sight, out of mind, but i still remember you.\",\"practice makes perfect, so keep typing every day.\",\"the grass is always greener on the other side, they say.\",\"two heads are better than one, let's work as a team.\",\"where there's a will, there's a way, find your path.\",\"you reap what you sow, so plant good seeds in life.\",\"beauty is in the eye of the beholder, just be yourself.\",\"cleanliness is next to godliness, so wash your hands.\",\"don't put all your eggs in one basket, spread the risk.\",\"great minds think alike, and we share the same idea.\",\"haste makes waste, so take your time and do it right.\",\"it takes two to tango, let's dance through life together.\",\"knowledge is power, so keep learning new things each day.\",\"look before you leap, think twice before you act.\",\"necessity is the mother of invention, create something new.\",\"old habits die hard, but you can change with effort.\",\"power tends to corrupt, so stay humble in all you do.\",\"the truth shall set you free, always be honest and fair.\",\"unity is strength, so stay together as a team.\",\"variety is the spice of life, try new things today.\",\"well begun is half done, so start strong every time.\",\"you are what you eat, so choose healthy food to eat.\",\"absence makes the heart grow fonder, i miss you a lot.\",\"bird in the hand is worth two in the bush, be thankful.\",\"dead men tell no tales, but i'm alive and talking.\",\"fortune favors the bold, so take a big risk today.\",\"give credit where credit is due, say thank you to all.\",\"jack of all trades, master of none, but still good enough.\",\"let sleeping dogs lie, don't bring up old problems now.\",\"money doesn't grow on trees, so save what you earn.\",\"never look a gift horse in the mouth, just say thank you.\",\"once bitten, twice shy, be careful next time around.\",\"the apple doesn't fall far from the tree, you are like them.\",\"the proof is in the pudding, see the results for yourself.\",\"too many cooks spoil the broth, keep it simple today.\",\"what goes around comes around, be kind to everyone you meet.\",\"you can't have your cake and eat it too, choose one thing.\",\"a rolling stone gathers no moss, keep moving forward fast.\",\"don't bite the hand that feeds you, be grateful and kind.\",\"every dog has its day, your time will come very soon.\",\"fools rush in where angels fear to tread, go slow and think.\",\"it's raining cats and dogs outside, take your umbrella now.\",\"let bygones be bygones, forget the past and move on.\",\"make a long story short, the answer is yes we can do it.\",\"put your money where your mouth is, show me with action.\",\"the ball is in your court now, make the next wise move.\",\"to kill two birds with one stone, combine your daily tasks.\",\"when pigs fly, that will happen, so don't wait too long.\",\"you can't teach an old dog new tricks, but you can still try.\",\"barking dogs seldom bite, so stay calm and ignore the noise.\",\"don't cross the bridge until you come to it, wait and see.\",\"every man for himself, but we work better as a full team.\",\"hit the nail on the head, you said it perfectly right now.\",\"ignorance is bliss, but knowledge is power and strength.\",\"keep your chin up, things will get better soon i promise.\",\"let the cat out of the bag, tell them the secret right now.\",\"make ends meet, even when money is tight and bills are due.\",\"on cloud nine today, i am so happy and full of real joy.\",\"play by ear, and see how the situation works out for you.\",\"ring a bell, that name sounds familiar to me some how.\",\"start from scratch, and build everything new all over again.\",\"take it with a grain of salt, don't believe it all right now.\",\"under the weather, i don't feel so good and need some rest.\",\"wear your heart on your sleeve, let people see how you feel.\",\"break the ice, say hello and start a friendly conversation.\",\"cut to the chase, tell me what you really want from me now.\",\"drive someone up the wall, stop annoying me please right now.\",\"feel under the weather, i think i'm catching a cold today.\",\"get the show on the road, let's start this project right now.\",\"hit the road jack, it's time for you to go home now my friend.\",\"in the heat of the moment, i said things i didn't really mean.\",\"jump on the bandwagon, join the popular trend right away now.\",\"keep your eyes peeled, watch out for anything unusual today.\",\"let the dust settle, wait until things calm down a little bit.\",\"meet me halfway, let's compromise and find a middle ground now.\",\"not my cup of tea, i really don't like that very much at all.\"],\"paragraphs\":[\"the quick brown fox jumps over the lazy dog.\",\"practice makes progress, not perfection.\",\"she sells sea shells by the sea shore.\",\"learning to type by ear takes patience and rhythm.\",\"dear team, please review the attached report by friday.\",\"total: $42.50 — 10% discount applied at checkout.\",\"chapter 3: the journey begins (see page 45).\",\"the early bird catches the worm every morning.\",\"a penny saved is a penny earned in the end.\",\"all that glitters is not always gold, you know.\",\"actions speak louder than words, so be kind.\",\"the best time to start was yesterday, but now is good.\",\"don't count your chickens before they hatch, please.\",\"every cloud has a silver lining, just wait and see.\",\"honesty is the best policy, so tell the truth.\",\"the pen is mightier than the sword, they always say.\",\"rome was not built in a day, be patient now.\",\"when life gives you lemons, make lemonade and smile.\",\"you can't judge a book by its cover, look inside.\",\"a stitch in time saves nine, so fix it now.\",\"better safe than sorry, wear your helmet today.\",\"curiosity killed the cat, but satisfaction brought it back.\",\"do unto others as you would have them do to you.\",\"good things come to those who wait, so be calm.\",\"home is where the heart is, and my heart is here.\",\"if at first you don't succeed, try and try again.\",\"keep your friends close, but your enemies closer still.\",\"laughter is the best medicine, so laugh out loud.\",\"make hay while the sun shines, before the rain comes.\",\"no pain, no gain, so keep pushing through the hard work.\",\"out of sight, out of mind, but i still remember you.\",\"practice makes perfect, so keep typing every day.\",\"the grass is always greener on the other side, they say.\",\"two heads are better than one, let's work as a team.\",\"where there's a will, there's a way, find your path.\",\"you reap what you sow, so plant good seeds in life.\",\"beauty is in the eye of the beholder, just be yourself.\",\"cleanliness is next to godliness, so wash your hands.\",\"don't put all your eggs in one basket, spread the risk.\",\"great minds think alike, and we share the same idea.\",\"haste makes waste, so take your time and do it right.\",\"it takes two to tango, let's dance through life together.\",\"knowledge is power, so keep learning new things each day.\",\"look before you leap, think twice before you act.\",\"necessity is the mother of invention, create something new.\",\"old habits die hard, but you can change with effort.\",\"power tends to corrupt, so stay humble in all you do.\",\"the truth shall set you free, always be honest and fair.\",\"unity is strength, so stay together as a team.\",\"variety is the spice of life, try new things today.\",\"well begun is half done, so start strong every time.\",\"you are what you eat, so choose healthy food to eat.\",\"absence makes the heart grow fonder, i miss you a lot.\",\"bird in the hand is worth two in the bush, be thankful.\",\"dead men tell no tales, but i'm alive and talking.\",\"fortune favors the bold, so take a big risk today.\",\"give credit where credit is due, say thank you to all.\",\"jack of all trades, master of none, but still good enough.\",\"let sleeping dogs lie, don't bring up old problems now.\",\"money doesn't grow on trees, so save what you earn.\",\"never look a gift horse in the mouth, just say thank you.\",\"once bitten, twice shy, be careful next time around.\",\"the apple doesn't fall far from the tree, you are like them.\",\"the proof is in the pudding, see the results for yourself.\",\"too many cooks spoil the broth, keep it simple today.\",\"what goes around comes around, be kind to everyone you meet.\",\"you can't have your cake and eat it too, choose one thing.\",\"a rolling stone gathers no moss, keep moving forward fast.\",\"don't bite the hand that feeds you, be grateful and kind.\",\"every dog has its day, your time will come very soon.\",\"fools rush in where angels fear to tread, go slow and think.\",\"it's raining cats and dogs outside, take your umbrella now.\",\"let bygones be bygones, forget the past and move on.\",\"make a long story short, the answer is yes we can do it.\",\"put your money where your mouth is, show me with action.\",\"the ball is in your court now, make the next wise move.\",\"to kill two birds with one stone, combine your daily tasks.\",\"when pigs fly, that will happen, so don't wait too long.\",\"you can't teach an old dog new tricks, but you can still try.\",\"barking dogs seldom bite, so stay calm and ignore the noise.\",\"don't cross the bridge until you come to it, wait and see.\",\"every man for himself, but we work better as a full team.\",\"hit the nail on the head, you said it perfectly right now.\",\"ignorance is bliss, but knowledge is power and strength.\",\"keep your chin up, things will get better soon i promise.\",\"let the cat out of the bag, tell them the secret right now.\",\"make ends meet, even when money is tight and bills are due.\",\"on cloud nine today, i am so happy and full of real joy.\",\"play by ear, and see how the situation works out for you.\",\"ring a bell, that name sounds familiar to me some how.\",\"start from scratch, and build everything new all over again.\",\"take it with a grain of salt, don't believe it all right now.\",\"under the weather, i don't feel so good and need some rest.\",\"wear your heart on your sleeve, let people see how you feel.\",\"break the ice, say hello and start a friendly conversation.\",\"cut to the chase, tell me what you really want from me now.\",\"drive someone up the wall, stop annoying me please right now.\",\"feel under the weather, i think i'm catching a cold today.\",\"get the show on the road, let's start this project right now.\",\"hit the road jack, it's time for you to go home now my friend.\",\"in the heat of the moment, i said things i didn't really mean.\",\"jump on the bandwagon, join the popular trend right away now.\",\"keep your eyes peeled, watch out for anything unusual today.\",\"let the dust settle, wait until things calm down a little bit.\",\"meet me halfway, let's compromise and find a middle ground now.\",\"not my cup of tea, i really don't like that very much at all.\"]}}");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/ngrams.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "digraphs": [
        "th",
        "he",
        "in",
        "er",
        "an",
        "re",
        "on",
        "at",
        "en",
        "nd",
        "ti",
        "es",
        "or",
        "te",
        "of",
        "ed",
        "is",
        "it",
        "al",
        "ar",
        "st",
        "to",
        "nt",
        "ng",
        "se",
        "ha",
        "as",
        "ou",
        "io",
        "le"
    ],
    "trigraphs": [
        "the",
        "and",
        "ing",
        "ion",
        "tio",
        "ent",
        "ati",
        "for",
        "her",
        "ter",
        "hat",
        "tha",
        "ere",
        "ate",
        "his",
        "con",
        "res",
        "ver",
        "all",
        "ons",
        "nce",
        "men",
        "ith",
        "ted",
        "ers",
        "pro",
        "thi",
        "wit",
        "are",
        "ess"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/stageConfig.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "reinforcementData": {
        "ngrams": {
            "file": "ngrams.json",
            "appliesTo": [
                "Stage_6",
                "Stage_7"
            ],
            "purpose": "Mixed into word drills when keystroke data shows slow/error-prone letter-pair transitions."
        }
    },
    "stages": [
        {
            "id": "Stage_1",
            "order": 1,
            "title": "Home Row Foundation",
            "mode": "keys",
            "metric": "kpm",
            "targetValue": 12,
            "targetAccuracy": 95,
            "description": "First contact with the keyboard — just A S D F J K L ; . Accuracy matters far more than speed here.",
            "celebration": "You've found your home base! Every word you'll ever type starts from these keys."
        },
        {
            "id": "Stage_2",
            "order": 2,
            "title": "Home Row Complete",
            "mode": "keys",
            "metric": "kpm",
            "targetValue": 18,
            "targetAccuracy": 95,
            "description": "Adds G and H — the last two home row keys — and builds real fluency across the full row.",
            "celebration": "Home row mastered, start to finish. Your fingers know the way now."
        },
        {
            "id": "Stage_3",
            "order": 3,
            "title": "Top Row Expansion",
            "mode": "keys",
            "metric": "kpm",
            "targetValue": 22,
            "targetAccuracy": 94,
            "description": "Q W E R T Y U I O P — reaching up from home row.",
            "celebration": "You've climbed the top row! That's over half the alphabet under your fingers."
        },
        {
            "id": "Stage_4",
            "order": 4,
            "title": "Bottom Row Expansion",
            "mode": "keys",
            "metric": "kpm",
            "targetValue": 26,
            "targetAccuracy": 93,
            "description": "Z X C V B N M , . / — reaching down from home row. Completes the full alphabet.",
            "celebration": "The entire alphabet is yours now. That's the hardest part behind you."
        },
        {
            "id": "Stage_5",
            "order": 5,
            "title": "Numbers & Symbols",
            "mode": "keys",
            "metric": "kpm",
            "targetValue": 22,
            "targetAccuracy": 90,
            "description": "Number row plus common shifted symbols. A gentler accuracy bar — these reaches are genuinely harder.",
            "celebration": "Numbers and symbols down. You can type anything a keyboard has to offer."
        },
        {
            "id": "Stage_6",
            "order": 6,
            "title": "Short Words",
            "mode": "words",
            "metric": "wpm",
            "targetValue": 8,
            "targetAccuracy": 85,
            "description": "2-4 letter real words. First time letters become meaning instead of isolated targets.",
            "celebration": "You just typed your first real words. This is where it starts feeling like writing."
        },
        {
            "id": "Stage_7",
            "order": 7,
            "title": "Words & Punctuation",
            "mode": "words",
            "metric": "wpm",
            "targetValue": 12,
            "targetAccuracy": 87,
            "description": "4-8 letter words, each paired with a trailing punctuation mark to practice mid-flow symbol reaches.",
            "celebration": "Words and punctuation together — you're typing the way real writing actually looks."
        },
        {
            "id": "Stage_8",
            "order": 8,
            "title": "Sentences & Paragraphs",
            "mode": "sentences",
            "metric": "wpm",
            "targetValue": 16,
            "targetAccuracy": 88,
            "description": "Short sentences first, building up to full paragraphs, forms, and code — real-world typing.",
            "celebration": "You're a fluent typist. Every stage you climbed brought you here."
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/adaptive/lessonGenerator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateLesson",
    ()=>generateLesson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage1$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/dictionaries/stage1.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage2$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/dictionaries/stage2.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/dictionaries/stage3.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage4$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/dictionaries/stage4.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage5$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/dictionaries/stage5.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage6$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/dictionaries/stage6.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage7$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/dictionaries/stage7.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage8$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/dictionaries/stage8.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ngrams$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/ngrams.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$stageConfig$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/stageConfig.json.[json].cjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// Stage_1-5 are single-key drills (their dictionary files expose a `keys`
// array, not `words`), Stage_6-7 are real word lists, and Stage_8 is
// sentences. Pulling the wrong field silently produced `undefined` for
// Stage_1-4 and no entry at all for Stage_5-8 — fixed by matching each
// stage's actual JSON shape.
const DICTIONARIES = {
    Stage_1: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage1$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].keys,
    Stage_2: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage2$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].keys,
    Stage_3: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].keys,
    Stage_4: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage4$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].keys,
    Stage_5: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage5$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].keys,
    Stage_6: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage6$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].words,
    Stage_7: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage7$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].words,
    Stage_8: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$dictionaries$2f$stage8$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sentences.short
};
// Which stages mix n-gram fragments into their drills — sourced from
// stageConfig.json's reinforcementData rather than hardcoded, since that's
// the single source of truth (previously hardcoded to "Stage_3", but the
// config specifies Stage_6/Stage_7).
const NGRAM_STAGES = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$stageConfig$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reinforcementData.ngrams.appliesTo;
function generateLesson(params) {
    const { stage, weakKeyPairs = [], dueSpacedRepetitionItems = [], wordCount = 15 } = params;
    const dictionary = DICTIONARIES[stage] ?? DICTIONARIES.Stage_1;
    const focusKeys = Array.from(new Set([
        ...dueSpacedRepetitionItems.map((item)=>item.key.toLowerCase()),
        ...weakKeyPairs.flatMap((pair)=>[
                pair.key1.toLowerCase(),
                pair.key2.toLowerCase()
            ])
    ]));
    const words = [];
    // 1 + 2: prioritize dictionary words that exercise a focus key.
    if (focusKeys.length > 0) {
        const focusWords = dictionary.filter((word)=>focusKeys.some((key)=>word.toLowerCase().includes(key)));
        words.push(...shuffle(focusWords).slice(0, Math.ceil(wordCount * 0.6)));
    }
    // Sprinkle in n-gram fragments alongside real words, for whichever
    // stages stageConfig.json designates (currently Stage_6 and Stage_7).
    if (NGRAM_STAGES.includes(stage) && words.length < wordCount) {
        const ngramPool = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ngrams$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].digraphs,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ngrams$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].trigraphs
        ];
        const ngramCount = Math.min(3, wordCount - words.length);
        words.push(...shuffle(ngramPool).slice(0, ngramCount));
    }
    // 3: fill the remainder with fresh dictionary entries not already picked.
    // Word-mode dictionaries (Stage_6/7, 1000+ entries) will always have
    // enough unique entries. Key-drill dictionaries (Stage_1-5) can be as
    // small as 8 symbols, well under a typical wordCount — once those run
    // out, cycle back through the full set so the drill still repeats keys
    // rather than coming back short.
    let pool = [];
    while(words.length < wordCount && dictionary.length > 0){
        if (pool.length === 0) {
            const fresh = dictionary.filter((w)=>!words.includes(w));
            pool = shuffle(fresh.length > 0 ? fresh : dictionary);
        }
        words.push(pool.shift());
    }
    const reason = focusKeys.length > 0 ? `Focusing on ${focusKeys.join(", ")} — due for review or recently mixed up.` : `Fresh ${stage.replace("_", " ")} vocabulary — no weak spots detected yet.`;
    return {
        stage,
        words: shuffle(words).slice(0, wordCount),
        focusKeys,
        reason
    };
}
function shuffle(items) {
    const arr = [
        ...items
    ];
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [
            arr[j],
            arr[i]
        ];
    }
    return arr;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/stage/stageConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// engines/stage/stageConfig.ts
__turbopack_context__.s([
    "STAGE_CONFIG",
    ()=>STAGE_CONFIG,
    "STAGE_ID_TO_ROUTE",
    ()=>STAGE_ID_TO_ROUTE,
    "STAGE_ROUTE_TO_ID",
    ()=>STAGE_ROUTE_TO_ID,
    "buildWordQueue",
    ()=>buildWordQueue,
    "getNextStageRoute",
    ()=>getNextStageRoute,
    "getStageByRoute",
    ()=>getStageByRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.mjs [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.mjs [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.mjs [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.mjs [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$lessonGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/adaptive/lessonGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$stageConfig$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/stageConfig.json.[json].cjs [app-client] (ecmascript)");
;
;
;
const STAGE_ROUTE_TO_ID = {
    "1": "Stage_1",
    "2": "Stage_2",
    "3": "Stage_3",
    "4": "Stage_4",
    "5": "Stage_5",
    "6": "Stage_6",
    "7": "Stage_7",
    "8": "Stage_8"
};
const STAGE_ID_TO_ROUTE = {
    Stage_1: "1",
    Stage_2: "2",
    Stage_3: "3",
    Stage_4: "4",
    Stage_5: "5",
    Stage_6: "6",
    Stage_7: "7",
    Stage_8: "8"
};
const STAGE_ICONS = {
    "1": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    "2": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
    "3": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
    "4": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
    "5": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"],
    "6": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"],
    "7": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"],
    "8": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
};
// Session length climbs with stage difficulty. This is a pacing/UI decision,
// not curriculum content, so it lives here rather than in stageConfig.json.
// Lower stages (1-2) are single-letter drills, so nearly every second of the
// session is "wait for the announcement, then react" — that overhead eats a
// much bigger share of a short timer than it does once students are typing
// whole words/sentences at the higher stages. Durations below give the
// biggest relief where the announcement-to-timer ratio is worst and taper
// off higher up.
const STAGE_DURATIONS = {
    "1": 90,
    "2": 90,
    "3": 105,
    "4": 105,
    "5": 120,
    "6": 120,
    "7": 135,
    "8": 150
};
const STAGE_CONFIG = Object.fromEntries(_c1 = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$stageConfig$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stages.map(_c = (s)=>{
    const routeId = String(s.order);
    const config = {
        id: routeId,
        stageId: s.id,
        title: s.title,
        description: s.description,
        celebration: s.celebration,
        icon: STAGE_ICONS[routeId],
        duration: STAGE_DURATIONS[routeId],
        mode: s.mode,
        metric: s.metric,
        levelUpAccuracy: s.targetAccuracy,
        levelUpTarget: s.targetValue
    };
    return [
        routeId,
        config
    ];
}));
_c2 = STAGE_CONFIG;
function getStageByRoute(routeId) {
    return STAGE_CONFIG[routeId] ?? STAGE_CONFIG["1"];
}
function getNextStageRoute(routeId) {
    const next = String(Number(routeId) + 1);
    return next in STAGE_CONFIG ? next : null;
}
function buildWordQueue(stage, options = {}) {
    const { weakKeyPairs = [], dueSpacedRepetitionItems = [], itemCount } = options;
    // Key drills repeat a small alphabet many times over a session; word
    // stages want more variety; sentences are long, so fewer of them.
    const defaultItemCount = stage.mode === "keys" ? 40 : stage.mode === "words" ? 25 : 8;
    const lesson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$lessonGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLesson"])({
        stage: stage.stageId,
        weakKeyPairs,
        dueSpacedRepetitionItems,
        wordCount: itemCount ?? defaultItemCount
    });
    if (stage.mode !== "sentences") {
        return lesson.words.map((word)=>({
                word
            }));
    }
    const queue = [];
    lesson.words.forEach((sentence, sentenceIndex)=>{
        const words = sentence.trim().split(/\s+/);
        words.forEach((word, i)=>{
            queue.push({
                word,
                sentenceIntro: i === 0 ? sentence : undefined,
                sentenceIndex
            });
        });
    });
    return queue;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "STAGE_CONFIG$Object.fromEntries$rawStageConfig.stages.map");
__turbopack_context__.k.register(_c1, "STAGE_CONFIG$Object.fromEntries");
__turbopack_context__.k.register(_c2, "STAGE_CONFIG");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/audio/speechSequencer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelSpeech",
    ()=>cancelSpeech,
    "speakAndWait",
    ()=>speakAndWait
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useAudioStore.ts [app-client] (ecmascript)");
// engines/audio/speechSequencer.ts
"use client";
;
/**
 * Resolves once the audio store reports speech has stopped (isSpeaking ->
 * false), or after maxWaitMs, whichever comes first. The timeout is a
 * safety net only — it guards against a stuck isSpeaking flag ever hanging
 * the stage — normal chains resolve via the store update.
 */ function waitForSpeechEnd(maxWaitMs) {
    return new Promise((resolve)=>{
        // Short utterances (a single letter) can start and finish inside the
        // 50ms grace period speakAndWait waits before calling this. If we only
        // ever listened for a future isSpeaking:true->false transition, we'd
        // miss it entirely and fall all the way through to the multi-second
        // safety timeout — on every single letter, during fast typing this
        // stacked up and made the app feel like it had frozen. So check the
        // current state up front, before setting up the timeout/subscription
        // at all, and resolve immediately if speech has already ended.
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"].getState().isSpeaking) {
            resolve();
            return;
        }
        let settled = false;
        const finish = ()=>{
            if (settled) return;
            settled = true;
            clearTimeout(safety);
            unsubscribe();
            resolve();
        };
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"].subscribe((state)=>{
            if (!state.isSpeaking) finish();
        });
        const safety = setTimeout(finish, maxWaitMs);
    });
}
async function speakAndWait(text, options) {
    __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"].getState().speak(text, options);
    // Brief grace period so we don't sample isSpeaking before the store has
    // had a chance to flip it true for this utterance.
    await new Promise((r)=>setTimeout(r, 50));
    const estimatedMs = Math.max(900, text.length * 90);
    await waitForSpeechEnd(estimatedMs + 1500);
}
function cancelSpeech() {
    __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"].getState().cancel();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/audio/longFormTracks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pickCelebrationTrack",
    ()=>pickCelebrationTrack,
    "playLongFormTrack",
    ()=>playLongFormTrack,
    "stopLongFormTrack",
    ()=>stopLongFormTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
// engines/audio/longFormTracks.ts
"use client";
;
const TRACKS = {
    welcome: "/audio/sounds/welcome_track.mp3",
    celebrate1: "/audio/sounds/celebrate1.mp3",
    celebrate2: "/audio/sounds/celebrate2.mp3"
};
let currentHowl = null;
function playLongFormTrack(id) {
    return new Promise((resolve)=>{
        if (currentHowl) {
            currentHowl.stop();
            currentHowl.unload();
            currentHowl = null;
        }
        const howl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howl"]({
            src: [
                TRACKS[id]
            ],
            html5: true,
            onend: ()=>{
                if (currentHowl === howl) currentHowl = null;
                resolve();
            },
            onloaderror: ()=>{
                // Don't let a missing/broken audio file block the welcome or
                // celebration flow — fall through to the spoken announcement.
                if (currentHowl === howl) currentHowl = null;
                resolve();
            },
            onplayerror: ()=>{
                howl.once("unlock", ()=>howl.play());
            }
        });
        currentHowl = howl;
        howl.play();
    });
}
function stopLongFormTrack() {
    if (currentHowl) {
        currentHowl.stop();
        currentHowl.unload();
        currentHowl = null;
    }
}
/** Alternates between the two celebration tracks so the same one doesn't
 *  play twice in a row for a student leveling up through several stages
 *  back to back. */ let lastCelebration = null;
function pickCelebrationTrack() {
    const next = lastCelebration === "celebrate1" ? "celebrate2" : "celebrate1";
    lastCelebration = next;
    return next;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/audio/spatialPanner.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KEY_HAND_MAP",
    ()=>KEY_HAND_MAP,
    "getKeyFinger",
    ()=>getKeyFinger,
    "getKeyHand",
    ()=>getKeyHand,
    "getKeyPan",
    ()=>getKeyPan,
    "playPannedTone",
    ()=>playPannedTone
]);
// engines/audio/spatialPanner.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$AudioContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/audio/AudioContext.ts [app-client] (ecmascript)");
;
const KEY_HAND_MAP = {
    q: {
        hand: "left",
        pan: -1,
        finger: "left-pinky"
    },
    a: {
        hand: "left",
        pan: -1,
        finger: "left-pinky"
    },
    z: {
        hand: "left",
        pan: -1,
        finger: "left-pinky"
    },
    w: {
        hand: "left",
        pan: -0.7,
        finger: "left-ring"
    },
    s: {
        hand: "left",
        pan: -0.7,
        finger: "left-ring"
    },
    x: {
        hand: "left",
        pan: -0.7,
        finger: "left-ring"
    },
    e: {
        hand: "left",
        pan: -0.4,
        finger: "left-middle"
    },
    d: {
        hand: "left",
        pan: -0.4,
        finger: "left-middle"
    },
    c: {
        hand: "left",
        pan: -0.4,
        finger: "left-middle"
    },
    r: {
        hand: "left",
        pan: -0.15,
        finger: "left-index"
    },
    f: {
        hand: "left",
        pan: -0.15,
        finger: "left-index"
    },
    v: {
        hand: "left",
        pan: -0.15,
        finger: "left-index"
    },
    t: {
        hand: "left",
        pan: -0.15,
        finger: "left-index"
    },
    g: {
        hand: "left",
        pan: -0.15,
        finger: "left-index"
    },
    b: {
        hand: "left",
        pan: -0.15,
        finger: "left-index"
    },
    y: {
        hand: "right",
        pan: 0.15,
        finger: "right-index"
    },
    h: {
        hand: "right",
        pan: 0.15,
        finger: "right-index"
    },
    n: {
        hand: "right",
        pan: 0.15,
        finger: "right-index"
    },
    u: {
        hand: "right",
        pan: 0.15,
        finger: "right-index"
    },
    j: {
        hand: "right",
        pan: 0.15,
        finger: "right-index"
    },
    m: {
        hand: "right",
        pan: 0.15,
        finger: "right-index"
    },
    i: {
        hand: "right",
        pan: 0.4,
        finger: "right-middle"
    },
    k: {
        hand: "right",
        pan: 0.4,
        finger: "right-middle"
    },
    o: {
        hand: "right",
        pan: 0.7,
        finger: "right-ring"
    },
    l: {
        hand: "right",
        pan: 0.7,
        finger: "right-ring"
    },
    p: {
        hand: "right",
        pan: 1,
        finger: "right-pinky"
    },
    ";": {
        hand: "right",
        pan: 1,
        finger: "right-pinky"
    },
    "/": {
        hand: "right",
        pan: 1,
        finger: "right-pinky"
    },
    ",": {
        hand: "right",
        pan: 0.4,
        finger: "right-middle"
    },
    ".": {
        hand: "right",
        pan: 0.7,
        finger: "right-ring"
    },
    " ": {
        hand: "left",
        pan: 0,
        finger: "thumb"
    },
    // Stage_5's number row + shifted symbols (data/dictionaries/stage5.json) —
    // panned by the same finger-distance-from-center scale used above.
    "1": {
        hand: "left",
        pan: -1,
        finger: "left-pinky"
    },
    "2": {
        hand: "left",
        pan: -0.7,
        finger: "left-ring"
    },
    "3": {
        hand: "left",
        pan: -0.4,
        finger: "left-middle"
    },
    "4": {
        hand: "left",
        pan: -0.15,
        finger: "left-index"
    },
    "5": {
        hand: "left",
        pan: -0.15,
        finger: "left-index"
    },
    "6": {
        hand: "right",
        pan: 0.15,
        finger: "right-index"
    },
    "7": {
        hand: "right",
        pan: 0.15,
        finger: "right-index"
    },
    "8": {
        hand: "right",
        pan: 0.4,
        finger: "right-middle"
    },
    "9": {
        hand: "right",
        pan: 0.7,
        finger: "right-ring"
    },
    "0": {
        hand: "right",
        pan: 1,
        finger: "right-pinky"
    },
    "!": {
        hand: "left",
        pan: -1,
        finger: "left-pinky"
    },
    "@": {
        hand: "left",
        pan: -0.7,
        finger: "left-ring"
    },
    "#": {
        hand: "left",
        pan: -0.4,
        finger: "left-middle"
    },
    $: {
        hand: "left",
        pan: -0.15,
        finger: "left-index"
    },
    "%": {
        hand: "left",
        pan: -0.15,
        finger: "left-index"
    },
    "&": {
        hand: "right",
        pan: 0.15,
        finger: "right-index"
    },
    "-": {
        hand: "right",
        pan: 1,
        finger: "right-pinky"
    },
    "'": {
        hand: "right",
        pan: 1,
        finger: "right-pinky"
    }
};
function getKeyPan(key) {
    return KEY_HAND_MAP[key.toLowerCase()]?.pan ?? 0;
}
function getKeyHand(key) {
    return KEY_HAND_MAP[key.toLowerCase()]?.hand ?? null;
}
function getKeyFinger(key) {
    return KEY_HAND_MAP[key.toLowerCase()]?.finger ?? "unknown";
}
function playPannedTone(key, frequency = 440, durationSeconds = 0.08, volume = 0.3) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$AudioContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAudioContext"])();
    if (!context) return;
    if (context.state === "suspended") context.resume();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const panner = context.createStereoPanner();
    panner.pan.value = getKeyPan(key);
    gain.gain.value = volume;
    oscillator.frequency.value = frequency;
    oscillator.connect(gain);
    gain.connect(panner);
    panner.connect(context.destination);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + durationSeconds);
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + durationSeconds);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/specialCharacters.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "!": "Exclamation mark",
    ".": "Period",
    "?": "Question mark",
    ";": "Semicolon",
    ",": "Comma",
    ":": "Colon",
    "'": "Apostrophe",
    "\"": "Quotation mark",
    "-": "Hyphen",
    "_": "Underscore",
    "(": "Open parenthesis",
    ")": "Close parenthesis",
    "$": "Dollar sign",
    "%": "Percent sign",
    "&": "Ampersand",
    "@": "At sign",
    "#": "Hash sign",
    "/": "Slash",
    " ": "Spacebar",
    "z": "Zed",
    "Z": "Zed",
    "m": "M, as in Mike",
    "M": "M, as in Mike",
    "n": "N, as in November",
    "N": "N, as in November"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/engines/audio/narrator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "narratorPhrases",
    ()=>narratorPhrases,
    "playNarratorClip",
    ()=>playNarratorClip,
    "speakableChar",
    ()=>speakableChar,
    "speakableWord",
    ()=>speakableWord
]);
// engines/audio/narrator.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$specialCharacters$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/specialCharacters.json.[json].cjs [app-client] (ecmascript)");
;
;
/**
 * speechSynthesis frequently produces no audible sound at all for bare
 * punctuation characters (";", ",", etc.) — there's no "word" for it to
 * say. data/specialCharacters.json maps every punctuation/symbol key in
 * the curriculum to a readable name ("Semicolon", "Comma", ...). Any place
 * that speaks a single character — not a whole word — must route through
 * this so those keys are actually announced instead of silently skipped.
 */ const SPECIAL_CHARACTERS = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$specialCharacters$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
function speakableChar(char) {
    return SPECIAL_CHARACTERS[char] ?? char;
}
function speakableWord(word) {
    return word.length === 1 ? speakableChar(word) : word;
}
const narratorPhrases = {
    welcomeBack: (username)=>`Welcome back, ${username}!`,
    welcomeNew: ()=>"Welcome to AudioKeys! Let's create your first profile and start learning to type by ear.",
    stageIntro: (stage)=>`Starting ${stage.replace("_", " ")}. Get your fingers ready.`,
    correctKey: (key)=>`${speakableChar(key)}, correct.`,
    incorrectKey: (expected, actual)=>`Try again. That was ${speakableChar(actual)}, needed ${speakableChar(expected)}.`,
    sessionComplete: (wpm, accuracy)=>`Session complete. ${Math.round(wpm)} words per minute, ${Math.round(accuracy)} percent accuracy.`,
    personalBest: (metric, delta)=>delta > 0 ? `New personal best! You beat your last ${metric} by ${Math.round(delta)}.` : `Keep going — you're ${Math.round(Math.abs(delta))} away from your personal best ${metric}.`,
    leaderboardEntry: (rank, username, wpm, accuracy)=>`Rank ${rank}: ${username}, ${Math.round(wpm)} words per minute, ${Math.round(accuracy)} percent accuracy.`,
    weakKeyCallout: (keyPair)=>`Let's work on ${keyPair.split("").join(" and ")} — that pair needs practice.`,
    achievementUnlocked: (name)=>`Achievement unlocked: ${name}!`
};
/* ---------------------------------------------------------------------- */ /* Pre-recorded narrator audio (optional) — for a warmer voice than the    */ /* browser's built-in speechSynthesis. Falls back silently if a clip is    */ /* missing, so `speak(narratorPhrases.stageIntro(...))` via TTS remains    */ /* the source of truth and this is purely a nicer-sounding overlay.        */ /* ---------------------------------------------------------------------- */ const clipCache = new Map();
function clipPath(clipId) {
    return `/audio/narrator/${clipId}.mp3`;
}
function playNarratorClip(clipId, onMissing) {
    let howl = clipCache.get(clipId);
    if (!howl) {
        howl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howl"]({
            src: [
                clipPath(clipId)
            ],
            preload: true,
            onloaderror: ()=>onMissing?.()
        });
        clipCache.set(clipId, howl);
    }
    if (howl.state() === "loaded") {
        howl.play();
    } else {
        howl.once("load", ()=>howl.play());
        howl.once("loaderror", ()=>onMissing?.());
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/stage/[stageId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StagePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.mjs [app-client] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.mjs [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useProfile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAudioEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAudioEngine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useKeystrokeLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useKeystrokeLogger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/metrics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$weakKeyDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/adaptive/weakKeyDetector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$spacedRepetition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/adaptive/spacedRepetition.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$stage$2f$stageConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/stage/stageConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/audio/speechSequencer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$longFormTracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/audio/longFormTracks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$spatialPanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/audio/spatialPanner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/engines/audio/narrator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useAudioStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ENCOURAGEMENTS = [
    "Nice!",
    "Great!",
    "Keep going!",
    "Well done!",
    "You've got it!"
];
const STAGE_COLORS = {
    "1": "from-emerald-500 to-emerald-400",
    "2": "from-blue-500 to-blue-400",
    "3": "from-purple-500 to-purple-400",
    "4": "from-orange-500 to-orange-400",
    "5": "from-pink-500 to-pink-400",
    "6": "from-cyan-500 to-cyan-400",
    "7": "from-amber-500 to-amber-400",
    "8": "from-red-500 to-red-400"
};
function StagePage({ params }) {
    _s();
    const { stageId: routeParam } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { currentProfile, updateProfile, isHydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"])();
    const { speak, playSound, screenReaderMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAudioEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudio"])();
    const { logKeystroke, sessionId, flushBuffer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useKeystrokeLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeystrokeLogger"])();
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$stage$2f$stageConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStageByRoute"])(routeParam);
    const speedLabel = stage.metric === "kpm" ? "KPM" : "WPM";
    // The queue is now built from the real curriculum data (data/dictionaries)
    // via generateLesson(), and — once the student's weak keys and due
    // spaced-repetition items are loaded — biased toward their actual trouble
    // spots. That fetch is async, so the queue starts empty and is populated
    // by the effect below rather than a synchronous useRef.
    const [wordQueue, setWordQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [queueReady, setQueueReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentWordIndex, setCurrentWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentCharIndex, setCurrentCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // KPM or WPM, depending on stage.metric
    const [accuracy, setAccuracy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(stage.duration);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFeedback, setShowFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedbackType, setFeedbackType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [keystrokes, setKeystrokes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        correct: 0,
        total: 0
    });
    const [sessionComplete, setSessionComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [liveMessage, setLiveMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [levelUpInfo, setLevelUpInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentSentenceText, setCurrentSentenceText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Guards against double-advancing the SAME word (e.g. a stray duplicate
    // event). Keyed to the word index itself rather than a wall-clock cooldown
    // — a time-based cooldown (the old approach) blocks legitimate rapid-fire
    // completions of *different* words, which is exactly what single-letter
    // key-drill stages produce from a fast typist: every keystroke completes
    // a new word, often well under 150ms apart. That mismatch was the actual
    // cause of "every other letter needs Enter" — the second completion was
    // silently dropped by the cooldown, leaving currentCharIndex stuck at the
    // word's length until Enter forced a re-check past the (by-then-expired)
    // cooldown.
    const lastCompletedWordIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const announcedTimeWarnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Guards finishSession() against firing more than once when timeLeft
    // hits 0 — see the timer side-effects useEffect below.
    const sessionEndedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const wordCompleteCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // --- Stale-closure guards ------------------------------------------
    // handleWordComplete/finishSession get scheduled from inside
    // handleKeyDown via setTimeout, which "freezes" a reference to whichever
    // render's handleKeyDown/handleWordComplete/finishSession created that
    // timeout. Because React state setters are asynchronous, that frozen
    // closure was reading currentCharIndex/currentWordIndex/keystrokes/speed
    // as they were *before* the very keystroke that triggered the timeout —
    // e.g. on the last letter of the last word, currentCharIndex inside that
    // closure was still word.length - 1, never word.length. That made the
    // stage-complete check (`currentCharIndex >= currentWord.length`) false
    // even when the student had genuinely finished, so level-up never fired.
    // These refs are updated synchronously at the same point the matching
    // state setter is called, so any closure — however stale — can read the
    // true current value via `.current`.
    const currentWordIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentCharIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const keystrokesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        correct: 0,
        total: 0
    });
    const speedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Cancellation token for the async announcement chains (sentence -> word
    // -> letter). Bumped whenever the flow needs to abandon an in-flight
    // chain — restart, session end, unmount — so a stale chain can't finish
    // speaking over a fresh one.
    const speechTokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Skips the generic "new word" announcement effect exactly once, for
    // cases where the word-start announcement is already being handled
    // manually (initial mount, restart).
    const suppressNextWordAnnounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    // Resolves once the current item's sentence+word intro has finished
    // playing. Typing is never blocked while that intro plays — a student
    // who already recognizes the word from hearing it should be free to
    // start typing immediately — but the per-letter "announce the next
    // letter" effect below used to fire on priority:"high", which cancels
    // whatever's currently speaking. That meant a fast/confident typist's
    // very first keystroke would cut the word's own pronunciation off
    // mid-word, so it sounded like "some words just don't get said" even
    // though every word's announcement is always started; it just wasn't
    // always allowed to finish. Letter announcements now await this promise
    // first, so the intro always plays in full before anything interrupts it.
    const introInFlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Promise.resolve());
    const currentItem = wordQueue[currentWordIndex];
    const currentWord = currentItem?.word || "";
    const totalWords = wordQueue.length;
    // Screen readers announce aria-live regions by watching for DOM
    // mutations. React, however, bails out of re-rendering — and therefore
    // never touches the DOM — when a state setter is called with a value
    // that's already the current state (documented React behavior). That
    // means two consecutive identical announcements go completely silent for
    // a real screen reader: the letter "o" twice in a row in "book", "t"
    // twice in "letter", back-to-back single-letter drills in Stage 1-5 that
    // repeat, or a sentence word ending in the same letter the next one
    // starts with. This app's own synthesized voice (speak(), below) isn't
    // affected — it fires unconditionally every call — which is exactly why
    // it looked like "the word gets said but the letter randomly doesn't":
    // TTS always played, but the live region powering an actual screen
    // reader silently no-opped on repeats. Clearing the region first, then
    // setting the real text a frame later, guarantees "" -> text is always a
    // change, so the announcement is never skipped.
    const setLiveMessageForced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StagePage.useCallback[setLiveMessageForced]": (text)=>{
            setLiveMessage("");
            requestAnimationFrame({
                "StagePage.useCallback[setLiveMessageForced]": ()=>setLiveMessage(text)
            }["StagePage.useCallback[setLiveMessageForced]"]);
        }
    }["StagePage.useCallback[setLiveMessageForced]"], []);
    // Every announcement in the stage (word, letter, encouragement,
    // correction) ultimately wants to update this one live region, and in
    // screen reader mode nothing else paces them relative to each other —
    // our own speechSynthesis never actually speaks in that mode (see
    // useAudioStore.speak), so the app has no way to know when JAWS/NVDA/
    // VoiceOver has actually finished reading the last thing it announced.
    // Without this queue, an encouragement fired right as the next letter
    // starts (e.g. every 3rd word) would call setLiveMessageForced twice
    // within milliseconds of each other; a real screen reader mid-utterance
    // on the first update gets its speech cut off/dropped by the second and
    // goes silent — exactly the "stops after the encouragement, blind
    // student gets stuck" symptom. This serializes every live-region update
    // behind a promise chain and, in screen reader mode only, waits out a
    // rough estimate of how long that text would take a screen reader to
    // read before letting the next one in — the same estimate already used
    // to pace the app's own voice. In app-voice mode this is a no-op pass
    // through to setLiveMessageForced with no added delay, since that path
    // already works correctly (paced by the browser's real speechSynthesis
    // engine instead).
    const liveQueueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Promise.resolve());
    const queueLiveMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StagePage.useCallback[queueLiveMessage]": (text)=>{
            liveQueueRef.current = liveQueueRef.current.then({
                "StagePage.useCallback[queueLiveMessage]": async ()=>{
                    setLiveMessageForced(text);
                    if (screenReaderMode) {
                        const estimatedMs = Math.max(900, text.length * 90);
                        await new Promise({
                            "StagePage.useCallback[queueLiveMessage]": (r)=>setTimeout(r, estimatedMs)
                        }["StagePage.useCallback[queueLiveMessage]"]);
                    }
                }
            }["StagePage.useCallback[queueLiveMessage]"]);
        }
    }["StagePage.useCallback[queueLiveMessage]"], [
        setLiveMessageForced,
        screenReaderMode
    ]);
    const announce = (text, options)=>{
        queueLiveMessage(text);
        speak(text, options);
    };
    // Redirect if an unknown stage id slipped through — done in an effect,
    // not during render, since router.push is a side effect.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            if (!routeParam) router.push("/");
        }
    }["StagePage.useEffect"], [
        routeParam,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            // currentProfile briefly starts out null on a hard refresh, while the
            // persisted profile store is still hydrating from IndexedDB — that was
            // being misread as "no profile" and bouncing the student straight back
            // to the home page mid-lesson. Only redirect once hydration has
            // actually finished and there's still no profile.
            if (isHydrated && !currentProfile) router.push("/");
        }
    }["StagePage.useEffect"], [
        currentProfile,
        isHydrated,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            return ({
                "StagePage.useEffect": ()=>{
                    speechTokenRef.current += 1;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelSpeech"])();
                    flushBuffer(); // don't lose any buffered-but-unsaved keystrokes on unmount
                }
            })["StagePage.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StagePage.useEffect"], []);
    // Lazily create a dedicated AudioContext for panned feedback tones.
    const getAudioContext = ()=>{
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
        }
        return audioCtxRef.current;
    };
    // Spatial feedback tone: correct = bright chime, incorrect = low thump,
    // panned left/right to match the hand that should have pressed the key.
    const playSpatialFeedback = (key, correct)=>{
        try {
            const ctx = getAudioContext();
            const pan = ctx.createStereoPanner();
            pan.pan.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$spatialPanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKeyPan"])(key);
            const gain = ctx.createGain();
            const osc = ctx.createOscillator();
            // These tones previously ignored the user's volume setting entirely —
            // raising the slider had no effect on them. Scale by the current
            // store volume so "louder" actually makes them louder.
            const userVolume = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAudioStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudioStore"].getState().volume;
            osc.connect(gain);
            gain.connect(pan);
            pan.connect(ctx.destination);
            if (correct) {
                osc.type = "sine";
                osc.frequency.setValueAtTime(880, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08);
                gain.gain.value = 0.35 * userVolume;
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            } else {
                osc.type = "triangle";
                osc.frequency.setValueAtTime(180, ctx.currentTime);
                gain.gain.value = 0.35 * userVolume;
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
            }
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + (correct ? 0.1 : 0.18));
        } catch  {
        // Web Audio unsupported/blocked — fall back silently, the app-level
        // playSound() correct/incorrect tones below still cover feedback.
        }
    };
    // --- Announcement sequencing ---------------------------------------
    // The core "hear it, then strike it" loop, used identically by every
    // stage: on sentence-mode stages (Stage_8), the full sentence is read
    // once, on the first word of that sentence, before falling into the same
    // word -> letter flow that every stage uses. For single-character items
    // (Stage_1-5 key drills), the "word" and the "first letter" are the same
    // character, so the letter announcement is skipped to avoid saying it twice.
    const announceItemStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StagePage.useCallback[announceItemStart]": async (item, token)=>{
            let resolveIntro;
            introInFlightRef.current = new Promise({
                "StagePage.useCallback[announceItemStart]": (resolve)=>{
                    resolveIntro = resolve;
                }
            }["StagePage.useCallback[announceItemStart]"]);
            try {
                if (item.sentenceIntro) {
                    setCurrentSentenceText(item.sentenceIntro);
                    queueLiveMessage(item.sentenceIntro);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakAndWait"])(item.sentenceIntro, {
                        priority: "high"
                    });
                    if (speechTokenRef.current !== token) return;
                }
                queueLiveMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakableWord"])(item.word));
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakAndWait"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakableWord"])(item.word), {
                    priority: "high"
                });
                if (speechTokenRef.current !== token) return;
            } finally{
                // Resolve even on early return/abandonment, or any waiting letter
                // announcement would hang forever.
                resolveIntro();
            }
            if (item.word.length > 1) {
                const firstLetter = item.word[0];
                if (firstLetter) {
                    queueLiveMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakableChar"])(firstLetter));
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakAndWait"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakableChar"])(firstLetter), {
                        priority: "high"
                    });
                }
            }
        }
    }["StagePage.useCallback[announceItemStart]"], [
        setLiveMessageForced,
        queueLiveMessage
    ]);
    // Fetch the student's weak keys + due spaced-repetition items, build the
    // real lesson queue from them, then kick off the mount announcement chain.
    // Runs once per stage visit.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            if (!currentProfile) return;
            let cancelled = false;
            ({
                "StagePage.useEffect": async ()=>{
                    let weakKeyPairs = [];
                    let dueItems = [];
                    try {
                        [weakKeyPairs, dueItems] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeakKeyPairs"])(currentProfile.username),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDueSpacedRepetitionItems"])(currentProfile.username)
                        ]);
                    } catch (error) {
                        console.error("Failed to load adaptive data, using an unpersonalized lesson:", error);
                    }
                    if (cancelled) return;
                    const queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$stage$2f$stageConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildWordQueue"])(stage, {
                        weakKeyPairs,
                        dueSpacedRepetitionItems: dueItems
                    });
                    setWordQueue(queue);
                    setQueueReady(true);
                    // inputRef.current is still null here — the <input> hasn't been
                    // created yet, it only mounts on the *next* render once queueReady
                    // flips to true. A same-tick focus() call was always a silent no-op;
                    // real initial focus was riding entirely on the native `autoFocus`
                    // attribute firing the instant the element mounts, giving JAWS zero
                    // time to process the new DOM before focus moved into it. Wait for
                    // the ref to actually attach, then focus one frame later so the
                    // browser has painted (and the AT has a beat to catch up) first.
                    const focusWhenMounted = {
                        "StagePage.useEffect.focusWhenMounted": (attemptsLeft = 20)=>{
                            if (inputRef.current) {
                                requestAnimationFrame({
                                    "StagePage.useEffect.focusWhenMounted": ()=>inputRef.current?.focus()
                                }["StagePage.useEffect.focusWhenMounted"]);
                            } else if (attemptsLeft > 0) {
                                requestAnimationFrame({
                                    "StagePage.useEffect.focusWhenMounted": ()=>focusWhenMounted(attemptsLeft - 1)
                                }["StagePage.useEffect.focusWhenMounted"]);
                            }
                        }
                    }["StagePage.useEffect.focusWhenMounted"];
                    focusWhenMounted();
                    const token = ++speechTokenRef.current;
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakAndWait"])(`Welcome to ${stage.title}. ${stage.description}.`, {
                        priority: "high"
                    });
                    if (speechTokenRef.current !== token || cancelled) return;
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakAndWait"])(`${queue.length} ${queue.length === 1 ? "item" : "items"} to practice. Press Escape any time to pause.`);
                    if (speechTokenRef.current !== token || cancelled) return;
                    const first = queue[0];
                    if (first) await announceItemStart(first, token);
                }
            })["StagePage.useEffect"]();
            return ({
                "StagePage.useEffect": ()=>{
                    cancelled = true;
                }
            })["StagePage.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StagePage.useEffect"], [
        stage.stageId,
        currentProfile?.username
    ]);
    // Every time we land on a new word (after the very first, which the load
    // effect above already handles), announce it: sentence-if-new, the word,
    // then its first letter.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            if (!queueReady) return;
            if (suppressNextWordAnnounceRef.current) {
                suppressNextWordAnnounceRef.current = false;
                return;
            }
            const item = wordQueue[currentWordIndex];
            if (!item) return;
            const token = ++speechTokenRef.current;
            announceItemStart(item, token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StagePage.useEffect"], [
        currentWordIndex,
        queueReady
    ]);
    // Every time the student advances a letter within the current word,
    // announce the next letter to strike. currentCharIndex === 0 is skipped
    // because that case is already covered by announceItemStart above (word
    // start already announces the first letter).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            if (currentCharIndex === 0) return;
            const letter = currentWord[currentCharIndex];
            if (!letter) return; // word just completed — handled by word-complete flow
            const token = ++speechTokenRef.current;
            const introWait = introInFlightRef.current;
            ({
                "StagePage.useEffect": async ()=>{
                    // Never interrupt the word's (or sentence's) own introduction — let
                    // it finish playing in full first.
                    await introWait;
                    // If several keystrokes landed while we were waiting, only the most
                    // recent one should still announce; older ones are stale by now.
                    if (speechTokenRef.current !== token) return;
                    // Live region text must match what speakAndWait actually says below —
                    // both channels need to go through speakableChar so a real screen
                    // reader (which reads this live region, not our own TTS) says "Zed"
                    // for z, "M, as in Mike" for m, etc., the same as the app's own
                    // voice does. Passing the raw letter here used to leave JAWS/NVDA to
                    // guess its own pronunciation, which is where "z" -> "zee" and the
                    // easily-confused "m"/"n" letter names came from — that's the screen
                    // reader's own TTS engine, not this app's, so this JSON mapping is
                    // the only lever we have over it.
                    queueLiveMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakableChar"])(letter));
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakAndWait"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakableChar"])(letter), {
                        priority: "high"
                    });
                }
            })["StagePage.useEffect"]();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StagePage.useEffect"], [
        currentCharIndex
    ]);
    // Timer logic — this effect's only job is decrementing the number. Kept
    // deliberately pure: the setTimeLeft updater below used to also call
    // announce() (for the 30/10/5s warnings) and finishSession() directly,
    // both of which call the Zustand audio store's own setState. Calling
    // that from inside a React setState updater function is what produced
    // "Cannot update a component (StagePage) while rendering a different
    // component (StagePage)" once the timer actually hit zero — React
    // invokes updater functions as part of its own render/commit work, and
    // an external store's setState firing mid-way through that collides
    // with it. All side effects now live in the effect below instead, which
    // runs as a normal, safe effect after commit.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            if (isActive && !isPaused && timeLeft > 0) {
                timerRef.current = setInterval({
                    "StagePage.useEffect": ()=>{
                        setTimeLeft({
                            "StagePage.useEffect": (prev)=>Math.max(0, prev - 1)
                        }["StagePage.useEffect"]);
                    }
                }["StagePage.useEffect"], 1000);
            }
            return ({
                "StagePage.useEffect": ()=>{
                    if (timerRef.current) clearInterval(timerRef.current);
                }
            })["StagePage.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StagePage.useEffect"], [
        isActive,
        isPaused,
        timeLeft
    ]);
    // Time-based side effects — countdown warnings and ending the session —
    // split out from the pure decrement above so they run as an ordinary
    // effect, never inside a setState updater. sessionEndedRef guards
    // against finishSession firing more than once (e.g. React Strict Mode's
    // double effect invocation in dev, or isActive flipping while
    // timeLeft is still 0).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            if (!isActive) return;
            if ([
                30,
                10,
                5,
                3,
                2,
                1
            ].includes(timeLeft) && !announcedTimeWarnings.current.has(timeLeft)) {
                announcedTimeWarnings.current.add(timeLeft);
                announce(timeLeft <= 5 ? `${timeLeft}` : `${timeLeft} seconds left`);
            }
            if (timeLeft === 0 && !sessionEndedRef.current) {
                sessionEndedRef.current = true;
                finishSession();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["StagePage.useEffect"], [
        timeLeft,
        isActive
    ]);
    // Calculate live speed (KPM for key-drill stages, WPM for word/sentence
    // stages) and accuracy. Using WPM's "correct/5/minutes" formula for a
    // single-key stage would badly understate speed (each keystroke only
    // counts as 1/5 of a "word"), which is why keys-mode stages score on raw
    // keystrokes-per-minute instead.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            if (startTime && keystrokes.total > 0) {
                const elapsed = (Date.now() - startTime) / 60000 || 0.001;
                const speedCalc = stage.metric === "kpm" ? keystrokes.correct / elapsed : keystrokes.correct / 5 / elapsed;
                const roundedSpeed = Math.round(speedCalc);
                setSpeed(roundedSpeed);
                speedRef.current = roundedSpeed;
                setAccuracy(Math.round(keystrokes.correct / keystrokes.total * 100));
            }
        }
    }["StagePage.useEffect"], [
        keystrokes,
        startTime,
        stage.metric
    ]);
    // Scroll to current word (visual convenience only — irrelevant for
    // screen-reader users, who get the spoken announcement instead)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            if (wordListRef.current) {
                const wordElements = wordListRef.current.querySelectorAll(".word-item");
                wordElements[currentWordIndex]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }
    }["StagePage.useEffect"], [
        currentWordIndex
    ]);
    // After a session ends, feed its keystrokes back into the adaptive engine:
    // recompute this student's weak key pairs, and update (or create) a
    // spaced-repetition item for every key they practiced this session — this
    // is what makes the *next* session's buildWordQueue() call actually
    // personalized, closing the loop the adaptive engine was built for but
    // never previously connected to.
    const updateAdaptiveData = async (username)=>{
        try {
            const sessionLogs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKeystrokesBySession"])(sessionId);
            if (sessionLogs.length === 0) return;
            const weakPairs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$weakKeyDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectWeakKeyPairs"])(sessionLogs);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveWeakKeyPairs"])(username, weakPairs);
            const statsByKey = new Map();
            for (const log of sessionLogs){
                const key = log.expectedKey.toLowerCase();
                const entry = statsByKey.get(key) ?? {
                    correct: 0,
                    total: 0
                };
                entry.total += 1;
                if (log.isCorrect) entry.correct += 1;
                statsByKey.set(key, entry);
            }
            const existingItems = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpacedRepetitionItems"])(username);
            for (const [key, stats] of statsByKey.entries()){
                const wasMostlyCorrect = stats.correct / stats.total >= 0.7;
                const existing = existingItems.find((item)=>item.key === key);
                const base = existing ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$spacedRepetition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSpacedRepetitionItem"])(username, key, stage.stageId);
                const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$adaptive$2f$spacedRepetition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleReview"])(base, wasMostlyCorrect);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertSpacedRepetitionItem"])(updated);
            }
        } catch (error) {
            console.error("Failed to update adaptive data:", error);
        }
    };
    const finishSession = async ()=>{
        setIsActive(false);
        speechTokenRef.current += 1; // abandon any pending letter/word announcement
        await flushBuffer(); // make sure every keystroke from this session is persisted
        // Read from the refs, not the closed-over state values — this function
        // is frequently invoked from a setTimeout scheduled by a prior render's
        // handleKeyDown/handleWordComplete, whose `keystrokes`/`speed`/index
        // variables are frozen snapshots from before the final keystroke.
        const finalKeystrokes = keystrokesRef.current;
        const finalWordIndex = currentWordIndexRef.current;
        const finalCharIndex = currentCharIndexRef.current;
        const finalSpeed = speedRef.current;
        const finalWord = wordQueue[finalWordIndex]?.word || "";
        const finalAccuracy = finalKeystrokes.total > 0 ? Math.round(finalKeystrokes.correct / finalKeystrokes.total * 100) : 0;
        // Fluency here is scored relative to *this stage's own target* (so it's
        // meaningful whether the stage is measured in KPM or WPM), not against a
        // fixed speed cap — that fixed-cap version is what the leaderboard uses
        // separately, for fair cross-stage ranking (see engines/leaderboard).
        const speedRatio = Math.min(finalSpeed / stage.levelUpTarget, 1);
        const fluencyScore = Math.round(finalAccuracy * 0.6 + speedRatio * 100 * 0.4);
        const clearedAllWords = finalWordIndex >= totalWords - 1 && finalCharIndex >= finalWord.length;
        const meetsThreshold = finalAccuracy >= stage.levelUpAccuracy && finalSpeed >= stage.levelUpTarget;
        const eligibleToLevelUp = clearedAllWords && meetsThreshold && currentProfile?.level === stage.stageId;
        // `handled` tracks whether one of the specific outcome branches below
        // (level-up / final-stage / save-failed) already put up its own
        // sessionComplete UI + announcement. Everything that can fail — the DB
        // write, the adaptive-data update, the level-up bookkeeping — now lives
        // inside this try, and the `finally` guarantees that *some* outcome is
        // always shown to the student. Previously, an exception anywhere in
        // this block (e.g. a blocked IndexedDB write) skipped straight past
        // every setSessionComplete(true) call, which is what "timer hits zero
        // and the app just stops" actually was: not a missing feature, an
        // unhandled error silently swallowing the completion screen.
        let handled = false;
        try {
            if (currentProfile) {
                const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDB"])();
                await db.add("metrics", {
                    username: currentProfile.username,
                    stage: stage.stageId,
                    timestamp: new Date().toISOString(),
                    wpm: finalSpeed,
                    accuracy: finalAccuracy,
                    fluencyScore,
                    totalKeystrokes: finalKeystrokes.total,
                    correctKeystrokes: finalKeystrokes.correct,
                    errors: finalKeystrokes.total - finalKeystrokes.correct,
                    duration: stage.duration - timeLeft
                });
                await updateAdaptiveData(currentProfile.username);
                if (fluencyScore > (currentProfile.fluencyScore || 0)) {
                    await updateProfile({
                        fluencyScore
                    });
                }
                if (eligibleToLevelUp) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$metrics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markStageComplete"])(currentProfile.username, stage.stageId);
                    const nextRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$stage$2f$stageConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextStageRoute"])(stage.id);
                    if (nextRoute) {
                        const nextStageId = __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$stage$2f$stageConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_ROUTE_TO_ID"][nextRoute];
                        const nextTitle = __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$stage$2f$stageConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_CONFIG"][nextRoute].title;
                        await updateProfile({
                            level: nextStageId
                        });
                        setLevelUpInfo({
                            title: nextTitle
                        });
                        setSessionComplete(true);
                        handled = true;
                        const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$longFormTracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickCelebrationTrack"])();
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$longFormTracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playLongFormTrack"])(track);
                        announce(`${stage.celebration} Congratulations! You are moving to ${nextTitle}.`, {
                            priority: "high"
                        });
                        return; // skip the generic session-complete announcement below
                    }
                    // Already on the final stage and just cleared it.
                    setLevelUpInfo({
                        title: "the final stage"
                    });
                    setSessionComplete(true);
                    handled = true;
                    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$longFormTracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickCelebrationTrack"])();
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$longFormTracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playLongFormTrack"])(track);
                    announce(`${stage.celebration} Congratulations, ${currentProfile.username}! You've completed every stage of AudioKeys.`, {
                        priority: "high"
                    });
                    return;
                }
            }
        } catch (error) {
            console.error("Failed to save metrics:", error);
        } finally{
            if (!handled) {
                // Covers both "didn't hit the target this time" (student needs to
                // try again) and "profile/save step threw" cases — either way the
                // student gets told what happened and can act on it, instead of
                // silence.
                setSessionComplete(true);
                announce(eligibleToLevelUp ? `Session complete! You typed ${finalSpeed} ${speedLabel} with ${finalAccuracy} percent accuracy.` : `Time's up. You typed ${finalSpeed} ${speedLabel} with ${finalAccuracy} percent accuracy. ` + `That's below this stage's target of ${stage.levelUpTarget} ${speedLabel} at ${stage.levelUpAccuracy} percent accuracy, ` + `so let's try this stage again.`, {
                    priority: "high"
                });
                playSound("levelup");
            }
        }
    };
    const handleKeyDown = (e)=>{
        if (sessionComplete || !queueReady) return;
        // Escape pauses/resumes.
        if (e.key === "Escape") {
            e.preventDefault();
            togglePause();
            return;
        }
        // F2 repeats the current word on demand
        if (e.key === "F2") {
            e.preventDefault();
            announce(`Current word: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakableWord"])(currentWord)}.`, {
                priority: "high"
            });
            return;
        }
        if (!isActive && !startTime) {
            setIsActive(true);
            setStartTime(Date.now());
            announce("Started!", {
                priority: "high"
            });
        }
        const rawKey = e.key;
        const expectedChar = currentWord[currentCharIndex];
        if (rawKey === "Backspace") {
            e.preventDefault();
            if (currentCharIndexRef.current > 0) {
                const next = currentCharIndexRef.current - 1;
                currentCharIndexRef.current = next;
                setCurrentCharIndex(next);
                setInputValue((prev)=>prev.slice(0, -1));
                playSound("keypress");
            }
            return;
        }
        if (rawKey === "Enter" || rawKey === " ") {
            e.preventDefault();
            if (currentCharIndexRef.current === currentWord.length) {
                handleWordComplete();
            }
            return;
        }
        if (rawKey.length > 1) return; // ignore Shift, Tab, arrow keys, etc.
        // Guard against processing input for a word that's already been
        // completed. Reads the ref (always current) rather than the possibly
        // stale `currentCharIndex` state variable closed over by this render.
        if (currentCharIndexRef.current >= currentWord.length) return;
        e.preventDefault();
        // Every key this curriculum ever expects is lowercase, so normalize
        // letter case before comparing. Without this, a student with Caps Lock
        // on (easy to trigger by touch, especially without being able to see
        // an indicator light) would type the physically correct key and have
        // it recorded — and announced — as wrong every single time.
        const key = rawKey.length === 1 ? rawKey.toLowerCase() : rawKey;
        const isKeyCorrect = key === expectedChar;
        logKeystroke(key, expectedChar, isKeyCorrect);
        setKeystrokes((prev)=>{
            const next = {
                correct: prev.correct + (isKeyCorrect ? 1 : 0),
                total: prev.total + 1
            };
            keystrokesRef.current = next;
            return next;
        });
        playSpatialFeedback(key, isKeyCorrect);
        if (isKeyCorrect) {
            playSound("correct");
            setFeedbackType("correct");
        } else {
            playSound("incorrect");
            setFeedbackType("incorrect");
            // Spoken correction — the specific piece a blind learner needs to fix
            // muscle memory, which a tone alone can't convey. The next-letter
            // announcement (currentCharIndex effect) fires right after this.
            // Deferred past introInFlightRef for the same reason as that
            // effect: a mistyped first keystroke shouldn't be able to cut the
            // word's own pronunciation off mid-word either.
            const correctionIntroWait = introInFlightRef.current;
            const correctionToken = ++speechTokenRef.current;
            (async ()=>{
                await correctionIntroWait;
                if (speechTokenRef.current !== correctionToken) return;
                announce(`You pressed ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakableChar"])(key)}, expected ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakableChar"])(expectedChar)}.`, {
                    priority: "high"
                });
            })();
        }
        setShowFeedback(true);
        setTimeout(()=>setShowFeedback(false), 150);
        setInputValue((prev)=>prev + key);
        const nextCharIndex = currentCharIndexRef.current + 1;
        currentCharIndexRef.current = nextCharIndex;
        setCurrentCharIndex(nextCharIndex);
        // Advance immediately rather than after an artificial delay. The old
        // 300ms delay meant that any keystroke a fast typist landed in that
        // window — which is exactly what happens once someone's comfortably
        // over ~40 keys/min — hit the guard above and was silently discarded,
        // which is what "gets stuck when I type faster" was: input the app
        // just never picked up made typing feel broken, not slow.
        //
        // NOTE: this must compare against nextCharIndex (just computed above),
        // not the closed-over `currentCharIndex` state value. A functional
        // setState updater used to do this increment instead (`setCurrentCharIndex(prev
        // => ...)`), which mutated currentCharIndexRef as a side effect *inside*
        // that updater — but React doesn't run functional updaters immediately,
        // it defers them until reconciliation. That deferred ref write landed
        // *after* handleWordComplete (called synchronously right below) had
        // already reset currentCharIndexRef to 0 for the next word, silently
        // clobbering it back to a stale value. The guard at the top of this
        // function reads that ref, so every keystroke on the next word was
        // then incorrectly rejected as "already completed" — permanently stuck
        // until Enter forced a re-check. Computing and assigning the ref
        // synchronously, right here, removes that race entirely.
        if (nextCharIndex === currentWord.length) {
            handleWordComplete();
        }
    };
    const handleWordComplete = ()=>{
        const wordIndex = currentWordIndexRef.current;
        if (lastCompletedWordIndexRef.current === wordIndex) return; // this word already advanced
        lastCompletedWordIndexRef.current = wordIndex;
        if (wordIndex < totalWords - 1) {
            wordCompleteCount.current += 1;
            const nextWordIndex = wordIndex + 1;
            currentWordIndexRef.current = nextWordIndex;
            setCurrentWordIndex(nextWordIndex);
            setCurrentCharIndex(0);
            currentCharIndexRef.current = 0;
            setInputValue("");
            playSound("select");
            // Light, varied positive reinforcement every 3rd word — enough to
            // feel encouraging without talking over every single word transition.
            //
            // This fires synchronously, right here, in the same tick as
            // setCurrentWordIndex above. But the *next* word's own announcement
            // doesn't happen here — it happens moments later, in the
            // currentWordIndex useEffect, once React has committed this state
            // update. That effect's speak() call is the one that actually
            // matters and should win the speech engine every time. Calling
            // announce(phrase) immediately, right now, used to grab the idle
            // speech slot first (nothing else is speaking at the instant a word
            // completes) and forced the next word's own pronunciation to queue
            // up and wait behind "Nice!"/"Great!" instead of the other way
            // around — the exact "affirmation delays the next word" bug.
            // Deferring past that effect lets the next word claim the slot
            // first; the encouragement then correctly falls in right after it,
            // as a trailing aside, never blocking it.
            if (wordCompleteCount.current % 3 === 0) {
                const phrase = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
                setTimeout(()=>announce(phrase), 50);
            }
        } else {
            sessionEndedRef.current = true;
            finishSession();
        }
    };
    const handleRestart = ()=>{
        speechTokenRef.current += 1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelSpeech"])();
        suppressNextWordAnnounceRef.current = true;
        setCurrentWordIndex(0);
        currentWordIndexRef.current = 0;
        setCurrentCharIndex(0);
        currentCharIndexRef.current = 0;
        setInputValue("");
        setSpeed(0);
        speedRef.current = 0;
        setAccuracy(0);
        setTimeLeft(stage.duration);
        setIsActive(false);
        setIsPaused(false);
        setStartTime(null);
        setKeystrokes({
            correct: 0,
            total: 0
        });
        keystrokesRef.current = {
            correct: 0,
            total: 0
        };
        setSessionComplete(false);
        setLevelUpInfo(null);
        setShowFeedback(false);
        setFeedbackType(null);
        lastCompletedWordIndexRef.current = -1;
        announcedTimeWarnings.current.clear();
        sessionEndedRef.current = false;
        liveQueueRef.current = Promise.resolve();
        wordCompleteCount.current = 0;
        // BUG: calling focus() here synchronously used to be a silent no-op.
        // setSessionComplete(false) above only *schedules* a re-render — at this
        // exact point in the function the input's `disabled={sessionComplete}`
        // attribute in the real DOM is still `true` from the previous render
        // (sessionComplete was true, that's why the "Practice Again" button was
        // showing). Browsers refuse to focus a disabled element, so this focus()
        // call did nothing, and every keystroke afterward went nowhere — which
        // is exactly "click Try Again, then typing doesn't start at all."
        // Deferring one frame lets React commit the disabled=false render first.
        requestAnimationFrame(()=>inputRef.current?.focus());
        const token = speechTokenRef.current;
        (async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakAndWait"])("Practice restarted.", {
                priority: "high"
            });
            if (speechTokenRef.current !== token) return;
            const first = wordQueue[0];
            if (first) await announceItemStart(first, token);
        })();
    };
    const togglePause = ()=>{
        setIsPaused((prev)=>{
            const next = !prev;
            announce(next ? "Practice paused. Press Escape to resume." : "Resuming practice.", {
                priority: "high"
            });
            return next;
        });
    };
    const getProgress = ()=>totalWords > 0 ? Math.round(currentWordIndex / totalWords * 100) : 0;
    const getTimeDisplay = ()=>{
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };
    const getStageColor = ()=>STAGE_COLORS[stage.id] || STAGE_COLORS["1"];
    if (!currentProfile) return null;
    if (!queueReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            role: "application",
            "aria-roledescription": "typing practice",
            "aria-label": `${stage.title} typing practice, loading.`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-live": "assertive",
                    className: "sr-only",
                    children: "Preparing your lesson."
                }, void 0, false, {
                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                    lineNumber: 932,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-accent text-xl animate-pulse",
                    children: "Preparing your lesson..."
                }, void 0, false, {
                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                    lineNumber: 935,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/stage/[stageId]/page.tsx",
            lineNumber: 927,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-8 animate-fade-in",
        role: "application",
        "aria-roledescription": "typing practice",
        "aria-label": `${stage.title} typing practice. Type the letters as they are announced — every key goes straight to the lesson, no Enter required.`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-live": "assertive",
                className: "sr-only",
                children: liveMessage
            }, void 0, false, {
                fileName: "[project]/app/stage/[stageId]/page.tsx",
                lineNumber: 946,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/"),
                                className: "text-accent hover:text-accent-hover flex items-center gap-2 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 956,
                                        columnNumber: 13
                                    }, this),
                                    "Back to Home"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 953,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: togglePause,
                                        className: "btn-secondary px-4 py-2 text-sm",
                                        disabled: sessionComplete || !isActive,
                                        "aria-label": isPaused ? "Resume practice" : "Pause practice",
                                        children: isPaused ? "Resume" : "Pause"
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 961,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleRestart,
                                        className: "btn-secondary px-4 py-2 text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 971,
                                                columnNumber: 15
                                            }, this),
                                            "Restart"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 968,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 960,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 952,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3 rounded-2xl bg-gradient-to-r ${getStageColor()}`,
                                    children: stage.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stage.icon, {
                                        className: "w-8 h-8 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 981,
                                        columnNumber: 30
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 980,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold",
                                            children: stage.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 984,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-text-muted",
                                            children: stage.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 985,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 983,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-text-muted",
                                            children: "Player"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 988,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-accent",
                                            children: currentProfile.username
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 989,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 987,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                            lineNumber: 979,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 978,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 text-accent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 998,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-text-muted",
                                                children: speedLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 999,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 997,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: speed
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1001,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 996,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 text-success",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-text-muted",
                                                children: "Accuracy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 1006,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: [
                                            accuracy,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1008,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 1003,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 text-yellow-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 1012,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-text-muted",
                                                children: "Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 1013,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1011,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: [
                                            getProgress(),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1015,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 1010,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 text-text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 1019,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-text-muted",
                                                children: "Time Left"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 1020,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1018,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold font-mono",
                                        children: getTimeDisplay()
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1022,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 1017,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 995,
                        columnNumber: 9
                    }, this),
                    stage.mode === "sentences" && currentSentenceText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-text-muted mb-1",
                                children: "Current sentence"
                            }, void 0, false, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 1029,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg text-text",
                                children: currentSentenceText
                            }, void 0, false, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 1030,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 1028,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-text-muted mb-2",
                                        children: [
                                            "Type the highlighted word",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-xs",
                                                children: [
                                                    "(",
                                                    currentWordIndex + 1,
                                                    "/",
                                                    totalWords,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 1039,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1037,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-dark rounded-xl p-6 mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl md:text-6xl font-mono tracking-wider flex items-center justify-center gap-1 flex-wrap",
                                                children: currentWord.split("").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `transition-all duration-200 ${index < currentCharIndex ? index < currentCharIndex - 1 ? "text-success" : "text-accent" : "text-text-muted"} ${index === currentCharIndex ? "animate-pulse-glow" : ""}`,
                                                        children: char
                                                    }, index, false, {
                                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 1046,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1045,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        type: "text",
                                        value: inputValue,
                                        onChange: ()=>{},
                                        onKeyDown: handleKeyDown,
                                        onBlur: ()=>{
                                            // If focus slips off this field mid-session — some
                                            // screen-reader/browser combos will do this on their own,
                                            // e.g. after an aria-live region updates — keystrokes stop
                                            // reaching handleKeyDown entirely and nothing the student
                                            // types does anything until they manually refocus (often by
                                            // pressing Enter, which is exactly the "stuck until I press
                                            // Enter" symptom). Reclaim focus automatically rather than
                                            // requiring a manual re-focus action.
                                            if (!sessionComplete && !isPaused) {
                                                requestAnimationFrame(()=>inputRef.current?.focus());
                                            }
                                        },
                                        className: "sr-only",
                                        autoFocus: true,
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: false,
                                        // A static label, deliberately never changing per-word. This
                                        // input stays focused for the entire session, and its old
                                        // label — `Type the word: ${currentWord}` — changed every
                                        // single word. Screen readers re-announce a focused
                                        // element's accessible name whenever it changes, on top of
                                        // whatever the aria-live regions are already announcing.
                                        // Two announcement channels firing back-to-back on every
                                        // word, on a field that never loses focus, is exactly what
                                        // was jamming JAWS/NVDA's speech queue — "Type the word:"
                                        // would start, then go silent, because a second
                                        // name-change announcement collided with it before it
                                        // finished. The app's own voice never touched this
                                        // attribute, which is why that path was never affected.
                                        // The live-region announcements (see setLiveMessageForced
                                        // above) are now the single source of per-word narration
                                        // for real screen readers — this label just orients someone
                                        // tabbing in, once.
                                        "aria-label": "Typing practice. The current word or letter is announced automatically.",
                                        disabled: sessionComplete
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1064,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-2 bg-dark-secondary rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-gradient-to-r from-accent to-purple-400 transition-all duration-300",
                                            style: {
                                                width: `${getProgress()}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1111,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: wordListRef,
                                        className: "mt-4 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-dark-secondary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: wordQueue.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `word-item text-sm px-2 py-1 rounded transition-all ${index === currentWordIndex ? "bg-accent text-white" : index < currentWordIndex ? "text-success" : "text-text-muted"}`,
                                                    children: item.word
                                                }, index, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 1122,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1120,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 1117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 1036,
                                columnNumber: 11
                            }, this),
                            showFeedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-center transition-all duration-200 ${feedbackType === "correct" ? "text-success" : "text-error"}`,
                                "aria-hidden": "true",
                                children: feedbackType === "correct" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-8 h-8 mx-auto animate-bounce"
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1145,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    className: "w-8 h-8 mx-auto animate-bounce"
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1147,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 1139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 1035,
                        columnNumber: 9
                    }, this),
                    sessionComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card bg-success/10 border-success/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                    className: "w-16 h-16 text-yellow-400 mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1157,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-2",
                                    children: levelUpInfo ? "Stage Complete!" : "Session Complete!"
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-text-muted mb-4",
                                    children: levelUpInfo ? `You're moving on to ${levelUpInfo.title}!` : `Great job, ${currentProfile.username}!`
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-dark/50 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-accent",
                                                    children: speed
                                                }, void 0, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 1168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-text-muted",
                                                    children: speedLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 1169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-dark/50 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-success",
                                                    children: [
                                                        accuracy,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 1172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-text-muted",
                                                    children: "Accuracy"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 1173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-dark/50 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-yellow-400",
                                                    children: [
                                                        Math.round(accuracy * 0.6 + Math.min(speed / stage.levelUpTarget, 1) * 100 * 0.4),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 1176,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-text-muted",
                                                    children: "Fluency Score"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 1182,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-dark/50 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-text",
                                                    children: keystrokes.total
                                                }, void 0, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-text-muted",
                                                    children: "Keystrokes"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 1186,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 justify-center",
                                    children: [
                                        levelUpInfo && (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$stage$2f$stageConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextStageRoute"])(stage.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push(`/stage/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$stage$2f$stageConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextStageRoute"])(stage.id)}`),
                                            className: "btn-primary",
                                            children: [
                                                "Start ",
                                                levelUpInfo.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1191,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleRestart,
                                            className: "btn-primary",
                                            children: "Practice Again"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1197,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push("/"),
                                            className: "btn-secondary",
                                            children: "Go Home"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1189,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                            lineNumber: 1156,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 1155,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-xs text-text-muted pt-4 border-t border-white/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10",
                                            children: "Space/Enter"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1",
                                            children: "Next word"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1216,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10",
                                            children: "Backspace"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1",
                                            children: "Delete character"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1222,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10",
                                            children: "Escape"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1225,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1",
                                            children: "Pause/Resume"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10",
                                            children: "F2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1",
                                            children: "Repeat word"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1234,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1230,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                            lineNumber: 1211,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 1210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/stage/[stageId]/page.tsx",
                lineNumber: 950,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/stage/[stageId]/page.tsx",
        lineNumber: 941,
        columnNumber: 5
    }, this);
}
_s(StagePage, "KvhcvFE7c/ljEFXxMsmYUtHS/SM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAudioEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudio"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useKeystrokeLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeystrokeLogger"]
    ];
});
_c = StagePage;
var _c;
__turbopack_context__.k.register(_c, "StagePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1208ib9._.js.map