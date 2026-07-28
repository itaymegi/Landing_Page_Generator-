"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { CTAButton } from "@/components/ui/CTAButton";

const HIDE_SECTION_IDS = ["planner", "final-cta"] as const;

export function MobileCTABar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sections = HIDE_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (sections.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting && entry.intersectionRatio > 0.08) visible.add(id);
          else visible.delete(id);
        }
        setHidden(visible.size > 0);
      },
      { threshold: [0, 0.08, 0.2], rootMargin: "0px 0px -8% 0px" },
    );

    for (const section of sections) observer.observe(section);
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
