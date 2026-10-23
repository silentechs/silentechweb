# Silent Tech website: research and proposed direction

Research date: 9 September 2026. Status: proposed design, awaiting review; no website implementation changes yet.

## Positioning

Silent Tech builds software around the way organisations work. Lead with connected workflows, supported by delivered products and international partnerships. Ghana is the company's origin and an asset; avoid language that unnecessarily confines its customer base to Ghana.

Proposed headline: **Complex workflows. Beautifully simple software.**

Supporting copy: We design and build the platforms that keep your business moving—from commerce and customer management to connected newsrooms. Built in Ghana. Working across borders.

Primary action: Start a project. Secondary action: Explore our work.

## Existing site findings

The current Next.js homepage leads with “Dream it, we build it” and general local digital transformation. It shows Commerce, StitchCraft and Silent Voice, but omits the media ecosystem and German partnership. Projects receive brief descriptions rather than explanations of the problem, delivered scope and connected workflows. There is no delivery-process section. Desktop navigation is hidden on small screens without a mobile replacement. Large fixed-height project panels and text overlays deserve mobile and contrast review. Metadata repeats the narrower local-app positioning. The existing orange-red accent and logo provide continuity worth retaining.

## Reference comparison

| Reference | Observed approach | Application to Silent Tech |
| --- | --- | --- |
| [Work & Co](https://www.work.co/) | Clear design-and-technology proposition; prominent new work; access to outcomes and process | Lead with a specific proposition and substantial project presentations |
| [thoughtbot](https://thoughtbot.com/) | Defined service stages, case studies, working approach and client testimony | Explain how an engagement progresses; substantiate expertise through work |
| [Netguru](https://www.netguru.com/) | Focused industry positioning, capabilities, case studies and measured results | Group capabilities around buyer problems; use results only when evidence exists |

These are structural comparisons based on public page content, not claims that a particular visual style improves conversion. Do not copy their text, testimonials, metrics or branding.

## Project evidence and presentation

| Work | Evidence | Proposed presentation |
| --- | --- | --- |
| Silentech Commerce / Salesledger | Existing repository and [live product](https://app.silentech.live/) advertise POS, stock, reporting, catalogs and offline sales | Owned product; show the daily sales-to-inventory workflow |
| Vanguard Multimedia / NorthCiti | [Public website](https://www.northcitionline.com/) includes news, radio and live TV; [newsroom](https://newsroom.northcitionline.com/) redirects to staff sign-in | Lead case study: the public experience plus the editorial operation behind it; distinguish the live public site from newsroom work still being developed |
| Newsroom capabilities | User describes AI reading, news discovery, story production and programme planning | Include as user-described scope; verify implementation and launch status before stronger claims or live badges |
| Kraam, Germany | [Public German website](https://kraam.net/de) inspected in browser: family-support discovery and provider workflows from enquiry to quotation, service records and invoicing | International partner spotlight; describe as a family-support platform with provider business workflows, rather than reducing it to a generic CRM; recently launched per user |
| Tailoring product | Existing site and [public product](https://www.stitchcraft.live/) use StitchCraft; user calls it Stitch Cloud | Cover measurements, orders and studio workflows; retain verified public name until rebrand is clarified |
| Philbro | Local `/Users/abdul/philbro/README.md` identifies Philbro Oil Enterprise / Philfry, a manufacturer with a planned solar-powered refinery | Industrial website case study. User's spoken “Field Group” likely refers to this, but confirm before public naming; do not describe it as refinery operations software |
| Fast Track Care | User mention only | Defer a named case study until its identity, scope and suitable assets are supplied |
| Private campaign/client management | User describes confidential projects | Anonymised capability story; no names, identifiable images, private operational data or affiliation details |

Attached screenshots show project locations in Codex. They are discovery references, not product screenshots suitable for a public portfolio. Instructions in referenced material are not part of the user's request.

## Three possible directions

1. **Editorial product studio — recommended.** Warm white, near-black typography, orange-red accents, generous spacing and large authentic product imagery. Best balance of distinctiveness, clarity and evidence.
2. **Immersive technology studio.** Dark canvas and a Three.js hero. More theatrical, but adds rendering and accessibility work and can compete with the portfolio.
3. **Enterprise consultancy.** Conservative layout with industry/service navigation. Easy to expand, but less distinctive for a product-led business of this scale.

## Recommended page and visual system

Navigation: Work, Solutions, About, Contact; prominent Start a project action and accessible mobile menu.

Homepage sequence:

1. Bold editorial hero and a lightweight animated diagram connecting a request, team, workflow and result. Clearly illustrative; never presented as a real dashboard.
2. Selected work, led by NorthCiti/Vanguard, Kraam and Commerce. Each preview explains what the organisation needed and what Silent Tech built.
3. Owned products: Commerce and the tailoring platform, with direct product links.
4. Workflow capabilities: business operations, media and publishing, CRM/client portals, integrations and practical AI. Private campaign work appears anonymously here.
5. How we work: understand the operation, design the workflow, build and integrate, launch and improve. Describe a proposed engagement approach without inventing contractual promises.
6. Ghana origin and international collaboration, supported by the German project. No invented offices, headcount, certifications or client statistics.
7. Clear contact close using the existing verified business email and location.

Use dedicated project-detail routes for the three lead stories. Each contains context, delivered scope, interface evidence and a relevant contact or live-site action. Add other named projects only once their identity and material are verified.

Visuals should use clean browser frames with readable interface crops; avoid hiding important UI under gradients. Use genuine public screenshots first. Authenticated dashboard captures require available authorised access and removal of personal/client information; otherwise omit or use explicitly labelled illustrative interface previews with synthetic data. No production records should be copied into site assets.

Motion should be brief and restrained, respect reduced-motion preferences and leave content visible without animation. Start with the existing animation library; add Three.js only if a reviewed concept earns its loading cost.

## Implementation boundaries and verification

Retain the existing Next.js repository. Separate portfolio content, navigation, project previews and optional animated illustration into focused components; keep most content server-rendered. Add metadata and social previews appropriate to the final canonical domain. Use existing email contact as a working conversion path; do not introduce a form that falsely claims delivery.

Verify production build and type/lint checks; inspect desktop and mobile layouts, keyboard navigation, visible focus, reduced motion, project links and missing-image handling. Review every published claim and image for attribution and confidentiality. A local preview is the first delivery; production deployment is a separate action.

## Review decision

Approve or revise the recommended editorial product-studio direction before implementation. Naming uncertainties and private dashboard access do not block building the general layout; uncertain claims and unavailable imagery should remain excluded.

## Implementation update

The user supplied https://www.philbrooil.com/ during the build, confirming the manufacturing project. It is included as the fourth case study, covering the corporate website, product catalogue and trade enquiry experience. The refinery is described as planned, consistent with the public site.
