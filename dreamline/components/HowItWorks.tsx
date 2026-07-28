"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/ui/Section";

const ACCENT = "var(--terracotta)";
const ACCENT_DEEP = "var(--terracotta-deep)";
const BLUSH = "var(--blush)";
const PEACH = "var(--peach)";
const TEXT = "var(--ink)";
const MUTED = "var(--ink-soft)";

const STEP_ICONS = ["chat", "photo", "brush", "gift"] as const;
type StepIcon = (typeof STEP_ICONS)[number];

const JOURNEY_POINTS = [
  { x: 76, y: 8 },
  { x: 24, y: 35 },
  { x: 76, y: 62 },
  { x: 24, y: 89 },
] as const;

function buildStemSegment(
  from: { x: number; y: number },
  to: { x: number; y: number },
) {
  const cpy1 = from.y + (to.y - from.y) * 0.58;
  const cpy2 = to.y - (to.y - from.y) * 0.42;
  return `M ${from.x} ${from.y} C ${from.x} ${cpy1}, ${to.x} ${cpy2}, ${to.x} ${to.y}`;
}

const STEM_SEGMENTS = JOURNEY_POINTS.slice(0, -1).map((from, i) =>
  buildStemSegment(from, JOURNEY_POINTS[i + 1]),
);

function StemDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={BLUSH} />
        <stop offset="45%" stopColor={PEACH} />
        <stop offset="100%" stopColor={ACCENT} />
      </linearGradient>
      <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

function StepIconSvg({ icon, className = "h-4 w-4" }: { icon: StepIcon; className?: string }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "chat":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M8 10h8M8 14h5" />
          <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3V7a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "photo":
      return (
        <svg {...props} aria-hidden="true">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M20 16l-4.5-4.5a1.5 1.5 0 0 0-2.1 0L5 19" />
        </svg>
      );
    case "brush":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" />
          <path d="M19 3v2M20 4h-2" />
        </svg>
      );
    case "gift":
      return (
        <svg {...props} aria-hidden="true">
          <rect x="4" y="10" width="16" height="10" rx="1" />
          <path d="M12 10V20M4 10h16" />
          <path d="M12 10c-2-3-5-3-5 0s3 3 5 0 5-3 5 0-3-3-5 0" />
        </svg>
      );
    default:
      return null;
  }
}

function JourneyBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 48%, color-mix(in oklab, var(--terracotta) 12%, transparent) 0%, color-mix(in oklab, var(--blush) 8%, transparent) 40%, transparent 72%)",
        }}
      />
    </div>
  );
}

type StepData = {
  index: string;
  title: string;
  description: string;
};

function ProcessCircle({
  number,
  active,
  completed,
}: {
  number: string;
  active: boolean;
  completed?: boolean;
}) {
  const isHighlighted = active || completed;

  return (
    <div
      className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] bg-white transition-all duration-700 ease-out sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      style={{
        borderColor: isHighlighted ? ACCENT : "color-mix(in oklab, var(--terracotta) 75%, transparent)",
        backgroundColor: active ? ACCENT : completed ? BLUSH : "#FFFFFF",
        boxShadow: active
          ? "0 6px 24px color-mix(in oklab, var(--terracotta) 35%, transparent), 0 0 0 6px color-mix(in oklab, var(--blush) 35%, transparent)"
          : completed
            ? "0 4px 16px color-mix(in oklab, var(--terracotta) 15%, transparent)"
            : "0 3px 14px rgba(48,43,41,0.07), 0 1px 3px rgba(48,43,41,0.04)",
        transform: active ? "scale(1.06)" : "scale(1)",
      }}
    >
      <span
        className="font-display text-[0.55rem] tracking-[0.14em] sm:text-[0.65rem] lg:text-xs"
        style={{ color: active ? "#FFFFFF" : ACCENT_DEEP }}
      >
        {number}
      </span>
    </div>
  );
}

const SEGMENT_DURATION = 0.85;
const STEP_DELAY = 0.55;

