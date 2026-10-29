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
import { veronaHub } from "@/content/veneto/verona";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The Verona hub.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * Venice opens on a contradiction — two panels that disagree with each other.
 * Verona opens on three parallel modes laid flat across the foot of the hero,
 * because that is the honest shape of its choice: air, rail or road, none of
 * them a trap, none of them constraining the destination.
 *
 * The page is then deliberately short. Verona earns its place in this cluster
 * partly by being Venice's opposite, and a long page would undercut the point
 * it is making.
 *
 * The one section that needs care is Lake Garda, and it is built as a
 * statement followed immediately by a refusal: the airport is a real road
 * gateway to the lake, and no Garda route is published because coverage has
 * not been confirmed. The caution sits in an accent callout so it cannot be
 * skimmed past.
 */
export function VeronaHubPage({ locale }: { locale: Locale }) {
  const c = veronaHub[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroModes
        id="verona"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.station.id}`, label: c.hero.secondaryCta }}
        modes={c.hero.modes}
      />

      <Band
        id={c.station.id}
        labelledBy={`${c.station.id}-heading`}
        tone="sunken"
      >
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.station.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.station.id}-heading`}
              lead={c.station.lead}
              className="mt-4"
            >
              {c.station.heading}
            </BandHeading>
            <Paragraphs items={c.station.paragraphs} className="mt-7" />
          </div>

          <Callout heading={c.station.airlink.heading}>
            <p>{c.station.airlink.body}</p>
            <SourceNote
              href={c.station.source.href}
              linkText={c.station.source.linkText}
              className="pt-2"
            >
              {c.station.source.text}
            </SourceNote>
          </Callout>
        </div>
      </Band>

      {/* A real fact, then an immediate refusal. */}
      <Band id={c.garda.id} labelledBy={`${c.garda.id}-heading`}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.garda.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.garda.id}-heading`}
              lead={c.garda.lead}
              className="mt-4"
            >
              {c.garda.heading}
            </BandHeading>
            <Paragraphs items={c.garda.paragraphs} className="mt-7" />
          </div>
          <Callout heading={c.garda.caution.heading} tone="accent">
            <p>{c.garda.caution.body}</p>
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
