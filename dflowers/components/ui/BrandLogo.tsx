import { site } from "@/config/site";

type BrandLogoProps = {
  inverse?: boolean;
  size?: "sm" | "md";
};

export function BrandLogo({ inverse = false, size = "md" }: BrandLogoProps) {
  const textSize = size === "sm" ? "text-lg" : "text-xl sm:text-2xl";
  const subSize = size === "sm" ? "text-[0.6rem]" : "text-[0.65rem] sm:text-xs";

  return (
    <div className="flex flex-col leading-none">
      <span
        className={`font-serif font-medium tracking-[0.12em] ${textSize} ${
          inverse ? "text-white" : "text-text"
        }`}
      >
        {site.brand.logoText}
      </span>
      <span
        className={`mt-1 tracking-[0.2em] uppercase ${subSize} ${
          inverse ? "text-white/70" : "text-text-muted"
        }`}
      >
        {site.brand.taglineEn}
      </span>
    </div>
  );
}
