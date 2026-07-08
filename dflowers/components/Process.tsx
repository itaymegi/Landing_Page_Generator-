"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { site } from "@/config/site";
import { BackgroundDecorations } from "@/components/ui/BackgroundDecorations";
import { PremiumSection } from "@/components/ui/PremiumSection";

const GOLD = "#C8A86B";
const GOLD_DEEP = "#A8894F";
const CHAMPAGNE = "#E8D5B5";
const TEXT = "#2D2D2D";
const MUTED = "#999999";

const STEP_ICONS = ["handshake", "pencil", "flower", "box", "sparkle"] as const;
type StepIcon = (typeof STEP_ICONS)[number];

/** Zig-zag circle centers (viewBox 0–100) — +15% vertical spacing */
const MOBILE_POINTS = [
  { x: 76, y: 5 },
  { x: 24, y: 26 },
  { x: 76, y: 47 },
  { x: 24, y: 68 },
  { x: 76, y: 89 },
] as const;

function buildStemSegment(
  from: { x: number; y: number },
  to: { x: number; y: number },
) {
  const cpy1 = from.y + (to.y - from.y) * 0.58;
  const cpy2 = to.y - (to.y - from.y) * 0.42;
  return `M ${from.x} ${from.y} C ${from.x} ${cpy1}, ${to.x} ${cpy2}, ${to.x} ${to.y}`;
}

function buildMobileStemPaths() {
  return MOBILE_POINTS.slice(0, -1).map((from, i) =>
    buildStemSegment(from, MOBILE_POINTS[i + 1]),
  );
}

const MOBILE_STEM_SEGMENTS = buildMobileStemPaths();

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
        <stop offset="0%" stopColor="#EDE4D3" />
        <stop offset="45%" stopColor={CHAMPAGNE} />
        <stop offset="100%" stopColor={GOLD} />
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
    case "handshake":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M4 12l4 4 3-3 5 5 4-4" />
          <path d="M8 8l2-2a2 2 0 0 1 3 0l1 1" />
          <path d="M14 6l2-2" />
        </svg>
      );
    case "pencil":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M16 4l4 4-9 9H7v-4z" />
          <path d="M14 6l4 4" />
        </svg>
      );
    case "flower":
      return (
        <svg {...props} aria-hidden="true">
          <circle cx="12" cy="10" r="2.5" />
          <path d="M12 3v3M12 14v3M5 10h3M16 10h3M7 5l2 2M15 13l2 2M17 5l-2 2M9 13l-2 2" />
          <path d="M12 17v4" />
        </svg>
      );
    case "box":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M4 8l8-4 8 4v10l-8 4-8-4z" />
          <path d="M12 4v18M4 8l8 4 8-4" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" />
          <path d="M19 3v2M20 4h-2" />
        </svg>
      );
  }
}

function JourneyBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <BackgroundDecorations variant="corners" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(200,168,107,0.09) 0%, rgba(232,213,181,0.04) 40%, transparent 72%)",
        }}
      />
    </div>
  );
}

type StepData = {
  number: string;
  title: string;
  description: string;
};

function ProcessCircle({
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
  const size = compact ? "h-11 w-11" : "h-[3.75rem] w-[3.75rem] lg:h-16 lg:w-16";
  const isHighlighted = active || completed;

  return (
    <div
      className={`relative flex ${size} shrink-0 items-center justify-center rounded-full border-[1.5px] bg-white transition-all duration-700 ease-out lg:group-hover:-translate-y-0.5 lg:group-hover:shadow-[0_8px_28px_rgba(200,168,107,0.22)]`}
      style={{
        borderColor: isHighlighted ? GOLD : `${GOLD}BB`,
        backgroundColor: active ? GOLD : completed ? CHAMPAGNE : "#FFFFFF",
        boxShadow: active
          ? "0 6px 24px rgba(200,168,107,0.35), 0 0 0 6px rgba(232,213,181,0.25)"
          : completed
            ? "0 4px 16px rgba(200,168,107,0.15)"
            : "0 3px 14px rgba(45,45,45,0.07), 0 1px 3px rgba(45,45,45,0.04)",
        transform: active ? "scale(1.06)" : "scale(1)",
      }}
    >
      <span
        className={`font-serif tracking-[0.14em] ${
          compact ? "text-[0.55rem]" : "text-[0.65rem] lg:text-xs"
        }`}
        style={{ color: active ? "#FFFFFF" : GOLD_DEEP }}
      >
        {number}
      </span>
    </div>
  );
}

function ProcessStepContent({
  step,
  index,
  activeIndex,
  compact = false,
}: {
  step: StepData;
  index: number;
  activeIndex: number;
  compact?: boolean;
}) {
  const icon = STEP_ICONS[index] ?? "sparkle";
  const isActive = activeIndex === index;
  const isCompleted = activeIndex > index;

  return (
    <article className="group flex flex-col items-center text-center">
      <ProcessCircle
        number={step.number}
        active={isActive}
        completed={isCompleted}
        compact={compact}
      />
      <div
        className={`mt-2 flex items-center justify-center transition-opacity duration-500 ${
          isActive ? "opacity-80" : "opacity-45"
        } ${compact ? "mt-1.5" : "mt-2.5 lg:mt-3"}`}
        style={{ color: GOLD_DEEP }}
      >
        <StepIconSvg icon={icon} className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} />
      </div>
      <h3
        className={`mt-1 font-serif font-semibold leading-tight ${
          compact ? "text-[11px]" : "text-sm lg:text-[0.95rem]"
        }`}
        style={{ color: TEXT }}
      >
        {step.title}
      </h3>
      <p
        className={`mt-0.5 line-clamp-2 font-light leading-snug ${
          compact
            ? "max-w-[6.5rem] text-[8.5px]"
            : "mt-1 max-w-[10.5rem] text-[10px] lg:max-w-[11.5rem] lg:text-[11px]"
        }`}
        style={{ color: MUTED }}
      >
        {step.description}
      </p>
    </article>
  );
}

