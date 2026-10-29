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
import { HeroEndpoints } from "@/components/site/heroes";
import { veniceHub } from "@/content/veneto/venice";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The Venice hub.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * Rome's hub opens on a photograph; Milan's opens on a decision between three
 * airports. Venice opens on a contradiction, because what a visitor needs
 * first is not orientation but correction: the belief that a car can be sent
 * to the address is false for most of this city, and a page that spends three
 * sections building up to that has already lost.
 *
 * So the hero is two panels — where a road vehicle can finish, and where it
 * cannot — and the second carries the refusal about boats explicitly. Only
 * then does the page explain why, at a reading measure, because the
 * explanation is an argument rather than a lookup.
 *
 * There is no photograph on this page and no card grid. The one visual idea
 * is the split, and adding anything decorative would dilute the only thing
 * the page is really for.
 */
export function VeniceHubPage({ locale }: { locale: Locale }) {
  const c = veniceHub[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroEndpoints
        id="venice"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.why.id}`, label: c.hero.secondaryCta }}
        split={c.hero.split}
      />

      {/* The argument, at a reading measure. */}
      <Band id={c.why.id} labelledBy={`${c.why.id}-heading`} size="prose">
        <Eyebrow>{c.why.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.why.id}-heading`}
          lead={c.why.lead}
          className="mt-4"
        >
          {c.why.heading}
        </BandHeading>
        <Paragraphs items={c.why.paragraphs} className="mt-7" />
      </Band>

      <Band
        id={c.arrivals.id}
        labelledBy={`${c.arrivals.id}-heading`}
        tone="deep"
      >
        <Eyebrow tone="deep">{c.arrivals.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.arrivals.id}-heading`}
          lead={c.arrivals.lead}
          tone="deep"
          className="mt-4"
        >
          {c.arrivals.heading}
        </BandHeading>
        <LinkIndex
          tone="deep"
          className="mt-10"
          items={c.arrivals.items.map((item) => ({
            id: item.page,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
      </Band>

      <Band tone="sunken" size="prose" spacing="tight">
        <Callout heading={c.accessFee.heading}>
          {c.accessFee.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <SourceNote
            href={c.accessFee.source.href}
            linkText={c.accessFee.source.linkText}
            className="pt-2"
          >
            {c.accessFee.source.text}
          </SourceNote>
        </Callout>
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

      <Band id={c.faq.id} labelledBy={`${c.faq.id}-heading`} tone="sunken">
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
