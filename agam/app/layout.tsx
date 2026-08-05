import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Frank_Ruhl_Libre, Heebo } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/ui/SkipLink";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { getSiteUrl, site } from "@/config/site";
import "./globals.css";

/** Hebrew-capable serif for headlines — light weights only. */
const frank = Frank_Ruhl_Libre({
  variable: "--font-serif-he",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

/** Latin serif for English eyebrows and statistic numerals. */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const ogImageUrl = site.meta.ogImage.startsWith("http")
  ? site.meta.ogImage
  : `${siteUrl}${site.meta.ogImage}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.meta.title,
  description: site.meta.description,
  keywords: site.meta.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    url: siteUrl,
    siteName: site.brand.name,
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 707,
        height: 606,
        alt: site.hero.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
    images: [ogImageUrl],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: "#fbf9f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frank.variable} ${cormorant.variable} ${heebo.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="marble-vignette min-h-full overflow-x-hidden bg-background text-ink">
        <SkipLink />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
