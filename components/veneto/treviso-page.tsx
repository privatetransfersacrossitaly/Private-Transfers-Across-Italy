import { Band } from "@/components/site/band";
import {
  BandHeading,
  Eyebrow,
  FactStrip,
  LinkIndex,
  NumberedSteps,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroGeo } from "@/components/site/heroes";
import { trevisoAirport } from "@/content/veneto/treviso";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Treviso — Antonio Canova.
 *
 * ── The composition, and why it reuses a hero ─────────────────────────────
 * This page takes `HeroGeo`, the drawn-distance opening built for Bergamo in
 * the Milan cluster. That is a deliberate reuse, not an oversight.
 *
 * The problem is genuinely the same one: an airport sold under a city's name
 * stands tens of kilometres from it, and the correction is spatial, so it is
 * drawn rather than argued. Building a different primitive to say the same
 * thing would be variation for its own sake — which the architecture
 * documents warn against as plainly as they warn against cloning.
 *
 * What is not reused is the body. Bergamo's reader has one obstacle: fifty
 * kilometres, then an ordinary city. Treviso's has two — the distance, and
 * then Venice, where the road stops again. The numbered section is built
 * around that stacking, and the fourth step points back at Treviso itself as
 * a possible answer.
 */
export function TrevisoPage({ locale }: { locale: Locale }) {
  const c = trevisoAirport[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroGeo
        id="treviso-airport"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        diagram={c.hero.diagram}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: `#${c.consequences.id}`,
          label: c.hero.secondaryCta,
        }}
      />

      <Band id={c.identity.id} labelledBy={`${c.identity.id}-heading`}>
        <Eyebrow>{c.identity.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.identity.id}-heading`}
          lead={c.identity.lead}
          className="mt-4"
        >
          {c.identity.heading}
        </BandHeading>
        <FactStrip items={c.identity.facts} className="mt-9" />
        <SourceNote
          href={c.identity.source.href}
          linkText={c.identity.source.linkText}
          className="mt-6 max-w-[78ch]"
        >
          {c.identity.source.text}
        </SourceNote>
      </Band>

      <Band
        id={c.consequences.id}
        labelledBy={`${c.consequences.id}-heading`}
        tone="deep"
      >
        <Eyebrow tone="deep">{c.consequences.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.consequences.id}-heading`}
          lead={c.consequences.lead}
          tone="deep"
          className="mt-4"
        >
          {c.consequences.heading}
        </BandHeading>
        <NumberedSteps
          items={c.consequences.steps}
          tone="deep"
          className="mt-10"
        />
      </Band>

      <Band
        id={c.onward.id}
        labelledBy={`${c.onward.id}-heading`}
        tone="sunken"
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
      />
    </>
  );
}
