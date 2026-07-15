import type { Metadata, Viewport } from "next";
import { Allura, Cormorant_Garamond, Frank_Ruhl_Libre } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/ui/SkipLink";
import { buildRootMetadata } from "@/lib/metadata";
import { site } from "@/config/site";
import "./globals.css";

const frank = Frank_Ruhl_Libre({
  variable: "--font-frank",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: site.meta.themeColor,
};

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frank.variable} ${cormorant.variable} ${allura.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip bg-parchment text-text">
        <SkipLink />
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
