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
        className="absolute inset-0 bg-gradient-to-t from-text/90 via-text/55 to-text/30 sm:from-text/85 sm:via-text/50 sm:to-text/25"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[100svh] flex-col justify-center pt-[calc(env(safe-area-inset-top)+4rem)] pb-[calc(env(safe-area-inset-bottom)+2rem)] sm:justify-end sm:pb-32 sm:pt-28">
        <div className="container-dflowers">
          <div className="mx-auto max-w-3xl -translate-y-[3vh] text-center sm:mx-0 sm:translate-y-0 sm:text-start">
            <motion.p
              className="text-[0.7rem] font-medium tracking-[0.2em] text-white/90 uppercase sm:text-xs sm:tracking-[0.3em] md:text-sm"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={0}
            >
              {brand.logoText} · {brand.name}
            </motion.p>

            <motion.p
              className="mt-2.5 font-serif-en text-xs tracking-[0.16em] text-white/90 italic drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] sm:mt-3 sm:text-sm sm:tracking-[0.22em] md:text-base"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={1}
            >
              {hero.taglineEn}
            </motion.p>

            <motion.h1
              className="mt-5 font-serif text-[clamp(1.75rem,6.5vw,4.75rem)] font-light leading-[1.12] tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:mt-6 sm:leading-[1.08]"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={2}
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              className="mx-auto mt-4 max-w-[22rem] text-sm leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:mx-0 sm:mt-5 sm:max-w-xl sm:text-base md:text-lg"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={3}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-7 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={4}
            >
              <button
                type="button"
                onClick={() => scrollToSection("planner")}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent-deep px-6 text-base font-serif font-medium text-white shadow-[0_4px_20px_rgba(168,137,79,0.35)] transition-all hover:-translate-y-0.5 hover:bg-text hover:shadow-[0_6px_28px_rgba(168,137,79,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-14 sm:w-auto sm:px-10 sm:text-lg"
              >
                {hero.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("gallery")}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/40 px-6 text-sm font-medium text-white transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:min-h-14 sm:w-auto sm:px-10 sm:text-base"
              >
                {hero.secondaryCta}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] start-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/70" />
        </div>
      </motion.div>
    </section>
  );
}
