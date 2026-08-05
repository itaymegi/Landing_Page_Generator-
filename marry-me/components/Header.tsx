"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/ui/MobileNav";
import {
  InstagramIcon,
  MenuIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { site, siteWhatsAppHref } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const navLinkClass =
    "relative inline-flex min-h-11 items-center whitespace-nowrap text-[0.8125rem] tracking-[0.08em] text-ink-muted transition-colors duration-400 after:absolute after:inset-x-0 after:bottom-2 after:mx-auto after:h-px after:w-0 after:bg-gold after:transition-all after:duration-400 hover:text-charcoal hover:after:w-full";

  return (
    <>
      <header
        className={`inset-x-0 top-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "border-b border-line/70 bg-ivory/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
        style={{ height: "var(--header-height)" }}
      >
        <div className="container-marry flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`${site.brand.name} — לראש העמוד`}
            className="inline-flex min-h-11 shrink-0 items-center"
          >
            <span
              className={`font-serif-en text-lg tracking-[0.22em] uppercase transition-colors duration-400 ${
                scrolled ? "text-charcoal" : "text-warm-white"
              }`}
            >
              {site.brand.logoText}
            </span>
          </Link>

          <nav aria-label="ניווט ראשי" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-7">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${navLinkClass} ${
                      scrolled ? "" : "text-warm-white/80 hover:text-warm-white after:bg-warm-white/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`hidden h-11 w-11 items-center justify-center rounded-full border transition-all duration-400 sm:inline-flex ${
                scrolled
                  ? "border-gold/25 text-ink-muted hover:border-gold hover:text-gold-deep"
                  : "border-warm-white/30 text-warm-white/85 hover:border-warm-white/70"
              }`}
            >
              <InstagramIcon />
            </a>

            <a
              href={siteWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="שיחה בוואטסאפ"
              className="hidden h-11 w-11 items-center justify-center rounded-full bg-charcoal text-warm-white transition-colors duration-300 hover:bg-charcoal-soft sm:inline-flex"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="פתיחת תפריט"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
                scrolled
                  ? "border-gold/30 text-charcoal"
                  : "border-warm-white/35 text-warm-white"
              }`}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
