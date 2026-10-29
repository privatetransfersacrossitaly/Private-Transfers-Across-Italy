import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  DataTable,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroSplit } from "@/components/site/heroes";
import { milanStations } from "@/content/milan/stations";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Milan's railway stations.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * Rome's station page also leads with a table, and that is deliberate rather
 * than lazy: a reference lookup wants a table, and inventing a different
 * primitive for the same job would be variation for its own sake, which the
 * architecture document warns against as plainly as it warns against cloning.
 *
 * What differs is everything around it. Rome's page narrows after the table
 * into a short argument about the walk from platform to pavement. Milan's
 * turns instead to a question Rome does not have: four stations, two
 * infrastructure managers, and an airport train that terminates at the one
 * run by the other company. That section is the page's centre, and the table
 * row for Cadorna is written to set it up.
 *
 * The hero is a contained split carrying the one photograph the page needs —
 * the Centrale concourse, which is the part of a station a transfer actually
 * meets. A second, decorative image of the Galleria sat mid-page until the
 * final review removed it: a shopping arcade illustrates nothing about a
 * railway station, and it was the project's last duplicated image.
 */
export function MilanStationsPage({ locale }: { locale: Locale }) {
  const c = milanStations[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroSplit
        id="milan-stations"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.table.id}`, label: c.hero.secondaryCta }}
        photoSlug="milan-centrale"
      />

      <Band id={c.table.id} labelledBy={`${c.table.id}-heading`} size="wide">
        <Eyebrow>{c.table.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.table.id}-heading`}
          lead={c.table.lead}
          className="mt-4"
        >
          {c.table.heading}
        </BandHeading>
        <DataTable
          caption={c.table.caption}
          columns={c.table.columns}
          className="mt-10"
          rows={c.table.rows.map((row) => ({
            id: row.id,
            cells: [row.name, row.scale, row.note],
          }))}
        />
        <SourceNote
          href={c.table.source.href}
          linkText={c.table.source.linkText}
          className="mt-6 max-w-[78ch]"
        >
          {c.table.source.text}
        </SourceNote>
      </Band>

      {/* The section Rome's station page has no equivalent of. */}
      <Band
        id={c.managers.id}
        labelledBy={`${c.managers.id}-heading`}
        tone="sunken"
      >
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
          <div>
            <Eyebrow>{c.managers.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.managers.id}-heading`}
              lead={c.managers.lead}
              className="mt-4"
            >
              {c.managers.heading}
            </BandHeading>
            <Paragraphs items={c.managers.paragraphs} className="mt-7" />
          </div>

          <Callout heading={c.assistance.heading}>
            {c.assistance.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <SourceNote
              href={c.assistance.source.href}
              linkText={c.assistance.source.linkText}
              className="pt-2"
            >
              {c.assistance.source.text}
            </SourceNote>
          </Callout>
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
