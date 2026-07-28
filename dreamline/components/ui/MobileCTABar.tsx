"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { CTAButton } from "@/components/ui/CTAButton";

export function MobileCTABar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const planner = document.getElementById("planner");
    if (!planner) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting && entry.intersectionRatio > 0.15);
      },
      { threshold: [0, 0.15, 0.35], rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(planner);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`mobile-cta-bar fixed inset-x-5 bottom-[max(0.65rem,env(safe-area-inset-bottom))] z-50 transition-all duration-300 sm:hidden ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <CTAButton
        href="#planner"
        label={site.hero.ctaLabel}
        showArrow={false}
        size="sm"
        className="w-full min-h-11 shadow-md shadow-ink/12"
        tabIndex={hidden ? -1 : undefined}
      />
    </div>
  );
}
