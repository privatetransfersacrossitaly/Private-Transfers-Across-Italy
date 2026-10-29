import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroMeta } from "@/components/site/heroes";
import { linate } from "@/content/milan/linate";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Linate.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * The shortest page in the project, and the shortness is the argument. Linate
 * is the city airport: close, small, quickly described. A long page with a
 * tall hero and six sections would contradict its own content.
 *
 * So: a compact hero with the facts on one rule-separated line, three use
 * cases as a definition list, one callout that refuses the obvious conclusion
 * — close is not the same as quick — a short index, four questions, and out.
 *
 * It has no photograph, like Ciampino in the Rome cluster, and for a related
 * reason: nothing it could show would say anything the text does not. The two
 * pages are not alike otherwise. Ciampino opens dark and leads with a
 * comparison table; this one opens light and never uses one.
 */
export function LinatePage({ locale }: { locale: Locale }) {
  const c = linate[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroMeta
        id="linate"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        facts={c.hero.facts}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: `#${c.caution.id}`,
          label: c.hero.secondaryCta,
        }}
      />

      <Band id={c.cases.id} labelledBy={`${c.cases.id}-heading`} spacing="tight">
        <Eyebrow>{c.cases.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.cases.id}-heading`}
          lead={c.cases.lead}
          className="mt-4"
        >
          {c.cases.heading}
        </BandHeading>
        <DefinitionList
          items={c.cases.items}
          className="mt-8 border-t border-border"
        />
      </Band>

      {/* The page's one refusal, given its own surface. */}
      <Band
        id={c.caution.id}
        labelledBy={`${c.caution.id}-heading`}
        tone="sunken"
        size="prose"
        spacing="tight"
      >
        <Callout heading={c.caution.heading} tone="accent">
          {c.caution.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <SourceNote
            href={c.caution.source.href}
            linkText={c.caution.source.linkText}
            className="pt-2"
          >
            {c.caution.source.text}
          </SourceNote>
        </Callout>
        <h2 id={`${c.caution.id}-heading`} className="sr-only">
          {c.caution.heading}
        </h2>
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

      <Band
        id={c.faq.id}
        labelledBy={`${c.faq.id}-heading`}
        tone="deep"
        spacing="tight"
      >
        <Eyebrow tone="deep">{c.faq.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.faq.id}-heading`}
          lead={c.faq.lead}
          tone="deep"
          className="mt-4"
        >
          {c.faq.heading}
        </BandHeading>
        <QuestionList items={c.faq.items} tone="deep" className="mt-8" />
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
