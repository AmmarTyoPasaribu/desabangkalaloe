import type { MetadataRoute } from "next";
import { navItems, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    changeFrequency: "monthly",
    priority: n.href === "/" ? 1 : 0.8,
  }));
}
