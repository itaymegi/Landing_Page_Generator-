import Image from "next/image";
import { site } from "@/config/site";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  showWordmark?: boolean;
  inverse?: boolean;
  className?: string;
};

const markSizes = {
  sm: 36,
  md: 44,
  lg: 56,
};

const textSizes = {
  sm: "text-base",
  md: "text-lg sm:text-xl",
  lg: "text-xl sm:text-2xl",
};

export function BrandLogo({
  size = "md",
  showTagline = true,
  showWordmark = false,
  inverse = false,
  className = "",
}: BrandLogoProps) {
  const mark = markSizes[size];
  const textColor = inverse ? "text-white group-hover:text-white/90" : "text-ink group-hover:text-terracotta-deep";
  const taglineColor = inverse ? "text-white/65" : "text-ink-soft";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5">
        <Image
          src={site.brand.logoSrc}
          alt={site.brand.logoAlt}
          width={mark}
          height={mark}
          className="h-auto w-auto"
          priority
        />
      </span>
      {showWordmark || showTagline ? (
        <div className="flex flex-col leading-none">
          {showWordmark ? (
            <span className={`font-display font-medium tracking-tight transition-colors ${textColor} ${textSizes[size]}`}>
              {site.brand.logoText}
            </span>
          ) : null}
          {showTagline ? (
            <span className={`mt-1 text-[11px] tracking-wide ${taglineColor}`}>{site.brand.tagline}</span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
