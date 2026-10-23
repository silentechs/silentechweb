import { test } from "node:test";
import assert from "node:assert/strict";
const base = process.env.SITE_URL || "http://localhost:3100";
const origin = (
  process.env.EXPECT_CANONICAL_ORIGIN || "https://www.silentech.live"
).replace(/\/$/, "");
const paths = [
  "/",
  "/services/it-software-consultancy",
  "/work/northciti",
  "/work/kraam",
  "/work/commerce",
  "/work/philbro",
  "/work/aminadam",
  "/work",
  "/products",
  "/products/schools",
  "/products/docket",
  "/about",
  "/contact",
  "/services",
  "/services/profile-websites",
];
const jsonLd = (html) =>
  [
    ...html.matchAll(
      /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    ),
  ]
    .map((match) => JSON.parse(match[1]))
    .flatMap((value) => value["@graph"] || [value]);
for (const path of paths) {
  test(`${path} has its own canonical, social URL and parseable structured data`, async () => {
    const response = await fetch(`${base}${path}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    const url = `${origin}${path === "/" ? "/" : path}`;
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    const socialUrl = html.match(/<meta property="og:url" content="([^"]+)"/);
    assert.ok(canonical, `Missing canonical for ${path}`);
    assert.ok(socialUrl, `Missing social URL for ${path}`);
    // A bare origin and an origin with '/' identify the same root document.
    assert.equal(new URL(canonical[1]).href, new URL(url).href);
    assert.equal(new URL(socialUrl[1]).href, new URL(url).href);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
    const entries = jsonLd(html);
    assert.ok(entries.some((item) => item["@type"] === "Organization"));
    if (path !== "/")
      assert.ok(entries.some((item) => item["@type"] === "BreadcrumbList"));
    if (path.includes("/services/"))
      assert.ok(entries.some((item) => item["@type"] === "Service"));
    const robots = html.match(/<meta name="robots" content="([^"]+)"/);
    assert.ok(robots);
    assert.equal(
      robots[1].includes("noindex"),
      process.env.EXPECT_INDEXABLE !== "true",
    );
  });
}
test("sitemap lists each real page once, using canonical URLs", async () => {
  const response = await fetch(`${base}/sitemap.xml`);
  assert.equal(response.status, 200);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls.sort(), paths.map((path) => `${origin}${path}`).sort());
  assert.equal(new Set(urls).size, urls.length);
});
test("robots allows crawlers to read page-level indexing directives", async () => {
  const response = await fetch(`${base}/robots.txt`);
  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /User-Agent: \*/i);
  assert.match(body, /Allow: \/\s/);
  if (process.env.EXPECT_INDEXABLE === "true")
    assert.ok(body.includes(`Sitemap: ${origin}/sitemap.xml`));
});
test("consultancy has crawlable entry points and links to evidence", async () => {
  const home = await (await fetch(base)).text();
  assert.match(home, /href="\/services\/it-software-consultancy"/);
  const service = await (
    await fetch(`${base}/services/it-software-consultancy`)
  ).text();
  assert.match(service, /Discover &amp; define/);
  assert.match(service, /scope document/);
  assert.match(service, /href="\/work\/kraam"/);
  assert.match(service, /href="\/work\/northciti"/);
});
