import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  ChooserList,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroConstraint } from "@/components/site/heroes";
import { florenceHub } from "@/content/tuscany/florence";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The Florence hub.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * Rome's hub leads with an arrival-point comparison and puts its ZTL hours in
 * a card. Milan's draws its two zones as nested boxes with their hours in
 * them. Florence can do neither honestly: the Comune's pages refused
 * connection for this build, the secondary sources disagree about the hours,
 * and nothing official could be read on whether a private-hire car may enter
 * a sector at all.
 *
 * So the page front-loads the constraint instead of burying it. The hero is
 * the only one in the family that opens by stating what the page does not
 * know, the ZTL band treats the gap as content rather than as an omission,
 * and the Comune is the first outbound link rather than a footnote.
 *
 * The caution sits in an accent callout beside the explanation, in the shape
 * the Verona hub uses for Lake Garda — a statement followed immediately by a
 * refusal — because that pairing is the honest one whenever a page has to
 * describe something it cannot promise.
 */
export function FlorenceHubPage({ locale }: { locale: Locale }) {
  const c = florenceHub[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroConstraint
        id="florence"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.ztl.id}`, label: c.hero.secondaryCta }}
        constraint={c.hero.constraint}
      />

      <Band
        id={c.arrivals.id}
        labelledBy={`${c.arrivals.id}-heading`}
        size="wide"
      >
        <Eyebrow>{c.arrivals.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.arrivals.id}-heading`}
          lead={c.arrivals.lead}
          className="mt-4"
        >
          {c.arrivals.heading}
        </BandHeading>
        <ChooserList
          rows={c.arrivals.rows.map((row) => ({
            id: row.id,
            role: row.role,
            name: row.name,
            fact: row.fact,
            body: row.body,
            href: pathFor(row.page, locale),
          }))}
        />
      </Band>

      {/* The explanation, and the refusal, side by side. */}
      <Band id={c.ztl.id} labelledBy={`${c.ztl.id}-heading`} tone="sunken">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.ztl.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.ztl.id}-heading`}
              lead={c.ztl.lead}
              className="mt-4"
            >
              {c.ztl.heading}
            </BandHeading>
            <Paragraphs items={c.ztl.paragraphs} className="mt-7" />
            <SourceNote
              href={c.ztl.source.href}
              linkText={c.ztl.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.ztl.source.text}
            </SourceNote>
          </div>

          <Callout heading={c.ztl.caution.heading} tone="accent">
            <p>{c.ztl.caution.body}</p>
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
