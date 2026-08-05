import Image from "next/image";
import { site } from "@/config/site";

type BrandLogoProps = {
  invert?: boolean;
  size?: "sm" | "md";
  /** Circular gold-on-dark mark badge before the wordmark. */
  mark?: boolean;
  /**
   * Hide the wordmark below this breakpoint so the header never overflows.
   * `xs` ≈ 360px via max-[359px].
   */
  markOnlyBelow?: "xs";
};

export function BrandLogo({
  invert = false,
  size = "md",
  mark = false,
  markOnlyBelow,
}: BrandLogoProps) {
  const isSmall = size === "sm";
  const markSize = isSmall ? "h-9 w-9" : "h-10 w-10";
  const wordmarkClass =
    markOnlyBelow === "xs" ? "hidden min-[360px]:flex" : "flex";

  return (
    <span className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      {mark ? (
        <Image
          src={site.brand.logoMark}
          alt=""
          width={150}
          height={150}
          sizes={isSmall ? "36px" : "40px"}
          quality={90}
          className={`${markSize} shrink-0 rounded-full object-cover ring-1 ring-gold/25`}
          aria-hidden="true"
        />
      ) : null}

      <span className={`${wordmarkClass} min-w-0 flex-col leading-none`}>
        <span
          className={`font-serif-en truncate font-light ${isSmall ? "text-lg" : "text-lg sm:text-xl xl:text-2xl"} tracking-[0.3em] ${
            invert ? "text-ivory" : "text-charcoal"
          }`}
        >
          {site.brand.logoText}
        </span>
        <span
          className={`font-serif-en mt-1 truncate ${isSmall ? "text-[0.5rem]" : "text-[0.5rem] sm:text-[0.5625rem]"} tracking-[0.42em] ${
            invert ? "text-gold-soft" : "text-gold-deep"
          }`}
        >
          {site.brand.logoSub}
        </span>
      </span>
    </span>
  );
}
