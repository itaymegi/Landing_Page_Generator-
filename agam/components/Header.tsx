"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CTAButton } from "@/components/ui/CTAButton";
import { MobileNav } from "@/components/ui/MobileNav";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { consultationHref, site, siteWhatsAppHref } from "@/config/site";
import { treatmentCategories, treatmentHref } from "@/config/treatments";

const TREATMENTS_HREF = "/#categories";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const treatmentsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!treatmentsOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!treatmentsRef.current?.contains(event.target as Node)) {
        setTreatmentsOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTreatmentsOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [treatmentsOpen]);

  const iconClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-ink-muted transition-all duration-400 hover:border-gold hover:text-gold-deep";
  const navLinkClass =
    "relative inline-flex min-h-11 items-center whitespace-nowrap text-[0.8125rem] tracking-[0.08em] text-ink-muted transition-colors duration-400 after:absolute after:inset-x-0 after:bottom-2 after:mx-auto after:h-px after:w-0 after:bg-gold after:transition-all after:duration-400 hover:text-charcoal hover:after:w-full";

  return (
    <>
      <header
        className={`inset-x-0 top-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "border-b border-line/70 bg-ivory/92 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
        style={{ height: "var(--header-height)" }}
      >
        <div className="container-agam flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`${site.brand.name} — לראש העמוד`}
            className="inline-flex min-h-11 shrink-0 items-center"
          >
            <BrandLogo mark />
          </Link>

          <nav aria-label="ניווט ראשי" className="hidden lg:block">
            <ul className="flex items-center gap-4 xl:gap-7">
              {site.nav.map((link) => {
                if (link.href !== TREATMENTS_HREF) {
                  return (
                    <li key={link.href}>
                      <Link href={link.href} className={navLinkClass}>
                        {link.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li
                    key={link.href}
                    ref={treatmentsRef}
                    className="relative"
                    onMouseEnter={() => setTreatmentsOpen(true)}
                    onMouseLeave={() => setTreatmentsOpen(false)}
                  >
                    <div className={`${navLinkClass} gap-1.5`}>
                      <Link href={TREATMENTS_HREF}>{link.label}</Link>
                      <button
                        type="button"
                        aria-expanded={treatmentsOpen}
                        aria-haspopup="true"
                        aria-label="פתיחת תפריט תחומי הטיפול"
                        onClick={() => setTreatmentsOpen((value) => !value)}
                        className="inline-flex h-11 w-7 items-center justify-center"
                      >
                        <svg
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                          className={`h-2.5 w-2.5 transition-transform duration-400 ${
                            treatmentsOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M2.5 4.5 6 8l3.5-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <div
                      className={`absolute end-0 top-full z-50 w-[30rem] pt-3 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        treatmentsOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1.5 opacity-0"
                      }`}
                    >
                      <div className="rounded-[18px] border border-gold/20 bg-marble p-3 shadow-[0_28px_64px_rgba(31,30,28,0.12)]">
                        <ul className="grid grid-cols-2 gap-0.5">
                          {treatmentCategories.map((category) => (
                            <li key={category.id}>
                              <Link
                                href={treatmentHref(category.slug)}
                                onClick={() => setTreatmentsOpen(false)}
                                className="flex min-h-11 items-center justify-between gap-3 rounded-xl px-4 text-[0.875rem] text-ink-muted transition-colors duration-300 hover:bg-cream hover:text-charcoal"
                              >
                                {category.title}
                                <span className="font-serif-en text-[0.5625rem] tracking-[0.18em] text-ink-faint">
                                  {category.titleEn}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href={TREATMENTS_HREF}
                          onClick={() => setTreatmentsOpen(false)}
                          className="mt-2 flex min-h-11 items-center justify-center rounded-xl border-t border-line/70 text-[0.75rem] tracking-[0.12em] text-gold-deep transition-colors duration-300 hover:text-charcoal"
                        >
                          לכל תחומי הטיפול
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`אינסטגרם ${site.contact.instagramHandle}`}
              className={`${iconClass} hidden sm:inline-flex`}
            >
              <InstagramIcon />
            </a>
            <a
              href={site.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`פייסבוק ${site.brand.name}`}
              className={`${iconClass} hidden sm:inline-flex lg:hidden xl:inline-flex`}
            >
              <FacebookIcon />
            </a>
            <a
              href={site.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`טיקטוק ${site.contact.tiktokHandle}`}
              className={`${iconClass} hidden sm:inline-flex lg:hidden xl:inline-flex`}
            >
              <TikTokIcon />
            </a>
            <a
              href={siteWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="שיחה בוואטסאפ"
              className={`${iconClass} hidden sm:inline-flex`}
            >
              <WhatsAppIcon />
            </a>

            <CTAButton
              href={consultationHref()}
              variant="primary"
              external
              fullWidthOnMobile={false}
              className="!hidden min-h-11 whitespace-nowrap px-5 text-[0.8125rem] lg:!inline-flex xl:px-6"
            >
              {site.hero.primaryCta}
            </CTAButton>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="פתיחת התפריט"
              aria-expanded={menuOpen}
              className="inline-flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-gold/25 lg:hidden"
            >
              <span className="block h-px w-4 bg-charcoal" />
              <span className="block h-px w-4 bg-charcoal" />
              <span className="block h-px w-2.5 self-center bg-gold-deep" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
