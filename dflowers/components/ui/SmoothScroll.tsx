"use client";

import { useEffect } from "react";
import Lenis from "lenis";

function shouldUseSmoothScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }

  // Lenis breaks IntersectionObserver on touch devices — use native scroll on phones.
  if (window.matchMedia("(pointer: coarse)").matches) {
    return false;
  }

  return true;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!shouldUseSmoothScroll()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
