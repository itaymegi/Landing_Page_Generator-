import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  devIndicators: false,
  // Allow phone/LAN testing against `next dev` (cross-origin /_next assets)
  allowedDevOrigins: ["192.168.0.0/16", "10.0.0.0/8"],
  transpilePackages: ["@landing-legal/core"],
  outputFileTracingRoot: path.resolve(__dirname, ".."),
  images: {
    qualities: [75, 90, 95],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
