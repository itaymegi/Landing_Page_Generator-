import Image from "next/image";
import { site } from "@/config/site";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  inverse?: boolean;
  hideTextOnMobile?: boolean;
  className?: string;
};

const markSizes = {
  sm: 36,
  md: 40,
  lg: 48,
};

const textSizes = {
  sm: "text-base tracking-[0.28em]",
  md: "text-lg tracking-[0.32em] sm:text-xl",
  lg: "text-xl tracking-[0.35em] sm:text-2xl",
};

export function BrandLogo({
  size = "md",
  showTagline = true,
  inverse = false,
  hideTextOnMobile = false,
  className = "",
}: BrandLogoProps) {
  const mark = markSizes[size];
  const textColor = inverse
    ? "text-white group-hover:text-white/90"
    : "text-brown group-hover:text-gold-deep";
  const taglineColor = inverse ? "text-white/60" : "text-brown/50";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {site.brand.logoSrc ? (
        <div
          className={`relative shrink-0 overflow-hidden rounded-full ${inverse ? "ring-1 ring-white/20" : ""}`}
        >
          <Image
            src={site.brand.logoSrc}
            alt={site.brand.logoAlt}
            width={mark}
            height={mark}
            className="h-auto w-auto"
            priority
          />
        </div>
      ) : null}
      <div className={`flex flex-col leading-none ${hideTextOnMobile ? "hidden sm:flex" : ""}`}>
        <span
          className={`font-display font-light transition-colors ${textColor} ${textSizes[size]}`}
        >
          {site.brand.logoText}
        </span>
        {showTagline ? (
          <span className={`mt-1 text-[10px] tracking-wide ${taglineColor}`}>
            {site.brand.tagline}
          </span>
        ) : null}
      </div>
    </div>
  );
}
