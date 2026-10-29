import { Band } from "@/components/site/band";
import {
  BandHeading,
  Checklist,
  CompareColumns,
  Eyebrow,
  LinkIndex,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroBand } from "@/components/site/heroes";
import { pisaAirport } from "@/content/tuscany/pisa";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Pisa Galileo Galilei.
 *
 * ── Why it reuses Ciampino's hero ─────────────────────────────────────────
 * `HeroBand` is the one opening in the family with no photograph at all, and
 * its docstring says what it is for: a page whose job is to correct an
 * assumption rather than to sell a view. That is this page exactly, and there
 * is no Pisa photograph on this site to put behind it anyway.
 *
 * The alternative would have been Treviso's and Bergamo's drawn-distance
 * hero, and it was rejected on evidence rather than on taste. Those two heroes
 * each had published distances to put on a rule. No source consulted for this
 * build states the road distance from Pisa's airport to Pisa or to Florence,
 * and a diagram with invented numbers on it would be worse than no diagram.
 *
 * ── The module that carries the page ──────────────────────────────────────
 * Two columns that do not contradict each other, which is unusual here.
 * Milan's and Venice's comparison columns set a right answer against a wrong
 * one. These set two true descriptions side by side — what the name says, and
 * what it leaves out — because nothing about this airport is mis-sold. The
 * gap is between an accurate name and a wider job.
 */
export function PisaAirportPage({ locale }: { locale: Locale }) {
  const c = pisaAirport[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroBand
        id="pisa-airport"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: `#${c.expectation.id}`,
          label: c.hero.secondaryCta,
        }}
        facts={c.hero.facts}
      />

      <Band
        id={c.expectation.id}
        labelledBy={`${c.expectation.id}-heading`}
        size="wide"
      >
        <Eyebrow>{c.expectation.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.expectation.id}-heading`}
          lead={c.expectation.lead}
          className="mt-4"
        >
          {c.expectation.heading}
        </BandHeading>
        <CompareColumns columns={c.expectation.columns} className="mt-10" />
        <SourceNote
          href={c.expectation.source.href}
          linkText={c.expectation.source.linkText}
          className="mt-8 border-t border-border pt-5"
        >
          {c.expectation.source.text}
        </SourceNote>
      </Band>

      <Band
        id={c.onwardTo.id}
        labelledBy={`${c.onwardTo.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.onwardTo.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.onwardTo.id}-heading`}
          lead={c.onwardTo.lead}
          className="mt-4"
        >
          {c.onwardTo.heading}
        </BandHeading>
        <LinkIndex
          className="mt-8"
          items={c.onwardTo.items.map((item) => ({
            id: item.page,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
      </Band>

      <Band id={c.send.id} labelledBy={`${c.send.id}-heading`} tone="deep">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
          <BandHeading
            id={`${c.send.id}-heading`}
            lead={c.send.lead}
            tone="deep"
          >
            {c.send.heading}
          </BandHeading>
          <div>
            <Checklist items={c.send.items} tone="deep" />
            <p className="mt-7 max-w-[64ch] border-t border-deep-line pt-5 type-small text-deep-muted">
              {c.send.note}
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
        <QuestionList items={c.faq.items} className="mt-10" />
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
        tone="sunken"
      />
    </>
  );
}
