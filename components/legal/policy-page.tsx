import Link from "next/link";
import { Band } from "@/components/site/band";
import {
  Callout,
  Checklist,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  Paragraphs,
} from "@/components/site/blocks";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { legal, type LegalPageId } from "@/content/legal";
import { pathFor } from "@/lib/routes";
import type { Locale } from "@/lib/site";

/**
 * One layout for all three policy pages.
 *
 * ── Why one component and not three ───────────────────────────────────────
 * A privacy policy, a set of terms and a refund policy are the same document
 * in three subjects: a status, a numbered run of sections, and links to the
 * other two. Three bespoke layouts would drift, and a reader who learned to
 * read one would have to learn the next. Everything that differs between the
 * pages is content.
 *
 * ── Why these pages look unlike the rest of the site ──────────────────────
 * Every other page here is built to be scanned — bands of alternating tone,
 * a module per idea, a photograph or a drawing. A policy is read in order,
 * from the top, usually by someone looking for one clause. So this page has
 * no tonal bands, no illustration and no call to action: a single column at
 * the reading measure, a numbered contents list that jumps to each section,
 * and nothing between the reader and the text.
 *
 * It is still the same design system — the same palette, type scale,
 * container, breadcrumb and footer. It just stops decorating.
 *
 * ── The draft notice and the pending blocks ───────────────────────────────
 * `draft` renders before anything else, in the accent treatment reserved on
 * this site for a refusal or a caveat, because that is what it is: these are
 * not in force. `section.pending` renders the same way inside a section, for
 * a provision that is not settled.
 *
 * Both are customer-facing text, deliberately. The alternative — a clean
 * page with the uncertainty recorded only in a project document — would read
 * as finished terms to the one person whose reading matters.
 */
export function PolicyPage({
  page,
  locale,
}: {
  page: LegalPageId;
  locale: Locale;
}) {
  const c = legal[page][locale];

  return (
    <>
      <header className="border-b border-border">
        <Container size="content" className="py-10 sm:py-14">
          <Breadcrumbs id={page} locale={locale} label={c.breadcrumbLabel} />
          <div className="mt-9 max-w-[62ch]">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="mt-5 type-h1 text-foreground">{c.h1}</h1>
            <p className="mt-6 type-lead text-muted-foreground">{c.lead}</p>
          </div>

          {/* Required by the type. First thing after the title, on purpose. */}
          <Callout
            heading={c.draft.label}
            tone="accent"
            className="mt-9 max-w-[76ch]"
          >
            <p>{c.draft.body}</p>
          </Callout>

          <dl className="mt-9 grid max-w-[76ch] gap-x-10 gap-y-3 border-t border-border pt-6 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)]">
            {[
              [c.status.stateLabel, c.status.state],
              [c.status.draftedLabel, c.status.drafted],
              [c.status.effectiveLabel, c.status.effective],
            ].map(([label, value]) => (
              <div key={label} className="contents">
                <dt className="type-label text-muted-foreground">{label}</dt>
                <dd className="type-small text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      {/* Contents. A policy is read for one clause, so it has to be jumpable. */}
      <Band id="contents" labelledBy="contents-heading" spacing="tight">
        <h2 id="contents-heading" className="type-label text-accent-ink">
          {c.tocLabel}
        </h2>
        <ol className="mt-5 grid gap-x-10 gap-y-0 sm:grid-cols-2">
          {c.sections.map((section) => (
            <li
              key={section.id}
              className="border-b border-border last:border-b-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
            >
              <Link
                href={`#${section.id}`}
                className="block py-2.5 type-small text-muted-foreground underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {section.heading}
              </Link>
            </li>
          ))}
        </ol>
      </Band>

      <Band spacing="normal">
        <div className="max-w-[76ch] space-y-14">
          {c.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="scroll-mt-28"
            >
              <h2
                id={`${section.id}-heading`}
                className="font-heading type-h2 text-foreground"
              >
                {section.heading}
              </h2>

              <Paragraphs items={section.paragraphs} className="mt-5" />

              {section.bullets ? (
                <Checklist items={section.bullets} className="mt-6" />
              ) : null}

              {section.terms ? (
                <DefinitionList items={section.terms} className="mt-8" />
              ) : null}

              {/* An unsettled provision, marked as one where it sits. */}
              {section.pending ? (
                <Callout
                  heading={section.pending.label}
                  tone="accent"
                  className="mt-7"
                >
                  <p>{section.pending.body}</p>
                </Callout>
              ) : null}
            </section>
          ))}
        </div>
      </Band>

      <Band
        id="related"
        labelledBy="related-heading"
        tone="sunken"
        spacing="tight"
      >
        <h2 id="related-heading" className="font-heading type-h3 text-foreground">
          {c.related.heading}
        </h2>
        <LinkIndex
          className="mt-6"
          items={c.related.items.map((item) => ({
            id: item.page,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
      </Band>
    </>
  );
}
