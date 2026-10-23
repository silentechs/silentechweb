import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
const cases = [
  ["development remains noindex", "development", undefined, undefined, false],
  [
    "ordinary production is indexable",
    "production",
    undefined,
    undefined,
    true,
  ],
  ["Vercel preview remains noindex", "production", "preview", undefined, false],
  [
    "Vercel production is indexable",
    "production",
    "production",
    undefined,
    true,
  ],
  [
    "manual staging can disable indexing",
    "production",
    undefined,
    "false",
    false,
  ],
];
for (const [label, mode, vercel, override, expected] of cases) {
  test(label, () => {
    const env = { ...process.env, NODE_ENV: mode };
    delete env.VERCEL_ENV;
    delete env.SITE_INDEXABLE;
    if (vercel) env.VERCEL_ENV = vercel;
    if (override) env.SITE_INDEXABLE = override;
    const result = spawnSync(
      process.execPath,
      [
        "--experimental-strip-types",
        "--input-type=module",
        "-e",
        'const {canIndex} = await import("./src/lib/seo.ts"); process.stdout.write(String(canIndex));',
      ],
      { encoding: "utf8", env },
    );
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout, String(expected));
  });
}
