import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const CRAWLERS = [
  "*",
  "GPTBot",
  "OAI-SearchBot",
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Bingbot",
  "Applebot",
  "ClaudeBot",
  "PerplexityBot",
  "CCBot",
  "facebookexternalhit",
  "Twitterbot",
  "LinkedInBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: CRAWLERS.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
