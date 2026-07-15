import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { getMarketingSitemapEntries } from "@/lib/sitemap-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return getMarketingSitemapEntries(getSiteUrl());
}
