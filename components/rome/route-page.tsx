import Link from "next/link";
import { Band } from "@/components/site/band";
import {
  BandHeading,
  Checklist,
  CompareColumns,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  NumberedSteps,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroRoute } from "@/components/site/heroes";
import type { Endpoint, RoutePage } from "@/content/rome/types";
import { pathFor, pathWithHash, type PageId } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The four route pages.
 *
 * ── How they avoid being one page four times ──────────────────────────────
 * They share a page type, which is right — they answer the same kind of
 * question — but not a shape. Each one declares a leading module in its
 * content, and the module is a genuinely different thing:
 *
 *   Ciampino → Rome          a difference panel (definition list)
 *   Rome → Civitavecchia     a countdown (numbered steps)
 *   Fiumicino → Civitavecchia  a fork (two scenario columns)
 *   Fiumicino → Rome         none: the endpoints lead, because the city end
 *                            is the content
 *
 * The endpoint pair then sits on a surface chosen by whether a leading module
 * came before it, so no two consecutive sections share a tone and the four
 * pages do not scroll alike. The differentiation is recorded in
 * `docs/rome-design-differentiation.md`.
 */

function EndpointColumn({
  endpoint,
  locale,
}: {
  endpoint: Endpoint;
  locale: Locale;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6 sm:p-7">
      <p className="type-label text-accent-ink">{endpoint.label}</p>
      <h3 className="mt-3 font-heading type-h3 text-foreground">
        {endpoint.name}
      </h3>
      <dl className="mt-5 space-y-4">
        {endpoint.items.map((item) => (
          <div key={item.term} className="border-t border-border pt-4">
            <dt className="type-label text-muted-foreground">{item.term}</dt>
            <dd className="mt-1.5 type-small text-foreground">{item.detail}</dd>
          </div>
        ))}
      </dl>
      <Link
        href={pathFor(endpoint.page, locale)}
        className="mt-6 inline-flex min-h-11 items-center type-small font-medium text-accent-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {endpoint.linkText}
      </Link>
    </div>
  );
}

export function RoutePageView({
  id,
  content,
  locale,
}: {
  id: PageId;
  content: Record<Locale, RoutePage>;
  locale: Locale;
}) {
  const c = content[locale];
  const quote = quotePathFor(locale);
  const hasLead = Boolean(c.lead);

  return (
    <>
      <HeroRoute
        id={id}
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        from={c.hero.from}
        to={c.hero.to}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: pathFor(c.endpoints.from.page, locale),
          label: c.hero.secondaryCta,
        }}
        note={c.hero.note}
      />

      {/* Whatever this particular route leads with. */}
      {c.lead ? (
        <Band id={c.lead.id} labelledBy={`${c.lead.id}-heading`}>
          <Eyebrow>{c.lead.eyebrow}</Eyebrow>
          <BandHeading
            id={`${c.lead.id}-heading`}
            lead={c.lead.text}
            className="mt-4"
          >
            {c.lead.heading}
          </BandHeading>

          {c.lead.terms ? (
            <DefinitionList
              items={c.lead.terms}
              className="mt-9 border-t border-border"
            />
          ) : null}

          {c.lead.steps ? (
            <NumberedSteps items={c.lead.steps} className="mt-9" />
          ) : null}

          {c.lead.columns ? (
            <CompareColumns columns={c.lead.columns} className="mt-9" />
          ) : null}

          {/* A route that cites a source shows it. Only the Tuscan routes do
              so far, so every other route page renders exactly as before. */}
          {c.lead.source ? (
            <SourceNote
              href={c.lead.source.href}
              linkText={c.lead.source.linkText}
              className="mt-8 border-t border-border pt-5"
            >
              {c.lead.source.text}
            </SourceNote>
          ) : null}
        </Band>
      ) : null}

      <Band
        id={c.endpoints.id}
        labelledBy={`${c.endpoints.id}-heading`}
        tone={hasLead ? "sunken" : "default"}
      >
        <Eyebrow>{c.endpoints.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.endpoints.id}-heading`}
          lead={c.endpoints.lead}
          className="mt-4"
        >
          {c.endpoints.heading}
        </BandHeading>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <EndpointColumn endpoint={c.endpoints.from} locale={locale} />
          <EndpointColumn endpoint={c.endpoints.to} locale={locale} />
        </div>
      </Band>

      <Band
        id={c.prepare.id}
        labelledBy={`${c.prepare.id}-heading`}
        tone="deep"
      >
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
          <BandHeading
            id={`${c.prepare.id}-heading`}
            lead={c.prepare.lead}
            tone="deep"
          >
            {c.prepare.heading}
          </BandHeading>
          <div>
            <Checklist items={c.prepare.items} tone="deep" />
            <p className="mt-7 max-w-[64ch] border-t border-deep-line pt-5 type-small text-deep-muted">
              {c.prepare.note}
            </p>
          </div>
        </div>
      </Band>

      {/* The journey home, where a route has something worth saying about it.
          Only the Bologna hotel routes set this, so every other route page is
          unchanged. */}
      {c.departure ? (
        <Band
          id={c.departure.id}
          labelledBy={`${c.departure.id}-heading`}
          tone="sunken"
          size="prose"
        >
          <Eyebrow>{c.departure.eyebrow}</Eyebrow>
          <BandHeading
            id={`${c.departure.id}-heading`}
            lead={c.departure.lead}
            className="mt-4"
          >
            {c.departure.heading}
          </BandHeading>
          <Paragraphs items={c.departure.paragraphs} className="mt-7" />
          {c.departure.source ? (
            <SourceNote
              href={c.departure.source.href}
              linkText={c.departure.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.departure.source.text}
            </SourceNote>
          ) : null}
          <p className="mt-7 max-w-[64ch] border-t border-border pt-5 type-small text-muted-foreground">
            {c.departure.note}
          </p>
        </Band>
      ) : null}

      <Band id={c.faq.id} labelledBy={`${c.faq.id}-heading`}>
        <Eyebrow>{c.faq.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.faq.id}-heading`}
          lead={c.faq.lead}
          className="mt-4"
        >
          {c.faq.heading}
        </BandHeading>
        <QuestionList items={c.faq.items} className="mt-10" />
      </Band>

      <Band
        id={c.related.id}
        labelledBy={`${c.related.id}-heading`}
        tone="sunken"
        spacing="tight"
      >
        <BandHeading id={`${c.related.id}-heading`}>
          {c.related.heading}
        </BandHeading>
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

      <ClosingCta
        id={c.closing.id}
        heading={c.closing.heading}
        body={c.closing.body}
        primaryCta={{ href: quote, label: c.closing.primaryCta }}
        secondaryCta={{
          href: pathWithHash(
            c.closing.secondaryCta.page,
            locale,
            c.closing.secondaryCta.hash,
          ),
          label: c.closing.secondaryCta.label,
        }}
        note={c.closing.note}
      />
    </>
  );
}
