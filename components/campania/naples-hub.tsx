import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  DataTable,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroBand } from "@/components/site/heroes";
import { OwnerNote } from "@/components/campania/owner-note";
import { naplesHub } from "@/content/campania/naples";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The Naples hub.
 *
 * ── Why a table, where other hubs use prose ───────────────────────────────
 * Every other city hub in this project explains one thing well: Florence's
 * restricted centre, Bologna's three restriction strengths, Venice's road
 * limit. Naples's problem is not a rule but an ambiguity — four arrival
 * points, one name — and ambiguity is resolved by comparison rather than by
 * explanation.
 *
 * So the central module is a `DataTable`: four rows, three columns, scanned
 * rather than read. The only other page on this site using a table is the
 * Ravenna terminal, where three sources disagreed; the shape earns its place
 * for the same reason here.
 *
 * `HeroBand` opens it, with the four gateways as its fact line, so the
 * distinction is visible before a word of body text is read.
 *
 * ── The two blocks that must not blend ────────────────────────────────────
 * The closure notice is sourced and ends in a limits callout naming what it
 * does not claim. The coverage statement is the business speaking about
 * itself, and it renders through `OwnerNote`, which labels it as such. Those
 * two never share a band.
 */
export function NaplesHubPage({ locale }: { locale: Locale }) {
  const c = naplesHub[locale];
  const quote = quotePathFor(locale);
  const t = c.gateways.split;

  return (
    <>
      <HeroBand
        id="naples"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.gateways.id}`, label: c.hero.secondaryCta }}
        facts={c.hero.facts}
      />

      <Band
        id={c.gateways.id}
        labelledBy={`${c.gateways.id}-heading`}
        size="wide"
      >
        <Eyebrow>{c.gateways.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.gateways.id}-heading`}
          lead={c.gateways.lead}
          className="mt-4"
        >
          {c.gateways.heading}
        </BandHeading>
        <DataTable
          className="mt-10"
          caption={t.caption}
          columns={[t.columns.facility, t.columns.serves, t.columns.detail]}
          rows={t.items.map((item) => ({
            id: item.id,
            cells: [item.name, item.serves, item.detail],
          }))}
        />
        <p className="mt-6 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.gateways.note}
        </p>
      </Band>

      {/* A real notice, bounded by what the operator actually published. */}
      <Band
        id={c.airportNotice.id}
        labelledBy={`${c.airportNotice.id}-heading`}
        tone="sunken"
      >
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.airportNotice.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.airportNotice.id}-heading`}
              lead={c.airportNotice.lead}
              className="mt-4"
            >
              {c.airportNotice.heading}
            </BandHeading>
            <Paragraphs items={c.airportNotice.paragraphs} className="mt-7" />
            <SourceNote
              href={c.airportNotice.source.href}
              linkText={c.airportNotice.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.airportNotice.source.text}
            </SourceNote>
          </div>
          <Callout heading={c.airportNotice.limits.heading} tone="accent">
            <p>{c.airportNotice.limits.body}</p>
          </Callout>
        </div>
      </Band>

      <Band id="coverage" labelledBy="coverage-heading" size="prose">
        <OwnerNote claim={c.ownerClaim} headingId="coverage-heading" />
      </Band>

      <Band
        id={c.onward.id}
        labelledBy={`${c.onward.id}-heading`}
        tone="deep"
        spacing="tight"
      >
        <BandHeading id={`${c.onward.id}-heading`} tone="deep">
          {c.onward.heading}
        </BandHeading>
        <LinkIndex
          tone="deep"
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
