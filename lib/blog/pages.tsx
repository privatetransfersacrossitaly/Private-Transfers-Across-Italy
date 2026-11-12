import "server-only";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { cache } from "react";
import { BlogIndex } from "@/components/blog/blog-index";
import { BlogPostView } from "@/components/blog/blog-post";
import { postPath } from "@/components/blog/format";
import { JsonLd } from "@/components/site/json-ld";
import { blogChrome } from "@/content/blog";
import { prepareBlogHtml, readTimeFor } from "@/lib/blog/content";
import { rankRelated } from "@/lib/blog/related";
import {
  getPublishedCounterpartSlug,
  getPublishedPost,
  listPublishedPosts,
} from "@/lib/blog/repository";
import { pageMetadata } from "@/lib/metadata";
import { pathFor } from "@/lib/routes";
import { blogPostJsonLd, pageJsonLd } from "@/lib/structured-data";
import { absoluteUrl, htmlLang, publicSiteName, type Locale } from "@/lib/site";

/**
 * The four blog routes, written once.
 *
 * `app/(en)/blog/…` and `app/(it)/it/blog/…` are one-line files that call
 * these with their locale, so the two languages cannot drift apart — the
 * mistake Italy Taxi's duplicated route files made more than once (the
 * Italian post page had its own FAQ parser, its own related-posts query and
 * its own hreflang logic).
 *
 * ── Why every entry point awaits `connection()` first ─────────────────────
 * Posts live in D1, which only exists inside the Worker at request time —
 * not during `next build`. With `cacheComponents`, reading it while the
 * static shell is produced would find no binding and render the empty
 * state into the shell. `await connection()` defers the route to request
 * time, the same pattern every CRM page uses. And because the lookup
 * happens before anything streams, an unknown slug reaches `notFound()`
 * while the status can still be 404 — not a 200 with a noindex tag.
 *
 * `cache()` makes metadata and page share one D1 read per request.
 */

const loadIndex = cache((locale: Locale) => listPublishedPosts(locale));
const loadPost = cache((locale: Locale, slug: string) => getPublishedPost(locale, slug));

/* ── Index ─────────────────────────────────────────────────────────────── */

export async function blogIndexMetadata(locale: Locale): Promise<Metadata> {
  await connection();
  const other: Locale = locale === "en" ? "it" : "en";
  const [mine, theirs] = await Promise.all([loadIndex(locale), loadIndex(other)]);
  const t = blogChrome[locale];
  const base = pageMetadata({
    id: "blog",
    locale,
    title: t.meta.title,
    description: t.meta.description,
  });

  // An index with nothing in it is a thin page. It stays reachable, but is
  // kept out of search results — and out of the sitemap — until the first
  // post in its language is published.
  if (mine.length === 0) return { ...base, robots: { index: false, follow: true } };

  // The other language's index is named as an alternate only while it is
  // indexable too, so hreflang never points at a noindex page. Same rule as
  // app/sitemap.ts, which lists an index only when it has posts.
  if (theirs.length > 0) return base;
  const self = absoluteUrl(pathFor("blog", locale));
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: { [htmlLang[locale]]: self, "x-default": self },
    },
  };
}

export async function BlogIndexRoute({ locale }: { locale: Locale }) {
  await connection();
  const posts = await loadIndex(locale);
  const t = blogChrome[locale];
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "blog",
          locale,
          title: t.meta.title,
          description: t.meta.description,
        })}
      />
      <BlogIndex locale={locale} posts={posts} />
    </>
  );
}

/* ── Post ──────────────────────────────────────────────────────────────── */

/**
 * hreflang for a post.
 *
 * Always itself. The other language only when a published translation
 * exists — pointing at a draft or a missing post would be worse than
 * pointing at nothing. `x-default` is the English URL when there is one,
 * as on every other page of the site, and the post itself otherwise.
 */
function postAlternates(
  locale: Locale,
  slug: string,
  counterpartSlug: string | null,
): Record<string, string> {
  const other: Locale = locale === "en" ? "it" : "en";
  const urls: Partial<Record<Locale, string>> = {
    [locale]: absoluteUrl(postPath(locale, slug)),
    ...(counterpartSlug ? { [other]: absoluteUrl(postPath(other, counterpartSlug)) } : {}),
  };
  // Always en, it, x-default — the order every registry page uses, so the
  // English and Italian pages of a pair emit identical alternate sets.
  const languages: Record<string, string> = {};
  if (urls.en) languages[htmlLang.en] = urls.en;
  if (urls.it) languages[htmlLang.it] = urls.it;
  languages["x-default"] = urls.en ?? (urls[locale] as string);
  return languages;
}

export async function blogPostMetadata(
  locale: Locale,
  params: Promise<{ slug: string }>,
): Promise<Metadata> {
  await connection();
  const { slug } = await params;
  const post = await loadPost(locale, slug);
  // The page calls notFound() for the same lookup; this only has to avoid
  // claiming a title for a page that will not exist.
  if (!post) return { robots: { index: false, follow: false } };

  const counterpart = await getPublishedCounterpartSlug(post);
  const url = absoluteUrl(postPath(locale, slug));
  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt || "";
  const image = post.featured_image_url ? absoluteUrl(post.featured_image_url) : undefined;

  return {
    // A post title is written whole; the 60-character brand rule in
    // pageMetadata() is for registry pages, so it is applied here directly.
    title: {
      absolute:
        `${title} | ${publicSiteName}`.length <= 60 ? `${title} | ${publicSiteName}` : title,
    },
    description,
    alternates: { canonical: url, languages: postAlternates(locale, slug, counterpart) },
    openGraph: {
      type: "article",
      url,
      siteName: publicSiteName,
      locale: htmlLang[locale],
      title,
      description,
      publishedTime: post.published_at ?? undefined,
      modifiedTime: post.updated_at,
      section: post.category,
      tags: post.tags,
      ...(image ? { images: [{ url: image, alt: post.featured_image_alt ?? title }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export async function BlogPostRoute({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<{ slug: string }>;
}) {
  await connection();
  const { slug } = await params;
  const post = await loadPost(locale, slug);
  if (!post) notFound();

  const prepared = prepareBlogHtml(post.content);
  const readTime = readTimeFor(post.read_time, post.content, locale);
  const [counterpart, pool] = await Promise.all([
    getPublishedCounterpartSlug(post),
    loadIndex(locale),
  ]);
  const related = rankRelated(post, pool, 3);
  const url = absoluteUrl(postPath(locale, slug));

  return (
    <>
      <JsonLd
        data={blogPostJsonLd({
          locale,
          url,
          headline: post.title,
          description: post.seo_description || post.excerpt || "",
          image: post.featured_image_url,
          datePublished: post.published_at ?? post.created_at,
          dateModified: post.updated_at,
          authorName: post.author?.full_name,
          authorBio: post.author?.bio,
          keywords: post.focus_keyword ? [post.focus_keyword, ...post.tags] : post.tags,
          faq: prepared.faq,
        })}
      />
      <BlogPostView
        locale={locale}
        post={post}
        prepared={prepared}
        readTime={readTime}
        related={related}
        counterpartSlug={counterpart}
      />
    </>
  );
}
