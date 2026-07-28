"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CTAButton } from "@/components/ui/CTAButton";

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

export function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-ivory/95 shadow-sm shadow-ink/5 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-dreamline flex h-[--header-height] items-center justify-between gap-4">
        <a href="#" className="group shrink-0" aria-label={`${site.brand.name} — דף הבית`}>
          <BrandLogo size="md" showTagline={false} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="ניווט ראשי">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-terracotta-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 sm:block">
          <CTAButton href="#final-cta" label={site.hero.ctaLabel} size="sm" showArrow={false} />
        </div>
      </div>
    </header>
  );
}
