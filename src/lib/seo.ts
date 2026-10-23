import type { Metadata } from "next";

export const siteOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.silentech.live",
).origin;
export const siteName = "Silentech";
export const companyName = "Silentech Solution Enterprise";
export const consultancyPath = "/services/it-software-consultancy";
export const canIndex =
  process.env.NODE_ENV === "production" &&
  process.env.SITE_INDEXABLE !== "false" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
export const absoluteUrl = (path: string) =>
  new URL(path, `${siteOrigin}/`).toString();
export const organizationId = `${siteOrigin}/#organization`;

export function pageMetadata({
  title,
  description,
  path,
  image = "/social/home.png",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: absoluteUrl(path),
      siteName,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${title} — ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteName,
      legalName: companyName,
      alternateName: ["Silentech", "Silentech Solution"],
      url: absoluteUrl("/"),
      logo: absoluteUrl("/brand/logo-refined.png"),
      email: "support@silentech.live",
      description:
        "Ghanaian-owned software studio and IT consultancy in Tamale. Custom software, consultancy and products for shops, tailors and schools.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Malshegu",
        addressLocality: "Tamale",
        addressRegion: "Northern Region",
        addressCountry: "GH",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteOrigin}/#website`,
      name: siteName,
      alternateName: "Silentech",
      url: absoluteUrl("/"),
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
