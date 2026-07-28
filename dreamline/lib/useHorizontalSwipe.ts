"use client";

import { useEffect, useRef } from "react";

/**
 * Phone-safe horizontal swipe for carousels.
 * Only claims the gesture after clear horizontal intent so vertical
 * page scrolling is never blocked.
 */
export function useHorizontalSwipe(
  onSwipe: (direction: "prev" | "next") => void,
  enabled = true,
  threshold = 40,
) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const onSwipeRef = useRef(onSwipe);

  useEffect(() => {
    onSwipeRef.current = onSwipe;
  }, [onSwipe]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el || !enabled) return;

    let startX = 0;
    let startY = 0;
    let locked: "h" | "v" | null = null;
    let activePointerId: number | null = null;

    const isInteractiveTarget = (target: EventTarget | null) =>
      target instanceof Element && !!target.closest("button, a, input, textarea, select, label");

    const releaseCapture = (pointerId: number) => {
      try {
        el.releasePointerCapture(pointerId);
      } catch {
        // Ignore if capture was already released
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (isInteractiveTarget(e.target)) return;

      activePointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      locked = null;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerId !== activePointerId) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (!locked) {
        if (Math.abs(dx) < 12 && Math.abs(dy) < 12) return;
        // Require clearer horizontal intent before claiming the gesture
        if (Math.abs(dx) > Math.abs(dy) * 1.5) {
          locked = "h";
          try {
            el.setPointerCapture(e.pointerId);
          } catch {
            // Ignore if capture is unavailable
          }
        } else if (Math.abs(dy) > Math.abs(dx) * 1.15) {
          locked = "v";
          activePointerId = null;
          return;
        } else {
          return;
        }
      }

      if (locked === "h") {
        e.preventDefault();
      }
    };

    const onPointerEnd = (e: PointerEvent) => {
      if (e.pointerId !== activePointerId) return;

      const dx = e.clientX - startX;
      const wasHorizontal = locked === "h";
      activePointerId = null;
      locked = null;
      releaseCapture(e.pointerId);

      if (!wasHorizontal || Math.abs(dx) < threshold) return;

      onSwipeRef.current(dx > 0 ? "prev" : "next");
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove, { passive: false });
    el.addEventListener("pointerup", onPointerEnd);
    el.addEventListener("pointercancel", onPointerEnd);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerEnd);
      el.removeEventListener("pointercancel", onPointerEnd);
    };
  }, [enabled, threshold]);

  return stageRef;
}
