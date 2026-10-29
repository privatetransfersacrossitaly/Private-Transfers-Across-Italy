import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  DataTable,
  Eyebrow,
  LinkIndex,
  NumberedSteps,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroTiers } from "@/components/site/heroes";
import { OwnerNote } from "@/components/campania/owner-note";
import { positano } from "@/content/campania/positano";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Positano.
 *
 * ── The one hero whose gradient is literally the page's subject ───────────
 * `HeroTiers` shows three steps of decreasing freedom with an accent rule
 * that strengthens as the restriction does. Bologna uses it for three
 * strengths of traffic restriction. Positano's evidence has exactly that
 * shape and it is numeric: under six seats, not on the charged list; six or
 * more, admitted on payment; a bus outside the published limits, barred.
 *
 * That is why the threshold is in the hero and not the body. A reader whose
 * party is five needs a different answer from a reader whose party is six,
 * and the difference is decided before anything else on the page matters.
 *
 * ── Order of the two middle bands is the deliberate part ──────────────────
 * Rates first, then **what paying does not buy** — and the second band comes
 * *before* the procedure, not after it. The temptation is to run tariff →
 * how-to-pay as one smooth sequence, which would teach someone to buy a pass
 * while leaving them to assume it buys a place to stop. The Comune's own
 * deliberation says it does not, so that sentence interrupts the sequence.
 *
 * `limits` therefore carries two blocks rather than one: a `Callout` for the
 * rule that is published, and a second, separate block for the meeting point
 * that is **not** — the ordinance behind it could not be obtained, so no
 * street appears anywhere on this page.
 *
 * ── Why a third `DataTable` in this cluster is justified ──────────────────
 * The hub's four gateways and the cruise terminal's three quays are tables
 * because they are comparisons. This one is a table because the source *is*
 * a table: a municipal rate card with a permit type, an amount and a scope
 * per row. Reshaping it into prose would lose the only thing a reader wants
 * from it, which is to find their own row.
 *
 * ── The date that travels with the numbers ────────────────────────────────
 * `rates.asOf` renders above the heading, the heading itself names the
 * guide's date, and the source note repeats it. Three places, because bare
 * figures on a transfer page are exactly what someone would quote back.
 */
export function PositanoPage({ locale }: { locale: Locale }) {
  const c = positano[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroTiers
        id="positano"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.rates.id}`, label: c.hero.secondaryCta }}
        tiers={c.hero.tiers}
      />

      <Band id={c.rates.id} labelledBy={`${c.rates.id}-heading`} size="wide">
        <Eyebrow>{c.rates.eyebrow}</Eyebrow>
        <p className="mt-4 type-label text-accent-ink">{c.rates.asOf}</p>
        <BandHeading
          id={`${c.rates.id}-heading`}
          lead={c.rates.lead}
          className="mt-3"
        >
          {c.rates.heading}
        </BandHeading>
        <DataTable
          className="mt-10"
          caption={c.rates.caption}
          columns={c.rates.columns}
          rows={c.rates.rows}
        />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.rates.note}
        </p>
        <SourceNote
          href={c.rates.source.href}
          linkText={c.rates.source.linkText}
          className="mt-6"
        >
          {c.rates.source.text}
        </SourceNote>
      </Band>

      {/* Before the procedure, on purpose. See the note at the top of this file. */}
      <Band
        id={c.limits.id}
        labelledBy={`${c.limits.id}-heading`}
        tone="sunken"
      >
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.limits.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.limits.id}-heading`}
              lead={c.limits.lead}
              className="mt-4"
            >
              {c.limits.heading}
            </BandHeading>
            <Paragraphs items={c.limits.paragraphs} className="mt-7" />
            <SourceNote
              href={c.limits.source.href}
              linkText={c.limits.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.limits.source.text}
            </SourceNote>
          </div>
          <div className="space-y-6">
            <Callout heading={c.limits.callout.heading} tone="accent">
              <p>{c.limits.callout.body}</p>
            </Callout>
            <Callout heading={c.limits.unknown.heading}>
              <p>{c.limits.unknown.body}</p>
            </Callout>
          </div>
        </div>
      </Band>

      <Band id={c.procedure.id} labelledBy={`${c.procedure.id}-heading`}>
        <Eyebrow>{c.procedure.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.procedure.id}-heading`}
          lead={c.procedure.lead}
          className="mt-4"
        >
          {c.procedure.heading}
        </BandHeading>
        <NumberedSteps items={c.procedure.steps} className="mt-9" />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.procedure.note}
        </p>
        <SourceNote
          href={c.procedure.source.href}
          linkText={c.procedure.source.linkText}
          className="mt-6"
        >
          {c.procedure.source.text}
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
      />
    </>
  );
}
