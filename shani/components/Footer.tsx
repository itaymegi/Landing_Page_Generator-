import { site } from "@/config/site";
import { FooterLegalLinks } from "@landing-legal/core";

export function Footer() {
  const { brand } = site;

  return (
    <footer className="border-t border-beige bg-background pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-12 sm:pb-12">
      <div className="container-shani flex flex-col items-center text-center">
        <p className="font-serif text-lg font-light tracking-wide text-brown">
          {brand.name}
        </p>
        <p className="mt-1 text-sm text-text/50">{brand.tagline}</p>

        <div className="mt-8 w-full max-w-sm border-t border-brown/10 pt-6">
          <FooterLegalLinks />
          <p className="mt-3 text-xs text-text/40">
            © {new Date().getFullYear()} {brand.name}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
