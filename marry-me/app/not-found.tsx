import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CTAButton } from "@/components/ui/CTAButton";
import { site, siteWhatsAppHref } from "@/config/site";

export const metadata = {
  title: `הדף לא נמצא | ${site.brand.name}`,
  robots: { index: false, follow: false },
  alternates: { canonical: "/404" },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="flex min-h-[70vh] items-center justify-center bg-ivory px-6 py-24"
      >
        <div className="mx-auto max-w-lg text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-5 font-serif text-3xl font-light text-charcoal sm:text-4xl">
            הדף שחיפשת לא נמצא
          </h1>
          <p className="mt-4 text-base leading-[1.9] text-ink-muted">
            ייתכן שהקישור השתנה או שהדף הוסר. אפשר לחזור לעמוד הבית או לפנות אלינו
            ישירות.
          </p>
          <span className="rule-gold mx-auto mt-8" aria-hidden="true" />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="/" variant="primary" fullWidthOnMobile>
              חזרה לעמוד הבית
            </CTAButton>
            <CTAButton
              href={siteWhatsAppHref()}
              variant="outline"
              external
              fullWidthOnMobile
            >
              שיחה בוואטסאפ
            </CTAButton>
          </div>
          <p className="mt-6">
            <Link
              href="/#contact"
              className="text-[0.8125rem] tracking-[0.08em] text-gold-deep transition-colors duration-400 hover:text-charcoal"
            >
              ליצירת קשר
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
