"use client";

import { useEffect } from "react";

/** Renders nothing — registers the PWA service worker once on mount so the
 *  app becomes installable and gets a minimal offline fallback. Mount once
 *  in app/layout.tsx alongside StoreHydrator. Safe no-op in unsupported
 *  browsers or during SSR. */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    // Skip in local dev to avoid caching interfering with hot reload.
    if (process.env.NODE_ENV !== "production") return;

    navigator.serviceWorker
      .register("/sw.js")
      .catch((error) => {
        console.error("Service worker registration failed:", error);
      });
  }, []);

  return null;
}
