const DEV_SITE_URL = "http://localhost:3000";

/** Canonical site origin — always from NEXT_PUBLIC_SITE_URL in production. */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  if (process.env.NODE_ENV === "development") {
    return DEV_SITE_URL;
  }

  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be set for production builds. See rubina/.env.example and rubina/DEPLOY.md",
  );
}
