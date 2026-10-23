import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { absoluteUrl, consultancyPath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified rather than falsely claiming content changes on every build.
  return [
    "/",
    "/work",
    ...projects.map((project) => `/work/${project.slug}`),
    "/products",
    "/products/schools",
    "/products/docket",
    "/services",
    consultancyPath,
    "/services/profile-websites",
    "/about",
    "/contact",
  ].map((path) => ({ url: absoluteUrl(path) }));
}
