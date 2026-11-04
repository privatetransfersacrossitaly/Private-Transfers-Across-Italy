/**
 * Derive a real `lastmod` for every published page, from git.
 *
 *   node scripts/build-page-dates.mjs
 *
 * Writes lib/page-dates.generated.json — a map of PageId to an ISO date —
 * which app/sitemap.ts reads when emitting the sitemap.
 *
 * ── Why this exists ───────────────────────────────────────────────────────
 * The sitemap used to carry no `lastmod` at all, on the reasoning that one
 * hardcoded date stamped onto every URL is not a modification date, it is a
 * number that looks like one. That reasoning was right about the constant
 * and wrong about the conclusion: `lastmod` is how a crawler decides what
 * deserves a recrawl, and omitting it leaves every URL looking equally
 * stale forever.
 *
 * So this computes the real thing. For each page it finds the files that
 * actually render it — the two route files and every `@/content/...` module
 * they import — and takes the most recent commit date across that set.
 *
 * ── What it does when it cannot tell the truth ────────────────────────────
 * It omits the page. A missing `lastmod` is a crawler shrugging; a wrong one
 * is a crawler being misled. If git is unavailable, if the checkout is
 * shallow (every file would share the single commit's date, which is the
 * constant problem wearing a disguise), or if a page's files cannot be
 * resolved, that page simply gets no date and the sitemap omits the field
 * for it. A build on a CI that clones with `--depth 1` therefore produces
 * exactly the sitemap we had before, rather than a confidently wrong one.
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "lib", "page-dates.generated.json");

const git = (args) =>
  execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();

/** A shallow clone cannot give per-file history, so refuse rather than lie. */
function historyIsUsable() {
  try {
    if (git(["rev-parse", "--is-shallow-repository"]) === "true") {
      console.warn("[page-dates] shallow checkout — omitting lastmod entirely");
      return false;
    }
    return true;
  } catch {
    console.warn("[page-dates] git unavailable — omitting lastmod entirely");
    return false;
  }
}

/**
 * The route registry, read as text.
 *
 * Importing lib/routes.ts would mean running TypeScript through a loader
 * just to read a literal, so the paths are parsed out instead. The shape is
 * stable and this script fails loudly if it stops matching.
 */
function readRegistry() {
  const src = readFileSync(join(root, "lib", "routes.ts"), "utf8");

  // The home entry writes its paths as `homePath.en` / `homePath.it` rather
  // than literals, so those two are read from where they are declared. Any
  // other non-literal path is reported rather than guessed at.
  const site = readFileSync(join(root, "lib", "site.ts"), "utf8");
  const homeBlock = /export const homePath[^{]*\{([\s\S]*?)\}/.exec(site)?.[1] ?? "";
  const homePath = {
    en: /en:\s*"([^"]+)"/.exec(homeBlock)?.[1],
    it: /it:\s*"([^"]+)"/.exec(homeBlock)?.[1],
  };

  const entries = [];
  const unresolved = [];
  const re =
    /^\s*"?([a-z0-9-]+)"?:\s*\{\s*\n?\s*path:\s*\{([\s\S]*?)\},[\s\S]*?published:\s*(true|false)/gm;
  let m;
  while ((m = re.exec(src)) !== null) {
    const [, id, pathBlock, published] = m;
    if (published !== "true") continue;
    const en =
      /en:\s*"([^"]+)"/.exec(pathBlock)?.[1] ??
      (/en:\s*homePath\.en/.test(pathBlock) ? homePath.en : undefined);
    const it =
      /it:\s*"([^"]+)"/.exec(pathBlock)?.[1] ??
      (/it:\s*homePath\.it/.test(pathBlock) ? homePath.it : undefined);
    if (en && it) entries.push({ id, en, it });
    else unresolved.push(id);
  }
  if (unresolved.length) {
    console.warn(
      `[page-dates] could not read paths for: ${unresolved.join(", ")}`,
    );
  }
  return entries;
}

/** `/destinations/sicily` -> `app/(en)/destinations/sicily/page.tsx` */
function routeFile(urlPath, locale) {
  const group = locale === "en" ? "(en)" : "(it)";
  const rel = urlPath === "/" ? "" : urlPath;
  return join(root, "app", group, rel, "page.tsx");
}

/** Every `@/content/...` module a route file imports, resolved to disk. */
function contentFiles(routePath) {
  if (!existsSync(routePath)) return [];
  const src = readFileSync(routePath, "utf8");
  const out = [];
  for (const m of src.matchAll(/from\s+"@\/(content\/[^"]+)"/g)) {
    const base = join(root, m[1]);
    for (const candidate of [`${base}.ts`, `${base}.tsx`, join(base, "index.ts")]) {
      if (existsSync(candidate)) {
        out.push(candidate);
        break;
      }
    }
  }
  return out;
}

function lastCommitDate(files) {
  const present = files.filter((f) => existsSync(f));
  if (present.length === 0) return null;
  try {
    const out = git(["log", "-1", "--format=%cI", "--", ...present]);
    return out || null;
  } catch {
    return null;
  }
}

/**
 * A build that cannot read history leaves the committed map alone.
 *
 * The alternative — writing `{}` — would strip every date from the sitemap
 * on any CI that clones with `--depth 1`, which is most of them. The dates
 * already in the file were derived from real history on a full checkout, so
 * keeping them is both more useful and more truthful than erasing them.
 */
if (!historyIsUsable() && existsSync(OUT)) {
  console.log(`[page-dates] keeping the committed map at ${OUT}`);
  process.exit(0);
}

const dates = {};
if (historyIsUsable()) {
  let resolved = 0;
  let skipped = 0;
  for (const { id, en, it } of readRegistry()) {
    const files = [];
    for (const [p, locale] of [[en, "en"], [it, "it"]]) {
      const rf = routeFile(p, locale);
      files.push(rf, ...contentFiles(rf));
    }
    const date = lastCommitDate(files);
    if (date) {
      dates[id] = date;
      resolved++;
    } else {
      skipped++;
    }
  }
  console.log(
    `[page-dates] ${resolved} pages dated from git, ${skipped} omitted`,
  );
}

writeFileSync(OUT, `${JSON.stringify(dates, null, 2)}\n`, "utf8");
console.log(`[page-dates] wrote ${OUT}`);
