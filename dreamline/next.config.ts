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
  // Allow phone/LAN testing against `next dev` (cross-origin /_next assets).
  // Next matches request Host/Origin hostnames — use your LAN IP (not CIDR).
  // Update this if your Wi‑Fi IP changes (`ipconfig` / Get-NetIPAddress).
  allowedDevOrigins: ["10.100.102.29", "192.168.*.*", "10.*.*.*"],
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
