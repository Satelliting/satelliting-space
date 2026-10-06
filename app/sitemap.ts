import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getStaticRoutes } from "@/lib/routes";

// Built once at build time, when the app directory is available to scan
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getStaticRoutes().map((route) => ({
    url: route === "/" ? site.url : `${site.url}${route}`,
  }));
}
