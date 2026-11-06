import type { NextConfig } from "next";

/**
 * Default: deploy ke Vercel / server Node (optimasi gambar + redirect aktif).
 * `npm run build:static` → ekspor HTML statis ke folder `out/` (untuk GitHub Pages / hosting statis).
 */
const isStatic = process.env.STATIC_EXPORT === "true";

// URL lama (versi HTML) → route baru, supaya link lama & hasil pencarian Google tidak 404.
const legacyRedirects = [
  ["/index.html", "/"],
  ["/profildesa.html", "/profil"],
  ["/infografis.html", "/infografis"],
  ["/umkm.html", "/umkm"],
  ["/potensidesa.html", "/potensi"],
  ["/sejarah.html", "/sejarah"],
  ["/about.html", "/tentang"],
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isStatic
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : {
        images: { formats: ["image/avif", "image/webp"] },
        async redirects() {
          return legacyRedirects.map(([source, destination]) => ({
            source,
            destination,
            permanent: true,
          }));
        },
      }),
};

export default nextConfig;
