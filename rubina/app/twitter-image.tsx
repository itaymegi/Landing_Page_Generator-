import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const runtime = "edge";
export const alt = site.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
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
          background: "#F5F0E8",
          fontFamily: "serif",
          gap: 20,
          padding: "64px 80px",
        }}
      >
        <div style={{ width: 72, height: 1, background: "#A67C52" }} />
        <div
          style={{
            fontSize: 68,
            fontWeight: 300,
            color: "#5A4634",
            letterSpacing: "0.22em",
          }}
        >
          RUBINA
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 300,
            color: "#5A4634",
            textAlign: "center",
            lineHeight: 1.35,
            maxWidth: 900,
          }}
        >
          מארזי גבינות ויין מעוצבים
        </div>
        <div style={{ width: 72, height: 1, background: "#A67C52" }} />
        <div
          style={{
            fontSize: 22,
            color: "#5A4634",
            opacity: 0.72,
            letterSpacing: "0.06em",
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          מתנות · אירוח · פיקניק · משלוחים למרכז
        </div>
      </div>
    ),
    { ...size },
  );
}
