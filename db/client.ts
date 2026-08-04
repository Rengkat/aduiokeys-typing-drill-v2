import { openDB, type IDBPDatabase } from "idb";
import { type AudioKeysDB, DB_NAME, DB_VERSION } from "./schema";

let dbPromise: Promise<IDBPDatabase<AudioKeysDB>> | null = null;

/**
 * Returns a cached, singleton connection to the AudioKeysDB IndexedDB database.
 * Safe to call from anywhere (components, hooks, zustand stores, plain functions) —
 * repeated calls reuse the same open connection instead of re-opening it.
 */
export function getDB(): Promise<IDBPDatabase<AudioKeysDB>> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("getDB() can only run in the browser"));
  }

  if (!dbPromise) {
    dbPromise = openDB<AudioKeysDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("profiles")) {
          const profileStore = db.createObjectStore("profiles", { keyPath: "username" });
          profileStore.createIndex("level", "level");
          profileStore.createIndex("classCode", "classCode");
          profileStore.createIndex("fluencyScore", "fluencyScore");
        }
        if (!db.objectStoreNames.contains("metrics")) {
          const metricsStore = db.createObjectStore("metrics", {
            keyPath: "id",
            autoIncrement: true,
          });
          metricsStore.createIndex("username", "username");
          metricsStore.createIndex("stage", "stage");
          metricsStore.createIndex("timestamp", "timestamp");
          metricsStore.createIndex("fluencyScore", "fluencyScore");
          metricsStore.createIndex("username_stage", ["username", "stage"]);
        }
        if (!db.objectStoreNames.contains("keystrokes")) {
          const keystrokeStore = db.createObjectStore("keystrokes", {
            keyPath: "id",
            autoIncrement: true,
          });
          keystrokeStore.createIndex("username", "username");
          keystrokeStore.createIndex("sessionId", "sessionId");
          keystrokeStore.createIndex("timestamp", "timestamp");
          keystrokeStore.createIndex("username_session", ["username", "sessionId"]);
        }
        if (!db.objectStoreNames.contains("fingerHealth")) {
          const healthStore = db.createObjectStore("fingerHealth", {
            keyPath: "id",
            autoIncrement: true,
          });
          healthStore.createIndex("username", "username");
          healthStore.createIndex("timestamp", "timestamp");
          healthStore.createIndex("username_stage", ["username", "stage"]);
        }
        if (!db.objectStoreNames.contains("weakKeyPairs")) {
          const weakKeyStore = db.createObjectStore("weakKeyPairs", {
            keyPath: "id",
            autoIncrement: true,
          });
          weakKeyStore.createIndex("username", "username");
          weakKeyStore.createIndex("keyPair", "keyPair");
          weakKeyStore.createIndex("errorRate", "errorRate");
        }
        if (!db.objectStoreNames.contains("spacedRepetition")) {
          const srStore = db.createObjectStore("spacedRepetition", {
            keyPath: "id",
            autoIncrement: true,
          });
          srStore.createIndex("username", "username");
          srStore.createIndex("nextReview", "nextReview");
          srStore.createIndex("key", "key");
          srStore.createIndex("username_key", ["username", "key"]);
        }
        if (!db.objectStoreNames.contains("leaderboard")) {
          const lbStore = db.createObjectStore("leaderboard", {
            keyPath: "id",
            autoIncrement: true,
          });
          lbStore.createIndex("stage", "stage");
          lbStore.createIndex("fluencyScore", "fluencyScore");
          lbStore.createIndex("username", "username");
        }
        if (!db.objectStoreNames.contains("stageProgress")) {
          const progressStore = db.createObjectStore("stageProgress", {
            keyPath: "id",
            autoIncrement: true,
          });
          progressStore.createIndex("username", "username");
          progressStore.createIndex("stage", "stage");
          progressStore.createIndex("username_stage", ["username", "stage"]);
        }
      },
    });
  }

  return dbPromise;
}
