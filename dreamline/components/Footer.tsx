import { site } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { FooterLegalLinks } from "@landing-legal/core";

export function Footer() {
  const { footer } = site;

  return (
    <footer className="border-t border-black/5 bg-ivory pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-14 sm:pb-14">
      <div className="container-dreamline flex flex-col items-center text-center">
        <BrandLogo size="sm" showTagline={false} />
        <p className="mt-4 max-w-sm text-sm text-ink-soft">{footer.tagline}</p>
        <SocialLinks className="mt-8" size="sm" />
        <div className="relative z-10 mt-8 w-full max-w-sm border-t border-ink/10 pt-6">
          <FooterLegalLinks />
          <p className="mt-3 text-xs text-ink-soft/80">{footer.microcopy}</p>
          <p className="mt-2 text-xs text-ink-soft/60">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
