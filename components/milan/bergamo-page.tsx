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
import { Container } from "@/components/site/container";
import { HeroGeo } from "@/components/site/heroes";
import { Photo } from "@/components/site/photo";
import { photo } from "@/content/photos";
import { bergamoAirport } from "@/content/milan/bergamo";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Bergamo — Il Caravaggio International Airport.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * The page corrects a geographic assumption, so the correction is drawn
 * inside the hero: Milan, then fifty kilometres, then the airport, then five
 * kilometres, then Bergamo. A reader understands the problem before reading a
 * sentence about it.
 *
 * Civitavecchia in the Rome cluster also draws its geography, and the two are
 * worth comparing because they are not the same move. Civitavecchia's stepper
 * is a *sequence* — ship, gate, city — placed after the hero and numbered as
 * stages of a journey. This is a *scale* — two gaps of very different size,
 * placed inside the hero, where the point is the comparison rather than the
 * order.
 *
 * The hero stays text-led: the diagram is the page's visual centre and a
 * photograph competing with it would weaken both. A photograph of the airport
 * itself — found during the final review, after the first pass could not
 * source one — sits mid-page instead, between the airport's identity and the
 * consequences of its distance.
 *
 * It is a photograph of the airport, not of the city. The architecture
 * document forbids using a Bergamo city image to stand in for the airport,
 * and that rule is the whole reason this page went without one for as long as
 * it did.
 */
export function BergamoPage({ locale }: { locale: Locale }) {
  const c = bergamoAirport[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroGeo
        id="bergamo-airport"
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
          className="mt-6 max-w-[76ch]"
        >
          {c.identity.source.text}
        </SourceNote>
      </Band>

      <Container size="wide">
        <Photo
          photo={photo("bergamo-airport")}
          locale={locale}
          aspect="aspect-[16/7] sm:aspect-[21/8]"
          sizes="(min-width: 1360px) 82rem, 100vw"
        />
      </Container>

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
      >
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
