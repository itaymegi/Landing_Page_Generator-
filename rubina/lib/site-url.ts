const DEV_SITE_URL = "http://localhost:3000";
/** Known production origin when env is missing at runtime (never throw for SEO routes). */
const PRODUCTION_FALLBACK_URL = "https://myrubina.com";

function normalizeOrigin(url: string): string {
  return url.replace(/\/$/, "");
}

/**
 * Canonical site origin — prefers NEXT_PUBLIC_SITE_URL.
 * Never throws: SEO routes (sitemap/robots) must always return 200.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return normalizeOrigin(configured);

  if (process.env.NODE_ENV === "development") {
    return DEV_SITE_URL;
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    const withProtocol = vercelProduction.startsWith("http")
      ? vercelProduction
      : `https://${vercelProduction}`;
    return normalizeOrigin(withProtocol);
  }

  console.warn(
    `[getSiteUrl] NEXT_PUBLIC_SITE_URL is unset; falling back to ${PRODUCTION_FALLBACK_URL}`,
  );
  return PRODUCTION_FALLBACK_URL;
}
