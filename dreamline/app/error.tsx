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
    <div className="flex min-h-screen flex-col items-center justify-center bg-ivory px-4 text-center">
      <BrandLogo size="lg" showTagline={false} />
      <h1 className="mt-8 text-3xl font-medium tracking-tight text-ink sm:text-4xl">משהו השתבש</h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        אירעה שגיאה בטעינת העמוד. אפשר לנסות שוב או לחזור לדף הבית.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-terracotta/50 px-8 text-base font-medium text-terracotta-deep transition-colors hover:bg-terracotta/6"
        >
          ניסיון נוסף
        </button>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-8 text-base font-medium text-white transition-colors hover:bg-terracotta-deep"
        >
          חזרה לדף הבית
        </Link>
        <a
          href={siteWhatsAppHref(site.contact.whatsappDefaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-8 text-base font-medium text-ink/80 transition-colors hover:border-terracotta/40 hover:text-terracotta-deep"
        >
          לפנייה בוואטסאפ
        </a>
      </div>
    </div>
  );
}
