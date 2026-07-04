// Prefixes a root-absolute public asset path with the configured base path so
// that plain <img> / metadata references resolve correctly when the site is
// served from a GitHub Pages project subpath (e.g. /pilot_website).
// Next.js auto-prefixes next/link, next/image and next/font, but NOT plain
// <img src> or string paths — use this helper for those.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
