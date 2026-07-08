"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { site, siteWhatsAppHref } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";
import { MobileNav } from "@/components/ui/MobileNav";

let scrolledSnapshot = false;

function getScrolledSnapshot() {
  if (typeof window === "undefined") return false;
  const y = window.scrollY;
  scrolledSnapshot = scrolledSnapshot ? y > 8 : y > 24;
  return scrolledSnapshot;
}

function useScrolled() {
  return useSyncExternalStore(
    (onStoreChange) => {
      let lastValue = getScrolledSnapshot();

      const update = () => {
        const next = getScrolledSnapshot();
        if (next !== lastValue) {
          lastValue = next;
          onStoreChange();
        }
      };

      window.addEventListener("scroll", update, { passive: true });
      return () => window.removeEventListener("scroll", update);
    },
    getScrolledSnapshot,
    () => false,
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

type HeaderProps = {
  variant?: "default" | "solid";
};

export function Header({ variant = "default" }: HeaderProps) {
  const scrolled = useScrolled();
  const solid = variant === "solid" || scrolled;
  const inverse = variant === "default" && !scrolled;

  const iconLinkClass = `inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors ${
    inverse ? "text-white/90 hover:text-white" : "text-text-muted hover:text-accent-deep"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border bg-card/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-dflowers flex h-16 items-center justify-between gap-3 lg:h-[4.5rem] lg:gap-4">
        <Link href="/" className="shrink-0" aria-label={`${site.brand.name} — דף הבית`}>
          <BrandLogo inverse={inverse} size="sm" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="ניווט ראשי">
          {site.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                inverse
                  ? "text-white/85 hover:text-white"
                  : "text-text-muted hover:text-accent-deep"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <MobileNav inverse={inverse} />
          <a
            href={siteWhatsAppHref("היי, אשמח לקבוע פגישת ייעוץ.")}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLinkClass}
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            href={site.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLinkClass}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
