// Generates 1200x630 sharing cards in the Silentech identity: chalk page, ink type,
// flame accent and the woven stripe. Run: node scripts/generate-social-images.cjs
const sharp = require("sharp");
const fs = require("node:fs/promises");

const cards = [
  ["home", "Software your", "business can run on.", "A software studio in Tamale, Ghana", "#F4F5FA"],
  ["consultancy", "IT and software", "consultancy.", "Requirements to launch. One stage or all four.", "#F4F5FA"],
  ["services", "What we", "build and advise on.", "Custom software  /  Consultancy  /  Profile websites", "#F4F5FA"],
  ["profile-websites", "Websites for leaders", "and public figures.", "With a content studio and analytics", "#F4F5FA"],
  ["products", "Software we", "make ourselves.", "Commerce  /  StitchCraft  /  Schools  /  Docket", "#F4F5FA"],
  ["docket", "Every matter,", "in order.", "Docket. Practice management for law chambers. Opening soon.", "#17120E"],
  ["schools", "Run the whole school", "from one place.", "Silentech Schools. Opening soon.", "#0E6F73"],
  ["northciti", "NorthCiti.", "News, radio and television.", "Built for Vanguard Multimedia", "#F4F5FA"],
  ["aminadam", "Amin Adam.", "A profile website.", "Writing, speeches and enquiries for an economist", "#F4F5FA"],
  ["kraam", "Kraam.", "Family support, connected.", "Built with a partner in Germany", "#F4F5FA"],
  ["commerce", "Silentech Commerce.", "Sell offline. Sync later.", "Point of sale, stock and records", "#F4F5FA"],
  ["philbro", "Philbro Oil.", "Products, company and trade.", "Corporate website and catalogue", "#F4F5FA"],
];

const stripe = (dark) => {
  const base = dark ? "#F3F4F9" : "#1E2468";
  const thin = dark ? "#1E2468" : "#F3F4F9";
  let x = 0;
  let out = "";
  while (x < 1200) {
    out += `<rect x="${x + 22}" y="0" width="3" height="18" fill="${thin}"/><rect x="${x + 47}" y="0" width="3" height="18" fill="#F45132"/><rect x="${x + 72}" y="0" width="2" height="18" fill="${thin}"/><rect x="${x + 96}" y="0" width="2" height="18" fill="#F4C04A"/>`;
    x += 98;
  }
  return `<g transform="translate(0 612)"><rect width="1200" height="18" fill="${base}"/>${out}</g>`;
};

(async () => {
  await fs.mkdir("public/social", { recursive: true });
  const logo = (await fs.readFile("public/brand/logo-refined.png")).toString("base64");
  for (const [slug, first, second, footer, bg] of cards) {
    const dark = bg !== "#F4F5FA";
    const fg = dark ? "#FFFFFF" : "#10122B";
    const sub = dark ? "rgba(255,255,255,0.78)" : "#555A7A";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="${bg}"/><image href="data:image/png;base64,${logo}" x="64" y="52" width="64" height="64"/><text x="142" y="96" font-family="Helvetica, Arial, sans-serif" font-size="38" font-weight="700" letter-spacing="-1.5" fill="${fg}">silentech<tspan fill="#F45132">.</tspan></text><text x="64" y="330" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="700" letter-spacing="-4.5" fill="${fg}">${first}</text><text x="64" y="436" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="700" letter-spacing="-4.5" fill="${fg}">${second}</text><text x="66" y="520" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="${sub}">${footer}</text>${stripe(dark)}</svg>`;
    await sharp(Buffer.from(svg)).png().toFile(`public/social/${slug}.png`);
  }
})();
