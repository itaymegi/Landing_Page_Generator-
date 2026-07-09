"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { site } from "@/config/site";
import { useScrollLock } from "@/components/ui/useScrollLock";
import { requestCloseOverlays } from "@/components/ui/closeOverlays";

type MobileNavProps = {
  inverse?: boolean;
};

function MobileNavDrawer({ onClose }: { onClose: () => void }) {
  return (
    <>
      <motion.button
        type="button"
        className="fixed inset-0 z-[125] bg-text/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-label="סגירת תפריט"
      />
      <motion.nav
        className="fixed inset-y-0 end-0 z-[130] flex min-h-dvh w-[min(88vw,320px)] flex-col border-s border-border bg-card pb-[env(safe-area-inset-bottom)] shadow-2xl"
        style={{ right: 0 }}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        aria-label="ניווט נייד"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4 pt-[calc(1rem+env(safe-area-inset-top))]">
          <p className="font-serif text-lg text-text">ניווט</p>
          <button
            type="button"
            onClick={onClose}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent-deep"
            aria-label="סגור"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <span className="rule-gold mx-5 mt-6" aria-hidden="true" />

        <ul className="mt-6 flex flex-col gap-1 px-3">
          {site.nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block rounded-sm px-4 py-3.5 font-serif text-lg text-text transition-colors hover:bg-accent/8 hover:text-accent-deep"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function MobileNav({ inverse = false }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();

  const close = useCallback(() => {
    requestCloseOverlays();
    setOpen(false);
  }, []);

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const iconClass = inverse
    ? "text-white/90 hover:text-white"
    : "text-text-muted hover:text-accent-deep";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 rounded-full transition-colors ${iconClass}`}
        aria-label="פתיחת תפריט"
        aria-expanded={open}
      >
        <span className="block h-px w-5 bg-current" />
        <span className="block h-px w-5 bg-current" />
        <span className="block h-px w-5 bg-current" />
      </button>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {open ? <MobileNavDrawer onClose={close} /> : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