function ProcessJourney({
  steps,
  activeIndex,
  animate,
}: {
  steps: StepData[];
  activeIndex: number;
  animate: boolean;
}) {
  const gradId = "dreamline-process-stem";
  const revealSteps = !animate || activeIndex < 0;

  return (
    <div className="relative mx-auto mt-10 h-[min(60dvh,26rem)] w-full max-w-sm sm:mt-12 sm:h-[min(65dvh,30rem)] sm:max-w-md lg:mt-14 lg:h-[min(75dvh,36rem)] lg:max-w-xl">
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <StemDefs id={gradId} />
        {STEM_SEGMENTS.map((d, i) => (
          <g key={i}>
            <motion.path
              d={d}
              fill="none"
              stroke={`url(#${gradId}-grad)`}
              strokeWidth={4}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              filter={`url(#${gradId}-glow)`}
              style={{ opacity: 0.2 }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: animate && activeIndex >= i + 1 ? 1 : 0 }}
              transition={{
                duration: animate ? SEGMENT_DURATION : 0,
                delay: animate ? i * STEP_DELAY : 0,
                ease: [0.42, 0, 0.18, 1],
              }}
            />
            <motion.path
              d={d}
              fill="none"
              stroke={`url(#${gradId}-grad)`}
              strokeWidth={2.5}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: animate && activeIndex >= i + 1 ? 1 : 0 }}
              transition={{
                duration: animate ? SEGMENT_DURATION : 0,
                delay: animate ? i * STEP_DELAY : 0,
                ease: [0.42, 0, 0.18, 1],
              }}
            />
          </g>
        ))}
      </svg>

      {steps.map((step, index) => {
        const point = JOURNEY_POINTS[index];
        if (!point) return null;
        return (
          <div
            key={step.index}
            className="absolute -translate-x-1/2"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={false}
              animate={{
                opacity: revealSteps || activeIndex >= index ? 1 : 0.45,
                scale: revealSteps || activeIndex >= index ? 1 : 0.94,
              }}
              transition={{
                duration: 0.6,
                delay: animate ? index * STEP_DELAY : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="-translate-y-1/2">
                <ProcessCircle
                  number={step.index}
                  active={activeIndex === index}
                  completed={activeIndex > index}
                />
              </div>
              <div className="-mt-1 flex max-w-[7rem] flex-col items-center sm:max-w-[9rem] lg:max-w-[11rem]">
                <div
                  className="flex items-center justify-center opacity-50"
                  style={{ color: ACCENT_DEEP }}
                >
                  <StepIconSvg
                    icon={STEP_ICONS[index] ?? "brush"}
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                  />
                </div>
                <h3
                  className="mt-0.5 text-center font-display text-[11px] font-medium leading-tight sm:text-xs lg:text-sm"
                  style={{ color: TEXT }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-0.5 line-clamp-3 text-center text-[8.5px] font-light leading-snug sm:text-[10px] lg:text-[11px]"
                  style={{ color: MUTED }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          </div>
        );
      })}
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

export function HowItWorks() {
  const { howItWorks } = site;
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
    margin: "0px 0px -80px 0px",
  });
  const reducedMotion = useReducedMotion();
  const activeIndex = useProgressiveActiveIndex(
    inView,
    howItWorks.steps.length,
    reducedMotion,
  );
  const animate = inView && !reducedMotion;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="section-py relative overflow-hidden bg-gradient-to-b from-peach/10 via-ivory to-peach/10"
    >
      <JourneyBackdrop />

      <div className="container-dreamline relative z-[1]">
        <header className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow={howItWorks.eyebrow}
            title={howItWorks.title}
            subtitle={howItWorks.subtitle}
            align="center"
            className="mx-auto"
          />
          <span className="rule rule-center mx-auto mt-6" aria-hidden="true" />
        </header>

        <ProcessJourney
          steps={howItWorks.steps}
          activeIndex={activeIndex}
          animate={animate}
        />
      </div>
    </section>
  );
}
