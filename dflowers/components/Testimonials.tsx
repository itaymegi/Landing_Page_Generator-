"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { PremiumSection } from "@/components/ui/PremiumSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LuxuryCard } from "@/components/ui/LuxuryCard";

export function Testimonials() {
  const { testimonials } = site;
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.items.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [testimonials.items.length, reducedMotion]);

  const active = testimonials.items[activeIndex];

  return (
    <PremiumSection id="testimonials" tone="beige" floral="corners">
      <div className="container-dflowers mx-auto max-w-4xl">
        <SectionHeader title={testimonials.title} align="center" variant="centered" />

        <Reveal delay={100}>
          <div className="relative mt-12 sm:mt-14">
            <LuxuryCard className="relative min-h-[260px] overflow-hidden bg-background-warm px-6 py-10 sm:min-h-[240px] sm:px-12 sm:py-12">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,168,107,0.08)_0%,transparent_70%)]"
                aria-hidden="true"
              />

              <span
                className="pointer-events-none absolute start-4 top-2 font-serif text-7xl leading-none text-accent/10 select-none sm:start-8 sm:text-8xl"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative px-2 pt-6 text-center sm:px-4"
                >
                  <p className="font-serif text-xl leading-relaxed text-text sm:text-2xl lg:text-[1.75rem]">
                    {active.quote}
                  </p>
                  <footer className="mt-8 flex flex-wrap items-center justify-center gap-3 text-base">
                    <span className="font-medium text-text">{active.name}</span>
                    {active.role ? (
                      <span className="rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-medium text-accent-deep">
                        {active.role}
                      </span>
                    ) : null}
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              <div
                className="relative mt-10 flex justify-center gap-2.5"
                role="tablist"
                aria-label="בחירת המלצה"
              >
                {testimonials.items.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    onClick={() => setActiveIndex(index)}
                    aria-selected={index === activeIndex}
                    aria-current={index === activeIndex ? "true" : undefined}
                    aria-label={`המלצה ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      index === activeIndex
                        ? "w-7 bg-accent-deep"
                        : "w-1.5 bg-border hover:bg-accent/40"
                    }`}
                  />
                ))}
              </div>
            </LuxuryCard>
          </div>
        </Reveal>
      </div>
    </PremiumSection>
  );
}
