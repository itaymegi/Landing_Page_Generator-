"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { siteWhatsAppHref } from "@/config/site";

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
      className={`fixed end-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 transition-all duration-500 sm:hidden ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={siteWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שיחה בוואטסאפ"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-warm-white shadow-[0_12px_32px_rgba(42,38,34,0.28)] transition-colors duration-300 hover:bg-charcoal-soft"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
