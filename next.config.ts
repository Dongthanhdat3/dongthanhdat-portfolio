import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Vercel deployment is a static export, so images must resolve directly
  // from public/ instead of relying on a runtime image-optimization endpoint.
  images: { unoptimized: true },
};

export default nextConfig;
