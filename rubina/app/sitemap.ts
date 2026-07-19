import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { getMarketingSitemapEntries } from "@/lib/sitemap-routes";

/** Always emit a static sitemap — avoid on-demand regeneration failures. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getMarketingSitemapEntries(getSiteUrl());
}
