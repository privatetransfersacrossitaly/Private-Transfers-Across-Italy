import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
  TownIndex,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroTowns } from "@/components/site/heroes";
import { Photo } from "@/components/site/photo";
import { photo } from "@/content/photos";
import { lakeComo } from "@/content/milan/lake-como";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Lake Como.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * The hero carries a town selector along its foot, because the page cannot
 * help anyone until they have named a town — "Lake Como" is fifty kilometres
 * of shoreline on three arms of water. Those anchors land in the town index,
 * which is organised by branch rather than alphabetically, so the geography
 * does the sorting.
 *
 * The section that matters most, though, is the one that refuses. A road
 * transfer is a road transfer, and the page gives that its own band, its own
 * photograph of an actual ferry, and a warning callout naming the three
 * assumptions it will not let a reader carry away. No other page in either
 * cluster is built around a refusal this prominent — Civitavecchia's warning
 * is a single callout at the end of a checklist; here it is the argument.
 */
export function LakeComoPage({ locale }: { locale: Locale }) {
  const c = lakeComo[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroTowns
        id="lake-como"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.water.id}`, label: c.hero.secondaryCta }}
        photoSlug="lake-como-shore"
        towns={{
          heading: c.hero.townsHeading,
          items: c.towns.items.map((town) => ({
            id: town.id,
            label: town.name,
            href: `#${town.id}`,
          })),
        }}
      />

      <Band id={c.shape.id} labelledBy={`${c.shape.id}-heading`} size="prose">
        <Eyebrow>{c.shape.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.shape.id}-heading`}
          lead={c.shape.lead}
          className="mt-4"
        >
          {c.shape.heading}
        </BandHeading>
        <Paragraphs items={c.shape.paragraphs} className="mt-7" />
      </Band>

      <Band
        id={c.towns.id}
        labelledBy={`${c.towns.id}-heading`}
        tone="sunken"
        size="wide"
      >
        <Eyebrow>{c.towns.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.towns.id}-heading`}
          lead={c.towns.lead}
          className="mt-4"
        >
          {c.towns.heading}
        </BandHeading>
        <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
          <TownIndex towns={c.towns.items} />
          <Photo
            photo={photo("lake-como-bellagio")}
            locale={locale}
            aspect="aspect-[4/3] lg:aspect-[3/4]"
            sizes="(min-width: 1024px) 20rem, 92vw"
          />
        </div>
      </Band>

      {/* The refusal, given the weight it deserves. */}
      <Band id={c.water.id} labelledBy={`${c.water.id}-heading`} size="wide">
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
          <div>
            <Eyebrow>{c.water.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.water.id}-heading`}
              lead={c.water.lead}
              className="mt-4"
            >
              {c.water.heading}
            </BandHeading>
            <Paragraphs items={c.water.paragraphs} className="mt-7" />
            <SourceNote
              href={c.water.source.href}
              linkText={c.water.source.linkText}
              className="mt-6 max-w-[70ch]"
            >
              {c.water.source.text}
            </SourceNote>
          </div>

          <div>
            <Photo
              photo={photo("lake-como-ferry")}
              locale={locale}
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 28rem, 92vw"
            />
            <Callout
              heading={c.water.warning.heading}
              tone="accent"
              className="mt-6"
            >
              <p>{c.water.warning.body}</p>
            </Callout>
          </div>
        </div>
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
