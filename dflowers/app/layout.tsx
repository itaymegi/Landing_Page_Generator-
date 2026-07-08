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
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
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
      <body className="page-atmosphere paper-texture min-h-full overflow-x-hidden bg-background text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-text focus:shadow-lg"
        >
          דילוג לתוכן
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
