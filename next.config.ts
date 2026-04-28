import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: '/washington-critique',
  basePath: '/washington-critique',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
