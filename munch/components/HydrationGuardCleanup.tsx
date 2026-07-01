"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __cursorRefObserver?: MutationObserver;
  }
}

export function HydrationGuardCleanup() {
  useEffect(() => {
    window.__cursorRefObserver?.disconnect();
    delete window.__cursorRefObserver;
  }, []);

  return null;
}
