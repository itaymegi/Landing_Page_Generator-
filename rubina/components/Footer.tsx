import { site } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const { footer } = site;

  return (
    <footer className="border-t border-gold/10 bg-cream pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-12 sm:pb-12">
      <div className="container-rubina flex flex-col items-center text-center">
        <BrandLogo size="sm" showTagline={false} />
        <SocialLinks className="mt-7" size="sm" />
        <div className="mt-8 w-full max-w-xs border-t border-charcoal/10 pt-6">
          <p className="text-xs text-charcoal/55">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
