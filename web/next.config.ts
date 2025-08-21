import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    unoptimized: false,
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/mission.html", destination: "/mission", permanent: true },
      { source: "/impact.html", destination: "/impact", permanent: true },
      { source: "/resources.html", destination: "/resources", permanent: true },
      { source: "/product_b2c.html", destination: "/products/b2c", permanent: true },
      { source: "/product_b2b.html", destination: "/products/b2b", permanent: true },
    ];
  },
};

export default nextConfig;
