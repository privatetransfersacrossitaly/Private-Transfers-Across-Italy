import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  CompareColumns,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  NumberedSteps,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroBand } from "@/components/site/heroes";
import { OwnerNote } from "@/components/campania/owner-note";
import { ravello } from "@/content/campania/ravello";
import { faqIllustration } from "@/content/faq-illustrations";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Ravello.
 *
 * ── Why `HeroBand`, reused from the Naples hub ───────────────────────────
 * Every photo-free hero in the family is now spoken for, and the two that
 * remain are route-shaped. Rather than force this page into a tier ladder it
 * does not have or a chooser whose rows would all point at one section,
 * `HeroBand` is reused for the thing it does best: a fact line read before any
 * prose. Ravello's four facts are the page in miniature — four named areas,
 * a deadline of the day before, the governing ordinance, and the ordinance
 * that amends it. The last two are in the hero deliberately, because this
 * page's provenance is unusually fragile and a reader deserves to see which
 * rules it follows before reading what they say.
 *
 * It is the hub's hero, not Positano's or Amalfi's, so the three coast pages
 * remain visibly distinct from one another.
 *
 * ── Order, and the one inversion ──────────────────────────────────────────
 * Areas → booking → waiver → limits → meeting → provenance.
 *
 * The inversion worth noting is that **booking comes before money**. The
 * ordinance's own emphasis is that access requires authorisation; the charge
 * is a second, separable question that is sometimes waived. Leading with the
 * tariff would reverse the obligation a reader most needs to act on, and would
 * also imply a price list this page cannot honestly provide.
 *
 * ── The provenance band ───────────────────────────────────────────────────
 * `rule` renders as its own band near the end, built from existing primitives
 * rather than a new shared component. It carries the governing ordinance, the
 * amending ordinance, the supersession warning, the reason no ordinary-car
 * price appears, and the verification date. These are required fields on the
 * type, so the band cannot be emptied by a later edit, and the one claim this
 * page must never make — a current price for an ordinary car — has its absence
 * explained on the page rather than left as a silent gap.
 */
export function RavelloPage({ locale }: { locale: Locale }) {
  const c = ravello[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroBand
        id="ravello"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.areas.id}`, label: c.hero.secondaryCta }}
        facts={c.hero.facts}
      />

      <Band id={c.areas.id} labelledBy={`${c.areas.id}-heading`} size="wide">
        <Eyebrow>{c.areas.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.areas.id}-heading`}
          lead={c.areas.lead}
          className="mt-4"
        >
          {c.areas.heading}
        </BandHeading>
        <DefinitionList items={c.areas.items} className="mt-9" />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.areas.note}
        </p>
        <SourceNote
          href={c.areas.source.href}
          linkText={c.areas.source.linkText}
          className="mt-6"
        >
          {c.areas.source.text}
        </SourceNote>
      </Band>

      {/* Before the money, on purpose. See the note at the top of this file. */}
      <Band
        id={c.booking.id}
        labelledBy={`${c.booking.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.booking.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.booking.id}-heading`}
          lead={c.booking.lead}
          className="mt-4"
        >
          {c.booking.heading}
        </BandHeading>
        <NumberedSteps items={c.booking.steps} className="mt-9" />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.booking.note}
        </p>
        <SourceNote
          href={c.booking.source.href}
          linkText={c.booking.source.linkText}
          className="mt-6"
        >
          {c.booking.source.text}
        </SourceNote>
      </Band>

      <Band id={c.waiver.id} labelledBy={`${c.waiver.id}-heading`} size="wide">
        <Eyebrow>{c.waiver.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.waiver.id}-heading`}
          lead={c.waiver.lead}
          className="mt-4"
        >
          {c.waiver.heading}
        </BandHeading>
        <CompareColumns className="mt-10" columns={c.waiver.columns} />
        <Callout
          heading={c.waiver.callout.heading}
          tone="accent"
          className="mt-8"
        >
          <p>{c.waiver.callout.body}</p>
        </Callout>
        <SourceNote
          href={c.waiver.source.href}
          linkText={c.waiver.source.linkText}
          className="mt-6"
        >
          {c.waiver.source.text}
        </SourceNote>
      </Band>

      <Band id={c.limits.id} labelledBy={`${c.limits.id}-heading`} tone="sunken">
        <Eyebrow>{c.limits.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.limits.id}-heading`}
          lead={c.limits.lead}
          className="mt-4"
        >
          {c.limits.heading}
        </BandHeading>
        <DefinitionList items={c.limits.items} className="mt-9" />
        {/* Required field: why no ordinary-car price appears anywhere. */}
        <Callout className="mt-8">
          <p>{c.limits.note}</p>
        </Callout>
        <SourceNote
          href={c.limits.source.href}
          linkText={c.limits.source.linkText}
          className="mt-6"
        >
          {c.limits.source.text}
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

      {/* The provenance chain, rendered from required fields. */}
      <Band id="provenance" labelledBy="provenance-heading" size="wide">
        <p className="type-label text-accent-ink">{c.rule.label}</p>
        <h2 id="provenance-heading" className="sr-only">
          {c.rule.label}
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-6 sm:p-7">
            <p className="max-w-[62ch] type-small text-foreground">
              {c.rule.governing}
            </p>
            <p className="mt-4 max-w-[62ch] type-small text-foreground">
              {c.rule.amendedBy}
            </p>
            <p className="mt-4 max-w-[62ch] border-t border-border pt-4 type-caption text-muted-foreground">
              {c.rule.verifiedOn}
            </p>
          </div>
          <div className="space-y-6">
            <Callout>
              <p>{c.rule.supersession}</p>
            </Callout>
            <Callout>
              <p>{c.rule.unresolvedTariff}</p>
            </Callout>
          </div>
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
        <QuestionList
          items={c.faq.items}
          illustration={faqIllustration("ravello", locale)} className="mt-10" />
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
