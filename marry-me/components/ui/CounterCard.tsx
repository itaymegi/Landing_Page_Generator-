"use client";

import { useEffect, useRef, useState } from "react";

type CounterCardProps = {
  value: number;
  suffix?: string;
  label: string;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function CounterCard({ value, suffix = "", label }: CounterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (prefersReducedMotion()) {
        setDisplay(value);
        return;
      }

      const duration = 1600;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif-en text-4xl font-light tracking-[0.04em] text-charcoal sm:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-3 text-sm tracking-[0.08em] text-ink-muted">{label}</p>
    </div>
  );
}
