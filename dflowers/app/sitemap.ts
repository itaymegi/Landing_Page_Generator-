import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/config/services";
import { getSiteUrl } from "@/config/site";
import { legalSitemapEntries } from "@landing-legal/core";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...getAllServiceSlugs().map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...legalSitemapEntries(siteUrl),
  ];
}
