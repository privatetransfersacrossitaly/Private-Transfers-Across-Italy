import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  DefinitionList,
  Eyebrow,
  FactStrip,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroChooser } from "@/components/site/heroes";
import { OwnerNote } from "@/components/campania/owner-note";
import { amalfi } from "@/content/campania/amalfi";
import { faqIllustration } from "@/content/faq-illustrations";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Amalfi.
 *
 * ── Why a chooser, when Positano got a tier ladder ────────────────────────
 * `HeroTiers` suited Positano because its evidence is one graded scale — seat
 * count, with a threshold on it. Amalfi's evidence is not a scale. It is three
 * unrelated questions whose answers point in different directions: you may
 * drive in, you may not stop, and your hotel might get you closer. A ladder
 * would imply a progression that the documents do not contain.
 *
 * `HeroChooser` does contain it. Three rows, three codes, three short facts,
 * each anchoring to its own band — and the second row contradicts the first
 * on purpose. A reader who gets no further than the hero has still met the one
 * distinction this page exists to hold.
 *
 * Every row's `section` names a real band below, so no anchor is decorative.
 *
 * ── Section order, and the two bands that must stay apart ─────────────────
 * `access` (what is allowed) is followed immediately by `stopping` (what is
 * not) and then by `meeting` (what nobody publishes). Three consecutive bands,
 * narrowing. The access rules are never the last word on screen before the
 * reader moves on, because "permitted to enter" read alone is the misreading
 * this page is built to prevent.
 *
 * ── The seasonal band sits late, and carries its own expiry ───────────────
 * Positano's dated material was a rate card that merely risked going stale.
 * Amalfi's is an ordinance that **expires on a stated date four days from the
 * day this was written**. So it is placed after everything year-round, its
 * heading names the year, its own `expiry` and `successor` strings render as
 * separate marked blocks rather than as body prose, and it is wrapped in a
 * sunken band so it reads as a bounded aside and not as a standing rule.
 *
 * ── Modules chosen for the evidence, not for novelty ──────────────────────
 * `FactStrip` carries the four daily windows: four labelled cells in a
 * four-column grid is exactly what four time windows are, and it is the first
 * use of that block in this cluster — so no fourth `DataTable` was needed.
 * `DefinitionList` carries the Luna Rossa constraints, because each is a term
 * with a consequence. The four prohibited streets render as a plain list
 * inside their own band: four street names need no component.
 */
export function AmalfiPage({ locale }: { locale: Locale }) {
  const c = amalfi[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroChooser
        id="amalfi"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.access.id}`, label: c.hero.secondaryCta }}
        chooser={{
          heading: c.hero.chooser.heading,
          note: c.hero.chooser.note,
          rows: c.hero.chooser.rows.map((row) => ({
            id: row.id,
            name: row.name,
            code: row.code,
            fact: row.fact,
            href: `#${row.section}`,
          })),
        }}
      />

      <Band id={c.access.id} labelledBy={`${c.access.id}-heading`}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.access.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.access.id}-heading`}
              lead={c.access.lead}
              className="mt-4"
            >
              {c.access.heading}
            </BandHeading>
            <Paragraphs items={c.access.paragraphs} className="mt-7" />
            <SourceNote
              href={c.access.source.href}
              linkText={c.access.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.access.source.text}
            </SourceNote>
          </div>
          <Callout heading={c.access.unverified.heading}>
            <p>{c.access.unverified.body}</p>
          </Callout>
        </div>
      </Band>

      {/* Immediately after the access rules, never separated from them. */}
      <Band
        id={c.stopping.id}
        labelledBy={`${c.stopping.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.stopping.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.stopping.id}-heading`}
          lead={c.stopping.lead}
          className="mt-4"
        >
          {c.stopping.heading}
        </BandHeading>
        <Paragraphs items={c.stopping.paragraphs} className="mt-7" />
        <div className="mt-9 rounded-lg border border-accent/30 bg-accent-wash p-6 sm:p-7">
          <p className="type-label text-accent-ink">
            {c.stopping.streetsLabel}
          </p>
          <ul className="mt-4 divide-y divide-accent/20">
            {c.stopping.streets.map((street) => (
              <li
                key={street}
                className="py-2.5 font-heading type-h3 text-foreground first:pt-0 last:pb-0"
              >
                {street}
              </li>
            ))}
          </ul>
        </div>
        <Callout
          heading={c.stopping.callout.heading}
          tone="accent"
          className="mt-6"
        >
          <p>{c.stopping.callout.body}</p>
        </Callout>
        <SourceNote
          href={c.stopping.source.href}
          linkText={c.stopping.source.linkText}
          className="mt-7 border-t border-border pt-5"
        >
          {c.stopping.source.text}
        </SourceNote>
      </Band>

      <Band
        id={c.meeting.id}
        labelledBy={`${c.meeting.id}-heading`}
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

      <Band id={c.hotel.id} labelledBy={`${c.hotel.id}-heading`}>
        <Eyebrow>{c.hotel.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.hotel.id}-heading`}
          lead={c.hotel.lead}
          className="mt-4"
        >
          {c.hotel.heading}
        </BandHeading>
        <Paragraphs items={c.hotel.paragraphs} className="mt-7" />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.hotel.note}
        </p>
        <SourceNote
          href={c.hotel.source.href}
          linkText={c.hotel.source.linkText}
          className="mt-6"
        >
          {c.hotel.source.text}
        </SourceNote>
      </Band>

      <Band
        id={c.parking.id}
        labelledBy={`${c.parking.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.parking.eyebrow}</Eyebrow>
        <p className="mt-4 type-label text-accent-ink">{c.parking.asOf}</p>
        <BandHeading
          id={`${c.parking.id}-heading`}
          lead={c.parking.lead}
          className="mt-3"
        >
          {c.parking.heading}
        </BandHeading>
        <DefinitionList items={c.parking.items} className="mt-9" />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.parking.note}
        </p>
        <SourceNote
          href={c.parking.source.href}
          linkText={c.parking.source.linkText}
          className="mt-6"
        >
          {c.parking.source.text}
        </SourceNote>
      </Band>

      {/* Late, bounded, and carrying its own expiry. See the file comment. */}
      <Band
        id={c.seasonal.id}
        labelledBy={`${c.seasonal.id}-heading`}
        size="wide"
      >
        <Eyebrow>{c.seasonal.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.seasonal.id}-heading`}
          lead={c.seasonal.lead}
          className="mt-4"
        >
          {c.seasonal.heading}
        </BandHeading>

        <dl className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
          <dt className="type-label text-muted-foreground">
            {c.seasonal.windowsLabel}
          </dt>
          <dd className="font-heading type-h3 text-foreground">
            {c.seasonal.validity}
          </dd>
          <dt className="type-label text-muted-foreground">
            {c.seasonal.ordinance}
          </dt>
          <dd className="type-small text-muted-foreground">
            {c.seasonal.permitted}
          </dd>
        </dl>

        <FactStrip className="mt-8" items={c.seasonal.windows} />

        <Callout heading={c.seasonal.validity} tone="accent" className="mt-8">
          <p>{c.seasonal.expiry}</p>
          <p>{c.seasonal.successor}</p>
        </Callout>

        <SourceNote
          href={c.seasonal.source.href}
          linkText={c.seasonal.source.linkText}
          className="mt-7 border-t border-border pt-5"
        >
          {c.seasonal.source.text}
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
        <QuestionList
          items={c.faq.items}
          illustration={faqIllustration("amalfi", locale)} className="mt-10" />
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
