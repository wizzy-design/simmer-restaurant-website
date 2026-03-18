import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  compiler: {
    // Remove all console.* calls in production builds
    removeConsole: isProd ? { exclude: ["error", "warn"] } : false,
    // Strip React test-id attributes in production
    reactRemoveProperties: isProd ? { properties: ["^data-testid$"] } : false,
  },
  experimental: {
    // Tree-shake large packages — only bundle the exports actually used
    optimizePackageImports: ["motion", "motion/react", "lucide-react"],
  },
};

export default nextConfig;
