# Silent Tech Website Implementation Plan

Approved direction: docs/research/2026-09-09-website-direction.md (user approved 9 September 2026).

Goal: Deliver a polished responsive portfolio with four substantial project stories and working contact paths.
Architecture: Server-rendered Next.js pages and typed portfolio content; a small client navigation component; CSS/SVG motion with reduced-motion support. Existing stack, no new runtime dependencies.

- [x] Capture and optimise public NorthCiti and Kraam screenshots; document provenance. Reuse existing Commerce and tailoring imagery after inspection.
- [x] Add HTTP smoke tests for homepage links, four project routes, metadata and unknown-project 404. Run against existing app to establish missing routes.
- [x] Build shared navigation/footer, typed project content, homepage and static project routes. Use warm ivory, ink and orange-red. Give mobile navigation a native keyboard-operable control. Use working email links rather than a nonfunctional form.
- [x] Implement responsive styles and purposeful workflow illustration. Keep content visible without JavaScript. Retain anchor compatibility with previous homepage.
- [x] Run production build, lint and HTTP smoke tests. Inspect desktop/mobile, keyboard menu, reduced motion and browser errors. Review claims and images; fix findings.
- [x] Open local preview and report completed work, validation and material limitations. No production deployment.

Files: src/app/page.tsx, src/app/globals.css, src/app/layout.tsx, src/app/work/[slug]/page.tsx, src/components/site-header.tsx, src/components/site-footer.tsx, src/components/workflow-art.tsx, src/components/project-image.tsx, src/content/projects.ts, public/work/*, tests/site.test.mjs, .eslintrc.json.

Implementation completed with four project stories after the user confirmed Philbro. Verification is recorded in docs/evidence/verification.md.
