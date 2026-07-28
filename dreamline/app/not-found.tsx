import Link from "next/link";
import { siteWhatsAppHref } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CTAButton } from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ivory px-4 text-center">
      <BrandLogo size="lg" showTagline={false} />
      <h1 className="mt-8 text-3xl font-medium tracking-tight text-ink sm:text-4xl">העמוד לא נמצא</h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        נראה שהגעתם לכתובת שלא קיימת. בואו נחזור ליצירות שלנו.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-terracotta/50 px-8 text-base font-medium text-terracotta-deep transition-colors hover:bg-terracotta/6"
        >
          חזרה לדף הבית
        </Link>
        <CTAButton href={siteWhatsAppHref()} label="נשמח לעזור" external showArrow={false} />
      </div>
    </div>
  );
}
