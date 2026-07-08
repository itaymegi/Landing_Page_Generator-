"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { site } from "@/config/site";

const GOLD = "#C8A86B";
const TEXT = "#2D2D2D";
const MUTED = "#777777";

/** Zig-zag anchor points (viewBox 0–100) — RTL: step 01 starts top-right */
const MOBILE_POINTS = [
  { x: 76, y: 6 },
  { x: 24, y: 24 },
  { x: 76, y: 42 },
  { x: 24, y: 60 },
  { x: 76, y: 78 },
] as const;

function buildZigZagPath(points: readonly { x: number; y: number }[]) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx1 = prev.x;
    const cpy1 = prev.y + (curr.y - prev.y) * 0.55;
    const cpx2 = curr.x;
    const cpy2 = curr.y - (curr.y - prev.y) * 0.45;
    d += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${curr.x} ${curr.y}`;
  }
  return d;
}

const MOBILE_PATH = buildZigZagPath(MOBILE_POINTS);

function buildDesktopVinePath(flip: boolean) {
  if (flip) {
    return "M 4 20 C 14 20, 18 6, 44 4";
  }
  return "M 4 4 C 14 4, 18 18, 44 20";
}

function BotanicalBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute -end-8 -top-6 h-48 w-48 opacity-[0.035]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M60 110 C40 90 20 70 30 45 C38 25 55 15 60 5 C65 15 82 25 90 45 C100 70 80 90 60 110Z"
          stroke={GOLD}
          strokeWidth="0.75"
        />
        <path
          d="M60 50 C50 35 35 30 25 40 M60 50 C70 35 85 30 95 40"
          stroke={GOLD}
          strokeWidth="0.5"
        />
      </svg>
      <svg
        className="absolute -bottom-4 -start-6 h-40 w-40 opacity-[0.03]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <ellipse cx="50" cy="50" rx="38" ry="28" stroke={GOLD} strokeWidth="0.6" />
        <path
          d="M50 22 C35 35 30 55 50 78 C70 55 65 35 50 22Z"
          stroke={GOLD}
          strokeWidth="0.5"
        />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,168,107,0.04) 0%, transparent 70%)",
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
  compact = false,
}: {
  number: string;
  compact?: boolean;
}) {
  const size = compact ? "h-10 w-10" : "h-14 w-14 lg:h-16 lg:w-16";
  const numSize = compact ? "text-[0.65rem]" : "text-sm lg:text-base";

  return (
    <div
      className={`group relative flex ${size} shrink-0 items-center justify-center rounded-full border bg-white transition-shadow duration-500`}
      style={{
        borderColor: `${GOLD}99`,
        boxShadow:
          "0 2px 12px rgba(45,45,45,0.06), 0 0 0 0 rgba(200,168,107,0)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `0 0 20px 4px ${GOLD}33` }}
      />
      <span
        className={`font-serif ${numSize} tracking-[0.12em]`}
        style={{ color: GOLD }}
      >
        {number}
      </span>
    </div>
  );
}

function ProcessStepContent({
  step,
  compact = false,
  variants,
}: {
  step: StepData;
  compact?: boolean;
  variants?: Variants;
}) {
  return (
    <motion.article
      variants={variants}
      className="flex flex-col items-center text-center"
    >
      <ProcessCircle number={step.number} compact={compact} />
      <h3
        className={`mt-1.5 font-serif font-medium leading-tight lg:mt-3 ${
          compact ? "text-[11px]" : "text-sm lg:text-base"
        }`}
        style={{ color: TEXT }}
      >
        {step.title}
      </h3>
      <p
        className={`mt-0.5 leading-snug lg:mt-1.5 ${
          compact
            ? "line-clamp-1 max-w-[6rem] text-[9px]"
            : "max-w-[10rem] text-xs lg:max-w-[11rem] lg:text-sm"
        }`}
        style={{ color: MUTED }}
      >
        {step.description}
      </p>
    </motion.article>
  );
}

const stepVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProcessMobileJourney({
  steps,
  show,
  animatePaths,
}: {
  steps: StepData[];
  show: boolean;
  animatePaths: boolean;
}) {
  const pathTransition = {
    duration: 2.2,
    ease: [0.42, 0, 0.18, 1] as [number, number, number, number],
  };

  return (
    <div className="relative mx-auto mt-5 h-[min(58dvh,26rem)] w-full max-w-sm lg:hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d={MOBILE_PATH}
          fill="none"
          stroke={GOLD}
          strokeWidth="0.35"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ opacity: 0.55 }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: show ? 1 : 0 }}
          transition={animatePaths ? pathTransition : { duration: 0 }}
        />
      </svg>

      {steps.map((step, index) => {
        const point = MOBILE_POINTS[index];
        return (
          <motion.div
            key={step.number}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
            initial="hidden"
            animate={show ? "visible" : "hidden"}
            variants={stepVariants}
            transition={{
              delay: animatePaths ? 0.15 + index * 0.38 : 0,
            }}
          >
            <ProcessStepContent step={step} compact />
          </motion.div>
        );
      })}
    </div>
  );
}

function ProcessDesktopJourney({
  steps,
  show,
  animatePaths,
}: {
  steps: StepData[];
  show: boolean;
  animatePaths: boolean;
}) {
  return (
    <div className="mt-14 hidden lg:block">
      <div className="flex items-start justify-between gap-1">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-1 items-start">
            <motion.div
              className="flex flex-1 flex-col items-center"
              initial="hidden"
              animate={show ? "visible" : "hidden"}
              variants={stepVariants}
              transition={{
                delay: animatePaths ? 0.2 + index * 0.35 : 0,
              }}
            >
              <ProcessStepContent step={step} />
            </motion.div>

            {index < steps.length - 1 ? (
              <div
                className="flex w-10 shrink-0 items-center justify-center pt-7 xl:w-14"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 48 24"
                  className="h-5 w-full xl:h-6"
                  fill="none"
                >
                  <motion.path
                    d={buildDesktopVinePath(index % 2 === 1)}
                    stroke={GOLD}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    style={{ opacity: 0.6 }}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: show ? 1 : 0 }}
                    transition={{
                      delay: animatePaths ? 0.45 + index * 0.35 : 0,
                      duration: animatePaths ? 0.7 : 0,
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

export function Process() {
  const { process } = site;
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });
  const reducedMotion = useReducedMotion();
  const show = inView;
  const animatePaths = inView && !reducedMotion;

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden py-10 lg:section-py"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      <BotanicalBackdrop />

      <div className="container-dflowers relative mx-auto max-w-6xl">
        <motion.header
          className="text-center lg:text-start"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h2
            className="font-serif text-2xl font-light tracking-wide sm:text-3xl"
            style={{ color: TEXT }}
          >
            {process.title}
          </h2>
          <span
            className="mx-auto mt-3 block h-px w-10 lg:mx-0"
            style={{ backgroundColor: GOLD }}
            aria-hidden="true"
          />
          <p
            className="mx-auto mt-3 max-w-md text-sm lg:mx-0"
            style={{ color: MUTED }}
          >
            {process.subtitle}
          </p>
        </motion.header>

        <ProcessMobileJourney steps={process.steps} show={show} animatePaths={animatePaths} />
        <ProcessDesktopJourney steps={process.steps} show={show} animatePaths={animatePaths} />
      </div>
    </section>
  );
}
