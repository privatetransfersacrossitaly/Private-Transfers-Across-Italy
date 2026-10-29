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
import { HeroModes } from "@/components/site/heroes";
import { ComuneIndex } from "@/components/tuscany/comune-index";
import { valDOrcia } from "@/content/tuscany/val-dorcia";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The Val d'Orcia.
 *
 * ── The hero is Verona's, saying the opposite thing ───────────────────────
 * `HeroModes` lays three ways of arriving flat across the foot of the hero.
 * Verona uses it to show that none of its three is a trap. This page uses the
 * identical structure to show that one of the three is missing: the rail
 * column is there so a reader looks down it and finds nothing but stations
 * outside the valley.
 *
 * That is a reuse rather than a new hero because the structure is genuinely
 * the right one — three parallel modes of arrival — and because inverting the
 * meaning of a familiar shape is a stronger move than inventing an unfamiliar
 * one. It is recorded here rather than disguised.
 *
 * ── Why `ComuneIndex` and not `TownIndex` ─────────────────────────────────
 * The Veneto's `TownIndex` keys a town to the arm of Lake Como it sits on.
 * This keys a comune to the station nearest it, and gives that station its
 * own column, because the reader is meant to compare down the column and see
 * that none of the three stations is in the valley. See the module itself.
 *
 * ── No photograph, deliberately ───────────────────────────────────────────
 * The site owns a Val d'Orcia image and it is the homepage hero. Nothing on
 * this site appears on two pages, and the homepage hero would be the worst
 * place to start. The page is built to stand without one.
 */
export function ValDOrciaPage({ locale }: { locale: Locale }) {
  const c = valDOrcia[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroModes
        id="val-dorcia"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.comuni.id}`, label: c.hero.secondaryCta }}
        modes={c.hero.modes}
      />

      <Band
        id={c.comuni.id}
        labelledBy={`${c.comuni.id}-heading`}
        size="wide"
        tone="sunken"
      >
        <Eyebrow>{c.comuni.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.comuni.id}-heading`}
          lead={c.comuni.lead}
          className="mt-4"
        >
          {c.comuni.heading}
        </BandHeading>
        <ComuneIndex
          stationLabel={c.comuni.stationLabel}
          comuni={c.comuni.items}
          className="mt-10"
        />
      </Band>

      {/* The valley's own words, at a reading measure. */}
      <Band id={c.noRail.id} labelledBy={`${c.noRail.id}-heading`} size="prose">
        <Eyebrow>{c.noRail.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.noRail.id}-heading`}
          lead={c.noRail.lead}
          className="mt-4"
        >
          {c.noRail.heading}
        </BandHeading>
        <Paragraphs items={c.noRail.paragraphs} className="mt-7" />
        <SourceNote
          href={c.noRail.source.href}
          linkText={c.noRail.source.linkText}
          className="mt-7 border-t border-border pt-5"
        >
          {c.noRail.source.text}
        </SourceNote>
      </Band>

      <Band id={c.byAir.id} labelledBy={`${c.byAir.id}-heading`}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.byAir.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.byAir.id}-heading`}
              lead={c.byAir.lead}
              className="mt-4"
            >
              {c.byAir.heading}
            </BandHeading>
            <LinkIndex
              columns={1}
              className="mt-8"
              items={c.byAir.items.map((item) => ({
                id: item.page,
                href: pathFor(item.page, locale),
                label: item.label,
                detail: item.detail,
              }))}
            />
          </div>
          <Callout heading={c.byAir.caution.heading} tone="accent">
            <p>{c.byAir.caution.body}</p>
          </Callout>
        </div>
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
