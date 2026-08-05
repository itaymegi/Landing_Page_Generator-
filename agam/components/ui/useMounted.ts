"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** False during SSR and the first client render, true afterwards — safe for portals. */
export function useMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
