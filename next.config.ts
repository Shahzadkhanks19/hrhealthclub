import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "staticcdn.eacefitness.com" },
      { protocol: "https", hostname: "www.nasm.org" },
      { protocol: "https", hostname: "go.issaonline.com" },
      { protocol: "https", hostname: "commons.wikimedia.org" },
    ],
  },
};

export default nextConfig;
