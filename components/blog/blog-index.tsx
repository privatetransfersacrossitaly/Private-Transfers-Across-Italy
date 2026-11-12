import Image from "next/image";
import Link from "next/link";
import { blogChrome } from "@/content/blog";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/blocks";
import { formatPostDate, postPath } from "@/components/blog/format";
import type { BlogSummary } from "@/lib/blog/types";
import type { Locale } from "@/lib/site";

/**
 * The blog index, in either language.
 *
 * Italy Taxi's listing is a three-column card grid under a photographic
 * hero, followed by five generic FAQs about the blog itself. The cards are
 * kept — image, category, date, reading time, title, excerpt — but in this
 * site's layout: the narrow page header every other hub uses, and no FAQ
 * block, because questions about the blog are not questions anyone asks.
 *
 * With nothing published it says so plainly and points to the pages that do
 * answer the common questions. The route marks that state `noindex`.
 */
export function BlogIndex({ locale, posts }: { locale: Locale; posts: BlogSummary[] }) {
  const t = blogChrome[locale];

  return (
    <>
      <header className="border-b border-border">
        <Container size="content" className="py-10 sm:py-14">
          <Breadcrumbs id="blog" locale={locale} label={t.breadcrumbLabel} />
          <div className="mt-8 max-w-[44rem]">
            <Eyebrow>{t.index.eyebrow}</Eyebrow>
            <h1 className="mt-5 type-h1 text-foreground">{t.index.h1}</h1>
            <p className="mt-5 max-w-[56ch] type-lead text-muted-foreground">{t.index.lead}</p>
          </div>
        </Container>
      </header>

      <Container size="wide" className="py-14 sm:py-18">
        {posts.length === 0 ? (
          <div className="max-w-[56ch] rounded-lg border border-border bg-surface p-7 sm:p-9">
            <h2 className="type-h3 text-foreground">{t.index.emptyHeading}</h2>
            <p className="mt-3 type-body text-muted-foreground">{t.index.emptyBody}</p>
          </div>
        ) : (
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.id} className="min-w-0">
                <article className="group flex h-full flex-col">
                  <Link
                    href={postPath(locale, post.slug)}
                    className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    {post.featured_image_url ? (
                      <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-surface-sunken">
                        <Image
                          src={post.featured_image_url}
                          alt={post.featured_image_alt ?? ""}
                          fill
                          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 92vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
                        />
                      </div>
                    ) : null}
                    <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 type-caption text-muted-foreground">
                      <span className="font-medium text-accent-ink uppercase tracking-wide">
                        {post.category}
                      </span>
                      {post.published_at ? (
                        <time dateTime={post.published_at}>
                          {formatPostDate(post.published_at, locale)}
                        </time>
                      ) : null}
                      {post.read_time ? <span>{post.read_time}</span> : null}
                    </p>
                    <h2 className="mt-3 type-h3 text-foreground underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-accent">
                      {post.title}
                    </h2>
                    {post.excerpt ? (
                      <p className="mt-3 line-clamp-3 type-body text-muted-foreground">
                        {post.excerpt}
                      </p>
                    ) : null}
                    <span className="mt-auto pt-4 type-small font-medium text-accent-ink">
                      {t.index.readArticle} →
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
