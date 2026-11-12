import "server-only";
import { all, first, isDatabaseConfigured } from "@/lib/db/d1";
import type { Locale } from "@/lib/site";
import type { Blogger, BlogPostWithAuthor, BlogSummary } from "./types";

/**
 * Every read the public site makes of the blog.
 *
 * ── The rule that replaces row-level security ─────────────────────────────
 * Italy Taxi's Supabase schema let the public read `status = 'published'`
 * rows and nothing else, enforced by the database. D1 has no RLS (see
 * migrations/0001, point 6), so the rule lives here instead: every query in
 * this file carries `status = 'published'`, and nothing else in the
 * application reads the `blogs` table for a visitor. A draft is invisible
 * to the site, to the sitemap and to the related-posts block alike.
 *
 * ── When there is no database ─────────────────────────────────────────────
 * `next build` and `next start` run outside the Worker and have no D1
 * binding. Every function returns "nothing published" in that case rather
 * than throwing, so the blog degrades to its empty state and the rest of the
 * site builds and serves exactly as before.
 */

const SUMMARY_COLUMNS = `
  id, language, slug, title, excerpt, featured_image_url, featured_image_alt,
  category, focus_keyword, read_time, published_at, updated_at
`;

/** The listing, newest first. Narrow columns: the body is never needed here. */
export async function listPublishedPosts(locale: Locale): Promise<BlogSummary[]> {
  if (!isDatabaseConfigured()) return [];
  return all<BlogSummary>(
    `SELECT ${SUMMARY_COLUMNS}
       FROM blogs
      WHERE status = 'published' AND language = ?1
      ORDER BY published_at DESC, id`,
    [locale],
  );
}

type PostRow = Omit<BlogPostWithAuthor, "tags" | "author"> & {
  tags: string;
  author_full_name: string | null;
  author_avatar_url: string | null;
  author_bio: string | null;
};

/** One published post with its author, or null. */
export async function getPublishedPost(
  locale: Locale,
  slug: string,
): Promise<BlogPostWithAuthor | null> {
  if (!isDatabaseConfigured()) return null;
  const row = await first<PostRow>(
    `SELECT b.*,
            a.full_name  AS author_full_name,
            a.avatar_url AS author_avatar_url,
            a.bio        AS author_bio
       FROM blogs b
       LEFT JOIN bloggers a ON a.id = b.author_id AND a.is_active = 1
      WHERE b.status = 'published' AND b.language = ?1 AND b.slug = ?2`,
    [locale, slug],
  );
  if (!row) return null;

  const { author_full_name, author_avatar_url, author_bio, tags, ...post } = row;
  const author: Blogger | null =
    row.author_id && author_full_name
      ? {
          id: row.author_id,
          full_name: author_full_name,
          avatar_url: author_avatar_url,
          bio: author_bio,
        }
      : null;

  return { ...post, tags: parseTags(tags), author };
}

/**
 * The published post in the other language, if there is one.
 *
 *   English post → the Italian row whose `translation_of` is its slug.
 *   Italian post → the English row its `translation_of` names.
 *
 * Both directions require the counterpart to be published, so hreflang never
 * points at a draft or at a 404.
 */
export async function getPublishedCounterpartSlug(
  post: Pick<BlogPostWithAuthor, "language" | "slug" | "translation_of">,
): Promise<string | null> {
  if (!isDatabaseConfigured()) return null;
  if (post.language === "en") {
    const row = await first<{ slug: string }>(
      `SELECT slug FROM blogs
        WHERE status = 'published' AND language = 'it' AND translation_of = ?1`,
      [post.slug],
    );
    return row?.slug ?? null;
  }
  if (!post.translation_of) return null;
  const row = await first<{ slug: string }>(
    `SELECT slug FROM blogs
      WHERE status = 'published' AND language = 'en' AND slug = ?1`,
    [post.translation_of],
  );
  return row?.slug ?? null;
}

/**
 * Whether a published post exists at this address — for proxy.ts.
 *
 * `null` when there is no database to ask (build, `next start`), so the
 * caller can let the page decide instead of declaring everything missing.
 */
export async function publishedPostExists(
  locale: Locale,
  slug: string,
): Promise<boolean | null> {
  if (!isDatabaseConfigured()) return null;
  const row = await first<{ found: number }>(
    `SELECT 1 AS found FROM blogs
      WHERE status = 'published' AND language = ?1 AND slug = ?2`,
    [locale, slug],
  );
  return row !== null;
}

/** Every published post in both languages, for the sitemap. */
export async function listPublishedForSitemap(): Promise<
  { language: Locale; slug: string; translation_of: string | null; updated_at: string }[]
> {
  if (!isDatabaseConfigured()) return [];
  return all(
    `SELECT language, slug, translation_of, updated_at
       FROM blogs
      WHERE status = 'published'
      ORDER BY language, published_at DESC`,
  );
}

function parseTags(raw: string | null | undefined): string[] {
  try {
    const value = JSON.parse(raw ?? "[]");
    return Array.isArray(value) ? value.filter((t) => typeof t === "string") : [];
  } catch {
    return [];
  }
}
