import Image from "next/image";
import Link from "next/link";
import { blogChrome } from "@/content/blog";
import { formatPostDate, postPath, sameRomeDay } from "@/components/blog/format";
import { Eyebrow, LinkIndex, QuestionList } from "@/components/site/blocks";
import { Band } from "@/components/site/band";
import { ClosingCta } from "@/components/site/closing-cta";
import { Container } from "@/components/site/container";
import { pageName } from "@/content/page-names";
import type { PreparedPost } from "@/lib/blog/content";
import type { BlogPostWithAuthor, BlogSummary } from "@/lib/blog/types";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * One article, in either language.
 *
 * The sequence is Italy Taxi's — header, lead, contents, image, body, FAQ,
 * author, related posts, closing request — set in this site's components so
 * an article looks like the rest of the site rather than like a second one.
 *
 * Left out on purpose: the trust bar, the sticky sidebar of service
 * promises, and the "We cover" city list. Each states something this site
 * does not state anywhere else, and a blog post is not the place to start.
 *
 * Server-rendered throughout. Italy Taxi's table of contents is a client
 * component whose only state is "collapsed"; a plain list needs no
 * JavaScript and is readable before anything hydrates.
 */
export function BlogPostView({
  locale,
  post,
  prepared,
  readTime,
  related,
  counterpartSlug,
}: {
  locale: Locale;
  post: BlogPostWithAuthor;
  prepared: PreparedPost;
  readTime: string;
  related: BlogSummary[];
  counterpartSlug: string | null;
}) {
  const t = blogChrome[locale];
  const other: Locale = locale === "en" ? "it" : "en";
  const published = post.published_at ?? post.created_at;
  const showUpdated = !sameRomeDay(published, post.updated_at);
  const toc = prepared.toc.filter((item) => item.level === 2);

  return (
    <article>
      <header className="border-b border-border">
        <Container size="content" className="py-10 sm:py-14">
          <nav aria-label={t.breadcrumbLabel}>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 type-caption">
              {(["home", "blog"] as const).map((step) => (
                <li key={step} className="flex items-center gap-2">
                  {step !== "home" ? (
                    <span aria-hidden="true" className="text-border-strong">/</span>
                  ) : null}
                  <Link
                    href={pathFor(step, locale)}
                    className="inline-flex min-h-6 items-center py-1 text-muted-foreground underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {pageName(step, locale)}
                  </Link>
                </li>
              ))}
              <li className="flex min-w-0 items-center gap-2">
                <span aria-hidden="true" className="text-border-strong">/</span>
                <span aria-current="page" className="font-medium text-foreground">
                  {post.title}
                </span>
              </li>
            </ol>
          </nav>

          <div className="mt-8 max-w-[46rem]">
            <Eyebrow>{post.category}</Eyebrow>
            <h1 className="mt-5 type-h1 text-foreground">{post.title}</h1>
            <p className="mt-5 flex flex-wrap gap-x-4 gap-y-1 type-small text-muted-foreground">
              <span>
                {t.post.published}{" "}
                <time dateTime={published}>{formatPostDate(published, locale)}</time>
              </span>
              {showUpdated ? (
                <span>
                  {t.post.updated}{" "}
                  <time dateTime={post.updated_at}>{formatPostDate(post.updated_at, locale)}</time>
                </span>
              ) : null}
              <span>{readTime}</span>
              {counterpartSlug ? (
                <Link
                  href={postPath(other, counterpartSlug)}
                  hrefLang={other}
                  lang={other}
                  className="font-medium text-accent-ink underline decoration-accent/40 underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {t.post.otherLanguage}
                </Link>
              ) : null}
            </p>
            {post.excerpt ? (
              <p className="mt-6 max-w-[60ch] type-lead text-muted-foreground">{post.excerpt}</p>
            ) : null}
          </div>
        </Container>
      </header>

      {post.featured_image_url ? (
        <Container size="content" className="pt-10 sm:pt-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-surface-sunken">
            <Image
              src={post.featured_image_url}
              alt={post.featured_image_alt ?? ""}
              fill
              priority
              sizes="(min-width: 1024px) 64rem, 92vw"
              className="object-cover"
            />
          </div>
        </Container>
      ) : null}

      <Container size="prose" className="py-12 sm:py-14">
        {toc.length >= 2 ? (
          <nav
            aria-labelledby="contents-heading"
            className="mb-12 rounded-lg border border-border bg-surface p-6 sm:p-7"
          >
            <h2 id="contents-heading" className="type-label text-accent-ink">
              {t.post.contents}
            </h2>
            <ol className="mt-4 space-y-2.5">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="type-small text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {/* Stored HTML, after lib/blog/content.ts has removed anything
            executable, ruled external links and lifted out the FAQ. */}
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: prepared.html }} />

        {post.author ? (
          <aside className="mt-14 flex items-start gap-5 border-t border-border pt-8">
            {post.author.avatar_url ? (
              <Image
                src={post.author.avatar_url}
                alt=""
                width={64}
                height={64}
                className="size-16 shrink-0 rounded-full object-cover"
              />
            ) : null}
            <div className="min-w-0">
              <p className="type-label text-accent-ink">{t.post.writtenBy}</p>
              <p className="mt-1 type-h3 text-foreground">{post.author.full_name}</p>
              {post.author.bio ? (
                <p className="mt-2 type-small text-muted-foreground">{post.author.bio}</p>
              ) : null}
            </div>
          </aside>
        ) : null}
      </Container>

      {prepared.faq.length > 0 ? (
        <section aria-labelledby="questions-heading" className="border-t border-border py-14 sm:py-16">
          <Container size="prose">
            <Eyebrow>{t.post.faqEyebrow}</Eyebrow>
            <h2 id="questions-heading" className="mt-4 type-h2 text-foreground">
              {t.post.faqHeading}
            </h2>
            <QuestionList items={prepared.faq} className="mt-8" />
          </Container>
        </section>
      ) : null}

      {related.length > 0 ? (
        <Band tone="sunken" spacing="tight" labelledBy="related-heading">
          <h2 id="related-heading" className="type-h2 text-foreground">
            {t.post.relatedHeading}
          </h2>
          <LinkIndex
            className="mt-6"
            items={related.map((r) => ({
              id: r.slug,
              href: postPath(locale, r.slug),
              label: r.title,
              detail: r.excerpt ?? undefined,
            }))}
          />
        </Band>
      ) : null}

      <ClosingCta
        id={t.closing.id}
        heading={t.closing.heading}
        body={t.closing.body}
        primaryCta={{ href: quotePathFor(locale), label: t.closing.primaryCta }}
        secondaryCta={{ href: pathFor("blog", locale), label: t.closing.secondaryCta }}
        note={t.closing.note}
      />
    </article>
  );
}
