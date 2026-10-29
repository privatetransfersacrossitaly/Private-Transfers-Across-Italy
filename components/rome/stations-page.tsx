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
import { HeroNarrow } from "@/components/site/heroes";
import { stations } from "@/content/rome/stations";
import { faqIllustration } from "@/content/faq-illustrations";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Rome's railway stations.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * This is a reference page: which station, how big, what is there. So it is
 * the only page in the cluster that leads with a table, and the only one
 * whose hero sets a reading measure beside a portrait photograph rather than
 * a landscape one.
 *
 * After the table the page narrows deliberately into prose for the handover —
 * platform to pavement — because that part is a short argument, not data, and
 * the assistance note sits inside a callout so it cannot be mistaken for a
 * service this site provides.
 */
export function StationsPageView({ locale }: { locale: Locale }) {
  const c = stations[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroNarrow
        id="rome-stations"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.table.id}`, label: c.hero.secondaryCta }}
        photoSlug="rome-termini"
      />

      {/* The reference table, first. */}
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

      {/* Then it narrows into prose. */}
      <Band
        id={c.handover.id}
        labelledBy={`${c.handover.id}-heading`}
        tone="sunken"
        size="prose"
      >
        <Eyebrow>{c.handover.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.handover.id}-heading`}
          lead={c.handover.lead}
          className="mt-4"
        >
          {c.handover.heading}
        </BandHeading>
        <Paragraphs items={c.handover.paragraphs} className="mt-7" />

        <Callout heading={c.assistance.heading} className="mt-10">
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
        <QuestionList
          items={c.faq.items}
          illustration={faqIllustration("rome-stations", locale)} tone="deep" className="mt-10" />
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
