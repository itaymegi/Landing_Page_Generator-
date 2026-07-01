import { site } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const { footer, brand } = site;

  return (
    <footer className="border-t border-cream bg-parchment pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-14 sm:pb-14">
      <div className="container-rubina flex flex-col items-center text-center">
        <BrandLogo size="sm" showTagline={false} />
        <p className="mt-4 text-sm text-brown/50">{brand.tagline}</p>
        <SocialLinks className="mt-8" size="sm" />
        <div className="mt-8 w-full max-w-xs border-t border-brown/10 pt-6">
          <p className="text-xs text-brown/50">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
