"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { WhatsAppIcon } from "@/components/ui/icons";
import { consultationHref, site, siteWhatsAppHref } from "@/config/site";

/** Hidden over the hero and over the closing CTA, where inline buttons already exist. */
export function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const finalCta = document.getElementById("contact");
    const watched = [hero, finalCta].filter(
      (node): node is HTMLElement => node !== null,
    );
    if (watched.length === 0) return;

    const overlapping = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            overlapping.add(entry.target.id);
          } else {
            overlapping.delete(entry.target.id);
          }
        });
        setVisible(overlapping.size === 0);
      },
      { threshold: 0.12 },
    );

    watched.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-marble/95 px-3 pb-[calc(0.625rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-md transition-all duration-500 sm:hidden ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <CTAButton
          href={consultationHref()}
          variant="primary"
          external
          fullWidthOnMobile={false}
          className="min-h-12 flex-1 px-4 text-sm tracking-[0.04em]"
        >
          {site.hero.primaryCta}
        </CTAButton>
        <a
          href={siteWhatsAppHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שיחה בוואטסאפ"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors duration-400 hover:border-gold hover:bg-cream"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
}
