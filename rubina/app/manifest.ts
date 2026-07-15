import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brand.name,
    short_name: site.brand.name,
    description: site.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: site.meta.themeColor,
    theme_color: site.meta.themeColor,
    lang: "he",
    dir: "rtl",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
