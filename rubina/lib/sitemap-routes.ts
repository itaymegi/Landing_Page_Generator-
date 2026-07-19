import type { MetadataRoute } from "next";

/** Indexable marketing routes — append new landing pages here. */
export function getMarketingSitemapEntries(
  siteUrl: string,
): MetadataRoute.Sitemap {
  const origin = siteUrl.replace(/\/$/, "");

  return [
    {
      // Trailing slash matches homepage canonical (https://myrubina.com/)
      url: `${origin}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
