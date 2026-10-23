import { test } from "node:test";
import assert from "node:assert/strict";
const base = process.env.SITE_URL || "http://localhost:3100";
test("homepage gives visitors project and contact paths in server-rendered HTML", async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const route of [
    "/work/northciti",
    "/work/kraam",
    "/work/commerce",
    "/work/philbro",
    "/work/aminadam",
    "/products/schools",
    "/contact",
  ])
    assert.ok(
      html.includes(`href="${route}"`),
      `Missing project link: ${route}`,
    );
  assert.match(html, /mailto:support@silentech.live/);
  assert.match(html, /<h1[\s>]/);
});
for (const [slug, name] of [
  ["northciti", "NorthCiti"],
  ["kraam", "Kraam"],
  ["commerce", "Commerce"],
  ["philbro", "Philbro"],
  ["aminadam", "Amin Adam"],
]) {
  test(`${name} has a project page with a heading and distinct metadata`, async () => {
    const response = await fetch(`${base}/work/${slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>[^<]*${name}`));
    assert.match(html, /<h1[\s>]/);
    assert.match(html, /mailto:support@silentech.live/);
  });
}
test("unknown project returns 404", async () => {
  assert.equal((await fetch(`${base}/work/not-a-project`)).status, 404);
});
test("every page has an absolute social preview with an available image", async () => {
  const expected = {
    "": "home",
    "/work/northciti": "northciti",
    "/work/kraam": "kraam",
    "/work/commerce": "commerce",
    "/work/philbro": "philbro",
    "/work/aminadam": "aminadam",
    "/products": "products",
    "/products/schools": "schools",
    "/products/docket": "docket",
    "/services/it-software-consultancy": "consultancy",
    "/services": "services",
    "/services/profile-websites": "profile-websites",
    "/work": "home",
    "/about": "home",
    "/contact": "home",
  };
  for (const [path, image] of Object.entries(expected)) {
    const html = await (await fetch(`${base}${path}`)).text();
    const found = html.match(/<meta property="og:image" content="([^"]+)"/);
    assert.ok(found, `Missing social image for ${path || "/"}`);
    const url = new URL(found[1]);
    assert.equal(url.protocol, "https:");
    assert.equal(url.pathname, `/social/${image}.png`);
    assert.equal((await fetch(`${base}${url.pathname}`)).status, 200);
  }
});
test("new pages render with one heading and a working contact path", async () => {
  for (const path of ["/work", "/products", "/products/schools", "/products/docket", "/about", "/contact", "/services", "/services/profile-websites"]) {
    const response = await fetch(`${base}${path}`);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, path);
    assert.match(html, /support@silentech.live/, path);
  }
});
test("Silentech Schools is presented as opening soon and links to the product site", async () => {
  const html = await (await fetch(`${base}/products/schools`)).text();
  assert.match(html, /Opening soon/);
  assert.ok(html.includes("https://schools.silentech.live/"));
});
test("sitemap lists every public page", async () => {
  const xml = await (await fetch(`${base}/sitemap.xml`)).text();
  for (const path of ["/work", "/products", "/products/schools", "/products/docket", "/about", "/contact", "/services", "/services/it-software-consultancy", "/services/profile-websites"])
    assert.ok(xml.includes(path), `Sitemap missing ${path}`);
});
test("Data Protection Commission registration is shown on key pages", async () => {
  for (const path of ["/", "/about", "/services", "/products/schools"]) {
    const html = await (await fetch(`${base}${path}`)).text();
    assert.ok(html.includes("APL-2026-AAAACY"), `Missing registration ref on ${path}`);
    assert.match(html, /Data Protection Commission/);
  }
});
test("profile websites page describes the content studio and analytics", async () => {
  const html = await (await fetch(`${base}/services/profile-websites`)).text();
  assert.match(html, /content studio/i);
  assert.match(html, /analytics/i);
});
test("Docket is presented as opening soon, with real Commerce screenshots on the case page", async () => {
  const docket = await (await fetch(`${base}/products/docket`)).text();
  assert.match(docket, /Opening soon/);
  assert.match(docket, /Every matter, in order/);
  const commerce = await (await fetch(`${base}/work/commerce`)).text();
  assert.match(commerce, /commerce-sell/);
  for (const file of ["commerce-sell", "commerce-sell-cart", "docket-home"])
    assert.equal((await fetch(`${base}/product/${file}.webp`)).status, 200);
  assert.match(commerce, /commerce-tour\.mp4/);
  assert.equal((await fetch(`${base}/video/commerce-tour.mp4`, { method: "HEAD" })).status, 200);
});
