# Silentech website rebuild: research, gaps and design direction

Date: 23 October 2026. Replaces the September "editorial product studio" build (warm cream, orange accent, connected-cards hero).

## 1. What the codebase already does (feature inventory)

Next.js 14 App Router, Tailwind 3, framer-motion, lucide. One 3,000-line `globals.css`.

| Area | Existing feature | Keep / change |
| --- | --- | --- |
| Routes | `/`, `/work/[slug]` (northciti, kraam, commerce, philbro), `/services/it-software-consultancy`, 404, `robots.txt`, `sitemap.xml` | Keep every URL (SEO continuity); add `/products`, `/products/schools`, `/work`, `/about`, `/contact` |
| Content | `src/content/projects.ts` (4 case studies with challenge/approach/capabilities), consultancy phases and FAQ | Keep the verified content; rewrite presentation |
| SEO | `lib/seo.ts` (metadata helper, Organization/WebSite/Breadcrumb/Service schema, indexing policy for previews), social cards script | Keep, extend (FAQ + Product schema, new social cards) |
| Assets | Real screenshots (NorthCiti, Kraam, Philbro, Commerce, newsroom demo), brand icon, favicons | Keep; StitchCraft screenshot is a stitched collage, so it is replaced by an interface vignette |
| Contact | `mailto:` only, honest "no form backend" stance | Keep honesty; add a project brief builder that composes the email |
| Tests | HTTP tests for routes, SEO, indexing policy | Update for new routes |
| Mobile | `<details>` menu | Rebuild as an accessible full-screen menu |

## 2. Silentech Schools (https://schools.silentech.live)

Audited 23 Oct 2026. Single page plus `/privacy` and `/data-protection`. Positions itself as "Run the whole school from one place, even when the internet is slow."

Modules: lessons and materials, quizzes; enrolment, registers, boarding; marks, grading schemes, PDF report cards (held until the school releases them); parent sign-in by phone number and text code; SMS alerts; fee bills, pay links and receipts (online payment goes to the school's own account, Silentech holds no school money); school website; timetables; forms and surveys. Registers and marks work offline and sync later. Full data export. Teal brand (`#0e6f73`). Demo on request by email; no pricing; no customers named.

The product site reads as launched, while the agency brief calls it "upcoming". The new site uses **"Opening soon"** with **demo on request**, and makes no claim about schools using it. All feature statements are the product's own marketing claims and are worded as what it is built to do.

## 3. Benchmark (6 sites)

AppsFactory, Thoughtworks, Instrument, Andela, Paystack/Flutterwave, Stripe. Page text only was fetchable, so visual judgements are ours.

**Shared by the best:** one concrete positioning line; proof near the first screen; one repeated primary CTA; three to five plain service buckets; a stated engagement model; products kept separate from services; case studies with a clear client/problem/outcome.

**Common and unnecessary (cut):** logo walls without relationships, award rows, carousels with no caption, mega-menus, vague "digital transformation" copy, gated downloads, many CTA verbs.

**Gaps nobody serves (Silentech can own):** offline-first and low-bandwidth as a headline, schools software as a vertical, WhatsApp/SMS-first workflows, honest local context (cedis, Tamale, real networks).

## 4. Gap analysis for Silentech

| Gap in the old site | Decision |
| --- | --- |
| Hero was a decorative concept illustration; nothing to try | Replace with an interactive phone preview of offline selling, the one thing that is true of our work and rare among studios |
| No clear way to self-select (build vs advise vs buy) | "Three ways to work with us" |
| Products buried below work, no vertical for schools | Dedicated Products section and `/products` + `/products/schools` |
| Proof was a strip of names | Honest counts derived from the portfolio (3 client platforms, 2 live products, 1 opening soon), plus named clients |
| No engagement models | Three plain options on the consultancy page, with no invented prices |
| Contact was a mailto link | Brief builder: project type, stage, timeline, composes an email and copies to clipboard |
| Repeated slogans, numbered eyebrows on every section, orbit art, tilted cards | Removed. Numbers appear only on the real sequence (process) |
| No about page | `/about`: where we work, how we work, who we build for |
| Missing: team photos, testimonials, measured outcomes | Not invented. Listed as follow-ups for the team to supply |

## 5. Design direction (independent of the previous build)

**Concept:** Tamale cloth. The Northern Ghanaian smock (fugu) is woven from narrow indigo and white strips. The site borrows that structure: a thin woven stripe band is the only decoration, indigo is the deep colour, and the brand flame (logo `#F45132`) is spent on action only.

**Palette**
- Ink `#10122B` (text, indigo-black)
- Indigo `#1E2468` (deep panels)
- Chalk `#F3F4F9` (page)
- Flame `#F45132` (brand, actions); text-safe flame `#C23A1E`
- Shea `#F4C04A` (small highlights, "opening soon")
- Product accents: Commerce green `#12A66B`, StitchCraft forest `#1B6B3A`, Schools teal `#0E6F73`

**Type:** Bricolage Grotesque for headings and UI (opsz/width axes, tight tracking), Instrument Sans for reading text, DM Mono only inside product previews for figures.

**Layout:** left-aligned, wide 12-column grid, generous whitespace. No identical card grids: work is a large-type index with a live preview pane; products are three panels of deliberately different size and colour; process is a horizontal loom line.

**The one memorable thing:** the hero phone. Auto-plays once (online sale, goes offline, two sales saved on the phone, back online, syncs), then is fully interactive. Reduced-motion users get the static state and manual controls.

**Principles:** show working things, not slogans; say what is verified; keep everything else quiet.

**Review against the brief:** the first pass was warm-cream/serif, rejected as a default. Indigo + woven stripe + interactive hero is specific to a Tamale studio selling offline-capable software.

## 6. Information architecture

Header: Work, Products, Consultancy, About, **Start a project**.
`/` hero, proof, three ways to work, work index, products (with Schools), built-for-here, process, location, CTA.
`/products` index, `/products/schools` full page. `/work`, `/work/[slug]`. `/services/it-software-consultancy` (stages, engagement options, FAQ). `/about`. `/contact`.

## 7. Open items for the team

Real team photos and names, client testimonials, measured outcomes, a WhatsApp number, pricing guidance, confirmation of Schools launch status, StitchCraft/Stitch Cloud naming.
