"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

type BeforeAfterSliderProps = {
  before: string;
  beforeAlt: string;
  after: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  ariaLabel: string;
  aspectClassName?: string;
  objectPosition?: string;
  sizes?: string;
  rounded?: string;
  priority?: boolean;
  /** Smaller handle and pills for card-sized sliders. */
  compact?: boolean;
};

const STEP = 4;

export function BeforeAfterSlider({
  before,
  beforeAlt,
  after,
  afterAlt,
  beforeLabel,
  afterLabel,
  ariaLabel,
  aspectClassName = "aspect-[4/5]",
  objectPosition = "object-center",
  sizes = "(max-width: 1024px) 92vw, 46vw",
  rounded = "rounded-[18px]",
  priority = false,
  compact = false,
}: BeforeAfterSliderProps) {
  const pill = compact
    ? "px-2.5 py-1 text-[0.5625rem]"
    : "px-3.5 py-1.5 text-[0.6875rem]";
  const pillBefore = compact ? "bottom-2.5 right-2.5" : "bottom-4 right-4";
  const pillAfter = compact ? "bottom-2.5 left-2.5" : "bottom-4 left-4";
  const handle = compact ? "h-8 w-8" : "h-11 w-11";
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    // A touch may still turn into a vertical scroll, so wait for real movement
    // before snapping the divider under the finger.
    if (event.pointerType !== "touch") updateFromClientX(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(event.clientX);
  };

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((value) => Math.max(0, value - STEP));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((value) => Math.min(100, value + STEP));
    }
    if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)}% מהתמונה שאחרי הטיפול`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onKeyDown={onKeyDown}
      className={`relative w-full touch-pan-y select-none overflow-hidden bg-sand ${rounded} ${aspectClassName}`}
    >
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes={sizes}
        quality={90}
        priority={priority}
        className={`object-cover ${objectPosition}`}
        draggable={false}
      />

      {/* RTL reading order: the "before" state occupies the right of the divider. */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes={sizes}
          quality={90}
          priority={priority}
          className={`object-cover ${objectPosition}`}
          draggable={false}
        />
      </div>

      <span
        className={`pointer-events-none absolute rounded-full bg-charcoal/70 tracking-[0.16em] text-ivory backdrop-blur-sm ${pillBefore} ${pill}`}
      >
        {beforeLabel}
      </span>
      <span
        className={`pointer-events-none absolute rounded-full bg-charcoal/70 tracking-[0.16em] text-ivory backdrop-blur-sm ${pillAfter} ${pill}`}
      >
        {afterLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-ivory/90 shadow-[0_0_16px_rgba(31,30,28,0.35)]"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span
          className={`absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/70 bg-marble/95 shadow-lg ${handle}`}
        >
          <span className="flex items-center gap-[3px]">
            <span className="block h-3 w-px bg-gold-deep" />
            <span className="block h-4 w-px bg-gold-deep" />
            <span className="block h-3 w-px bg-gold-deep" />
          </span>
        </span>
      </div>
    </div>
  );
}
