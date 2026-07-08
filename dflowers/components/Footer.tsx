import { site } from "@/config/site";
import { FooterLegalLinks } from "@landing-legal/core";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const { brand, contact, nav } = site;

  return (
    <footer className="border-t border-border bg-background pb-12 pt-12">
      <div className="container-dflowers">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo size="sm" />
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {brand.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-text">ניווט</p>
            <ul className="mt-4 space-y-2">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-accent-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-text">יצירת קשר</p>
            {contact.phones.map((phone) => (
              <p key={phone} className="mt-4 text-sm text-text-muted">
                {phone}
              </p>
            ))}
            <SocialLinks className="mt-5" />
          </div>

          <div>
            <p className="text-sm font-medium text-text">Daniel Sade</p>
            <p className="mt-4 text-sm text-text-muted">{brand.taglineEn}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <FooterLegalLinks />
          <p className="mt-3 text-xs text-text-muted/70">
            © {new Date().getFullYear()} {brand.name} · {brand.logoText}. כל
            הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
