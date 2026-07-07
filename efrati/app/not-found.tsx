import Link from "next/link";
import { site } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-parchment px-4 text-center">
        <BrandLogo size="lg" showTagline={false} />
        <h1 className="mt-8 font-serif text-3xl font-light tracking-wide text-brown sm:text-4xl">
          העמוד לא נמצא
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-text/70">
          נראה שהגעתם לכתובת שלא קיימת. בואו נחזור למארזים שלנו.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/80 px-8 text-base font-medium text-gold-deep transition-colors hover:bg-gold/8"
          >
            חזרה לדף הבית
          </Link>
          <WhatsAppButton label={site.contactSection.whatsappLabel} size="md" />
        </div>
      </div>
    </>
  );
}
