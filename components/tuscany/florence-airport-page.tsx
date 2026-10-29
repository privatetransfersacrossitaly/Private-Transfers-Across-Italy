import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Eyebrow,
  LinkIndex,
  NumberedSteps,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroMeta } from "@/components/site/heroes";
import { florenceAirport } from "@/content/tuscany/florence-airport";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Florence Peretola.
 *
 * ── Why it reuses Linate's hero, and why that is the right reuse ──────────
 * `HeroMeta` is the shortest opening on the site, and it exists because
 * Linate's argument is compactness — a tall hero would contradict the text.
 * The same holds here for a different reason: this is a small airport whose
 * smallness is the page's subject, and the four facts that matter fit on one
 * rule-separated line, the fourth of them being the runway.
 *
 * ── Against its sibling ───────────────────────────────────────────────────
 * Pisa opens deep, dense and typographic on `HeroBand`; this one opens light
 * and compact. Pisa's page argues that a *name* is narrower than the job;
 * this one argues that a *runway* is shorter than expected. Same operator,
 * opposite arguments, and the two pages cannot be swapped.
 *
 * The runway band is the one place on the site where a single measurement is
 * given a whole section, because it genuinely answers a question a traveller
 * has already asked themselves: why did my Florence flight land at Pisa?
 */
export function FlorenceAirportPage({ locale }: { locale: Locale }) {
  const c = florenceAirport[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroMeta
        id="florence-airport"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.runway.id}`, label: c.hero.secondaryCta }}
        facts={c.hero.facts}
      />

      {/* One measurement, given the weight of a section. */}
      <Band id={c.runway.id} labelledBy={`${c.runway.id}-heading`}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.runway.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.runway.id}-heading`}
              lead={c.runway.lead}
              className="mt-4"
            >
              {c.runway.heading}
            </BandHeading>
            <Paragraphs items={c.runway.paragraphs} className="mt-7" />
            <SourceNote
              href={c.runway.source.href}
              linkText={c.runway.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.runway.source.text}
            </SourceNote>
          </div>

          <Callout heading={c.runway.consequence.heading}>
            <p>{c.runway.consequence.body}</p>
          </Callout>
        </div>
      </Band>

      <Band
        id={c.meaning.id}
        labelledBy={`${c.meaning.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.meaning.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.meaning.id}-heading`}
          lead={c.meaning.lead}
          className="mt-4"
        >
          {c.meaning.heading}
        </BandHeading>
        <NumberedSteps items={c.meaning.steps} className="mt-10" />
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
      />
    </>
  );
}
