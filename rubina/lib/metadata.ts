import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { site } from "@/config/site";

function buildSiteVerification(): Metadata["verification"] | undefined {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();

  if (!google && !bing) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

export function buildRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const ogPath = site.meta.ogImage.startsWith("/")
    ? site.meta.ogImage
    : `/${site.meta.ogImage}`;
  const verification = buildSiteVerification();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: site.meta.title,
      template: `%s | ${site.brand.name}`,
    },
    description: site.meta.description,
    keywords: site.meta.keywords,
    authors: [{ name: site.business.name, url: siteUrl }],
    creator: site.business.name,
    publisher: site.business.name,
    category: site.business.category,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      // Absolute homepage canonical with trailing slash (GSC / sitemap consistency)
      canonical: `${siteUrl}/`,
    },
    icons: {
      icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
      apple: [{ url: "/apple-icon.png", type: "image/png" }],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title: site.meta.title,
      description: site.meta.description,
      url: `${siteUrl}/`,
      siteName: site.brand.name,
      locale: "he_IL",
      type: "website",
      images: [
        {
          url: ogPath,
          width: 1200,
          height: 630,
          alt: site.brand.description,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.meta.title,
      description: site.meta.description,
      images: [ogPath],
    },
    ...(verification ? { verification } : {}),
  };
}
