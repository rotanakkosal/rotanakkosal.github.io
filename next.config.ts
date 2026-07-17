import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a plain static site into `out/` so GitHub Pages can serve it directly.
  output: "export",
  // Pages has no Next.js image optimization server.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
