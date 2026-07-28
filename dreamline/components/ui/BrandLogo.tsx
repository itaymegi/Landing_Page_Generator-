import { site } from "@/config/site";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  inverse?: boolean;
  className?: string;
};

const markSizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base",
};

const textSizes = {
  sm: "text-base",
  md: "text-lg sm:text-xl",
  lg: "text-xl sm:text-2xl",
};

export function BrandLogo({ size = "md", showTagline = true, inverse = false, className = "" }: BrandLogoProps) {
  const textColor = inverse ? "text-white group-hover:text-white/90" : "text-ink group-hover:text-terracotta-deep";
  const taglineColor = inverse ? "text-white/65" : "text-ink-soft";
  const markClasses = inverse
    ? "bg-white/15 text-white ring-1 ring-white/30"
    : "bg-terracotta text-white";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full font-display font-medium ${markSizes[size]} ${markClasses}`}
        aria-hidden="true"
      >
        {site.brand.monogram}
      </span>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-medium tracking-tight transition-colors ${textColor} ${textSizes[size]}`}>
          {site.brand.logoText}
        </span>
        {showTagline ? (
          <span className={`mt-1 text-[11px] tracking-wide ${taglineColor}`}>{site.brand.tagline}</span>
        ) : null}
      </div>
    </div>
  );
}