const SEGMENT_DURATION = 0.85;
const STEP_DELAY = 0.55;

function ProcessMobileJourney({
  steps,
  activeIndex,
  animate,
}: {
  steps: StepData[];
  activeIndex: number;
  animate: boolean;
}) {
  const gradId = "mobile-stem";
  const revealSteps = !animate || activeIndex < 0;

  return (
    <div className="relative mx-auto mt-7 h-[min(67dvh,30rem)] w-full max-w-sm lg:hidden">
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <StemDefs id={gradId} />
        {MOBILE_STEM_SEGMENTS.map((d, i) => (
          <g key={i}>
            {/* Glow underlay */}
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
            {/* Main stem */}
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
        const point = MOBILE_POINTS[index];
        return (
          <div
            key={step.number}
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
                  number={step.number}
                  active={activeIndex === index}
                  completed={activeIndex > index}
                  compact
                />
              </div>
              <div className="-mt-1 flex flex-col items-center">
                <div
                  className="flex items-center justify-center opacity-45"
                  style={{ color: GOLD_DEEP }}
                >
                  <StepIconSvg
                    icon={STEP_ICONS[index] ?? "sparkle"}
                    className="h-3 w-3"
                  />
                </div>
                <h3
                  className="mt-0.5 font-serif text-[11px] font-semibold leading-tight"
                  style={{ color: TEXT }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-0.5 line-clamp-2 max-w-[6.5rem] text-[8.5px] font-light leading-snug"
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

function ProcessDesktopJourney({
  steps,
  activeIndex,
  animate,
}: {
  steps: StepData[];
  activeIndex: number;
  animate: boolean;
}) {
  const gradId = "desktop-stem";

  return (
    <div className="mt-16 hidden lg:block">
      <div className="relative flex items-start justify-between gap-0">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-1 items-start">
            <motion.div
              className="flex flex-1 flex-col items-center"
              initial={false}
              animate={{
                opacity: activeIndex >= index ? 1 : 0.4,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: animate ? index * STEP_DELAY : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProcessStepContent
                step={step}
                index={index}
                activeIndex={activeIndex}
              />
            </motion.div>

            {index < steps.length - 1 ? (
              <div
                className="flex w-12 shrink-0 items-center justify-center self-start pt-8 xl:w-16"
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
                    strokeWidth={2.5}
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
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15, margin: "0px 0px -80px 0px" });
  const reducedMotion = useReducedMotion();
  const activeIndex = useProgressiveActiveIndex(
    inView,
    process.steps.length,
    reducedMotion,
  );
  const animate = inView && !reducedMotion;

  return (
    <PremiumSection
      id="process"
      tone="ivory"
      noPadding
      className="py-12 lg:section-py"
      floral="none"
      sectionRef={sectionRef}
    >
      <JourneyBackdrop />

      <div className="container-dflowers relative z-[1] mx-auto max-w-6xl">
        <header className="text-center lg:text-start">
          <h2
            className="font-serif text-2xl font-light tracking-wide sm:text-3xl"
            style={{ color: TEXT }}
          >
            {process.title}
          </h2>
          <span
            className="rule-gold mx-auto mt-3 lg:mx-0"
            aria-hidden="true"
          />
          <p
            className="mx-auto mt-3 max-w-md text-sm font-light lg:mx-0"
            style={{ color: MUTED }}
          >
            {process.subtitle}
          </p>
        </header>

        <ProcessMobileJourney
          steps={process.steps}
          activeIndex={activeIndex}
          animate={animate}
        />
        <ProcessDesktopJourney
          steps={process.steps}
          activeIndex={activeIndex}
          animate={animate}
        />
      </div>
    </PremiumSection>
  );
}
