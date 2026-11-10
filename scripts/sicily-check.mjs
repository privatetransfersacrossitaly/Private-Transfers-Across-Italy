/**
 * Launch checks for the Sicily cluster: 14 page types, 28 URLs.
 *
 *   npm run dev            # or a production server
 *   node scripts/sicily-check.mjs http://localhost:3000
 *
 * ── Why this lives in the repository ──────────────────────────────────────
 * Its first version did not. It sat in a scratch directory alongside the
 * other suites for this project, and the operating system cleared that
 * directory overnight, taking every check with it. A test you cannot re-run
 * is not a test — so this one sits next to seo-check.mjs, where the project
 * already keeps the checks it means to keep.
 *
 * ── What it asserts that seo-check.mjs does not ───────────────────────────
 * seo-check.mjs proves the site's canonicals, hreflang, robots and sitemap
 * are coherent. This proves the things specific to how this cluster was
 * commissioned:
 *
 *   - Titles are 50-60 characters, carry a call to action, and carry no
 *     brand. That rule is particular to Sicily and nothing else enforces it.
 *   - Keyword ownership runs both ways. A city page must not claim its
 *     airport's query AND the airport must not claim the city's. Seven
 *     cities, three airports and three ports on one island is exactly the
 *     shape that cannibalises itself if nobody checks.
 *   - Every page links back to the pillar, and the pillar reaches all
 *     thirteen supporting pages.
 *   - Schema appears exactly once per type, not once per section.
 *
 * It fetches real responses rather than reading the registry, because
 * reading the registry only proves the registry agrees with itself.
 */

const BASE = process.argv[2] ?? "http://localhost:3000";
const PROD = "https://privatetransfersacrossitaly.com";

let pass = 0;
let fail = 0;
const failures = [];

const check = (name, ok, detail = "") => {
  if (ok) {
    pass++;
  } else {
    fail++;
    failures.push(`${name}${detail ? ` — ${detail}` : ""}`);
  }
};

const get = async (path) => {
  const res = await fetch(BASE + path, { redirect: "manual" });
  return { status: res.status, headers: res.headers, body: await res.text() };
};

const first = (html, re) => (html.match(re) ?? [])[1];

/**
 * Entities, decoded.
 *
 * Title and description lengths must be measured on the decoded string,
 * because that is what a search result shows. An Italian apostrophe is one
 * character to a reader and six in the markup, and measuring the markup
 * would fail pages that are perfectly fine.
 */
const decode = (s) =>
  (s ?? "")
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x2F;/g, "/")
    .replace(/&nbsp;/g, " ");

