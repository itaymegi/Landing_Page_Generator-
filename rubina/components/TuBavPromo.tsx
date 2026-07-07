"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { galleryFocus, site, whatsappHref } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";
import { HydrationSafeButton } from "@/components/ui/HydrationSafeButton";

/* ------------------------------------------------------------------ *
 * Tu B'Av temporary campaign — single source of truth.
 * To disable: set `enabled: false`.
 * To remove after the holiday: delete this file + its usage in page.tsx.
 * ------------------------------------------------------------------ */
const TU_BAV = {
  enabled: true,
  delayMs: 10000,
  /** Open when user has scrolled this fraction of the page (or after delayMs). */
  scrollThreshold: 0.28,
  storageKey: "rubina_tubav_dismissed_v1",
  whatsappNumber: "972527836631",
  eyebrow: "מארזים רומנטיים לרגעים זוגיים",
  headline: "ט״ו באב · מהדורה מוגבלת",
  subline: "Sunset & Sunrise basket",
  detailsNote: "לפרטים מלאים — שלחו הודעה",
  closeLabel: "סגור",
  dismissLabel: "הבנתי, תודה",
  boxes: [
    {
      id: "sunset",
      name: "Sunset",
      tagline: "שקיעה רומנטית — גבינות, יין ופינוקים מתוקים",
      image: "/images/product-sunset1.jpg",
      objectPosition: galleryFocus.picnic,
      highlights: [
        "פלטה של 6 סוגי גבינות",
        "יין, לאבנה, לחם וחמאה",
        "שוקולד, מקרונים ושדרוגים מיוחדים",
      ],
      priceNote: "מחיר השקה יפורסם בקרוב",
      whatsappMessage:
        "היי, אשמח לקבל פרטים על מארז Sunset לט״ו באב של Rubina",
    },
    {
      id: "sunrise",
      name: "Sunrise",
      tagline: "בוקר בשדה — מארז עדין לזוגות",
      image: "/images/product-sunrise1.jpg",
      objectPosition: galleryFocus.picnic,
      highlights: [
        "פלטה של 4 סוגי גבינות",
        "יין, לאבנה, לחם וחמאה",
        "שוקולד, מקרונים ושדרוגים מיוחדים",
      ],
      priceNote: "מחיר השקה יפורסם בקרוב",
      whatsappMessage:
        "היי, אשמח לקבל פרטים על מארז Sunrise לט״ו באב של Rubina",
    },
  ],
} as const;

type BoxId = (typeof TU_BAV.boxes)[number]["id"];

export function TuBavPromo() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<BoxId>("sunset");
  const openedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Open after delay OR scroll — whichever comes first; session-guarded. */
  useEffect(() => {
    if (!TU_BAV.enabled) return;

    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(TU_BAV.storageKey) === "1";
    } catch {
      dismissed = false;
    }
    if (dismissed) return;

    const tryOpen = () => {
      if (openedRef.current) return;
      openedRef.current = true;
      setOpen(true);
    };

    const timer = window.setTimeout(tryOpen, TU_BAV.delayMs);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      if (window.scrollY / max >= TU_BAV.scrollThreshold) tryOpen();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(TU_BAV.storageKey, "1");
    } catch {
      /* sessionStorage unavailable */
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, handleClose]);

  if (!TU_BAV.enabled || !mounted || !open) return null;

  const active =
    TU_BAV.boxes.find((b) => b.id === selected) ?? TU_BAV.boxes[0];
  const href = whatsappHref(TU_BAV.whatsappNumber, active.whatsappMessage);

  return createPortal(
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-brown/40 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={TU_BAV.headline}
      onClick={handleClose}
    >
      <div
        className="tubav-enter relative max-h-[90vh] w-full max-w-md overflow-y-auto overflow-x-hidden rounded-2xl border border-cream/80 bg-parchment shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <HydrationSafeButton
          type="button"
          onClick={handleClose}
          className="absolute end-3 top-3 z-10 flex min-h-10 min-w-10 items-center justify-center rounded-full text-brown/50 transition-colors hover:bg-cream/60 hover:text-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label={TU_BAV.closeLabel}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.25}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </HydrationSafeButton>

        {/* Header */}
        <div className="px-6 pt-8 text-center sm:px-8 sm:pt-9">
          <p className="text-sm font-light leading-relaxed text-brown/65">
            {TU_BAV.eyebrow}
          </p>
          <h2 className="mx-auto mt-3 font-serif text-2xl font-light leading-snug tracking-wide text-brown sm:text-3xl">
            {TU_BAV.headline}
          </h2>
          <p className="mx-auto mt-2 max-w-xs font-display text-sm uppercase tracking-[0.22em] text-gold-deep">
            {TU_BAV.subline}
          </p>
          <span className="rule-gold rule-gold-center mt-5" aria-hidden="true" />
        </div>

        {/* Hero image */}
        <div className="mx-6 mt-6 overflow-hidden rounded-xl ring-1 ring-gold/20 sm:mx-8">
          <div className="relative aspect-[4/5] w-full bg-cream/30">
            <Image
              key={active.image}
              src={active.image}
              alt={`מארז ${active.name} — מארז ט״ו באב`}
              fill
              className="object-cover transition-opacity duration-500"
              style={{ objectPosition: active.objectPosition ?? galleryFocus.picnic }}
              sizes="(max-width: 448px) 100vw, 448px"
              priority
            />
          </div>
        </div>

        {/* Box selector */}
        <div
          className="mx-6 mt-4 flex gap-2 sm:mx-8"
          role="tablist"
          aria-label="בחירת מארז"
        >
          {TU_BAV.boxes.map((box) => {
            const isActive = box.id === selected;
            return (
              <HydrationSafeButton
                key={box.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelected(box.id)}
                className={`min-h-11 flex-1 rounded-lg border px-3 py-2.5 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive
                    ? "border-gold/50 bg-white text-brown shadow-sm"
                    : "border-cream bg-cream/20 text-brown/55 hover:border-gold/30 hover:bg-cream/40"
                }`}
              >
                <span className="block font-display text-sm tracking-wide">
                  {box.name}
                </span>
              </HydrationSafeButton>
            );
          })}
        </div>

        {/* Selected box details */}
        <div className="px-6 pb-2 pt-4 sm:px-8">
          <p className="text-center font-serif text-base font-light text-brown/80">
            מארז {active.name}
          </p>
          <p className="mt-1 text-center text-xs font-light leading-relaxed text-brown/55">
            {active.tagline}
          </p>

          <ul className="mt-4 space-y-2 border-t border-cream pt-4">
            {active.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-light leading-relaxed text-text/70"
              >
                <span className="mt-2 h-px w-3 shrink-0 bg-gold/50" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-center text-sm text-gold-deep">
            {active.priceNote}
          </p>
          <p className="mt-1 text-center text-xs text-brown/45">
            {TU_BAV.detailsNote}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3 px-6 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-5 sm:px-8 sm:pb-7">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 font-serif text-base font-light text-white shadow-sm transition-colors duration-300 hover:bg-gold-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-parchment"
          >
            <span>
              {active.name} — {site.contactSection.whatsappLabel}
            </span>
            <WhatsAppIcon />
          </a>
          <HydrationSafeButton
            type="button"
            onClick={handleClose}
            className="mx-auto block min-h-10 px-4 text-sm font-light text-brown/45 underline-offset-4 transition-colors hover:text-brown/70 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {TU_BAV.dismissLabel}
          </HydrationSafeButton>
        </div>
      </div>
    </div>,
    document.body,
  );
}
