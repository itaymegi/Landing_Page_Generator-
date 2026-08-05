"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WhatsAppIcon } from "@/components/ui/icons";
import { site, siteWhatsAppHref } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.08 + i * 0.09,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const { hero, brand } = site;

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          quality={90}
          className="hero-zoom object-cover object-[center_22%] sm:object-[center_28%]"
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/96 via-charcoal/50 to-charcoal/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[100svh] flex-col justify-end pb-[calc(env(safe-area-inset-bottom)+1.25rem)] pt-[calc(env(safe-area-inset-top)+5rem)] sm:pb-7 sm:pt-24">
        <div className="container-marry">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <p className="font-serif-en text-[0.7rem] tracking-[0.4em] text-warm-white uppercase sm:text-xs">
                {hero.eyebrow}
              </p>
              <p className="mt-1 font-serif-en text-[0.68rem] tracking-[0.2em] text-warm-white/60 italic sm:text-xs">
                {brand.tagline}
              </p>
            </motion.div>

            <motion.h1
              className="mt-4 font-serif text-[clamp(1.9rem,6.2vw,3.5rem)] font-light leading-[1.12] text-warm-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.45)] sm:mt-5"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              className="mx-auto mt-3 max-w-md text-[0.95rem] leading-[1.65] text-warm-white/85 sm:mt-4 sm:text-base"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-7 flex flex-col items-stretch justify-center gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <CTAButton
                href={siteWhatsAppHref()}
                variant="inverse"
                external
                icon={<WhatsAppIcon />}
                className="shadow-[0_10px_36px_rgba(0,0,0,0.28)]"
              >
                {hero.primaryCta}
              </CTAButton>
              <CTAButton
                href={hero.secondaryHref}
                variant="ghost"
                className="border-warm-white/50 bg-charcoal/15 backdrop-blur-sm"
              >
                {hero.secondaryCta}
              </CTAButton>
            </motion.div>

            <motion.div
              className="mx-auto mt-8 max-w-3xl sm:mt-9"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <ul className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-warm-white/20 bg-warm-white/[0.09] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:gap-0 sm:rounded-full sm:px-2 sm:py-2">
                {hero.trustBadges.map((badge, index) => (
                  <li
                    key={badge}
                    className="inline-flex items-center text-[0.62rem] tracking-[0.12em] text-warm-white/90 sm:text-[0.68rem]"
                  >
                    {index > 0 ? (
                      <span
                        className="mx-2 hidden h-3 w-px bg-gold/50 sm:mx-3.5 sm:inline-block"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="rounded-full px-2 py-1 sm:px-0.5 sm:py-0">
                      {badge}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mt-6 flex justify-center sm:mt-7"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              aria-hidden="true"
            >
              <span className="scroll-cue block h-8 w-px bg-gradient-to-b from-warm-white/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
