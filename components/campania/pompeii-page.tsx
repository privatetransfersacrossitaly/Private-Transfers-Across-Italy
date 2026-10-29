import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroModes } from "@/components/site/heroes";
import { OwnerNote } from "@/components/campania/owner-note";
import { pompeii } from "@/content/campania/pompeii";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Pompeii.
 *
 * ── Three cells, because the park names three gates ───────────────────────
 * `HeroModes` is a three-up grid under the heading, used elsewhere for three
 * ways of doing the same thing. Here the three are the park's three
 * entrances, and each cell carries the gate's name, its published address and
 * — in the label slot — *the other name the park uses for it*. That is the
 * whole reason the grid is in the hero rather than the body: a passenger
 * holding a ticket that says "Porta Marina Inferiore" needs to see, before
 * reading anything, that it is the gate this page calls Piazza Esedra.
 *
 * ── A definition list for rules, not prose ────────────────────────────────
 * The park's access regulation is the page's centre of gravity, and it is a
 * set of discrete prohibitions rather than an argument. `DefinitionList` sets
 * each one against its consequence for someone arriving by car, which prose
 * would bury and a table would over-formalise. It is also the one central
 * module no other Campania page uses.
 *
 * The luggage rule leads the list deliberately. It is the only fact on this
 * page that changes what a passenger should *do* before the car leaves.
 *
 * ── The dated claim gets its own band, and its date in the heading ────────
 * The park's parking answer is from 2018. Rendering it inside the rules list
 * would let a seven-year-old statement sit flush against a current decree, so
 * it gets a separate band, an `asOf` line above the quotation, and a caution
 * beneath it. Florence set the precedent: a dated fact is publishable only
 * while its date travels with it.
 */
export function PompeiiPage({ locale }: { locale: Locale }) {
  const c = pompeii[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroModes
        id="pompeii"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.rules.id}`, label: c.hero.secondaryCta }}
        modes={c.hero.modes}
      />

      <Band id={c.entrances.id} labelledBy={`${c.entrances.id}-heading`}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.entrances.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.entrances.id}-heading`}
              lead={c.entrances.lead}
              className="mt-4"
            >
              {c.entrances.heading}
            </BandHeading>
            <Paragraphs items={c.entrances.paragraphs} className="mt-7" />
            <SourceNote
              href={c.entrances.source.href}
              linkText={c.entrances.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.entrances.source.text}
            </SourceNote>
          </div>
          <Callout heading={c.entrances.limits.heading} tone="accent">
            <p>{c.entrances.limits.body}</p>
          </Callout>
        </div>
      </Band>

      <Band
        id={c.rules.id}
        labelledBy={`${c.rules.id}-heading`}
        tone="sunken"
        size="wide"
      >
        <Eyebrow>{c.rules.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.rules.id}-heading`}
          lead={c.rules.lead}
          className="mt-4"
        >
          {c.rules.heading}
        </BandHeading>
        <DefinitionList items={c.rules.items} className="mt-9" />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.rules.note}
        </p>
        <SourceNote
          href={c.rules.source.href}
          linkText={c.rules.source.linkText}
          className="mt-6"
        >
          {c.rules.source.text}
        </SourceNote>
      </Band>

      {/* A 2018 statement, kept visibly separate from the current decree. */}
      <Band
        id={c.parking.id}
        labelledBy={`${c.parking.id}-heading`}
        size="prose"
      >
        <p className="type-label text-accent-ink">{c.parking.asOf}</p>
        <BandHeading id={`${c.parking.id}-heading`} className="mt-3">
          {c.parking.heading}
        </BandHeading>
        <p className="mt-6 max-w-[68ch] type-body text-muted-foreground">
          {c.parking.body}
        </p>
        <Callout className="mt-7">
          <p>{c.parking.caution}</p>
        </Callout>
        <SourceNote
          href={c.parking.source.href}
          linkText={c.parking.source.linkText}
          className="mt-6"
        >
          {c.parking.source.text}
        </SourceNote>
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
