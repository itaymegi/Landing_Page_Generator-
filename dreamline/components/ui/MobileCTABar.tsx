import { site } from "@/config/site";
import { CTAButton } from "@/components/ui/CTAButton";

export function MobileCTABar() {
  return (
    <div className="mobile-cta-bar fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-ivory/98 px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(48,43,41,0.08)] backdrop-blur-lg sm:hidden">
      <CTAButton href="#final-cta" label={site.hero.ctaLabel} showArrow={false} className="w-full" />
    </div>
  );
}
