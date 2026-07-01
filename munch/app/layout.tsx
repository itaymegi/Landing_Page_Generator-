import type { Metadata, Viewport } from "next";
import { Assistant, Cormorant_Garamond, Frank_Ruhl_Libre } from "next/font/google";
import { getSiteUrl, site } from "@/config/site";
import { Analytics } from "@/components/Analytics";
import { DevHydrationGuard } from "@/components/DevHydrationGuard";
import { HydrationGuardCleanup } from "@/components/HydrationGuardCleanup";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const frank = Frank_Ruhl_Libre({
  variable: "--font-frank",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

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
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
  },
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
      suppressHydrationWarning
      className={`${frank.variable} ${assistant.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full overflow-x-hidden bg-parchment text-text"
      >
        <DevHydrationGuard />
        <HydrationGuardCleanup />
        <JsonLd />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
