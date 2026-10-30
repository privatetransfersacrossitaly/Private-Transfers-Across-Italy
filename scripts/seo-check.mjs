/**
 * Launch checks for the production domain, canonicals, hreflang, robots and
 * the sitemap.
 *
 *   npm run build && npm start -- -p 3000
 *   npm run check:seo                      # or: node scripts/seo-check.mjs <base>
 *
 * ── Why it tests a running server rather than the source ──────────────────
 * Reading `lib/routes.ts` would only prove that the registry agrees with
 * itself. Everything that can actually be wrong at launch happens after the
 * build: a canonical baked from a missing environment variable, a sitemap
 * entry that 404s, a page that inherits a `noindex` nobody meant, a draft that
 * escaped into the sitemap. So this fetches real responses and reads the real
 * HTML.
 *
 * It fetches from `base` (localhost by default) but compares against the
 * production origin, because that is what a statically generated page emits
 * regardless of the host serving it. Every sitemap URL is rewritten onto
 * `base` to be fetched, and checked unrewritten.
 *
 * Redirects are never followed: a sitemap URL that redirects is a defect, and
 * following it would hide exactly that.
 */

const PRODUCTION_ORIGIN = "https://privatetransfersacrossitaly.com";

/**
 * The three policy pages, both languages. Published and indexable since
 * 29 October 2026; they were `published: false` drafts before that.
 *
 * Written out again here on purpose, rather than read from the registry. Two
 * independent lists are what make the check a check: if one of these is
 * unpublished or re-noindexed by accident, this file disagrees and the run
 * fails. They are asserted twice over — present in the sitemap below, and
 * individually indexable and self-canonical in their own section.
 */
const POLICY_PATHS = [
  "/privacy-policy",
  "/terms-and-conditions",
  "/cancellation-and-refund",
  "/it/privacy",
  "/it/termini-e-condizioni",
  "/it/cancellazione-e-rimborsi",
];

/** Never in the sitemap, never indexable, access-controlled elsewhere. */
const PRIVATE_PATHS = ["/crm", "/crm/login"];

const FORBIDDEN_HOSTS = [
  "localhost",
  "127.0.0.1",
  "your-domain",
  ".vercel.app",
  ".netlify.app",
  ".pages.dev",
  "www.privatetransfersacrossitaly.com",
];

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/+$/, "");

let failures = 0;
let checks = 0;

function ok(message) {
  checks += 1;
  console.log(`  ok   ${message}`);
}

function fail(message) {
  checks += 1;
  failures += 1;
  console.log(`  FAIL ${message}`);
}

function assert(condition, message) {
  if (condition) ok(message);
  else fail(message);
}

function section(title) {
  console.log(`\n${title}`);
}

/** The production URL, rewritten onto whichever host we are testing. */
function fetchable(url) {
  return url.startsWith(PRODUCTION_ORIGIN)
    ? base + url.slice(PRODUCTION_ORIGIN.length)
    : url;
}

async function get(url) {
  const response = await fetch(fetchable(url), { redirect: "manual" });
  const body = await response.text();
  return { status: response.status, headers: response.headers, body };
}

const attr = (tag, name) =>
  tag.match(new RegExp(`${name}=["']([^"']*)["']`, "i"))?.[1];

function canonicalOf(html) {
  const tag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0];
  return tag ? attr(tag, "href") : undefined;
}