/** [en, it, [primary EN, primary IT], [queries this page must NOT claim]] */
const PAGES = [
  ["/destinations/sicily", "/it/destinazioni/sicilia",
    ["Private Transfers in Sicily", "Transfer privati in Sicilia"], []],

  ["/destinations/sicily/palermo", "/it/destinazioni/sicilia/palermo",
    ["Palermo Private Transfers", "Transfer privati a Palermo"],
    ["Palermo Airport Transfers", "Palermo Cruise Port Transfers"]],
  ["/destinations/sicily/catania", "/it/destinazioni/sicilia/catania",
    ["Catania Private Transfers", "Transfer privati a Catania"],
    ["Catania Airport Transfers", "Catania Cruise Port Transfers"]],
  ["/destinations/sicily/taormina", "/it/destinazioni/sicilia/taormina",
    ["Taormina Private Transfers", "Transfer privati a Taormina"],
    ["Catania Airport Transfers", "Messina Cruise Port Transfers"]],
  ["/destinations/sicily/syracuse", "/it/destinazioni/sicilia/siracusa",
    ["Syracuse and Ortigia Private Transfers", "Transfer privati a Siracusa"],
    ["Catania Airport Transfers", "Catania Cruise Port Transfers"]],
  ["/destinations/sicily/trapani", "/it/destinazioni/sicilia/trapani",
    ["Trapani Private Transfers", "Transfer privati a Trapani"],
    ["Trapani Airport Transfers"]],
  ["/destinations/sicily/agrigento", "/it/destinazioni/sicilia/agrigento",
    ["Agrigento Private Transfers", "Transfer privati ad Agrigento"],
    ["Palermo Airport Transfers", "Catania Airport Transfers"]],
  ["/destinations/sicily/cefalu", "/it/destinazioni/sicilia/cefalu",
    ["Cefalù Private Transfers", "Transfer privati a Cefalù"],
    ["Palermo Airport Transfers", "Palermo Cruise Port Transfers"]],

  ["/airports/palermo-falcone-borsellino", "/it/aeroporti/palermo-falcone-borsellino",
    ["Palermo Airport Transfers", "Transfer aeroporto di Palermo"],
    ["Palermo Private Transfers", "Palermo Cruise Port Transfers"]],
  ["/airports/catania-fontanarossa", "/it/aeroporti/catania-fontanarossa",
    ["Catania Airport Transfers", "Transfer aeroporto di Catania"],
    ["Catania Private Transfers", "Catania Cruise Port Transfers"]],
  ["/airports/trapani-birgi", "/it/aeroporti/trapani-birgi",
    ["Trapani Airport Transfers", "Transfer aeroporto di Trapani"],
    ["Trapani Private Transfers"]],

  ["/cruise-ports/palermo", "/it/porti-crociere/palermo",
    ["Palermo Cruise Port Transfers", "Transfer porto crociere di Palermo"],
    ["Palermo Private Transfers", "Palermo Airport Transfers"]],
  ["/cruise-ports/catania", "/it/porti-crociere/catania",
    ["Catania Cruise Port Transfers", "Transfer porto crociere di Catania"],
    ["Catania Private Transfers", "Catania Airport Transfers"]],
  ["/cruise-ports/messina", "/it/porti-crociere/messina",
    ["Messina Cruise Port Transfers", "Transfer porto crociere di Messina"],
    ["Taormina Private Transfers", "Catania Airport Transfers"]],
];

const PILLAR = { en: "/destinations/sicily", it: "/it/destinazioni/sicilia" };

const titles = new Map();
const descriptions = new Map();
const headings = new Map();

