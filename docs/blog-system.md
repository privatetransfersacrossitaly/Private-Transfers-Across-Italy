# Blog system

Built 12 November 2026, modelled on the Italy Taxi Service blog
(`c:\myprojects\italytaxi`). This file records what that system does, how it
was carried over, and how to publish a post.

## 1. The Italy Taxi Service blog, as found

| Concern | How Italy Taxi does it |
|---|---|
| Storage | Supabase (Postgres). Tables `blogs` and `bloggers` (`supabase/migrations/create_blog_tables.sql`, `add_blogs_language.sql`). |
| Languages | One row per language. `language` is `en` or `it`; an Italian row names its English original in `translation_of`. |
| Access rule | Row-level security: the public may read `status = 'published'` rows only. |
| Publishing | No admin screen and no blogger login. Each post is a one-off Node script (`seed_<topic>.js`) that builds the HTML and inserts it with the Supabase service key. ~70 such scripts. |
| Listing | `/blog` and `/it/blog`: card grid (image, category, date, read time, title, excerpt), newest first, plus five generic FAQs. Revalidated hourly. |
| Post page | `/blog/[slug]`, `/it/blog/[slug]`: hero, excerpt, table of contents (client component), featured image, body (stored HTML), FAQ section, CTA, author box, related posts, sticky sidebar of service promises. |
| Body format | HTML. FAQ pairs are `<h3 id="faq-N">` + `<p>`, lifted into a FAQ section and FAQPage schema and removed from the body. 13 legacy rows are Markdown, converted with `marked`. |
| Related posts | `src/lib/related-posts.ts`: IDF-weighted overlap of focus keyword and title, category as a bonus, same-category fallback. |
| SEO | `BlogPosting`, `BreadcrumbList`, `FAQPage` and `TaxiService` JSON-LD; hreflang between translations; posts in the sitemap with `updated_at` as lastmod. |
| Homepage | `KnowledgeHubSection` shows the three newest English posts. |

## 2. What was built here

| Italy Taxi | Here |
|---|---|
| Supabase tables | D1 migration `migrations/0005_create_blog.sql` — same columns, SQLite types, CHECK constraints, triggers. Additive only. |
| RLS "published only" | `lib/blog/repository.ts`: every public query carries `status = 'published'`. |
| Seed scripts | `scripts/blog/publish.mjs` + one post file per post (`scripts/blog/posts/_template.mjs`). |
| Four route files, duplicated per language | Four one-line route files calling `lib/blog/pages.tsx`, shared by both languages. |
| `blog-content.ts`, FAQ parser, TOC | `lib/blog/content.ts` — same conventions, plus: executable markup removed, every h2/h3 given an id, external links ruled `nofollow` (the site rule since 11 Nov 2026). No Markdown (no legacy rows; avoids a new dependency). |
| `related-posts.ts` | `lib/blog/related.ts` — same algorithm, this site's stopwords. |
| JSON-LD | `blogPostJsonLd()` in `lib/structured-data.ts`, sharing the site's Organization and WebSite nodes. |
| Sitemap entries | `app/sitemap.ts` lists the blog index (per language, only while it has posts) and every published post, with the same alternates the pages declare. |

**Deliberately not carried over:** the trust bar ("NCC-licensed", "fixed
prices"), the sidebar of service promises and the "We cover" list — none of
it is stated anywhere else on this site. The listing's generic FAQs. The
homepage "latest posts" block and a navigation link: both would make the
shared header/footer or the homepage depend on D1, which would turn every
page from static into per-request. Add a footer link once the first posts
are live (one entry in `content/navigation.ts`).

### Rendering and status codes

Posts live in D1, which exists only inside the Worker, so the blog renders
per request (`await connection()` + `export const instant = false`, the
pattern the CRM already uses). The rest of the site stays static.

A post page cannot return a 404 from `notFound()` once the layout has started
streaming, so `proxy.ts` checks the slug first and rewrites a missing post to
the not-found page with a real **404** (verified: unknown slugs, drafts and
wrong-language slugs all return 404). Cost: one indexed D1 lookup per post
request.

An index with no posts is `noindex` and left out of the sitemap, so an empty
blog never appears in search.

## 3. Publishing a post

1. Copy `scripts/blog/posts/_template.mjs` to `scripts/blog/posts/<slug>.mjs`
   and write the post (English, and optionally the Italian translation in the
   same file). Featured images go in `public/blog/`.
2. Try it locally:
   `node scripts/blog/publish.mjs scripts/blog/posts/<slug>.mjs`
   then `npm run preview` and open `/blog/<slug>`.
3. Publish to the live site:
   `node scripts/blog/publish.mjs scripts/blog/posts/<slug>.mjs --remote`
   The post is live immediately — no deploy needed.

Other commands:

- `--dry-run` validates and prints the SQL without writing.
- `--update` overwrites an existing post (keeps its original publish date).
- `--unpublish en:<slug>` sets a post back to draft (it then returns 404).

The script refuses to write if a slug already exists (without `--update`), a
required field is empty, the slug is malformed, the featured image file is
missing, the body contains `<script>` or inline handlers, or an Italian post
names an English post that does not exist.

## 4. Database migration

**Applied to the live database on 12 November 2026**, directly from the file:

```
npx wrangler d1 execute italytransfers --remote --file migrations/0005_create_blog.sql
```

It created `bloggers`, `blogs`, their indexes and triggers, and touched
nothing else (verified afterwards: `leads` 2 rows, `lead_events` 3 rows,
unchanged).

> ⚠️ **Do not run `wrangler d1 migrations apply --remote` on this database.**
> Its `d1_migrations` tracking table is empty: 0001–0004 were applied outside
> Wrangler's migration system, so Wrangler believes all five are pending.
> `migrations apply` would re-run them against live data — 0003 would fail on
> existing columns, and 0004 rebuilds the `leads` table. Apply any future
> migration with `d1 execute --remote --file <migration>` until the tracking
> table has been back-filled (one `INSERT INTO d1_migrations (name) VALUES …`
> per applied file — not done yet, by decision).

## 5. Checks

`scripts/seo-check.mjs` now also covers blog URLs: a post may exist in one
language only (as on Italy Taxi), but must name itself in hreflang, point
x-default at its English URL when it has one, and be reciprocal with its
translation. Registry pages keep the strict pairing rule.
