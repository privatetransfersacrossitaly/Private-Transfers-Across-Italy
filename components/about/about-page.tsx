import { Band } from "@/components/site/band";
import {
  BandHeading,
  Checklist,
  Eyebrow,
  LinkIndex,
  NumberedSteps,
  Paragraphs,
  QuestionList,
} from "@/components/site/blocks";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { ClosingCta } from "@/components/site/closing-cta";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { about } from "@/content/about";
import { faqIllustration } from "@/content/faq-illustrations";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * About us.
 *
 * ── Why this page does not take one of the fourteen heroes ────────────────
 * `heroes.tsx` opens with a warning that a fifteenth hero has to justify
 * itself against the fourteen. This page does not add one; it opens inline
 * instead, and the reason is that every hero in that file is shaped around a
 * *journey* — two endpoints, a constraint, a tier ladder, a chooser between
 * routes. About us has no journey in it. Borrowing a shape built for one
 * would be exactly the "change the heading and call it a different design"
 * the architecture document rejects, and adding a fifteenth variant for a
 * page no other page will ever reuse would put a one-off in a shared file.
 *
 * The opening it gets instead is the page's own argument in miniature: the
 * heading beside a panel whose second row is what the site does *not* do.
 * No other page on this site states a claim and its limit in the same
 * breath above the fold, because no other page's subject is the site.
 *
 * ── Order ─────────────────────────────────────────────────────────────────
 * Idea → process → where → how it is arranged → what to expect → questions.
 *
 * The one placement worth defending is `fulfilment`, which sits *after* the
 * three steps rather than before them. A reader who has not yet seen that
 * step three is the booking has no way to judge a paragraph about how a
 * vehicle is arranged; after it, the same paragraph reads as the limit it
 * is. Putting it earlier made the page sound evasive about something the
 * reader had not yet been told mattered.
 *
 * ── The owner statement, rendered here rather than imported ───────────────
 * `fulfilment` uses the treatment `OwnerNote` established — a neutral
 * surface and a label naming whose statement it is, so it cannot be mistaken
 * for a cited source. It is written out below rather than imported, because
 * that component's prop type belongs to the Campania content and this page
 * is not in that cluster. Twelve lines of markup is a smaller price than a
 * cross-cluster type dependency.
 */
export function AboutPage({ locale }: { locale: Locale }) {
  const c = about[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      {/* ── The opening: the claim and its limit, side by side ─────────── */}
      <header className="border-b border-border bg-surface-sunken">
        <Container size="wide" className="py-10 sm:py-14 lg:py-16">
          <Breadcrumbs id="about" locale={locale} label={c.breadcrumbLabel} />
          <div className="mt-9 grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,36rem)_minmax(0,1fr)]">
            <div>
              <Eyebrow>{c.hero.eyebrow}</Eyebrow>
              <h1 className="mt-5 type-h1 text-foreground">{c.hero.h1}</h1>
              <p className="mt-6 max-w-[54ch] type-lead text-muted-foreground">
                {c.hero.lead}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Cta href={quote}>{c.hero.primaryCta}</Cta>
                <Cta href={`#${c.hero.secondaryCta.hash}`} variant="outline">
                  {c.hero.secondaryCta.label}
                </Cta>
              </div>
            </div>

            {/* Required by the type: the second row is the limit. */}
            <div className="border-l-2 border-accent/40 pl-6 sm:pl-8 lg:mt-2">
              <p className="type-label text-accent-ink">{c.hero.panel.label}</p>
              <dl className="mt-6 space-y-6">
                {c.hero.panel.items.map((item) => (
                  <div key={item.term}>
                    <dt className="font-heading type-h3 text-foreground">
                      {item.term}
                    </dt>
                    <dd className="mt-2 max-w-[46ch] type-small text-muted-foreground">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </header>

      <Band
        id={c.purpose.id}
        labelledBy={`${c.purpose.id}-heading`}
        size="prose"
        spacing="loose"
      >
        <Eyebrow>{c.purpose.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.purpose.id}-heading`}
          lead={c.purpose.lead}
          className="mt-4"
        >
          {c.purpose.heading}
        </BandHeading>
        <Paragraphs items={c.purpose.paragraphs} className="mt-8" />
      </Band>

      <Band
        id={c.how.id}
        labelledBy={`${c.how.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.how.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.how.id}-heading`}
          lead={c.how.lead}
          className="mt-4"
        >
          {c.how.heading}
        </BandHeading>
        <NumberedSteps items={c.how.steps} className="mt-10" />
        {/* Required field: what the quote link actually does today. */}
        <p className="mt-9 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.how.note}
        </p>
      </Band>

      <Band
        id={c.coverage.id}
        labelledBy={`${c.coverage.id}-heading`}
        size="wide"
      >
        <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
          <div>
            <Eyebrow>{c.coverage.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.coverage.id}-heading`}
              lead={c.coverage.lead}
              className="mt-4"
            >
              {c.coverage.heading}
            </BandHeading>
          </div>
          <Paragraphs items={c.coverage.paragraphs} className="lg:mt-2" />
        </div>
        <LinkIndex
          className="mt-12"
          items={c.coverage.items.map((item) => ({
            id: item.page,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
        {/* Required field: a list of pages, not a list of guarantees. */}
        <p className="mt-10 max-w-[76ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.coverage.note}
        </p>
      </Band>

      {/* After the three steps, never before them. See the file comment. */}
      <Band
        id={c.fulfilment.id}
        labelledBy={`${c.fulfilment.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.fulfilment.eyebrow}</Eyebrow>
        <div className="mt-6 grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:items-start">
          <div className="rounded-lg border border-border-strong bg-surface p-6 sm:p-8">
            <p className="type-label text-muted-foreground">
              {c.fulfilment.label}
            </p>
            <h2
              id={`${c.fulfilment.id}-heading`}
              className="mt-3 font-heading type-h2 text-foreground"
            >
              {c.fulfilment.heading}
            </h2>
            <p className="mt-5 max-w-[62ch] type-body text-muted-foreground">
              {c.fulfilment.body}
            </p>
          </div>
          <Paragraphs items={c.fulfilment.paragraphs} />
        </div>
      </Band>

      <Band id={c.service.id} labelledBy={`${c.service.id}-heading`} tone="deep">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
          <BandHeading
            id={`${c.service.id}-heading`}
            lead={c.service.lead}
            tone="deep"
          >
            {c.service.heading}
          </BandHeading>
          <div>
            <Checklist items={c.service.items} tone="deep" />
            {/* Required field: no hours, no response time, no refund policy. */}
            <p className="mt-8 max-w-[64ch] border-t border-deep-line pt-5 type-small text-deep-muted">
              {c.service.note}
            </p>
          </div>
        </div>
      </Band>

      <Band id={c.faq.id} labelledBy={`${c.faq.id}-heading`}>
        <Eyebrow>{c.faq.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.faq.id}-heading`}
          lead={c.faq.lead}
          className="mt-4"
        >
          {c.faq.heading}
        </BandHeading>
        <QuestionList
          items={c.faq.items}
          illustration={faqIllustration("about", locale)}
          className="mt-10"
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
