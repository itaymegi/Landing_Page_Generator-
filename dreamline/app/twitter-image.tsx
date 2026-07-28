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
          background: "#FFF9F6",
          fontFamily: "sans-serif",
          gap: 22,
          padding: "64px 80px",
        }}
      >
        <div style={{ width: 64, height: 3, borderRadius: 3, background: "#B5603E" }} />
        <div
          style={{
            fontSize: 66,
            fontWeight: 600,
            color: "#302B29",
            letterSpacing: "-0.01em",
          }}
        >
          Dream Line
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 400,
            color: "#302B29",
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: 880,
          }}
        >
          מתנות אישיות שמספרות סיפור
        </div>
        <div style={{ width: 64, height: 3, borderRadius: 3, background: "#B5603E" }} />
        <div
          style={{
            fontSize: 22,
            color: "#6F6762",
            letterSpacing: "0.04em",
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          איורים אישיים · מוצרים מאוירים · מארזי מתנה
        </div>
      </div>
    ),
    { ...size },
  );
}
