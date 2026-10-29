import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  CompareColumns,
  DataTable,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroConstraint } from "@/components/site/heroes";
import { OwnerNote } from "@/components/campania/owner-note";
import { naplesAirport } from "@/content/campania/nap-airport";
import { faqIllustration } from "@/content/faq-illustrations";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Naples Capodichino.
 *
 * ── Why `HeroConstraint`, which the cruise terminal already uses ──────────
 * Every other non-photo hero in the family either opens on facts the page can
 * state outright, or asks the reader to choose a path. This page can do
 * neither honestly. It has an unusually strong rule set — a national
 * authority's ordinance, article by article — **and** a hard limit on what it
 * may publish, because the ordinance locates its bays by reference to site
 * drawings nobody could read.
 *
 * `HeroConstraint` is the only hero built around exactly that pairing: terms
 * that are known, one block that is not, and the authority linked first
 * rather than in a footnote. Its `unknown` field is required by the type,
 * which is the structural guarantee this page most needs — the designated-area
 * rules must never be able to render as a physical meeting point.
 *
 * Reusing it within the cluster is a considered trade: the composition below
 * is where Capodichino differs from the Naples cruise terminal, and the two
 * share only the opening shape.
 *
 * ── The module no other page in this project has ──────────────────────────
 * `actions` is a permissions matrix: six rows, one per action a driver might
 * take — enter, transit, fermata, sosta, set down, collect — against what the
 * ordinance allows, where, and under which article. Every other `DataTable`
 * on this site compares *places*. This one compares *actions*, and it exists
 * because the single most likely error here is to collapse six answers into
 * "the car can stop outside the terminal". A table makes the collapse visible.
 *
 * `CompareColumns` then holds the two regimes side by side — the blue Pick-up
 * bays for people meeting arrivals, and the separate private-hire provision —
 * because they are exactly two things, they are constantly confused, and the
 * airport's own public guidance describes only the first.
 *
 * ── Order ─────────────────────────────────────────────────────────────────
 * The zone, then the matrix, then the two regimes, then the narrow van
 * exception, then the meeting-point limit. Rules first, the admission last,
 * so the limit lands on a reader who already knows what the rules permit.
 *
 * Hours and the November closure follow, in that order: a standing operating
 * constraint before a dated one, with the closure late and bounded so it can
 * never read as the page's proposition.
 */
