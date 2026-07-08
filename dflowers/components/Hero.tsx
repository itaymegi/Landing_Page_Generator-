"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

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

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          className="hero-zoom object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-text/85 via-text/50 to-text/25"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[100dvh] flex-col justify-end pb-28 pt-28 sm:pb-32">
        <div className="container-dflowers">
          <div className="max-w-3xl">
            <motion.p
              className="text-xs font-medium tracking-[0.3em] text-white/90 uppercase sm:text-sm"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={0}
            >
              {brand.logoText} · {brand.name}
            </motion.p>

            <motion.p
              className="mt-3 font-serif-en text-sm tracking-[0.22em] text-white/95 italic drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] sm:mt-4 sm:text-base"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={1}
            >
              {hero.taglineEn}
            </motion.p>

            <motion.h1
              className="mt-5 max-w-4xl font-serif text-[clamp(2.25rem,6vw,4.75rem)] font-light leading-[1.08] tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:mt-6"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={2}
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:mt-6 sm:text-lg"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={3}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center"
              variants={fadeUp}
              initial={false}
              animate="visible"
              custom={4}
            >
              <WhatsAppButton label={hero.primaryCta} variant="primary" size="lg" />
              <button
                type="button"
                onClick={scrollToGallery}
                className="inline-flex min-h-14 items-center justify-center rounded-sm border border-white/40 px-10 text-base font-medium text-white transition-all hover:bg-white/10"
              >
                {hero.secondaryCta}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 start-1/2 -translate-x-1/2"
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
