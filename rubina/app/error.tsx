"use client";

import Link from "next/link";
import { useEffect } from "react";
import { site, siteWhatsAppHref } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-parchment px-4 text-center">
      <BrandLogo size="lg" showTagline={false} />
      <h1 className="mt-8 font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl">
        משהו השתבש
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-text/70">
        אירעה שגיאה בטעינת העמוד. אפשר לנסות שוב או לחזור לדף הבית.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/80 px-8 text-base font-medium text-gold-deep transition-colors hover:bg-gold/8"
        >
          ניסיון נוסף
        </button>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-8 text-base font-medium text-white transition-colors hover:bg-gold-deep"
        >
          חזרה לדף הבית
        </Link>
        <a
          href={siteWhatsAppHref(site.contact.whatsappDefaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-brown/15 px-8 text-base font-medium text-brown/80 transition-colors hover:border-gold/40 hover:text-gold-deep"
        >
          {site.contactSection.whatsappLabel}
        </a>
      </div>
    </div>
  );
}
