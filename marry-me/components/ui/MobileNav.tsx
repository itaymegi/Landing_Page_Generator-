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
        className="absolute inset-0 bg-charcoal/35 backdrop-blur-md"
        aria-label="סגירת התפריט"
        onClick={onClose}
      />

      <div className="pointer-events-none absolute inset-y-0 end-0 flex w-[min(100%,22rem)] max-w-full flex-col p-3 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:p-4">
        <div className="pointer-events-auto flex h-full flex-col rounded-[1.5rem] border border-warm-white/50 bg-warm-white/80 shadow-[0_24px_64px_rgba(42,38,34,0.18)] backdrop-blur-xl">
          <div className="flex items-center justify-between px-5 pt-4">
            <p className="font-serif-en text-sm tracking-[0.28em] text-charcoal uppercase">
              {site.brand.logoText}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="סגירת התפריט"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-charcoal"
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="ניווט מובייל" className="mt-6 flex-1 overflow-y-auto px-5">
            <ul className="space-y-0.5">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 font-serif text-2xl font-light text-charcoal transition-colors hover:text-gold-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-between gap-3 border-t border-line/70 px-5 py-4">
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-muted"
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href={siteWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="שיחה בוואטסאפ"
              onClick={onClose}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-warm-white transition-colors duration-300 hover:bg-charcoal-soft"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
