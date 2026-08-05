"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { consultationHref, site } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: 0.15 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  const { hero } = site;
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // The portrait drifts a little slower than the page as it scrolls away.
  const rawImageY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);
  const imageY = useSpring(rawImageY, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden bg-ivory pb-24 pt-[calc(var(--header-height)+2.5rem)] sm:pb-28 sm:pt-[calc(var(--header-height)+4rem)] lg:pb-36"
    >
      {/* Soft light behind the copy column, kept off the photo itself. */}
      <span
        className="pointer-events-none absolute -top-40 end-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sand to-transparent"
        aria-hidden="true"
      />

      <div className="container-agam relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="eyebrow"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-5 font-serif text-[clamp(2.125rem,6.2vw,4rem)] font-light leading-[1.16] text-charcoal"
            >
              {hero.headline}
              <span className="mt-1 block text-gold-deep">
                {hero.headlineAccent}
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-7 max-w-xl text-base leading-[1.95] text-ink-muted sm:text-lg"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <CTAButton href={consultationHref()} variant="primary" external>
                {hero.primaryCta}
              </CTAButton>
              <CTAButton href="/#contact-form" variant="outline">
                {hero.secondaryCta}
              </CTAButton>
            </motion.div>
          </div>

          <motion.div
            initial={
              reduceMotion
                ? undefined
                : { opacity: 0, y: 34, filter: "blur(10px)" }
            }
            animate={
              reduceMotion
                ? undefined
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{
              duration: 1.15,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={reduceMotion ? undefined : { y: imageY }}
            className="relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:max-w-none"
          >
            {/* Offset gold mount, echoing the framing used in the About block. */}
            <span
              className="absolute -bottom-4 -start-4 hidden h-full w-full rounded-[22px] border border-gold/35 sm:block"
              aria-hidden="true"
            />

            <figure className="relative">
              <div className="relative overflow-hidden rounded-[22px] bg-sand shadow-[0_36px_90px_rgba(31,30,28,0.14)]">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  width={707}
                  height={606}
                  priority
                  quality={90}
                  sizes="(max-width: 1023px) 92vw, 44vw"
                  className="block h-auto w-full"
                />
                <span
                  className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-charcoal/5"
                  aria-hidden="true"
                />
              </div>

              <figcaption className="mt-4 flex items-center gap-3 text-[0.75rem] tracking-[0.1em] text-ink-faint">
                <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
                {hero.imageCaption}
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