export function NaplesAirportPage({ locale }: { locale: Locale }) {
  const c = naplesAirport[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroConstraint
        id="nap-airport"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.actions.id}`, label: c.hero.secondaryCta }}
        constraint={c.hero.constraint}
      />

      <Band id={c.zone.id} labelledBy={`${c.zone.id}-heading`}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.zone.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.zone.id}-heading`}
              lead={c.zone.lead}
              className="mt-4"
            >
              {c.zone.heading}
            </BandHeading>
            <Paragraphs items={c.zone.paragraphs} className="mt-7" />
            <SourceNote
              href={c.zone.source.href}
              linkText={c.zone.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.zone.source.text}
            </SourceNote>
          </div>
          <div>
            <Callout heading={c.zone.penalties.heading} tone="accent">
              <p>{c.zone.penalties.body}</p>
            </Callout>
            {/* The amounts are the operator's, so the link is too. */}
            <SourceNote
              href={c.zone.penaltiesSource.href}
              linkText={c.zone.penaltiesSource.linkText}
              className="mt-5"
            >
              {c.zone.penaltiesSource.text}
            </SourceNote>
          </div>
        </div>
      </Band>

      {/* Six actions, six answers — see the note at the top of this file. */}
      <Band
        id={c.actions.id}
        labelledBy={`${c.actions.id}-heading`}
        tone="sunken"
        size="wide"
      >
        <Eyebrow>{c.actions.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.actions.id}-heading`}
          lead={c.actions.lead}
          className="mt-4"
        >
          {c.actions.heading}
        </BandHeading>
        <DataTable
          className="mt-10"
          caption={c.actions.caption}
          columns={c.actions.columns}
          rows={c.actions.rows}
        />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.actions.note}
        </p>
        <SourceNote
          href={c.actions.source.href}
          linkText={c.actions.source.linkText}
          className="mt-6"
        >
          {c.actions.source.text}
        </SourceNote>
      </Band>

      <Band id={c.pickUp.id} labelledBy={`${c.pickUp.id}-heading`} size="wide">
        <Eyebrow>{c.pickUp.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.pickUp.id}-heading`}
          lead={c.pickUp.lead}
          className="mt-4"
        >
          {c.pickUp.heading}
        </BandHeading>
        <CompareColumns className="mt-10" columns={c.pickUp.columns} />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.pickUp.note}
        </p>
        <SourceNote
          href={c.pickUp.source.href}
          linkText={c.pickUp.source.linkText}
          className="mt-6"
        >
          {c.pickUp.source.text}
        </SourceNote>
      </Band>

      <Band id={c.vans.id} labelledBy={`${c.vans.id}-heading`} size="prose">
        <BandHeading id={`${c.vans.id}-heading`}>{c.vans.heading}</BandHeading>
        <p className="mt-6 max-w-[68ch] type-body text-muted-foreground">
          {c.vans.body}
        </p>
        <Callout className="mt-7">
          <p>{c.vans.note}</p>
        </Callout>
        <SourceNote
          href={c.vans.source.href}
          linkText={c.vans.source.linkText}
          className="mt-6"
        >
          {c.vans.source.text}
        </SourceNote>
      </Band>

      {/* The admission, after the rules rather than before them. */}
      <Band
        id={c.meeting.id}
        labelledBy={`${c.meeting.id}-heading`}
        tone="sunken"
        size="prose"
      >
        <Eyebrow>{c.meeting.eyebrow}</Eyebrow>
        <BandHeading id={`${c.meeting.id}-heading`} className="mt-4">
          {c.meeting.heading}
        </BandHeading>
        <p className="mt-6 max-w-[68ch] type-body text-muted-foreground">
          {c.meeting.body}
        </p>
        <p className="mt-6 max-w-[68ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.meeting.note}
        </p>
      </Band>

      <Band id={c.hours.id} labelledBy={`${c.hours.id}-heading`}>
        <Eyebrow>{c.hours.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.hours.id}-heading`}
          lead={c.hours.lead}
          className="mt-4"
        >
          {c.hours.heading}
        </BandHeading>
        <DefinitionList items={c.hours.items} className="mt-9" />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.hours.note}
        </p>
        <SourceNote
          href={c.hours.source.href}
          linkText={c.hours.source.linkText}
          className="mt-6"
        >
          {c.hours.source.text}
        </SourceNote>
      </Band>

      {/* Late, dated, and carrying its own expiry and successor status. */}
      <Band
        id={c.closure.id}
        labelledBy={`${c.closure.id}-heading`}
        tone="sunken"
      >
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.closure.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.closure.id}-heading`}
              lead={c.closure.lead}
              className="mt-4"
            >
              {c.closure.heading}
            </BandHeading>
            <p className="mt-7 type-label text-accent-ink">
              {c.closure.ordinance}
            </p>
            <Paragraphs
              items={[c.closure.period, c.closure.expiry, c.closure.successor]}
              className="mt-4"
            />
            <SourceNote
              href={c.closure.source.href}
              linkText={c.closure.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.closure.source.text}
            </SourceNote>
          </div>
          <Callout heading={c.closure.limits.heading} tone="accent">
            <p>{c.closure.limits.body}</p>
          </Callout>
        </div>
      </Band>

      <Band id="coverage" labelledBy="coverage-heading" size="prose">
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
        <QuestionList
          items={c.faq.items}
          illustration={faqIllustration("nap-airport", locale)} className="mt-10" />
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
