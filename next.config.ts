import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.allnigerianrecipes.com",
      },
      {
        protocol: "https",
        hostname: "allnigerianrecipes.com",
      },
    ],
  },
};

export default nextConfig;
