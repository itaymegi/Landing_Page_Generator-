"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ *
 * Tu B'Av ambient background layer — decorative, site-wide.
 * Self-contained: to remove after the holiday, delete this file and
 * its single usage in app/page.tsx (+ optional keyframes in globals.css).
 * ------------------------------------------------------------------ */
const TU_BAV_AMBIENT = {
  enabled: true,
  desktopHearts: 5,
  mobileHearts: 2,
  parallax: true,
} as const;

type Heart = {
  top: string;
  size: string;
  opacity: string;
  anim: "tubav-drift" | "tubav-sway";
  delay: string;
  duration: string;
  factor: number; // parallax strength (px per scroll unit)
  inset: string; // distance from the edge
  mobile: boolean; // shown on mobile too
};

/* Deterministic layout (no hydration mismatch) — premium, not busy. */
const LEFT_HEARTS: Heart[] = [
  { top: "8%", size: "h-4 w-4", opacity: "text-gold/12", anim: "tubav-drift", delay: "0s", duration: "7s", factor: 0.06, inset: "left-3 sm:left-6 lg:left-10", mobile: true },
  { top: "22%", size: "h-2.5 w-2.5", opacity: "text-gold/10", anim: "tubav-sway", delay: "1.4s", duration: "9s", factor: -0.04, inset: "left-8 sm:left-16 lg:left-24", mobile: false },
  { top: "37%", size: "h-3 w-3", opacity: "text-gold/12", anim: "tubav-drift", delay: "0.7s", duration: "8s", factor: 0.09, inset: "left-4 sm:left-10 lg:left-16", mobile: true },
  { top: "52%", size: "h-2 w-2", opacity: "text-gold/10", anim: "tubav-sway", delay: "2.1s", duration: "10s", factor: -0.05, inset: "left-10 sm:left-20 lg:left-28", mobile: false },
  { top: "66%", size: "h-3 w-3", opacity: "text-gold/12", anim: "tubav-drift", delay: "1.1s", duration: "7.5s", factor: 0.07, inset: "left-3 sm:left-8 lg:left-12", mobile: false },
  { top: "80%", size: "h-2.5 w-2.5", opacity: "text-gold/10", anim: "tubav-sway", delay: "0.4s", duration: "9.5s", factor: -0.06, inset: "left-8 sm:left-16 lg:left-24", mobile: false },
  { top: "92%", size: "h-4 w-4", opacity: "text-gold/12", anim: "tubav-drift", delay: "1.8s", duration: "8.5s", factor: 0.05, inset: "left-4 sm:left-10 lg:left-16", mobile: false },
];

const RIGHT_HEARTS: Heart[] = [
  { top: "12%", size: "h-3 w-3", opacity: "text-gold/12", anim: "tubav-sway", delay: "0.6s", duration: "8s", factor: -0.07, inset: "right-3 sm:right-6 lg:right-10", mobile: true },
  { top: "26%", size: "h-2 w-2", opacity: "text-gold/10", anim: "tubav-drift", delay: "1.9s", duration: "9s", factor: 0.05, inset: "right-8 sm:right-16 lg:right-24", mobile: false },
  { top: "41%", size: "h-4 w-4", opacity: "text-gold/12", anim: "tubav-sway", delay: "0.2s", duration: "7.5s", factor: -0.09, inset: "right-4 sm:right-10 lg:right-16", mobile: false },
  { top: "57%", size: "h-2.5 w-2.5", opacity: "text-gold/10", anim: "tubav-drift", delay: "2.4s", duration: "10s", factor: 0.06, inset: "right-10 sm:right-20 lg:right-28", mobile: false },
  { top: "71%", size: "h-3 w-3", opacity: "text-gold/12", anim: "tubav-sway", delay: "1.3s", duration: "8.5s", factor: -0.06, inset: "right-3 sm:right-8 lg:right-12", mobile: true },
  { top: "85%", size: "h-2 w-2", opacity: "text-gold/10", anim: "tubav-drift", delay: "0.9s", duration: "9.5s", factor: 0.08, inset: "right-8 sm:right-16 lg:right-24", mobile: false },
  { top: "95%", size: "h-3 w-3", opacity: "text-gold/12", anim: "tubav-sway", delay: "1.6s", duration: "8s", factor: -0.05, inset: "right-4 sm:right-10 lg:right-16", mobile: false },
];

function HeartIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21s-6.716-4.35-9.428-8.06C.86 10.22 1.343 6.9 3.79 5.46c1.99-1.17 4.36-.63 5.71.9L12 9.06l2.5-2.7c1.35-1.53 3.72-2.07 5.71-.9 2.447 1.44 2.93 4.76 1.218 7.48C18.716 16.65 12 21 12 21z" />
    </svg>
  );
}

function HeartField({ hearts, limitMobile }: { hearts: Heart[]; limitMobile: number }) {
  return (
    <>
      {hearts.map((h, i) => {
        // Cap the number of mobile-visible hearts to `limitMobile`.
        const mobileIndex = hearts.slice(0, i + 1).filter((x) => x.mobile).length;
        const showOnMobile = h.mobile && mobileIndex <= limitMobile;
        return (
          <span
            key={i}
            className={`absolute ${h.inset} ${h.opacity} ${
              showOnMobile ? "block" : "hidden sm:block"
            }`}
            style={{
              top: h.top,
              // parallax offset driven by the shared --tubav-scroll var
              transform: `translateY(calc(var(--tubav-scroll, 0px) * ${h.factor}))`,
            }}
          >
            {/* Inner element carries the float/sway keyframe so it composes
                with the parallax transform on the wrapper. */}
            <HeartIcon
              className={`${h.size} ${h.anim}`}
              style={{ animationDelay: h.delay, animationDuration: h.duration }}
            />
          </span>
        );
      })}
    </>
  );
}

export function TuBavAmbient() {
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!TU_BAV_AMBIENT.enabled || !TU_BAV_AMBIENT.parallax) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const update = () => {
      rafRef.current = null;
      // Small, clamped drift value shared by all hearts.
      const y = Math.min(window.scrollY, 4000);
      document.documentElement.style.setProperty("--tubav-scroll", `${y}px`);
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      document.documentElement.style.removeProperty("--tubav-scroll");
    };
  }, []);

  if (!TU_BAV_AMBIENT.enabled || !mounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      aria-hidden="true"
    >
      {/* Warm sunset corner glows */}
      <div className="tubav-glow absolute -left-20 -top-24 h-72 w-72 rounded-full bg-gold/8 blur-3xl" />
      <div className="tubav-glow absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold/6 blur-3xl [animation-delay:2s]" />

      {/* Side heart rails */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32">
        <HeartField hearts={LEFT_HEARTS} limitMobile={TU_BAV_AMBIENT.mobileHearts} />
      </div>
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32">
        <HeartField hearts={RIGHT_HEARTS} limitMobile={TU_BAV_AMBIENT.mobileHearts} />
      </div>
    </div>
  );
}
