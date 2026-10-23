# Release audit — 23 October 2026

Scope: current portfolio redesign, public routes, metadata, responsive layouts, contact brief builder, navigation, and dependencies.

Fixed mobile overflow in the studio preview, narrow-screen product CTA and Docket hero. Mobile navigation now closes on same-page links and desktop resize, restores scrolling, handles Escape, and contains keyboard tab navigation.

Upgraded Next.js to 15.5.28, adapted project route parameters to its async API, updated Sharp and vulnerable transitive packages. PostCSS is overridden to the patched 8.5.31 range. Production dependency audit reports zero vulnerabilities. Three moderate development-only advisories remain in the Tailwind 3 / postcss-selector-parser chain; resolving those through npm's recommended fix would require a Tailwind major migration.

Verification: production build including lint and TypeScript passed. Automated suite: 37 tests covering routes, SEO, indexing policy, sitemap, social images and content. Browser sweep: 15 public pages at 320, 390 and 1440px; affected pages rechecked after fixes with no horizontal overflow. Verified menu Escape/focus restoration, same-page close and resize unlock, analytics preview selection, and encoded contact mailto fields. Contact remains an email brief builder, not a server submission form.

This is a release-focused audit, not a full penetration test or formal accessibility certification. Local agent logs and environment files are excluded from version control.
