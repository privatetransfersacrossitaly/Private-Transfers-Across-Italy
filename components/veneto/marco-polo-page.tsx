import { Band } from "@/components/site/band";
import {
  BandHeading,
  Checklist,
  Eyebrow,
  LinkIndex,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroMeta } from "@/components/site/heroes";
import { Photo } from "@/components/site/photo";
import { photo } from "@/content/photos";
import { EndpointPanels } from "@/components/veneto/endpoint-panels";
import { marcoPolo } from "@/content/veneto/marco-polo";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Venice Marco Polo.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * The page takes the homepage's own phrase for this airport — "a land side
 * and a water side" — and makes it the structure. The endpoint split from the
 * Venice hub reappears here in the body rather than the hero, so a reader who
 * has seen the hub recognises the shape immediately and a reader who has not
 * still cannot miss the distinction.
 *
 * The hero is the compact one built for Linate, which fits: this is a page
 * that has four identity facts to state and then a single argument to make,
 * and a tall opening would delay the argument.
 *
 * The photograph is a vaporetto at a landing stage, and it is placed in the
 * water half of the split on purpose. It depicts the thing that is *not*
 * included — the same device used for the Lake Como ferry — rather than
 * decorating the page with a canal view.
 */
export function MarcoPoloPage({ locale }: { locale: Locale }) {
  const c = marcoPolo[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroMeta
        id="venice-marco-polo"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        facts={c.facts}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.sides.id}`, label: c.hero.secondaryCta }}
      />

      <Band spacing="tight" size="content">
        <p className="max-w-[72ch] type-small text-muted-foreground">
          {c.hero.note}
        </p>
        <SourceNote
          href={c.factsSource.href}
          linkText={c.factsSource.linkText}
          className="mt-5 max-w-[76ch]"
        >
          {c.factsSource.text}
        </SourceNote>
      </Band>

      {/* The land side and the water side. */}
      <Band
        id={c.sides.id}
        labelledBy={`${c.sides.id}-heading`}
        tone="sunken"
        size="wide"
      >
        <Eyebrow>{c.sides.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.sides.id}-heading`}
          lead={c.sides.lead}
          className="mt-4"
        >
          {c.sides.heading}
        </BandHeading>

        <EndpointPanels split={c.sides.split} className="mt-10">
          <Photo
            photo={photo("venice-vaporetto")}
            locale={locale}
            aspect="aspect-[3/2]"
            sizes="(min-width: 1024px) 34rem, 92vw"
            className="mt-6"
          />
        </EndpointPanels>

        <SourceNote
          href={c.sides.source.href}
          linkText={c.sides.source.linkText}
          className="mt-8 max-w-[78ch]"
        >
          {c.sides.source.text}
        </SourceNote>
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
