import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const runtime = "edge";
export const alt = site.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F4",
          fontFamily: "serif",
          gap: 24,
          padding: "60px 80px",
        }}
      >
        {/* Decorative top rule */}
        <div style={{ width: 60, height: 1, background: "#C8A77A" }} />

        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: "#5A3E36",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Munch Cookies
        </div>

        {/* Sub-brand */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 300,
            color: "#C8A77A",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          by Lin Bitton
        </div>

        {/* Decorative bottom rule */}
        <div style={{ width: 60, height: 1, background: "#C8A77A" }} />

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#5A3E36",
            opacity: 0.6,
            letterSpacing: "0.1em",
            marginTop: 8,
          }}
        >
          עוגיות | קינוחים | מארזי מתנה
        </div>
      </div>
    ),
    { ...size },
  );
}
