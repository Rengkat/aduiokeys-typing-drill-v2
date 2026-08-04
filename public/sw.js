// AudioKeys service worker
// Scope: enables "Add to Home Screen" installability and a minimal offline
// fallback. Deliberately conservative — it only caches static, safe-to-cache
// assets and never intercepts API/data requests, so normal online behaviour
// (profile sync, leaderboard, etc.) is completely unaffected.

const CACHE_VERSION = "v1";
const SHELL_CACHE = `audiokeys-shell-${CACHE_VERSION}`;
const STATIC_CACHE = `audiokeys-static-${CACHE_VERSION}`;

const SHELL_ASSETS = [
  "/offline.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(
            (key) => key !== SHELL_CACHE && key !== STATIC_CACHE
          )
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

function isStaticAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/audio/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname === "/favicon.ico"
  );
}

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only ever handle same-origin GET requests. Everything else (API calls,
  // RSC data fetches, cross-origin requests, POST/PUT, etc.) passes straight
  // through to the network untouched.
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Page navigations: network-first so users always get the latest app,
  // with an offline fallback page when there's no connection at all.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const cache = await caches.open(SHELL_CACHE);
        return (
          (await cache.match(request)) ||
          (await cache.match("/offline.html"))
        );
      })
    );
    return;
  }

  // Static, content-hashed or rarely-changing assets: cache-first for speed
  // and offline availability, refreshing the cache in the background.
  if (isStaticAsset(url)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(STATIC_CACHE);
        const cached = await cache.match(request);
        const networkFetch = fetch(request)
          .then((response) => {
            if (response && response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => undefined);
        return cached || (await networkFetch) || Response.error();
      })()
    );
  }

  // Everything else (data requests, RSC payloads, etc.) is left alone.
});
