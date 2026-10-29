import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  CompareColumns,
  Eyebrow,
  LinkIndex,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroConstraint } from "@/components/site/heroes";
import { hotelMajestic } from "@/content/bologna/hotel-majestic";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Grand Hotel Majestic "già Baglioni".
 *
 * ── Why the constraint hero, for the third time ───────────────────────────
 * `HeroConstraint` carries a page whose central subject is something it
 * cannot resolve. Florence uses it because a municipal rule could not be
 * read; the Ravenna terminal because three official sources disagree. Here
 * the unresolved thing is narrower and sharper: the hotel publishes a
 * permission that is explicitly **its own**, and whether it extends to our
 * vehicles is exactly what nobody has established.
 *
 * Putting that in the hero rather than the FAQ is deliberate. A reader who
 * skims this page should come away knowing the address cannot be driven to
 * and that we have promised them nothing about the alternative.
 *
 * ── The module that carries the page ──────────────────────────────────────
 * Two columns, both the hotel's own account: the address on your booking,
 * and where it sends arriving cars. Pisa and BLQ use `CompareColumns` for
 * other arguments; this is the only page on the site where the two columns
 * are two addresses for the same building.
 */
export function HotelMajesticPage({ locale }: { locale: Locale }) {
  const c = hotelMajestic[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroConstraint
        id="hotel-majestic"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.addresses.id}`, label: c.hero.secondaryCta }}
        constraint={c.hero.constraint}
      />

      <Band
        id={c.addresses.id}
        labelledBy={`${c.addresses.id}-heading`}
        size="wide"
      >
        <Eyebrow>{c.addresses.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.addresses.id}-heading`}
          lead={c.addresses.lead}
          className="mt-4"
        >
          {c.addresses.heading}
        </BandHeading>
        <CompareColumns columns={c.addresses.columns} className="mt-10" />
        <SourceNote
          href={c.addresses.source.href}
          linkText={c.addresses.source.linkText}
          className="mt-8 border-t border-border pt-5"
        >
          {c.addresses.source.text}
        </SourceNote>
        <Callout
          heading={c.limits.heading}
          tone="accent"
          className="mt-8 max-w-[72ch]"
        >
          <p>{c.limits.body}</p>
        </Callout>
      </Band>

      <Band
        id={c.streets.id}
        labelledBy={`${c.streets.id}-heading`}
        tone="sunken"
      >
        <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
          <div>
            <Eyebrow>{c.streets.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.streets.id}-heading`}
              lead={c.streets.lead}
              className="mt-4"
            >
              {c.streets.heading}
            </BandHeading>
          </div>
          <div>
            <Checklist items={c.streets.items} />
            <p className="mt-7 max-w-[64ch] border-t border-border pt-5 type-small text-muted-foreground">
              {c.streets.note}
            </p>
          </div>
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
