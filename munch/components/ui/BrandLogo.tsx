import Image from "next/image";
import { site } from "@/config/site";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
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
  sm: "text-lg",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-3xl",
};

export function BrandLogo({
  size = "md",
  showWordmark = true,
  inverse = false,
  className = "",
}: BrandLogoProps) {
  const mark = markSizes[size];
  const textColor = inverse
    ? "text-white group-hover:text-white/90"
    : "text-brown group-hover:text-gold-deep";
  const subColor = inverse ? "text-white/60" : "text-gold-deep/70";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`relative flex shrink-0 overflow-hidden rounded-full ring-1 ${
          inverse ? "ring-white/30" : "ring-border"
        }`}
        style={{ width: mark, height: mark }}
      >
        <Image
          src={site.brand.logoSrc}
          alt={site.brand.logoAlt}
          width={mark}
          height={mark}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display font-medium lowercase tracking-tight transition-colors ${textColor} ${textSizes[size]}`}
          >
            {site.brand.logoText}
          </span>
          <span
            className={`mt-0.5 text-[0.6rem] uppercase tracking-[0.35em] ${subColor}`}
          >
            {site.brand.logoSub}
          </span>
        </span>
      ) : null}
    </div>
  );
}
