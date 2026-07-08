"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const { testimonials } = site;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.items.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [testimonials.items.length]);

  const active = testimonials.items[activeIndex];

  return (
    <section id="testimonials" className="section-py bg-background">
      <div className="container-dflowers mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-serif text-3xl font-light tracking-wide text-text sm:text-4xl lg:text-5xl">
            {testimonials.title}
          </h2>
          <span className="rule-gold mt-5" aria-hidden="true" />
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-12 sm:mt-14">
            <div
              className="absolute inset-0 rounded-sm bg-[radial-gradient(ellipse_at_center,rgba(199,166,107,0.08)_0%,transparent_70%)]"
              aria-hidden="true"
            />

            <div className="relative min-h-[260px] border border-border/80 bg-card/50 px-6 py-10 sm:min-h-[240px] sm:px-12 sm:py-12">
              <span
                className="pointer-events-none absolute start-4 top-2 font-serif text-7xl leading-none text-accent/25 select-none sm:start-8 sm:text-8xl animate-pulse"
                style={{ animationDuration: "4s" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <span className="absolute top-8 bottom-8 start-0 w-px bg-accent/30" aria-hidden="true" />
              <span className="absolute top-8 bottom-8 end-0 w-px bg-accent/30" aria-hidden="true" />

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative px-2 pt-6 sm:px-4"
                >
                  <p className="font-serif text-xl leading-relaxed text-text sm:text-2xl lg:text-[1.75rem]">
                    {active.quote}
                  </p>
                  <footer className="mt-8 flex flex-wrap items-center gap-3 text-base">
                    <span className="font-medium text-text">{active.name}</span>
                    {active.role ? (
                      <span className="rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-medium text-accent-deep">
                        {active.role}
                      </span>
                    ) : null}
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              <div className="relative mt-10 flex justify-center gap-2">
                {testimonials.items.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-8 bg-accent"
                        : "w-1.5 bg-border hover:bg-accent/40"
                    }`}
                    aria-label={`המלצה ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