function robotsMetaOf(html) {
  const tag = html.match(/<meta[^>]+name=["']robots["'][^>]*>/i)?.[0];
  return tag ? attr(tag, "content") : undefined;
}

function alternatesOf(html) {
  const found = {};
  for (const tag of html.match(/<link[^>]+rel=["']alternate["'][^>]*>/gi) ?? []) {
    const lang = attr(tag, "hreflang");
    if (lang) found[lang] = attr(tag, "href");
  }
  return found;
}

// ── robots.txt ─────────────────────────────────────────────────────────────

section("robots.txt");

const robots = await get(`${base}/robots.txt`);
assert(robots.status === 200, `responds 200 (got ${robots.status})`);
assert(
  robots.body.includes(`Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml`),
  "names the production sitemap absolutely",
);
assert(
  !/^Disallow:\s*\/\s*$/m.test(robots.body),
  "does not blanket-disallow the site",
);
for (const host of FORBIDDEN_HOSTS) {
  if (robots.body.includes(host)) fail(`robots.txt mentions ${host}`);
}
ok("no localhost, preview or www host in robots.txt");

// ── sitemap.xml ────────────────────────────────────────────────────────────

section("sitemap.xml");

const sitemap = await get(`${base}/sitemap.xml`);
assert(sitemap.status === 200, `responds 200 (got ${sitemap.status})`);

const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`  ${locs.length} URLs`);

assert(locs.length > 0, "is not empty");
assert(
  locs.every((url) => url.startsWith(`${PRODUCTION_ORIGIN}/`) || url === PRODUCTION_ORIGIN),
  "every URL is on the production origin",
);
assert(new Set(locs).size === locs.length, "contains no duplicate URL");
assert(
  !locs.some((url) => FORBIDDEN_HOSTS.some((host) => url.includes(host))),
  "contains no localhost, preview or www URL",
);
// Including the homepage, which is the bare origin. See absoluteUrl().
assert(!locs.some((url) => url.endsWith("/")), "no trailing slashes");
assert(!locs.some((url) => url.includes("#")), "no section anchors");

const paths = locs.map((url) => url.slice(PRODUCTION_ORIGIN.length) || "/");

for (const policy of POLICY_PATHS) {
  assert(paths.includes(policy), `includes the policy page ${policy}`);
}
for (const priv of PRIVATE_PATHS) {
  assert(!paths.includes(priv), `excludes the private ${priv}`);
}

const english = paths.filter((p) => !p.startsWith("/it"));
const italian = paths.filter((p) => p.startsWith("/it"));
assert(
  english.length === italian.length,
  `one Italian URL per English URL (${english.length} en, ${italian.length} it)`,
);

// `lastModified` is deliberately absent; see the comment in app/sitemap.ts.
assert(
  !sitemap.body.includes("<lastmod>"),
  "emits no fabricated <lastmod> date",
);

// ── every sitemap URL ──────────────────────────────────────────────────────

section(`the ${locs.length} sitemap URLs`);

const alternatesByUrl = new Map();
const problems = [];
const linkProblems = [];
let externalAnchors = 0;

for (const url of locs) {
  const page = await get(url);
  const path = url.slice(PRODUCTION_ORIGIN.length) || "/";

  if (page.status !== 200) {
    problems.push(`${path} responded ${page.status} (a sitemap URL must be 200, not a redirect)`);
    continue;
  }

  const canonical = canonicalOf(page.body);
  if (canonical !== url) {
    problems.push(`${path} canonicals to ${canonical ?? "nothing"}, not to itself`);
  }

  const robotsMeta = robotsMetaOf(page.body);
  if (robotsMeta && /noindex|nofollow|none/i.test(robotsMeta)) {
    problems.push(`${path} is published but carries robots "${robotsMeta}"`);
  }

  const xRobots = page.headers.get("x-robots-tag");
  if (xRobots && /noindex|none/i.test(xRobots)) {
    problems.push(`${path} is published but the response header says "${xRobots}"`);
  }

  const alternates = alternatesOf(page.body);
  alternatesByUrl.set(url, alternates);

  if (!alternates.en || !alternates.it) {
    problems.push(`${path} is missing an en or it alternate`);
  }
  if (alternates["x-default"] !== alternates.en) {
    problems.push(`${path} points x-default at ${alternates["x-default"]}, not at its English URL`);
  }
  const self = path.startsWith("/it") ? alternates.it : alternates.en;
  if (self !== url) {
    problems.push(`${path} does not list itself as its own alternate`);
  }
  for (const [lang, href] of Object.entries(alternates)) {
    if (!href?.startsWith(PRODUCTION_ORIGIN)) {
      problems.push(`${path} hreflang ${lang} is off-origin: ${href}`);
    }
  }

  for (const host of FORBIDDEN_HOSTS) {
    if (page.body.includes(host)) {
      problems.push(`${path} HTML mentions ${host}`);
    }
  }

  // Outbound links. External citations are followed on purpose — they point
  // at the authority a page's claim rests on — so `nofollow` is a defect
  // here, not a default. `noopener` is required. And no internal link may
  // carry `nofollow`, which is what `outboundRel` exists to guarantee.
  for (const tag of page.body.match(/<a\s[^>]*>/gi) ?? []) {
    const target = attr(tag, "href");
    if (!target) continue;
    const rel = attr(tag, "rel") ?? "";
    const isExternal =
      /^https?:\/\//i.test(target) && !target.startsWith(PRODUCTION_ORIGIN);
    if (isExternal) {
      externalAnchors += 1;
      if (/nofollow/i.test(rel)) {
        linkProblems.push(`${path} → ${target} carries nofollow`);
      }
      if (!/noopener/i.test(rel)) {
        linkProblems.push(`${path} → ${target} is missing noopener`);
      }
      if (attr(tag, "target") === "_blank" && !/noreferrer/i.test(rel)) {
        linkProblems.push(`${path} → ${target} opens a new tab without noreferrer`);
      }
    } else if (/nofollow/i.test(rel)) {
      linkProblems.push(`${path} internal link ${target} carries nofollow`);
    }
  }
}

assert(problems.length === 0, "all 200, self-canonical, indexable, on-origin");
for (const problem of problems) console.log(`       - ${problem}`);

section(`outbound links (${externalAnchors} external anchors)`);
assert(
  linkProblems.length === 0,
  "external links followed with noopener; no internal link nofollowed",
);
for (const problem of linkProblems) console.log(`       - ${problem}`);

// Reciprocity: a pair must agree on the whole alternate set, not merely each
// link at the other. Comparing the sets catches a page that points at a
// counterpart which points somewhere else.
section("hreflang reciprocity");

let asymmetric = 0;
for (const [url, alternates] of alternatesByUrl) {
  const counterpart = url === alternates.en ? alternates.it : alternates.en;
  const theirs = alternatesByUrl.get(counterpart);
  if (!theirs) {
    console.log(`       - ${url} names a counterpart that is not in the sitemap`);
    asymmetric += 1;
    continue;
  }
  if (JSON.stringify(theirs) !== JSON.stringify(alternates)) {
    console.log(`       - ${url} and ${counterpart} declare different alternate sets`);
    asymmetric += 1;
  }
}
assert(asymmetric === 0, "every pair declares the same alternate set");

// ── drafts stay drafts ─────────────────────────────────────────────────────

section("policy pages: published and indexable");

for (const path of POLICY_PATHS) {
  const page = await get(`${base}${path}`);
  const robotsMeta = robotsMetaOf(page.body);
  assert(page.status === 200, `${path} is reachable (${page.status})`);
  assert(
    !robotsMeta || !/noindex|none/i.test(robotsMeta),
    `${path} is indexable (robots: "${robotsMeta ?? "default"}")`,
  );
  assert(
    !/noindex|none/i.test(page.headers.get("x-robots-tag") ?? ""),
    `${path} has no noindex response header`,
  );
  assert(
    canonicalOf(page.body) === `${PRODUCTION_ORIGIN}${path}`,
    `${path} canonicals to itself on the production origin`,
  );
  const alternates = alternatesOf(page.body);
  const counterpart = path.startsWith("/it") ? alternates.en : alternates.it;
  assert(
    !!counterpart && counterpart.startsWith(PRODUCTION_ORIGIN) && counterpart !== `${PRODUCTION_ORIGIN}${path}`,
    `${path} declares its counterpart in the other language (${counterpart ?? "none"})`,
  );
  // No drafting apparatus may reach a published policy page.
  for (const phrase of [
    "TO BE CONFIRMED",
    "DA CONFERMARE",
    "Legal review required",
    "Awaiting legal review",
    "Confirmation required",
    "Recommendation only",
    "working draft",
    "Not yet in force",
    "Non ancora in vigore",
    "Revisione legale",
    "In attesa di revisione",
    "Conferma necessaria",
    "Bozza",
  ]) {
    if (page.body.includes(phrase)) {
      fail(`${path} still shows drafting text: "${phrase}"`);
    }
  }
}
ok("no drafting placeholders or review notes on any policy page");

// ── private routes ─────────────────────────────────────────────────────────

section("private routes");

for (const path of PRIVATE_PATHS) {
  const page = await get(`${base}${path}`);
  const header = page.headers.get("x-robots-tag") ?? "";
  assert(
    /noindex/i.test(header),
    `${path} responds with X-Robots-Tag: noindex (got "${header || "nothing"}")`,
  );
}

// ── result ─────────────────────────────────────────────────────────────────

console.log(
  `\n${checks - failures}/${checks} checks passed against ${base}` +
    ` (canonical origin ${PRODUCTION_ORIGIN})`,
);

if (failures > 0) {
  console.log(`${failures} failed.`);
  process.exit(1);
}
console.log("All SEO launch checks passed.");
