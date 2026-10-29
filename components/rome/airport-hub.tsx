import { Band } from "@/components/site/band";
import {
  BandHeading,
  Checklist,
  CompareColumns,
  Eyebrow,
  FactStrip,
  LinkIndex,
  NumberedSteps,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroSplit } from "@/components/site/heroes";
import { fiumicino } from "@/content/rome/fiumicino";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Fiumicino.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * An airport pickup is a sequence in time — land, clear the terminal, find
 * the luggage, find the car — so the spine of the page is a numbered
 * timeline, which no other page in the cluster uses as its centre.
 *
 * Above it sits a strip of the four facts a visitor checks first, so they are
 * answered before any prose begins, and a two-column terminal comparison,
 * because "which terminal" is the question this airport actually generates.
 *
 * Below it, the request checklist sits on the sunken surface: it is the one
 * part of the page a visitor is meant to act on, and the change of surface is
 * what marks it out.
 */
export function FiumicinoPage({ locale }: { locale: Locale }) {
  const c = fiumicino[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroSplit
        id="fiumicino"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: `#${c.terminals.id}`,
          label: c.hero.secondaryCta,
        }}
        note={c.hero.note}
        photoSlug="airport-check-in"
      />

      {/* The four facts, before any prose. */}
      <Band spacing="tight" size="wide">
        <FactStrip items={c.facts} />
        <SourceNote
          href={c.factsSource.href}
          linkText={c.factsSource.linkText}
          className="mt-5"
        >
          {c.factsSource.text}
        </SourceNote>
      </Band>

      <Band
        id={c.terminals.id}
        labelledBy={`${c.terminals.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.terminals.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.terminals.id}-heading`}
          lead={c.terminals.lead}
          className="mt-4"
        >
          {c.terminals.heading}
        </BandHeading>
        <CompareColumns columns={c.terminals.columns} className="mt-10" />
        <SourceNote
          href={c.terminals.source.href}
          linkText={c.terminals.source.linkText}
          className="mt-6 max-w-[72ch]"
        >
          {c.terminals.source.text}
        </SourceNote>
      </Band>

      {/* The spine of the page. */}
      <Band id={c.sequence.id} labelledBy={`${c.sequence.id}-heading`}>
        <Eyebrow>{c.sequence.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.sequence.id}-heading`}
          lead={c.sequence.lead}
          className="mt-4"
        >
          {c.sequence.heading}
        </BandHeading>
        <NumberedSteps items={c.sequence.steps} className="mt-10" />
      </Band>

      <Band id={c.send.id} labelledBy={`${c.send.id}-heading`} tone="deep">
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
          <div>
            <BandHeading
              id={`${c.send.id}-heading`}
              lead={c.send.lead}
              tone="deep"
            >
              {c.send.heading}
            </BandHeading>
          </div>
          <div>
            <Checklist items={c.send.items} tone="deep" />
            <p className="mt-7 max-w-[64ch] border-t border-deep-line pt-5 type-small text-deep-muted">
              {c.send.note}
            </p>
          </div>
        </div>
      </Band>

      <Band id={c.onward.id} labelledBy={`${c.onward.id}-heading`}>
        <Eyebrow>{c.onward.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.onward.id}-heading`}
          lead={c.onward.lead}
          className="mt-4"
        >
          {c.onward.heading}
        </BandHeading>
        <LinkIndex
          className="mt-9"
          items={c.onward.items.map((item) => ({
            id: item.page,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
      </Band>

      <Band id={c.faq.id} labelledBy={`${c.faq.id}-heading`} tone="sunken">
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
      />
    </>
  );
}
