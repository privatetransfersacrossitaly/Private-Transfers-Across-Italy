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
import { HeroMeta } from "@/components/site/heroes";
import { blqAirport } from "@/content/bologna/blq";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Bologna Guglielmo Marconi.
 *
 * ── Why it reuses Linate's hero ───────────────────────────────────────────
 * `HeroMeta` is the shortest opening in the family and sets its facts as one
 * rule-separated line. That suits an airport whose four interesting facts are
 * a code, a rail link, where that link goes and how long it takes — and it
 * keeps the hero out of the way of the module that carries the page.
 *
 * ── The module that carries it ────────────────────────────────────────────
 * Two columns, both of them the airport's own position: what it publishes,
 * and what it does not. Pisa's page uses the same component for a different
 * argument — there, two true descriptions of a correctly named airport. Here
 * the columns are asymmetric on purpose: one is a generous account of a
 * monorail, the other is a list of silences, and the gap between them is the
 * reason a traveller needs this page at all.
 *
 * Naming the Marconi Express as a real alternative costs us something and is
 * the price of being believed about the rest.
 */
export function BlqAirportPage({ locale }: { locale: Locale }) {
  const c = blqAirport[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroMeta
        id="blq"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.record.id}`, label: c.hero.secondaryCta }}
        facts={c.hero.facts}
      />

      <Band id={c.record.id} labelledBy={`${c.record.id}-heading`} size="wide">
        <Eyebrow>{c.record.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.record.id}-heading`}
          lead={c.record.lead}
          className="mt-4"
        >
          {c.record.heading}
        </BandHeading>
        <CompareColumns columns={c.record.columns} className="mt-10" />
        <SourceNote
          href={c.record.source.href}
          linkText={c.record.source.linkText}
          className="mt-8 border-t border-border pt-5"
        >
          {c.record.source.text}
        </SourceNote>
      </Band>

      <Band
        id={c.onward.id}
        labelledBy={`${c.onward.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.onward.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.onward.id}-heading`}
          lead={c.onward.lead}
          className="mt-4"
        >
          {c.onward.heading}
        </BandHeading>
        <LinkIndex
          className="mt-8"
          items={c.onward.items.map((item) => ({
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
