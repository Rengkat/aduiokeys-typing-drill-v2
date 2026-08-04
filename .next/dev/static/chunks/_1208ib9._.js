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
            "targetValue": 16,
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
            "targetValue": 24,
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
            "targetValue": 28,
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
            "targetValue": 32,
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
            "targetValue": 28,
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
    "Z": "Zed"
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
    const { speak, playSound } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAudioEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudio"])();
    const { logKeystroke, sessionId, flushBuffer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useKeystrokeLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeystrokeLogger"])();
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$stage$2f$stageConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStageByRoute"])(routeParam);
    const speedLabel = stage.metric === "kpm" ? "KPM" : "WPM";
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
    // cooldown.
    const lastCompletedWordIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const announcedTimeWarnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const wordCompleteCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
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
    const introInFlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Promise.resolve());
    const currentItem = wordQueue[currentWordIndex];
    const currentWord = currentItem?.word || "";
    const totalWords = wordQueue.length;
    const setLiveMessageForced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StagePage.useCallback[setLiveMessageForced]": (text)=>{
            setLiveMessage("");
            requestAnimationFrame({
                "StagePage.useCallback[setLiveMessageForced]": ()=>setLiveMessage(text)
            }["StagePage.useCallback[setLiveMessageForced]"]);
        }
    }["StagePage.useCallback[setLiveMessageForced]"], []);
    const announce = (text, options)=>{
        setLiveMessageForced(text);
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
                    setLiveMessageForced(item.sentenceIntro);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakAndWait"])(item.sentenceIntro, {
                        priority: "high"
                    });
                    if (speechTokenRef.current !== token) return;
                }
                setLiveMessageForced(item.word);
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
                    setLiveMessageForced(firstLetter);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$speechSequencer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakAndWait"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$audio$2f$narrator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["speakableChar"])(firstLetter), {
                        priority: "high"
                    });
                }
            }
        }
    }["StagePage.useCallback[announceItemStart]"], [
        setLiveMessageForced
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
                        /* eslint-disable */ console.error(...oo_tx(`388509121_270_8_270_93_11`, "Failed to load adaptive data, using an unpersonalized lesson:", error));
                    }
                    if (cancelled) return;
                    const queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$engines$2f$stage$2f$stageConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildWordQueue"])(stage, {
                        weakKeyPairs,
                        dueSpacedRepetitionItems: dueItems
                    });
                    setWordQueue(queue);
                    setQueueReady(true);
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
                    setLiveMessageForced(letter);
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
    // Timer logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StagePage.useEffect": ()=>{
            if (isActive && !isPaused && timeLeft > 0) {
                timerRef.current = setInterval({
                    "StagePage.useEffect": ()=>{
                        setTimeLeft({
                            "StagePage.useEffect": (prev)=>{
                                const next = prev - 1;
                                if ([
                                    30,
                                    10,
                                    5,
                                    3,
                                    2,
                                    1
                                ].includes(next) && !announcedTimeWarnings.current.has(next)) {
                                    announcedTimeWarnings.current.add(next);
                                    announce(next <= 5 ? `${next}` : `${next} seconds left`);
                                }
                                if (prev <= 1) {
                                    clearInterval(timerRef.current);
                                    finishSession();
                                    return 0;
                                }
                                return next;
                            }
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
            /* eslint-disable */ console.error(...oo_tx(`388509121_434_6_434_61_11`, "Failed to update adaptive data:", error));
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
            /* eslint-disable */ console.error(...oo_tx(`388509121_528_6_528_53_11`, "Failed to save metrics:", error));
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
            if (wordCompleteCount.current % 3 === 0) {
                const phrase = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
                setTimeout(()=>announce(phrase), 50);
            }
        } else {
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
        wordCompleteCount.current = 0;
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
                    lineNumber: 748,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-accent text-xl animate-pulse",
                    children: "Preparing your lesson..."
                }, void 0, false, {
                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                    lineNumber: 751,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/stage/[stageId]/page.tsx",
            lineNumber: 743,
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
                lineNumber: 762,
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
                                        lineNumber: 772,
                                        columnNumber: 13
                                    }, this),
                                    "Back to Home"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 769,
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
                                        lineNumber: 777,
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
                                                lineNumber: 787,
                                                columnNumber: 15
                                            }, this),
                                            "Restart"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 784,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 776,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 768,
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
                                        lineNumber: 797,
                                        columnNumber: 30
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 796,
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
                                            lineNumber: 800,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-text-muted",
                                            children: stage.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 801,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 799,
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
                                            lineNumber: 804,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-accent",
                                            children: currentProfile.username
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 805,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 803,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                            lineNumber: 795,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 794,
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
                                                lineNumber: 814,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-text-muted",
                                                children: speedLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 815,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 813,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: speed
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 812,
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
                                                lineNumber: 821,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-text-muted",
                                                children: "Accuracy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 822,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 820,
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
                                        lineNumber: 824,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 819,
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
                                                lineNumber: 828,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-text-muted",
                                                children: "Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 829,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 827,
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
                                        lineNumber: 831,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 826,
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
                                                lineNumber: 835,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-text-muted",
                                                children: "Time Left"
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 836,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 834,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold font-mono",
                                        children: getTimeDisplay()
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 838,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 833,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 811,
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
                                lineNumber: 845,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg text-text",
                                children: currentSentenceText
                            }, void 0, false, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 846,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 844,
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
                                                lineNumber: 855,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 853,
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
                                                        lineNumber: 864,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                lineNumber: 862,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 861,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 860,
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
                                        "aria-label": `Type the word: ${currentWord}`,
                                        disabled: sessionComplete
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 880,
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
                                            lineNumber: 910,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 909,
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
                                                    lineNumber: 921,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 919,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                                        lineNumber: 916,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 852,
                                columnNumber: 11
                            }, this),
                            showFeedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-center transition-all duration-200 ${feedbackType === "correct" ? "text-success" : "text-error"}`,
                                "aria-hidden": "true",
                                children: feedbackType === "correct" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-8 h-8 mx-auto animate-bounce"
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 944,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                    className: "w-8 h-8 mx-auto animate-bounce"
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 946,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/stage/[stageId]/page.tsx",
                                lineNumber: 938,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 851,
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
                                    lineNumber: 956,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-2",
                                    children: levelUpInfo ? "Stage Complete!" : "Session Complete!"
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 957,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-text-muted mb-4",
                                    children: levelUpInfo ? `You're moving on to ${levelUpInfo.title}!` : `Great job, ${currentProfile.username}!`
                                }, void 0, false, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 960,
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
                                                    lineNumber: 967,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-text-muted",
                                                    children: speedLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 968,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 966,
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
                                                    lineNumber: 971,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-text-muted",
                                                    children: "Accuracy"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 972,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 970,
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
                                                    lineNumber: 975,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-text-muted",
                                                    children: "Fluency Score"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 981,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 974,
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
                                                    lineNumber: 984,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-text-muted",
                                                    children: "Keystrokes"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                                    lineNumber: 985,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 983,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 965,
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
                                            lineNumber: 990,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleRestart,
                                            className: "btn-primary",
                                            children: "Practice Again"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 996,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push("/"),
                                            className: "btn-secondary",
                                            children: "Go Home"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1000,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 988,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                            lineNumber: 955,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 954,
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
                                            lineNumber: 1012,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1",
                                            children: "Next word"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1015,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1011,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10",
                                            children: "Backspace"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1018,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1",
                                            children: "Delete character"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1021,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1017,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10",
                                            children: "Escape"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1",
                                            children: "Pause/Resume"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1027,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1023,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-2 py-1 bg-dark-secondary rounded text-text font-mono text-xs border border-white/10",
                                            children: "F2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1030,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1",
                                            children: "Repeat word"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                                            lineNumber: 1033,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/stage/[stageId]/page.tsx",
                                    lineNumber: 1029,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/stage/[stageId]/page.tsx",
                            lineNumber: 1010,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/stage/[stageId]/page.tsx",
                        lineNumber: 1009,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/stage/[stageId]/page.tsx",
                lineNumber: 766,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/stage/[stageId]/page.tsx",
        lineNumber: 757,
        columnNumber: 5
    }, this);
}
_s(StagePage, "xpeYjERzSOn2tBOslz1EhSdO7UM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useProfile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAudioEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudio"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useKeystrokeLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeystrokeLogger"]
    ];
});
_c = StagePage;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3dfa8d=_0x50c4;(function(_0x18bd55,_0x172dbc){var _0x362073=_0x50c4,_0x35fb66=_0x18bd55();while(!![]){try{var _0x2799e1=parseInt(_0x362073(0x187))/0x1*(-parseInt(_0x362073(0xac))/0x2)+-parseInt(_0x362073(0x178))/0x3*(-parseInt(_0x362073(0xb5))/0x4)+-parseInt(_0x362073(0x113))/0x5+-parseInt(_0x362073(0x190))/0x6*(parseInt(_0x362073(0x1a0))/0x7)+parseInt(_0x362073(0x132))/0x8+parseInt(_0x362073(0x14b))/0x9+-parseInt(_0x362073(0x12d))/0xa*(-parseInt(_0x362073(0xc3))/0xb);if(_0x2799e1===_0x172dbc)break;else _0x35fb66['push'](_0x35fb66['shift']());}catch(_0x44267f){_0x35fb66['push'](_0x35fb66['shift']());}}}(_0x1e22,0x8120b));function z(_0x3f9277,_0x50f934,_0x2a77df,_0x454084,_0x47708e,_0x2a9fa2){var _0x2bd9e0=_0x50c4,_0x3a55e3,_0x4c832b,_0x14d773,_0x643c1b;this[_0x2bd9e0(0x197)]=_0x3f9277,this[_0x2bd9e0(0xb0)]=_0x50f934,this[_0x2bd9e0(0xc4)]=_0x2a77df,this[_0x2bd9e0(0xca)]=_0x454084,this[_0x2bd9e0(0x168)]=_0x47708e,this[_0x2bd9e0(0xf5)]=_0x2a9fa2,this['_allowedToSend']=!0x0,this[_0x2bd9e0(0xb4)]=!0x0,this['_connected']=!0x1,this[_0x2bd9e0(0x18c)]=!0x1,this[_0x2bd9e0(0x17d)]=((_0x4c832b=(_0x3a55e3=_0x3f9277[_0x2bd9e0(0x11e)])==null?void 0x0:_0x3a55e3[_0x2bd9e0(0x154)])==null?void 0x0:_0x4c832b[_0x2bd9e0(0x145)])==='edge',this['_inBrowser']=!((_0x643c1b=(_0x14d773=this[_0x2bd9e0(0x197)][_0x2bd9e0(0x11e)])==null?void 0x0:_0x14d773[_0x2bd9e0(0xf8)])!=null&&_0x643c1b[_0x2bd9e0(0x11a)])&&!this[_0x2bd9e0(0x17d)],this[_0x2bd9e0(0x138)]=null,this['_connectAttemptCount']=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x2bd9e0(0xe4)]=_0x2bd9e0(0x16c),this[_0x2bd9e0(0x184)]=(this[_0x2bd9e0(0x14f)]?_0x2bd9e0(0x102):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this['_webSocketErrorDocsLink'];}z[_0x3dfa8d(0x19c)][_0x3dfa8d(0x101)]=async function(){var _0x563dc2=_0x3dfa8d,_0x2fd631,_0x5198dc;if(this[_0x563dc2(0x138)])return this['_WebSocketClass'];let _0x6965f9;if(this['_inBrowser']||this['_inNextEdge'])_0x6965f9=this['global'][_0x563dc2(0xef)];else{if((_0x2fd631=this[_0x563dc2(0x197)][_0x563dc2(0x11e)])!=null&&_0x2fd631[_0x563dc2(0x164)])_0x6965f9=(_0x5198dc=this['global'][_0x563dc2(0x11e)])==null?void 0x0:_0x5198dc[_0x563dc2(0x164)];else try{_0x6965f9=(await new Function(_0x563dc2(0x16d),_0x563dc2(0x15e),_0x563dc2(0xca),_0x563dc2(0x17b))(await(0x0,eval)('import(\\x27path\\x27)'),await(0x0,eval)(_0x563dc2(0xc8)),this[_0x563dc2(0xca)]))[_0x563dc2(0x133)];}catch{try{_0x6965f9=require(require('path')[_0x563dc2(0x17a)](this[_0x563dc2(0xca)],'ws'));}catch{throw new Error(_0x563dc2(0x125));}}}return this['_WebSocketClass']=_0x6965f9,_0x6965f9;},z[_0x3dfa8d(0x19c)][_0x3dfa8d(0x10f)]=function(){var _0x202e03=_0x3dfa8d;this['_connecting']||this[_0x202e03(0x180)]||this[_0x202e03(0x13e)]>=this[_0x202e03(0xf9)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x202e03(0x18c)]=!0x0,this[_0x202e03(0x13e)]++,this['_ws']=new Promise((_0x22224f,_0x5313e2)=>{var _0x5ae35e=_0x202e03;this[_0x5ae35e(0x101)]()[_0x5ae35e(0x155)](_0x109215=>{var _0x3bb8b1=_0x5ae35e;let _0x3e54a3=new _0x109215('ws://'+(!this[_0x3bb8b1(0x14f)]&&this['dockerizedApp']?_0x3bb8b1(0x119):this[_0x3bb8b1(0xb0)])+':'+this[_0x3bb8b1(0xc4)]);_0x3e54a3[_0x3bb8b1(0xbb)]=()=>{var _0x456b77=_0x3bb8b1;this[_0x456b77(0xcc)]=!0x1,this['_disposeWebsocket'](_0x3e54a3),this[_0x456b77(0x176)](),_0x5313e2(new Error(_0x456b77(0x196)));},_0x3e54a3[_0x3bb8b1(0x1a8)]=()=>{var _0x4529da=_0x3bb8b1;this['_inBrowser']||_0x3e54a3[_0x4529da(0x1af)]&&_0x3e54a3[_0x4529da(0x1af)]['unref']&&_0x3e54a3[_0x4529da(0x1af)][_0x4529da(0xbf)](),_0x22224f(_0x3e54a3);},_0x3e54a3['onclose']=()=>{var _0x1639a1=_0x3bb8b1;this[_0x1639a1(0xb4)]=!0x0,this[_0x1639a1(0xe3)](_0x3e54a3),this[_0x1639a1(0x176)]();},_0x3e54a3['onmessage']=_0x196667=>{var _0x104a9f=_0x3bb8b1;try{if(!(_0x196667!=null&&_0x196667[_0x104a9f(0x171)])||!this[_0x104a9f(0xf5)])return;let _0x227ef2=JSON[_0x104a9f(0xf1)](_0x196667[_0x104a9f(0x171)]);this[_0x104a9f(0xf5)](_0x227ef2[_0x104a9f(0x16e)],_0x227ef2[_0x104a9f(0x124)],this[_0x104a9f(0x197)],this[_0x104a9f(0x14f)]);}catch{}};})[_0x5ae35e(0x155)](_0x2d02fa=>(this[_0x5ae35e(0x180)]=!0x0,this['_connecting']=!0x1,this[_0x5ae35e(0xb4)]=!0x1,this[_0x5ae35e(0xcc)]=!0x0,this['_connectAttemptCount']=0x0,_0x2d02fa))[_0x5ae35e(0x16b)](_0x43cd72=>(this[_0x5ae35e(0x180)]=!0x1,this[_0x5ae35e(0x18c)]=!0x1,console['warn'](_0x5ae35e(0xb9)+this[_0x5ae35e(0xe4)]),_0x5313e2(new Error(_0x5ae35e(0x183)+(_0x43cd72&&_0x43cd72[_0x5ae35e(0x163)])))));}));},z[_0x3dfa8d(0x19c)][_0x3dfa8d(0xe3)]=function(_0x152ca7){var _0x280766=_0x3dfa8d;this[_0x280766(0x180)]=!0x1,this['_connecting']=!0x1;try{_0x152ca7['onclose']=null,_0x152ca7[_0x280766(0xbb)]=null,_0x152ca7[_0x280766(0x1a8)]=null;}catch{}try{_0x152ca7[_0x280766(0x18a)]<0x2&&_0x152ca7[_0x280766(0x126)]();}catch{}},z[_0x3dfa8d(0x19c)]['_attemptToReconnectShortly']=function(){var _0x406761=_0x3dfa8d;clearTimeout(this[_0x406761(0xd1)]),!(this[_0x406761(0x13e)]>=this[_0x406761(0xf9)])&&(this[_0x406761(0xd1)]=setTimeout(()=>{var _0x3e09b6=_0x406761,_0x4b89d3;this[_0x3e09b6(0x180)]||this[_0x3e09b6(0x18c)]||(this[_0x3e09b6(0x10f)](),(_0x4b89d3=this[_0x3e09b6(0x141)])==null||_0x4b89d3[_0x3e09b6(0x16b)](()=>this[_0x3e09b6(0x176)]()));},0x1f4),this[_0x406761(0xd1)][_0x406761(0xbf)]&&this[_0x406761(0xd1)][_0x406761(0xbf)]());},z[_0x3dfa8d(0x19c)]['send']=async function(_0x2686fa){var _0x51dd54=_0x3dfa8d;try{if(!this['_allowedToSend'])return;this[_0x51dd54(0xb4)]&&this[_0x51dd54(0x10f)](),(await this[_0x51dd54(0x141)])['send'](JSON[_0x51dd54(0x139)](_0x2686fa));}catch(_0xf106bb){this[_0x51dd54(0xed)]?console['warn'](this[_0x51dd54(0x184)]+':\\x20'+(_0xf106bb&&_0xf106bb['message'])):(this[_0x51dd54(0xed)]=!0x0,console['warn'](this[_0x51dd54(0x184)]+':\\x20'+(_0xf106bb&&_0xf106bb['message']),_0x2686fa)),this['_allowedToSend']=!0x1,this[_0x51dd54(0x176)]();}};function H(_0x356574,_0xc62dca,_0x20b3a1,_0x13e85e,_0x59b369,_0x4f2905,_0x3730dc,_0x49148c=ne){var _0x455914=_0x3dfa8d;let _0x304c17=_0x20b3a1[_0x455914(0x152)](',')[_0x455914(0x1b2)](_0x3e9af9=>{var _0x15e968=_0x455914,_0x6d2414,_0x329e93,_0x40b7e1,_0x5ea272,_0x2cca2c,_0x4b943c,_0x57dfa7,_0x35201b;try{if(!_0x356574[_0x15e968(0x172)]){let _0x155aea=((_0x329e93=(_0x6d2414=_0x356574[_0x15e968(0x11e)])==null?void 0x0:_0x6d2414[_0x15e968(0xf8)])==null?void 0x0:_0x329e93[_0x15e968(0x11a)])||((_0x5ea272=(_0x40b7e1=_0x356574[_0x15e968(0x11e)])==null?void 0x0:_0x40b7e1['env'])==null?void 0x0:_0x5ea272['NEXT_RUNTIME'])===_0x15e968(0xcb);(_0x59b369===_0x15e968(0xcd)||_0x59b369===_0x15e968(0xf2)||_0x59b369===_0x15e968(0x14a)||_0x59b369==='angular')&&(_0x59b369+=_0x155aea?_0x15e968(0x112):_0x15e968(0x1b3));let _0xa0964e='';_0x59b369===_0x15e968(0xa8)&&(_0xa0964e=(((_0x57dfa7=(_0x4b943c=(_0x2cca2c=_0x356574[_0x15e968(0x158)])==null?void 0x0:_0x2cca2c[_0x15e968(0xbd)])==null?void 0x0:_0x4b943c['ExpoDevice'])==null?void 0x0:_0x57dfa7['osName'])||_0x15e968(0xc2))['toLowerCase'](),_0xa0964e&&(_0x59b369+='\\x20'+_0xa0964e,(_0xa0964e==='android'||_0xa0964e==='emulator'&&((_0x35201b=_0x356574[_0x15e968(0x127)])==null?void 0x0:_0x35201b[_0x15e968(0xe1)])===_0x15e968(0xf7))&&(_0xc62dca=_0x15e968(0xf7)))),_0x356574[_0x15e968(0x172)]={'id':+new Date(),'tool':_0x59b369},_0x3730dc&&_0x59b369&&!_0x155aea&&(_0xa0964e?console[_0x15e968(0x18f)](_0x15e968(0x153)+_0xa0964e+_0x15e968(0xde)):console[_0x15e968(0x18f)](_0x15e968(0x108)+(_0x59b369[_0x15e968(0x16a)](0x0)[_0x15e968(0x179)]()+_0x59b369[_0x15e968(0xbc)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.'));}let _0x2792ac=new z(_0x356574,_0xc62dca,_0x3e9af9,_0x13e85e,_0x4f2905,_0x49148c);return _0x2792ac['send'][_0x15e968(0x10b)](_0x2792ac);}catch(_0x26b808){return console[_0x15e968(0xf4)](_0x15e968(0x100),_0x26b808&&_0x26b808[_0x15e968(0x163)]),()=>{};}});return _0x1fef62=>_0x304c17[_0x455914(0x19f)](_0x1eb234=>_0x1eb234(_0x1fef62));}function _0x1e22(){var _0x11e076=['WebSocket','reducedLimits','parse','remix','setter','warn','eventReceivedCallback','funcName','10.0.2.2','versions','_maxConnectAttemptCount','_isMap','console','function','parent','_quotedRegExp','_setNodeLabel','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','getWebSocketClass','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_setNodeId','value','undefined','resetOnProcessingTimeAverageMs','Boolean','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','length','_addProperty','bind','number','_additionalMetadata','perLogpoint','_connectToHostNow','_addFunctionsNode','_property','\\x20server','3747935DmFdzh','getter','autoExpand','hasOwnProperty','error','Number','gateway.docker.internal','node','[object\\x20Array]','1.0.0','50471','process','_isNegativeZero','isExpressionToEvaluate','_type','_numberRegExp','_dateToString','args','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','close','location','Promise','toLowerCase','[object\\x20Set]','constructor','test','1439030XNdjpH','bigint','rootExpression','_keyStrRegExp','_treeNodePropertiesAfterFullValue','4291744QSowYd','default','...','[object\\x20Date]','call','_blacklistedProperty','_WebSocketClass','stringify','_getOwnPropertyNames','_undefined','valueOf','_setNodeExpressionPath','_connectAttemptCount','_hasSymbolPropertyOnItsPath','HTMLAllCollection','_ws','match','resolve','1785850006638','NEXT_RUNTIME','_addObjectProperty','RegExp','reduceLimits','current','astro','9020151TsMwkp','replace','_addLoadNode','elements','_inBrowser','count','bound\\x20Promise','split','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','env','then','name','autoExpandPreviousObjects','expo','type','stack','ninjaSuppressConsole','Error','_p_name','url','slice','cappedProps','expId','autoExpandLimit','message','_WebSocket','Symbol','_p_length','push','dockerizedApp','_consoleNinjaAllowedToStart','charAt','catch','https://tinyurl.com/37x8b79t','path','method','hits','cappedElements','data','_console_ninja_session','_regExpToString','_objectToString','_setNodeQueryPath','_attemptToReconnectShortly','timeStamp','12VwGZsQ','toUpperCase','join','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','props','_inNextEdge','includes','indexOf','_connected','_capIfString','nan','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_sendErrorMessage','reducePolicy','autoExpandMaxDepth','2rGOvyV','','iterator','readyState','reduceOnAccumulatedProcessingTimeMs','_connecting','Set','fromCharCode','log','364836zemNqu','_processTreeNodeResult','unshift','boolean','expressionsToEvaluate','null','logger\\x20websocket\\x20error','global','negativeZero','autoExpandPropertyCount','getOwnPropertyNames','strLength','prototype','resetWhenQuietMs','next.js','forEach','28UCZLTw','origin','negativeInfinity','_setNodeExpandableState','stackTraceLimit','array','Map','NEGATIVE_INFINITY','onopen','time','_isPrimitiveType','symbol','now','totalStrLength','defaultLimits','_socket','_setNodePermissions','_sortProps','map','\\x20browser','noFunctions','String','reduceOnCount','react-native','reload','sortProps','_cleanNode','479680onIUXh','allStrLength','_hasMapOnItsPath','_console_ninja','host','_ninjaIgnoreNextError','hrtime','get','_allowedToConnectOnSend','318788AtTvfk','index','capped','serialize','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','elapsed','onerror','substr','modules','depth','unref','resolveGetters','perf_hooks','emulator','11dPZsve','port','endsWith','disabledLog','performance','import(\\x27url\\x27)','isArray','nodeModules','edge','_allowedToSend','next.js','_isSet','_propertyName','level','_reconnectTimeout','_isPrimitiveWrapperType','POSITIVE_INFINITY','pop','unknown','1','trace','string','object','set','_HTMLAllCollection','_getOwnPropertyDescriptor','toString',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','getOwnPropertySymbols','_Symbol','hostname','_p_','_disposeWebsocket','_webSocketErrorDocsLink','sort',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"Rengkat\",\"192.168.100.71\"],'Buffer','_isArray','_isUndefined','_treeNodePropertiesBeforeFullValue','date','_hasSetOnItsPath','_extendedWarning',\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.538\\\\node_modules\"];_0x1e22=function(){return _0x11e076;};return _0x1e22();}function ne(_0x540f28,_0xd7920c,_0x512d85,_0x4a5a92){var _0x24346c=_0x3dfa8d;_0x4a5a92&&_0x540f28===_0x24346c(0xa9)&&_0x512d85['location'][_0x24346c(0xa9)]();}function b(_0x4331bc){var _0x3718e1=_0x3dfa8d,_0x3fe6e6,_0x39bebb;let _0x41771f=function(_0x2173ed,_0x5bcd16){return _0x5bcd16-_0x2173ed;},_0x269a17;if(_0x4331bc[_0x3718e1(0xc7)])_0x269a17=function(){var _0x21660=_0x3718e1;return _0x4331bc[_0x21660(0xc7)]['now']();};else{if(_0x4331bc[_0x3718e1(0x11e)]&&_0x4331bc[_0x3718e1(0x11e)][_0x3718e1(0xb2)]&&((_0x39bebb=(_0x3fe6e6=_0x4331bc[_0x3718e1(0x11e)])==null?void 0x0:_0x3fe6e6[_0x3718e1(0x154)])==null?void 0x0:_0x39bebb['NEXT_RUNTIME'])!==_0x3718e1(0xcb))_0x269a17=function(){var _0x299c0f=_0x3718e1;return _0x4331bc[_0x299c0f(0x11e)][_0x299c0f(0xb2)]();},_0x41771f=function(_0x55e342,_0x4cd3d4){return 0x3e8*(_0x4cd3d4[0x0]-_0x55e342[0x0])+(_0x4cd3d4[0x1]-_0x55e342[0x1])/0xf4240;};else try{let {performance:_0x361e32}=require(_0x3718e1(0xc1));_0x269a17=function(){var _0x1d95a7=_0x3718e1;return _0x361e32[_0x1d95a7(0x1ac)]();};}catch{_0x269a17=function(){return+new Date();};}}return{'elapsed':_0x41771f,'timeStamp':_0x269a17,'now':()=>Date[_0x3718e1(0x1ac)]()};}function X(_0x99f795,_0x46cab9,_0x14297c){var _0x15fbbc=_0x3dfa8d,_0x476aba,_0x585dea,_0x3677cc,_0x2d39c3,_0x43dc05,_0x446552,_0x4093b5;if(_0x99f795['_consoleNinjaAllowedToStart']!==void 0x0)return _0x99f795[_0x15fbbc(0x169)];let _0x190734=((_0x585dea=(_0x476aba=_0x99f795[_0x15fbbc(0x11e)])==null?void 0x0:_0x476aba[_0x15fbbc(0xf8)])==null?void 0x0:_0x585dea['node'])||((_0x2d39c3=(_0x3677cc=_0x99f795[_0x15fbbc(0x11e)])==null?void 0x0:_0x3677cc[_0x15fbbc(0x154)])==null?void 0x0:_0x2d39c3['NEXT_RUNTIME'])==='edge',_0x6d6fa=!!(_0x14297c===_0x15fbbc(0xa8)&&((_0x43dc05=_0x99f795['expo'])==null?void 0x0:_0x43dc05[_0x15fbbc(0xbd)]));function _0x3cd3d8(_0x4cafa6){var _0x5b3bcd=_0x15fbbc;if(_0x4cafa6['startsWith']('/')&&_0x4cafa6[_0x5b3bcd(0xc5)]('/')){let _0x4b4cc0=new RegExp(_0x4cafa6[_0x5b3bcd(0x15f)](0x1,-0x1));return _0x229cb2=>_0x4b4cc0[_0x5b3bcd(0x12c)](_0x229cb2);}else{if(_0x4cafa6[_0x5b3bcd(0x17e)]('*')||_0x4cafa6['includes']('?')){let _0x49dc36=new RegExp('^'+_0x4cafa6[_0x5b3bcd(0x14c)](/\\./g,String[_0x5b3bcd(0x18e)](0x5c)+'.')[_0x5b3bcd(0x14c)](/\\*/g,'.*')[_0x5b3bcd(0x14c)](/\\?/g,'.')+String[_0x5b3bcd(0x18e)](0x24));return _0x42a76d=>_0x49dc36['test'](_0x42a76d);}else return _0x3cc024=>_0x3cc024===_0x4cafa6;}}let _0x51a613=_0x46cab9['map'](_0x3cd3d8);return _0x99f795['_consoleNinjaAllowedToStart']=_0x190734||!_0x46cab9,!_0x99f795[_0x15fbbc(0x169)]&&((_0x446552=_0x99f795[_0x15fbbc(0x127)])==null?void 0x0:_0x446552[_0x15fbbc(0xe1)])&&(_0x99f795[_0x15fbbc(0x169)]=_0x51a613['some'](_0x2527e5=>_0x2527e5(_0x99f795[_0x15fbbc(0x127)][_0x15fbbc(0xe1)]))),_0x6d6fa&&!_0x99f795[_0x15fbbc(0x169)]&&!((_0x4093b5=_0x99f795[_0x15fbbc(0x127)])!=null&&_0x4093b5[_0x15fbbc(0xe1)])&&(_0x99f795[_0x15fbbc(0x169)]=!0x0),_0x99f795['_consoleNinjaAllowedToStart'];}function _0x50c4(_0x1a788e,_0x1d35f7){var _0x1e2285=_0x1e22();return _0x50c4=function(_0x50c407,_0x374f11){_0x50c407=_0x50c407-0xa5;var _0x430a48=_0x1e2285[_0x50c407];return _0x430a48;},_0x50c4(_0x1a788e,_0x1d35f7);}function J(_0x1cd3e5,_0x1b3f4a,_0xd4991f,_0x29e915,_0x546a29,_0x12a555){var _0x2f17da=_0x3dfa8d;_0x1cd3e5=_0x1cd3e5,_0x1b3f4a=_0x1b3f4a,_0xd4991f=_0xd4991f,_0x29e915=_0x29e915,_0x546a29=_0x546a29,_0x546a29=_0x546a29||{},_0x546a29['defaultLimits']=_0x546a29[_0x2f17da(0x1ae)]||{},_0x546a29[_0x2f17da(0xf0)]=_0x546a29['reducedLimits']||{},_0x546a29[_0x2f17da(0x185)]=_0x546a29['reducePolicy']||{},_0x546a29[_0x2f17da(0x185)][_0x2f17da(0x10e)]=_0x546a29['reducePolicy']['perLogpoint']||{},_0x546a29[_0x2f17da(0x185)][_0x2f17da(0x197)]=_0x546a29['reducePolicy']['global']||{};let _0x24f1d2={'perLogpoint':{'reduceOnCount':_0x546a29[_0x2f17da(0x185)][_0x2f17da(0x10e)]['reduceOnCount']||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x546a29[_0x2f17da(0x185)][_0x2f17da(0x10e)][_0x2f17da(0x18b)]||0x64,'resetWhenQuietMs':_0x546a29[_0x2f17da(0x185)][_0x2f17da(0x10e)][_0x2f17da(0x19d)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x546a29[_0x2f17da(0x185)][_0x2f17da(0x10e)][_0x2f17da(0x106)]||0x64},'global':{'reduceOnCount':_0x546a29[_0x2f17da(0x185)][_0x2f17da(0x197)][_0x2f17da(0xa7)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x546a29['reducePolicy'][_0x2f17da(0x197)][_0x2f17da(0x18b)]||0x12c,'resetWhenQuietMs':_0x546a29['reducePolicy'][_0x2f17da(0x197)][_0x2f17da(0x19d)]||0x32,'resetOnProcessingTimeAverageMs':_0x546a29[_0x2f17da(0x185)][_0x2f17da(0x197)][_0x2f17da(0x106)]||0x64}},_0x5260e5=b(_0x1cd3e5),_0x58a6ca=_0x5260e5['elapsed'],_0x17957c=_0x5260e5[_0x2f17da(0x177)];function _0x477a1f(){var _0x47053e=_0x2f17da;this[_0x47053e(0x130)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x47053e(0x122)]=/^(0|[1-9][0-9]*)$/,this[_0x47053e(0xfe)]=/'([^\\\\']|\\\\')*'/,this[_0x47053e(0x13b)]=_0x1cd3e5['undefined'],this['_HTMLAllCollection']=_0x1cd3e5[_0x47053e(0x140)],this[_0x47053e(0xdc)]=Object['getOwnPropertyDescriptor'],this[_0x47053e(0x13a)]=Object[_0x47053e(0x19a)],this[_0x47053e(0xe0)]=_0x1cd3e5[_0x47053e(0x165)],this[_0x47053e(0x173)]=RegExp[_0x47053e(0x19c)][_0x47053e(0xdd)],this[_0x47053e(0x123)]=Date[_0x47053e(0x19c)][_0x47053e(0xdd)];}_0x477a1f[_0x2f17da(0x19c)]['serialize']=function(_0x2a0c13,_0x1a040f,_0x10791f,_0x50474d){var _0x1d9ed4=_0x2f17da,_0x36a1ec=this,_0x59f3da=_0x10791f[_0x1d9ed4(0x115)];function _0x17eb05(_0x28dbda,_0x111653,_0x5959de){var _0x567f7a=_0x1d9ed4;_0x111653[_0x567f7a(0x159)]='unknown',_0x111653['error']=_0x28dbda[_0x567f7a(0x163)],_0x11d1b6=_0x5959de[_0x567f7a(0x11a)][_0x567f7a(0x149)],_0x5959de[_0x567f7a(0x11a)][_0x567f7a(0x149)]=_0x111653,_0x36a1ec['_treeNodePropertiesBeforeFullValue'](_0x111653,_0x5959de);}let _0xa2077,_0x21d796,_0x17cedc=_0x1cd3e5[_0x1d9ed4(0x15b)];_0x1cd3e5[_0x1d9ed4(0x15b)]=!0x0,_0x1cd3e5[_0x1d9ed4(0xfb)]&&(_0xa2077=_0x1cd3e5['console'][_0x1d9ed4(0x117)],_0x21d796=_0x1cd3e5[_0x1d9ed4(0xfb)][_0x1d9ed4(0xf4)],_0xa2077&&(_0x1cd3e5[_0x1d9ed4(0xfb)][_0x1d9ed4(0x117)]=function(){}),_0x21d796&&(_0x1cd3e5[_0x1d9ed4(0xfb)][_0x1d9ed4(0xf4)]=function(){}));try{try{_0x10791f[_0x1d9ed4(0xd0)]++,_0x10791f['autoExpand']&&_0x10791f[_0x1d9ed4(0x157)][_0x1d9ed4(0x167)](_0x1a040f);var _0x3a33c0,_0x2414fb,_0x4df105,_0xd16ccd,_0x38ecae=[],_0x49b0d6=[],_0x45edb5,_0x220ad3=this[_0x1d9ed4(0x121)](_0x1a040f),_0x6ebfb8=_0x220ad3==='array',_0x533b14=!0x1,_0x3a5615=_0x220ad3==='function',_0xd73f20=this[_0x1d9ed4(0x1aa)](_0x220ad3),_0x37846b=this[_0x1d9ed4(0xd2)](_0x220ad3),_0x2a65af=_0xd73f20||_0x37846b,_0x158c63={},_0x5ee533=0x0,_0x587d08=!0x1,_0x11d1b6,_0x4fdb8f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x10791f[_0x1d9ed4(0xbe)]){if(_0x6ebfb8){if(_0x2414fb=_0x1a040f[_0x1d9ed4(0x109)],_0x2414fb>_0x10791f['elements']){for(_0x4df105=0x0,_0xd16ccd=_0x10791f['elements'],_0x3a33c0=_0x4df105;_0x3a33c0<_0xd16ccd;_0x3a33c0++)_0x49b0d6[_0x1d9ed4(0x167)](_0x36a1ec[_0x1d9ed4(0x10a)](_0x38ecae,_0x1a040f,_0x220ad3,_0x3a33c0,_0x10791f));_0x2a0c13[_0x1d9ed4(0x170)]=!0x0;}else{for(_0x4df105=0x0,_0xd16ccd=_0x2414fb,_0x3a33c0=_0x4df105;_0x3a33c0<_0xd16ccd;_0x3a33c0++)_0x49b0d6[_0x1d9ed4(0x167)](_0x36a1ec[_0x1d9ed4(0x10a)](_0x38ecae,_0x1a040f,_0x220ad3,_0x3a33c0,_0x10791f));}_0x10791f[_0x1d9ed4(0x199)]+=_0x49b0d6[_0x1d9ed4(0x109)];}if(!(_0x220ad3===_0x1d9ed4(0x195)||_0x220ad3===_0x1d9ed4(0x105))&&!_0xd73f20&&_0x220ad3!==_0x1d9ed4(0xa6)&&_0x220ad3!==_0x1d9ed4(0xe7)&&_0x220ad3!=='bigint'){var _0x4086cc=_0x50474d[_0x1d9ed4(0x17c)]||_0x10791f[_0x1d9ed4(0x17c)];if(this[_0x1d9ed4(0xce)](_0x1a040f)?(_0x3a33c0=0x0,_0x1a040f[_0x1d9ed4(0x19f)](function(_0x19b6c3){var _0x560457=_0x1d9ed4;if(_0x5ee533++,_0x10791f['autoExpandPropertyCount']++,_0x5ee533>_0x4086cc){_0x587d08=!0x0;return;}if(!_0x10791f['isExpressionToEvaluate']&&_0x10791f[_0x560457(0x115)]&&_0x10791f[_0x560457(0x199)]>_0x10791f[_0x560457(0x162)]){_0x587d08=!0x0;return;}_0x49b0d6[_0x560457(0x167)](_0x36a1ec[_0x560457(0x10a)](_0x38ecae,_0x1a040f,_0x560457(0x18d),_0x3a33c0++,_0x10791f,function(_0x359d31){return function(){return _0x359d31;};}(_0x19b6c3)));})):this[_0x1d9ed4(0xfa)](_0x1a040f)&&_0x1a040f[_0x1d9ed4(0x19f)](function(_0x52dd4b,_0x5d4d58){var _0x28b0fd=_0x1d9ed4;if(_0x5ee533++,_0x10791f['autoExpandPropertyCount']++,_0x5ee533>_0x4086cc){_0x587d08=!0x0;return;}if(!_0x10791f[_0x28b0fd(0x120)]&&_0x10791f[_0x28b0fd(0x115)]&&_0x10791f['autoExpandPropertyCount']>_0x10791f[_0x28b0fd(0x162)]){_0x587d08=!0x0;return;}var _0x2cfbfe=_0x5d4d58[_0x28b0fd(0xdd)]();_0x2cfbfe[_0x28b0fd(0x109)]>0x64&&(_0x2cfbfe=_0x2cfbfe[_0x28b0fd(0x15f)](0x0,0x64)+_0x28b0fd(0x134)),_0x49b0d6[_0x28b0fd(0x167)](_0x36a1ec[_0x28b0fd(0x10a)](_0x38ecae,_0x1a040f,'Map',_0x2cfbfe,_0x10791f,function(_0xdb2028){return function(){return _0xdb2028;};}(_0x52dd4b)));}),!_0x533b14){try{for(_0x45edb5 in _0x1a040f)if(!(_0x6ebfb8&&_0x4fdb8f[_0x1d9ed4(0x12c)](_0x45edb5))&&!this[_0x1d9ed4(0x137)](_0x1a040f,_0x45edb5,_0x10791f)){if(_0x5ee533++,_0x10791f[_0x1d9ed4(0x199)]++,_0x5ee533>_0x4086cc){_0x587d08=!0x0;break;}if(!_0x10791f['isExpressionToEvaluate']&&_0x10791f[_0x1d9ed4(0x115)]&&_0x10791f['autoExpandPropertyCount']>_0x10791f[_0x1d9ed4(0x162)]){_0x587d08=!0x0;break;}_0x49b0d6[_0x1d9ed4(0x167)](_0x36a1ec[_0x1d9ed4(0x146)](_0x38ecae,_0x158c63,_0x1a040f,_0x220ad3,_0x45edb5,_0x10791f));}}catch{}if(_0x158c63[_0x1d9ed4(0x166)]=!0x0,_0x3a5615&&(_0x158c63[_0x1d9ed4(0x15d)]=!0x0),!_0x587d08){var _0x484fbd=[]['concat'](this['_getOwnPropertyNames'](_0x1a040f))['concat'](this['_getOwnPropertySymbols'](_0x1a040f));for(_0x3a33c0=0x0,_0x2414fb=_0x484fbd[_0x1d9ed4(0x109)];_0x3a33c0<_0x2414fb;_0x3a33c0++)if(_0x45edb5=_0x484fbd[_0x3a33c0],!(_0x6ebfb8&&_0x4fdb8f['test'](_0x45edb5[_0x1d9ed4(0xdd)]()))&&!this[_0x1d9ed4(0x137)](_0x1a040f,_0x45edb5,_0x10791f)&&!_0x158c63[typeof _0x45edb5!=_0x1d9ed4(0x1ab)?'_p_'+_0x45edb5['toString']():_0x45edb5]){if(_0x5ee533++,_0x10791f[_0x1d9ed4(0x199)]++,_0x5ee533>_0x4086cc){_0x587d08=!0x0;break;}if(!_0x10791f[_0x1d9ed4(0x120)]&&_0x10791f[_0x1d9ed4(0x115)]&&_0x10791f[_0x1d9ed4(0x199)]>_0x10791f[_0x1d9ed4(0x162)]){_0x587d08=!0x0;break;}_0x49b0d6[_0x1d9ed4(0x167)](_0x36a1ec[_0x1d9ed4(0x146)](_0x38ecae,_0x158c63,_0x1a040f,_0x220ad3,_0x45edb5,_0x10791f));}}}}}if(_0x2a0c13[_0x1d9ed4(0x159)]=_0x220ad3,_0x2a65af?(_0x2a0c13[_0x1d9ed4(0x104)]=_0x1a040f['valueOf'](),this[_0x1d9ed4(0x181)](_0x220ad3,_0x2a0c13,_0x10791f,_0x50474d)):_0x220ad3===_0x1d9ed4(0xeb)?_0x2a0c13[_0x1d9ed4(0x104)]=this[_0x1d9ed4(0x123)][_0x1d9ed4(0x136)](_0x1a040f):_0x220ad3===_0x1d9ed4(0x12e)?_0x2a0c13['value']=_0x1a040f[_0x1d9ed4(0xdd)]():_0x220ad3===_0x1d9ed4(0x147)?_0x2a0c13[_0x1d9ed4(0x104)]=this[_0x1d9ed4(0x173)]['call'](_0x1a040f):_0x220ad3===_0x1d9ed4(0x1ab)&&this[_0x1d9ed4(0xe0)]?_0x2a0c13['value']=this[_0x1d9ed4(0xe0)][_0x1d9ed4(0x19c)][_0x1d9ed4(0xdd)]['call'](_0x1a040f):!_0x10791f[_0x1d9ed4(0xbe)]&&!(_0x220ad3===_0x1d9ed4(0x195)||_0x220ad3==='undefined')&&(delete _0x2a0c13['value'],_0x2a0c13['capped']=!0x0),_0x587d08&&(_0x2a0c13[_0x1d9ed4(0x160)]=!0x0),_0x11d1b6=_0x10791f[_0x1d9ed4(0x11a)]['current'],_0x10791f[_0x1d9ed4(0x11a)]['current']=_0x2a0c13,this['_treeNodePropertiesBeforeFullValue'](_0x2a0c13,_0x10791f),_0x49b0d6['length']){for(_0x3a33c0=0x0,_0x2414fb=_0x49b0d6[_0x1d9ed4(0x109)];_0x3a33c0<_0x2414fb;_0x3a33c0++)_0x49b0d6[_0x3a33c0](_0x3a33c0);}_0x38ecae[_0x1d9ed4(0x109)]&&(_0x2a0c13['props']=_0x38ecae);}catch(_0x437f14){_0x17eb05(_0x437f14,_0x2a0c13,_0x10791f);}this['_additionalMetadata'](_0x1a040f,_0x2a0c13),this['_treeNodePropertiesAfterFullValue'](_0x2a0c13,_0x10791f),_0x10791f[_0x1d9ed4(0x11a)][_0x1d9ed4(0x149)]=_0x11d1b6,_0x10791f[_0x1d9ed4(0xd0)]--,_0x10791f[_0x1d9ed4(0x115)]=_0x59f3da,_0x10791f[_0x1d9ed4(0x115)]&&_0x10791f[_0x1d9ed4(0x157)][_0x1d9ed4(0xd4)]();}finally{_0xa2077&&(_0x1cd3e5[_0x1d9ed4(0xfb)]['error']=_0xa2077),_0x21d796&&(_0x1cd3e5[_0x1d9ed4(0xfb)][_0x1d9ed4(0xf4)]=_0x21d796),_0x1cd3e5['ninjaSuppressConsole']=_0x17cedc;}return _0x2a0c13;},_0x477a1f['prototype']['_getOwnPropertySymbols']=function(_0x2eb67d){var _0x3b843a=_0x2f17da;return Object[_0x3b843a(0xdf)]?Object[_0x3b843a(0xdf)](_0x2eb67d):[];},_0x477a1f[_0x2f17da(0x19c)]['_isSet']=function(_0x2e489d){var _0x1c9db8=_0x2f17da;return!!(_0x2e489d&&_0x1cd3e5[_0x1c9db8(0x18d)]&&this['_objectToString'](_0x2e489d)===_0x1c9db8(0x12a)&&_0x2e489d['forEach']);},_0x477a1f['prototype'][_0x2f17da(0x137)]=function(_0x121fb5,_0x1e7f5c,_0x2a6355){var _0x1c6419=_0x2f17da;if(!_0x2a6355['resolveGetters']){let _0x25a888=this[_0x1c6419(0xdc)](_0x121fb5,_0x1e7f5c);if(_0x25a888&&_0x25a888[_0x1c6419(0xb3)])return!0x0;}return _0x2a6355[_0x1c6419(0xa5)]?typeof _0x121fb5[_0x1e7f5c]==_0x1c6419(0xfc):!0x1;},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x121)]=function(_0x23826a){var _0x5566cd=_0x2f17da,_0x4332ca='';return _0x4332ca=typeof _0x23826a,_0x4332ca===_0x5566cd(0xd9)?this['_objectToString'](_0x23826a)==='[object\\x20Array]'?_0x4332ca=_0x5566cd(0x1a5):this[_0x5566cd(0x174)](_0x23826a)===_0x5566cd(0x135)?_0x4332ca=_0x5566cd(0xeb):this[_0x5566cd(0x174)](_0x23826a)==='[object\\x20BigInt]'?_0x4332ca=_0x5566cd(0x12e):_0x23826a===null?_0x4332ca=_0x5566cd(0x195):_0x23826a['constructor']&&(_0x4332ca=_0x23826a[_0x5566cd(0x12b)][_0x5566cd(0x156)]||_0x4332ca):_0x4332ca==='undefined'&&this[_0x5566cd(0xdb)]&&_0x23826a instanceof this[_0x5566cd(0xdb)]&&(_0x4332ca='HTMLAllCollection'),_0x4332ca;},_0x477a1f['prototype'][_0x2f17da(0x174)]=function(_0x1a015b){var _0x1fbbb0=_0x2f17da;return Object[_0x1fbbb0(0x19c)][_0x1fbbb0(0xdd)]['call'](_0x1a015b);},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x1aa)]=function(_0x3fd7dc){var _0x504d74=_0x2f17da;return _0x3fd7dc===_0x504d74(0x193)||_0x3fd7dc==='string'||_0x3fd7dc==='number';},_0x477a1f[_0x2f17da(0x19c)]['_isPrimitiveWrapperType']=function(_0x135fd1){var _0x121d3b=_0x2f17da;return _0x135fd1===_0x121d3b(0x107)||_0x135fd1==='String'||_0x135fd1==='Number';},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x10a)]=function(_0x13b876,_0x43516e,_0x4e2be8,_0xe68e8,_0x5d92b8,_0x4758de){var _0x4a14ce=this;return function(_0x1c1fe5){var _0x268a44=_0x50c4,_0x459e2d=_0x5d92b8['node'][_0x268a44(0x149)],_0x287119=_0x5d92b8[_0x268a44(0x11a)][_0x268a44(0xb6)],_0x232db1=_0x5d92b8[_0x268a44(0x11a)][_0x268a44(0xfd)];_0x5d92b8[_0x268a44(0x11a)][_0x268a44(0xfd)]=_0x459e2d,_0x5d92b8[_0x268a44(0x11a)][_0x268a44(0xb6)]=typeof _0xe68e8==_0x268a44(0x10c)?_0xe68e8:_0x1c1fe5,_0x13b876[_0x268a44(0x167)](_0x4a14ce[_0x268a44(0x111)](_0x43516e,_0x4e2be8,_0xe68e8,_0x5d92b8,_0x4758de)),_0x5d92b8[_0x268a44(0x11a)][_0x268a44(0xfd)]=_0x232db1,_0x5d92b8[_0x268a44(0x11a)][_0x268a44(0xb6)]=_0x287119;};},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x146)]=function(_0x4dbc18,_0x34e38e,_0x6441f9,_0x27da1d,_0x31e721,_0x1c9d05,_0x4cbf62){var _0x50a790=_0x2f17da,_0x9f4d24=this;return _0x34e38e[typeof _0x31e721!=_0x50a790(0x1ab)?'_p_'+_0x31e721[_0x50a790(0xdd)]():_0x31e721]=!0x0,function(_0x255dc9){var _0x26f12c=_0x50a790,_0x2e48cd=_0x1c9d05[_0x26f12c(0x11a)][_0x26f12c(0x149)],_0x2d11ff=_0x1c9d05[_0x26f12c(0x11a)][_0x26f12c(0xb6)],_0x52f5dc=_0x1c9d05[_0x26f12c(0x11a)]['parent'];_0x1c9d05[_0x26f12c(0x11a)][_0x26f12c(0xfd)]=_0x2e48cd,_0x1c9d05[_0x26f12c(0x11a)][_0x26f12c(0xb6)]=_0x255dc9,_0x4dbc18[_0x26f12c(0x167)](_0x9f4d24[_0x26f12c(0x111)](_0x6441f9,_0x27da1d,_0x31e721,_0x1c9d05,_0x4cbf62)),_0x1c9d05[_0x26f12c(0x11a)][_0x26f12c(0xfd)]=_0x52f5dc,_0x1c9d05['node'][_0x26f12c(0xb6)]=_0x2d11ff;};},_0x477a1f[_0x2f17da(0x19c)]['_property']=function(_0x42eaa6,_0xbcbd4f,_0x58f15f,_0x2c6900,_0x38ca63){var _0x3a85c8=_0x2f17da,_0x2166b4=this;_0x38ca63||(_0x38ca63=function(_0x3d9404,_0x410fea){return _0x3d9404[_0x410fea];});var _0xd6359e=_0x58f15f[_0x3a85c8(0xdd)](),_0x53eb90=_0x2c6900[_0x3a85c8(0x194)]||{},_0x33753c=_0x2c6900[_0x3a85c8(0xbe)],_0x1f58a5=_0x2c6900[_0x3a85c8(0x120)];try{var _0x46531c=this['_isMap'](_0x42eaa6),_0x3d3e6a=_0xd6359e;_0x46531c&&_0x3d3e6a[0x0]==='\\x27'&&(_0x3d3e6a=_0x3d3e6a[_0x3a85c8(0xbc)](0x1,_0x3d3e6a[_0x3a85c8(0x109)]-0x2));var _0x1c7ab5=_0x2c6900['expressionsToEvaluate']=_0x53eb90[_0x3a85c8(0xe2)+_0x3d3e6a];_0x1c7ab5&&(_0x2c6900[_0x3a85c8(0xbe)]=_0x2c6900[_0x3a85c8(0xbe)]+0x1),_0x2c6900['isExpressionToEvaluate']=!!_0x1c7ab5;var _0x2d9eff=typeof _0x58f15f=='symbol',_0x1df9dd={'name':_0x2d9eff||_0x46531c?_0xd6359e:this[_0x3a85c8(0xcf)](_0xd6359e)};if(_0x2d9eff&&(_0x1df9dd[_0x3a85c8(0x1ab)]=!0x0),!(_0xbcbd4f===_0x3a85c8(0x1a5)||_0xbcbd4f===_0x3a85c8(0x15c))){var _0x7d0b2d=this[_0x3a85c8(0xdc)](_0x42eaa6,_0x58f15f);if(_0x7d0b2d&&(_0x7d0b2d[_0x3a85c8(0xda)]&&(_0x1df9dd[_0x3a85c8(0xf3)]=!0x0),_0x7d0b2d[_0x3a85c8(0xb3)]&&!_0x1c7ab5&&!_0x2c6900[_0x3a85c8(0xc0)]))return _0x1df9dd[_0x3a85c8(0x114)]=!0x0,this[_0x3a85c8(0x191)](_0x1df9dd,_0x2c6900),_0x1df9dd;}var _0x494b46;try{_0x494b46=_0x38ca63(_0x42eaa6,_0x58f15f);}catch(_0x185d6b){return _0x1df9dd={'name':_0xd6359e,'type':_0x3a85c8(0xd5),'error':_0x185d6b[_0x3a85c8(0x163)]},this[_0x3a85c8(0x191)](_0x1df9dd,_0x2c6900),_0x1df9dd;}var _0x12e83e=this[_0x3a85c8(0x121)](_0x494b46),_0x251191=this[_0x3a85c8(0x1aa)](_0x12e83e);if(_0x1df9dd[_0x3a85c8(0x159)]=_0x12e83e,_0x251191)this[_0x3a85c8(0x191)](_0x1df9dd,_0x2c6900,_0x494b46,function(){var _0x1cdefc=_0x3a85c8;_0x1df9dd[_0x1cdefc(0x104)]=_0x494b46[_0x1cdefc(0x13c)](),!_0x1c7ab5&&_0x2166b4['_capIfString'](_0x12e83e,_0x1df9dd,_0x2c6900,{});});else{var _0x1ac42f=_0x2c6900[_0x3a85c8(0x115)]&&_0x2c6900[_0x3a85c8(0xd0)]<_0x2c6900[_0x3a85c8(0x186)]&&_0x2c6900[_0x3a85c8(0x157)][_0x3a85c8(0x17f)](_0x494b46)<0x0&&_0x12e83e!=='function'&&_0x2c6900['autoExpandPropertyCount']<_0x2c6900[_0x3a85c8(0x162)];_0x1ac42f||_0x2c6900[_0x3a85c8(0xd0)]<_0x33753c||_0x1c7ab5?this[_0x3a85c8(0xb8)](_0x1df9dd,_0x494b46,_0x2c6900,_0x1c7ab5||{}):this[_0x3a85c8(0x191)](_0x1df9dd,_0x2c6900,_0x494b46,function(){var _0x5d46d5=_0x3a85c8;_0x12e83e===_0x5d46d5(0x195)||_0x12e83e===_0x5d46d5(0x105)||(delete _0x1df9dd['value'],_0x1df9dd[_0x5d46d5(0xb7)]=!0x0);});}return _0x1df9dd;}finally{_0x2c6900[_0x3a85c8(0x194)]=_0x53eb90,_0x2c6900[_0x3a85c8(0xbe)]=_0x33753c,_0x2c6900['isExpressionToEvaluate']=_0x1f58a5;}},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x181)]=function(_0x1c47e6,_0x561fd3,_0x3fda7e,_0x2720a4){var _0x5dba76=_0x2f17da,_0x32bd0e=_0x2720a4[_0x5dba76(0x19b)]||_0x3fda7e[_0x5dba76(0x19b)];if((_0x1c47e6===_0x5dba76(0xd8)||_0x1c47e6===_0x5dba76(0xa6))&&_0x561fd3[_0x5dba76(0x104)]){let _0x4375ca=_0x561fd3[_0x5dba76(0x104)][_0x5dba76(0x109)];_0x3fda7e['allStrLength']+=_0x4375ca,_0x3fda7e[_0x5dba76(0xad)]>_0x3fda7e[_0x5dba76(0x1ad)]?(_0x561fd3[_0x5dba76(0xb7)]='',delete _0x561fd3[_0x5dba76(0x104)]):_0x4375ca>_0x32bd0e&&(_0x561fd3[_0x5dba76(0xb7)]=_0x561fd3[_0x5dba76(0x104)]['substr'](0x0,_0x32bd0e),delete _0x561fd3['value']);}},_0x477a1f['prototype'][_0x2f17da(0xfa)]=function(_0x147a1a){var _0x3744f8=_0x2f17da;return!!(_0x147a1a&&_0x1cd3e5['Map']&&this[_0x3744f8(0x174)](_0x147a1a)==='[object\\x20Map]'&&_0x147a1a['forEach']);},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0xcf)]=function(_0x29ab7e){var _0x356749=_0x2f17da;if(_0x29ab7e['match'](/^\\d+$/))return _0x29ab7e;var _0x1d36ec;try{_0x1d36ec=JSON[_0x356749(0x139)](''+_0x29ab7e);}catch{_0x1d36ec='\\x22'+this[_0x356749(0x174)](_0x29ab7e)+'\\x22';}return _0x1d36ec[_0x356749(0x142)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1d36ec=_0x1d36ec[_0x356749(0xbc)](0x1,_0x1d36ec[_0x356749(0x109)]-0x2):_0x1d36ec=_0x1d36ec[_0x356749(0x14c)](/'/g,'\\x5c\\x27')[_0x356749(0x14c)](/\\\\\"/g,'\\x22')[_0x356749(0x14c)](/(^\"|\"$)/g,'\\x27'),_0x1d36ec;},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x191)]=function(_0x5e43f6,_0x20bf41,_0xa11440,_0x10cb21){var _0x35c896=_0x2f17da;this[_0x35c896(0xea)](_0x5e43f6,_0x20bf41),_0x10cb21&&_0x10cb21(),this[_0x35c896(0x10d)](_0xa11440,_0x5e43f6),this[_0x35c896(0x131)](_0x5e43f6,_0x20bf41);},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0xea)]=function(_0xfb984,_0x614f20){var _0x269f14=_0x2f17da;this[_0x269f14(0x103)](_0xfb984,_0x614f20),this[_0x269f14(0x175)](_0xfb984,_0x614f20),this[_0x269f14(0x13d)](_0xfb984,_0x614f20),this['_setNodePermissions'](_0xfb984,_0x614f20);},_0x477a1f['prototype'][_0x2f17da(0x103)]=function(_0x35eea6,_0x4cfce5){},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x175)]=function(_0x166fcf,_0x15a30f){},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0xff)]=function(_0x5b8369,_0xacf5e7){},_0x477a1f['prototype'][_0x2f17da(0xe9)]=function(_0x53561c){var _0x5074a4=_0x2f17da;return _0x53561c===this[_0x5074a4(0x13b)];},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x131)]=function(_0x98353d,_0x1df50e){var _0x3fe925=_0x2f17da;this[_0x3fe925(0xff)](_0x98353d,_0x1df50e),this[_0x3fe925(0x1a3)](_0x98353d),_0x1df50e[_0x3fe925(0xaa)]&&this[_0x3fe925(0x1b1)](_0x98353d),this['_addFunctionsNode'](_0x98353d,_0x1df50e),this['_addLoadNode'](_0x98353d,_0x1df50e),this[_0x3fe925(0xab)](_0x98353d);},_0x477a1f['prototype'][_0x2f17da(0x10d)]=function(_0x40456b,_0x31f961){var _0x19effb=_0x2f17da;try{_0x40456b&&typeof _0x40456b['length']=='number'&&(_0x31f961[_0x19effb(0x109)]=_0x40456b[_0x19effb(0x109)]);}catch{}if(_0x31f961[_0x19effb(0x159)]===_0x19effb(0x10c)||_0x31f961[_0x19effb(0x159)]===_0x19effb(0x118)){if(isNaN(_0x31f961[_0x19effb(0x104)]))_0x31f961[_0x19effb(0x182)]=!0x0,delete _0x31f961[_0x19effb(0x104)];else switch(_0x31f961['value']){case Number[_0x19effb(0xd3)]:_0x31f961['positiveInfinity']=!0x0,delete _0x31f961[_0x19effb(0x104)];break;case Number[_0x19effb(0x1a7)]:_0x31f961[_0x19effb(0x1a2)]=!0x0,delete _0x31f961['value'];break;case 0x0:this[_0x19effb(0x11f)](_0x31f961['value'])&&(_0x31f961[_0x19effb(0x198)]=!0x0);break;}}else _0x31f961[_0x19effb(0x159)]===_0x19effb(0xfc)&&typeof _0x40456b['name']==_0x19effb(0xd8)&&_0x40456b['name']&&_0x31f961[_0x19effb(0x156)]&&_0x40456b[_0x19effb(0x156)]!==_0x31f961[_0x19effb(0x156)]&&(_0x31f961[_0x19effb(0xf6)]=_0x40456b[_0x19effb(0x156)]);},_0x477a1f[_0x2f17da(0x19c)]['_isNegativeZero']=function(_0x5d67e2){return 0x1/_0x5d67e2===Number['NEGATIVE_INFINITY'];},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x1b1)]=function(_0x437298){var _0x446a42=_0x2f17da;!_0x437298[_0x446a42(0x17c)]||!_0x437298['props'][_0x446a42(0x109)]||_0x437298[_0x446a42(0x159)]===_0x446a42(0x1a5)||_0x437298[_0x446a42(0x159)]===_0x446a42(0x1a6)||_0x437298['type']===_0x446a42(0x18d)||_0x437298[_0x446a42(0x17c)][_0x446a42(0xe5)](function(_0x5044ff,_0x3490e2){var _0x254448=_0x446a42,_0x5db668=_0x5044ff[_0x254448(0x156)]['toLowerCase'](),_0x1b2766=_0x3490e2[_0x254448(0x156)][_0x254448(0x129)]();return _0x5db668<_0x1b2766?-0x1:_0x5db668>_0x1b2766?0x1:0x0;});},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x110)]=function(_0x197ac8,_0x19e10c){var _0x5295c8=_0x2f17da;if(!(_0x19e10c[_0x5295c8(0xa5)]||!_0x197ac8[_0x5295c8(0x17c)]||!_0x197ac8[_0x5295c8(0x17c)]['length'])){for(var _0x1b6a64=[],_0x3fc820=[],_0x2b1164=0x0,_0x1cef32=_0x197ac8['props'][_0x5295c8(0x109)];_0x2b1164<_0x1cef32;_0x2b1164++){var _0xf3e7c7=_0x197ac8['props'][_0x2b1164];_0xf3e7c7[_0x5295c8(0x159)]===_0x5295c8(0xfc)?_0x1b6a64[_0x5295c8(0x167)](_0xf3e7c7):_0x3fc820[_0x5295c8(0x167)](_0xf3e7c7);}if(!(!_0x3fc820['length']||_0x1b6a64[_0x5295c8(0x109)]<=0x1)){_0x197ac8[_0x5295c8(0x17c)]=_0x3fc820;var _0x1db905={'functionsNode':!0x0,'props':_0x1b6a64};this['_setNodeId'](_0x1db905,_0x19e10c),this['_setNodeLabel'](_0x1db905,_0x19e10c),this[_0x5295c8(0x1a3)](_0x1db905),this[_0x5295c8(0x1b0)](_0x1db905,_0x19e10c),_0x1db905['id']+='\\x20f',_0x197ac8[_0x5295c8(0x17c)][_0x5295c8(0x192)](_0x1db905);}}},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x14d)]=function(_0x23ce28,_0x290709){},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0x1a3)]=function(_0x39e23a){},_0x477a1f[_0x2f17da(0x19c)][_0x2f17da(0xe8)]=function(_0x3d0fc3){var _0x3ce38e=_0x2f17da;return Array[_0x3ce38e(0xc9)](_0x3d0fc3)||typeof _0x3d0fc3=='object'&&this[_0x3ce38e(0x174)](_0x3d0fc3)===_0x3ce38e(0x11b);},_0x477a1f[_0x2f17da(0x19c)]['_setNodePermissions']=function(_0x31a7c2,_0x59135){},_0x477a1f[_0x2f17da(0x19c)]['_cleanNode']=function(_0x18e9b){var _0x10a976=_0x2f17da;delete _0x18e9b[_0x10a976(0x13f)],delete _0x18e9b[_0x10a976(0xec)],delete _0x18e9b[_0x10a976(0xae)];},_0x477a1f[_0x2f17da(0x19c)]['_setNodeExpressionPath']=function(_0x47ea8d,_0x45ed4a){};let _0x59d224=new _0x477a1f(),_0x409cdb={'props':_0x546a29[_0x2f17da(0x1ae)][_0x2f17da(0x17c)]||0x64,'elements':_0x546a29[_0x2f17da(0x1ae)][_0x2f17da(0x14e)]||0x64,'strLength':_0x546a29[_0x2f17da(0x1ae)][_0x2f17da(0x19b)]||0x400*0x32,'totalStrLength':_0x546a29[_0x2f17da(0x1ae)][_0x2f17da(0x1ad)]||0x400*0x32,'autoExpandLimit':_0x546a29['defaultLimits']['autoExpandLimit']||0x1388,'autoExpandMaxDepth':_0x546a29['defaultLimits'][_0x2f17da(0x186)]||0xa},_0x593125={'props':_0x546a29['reducedLimits']['props']||0x5,'elements':_0x546a29['reducedLimits'][_0x2f17da(0x14e)]||0x5,'strLength':_0x546a29[_0x2f17da(0xf0)]['strLength']||0x100,'totalStrLength':_0x546a29[_0x2f17da(0xf0)][_0x2f17da(0x1ad)]||0x100*0x3,'autoExpandLimit':_0x546a29[_0x2f17da(0xf0)][_0x2f17da(0x162)]||0x1e,'autoExpandMaxDepth':_0x546a29[_0x2f17da(0xf0)][_0x2f17da(0x186)]||0x2};if(_0x12a555){let _0x31799e=_0x59d224[_0x2f17da(0xb8)][_0x2f17da(0x10b)](_0x59d224);_0x59d224[_0x2f17da(0xb8)]=function(_0x5b7794,_0x13f5f9,_0x31df04,_0x1a2b80){return _0x31799e(_0x5b7794,_0x12a555(_0x13f5f9),_0x31df04,_0x1a2b80);};}function _0xcd4ef3(_0x3f7e92,_0x3b4900,_0x47d62e,_0x304dba,_0x24261c,_0x122b53){var _0x1794df=_0x2f17da;let _0x40e848,_0x2d7a07;try{_0x2d7a07=_0x17957c(),_0x40e848=_0xd4991f[_0x3b4900],!_0x40e848||_0x2d7a07-_0x40e848['ts']>_0x24f1d2['perLogpoint']['resetWhenQuietMs']&&_0x40e848[_0x1794df(0x150)]&&_0x40e848['time']/_0x40e848[_0x1794df(0x150)]<_0x24f1d2[_0x1794df(0x10e)][_0x1794df(0x106)]?(_0xd4991f[_0x3b4900]=_0x40e848={'count':0x0,'time':0x0,'ts':_0x2d7a07},_0xd4991f[_0x1794df(0x16f)]={}):_0x2d7a07-_0xd4991f['hits']['ts']>_0x24f1d2['global']['resetWhenQuietMs']&&_0xd4991f[_0x1794df(0x16f)]['count']&&_0xd4991f[_0x1794df(0x16f)][_0x1794df(0x1a9)]/_0xd4991f[_0x1794df(0x16f)][_0x1794df(0x150)]<_0x24f1d2[_0x1794df(0x197)][_0x1794df(0x106)]&&(_0xd4991f['hits']={});let _0x47d2fb=[],_0xf0dd0f=_0x40e848['reduceLimits']||_0xd4991f[_0x1794df(0x16f)][_0x1794df(0x148)]?_0x593125:_0x409cdb,_0xdf51ab=_0x3e49f9=>{var _0x7b787b=_0x1794df;let _0x46afdf={};return _0x46afdf[_0x7b787b(0x17c)]=_0x3e49f9[_0x7b787b(0x17c)],_0x46afdf['elements']=_0x3e49f9[_0x7b787b(0x14e)],_0x46afdf[_0x7b787b(0x19b)]=_0x3e49f9['strLength'],_0x46afdf['totalStrLength']=_0x3e49f9[_0x7b787b(0x1ad)],_0x46afdf[_0x7b787b(0x162)]=_0x3e49f9['autoExpandLimit'],_0x46afdf[_0x7b787b(0x186)]=_0x3e49f9[_0x7b787b(0x186)],_0x46afdf['sortProps']=!0x1,_0x46afdf[_0x7b787b(0xa5)]=!_0x1b3f4a,_0x46afdf['depth']=0x1,_0x46afdf['level']=0x0,_0x46afdf[_0x7b787b(0x161)]='root_exp_id',_0x46afdf[_0x7b787b(0x12f)]='root_exp',_0x46afdf[_0x7b787b(0x115)]=!0x0,_0x46afdf[_0x7b787b(0x157)]=[],_0x46afdf[_0x7b787b(0x199)]=0x0,_0x46afdf[_0x7b787b(0xc0)]=_0x546a29[_0x7b787b(0xc0)],_0x46afdf[_0x7b787b(0xad)]=0x0,_0x46afdf[_0x7b787b(0x11a)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x46afdf;};for(var _0x58bafc=0x0;_0x58bafc<_0x24261c[_0x1794df(0x109)];_0x58bafc++)_0x47d2fb[_0x1794df(0x167)](_0x59d224[_0x1794df(0xb8)]({'timeNode':_0x3f7e92===_0x1794df(0x1a9)||void 0x0},_0x24261c[_0x58bafc],_0xdf51ab(_0xf0dd0f),{}));if(_0x3f7e92===_0x1794df(0xd7)||_0x3f7e92===_0x1794df(0x117)){let _0x37a77e=Error[_0x1794df(0x1a4)];try{Error[_0x1794df(0x1a4)]=0x1/0x0,_0x47d2fb[_0x1794df(0x167)](_0x59d224['serialize']({'stackNode':!0x0},new Error()[_0x1794df(0x15a)],_0xdf51ab(_0xf0dd0f),{'strLength':0x1/0x0}));}finally{Error[_0x1794df(0x1a4)]=_0x37a77e;}}return{'method':_0x1794df(0x18f),'version':_0x29e915,'args':[{'ts':_0x47d62e,'session':_0x304dba,'args':_0x47d2fb,'id':_0x3b4900,'context':_0x122b53}]};}catch(_0xc6b404){return{'method':_0x1794df(0x18f),'version':_0x29e915,'args':[{'ts':_0x47d62e,'session':_0x304dba,'args':[{'type':_0x1794df(0xd5),'error':_0xc6b404&&_0xc6b404[_0x1794df(0x163)]}],'id':_0x3b4900,'context':_0x122b53}]};}finally{try{if(_0x40e848&&_0x2d7a07){let _0x5c7a31=_0x17957c();_0x40e848['count']++,_0x40e848[_0x1794df(0x1a9)]+=_0x58a6ca(_0x2d7a07,_0x5c7a31),_0x40e848['ts']=_0x5c7a31,_0xd4991f[_0x1794df(0x16f)][_0x1794df(0x150)]++,_0xd4991f[_0x1794df(0x16f)][_0x1794df(0x1a9)]+=_0x58a6ca(_0x2d7a07,_0x5c7a31),_0xd4991f[_0x1794df(0x16f)]['ts']=_0x5c7a31,(_0x40e848[_0x1794df(0x150)]>_0x24f1d2[_0x1794df(0x10e)][_0x1794df(0xa7)]||_0x40e848[_0x1794df(0x1a9)]>_0x24f1d2[_0x1794df(0x10e)]['reduceOnAccumulatedProcessingTimeMs'])&&(_0x40e848['reduceLimits']=!0x0),(_0xd4991f[_0x1794df(0x16f)][_0x1794df(0x150)]>_0x24f1d2[_0x1794df(0x197)]['reduceOnCount']||_0xd4991f[_0x1794df(0x16f)][_0x1794df(0x1a9)]>_0x24f1d2['global']['reduceOnAccumulatedProcessingTimeMs'])&&(_0xd4991f[_0x1794df(0x16f)]['reduceLimits']=!0x0);}}catch{}}}return _0xcd4ef3;}function G(_0xfb4cef){var _0x25ff01=_0x3dfa8d;if(_0xfb4cef&&typeof _0xfb4cef==_0x25ff01(0xd9)&&_0xfb4cef[_0x25ff01(0x12b)])switch(_0xfb4cef[_0x25ff01(0x12b)][_0x25ff01(0x156)]){case _0x25ff01(0x128):return _0xfb4cef[_0x25ff01(0x116)](Symbol[_0x25ff01(0x189)])?Promise[_0x25ff01(0x143)]():_0xfb4cef;case _0x25ff01(0x151):return Promise['resolve']();}return _0xfb4cef;}((_0x449730,_0x4d92b8,_0x13e745,_0x1897e6,_0x2a8c0e,_0x2ae710,_0xec5887,_0x13b2a0,_0x3a8757,_0x19c342,_0x1b9264,_0x500880)=>{var _0x53d986=_0x3dfa8d;if(_0x449730['_console_ninja'])return _0x449730[_0x53d986(0xaf)];let _0x4670c1={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x449730,_0x13b2a0,_0x2a8c0e))return _0x449730[_0x53d986(0xaf)]=_0x4670c1,_0x449730['_console_ninja'];let _0x19377d=b(_0x449730),_0x43d37e=_0x19377d[_0x53d986(0xba)],_0x2d323c=_0x19377d['timeStamp'],_0x5e4cdd=_0x19377d[_0x53d986(0x1ac)],_0xfdcc3c={'hits':{},'ts':{}},_0x416d5b=J(_0x449730,_0x3a8757,_0xfdcc3c,_0x2ae710,_0x500880,_0x2a8c0e===_0x53d986(0xcd)?G:void 0x0),_0x184562=(_0xe677ba,_0x5112f9,_0x5d22b0,_0xb0682c,_0x563885,_0xb65f96)=>{var _0x259ffe=_0x53d986;let _0x158a51=_0x449730[_0x259ffe(0xaf)];try{return _0x449730[_0x259ffe(0xaf)]=_0x4670c1,_0x416d5b(_0xe677ba,_0x5112f9,_0x5d22b0,_0xb0682c,_0x563885,_0xb65f96);}finally{_0x449730['_console_ninja']=_0x158a51;}},_0xe69047=_0x535098=>{_0xfdcc3c['ts'][_0x535098]=_0x2d323c();},_0x36c251=(_0x512ffe,_0x19d618)=>{var _0x25977b=_0x53d986;let _0x210718=_0xfdcc3c['ts'][_0x19d618];if(delete _0xfdcc3c['ts'][_0x19d618],_0x210718){let _0xcf07f6=_0x43d37e(_0x210718,_0x2d323c());_0x4f8495(_0x184562(_0x25977b(0x1a9),_0x512ffe,_0x5e4cdd(),_0x4997ad,[_0xcf07f6],_0x19d618));}},_0x31a3fa=_0x2e3b96=>{var _0x15aaa6=_0x53d986,_0x1b7a37;return _0x2a8c0e===_0x15aaa6(0xcd)&&_0x449730[_0x15aaa6(0x1a1)]&&((_0x1b7a37=_0x2e3b96==null?void 0x0:_0x2e3b96[_0x15aaa6(0x124)])==null?void 0x0:_0x1b7a37[_0x15aaa6(0x109)])&&(_0x2e3b96[_0x15aaa6(0x124)][0x0][_0x15aaa6(0x1a1)]=_0x449730[_0x15aaa6(0x1a1)]),_0x2e3b96;};_0x449730[_0x53d986(0xaf)]={'consoleLog':(_0x2a1f85,_0x468d26)=>{var _0x1867ad=_0x53d986;_0x449730[_0x1867ad(0xfb)]['log'][_0x1867ad(0x156)]!==_0x1867ad(0xc6)&&_0x4f8495(_0x184562(_0x1867ad(0x18f),_0x2a1f85,_0x5e4cdd(),_0x4997ad,_0x468d26));},'consoleTrace':(_0x1a76c8,_0x12b403)=>{var _0x4ce780=_0x53d986,_0x17b6a2,_0x36accc;_0x449730[_0x4ce780(0xfb)][_0x4ce780(0x18f)][_0x4ce780(0x156)]!=='disabledTrace'&&((_0x36accc=(_0x17b6a2=_0x449730[_0x4ce780(0x11e)])==null?void 0x0:_0x17b6a2[_0x4ce780(0xf8)])!=null&&_0x36accc[_0x4ce780(0x11a)]&&(_0x449730[_0x4ce780(0xb1)]=!0x0),_0x4f8495(_0x31a3fa(_0x184562(_0x4ce780(0xd7),_0x1a76c8,_0x5e4cdd(),_0x4997ad,_0x12b403))));},'consoleError':(_0x39c2df,_0x1f8201)=>{var _0x323c58=_0x53d986;_0x449730[_0x323c58(0xb1)]=!0x0,_0x4f8495(_0x31a3fa(_0x184562('error',_0x39c2df,_0x5e4cdd(),_0x4997ad,_0x1f8201)));},'consoleTime':_0x41a2ab=>{_0xe69047(_0x41a2ab);},'consoleTimeEnd':(_0x190952,_0x4a6db1)=>{_0x36c251(_0x4a6db1,_0x190952);},'autoLog':(_0x4645af,_0x2a7d2e)=>{_0x4f8495(_0x184562('log',_0x2a7d2e,_0x5e4cdd(),_0x4997ad,[_0x4645af]));},'autoLogMany':(_0x57be47,_0x5005ed)=>{_0x4f8495(_0x184562('log',_0x57be47,_0x5e4cdd(),_0x4997ad,_0x5005ed));},'autoTrace':(_0x40d3d7,_0x277ce6)=>{var _0x567a69=_0x53d986;_0x4f8495(_0x31a3fa(_0x184562(_0x567a69(0xd7),_0x277ce6,_0x5e4cdd(),_0x4997ad,[_0x40d3d7])));},'autoTraceMany':(_0x36f206,_0x3f195a)=>{var _0x141b8b=_0x53d986;_0x4f8495(_0x31a3fa(_0x184562(_0x141b8b(0xd7),_0x36f206,_0x5e4cdd(),_0x4997ad,_0x3f195a)));},'autoTime':(_0xdbce43,_0x3d49c9,_0x437cbe)=>{_0xe69047(_0x437cbe);},'autoTimeEnd':(_0x398b43,_0x543091,_0x3701b1)=>{_0x36c251(_0x543091,_0x3701b1);},'coverage':_0x4d31f2=>{_0x4f8495({'method':'coverage','version':_0x2ae710,'args':[{'id':_0x4d31f2}]});}};let _0x4f8495=H(_0x449730,_0x4d92b8,_0x13e745,_0x1897e6,_0x2a8c0e,_0x19c342,_0x1b9264),_0x4997ad=_0x449730['_console_ninja_session'];return _0x449730[_0x53d986(0xaf)];})(globalThis,'127.0.0.1',_0x3dfa8d(0x11d),_0x3dfa8d(0xee),_0x3dfa8d(0x19e),_0x3dfa8d(0x11c),_0x3dfa8d(0x144),_0x3dfa8d(0xe6),_0x3dfa8d(0x188),'',_0x3dfa8d(0xd6),{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}});");
    } catch (e) {}
}
function oo_oo(i, ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
oo_oo; /* istanbul ignore next */ 
function oo_tr(i, ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
oo_tr; /* istanbul ignore next */ 
function oo_tx(i, ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
oo_tx; /* istanbul ignore next */ 
function oo_ts(v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
oo_ts; /* istanbul ignore next */ 
function oo_te(v, i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
var _c;
__turbopack_context__.k.register(_c, "StagePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1208ib9._.js.map