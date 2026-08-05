import Link from "next/link";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { site, siteWhatsAppHref } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70 bg-ivory">
      <div className="container-marry py-10 sm:py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif-en text-lg tracking-[0.28em] text-charcoal uppercase">
              {site.brand.logoText}
            </p>
            <p className="mt-2 font-serif-en text-sm italic tracking-[0.06em] text-ink-muted">
              {site.footer.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-warm-white transition-colors hover:bg-charcoal-soft"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-ink-muted transition-colors hover:border-gold hover:text-gold-deep"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line/70 pt-5 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.brand.name}. {site.footer.rights}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-charcoal">
              מדיניות פרטיות
            </Link>
            <Link href="/terms" className="hover:text-charcoal">
              תנאי שימוש
            </Link>
            <Link href="/accessibility" className="hover:text-charcoal">
              הצהרת נגישות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
