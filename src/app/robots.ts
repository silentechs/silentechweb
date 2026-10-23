import type { MetadataRoute } from "next";
import { absoluteUrl, canIndex } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Crawlers must be able to fetch preview HTML to observe its noindex directive.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(canIndex ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}
