import { Band } from "@/components/site/band";
import {
  BandHeading,
  CompareColumns,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroSplit } from "@/components/site/heroes";
import { veniceStations } from "@/content/veneto/stations";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Venice's two railway stations.
 *
 * ── The composition, and why it is NOT a table ────────────────────────────
 * Rome's and Milan's station pages lead with a `DataTable`, and that is right
 * for them: four stations each, and a reader scanning for theirs. Venice has
 * exactly two that matter, and two items are not a lookup — they are a
 * contrast. A two-row table would flatten the one thing this page exists to
 * say, which is that these stations are opposites.
 *
 * So it uses `CompareColumns` instead, and the page's centre of gravity is
 * the section after it: the causeway, and why a train can finish inside
 * Venice when a car cannot.
 *
 * The hero photograph is the Grand Canal beside Santa Lucia — water at a
 * station door, which is the whole argument in one image.
 */
export function VeniceStationsPage({ locale }: { locale: Locale }) {
  const c = veniceStations[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroSplit
        id="venice-stations"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.compare.id}`, label: c.hero.secondaryCta }}
        photoSlug="venice-santa-lucia-canal"
      />

      <Band id={c.compare.id} labelledBy={`${c.compare.id}-heading`}>
        <Eyebrow>{c.compare.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.compare.id}-heading`}
          lead={c.compare.lead}
          className="mt-4"
        >
          {c.compare.heading}
        </BandHeading>
        <CompareColumns columns={c.compare.columns} className="mt-10" />
        <SourceNote
          href={c.compare.source.href}
          linkText={c.compare.source.linkText}
          className="mt-6 max-w-[78ch]"
        >
          {c.compare.source.text}
        </SourceNote>
      </Band>

      {/* The page's centre: why the two stations exist at all. */}
      <Band
        id={c.bridge.id}
        labelledBy={`${c.bridge.id}-heading`}
        tone="sunken"
        size="prose"
      >
        <Eyebrow>{c.bridge.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.bridge.id}-heading`}
          lead={c.bridge.lead}
          className="mt-4"
        >
          {c.bridge.heading}
        </BandHeading>
        <Paragraphs items={c.bridge.paragraphs} className="mt-7" />
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

      <Band id={c.faq.id} labelledBy={`${c.faq.id}-heading`} tone="deep">
        <Eyebrow tone="deep">{c.faq.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.faq.id}-heading`}
          lead={c.faq.lead}
          tone="deep"
          className="mt-4"
        >
          {c.faq.heading}
        </BandHeading>
        <QuestionList items={c.faq.items} tone="deep" className="mt-10" />
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
