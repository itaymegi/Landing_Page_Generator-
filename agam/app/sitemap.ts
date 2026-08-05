import type { MetadataRoute } from "next";
import { productBrands, productHref } from "@/config/brands";
import { getSiteUrl } from "@/config/site";
import { treatmentCategories, treatmentHref } from "@/config/treatments";

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
    ...treatmentCategories.map((treatment) => ({
      url: `${siteUrl}${treatmentHref(treatment.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...productBrands.map((brand) => ({
      url: `${siteUrl}${productHref(brand.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
