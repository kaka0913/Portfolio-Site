import { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@blocks": path.resolve(__dirname, "src/blocks"),
      "@Hyperspeed": path.resolve(__dirname, "/src/blocks/Backgrounds/Hyperspeed/Hyperspeed"),
    };
    return config;
  },
};

export default nextConfig;