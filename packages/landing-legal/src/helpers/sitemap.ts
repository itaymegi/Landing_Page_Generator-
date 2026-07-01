import type { MetadataRoute } from "next";

/**
 * Returns three sitemap entries for /privacy, /accessibility, /terms.
 * Spread into your existing sitemap.ts:
 *
 * @example
 * export default function sitemap(): MetadataRoute.Sitemap {
 *   return [
 *     { url: getSiteUrl(), ... },
 *     ...legalSitemapEntries(getSiteUrl()),
 *   ];
 * }
 */
export function legalSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  const origin = baseUrl.replace(/\/$/, "");
  const lastModified = new Date();
  return [
    { url: `${origin}/privacy`, lastModified, priority: 0.3 },
    { url: `${origin}/accessibility`, lastModified, priority: 0.3 },
    { url: `${origin}/terms`, lastModified, priority: 0.3 },
  ];
}
