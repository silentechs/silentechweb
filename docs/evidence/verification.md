# Redesign verification — 9 September 2026

## Completed

- Production build passes, including TypeScript and static generation of the homepage and four project routes.
- ESLint passes with no warnings/errors; git diff whitespace check passes.
- Seven HTTP smoke checks cover server-rendered project/contact links, individual project headings and metadata, unknown-project 404, and correct available social images for each page.
- Initial tests failed for missing project links/routes before implementation; social-image test failed before metadata was added; Philbro route test failed before its case study was added.
- Source review by a separate reviewer covered functionality, accessibility and content. Contrast and social-preview findings were fixed. A Philbro CSS escape typo was also fixed.
- Desktop homepage visually reviewed at a measured 1163 CSS-pixel width; no horizontal overflow or broken loaded images.
- Phone homepage and Kraam/Commerce pages checked down to a measured 291 CSS-pixel width without horizontal overflow. NorthCiti also visually inspected at phone width.
- Mobile navigation opens, closes with Escape and returns focus to its summary; choosing Work closes it and reaches the portfolio. Home anchors resolve to existing targets.
- Reduced-motion CSS rules verified in the rendered stylesheet; animation is finite and disabled by the preference rule. This was stylesheet inspection rather than operating-system preference emulation.
- Philbro case study visually checked on desktop and at a measured 354 CSS-pixel phone width, with no horizontal overflow.
- No warning/error logs observed in the inspected browser session.

## Delivery boundaries

- Preview uses the production build at http://localhost:3100.
- No production deployment, push, merge, external message or form submission performed.
- Contact buttons use mailto links; no backend contact form is claimed.
- Public product screenshots and a labelled demo newsroom image are used. Private customer/dashboard records are excluded.
- The existing build reports an outdated Browserslist dataset notice; this does not fail the build. No framework/dependency upgrade was included in this design change.


## SEO and consultancy update — 9 September 2026

- Production build passed, including lint and TypeScript validation.
- 21 tests passed against the production preview: 16 HTTP/content/metadata checks and 5 indexing-policy checks. Development HTTP checks also passed.
- Six canonical routes appear exactly once in the sitemap. Production advertises the sitemap; development and preview HTML use noindex.
- Consultancy desktop layout reviewed; mobile measured 354px document width and 354px scroll width, with no horizontal overflow. Native FAQ expansion verified in the browser.
- Independent code review found no material actionable issues.
- Development server restored to port 3100. No deployment or Search Console submission performed.
