/**
 * Publish blog posts to D1.
 *
 *   node scripts/blog/publish.mjs <post-file.mjs>             # local D1 (default)
 *   node scripts/blog/publish.mjs <post-file.mjs> --remote    # the live database
 *   node scripts/blog/publish.mjs <post-file.mjs> --update    # overwrite existing slugs
 *   node scripts/blog/publish.mjs <post-file.mjs> --dry-run   # validate, print SQL, write nothing
 *   node scripts/blog/publish.mjs --unpublish en:<slug> [--remote]
 *
 * ── The equivalent of Italy Taxi's seed scripts ───────────────────────────
 * Italy Taxi publishes by running a one-off `seed_<topic>.js` per post that
 * builds the HTML and inserts it with the Supabase service key. There is no
 * editor and no blogger login; the script is the CMS. This is the same idea
 * with the boilerplate moved here once: a post file only describes the post
 * (see scripts/blog/posts/_template.mjs), and this script validates it and
 * writes it through Wrangler, which is how this project reaches D1.
 *
 * ── Safe by default ───────────────────────────────────────────────────────
 *   - Local unless `--remote` is given, so trying a post costs nothing.
 *   - Insert-only unless `--update` is given: an existing slug is refused,
 *     exactly as Italy Taxi's scripts refuse ("already exists — nothing
 *     inserted"). `--update` keeps `created_at` and the original
 *     `published_at`, so a correction does not pretend to be a new post.
 *   - Every check runs before any SQL is sent, and all statements for one
 *     file go in one `wrangler d1 execute --file` call.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { isAbsolute, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { randomUUID } from "node:crypto";

const root = resolve(import.meta.dirname, "..", "..");
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const REMOTE = flag("--remote");
const UPDATE = flag("--update");
const DRY = flag("--dry-run");
const target = REMOTE ? "--remote" : "--local";

function databaseName() {
  const cfg = readFileSync(join(root, "wrangler.jsonc"), "utf8");
  const name = /"database_name"\s*:\s*"([^"]+)"/.exec(cfg)?.[1];
  if (!name) throw new Error("No d1_databases.database_name in wrangler.jsonc");
  return name;
}
const DB = databaseName();

function wrangler(extra) {
  const cmd = process.platform === "win32" ? "npx.cmd" : "npx";
  return execFileSync(cmd, ["--no-install", "wrangler", "d1", "execute", DB, target, ...extra], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    shell: process.platform === "win32",
  });
}

/** Run a read-only query and return its rows. */
function query(sql) {
  const out = wrangler(["--json", "--command", JSON.stringify(sql)]);
  const parsed = JSON.parse(out.slice(out.indexOf("[")));
  return parsed[0]?.results ?? [];
}

/** SQL literal. D1 has no bound parameters through the CLI, so this is the only escaping. */
function lit(value) {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "number") return String(value);
  const s = String(value);
  if (s.includes("\u0000")) throw new Error("NUL character in a value");
  return `'${s.replace(/'/g, "''")}'`;
}

const nowIso = () => new Date().toISOString();
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/* ── Unpublish ─────────────────────────────────────────────────────────── */

const unpublishArg = args.find((a) => a.startsWith("--unpublish"));
if (unpublishArg) {
  const spec = unpublishArg.includes("=") ? unpublishArg.split("=")[1] : args[args.indexOf(unpublishArg) + 1];
  const [language, slug] = (spec ?? "").split(":");
  if (!["en", "it"].includes(language) || !SLUG.test(slug ?? "")) {
    console.error("Usage: --unpublish en:<slug> or --unpublish it:<slug>");
    process.exit(1);
  }
  const sql = `UPDATE blogs SET status = 'draft', updated_at = ${lit(nowIso())} WHERE language = ${lit(language)} AND slug = ${lit(slug)};`;
  if (DRY) { console.log(sql); process.exit(0); }
  wrangler(["--command", JSON.stringify(sql)]);
  console.log(`Set ${language}:${slug} to draft on the ${REMOTE ? "REMOTE" : "local"} database.`);
  process.exit(0);
}

