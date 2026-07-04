import type { NextConfig } from "next";

// Base path for GitHub Pages project site (e.g. "/pilot_website").
// Set via NEXT_PUBLIC_BASE_PATH at build time; empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // static HTML export for GitHub Pages
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true, // emit /path/index.html so GitHub Pages serves it directly
  images: { unoptimized: true }, // no image optimizer on a static host
};

export default nextConfig;
