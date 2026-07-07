import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";
import { legalSitemapEntries } from "@landing-legal/core";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalSitemapEntries(siteUrl),
  ];
}
