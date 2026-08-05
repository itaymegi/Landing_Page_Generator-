import { FooterLegalLinks } from "@landing-legal/core";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ivory">
      <div className="container-agam py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <BrandLogo mark />
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-[1.9] text-ink-muted">
              {site.footer.tagline}
            </p>
            <div className="mt-7">
              <h2 className="text-[0.6875rem] tracking-[0.18em] text-gold-deep">
                {site.footer.followTitle}
              </h2>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>
          </div>

          <nav aria-label="ניווט בתחתית העמוד">
            <h2 className="text-[0.6875rem] tracking-[0.18em] text-gold-deep">
              {site.footer.navTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-[0.9375rem] text-ink-muted transition-colors duration-400 hover:text-charcoal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.6875rem] tracking-[0.18em] text-gold-deep">
              {site.footer.contactTitle}
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-ink-muted">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex min-h-11 items-center transition-colors duration-400 hover:text-charcoal"
                >
                  {site.contact.email}
                </a>
              </li>
              {site.contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:+${site.contact.whatsappNumber}`}
                    dir="ltr"
                    className="inline-flex min-h-11 items-center transition-colors duration-400 hover:text-charcoal"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>{site.contact.address}</li>
              <li>{site.contact.hours}</li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-line pt-8 text-[0.8125rem] leading-[1.85] text-ink-faint">
          {site.footer.disclaimer}
        </p>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-ink-faint">
            © {year} {site.footer.copyright}. כל הזכויות שמורות.
          </p>
          <FooterLegalLinks />
        </div>
      </div>
    </footer>
  );
}