/* ── Load and validate ─────────────────────────────────────────────────── */

const file = args.find((a) => !a.startsWith("--"));
if (!file) {
  console.error("Usage: node scripts/blog/publish.mjs <post-file.mjs> [--remote] [--update] [--dry-run]");
  process.exit(1);
}
const filePath = isAbsolute(file) ? file : resolve(process.cwd(), file);
const mod = (await import(pathToFileURL(filePath).href)).default;
if (!mod || !Array.isArray(mod.posts) || mod.posts.length === 0) {
  console.error(`${file} must export default { author?, posts: [...] }`);
  process.exit(1);
}

const problems = [];
const warnings = [];
const posts = [...mod.posts].sort((a, b) => (a.language === "en" ? -1 : 1) - (b.language === "en" ? -1 : 1));

for (const [i, p] of posts.entries()) {
  const at = `${p.language ?? "?"}:${p.slug ?? `#${i}`}`;
  if (!["en", "it"].includes(p.language)) problems.push(`${at}: language must be "en" or "it"`);
  if (!SLUG.test(p.slug ?? "") || p.slug.length < 3 || p.slug.length > 120)
    problems.push(`${at}: slug must be 3-120 chars of a-z, 0-9 and single hyphens`);
  for (const field of ["title", "excerpt", "content", "category"])
    if (!p[field] || !String(p[field]).trim()) problems.push(`${at}: ${field} is required`);
  if (p.language === "en" && p.translation_of) problems.push(`${at}: only Italian posts take translation_of`);
  if (p.language === "it" && p.translation_of && !SLUG.test(p.translation_of))
    problems.push(`${at}: translation_of must be an English slug`);
  if (p.status && !["draft", "published"].includes(p.status)) problems.push(`${at}: status must be draft or published`);
  if (p.tags && !Array.isArray(p.tags)) problems.push(`${at}: tags must be an array`);
  if (/<script\b|\son[a-z]+\s*=|javascript:/i.test(p.content ?? ""))
    problems.push(`${at}: content contains script, an inline handler or a javascript: URL`);
  if (p.featured_image_url) {
    if (p.featured_image_url.startsWith("/")) {
      if (!existsSync(join(root, "public", p.featured_image_url)))
        problems.push(`${at}: featured image public${p.featured_image_url} does not exist`);
    } else problems.push(`${at}: featured_image_url must be a path under public/, e.g. /blog/<file>.webp`);
    if (!p.featured_image_alt) warnings.push(`${at}: featured image has no alt text`);
  }
  const title = p.seo_title || p.title || "";
  if (title.length > 60) warnings.push(`${at}: title is ${title.length} chars (search results show about 60)`);
  const description = p.seo_description || p.excerpt || "";
  if (description.length > 160) warnings.push(`${at}: description is ${description.length} chars (aim for 160 or fewer)`);
  if (!/<h2\b/i.test(p.content ?? "")) warnings.push(`${at}: no <h2> headings, so no table of contents`);
}

// Italian rows must translate an English post that exists — in this file or already in D1.
const enInFile = new Set(posts.filter((p) => p.language === "en").map((p) => p.slug));

if (problems.length) {
  console.error("Not published. Fix these first:\n  - " + problems.join("\n  - "));
  process.exit(1);
}

/* ── Author ────────────────────────────────────────────────────────────── */

const statements = [];
let authorId = null;
if (mod.author) {
  const a = mod.author;
  if (!a.id || !a.full_name) {
    console.error("author needs an id (a stable string you choose) and a full_name");
    process.exit(1);
  }
  authorId = a.id;
  const t = nowIso();
  statements.push(
    `INSERT INTO bloggers (id, full_name, email, avatar_url, bio, is_active, created_at, updated_at)
     VALUES (${lit(a.id)}, ${lit(a.full_name)}, ${lit(a.email)}, ${lit(a.avatar_url)}, ${lit(a.bio)}, 1, ${lit(t)}, ${lit(t)})
     ON CONFLICT(id) DO UPDATE SET full_name = excluded.full_name, email = excluded.email,
       avatar_url = excluded.avatar_url, bio = excluded.bio, updated_at = excluded.updated_at;`,
  );
}

