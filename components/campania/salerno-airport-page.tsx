import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroMeta } from "@/components/site/heroes";
import { OwnerNote } from "@/components/campania/owner-note";
import { salernoAirport } from "@/content/campania/salerno-airport";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Salerno Costa d'Amalfi Airport.
 *
 * ── One fact, given the weight of the page ────────────────────────────────
 * `HeroMeta` is the shortest opening in the family, and its three facts here
 * are the operator, the closing window and the exception — which is the whole
 * argument compressed into a rule-separated line.
 *
 * The body then gives that single fact a section of its own, the way the
 * Peretola page gives one to a runway length. The parallel is deliberate:
 * both pages exist because one published measurement explains more about the
 * airport than a page of description would.
 *
 * ── Where the page stops ──────────────────────────────────────────────────
 * The caution callout carries three refusals at once: that you may wait
 * inside overnight, that this airport is the official substitute while Naples
 * is closed, and that any collection point exists. None is published, and the
 * second would be the easiest to imply by accident.
 *
 * The coverage statement sits apart in `OwnerNote`, labelled as the
 * business's own position rather than the operator's.
 */
export function SalernoAirportPage({ locale }: { locale: Locale }) {
  const c = salernoAirport[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroMeta
        id="salerno-airport"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.terminal.id}`, label: c.hero.secondaryCta }}
        facts={c.hero.facts}
      />

      <Band id={c.terminal.id} labelledBy={`${c.terminal.id}-heading`}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.terminal.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.terminal.id}-heading`}
              lead={c.terminal.lead}
              className="mt-4"
            >
              {c.terminal.heading}
            </BandHeading>
            <Paragraphs items={c.terminal.paragraphs} className="mt-7" />
            <SourceNote
              href={c.terminal.source.href}
              linkText={c.terminal.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.terminal.source.text}
            </SourceNote>
          </div>
          <Callout heading={c.terminal.caution.heading} tone="accent">
            <p>{c.terminal.caution.body}</p>
          </Callout>
        </div>
      </Band>

      <Band
        id="coverage"
        labelledBy="coverage-heading"
        tone="sunken"
        size="prose"
      >
        <OwnerNote claim={c.ownerClaim} headingId="coverage-heading" />
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

      <Band
        id={c.onward.id}
        labelledBy={`${c.onward.id}-heading`}
        spacing="tight"
      >
        <BandHeading id={`${c.onward.id}-heading`}>
          {c.onward.heading}
        </BandHeading>
        <LinkIndex
          className="mt-6"
          items={c.onward.items.map((item) => ({
            id: item.page,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
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
