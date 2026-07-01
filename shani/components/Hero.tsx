"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.12,
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
        className="absolute inset-0 bg-gradient-to-t from-brown/92 via-brown/55 to-brown/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(90,70,52,0.3)_100%)]"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[100dvh] flex-col justify-end pb-28 pt-24 sm:pb-32 sm:pt-28">
        <div className="container-shani">
          <motion.p
            className="text-sm font-medium tracking-[0.25em] text-white/75 sm:text-base"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {brand.name}
          </motion.p>

          <motion.h1
            className="mt-5 max-w-3xl font-serif text-[clamp(2rem,6vw,4.5rem)] font-light leading-[1.1] tracking-wide text-white"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <WhatsAppButton label={hero.primaryCta} size="lg" />
            <button
              type="button"
              onClick={scrollToGallery}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/35 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              {hero.secondaryCta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