/* ── Existing rows ─────────────────────────────────────────────────────── */

const existing = DRY
  ? []
  : query(
      `SELECT language, slug, created_at, published_at FROM blogs WHERE ${posts
        .map((p) => `(language = ${lit(p.language)} AND slug = ${lit(p.slug)})`)
        .join(" OR ")}`,
    );
const existingKey = new Map(existing.map((r) => [`${r.language}:${r.slug}`, r]));

const missingEn = posts
  .filter((p) => p.language === "it" && p.translation_of && !enInFile.has(p.translation_of))
  .map((p) => p.translation_of);
if (missingEn.length && !DRY) {
  const found = new Set(
    query(`SELECT slug FROM blogs WHERE language = 'en' AND slug IN (${missingEn.map(lit).join(", ")})`).map((r) => r.slug),
  );
  const absent = missingEn.filter((s) => !found.has(s));
  if (absent.length) {
    console.error(`Not published. translation_of names English posts that do not exist: ${absent.join(", ")}`);
    process.exit(1);
  }
}

/* ── Statements ────────────────────────────────────────────────────────── */

for (const p of posts) {
  const key = `${p.language}:${p.slug}`;
  const row = existingKey.get(key);
  const t = nowIso();
  const status = p.status ?? "published";
  const cols = {
    language: p.language,
    slug: p.slug,
    translation_of: p.language === "it" ? p.translation_of ?? null : null,
    title: p.title,
    excerpt: p.excerpt,
    content: p.content,
    featured_image_url: p.featured_image_url ?? null,
    featured_image_alt: p.featured_image_alt ?? null,
    category: p.category,
    tags: JSON.stringify(p.tags ?? []),
    status,
    author_id: authorId,
    read_time: p.read_time ?? null,
    seo_title: p.seo_title ?? null,
    seo_description: p.seo_description ?? null,
    focus_keyword: p.focus_keyword ?? null,
  };

  if (row && !UPDATE) {
    console.error(`${key} already exists — nothing written. Re-run with --update to overwrite it.`);
    process.exit(1);
  }

  if (row) {
    const publishedAt = status === "published" ? row.published_at ?? t : row.published_at;
    const set = Object.entries(cols)
      .filter(([k]) => k !== "language" && k !== "slug")
      .map(([k, v]) => `${k} = ${lit(v)}`)
      .join(", ");
    statements.push(
      `UPDATE blogs SET ${set}, published_at = ${lit(publishedAt)}, updated_at = ${lit(t)}
        WHERE language = ${lit(p.language)} AND slug = ${lit(p.slug)};`,
    );
  } else {
    const all = { id: randomUUID(), ...cols, created_at: t, updated_at: t, published_at: status === "published" ? t : null };
    statements.push(
      `INSERT INTO blogs (${Object.keys(all).join(", ")}) VALUES (${Object.values(all).map(lit).join(", ")});`,
    );
  }
}

const sql = statements.join("\n\n") + "\n";

if (warnings.length) console.warn("Warnings:\n  - " + warnings.join("\n  - "));

if (DRY) {
  console.log(sql);
  console.log(`-- dry run: ${posts.length} post(s) validated, nothing written`);
  process.exit(0);
}

const dir = mkdtempSync(join(tmpdir(), "blog-publish-"));
const sqlFile = join(dir, "publish.sql");
writeFileSync(sqlFile, sql, "utf8");
wrangler(["--file", sqlFile, "--yes"]);

for (const p of posts) {
  const action = existingKey.has(`${p.language}:${p.slug}`) ? "updated" : "inserted";
  const path = p.language === "it" ? `/it/blog/${p.slug}` : `/blog/${p.slug}`;
  console.log(`${action}  ${p.status ?? "published"}  ${path}`);
}
console.log(`Done — ${REMOTE ? "REMOTE (live site)" : "local"} database "${DB}".`);
