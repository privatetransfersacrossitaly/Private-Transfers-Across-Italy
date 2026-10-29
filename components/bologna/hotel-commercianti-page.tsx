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
import { HeroBand } from "@/components/site/heroes";
import { hotelCommercianti } from "@/content/bologna/hotel-commercianti";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Art Hotel Commercianti.
 *
 * ── A sequence, not a contrast ────────────────────────────────────────────
 * The Majestic's page is built on two columns because its subject is two
 * addresses for one building. This hotel's subject is a **procedure**: it
 * states where it is, states that a car can still get there by an authorised
 * route, asks you to contact reception, and registers the vehicle's plate.
 * Four steps in a fixed order, so the page is `NumberedSteps` and the two
 * pages cannot be mistaken for each other.
 *
 * `HeroBand` opens it — typographic, no photograph, three facts on a rule.
 * Its docstring describes it as the right opening for a page that corrects an
 * assumption, and the assumption here is that a pedestrian address inside a
 * limited-traffic zone simply cannot be driven to. The hotel says otherwise.
 *
 * The limits callout sits directly under the procedure rather than at the
 * foot of the page, because the step it qualifies — the plate registration —
 * is the one a reader is most likely to assume covers them.
 */
export function HotelCommerciantiPage({ locale }: { locale: Locale }) {
  const c = hotelCommercianti[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroBand
        id="hotel-commercianti"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.procedure.id}`, label: c.hero.secondaryCta }}
        facts={c.hero.facts}
      />

      <Band id={c.procedure.id} labelledBy={`${c.procedure.id}-heading`}>
        <Eyebrow>{c.procedure.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.procedure.id}-heading`}
          lead={c.procedure.lead}
          className="mt-4"
        >
          {c.procedure.heading}
        </BandHeading>
        <NumberedSteps items={c.procedure.steps} className="mt-10" />
        <SourceNote
          href={c.procedure.source.href}
          linkText={c.procedure.source.linkText}
          className="mt-8 border-t border-border pt-5"
        >
          {c.procedure.source.text}
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
        id={c.garage.id}
        labelledBy={`${c.garage.id}-heading`}
        tone="sunken"
        size="prose"
      >
        <Eyebrow>{c.garage.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.garage.id}-heading`}
          lead={c.garage.lead}
          className="mt-4"
        >
          {c.garage.heading}
        </BandHeading>
        <Paragraphs items={c.garage.paragraphs} className="mt-7" />
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
