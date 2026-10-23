# Appsfactory reference and Silent Tech SEO

## What we adapted

[Appsfactory](https://www.appsfactory.de/en) makes its services easy to find, explains delivery across the product lifecycle and connects expertise to project examples. Silent Tech now has a dedicated IT and software consultancy page with concrete phase deliverables, relevant portfolio links and engagement FAQs. Links from the homepage, navigation, footer and project stories make that page easy to discover. The existing Silent Tech visual identity remains original; no reference-site copy, imagery, testimonials or metrics were reused.

## Implemented

- Unique titles, descriptions, canonical URLs and social-sharing metadata for the homepage, consultancy page and four project stories.
- A six-page XML sitemap and robots configuration derived from the real route inventory.
- Organisation and website structured data using the existing company identity, email and Ghana address. Detail-page breadcrumbs match the visible navigation; consultancy has Service structured data.
- Substantive consultancy content covering requirements documentation, design, planning, implementation, validation, launch and ongoing improvement.
- Development and Vercel previews use noindex. Production is indexable unless explicitly disabled.

Clear page content and descriptive links follow the [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). Consistent canonical URLs follow [Google canonicalisation guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). Business markup follows the [Organisation documentation](https://developers.google.com/search/docs/appearance/structured-data/organization); no ratings or unsupported claims were added. The sitemap uses the [Next.js metadata convention](https://nextjs.org/docs/14/app/api-reference/file-conventions/metadata/sitemap).

## Search positioning

The homepage introduces IT consultancy and custom software development in Ghana for local and international partners. The service page explains requirements gathering, project planning and the whole software lifecycle. Project pages connect named work with its industry and practical workflows. These are content themes, not measured keyword-volume findings.

## Deployment configuration

Changes are local and have not been deployed or submitted to Google.

- `NEXT_PUBLIC_SITE_URL`: canonical public origin, default `https://www.silentech.live`; configure at build time if the domain changes.
- `SITE_INDEXABLE=false`: disable indexing on manually hosted staging builds. Vercel preview builds and local development are automatically noindex. Robots allows crawling so crawlers can read the noindex directive; this does not provide access control.
- `GOOGLE_SITE_VERIFICATION`: optional Search Console verification token, configured at build time. No token has been supplied.

After deployment, verify the live canonical tags, robots file and sitemap, verify the Search Console property, submit `/sitemap.xml` and inspect the key URLs. Monitor impressions and clicks to guide subsequent content improvements. Add approved client testimonials and measured outcomes when available.
