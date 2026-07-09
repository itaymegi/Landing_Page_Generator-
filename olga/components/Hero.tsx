"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const { hero, brand } = site;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          className="hero-zoom object-cover object-[center_35%] sm:object-center"
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-text/95 via-text/60 to-text/20 sm:from-text/90 sm:via-text/55 sm:to-text/15"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[100svh] flex-col justify-end pt-[calc(env(safe-area-inset-top)+4.5rem)] pb-[calc(env(safe-area-inset-bottom)+2.5rem)] sm:pb-[min(12vh,7rem)] sm:pt-28">
        <div className="container-olga">
          <div className="mx-auto max-w-3xl text-center sm:mx-0 sm:text-start">
            <motion.p
              className="text-[0.7rem] font-semibold tracking-[0.22em] text-white/95 uppercase sm:text-xs sm:tracking-[0.28em]"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={0}
            >
              {brand.logoText} · {brand.tagline}
            </motion.p>

            <motion.p
              className="mt-2 font-serif-en text-xs tracking-[0.16em] text-white/90 italic sm:mt-2.5 sm:text-sm sm:tracking-[0.22em]"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={1}
            >
              {hero.taglineEn}
            </motion.p>

            <motion.h1
              className="mt-4 font-serif text-[clamp(1.65rem,6vw,4rem)] font-light leading-[1.12] tracking-wide text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:mt-5"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={2}
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              className="mx-auto mt-3 max-w-[22rem] text-sm leading-relaxed text-white/92 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] sm:mx-0 sm:mt-4 sm:max-w-xl sm:text-base md:text-lg"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={3}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-stretch sm:gap-4"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={4}
            >
              <button
                type="button"
                onClick={() => scrollToSection("calculator")}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-accent/30 bg-accent-deep px-7 text-[0.95rem] font-serif font-medium tracking-wide text-white shadow-[0_4px_28px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent hover:shadow-[0_8px_32px_rgba(196,168,130,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:min-h-[3.25rem] sm:w-auto sm:px-10"
              >
                {hero.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("gallery")}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-accent/70 bg-transparent px-7 text-[0.95rem] font-serif font-light tracking-wide text-white transition-all hover:border-accent hover:bg-accent/15 sm:min-h-[3.25rem] sm:w-auto sm:px-10"
              >
                {hero.secondaryCta}
              </button>
            </motion.div>

            <motion.div
              className="mt-7 sm:mt-8"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={5}
            >
              <span
                className="mx-auto mb-4 block h-px w-12 bg-accent/60 sm:mx-0"
                aria-hidden="true"
              />
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-2.5 sm:justify-start">
                {hero.chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2.5 rounded-full border border-accent/55 bg-[#faf7f2]/92 px-5 py-2.5 font-serif text-[0.72rem] font-light tracking-[0.14em] text-text shadow-[0_4px_24px_rgba(0,0,0,0.18)] backdrop-blur-md sm:text-[0.8125rem] sm:tracking-[0.16em]"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
