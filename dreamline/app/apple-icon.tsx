import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFF9F6",
          color: "#B5603E",
          fontSize: 84,
          fontWeight: 600,
          fontFamily: "sans-serif",
        }}
      >
        {site.brand.monogram}
      </div>
    ),
    { ...size },
  );
}
