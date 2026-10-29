import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  ChooserList,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { Container } from "@/components/site/container";
import { HeroBackdrop } from "@/components/site/heroes";
import { Photo } from "@/components/site/photo";
import { photo } from "@/content/photos";
import { romeHub } from "@/content/rome/rome";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The Rome destination hub.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * A hub's job is to send a visitor onward to the page that matches their own
 * arrival, so the dominant module is a comparison of arrival points — four
 * rules, not four cards, because they are four different kinds of place and a
 * visitor belongs to exactly one of them.
 *
 * There is no card grid anywhere on this page. That is the clearest single
 * difference from the homepage, which is built almost entirely from them.
 *
 * The order is deliberate: arrive, then find out what decides where a car can
 * stop, then where you are staying, then the journeys themselves. It follows
 * the order in which the problem actually appears to someone planning a trip.
 *
 * The hero photograph is the backdrop rather than a band stacked beneath the
 * text, and the pricing caveat that used to sit under it has moved to the
 * questions, next to the question it actually answers.
 */
export function RomeHubPage({ locale }: { locale: Locale }) {
  const c = romeHub[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroBackdrop
        id="rome"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: `#${c.arrival.id}`,
          label: c.hero.secondaryCta,
        }}
        photoSlug="rome-colosseum"
      />

      {/* 1 — Which of the four are you? */}
      <Band id={c.arrival.id} labelledBy={`${c.arrival.id}-heading`} size="wide">
        <Eyebrow>{c.arrival.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.arrival.id}-heading`}
          lead={c.arrival.lead}
          className="mt-4"
        >
          {c.arrival.heading}
        </BandHeading>
        <ChooserList
          rows={c.arrival.rows.map((row) => ({
            id: row.id,
            role: row.role,
            name: row.name,
            href: pathFor(row.page, locale),
            fact: row.fact,
            body: row.body,
          }))}
        />
        <p className="mt-6 type-caption text-muted-foreground">
          {c.arrival.note}
        </p>
      </Band>

      {/* 2 — The constraint that decides the end of the journey. Prose on the
          left, the published hours as reference data on the right. */}
      <Band
        id={c.access.id}
        labelledBy={`${c.access.id}-heading`}
        tone="sunken"
      >
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.access.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.access.id}-heading`}
              lead={c.access.lead}
              className="mt-4"
            >
              {c.access.heading}
            </BandHeading>
            <Paragraphs items={c.access.paragraphs} className="mt-7" />
          </div>
          <div className="rounded-lg border border-border bg-surface p-6 sm:p-7">
            <DefinitionList
              items={c.access.zones}
              className="[&>div]:sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)]"
            />
            <SourceNote
              href={c.access.source.href}
              linkText={c.access.source.linkText}
              className="mt-6 border-t border-border pt-5"
            >
              {c.access.source.text}
            </SourceNote>
          </div>
        </div>
      </Band>

      {/* 3 — Where you are staying. A definition list beside a photograph, so
          the section reads as orientation rather than as a product range. */}
      <Band id={c.districts.id} labelledBy={`${c.districts.id}-heading`}>
        <Eyebrow>{c.districts.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.districts.id}-heading`}
          lead={c.districts.lead}
          className="mt-4"
        >
          {c.districts.heading}
        </BandHeading>
        <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
          <DefinitionList items={c.districts.items} className="border-t border-border" />
          <Photo
            photo={photo("rome-st-peters")}
            locale={locale}
            aspect="aspect-[4/3] lg:aspect-[3/4]"
            sizes="(min-width: 1024px) 20rem, 92vw"
          />
        </div>
      </Band>

      {/* 4 — The route index, on the dark surface so it reads as a directory
          rather than as another section of prose. */}
      <Band id={c.routes.id} labelledBy={`${c.routes.id}-heading`} tone="deep">
        <Eyebrow tone="deep">{c.routes.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.routes.id}-heading`}
          lead={c.routes.lead}
          tone="deep"
          className="mt-4"
        >
          {c.routes.heading}
        </BandHeading>
        <LinkIndex
          tone="deep"
          className="mt-10"
          items={c.routes.items.map((item) => ({
            id: item.page,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
      </Band>

      {/* 5 — Beyond the city: prose over a wide, slim photograph. */}
      <section aria-labelledby="beyond-heading" className="py-14 sm:py-18">
        <Container size="content">
          <h2 id="beyond-heading" className="type-h2 text-foreground">
            {c.beyond.heading}
          </h2>
          <Paragraphs items={c.beyond.paragraphs} className="mt-5" />
          <SourceNote
            href={c.beyond.source.href}
            linkText={c.beyond.source.linkText}
            className="mt-5"
          >
            {c.beyond.source.text}
          </SourceNote>
        </Container>
        <Container size="wide" className="mt-10">
          <Photo
            photo={photo("rome-tiber")}
            locale={locale}
            aspect="aspect-[21/8] sm:aspect-[32/9]"
            sizes="(min-width: 1360px) 82rem, 100vw"
          />
        </Container>
      </section>

      <Band id={c.faq.id} labelledBy={`${c.faq.id}-heading`} tone="sunken">
        <Eyebrow>{c.faq.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.faq.id}-heading`}
          lead={c.faq.lead}
          className="mt-4"
        >
          {c.faq.heading}
        </BandHeading>
        <Callout tone="accent" className="mt-9">
          <p>{c.hero.note}</p>
        </Callout>
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
