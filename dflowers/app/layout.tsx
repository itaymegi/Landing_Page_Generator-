import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Frank_Ruhl_Libre, Heebo } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { getSiteUrl, site } from "@/config/site";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

/** Hebrew-capable serif for headlines */
const frank = Frank_Ruhl_Libre({
  variable: "--font-serif-he",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
});

/** Latin-only luxury serif for English taglines */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();
const ogImageUrl = site.meta.ogImage.startsWith("http")
  ? site.meta.ogImage
  : `${siteUrl}${site.meta.ogImage}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.meta.title,
  description: site.meta.description,
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
        width: 1200,
        height: 630,
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
      <body className="min-h-full overflow-x-hidden bg-background text-text">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
