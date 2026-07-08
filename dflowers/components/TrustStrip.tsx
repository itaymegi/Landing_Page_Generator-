import { site } from "@/config/site";
import { PremiumSection } from "@/components/ui/PremiumSection";

export function TrustStrip() {
  const { trustStrip } = site;

  return (
    <PremiumSection tone="warm" noPadding className="border-y border-border py-6 sm:py-8">
      <div className="container-dflowers">
        <ul className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-12">
          {trustStrip.items.map((item) => (
            <li
              key={item}
              className="text-center text-sm tracking-wide text-text-muted sm:text-base"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </PremiumSection>
  );
}
