"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CTAButton } from "@/components/ui/CTAButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CloseIcon } from "@/components/ui/icons";
import { consultationHref, site } from "@/config/site";
import { treatmentCategories, treatmentHref } from "@/config/treatments";
import { useMounted } from "@/components/ui/useMounted";
import { useScrollLock } from "@/components/ui/useScrollLock";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

const TREATMENTS_HREF = "/#categories";

export function MobileNav({ open, onClose }: MobileNavProps) {
  const mounted = useMounted();
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-charcoal/40 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="תפריט ניווט"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 end-0 z-[100] flex w-[86%] max-w-sm flex-col bg-ivory px-6 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-6 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <BrandLogo size="sm" mark />
              <button
                type="button"
                onClick={onClose}
                aria-label="סגירת התפריט"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-charcoal"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="mt-10 flex-1 overflow-y-auto" data-lenis-prevent>
              <ul className="flex flex-col">
                {site.nav.map((link, index) => {
                  const isTreatments = link.href === TREATMENTS_HREF;
                  const number = String(index + 1).padStart(2, "0");

                  if (!isTreatments) {
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="flex min-h-14 items-center border-b border-line/70 font-serif text-lg font-light text-charcoal"
                        >
                          <span className="font-serif-en me-4 text-[0.625rem] tracking-[0.2em] text-gold-deep">
                            {number}
                          </span>
                          {link.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={link.href} className="border-b border-line/70">
                      <button
                        type="button"
                        aria-expanded={treatmentsOpen}
                        onClick={() => setTreatmentsOpen((value) => !value)}
                        className="flex min-h-14 w-full items-center justify-between font-serif text-lg font-light text-charcoal"
                      >
                        <span className="flex items-center">
                          <span className="font-serif-en me-4 text-[0.625rem] tracking-[0.2em] text-gold-deep">
                            {number}
                          </span>
                          {link.label}
                        </span>
                        <span
                          className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/25 text-gold-deep"
                          aria-hidden="true"
                        >
                          <span className="absolute block h-px w-2.5 bg-current" />
                          <span
                            className={`absolute block h-2.5 w-px bg-current transition-transform duration-400 ${
                              treatmentsOpen ? "scale-y-0" : "scale-y-100"
                            }`}
                          />
                        </span>
                      </button>

                      <div className="accordion-panel" data-open={treatmentsOpen}>
                        <div>
                          <ul className="pb-4 ps-8">
                            <li>
                              <Link
                                href={TREATMENTS_HREF}
                                onClick={onClose}
                                className="flex min-h-11 items-center text-[0.9375rem] tracking-[0.06em] text-gold-deep transition-colors duration-400 hover:text-charcoal"
                              >
                                לכל התחומים
                              </Link>
                            </li>
                            {treatmentCategories.map((category) => (
                              <li key={category.id}>
                                <Link
                                  href={treatmentHref(category.slug)}
                                  onClick={onClose}
                                  className="flex min-h-11 items-center text-[0.9375rem] text-ink-muted transition-colors duration-400 hover:text-charcoal"
                                >
                                  {category.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-8">
              <CTAButton
                href={consultationHref()}
                variant="primary"
                external
                fullWidthOnMobile
                className="w-full"
                ariaLabel={site.hero.primaryCta}
                onClick={onClose}
              >
                {site.hero.primaryCta}
              </CTAButton>
              <div className="mt-6 flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
