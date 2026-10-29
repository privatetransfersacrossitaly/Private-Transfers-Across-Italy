import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  CompareColumns,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroGeo } from "@/components/site/heroes";
import { OwnerNote } from "@/components/campania/owner-note";
import { caserta } from "@/content/campania/caserta";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Caserta.
 *
 * ── Why the chain diagram, on a page about a palace ───────────────────────
 * `HeroGeo` draws a short sequence of places with the links between them
 * labelled. Bergamo uses it because the airport is not in Bergamo; Treviso
 * because the airport is not in Venice. Both are pages where the *geography*
 * is the misunderstanding.
 *
 * Caserta's is the opposite misunderstanding and the same shape answers it.
 * The palace's main entrance faces a railway station square, which makes
 * everybody assume the drop-off is trivial — and the palace publishes nothing
 * about it at all. So the diagram lays out exactly what the palace does
 * publish, motorway exit to entrance, and its caption carries the gap: nowhere
 * along that chain is a stopping place named. A reader who only looks at the
 * hero still learns the one thing this page exists to say.
 *
 * ── Two columns, because there are two gates ──────────────────────────────
 * The hub's four gateways earn a `DataTable`; three quays at the cruise
 * terminal earn another. Two entrances do not. `CompareColumns` is the block
 * for exactly two things held side by side, it is unused elsewhere in this
 * cluster, and a two-row table would look like a table that lost its rows.
 *
 * ── Where the refusals live ───────────────────────────────────────────────
 * The disputed street number gets a `note` under the comparison rather than a
 * callout, because it is a caveat about the column above it. The parking
 * refusal gets a whole band, because it is the page's second subject rather
 * than a footnote to its first. And `OwnerNote` keeps our own coverage
 * statement visually apart from the palace's words, as everywhere in Campania.
 */
export function CasertaPage({ locale }: { locale: Locale }) {
  const c = caserta[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroGeo
        id="caserta"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: `#${c.entrances.id}`,
          label: c.hero.secondaryCta,
        }}
        diagram={c.hero.diagram}
      />

      <Band
        id={c.entrances.id}
        labelledBy={`${c.entrances.id}-heading`}
        size="wide"
      >
        <Eyebrow>{c.entrances.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.entrances.id}-heading`}
          lead={c.entrances.lead}
          className="mt-4"
        >
          {c.entrances.heading}
        </BandHeading>
        <CompareColumns className="mt-10" columns={c.entrances.columns} />
        <p className="mt-7 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.entrances.note}
        </p>
        <SourceNote
          href={c.entrances.source.href}
          linkText={c.entrances.source.linkText}
          className="mt-6"
        >
          {c.entrances.source.text}
        </SourceNote>
      </Band>

      <Band
        id={c.stopping.id}
        labelledBy={`${c.stopping.id}-heading`}
        tone="sunken"
      >
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.stopping.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.stopping.id}-heading`}
              lead={c.stopping.lead}
              className="mt-4"
            >
              {c.stopping.heading}
            </BandHeading>
            <Paragraphs items={c.stopping.paragraphs} className="mt-7" />
            <SourceNote
              href={c.stopping.source.href}
              linkText={c.stopping.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.stopping.source.text}
            </SourceNote>
          </div>
          <Callout heading={c.stopping.limits.heading} tone="accent">
            <p>{c.stopping.limits.body}</p>
          </Callout>
        </div>
      </Band>

      <Band id="coverage" labelledBy="coverage-heading" size="prose">
        <OwnerNote claim={c.ownerClaim} headingId="coverage-heading" />
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
