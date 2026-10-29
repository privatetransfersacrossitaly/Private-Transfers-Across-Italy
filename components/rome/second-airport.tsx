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
import { HeroBand } from "@/components/site/heroes";
import { ciampino } from "@/content/rome/ciampino";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Ciampino.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * Deliberately inverted relative to Fiumicino. That page opens with a
 * photograph beside its text and reaches its comparison late; this one opens
 * with a dark typographic band carrying the four facts inline, and the
 * comparison table is the first thing below it — because the question that
 * brings people here is "how is this different from the other one?", and an
 * introduction that made them scroll for the answer would be badly made.
 *
 * It is also the only page in the cluster with no photograph, for the reason
 * recorded in its content file and in the asset manifest. The compensation is
 * typographic: a dark opening, a measured prose section with its own
 * subheadings, and no card grid anywhere.
 */
export function CiampinoPage({ locale }: { locale: Locale }) {
  const c = ciampino[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroBand
        id="ciampino"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        facts={c.hero.facts}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: `#${c.compare.id}`,
          label: c.hero.secondaryCta,
        }}
      />

      {/* The answer to the question that brought them here, first. */}
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
          className="mt-6 max-w-[72ch]"
        >
          {c.compare.source.text}
        </SourceNote>
      </Band>

      {/* Prose with its own subheadings — the page's editorial centre, and
          the thing that fills the space a photograph would have taken. */}
      <Band
        id={c.practical.id}
        labelledBy={`${c.practical.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.practical.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.practical.id}-heading`}
          lead={c.practical.lead}
          className="mt-4"
        >
          {c.practical.heading}
        </BandHeading>
        <div className="mt-10 space-y-10 border-t border-border pt-10">
          {c.practical.sections.map((section) => (
            <div
              key={section.heading}
              className="grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]"
            >
              <h3 className="font-heading type-h3 text-foreground">
                {section.heading}
              </h3>
              <Paragraphs items={section.paragraphs} />
            </div>
          ))}
        </div>
      </Band>

      <Band id={c.onward.id} labelledBy={`${c.onward.id}-heading`}>
        <BandHeading id={`${c.onward.id}-heading`}>
          {c.onward.heading}
        </BandHeading>
        <LinkIndex
          className="mt-8"
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
