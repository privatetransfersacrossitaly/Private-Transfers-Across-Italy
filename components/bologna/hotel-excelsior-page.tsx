import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroModes } from "@/components/site/heroes";
import { hotelExcelsior } from "@/content/bologna/hotel-excelsior";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Starhotels Excelsior.
 *
 * ── The page Phase 1 planned does not exist, and this is better ───────────
 * It was to be the contrast case — "outside the ZTL, a car reaches the door".
 * Verification would not support the claim, so it is gone: the Comune's rules
 * could not be read and the hotel never mentions the zone.
 *
 * What is left is a hotel standing where three ways into Bologna meet — the
 * motorway network it publishes directions from, the station it faces, and
 * the airport monorail that terminates at that station. `HeroModes` lays
 * three parallel arrivals flat, which is exactly that shape.
 *
 * Verona uses the same hero for three ways into an ordinary road city, and
 * the Val d'Orcia uses it to show that one of its three is missing. Here all
 * three are genuinely available, which makes this the only page in the family
 * where the module means precisely what it looks like it means.
 *
 * The page's honesty test is whether it will say the monorail may be the
 * better answer. It does, in the lead, in the body and in the first question.
 */
export function HotelExcelsiorPage({ locale }: { locale: Locale }) {
  const c = hotelExcelsior[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroModes
        id="hotel-excelsior"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.driving.id}`, label: c.hero.secondaryCta }}
        modes={c.hero.modes}
      />

      <Band id={c.driving.id} labelledBy={`${c.driving.id}-heading`}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.driving.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.driving.id}-heading`}
              lead={c.driving.lead}
              className="mt-4"
            >
              {c.driving.heading}
            </BandHeading>
            <Paragraphs items={c.driving.paragraphs} className="mt-7" />
            <SourceNote
              href={c.driving.source.href}
              linkText={c.driving.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.driving.source.text}
            </SourceNote>
          </div>
          <Callout heading={c.limits.heading} tone="accent">
            <p>{c.limits.body}</p>
          </Callout>
        </div>
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
