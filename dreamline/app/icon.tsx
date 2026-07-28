import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#B5603E",
          borderRadius: "50%",
          color: "#fff",
          fontSize: 30,
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
