"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/config/site";

/**
 * Port of Agam PatientJourney: progressive active steps with a vertical rail
 * on mobile and SVG stems that draw between them on desktop.
 */

const SEGMENT_DURATION = 0.85;
const STEP_DELAY = 0.55;

type StepData = {
  number: string;
  title: string;
  description: string;
};

function buildDesktopStemPath(flip: boolean) {
  if (flip) {
    return "M 2 18 C 10 18, 16 8, 46 4 S 42 2, 46 4";
  }
  return "M 2 6 C 12 6, 16 16, 46 20 S 44 22, 46 20";
}

function StemDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--gold-soft)" stopOpacity="0.35" />
        <stop offset="50%" stopColor="var(--gold)" />
        <stop offset="100%" stopColor="var(--gold-deep)" />
      </linearGradient>
      <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

function JourneyCircle({
  number,
  active,
  completed,
  compact = false,
}: {
  number: string;
  active: boolean;
  completed?: boolean;
  compact?: boolean;
}) {
  const size = compact ? "h-11 w-11" : "h-14 w-14";
  const isHighlighted = active || completed;

  return (
    <div
      className={`relative flex ${size} shrink-0 items-center justify-center rounded-full border transition-all duration-700 ease-out ${
        active
          ? "scale-105 border-gold bg-gold shadow-[0_6px_24px_rgba(196,164,106,0.35)]"
          : completed
            ? "border-gold/50 bg-champagne"
            : "border-gold/35 bg-warm-white"
      }`}
    >
      <span
        className={`font-serif-en tracking-[0.12em] ${
          compact ? "text-[0.5625rem]" : "text-[0.6875rem]"
        } ${active ? "text-ivory" : isHighlighted ? "text-gold-deep" : "text-gold"}`}
      >
        {number}
      </span>
    </div>
  );
}

function JourneyMobile({
  steps,
  activeIndex,
  animate,
}: {
  steps: StepData[];
  activeIndex: number;
  animate: boolean;
}) {
  const revealSteps = !animate || activeIndex < 0;

  return (
    <ol className="mx-auto mt-8 w-full max-w-sm lg:hidden">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <motion.li
            key={step.number}
            className="flex gap-4"
            initial={false}
            animate={{
              opacity: revealSteps || activeIndex >= index ? 1 : 0.4,
            }}
            transition={{
              duration: 0.6,
              delay: animate ? index * STEP_DELAY : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col items-center">
              <JourneyCircle
                number={step.number}
                active={activeIndex === index}
                completed={activeIndex > index}
                compact
              />
              {!isLast ? (
                <span
                  className="my-1.5 w-px flex-1 bg-gold/15"
                  aria-hidden="true"
                >
                  <motion.span
                    className="block h-full w-px origin-top bg-gold/70"
                    initial={{ scaleY: 0 }}
                    animate={{
                      scaleY: !animate || activeIndex >= index + 1 ? 1 : 0,
                    }}
                    transition={{
                      duration: animate ? SEGMENT_DURATION : 0,
                      delay: animate ? index * STEP_DELAY : 0,
                      ease: [0.42, 0, 0.18, 1],
                    }}
                  />
                </span>
              ) : null}
            </div>

            <div className={`pt-1.5 text-start ${isLast ? "" : "pb-7"}`}>
              <h3 className="font-serif text-[0.9375rem] font-light leading-snug text-charcoal">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[0.8125rem] leading-[1.7] text-ink-muted">
                {step.description}
              </p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}

function JourneyDesktop({
  steps,
  activeIndex,
  animate,
}: {
  steps: StepData[];
  activeIndex: number;
  animate: boolean;
}) {
  const gradId = "marry-desktop-stem";

  return (
    <div className="mt-14 hidden lg:block">
      <div className="relative flex items-start justify-between gap-0">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-1 items-start">
            <motion.div
              className="flex flex-1 flex-col items-center text-center"
              initial={false}
              animate={{
                opacity: activeIndex >= index ? 1 : 0.4,
              }}
              transition={{
                duration: 0.65,
                delay: animate ? index * STEP_DELAY : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <JourneyCircle
                number={step.number}
                active={activeIndex === index}
                completed={activeIndex > index}
              />
              <h3 className="mt-4 font-serif text-base font-light text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[10.5rem] text-[0.75rem] leading-[1.7] text-ink-muted xl:max-w-[11.5rem]">
                {step.description}
              </p>
            </motion.div>

            {index < steps.length - 1 ? (
              <div
                className="flex w-10 shrink-0 items-center justify-center self-start pt-5 xl:w-14"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 48 24"
                  className="h-6 w-full overflow-visible xl:h-7"
                  fill="none"
                >
                  <StemDefs id={`${gradId}-${index}`} />
                  <motion.path
                    d={buildDesktopStemPath(index % 2 === 1)}
                    stroke={`url(#${gradId}-${index}-grad)`}
                    strokeWidth={2.25}
                    strokeLinecap="round"
                    filter={`url(#${gradId}-${index}-glow)`}
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: animate && activeIndex >= index + 1 ? 1 : 0,
                    }}
                    transition={{
                      delay: animate ? index * STEP_DELAY + 0.15 : 0,
                      duration: animate ? SEGMENT_DURATION : 0,
                      ease: [0.42, 0, 0.18, 1],
                    }}
                  />
                </svg>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function useProgressiveActiveIndex(
  inView: boolean,
  stepCount: number,
  reducedMotion: boolean | null,
) {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!inView || reducedMotion) return;

    const timers: number[] = [];
    for (let i = 0; i < stepCount; i++) {
      timers.push(
        window.setTimeout(() => setActiveIndex(i), 300 + i * STEP_DELAY * 1000),
      );
    }

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [inView, reducedMotion, stepCount]);

  if (!inView) return -1;
  if (reducedMotion) return stepCount - 1;
  return activeIndex;
}

export function Process() {
  const { process } = site;
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -60px 0px",
  });
  const reducedMotion = useReducedMotion();

  const steps: StepData[] = process.steps.map((step, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: step.title,
    description: step.text,
  }));

  const activeIndex = useProgressiveActiveIndex(
    inView,
    steps.length,
    reducedMotion,
  );
  const animate = inView && !reducedMotion;

  return (
    <SectionShell id="process" tone="champagne" hairline>
      <div className="container-marry" ref={sectionRef}>
        <SectionTitle
          eyebrow={process.eyebrow}
          title={process.title}
          subtitle={process.subtitle}
        />

        <JourneyMobile
          steps={steps}
          activeIndex={activeIndex}
          animate={animate}
        />
        <JourneyDesktop
          steps={steps}
          activeIndex={activeIndex}
          animate={animate}
        />

        <p className="mx-auto mt-8 inline-flex w-full justify-center sm:mt-10">
          <span className="rounded-full border border-gold/30 bg-warm-white/70 px-5 py-2 text-[0.7rem] tracking-[0.14em] text-ink-muted">
            {process.note}
          </span>
        </p>
      </div>
    </SectionShell>
  );
}
