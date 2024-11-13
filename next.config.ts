import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "localhost",
      "unsplash.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "media2.dev.to",
    ],
  },
};

export default nextConfig;
