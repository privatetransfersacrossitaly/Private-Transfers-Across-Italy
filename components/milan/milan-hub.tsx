import { Band } from "@/components/site/band";
import {
  BandHeading,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
  ZoneDiagram,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { Container } from "@/components/site/container";
import { HeroChooser } from "@/components/site/heroes";
import { Photo } from "@/components/site/photo";
import { photo } from "@/content/photos";
import { milanHub } from "@/content/milan/milan";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The Milan destination hub.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * Rome's hub opens on a photograph and reaches its comparison of arrival
 * points in the first section below. Milan's opens on the comparison itself:
 * the airport selector is inside the hero, because "which of the three am I
 * flying into?" is the question that brings people here and everything on the
 * page depends on the answer.
 *
 * The second difference is the zones. Rome's access section is prose beside a
 * card of published hours; Milan's is drawn, because Area C sits *inside*
 * Area B and a list cannot show containment. That diagram exists on no other
 * page in either cluster.
 *
 * A wide photograph then separates the zones from the districts — placed
 * mid-page, where it is a breath between two dense sections, rather than
 * stacked under the hero.
 */
export function MilanHubPage({ locale }: { locale: Locale }) {
  const c = milanHub[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroChooser
        id="milan"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: `#${c.zones.id}`,
          label: c.hero.secondaryCta,
        }}
        chooser={{
          heading: c.hero.chooser.heading,
          note: c.hero.chooser.note,
          rows: c.hero.chooser.rows.map((row) => ({
            id: row.id,
            name: row.name,
            code: row.code,
            fact: row.fact,
            href: pathFor(row.page, locale),
          })),
        }}
      />

      {/* The drawn zones — prose on the left, containment on the right. */}
      <Band id={c.zones.id} labelledBy={`${c.zones.id}-heading`}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
          <div>
            <Eyebrow>{c.zones.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.zones.id}-heading`}
              lead={c.zones.lead}
              className="mt-4"
            >
              {c.zones.heading}
            </BandHeading>
            <Paragraphs items={c.zones.paragraphs} className="mt-7" />
            <SourceNote
              href={c.zones.source.href}
              linkText={c.zones.source.linkText}
              className="mt-6 max-w-[70ch]"
            >
              {c.zones.source.text}
            </SourceNote>
          </div>
          <ZoneDiagram outer={c.zones.outer} inner={c.zones.inner} />
        </div>
      </Band>

      {/* A breath between two dense sections. */}
      <Container size="wide">
        <Photo
          photo={photo("milan-duomo")}
          locale={locale}
          aspect="aspect-[16/7] sm:aspect-[21/8]"
          sizes="(min-width: 1360px) 82rem, 100vw"
        />
      </Container>

      <Band
        id={c.districts.id}
        labelledBy={`${c.districts.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.districts.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.districts.id}-heading`}
          lead={c.districts.lead}
          className="mt-4"
        >
          {c.districts.heading}
        </BandHeading>
        <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
          <DefinitionList
            items={c.districts.items}
            className="border-t border-border"
          />
          <Photo
            photo={photo("milan-galleria")}
            locale={locale}
            aspect="aspect-[4/3] lg:aspect-[3/4]"
            sizes="(min-width: 1024px) 20rem, 92vw"
          />
        </div>
      </Band>

      <Band id={c.onward.id} labelledBy={`${c.onward.id}-heading`} tone="deep">
        <Eyebrow tone="deep">{c.onward.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.onward.id}-heading`}
          lead={c.onward.lead}
          tone="deep"
          className="mt-4"
        >
          {c.onward.heading}
        </BandHeading>
        <LinkIndex
          tone="deep"
          className="mt-10"
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
