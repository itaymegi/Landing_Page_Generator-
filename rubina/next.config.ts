import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Allow phone/tablet testing on local network (update IP if it changes)
  allowedDevOrigins: ["10.100.102.7"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
