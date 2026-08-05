"use client";

import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { CloseIcon } from "@/components/ui/icons";
import { useMounted } from "@/components/ui/useMounted";
import { useScrollLock } from "@/components/ui/useScrollLock";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number;
  label: string;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

export function Lightbox({
  images,
  index,
  label,
  onClose,
  onNavigate,
}: LightboxProps) {
  const mounted = useMounted();
  useScrollLock(true);

  const goto = useCallback(
    (delta: number) => {
      onNavigate((index + delta + images.length) % images.length);
    },
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      // RTL: left arrow advances forward.
      if (event.key === "ArrowLeft") goto(1);
      if (event.key === "ArrowRight") goto(-1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goto, onClose]);

  if (!mounted) return null;

  const current = images[index];
  if (!current) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[120] flex flex-col bg-charcoal/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <p className="font-serif-en text-xs tracking-[0.3em] text-ivory/60">
          {index + 1} / {images.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="סגירת התצוגה"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors duration-300 hover:border-ivory/60"
        >
          <CloseIcon />
        </button>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="סגירת התצוגה"
        className="relative flex flex-1 cursor-zoom-out items-center justify-center px-4 pb-4"
      >
        <span className="relative block h-full w-full max-w-5xl">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="100vw"
            quality={90}
            className="object-contain"
          />
        </span>
      </button>

      <div className="flex items-center justify-center gap-4 px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={() => goto(-1)}
          aria-label="התמונה הקודמת"
          className="inline-flex min-h-11 items-center rounded-full border border-ivory/25 px-6 text-xs tracking-[0.16em] text-ivory/80 transition-colors duration-300 hover:border-ivory/60"
        >
          הקודם
        </button>
        {current.caption ? (
          <p className="hidden text-sm text-ivory/60 sm:block">{current.caption}</p>
        ) : null}
        <button
          type="button"
          onClick={() => goto(1)}
          aria-label="התמונה הבאה"
          className="inline-flex min-h-11 items-center rounded-full border border-ivory/25 px-6 text-xs tracking-[0.16em] text-ivory/80 transition-colors duration-300 hover:border-ivory/60"
        >
          הבא
        </button>
      </div>
    </div>,
    document.body,
  );
}
