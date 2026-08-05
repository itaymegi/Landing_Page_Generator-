"use client";

import Link from "next/link";
import { CloseIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { useScrollLock } from "@/components/ui/useScrollLock";
import { site, siteWhatsAppHref } from "@/config/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  useScrollLock(open);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="תפריט ניווט"
    >
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/30 backdrop-blur-[2px]"
        aria-label="סגירת התפריט"
        onClick={onClose}
      />

      <div className="pointer-events-none absolute inset-x-0 top-[calc(0.75rem+env(safe-area-inset-top))] flex justify-center px-4 sm:justify-end sm:px-5">
        <div className="pointer-events-auto flex max-h-[min(78dvh,34rem)] w-full max-w-[18.5rem] flex-col overflow-hidden rounded-[1.35rem] border border-gold/20 bg-warm-white/95 shadow-[0_20px_48px_rgba(42,38,34,0.16)] backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 pt-3.5">
            <p className="font-serif-en text-xs tracking-[0.26em] text-charcoal uppercase">
              {site.brand.logoText}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="סגירת התפריט"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-charcoal"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <nav
            aria-label="ניווט מובייל"
            className="mt-3 flex-1 overflow-y-auto px-4"
          >
            <ul className="divide-y divide-line/70 border-y border-line/70">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex min-h-12 items-center font-serif text-[1.05rem] font-light text-charcoal transition-colors hover:text-gold-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-center gap-3 px-4 py-4">
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-charcoal transition-colors duration-300 hover:border-gold hover:text-gold-deep"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={siteWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="שיחה בוואטסאפ"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-warm-white transition-colors duration-300 hover:bg-charcoal-soft"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
