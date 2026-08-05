import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  devIndicators: false,
  transpilePackages: ["@landing-legal/core"],
  outputFileTracingRoot: path.resolve(__dirname, ".."),
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