for (const [en, it, keywords, forbidden] of PAGES) {
  for (const [path, locale, counterpart, keyword] of [
    [en, "en", it, keywords[0]],
    [it, "it", en, keywords[1]],
  ]) {
    const res = await get(path);
    check(`${path} responds 200`, res.status === 200, `status ${res.status}`);

    const title = decode(first(res.body, /<title>([^<]*)<\/title>/));
    check(`${path} title is 50-60 characters`,
      title.length >= 50 && title.length <= 60, `${title.length}: ${title}`);
    check(`${path} title leads with its keyword`,
      title.toLowerCase().includes(keyword.toLowerCase()), title);
    check(`${path} title carries no brand`,
      !/Private Transfers? Across Italy/.test(title), title);
    check(`${path} title has a call to action`,
      /book|reserve|prenota|riserva/i.test(title), title);
    check(`${path} title is unique`, !titles.has(title), titles.get(title) ?? "");
    titles.set(title, path);

    const description = decode(
      first(res.body, /<meta name="description" content="([^"]*)"/));
    check(`${path} description is 120-160 characters`,
      description.length >= 120 && description.length <= 160, `${description.length}`);
    check(`${path} description is unique`,
      !descriptions.has(description), descriptions.get(description) ?? "");
    descriptions.set(description, path);

    const canonical = first(res.body, /rel="canonical" href="([^"]*)"/);
    check(`${path} canonical is self-referencing, no trailing slash`,
      canonical === PROD + path && !canonical.endsWith("/"), canonical);

    const alternates = [...res.body.matchAll(/hreflang="([^"]*)"/gi)].map((m) => m[1]);
    check(`${path} declares en, it and x-default`,
      ["en", "it", "x-default"].every((l) => alternates.includes(l)),
      alternates.join("/"));
    check(`${path} declares its counterpart`, res.body.includes(PROD + counterpart));
    check(`${path} language switcher points at the counterpart`,
      res.body.includes(`href="${counterpart}"`));

    const h1s = [...res.body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
    check(`${path} has exactly one H1`, h1s.length === 1, `${h1s.length}`);
    const h1 = decode((h1s[0]?.[1] ?? "").replace(/<[^>]+>/g, "").trim());
    check(`${path} H1 is unique`, !headings.has(h1), headings.get(h1) ?? "");
    headings.set(h1, path);

    const h2 = (res.body.match(/<h2\b/g) ?? []).length;
    const h3 = (res.body.match(/<h3\b/g) ?? []).length;
    check(`${path} heading hierarchy`, h2 >= 5 && h3 >= 6, `${h2} h2, ${h3} h3`);

    check(`${path} is indexable`,
      !/noindex/i.test(res.headers.get("x-robots-tag") ?? "") &&
      !/<meta name="robots"[^>]*noindex/i.test(res.body));

    for (const type of ["Organization", "WebSite", "WebPage", "BreadcrumbList", "FAQPage"]) {
      const n = (res.body.match(new RegExp(`"@type":"${type}"`, "g")) ?? []).length;
      check(`${path} has exactly one ${type}`, n === 1, `${n}`);
    }

    // Cannibalisation, asserted in both directions across the cluster.
    for (const query of forbidden) {
      check(`${path} does not claim "${query}"`,
        !title.toLowerCase().includes(query.toLowerCase()), title);
    }

    const text = decode(res.body.replace(/<script[\s\S]*?<\/script>/g, " "))
      .replace(/<[^>]+>/g, " ")
      .split(/\s+/)
      .filter((w) => /[a-zA-ZàèéìòùÀÈÉÌÒÙ]/.test(w)).length;
    check(`${path} has substantial content`, text > 1000, `~${text} words`);

    const links = [...new Set(
      [...res.body.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]))]
      .filter((h) => h !== "/" && !h.startsWith("/_next") &&
        !/\.(png|ico|svg|xml|txt|jpg|webp)$/.test(h));
    const broken = [];
    for (const href of links) {
      const r = await fetch(BASE + href, { redirect: "manual" });
      if (r.status !== 200) broken.push(`${href}→${r.status}`);
    }
    check(`${path}: all ${links.length} internal links resolve`,
      broken.length === 0, broken.slice(0, 4).join(", "));

    check(`${path} links to the quote page`,
      links.some((h) => /get-a-quote|richiedi-preventivo/.test(h)));

    if (path !== PILLAR[locale]) {
      check(`${path} links back to the pillar`, links.includes(PILLAR[locale]));
    }
  }
}

// ── The pillar must reach every supporting page ───────────────────────────
for (const locale of ["en", "it"]) {
  const body = (await get(PILLAR[locale])).body;
  for (const [en, it] of PAGES.slice(1)) {
    const target = locale === "en" ? en : it;
    check(`pillar (${locale}) links ${target}`, body.includes(`href="${target}"`));
  }
}

// ── Sitemap ───────────────────────────────────────────────────────────────
const sitemap = await get("/sitemap.xml");
const urls = PAGES.flatMap(([en, it]) => [en, it]);
for (const url of urls) {
  check(`sitemap holds ${url}`, sitemap.body.includes(`<loc>${PROD}${url}</loc>`));
}
const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
check("sitemap has no duplicate URLs",
  new Set(locs).size === locs.length,
  `${locs.length} entries, ${new Set(locs).size} unique`);

console.log(`\n${pass + fail} checks against ${BASE}: ${pass} passed, ${fail} failed`);
if (failures.length) {
  console.log("\nFAILURES:");
  for (const f of failures) console.log(`  • ${f}`);
}
process.exit(fail ? 1 : 0);
