import { Band } from "@/components/site/band";
import {
  BandHeading,
  Checklist,
  DataTable,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroConstraint } from "@/components/site/heroes";
import { ravennaTerminal } from "@/content/bologna/terminal";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Ravenna Cruise Terminal at Porto Corsini.
 *
 * ── Why it reuses Florence's hero ─────────────────────────────────────────
 * `HeroConstraint` was built for the Florence hub, where the rule that
 * decides everything could not be read. The problem here is the same shape
 * from the opposite direction: three official bodies describe this port and
 * all three were reachable, but they contradict each other, and on the two
 * questions that matter most to a transfer — where a car may collect you,
 * and how far the city is — the record is either silent or split.
 *
 * So the hero states what is settled, marks what is not, and links the
 * operator. The `unknown` field is required by the content type precisely so
 * a later edit cannot quietly drop the caveat and keep the page.
 *
 * ── The module that makes the page ────────────────────────────────────────
 * The disagreement is rendered as a `DataTable` rather than described in
 * prose: a row per question, a column per publisher, attributed, with no
 * averaging. Nothing else on this site does this, because no other subject
 * needed it — and a page that silently picked 13 km over "about 15 km" would
 * look more confident while being less true.
 *
 * No photograph, and the reason is unusually strong: the operator states the
 * terminal is presently a temporary marquee, so there is no building to show.
 */
export function RavennaTerminalPage({ locale }: { locale: Locale }) {
  const c = ravennaTerminal[locale];
  const quote = quotePathFor(locale);
  const t = c.disagreement.table;

  return (
    <>
      <HeroConstraint
        id="ravenna-terminal"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: `#${c.disagreement.id}`,
          label: c.hero.secondaryCta,
        }}
        constraint={c.hero.constraint}
      />

      {/* The disagreement, as data rather than prose. */}
      <Band
        id={c.disagreement.id}
        labelledBy={`${c.disagreement.id}-heading`}
        size="wide"
      >
        <Eyebrow>{c.disagreement.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.disagreement.id}-heading`}
          lead={c.disagreement.lead}
          className="mt-4"
        >
          {c.disagreement.heading}
        </BandHeading>
        <DataTable
          className="mt-10"
          caption={t.caption}
          columns={[t.questionHeading, ...t.publishers]}
          rows={t.rows.map((row) => ({
            id: row.id,
            cells: [row.question, ...row.answers],
          }))}
        />
        <p className="mt-6 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.disagreement.note}
        </p>
      </Band>

      <Band
        id={c.marquee.id}
        labelledBy={`${c.marquee.id}-heading`}
        tone="sunken"
        size="prose"
      >
        <Eyebrow>{c.marquee.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.marquee.id}-heading`}
          lead={c.marquee.lead}
          className="mt-4"
        >
          {c.marquee.heading}
        </BandHeading>
        <Paragraphs items={c.marquee.paragraphs} className="mt-7" />
        <SourceNote
          href={c.marquee.source.href}
          linkText={c.marquee.source.linkText}
          className="mt-7 border-t border-border pt-5"
        >
          {c.marquee.source.text}
        </SourceNote>
      </Band>

      <Band
        id={c.directions.id}
        labelledBy={`${c.directions.id}-heading`}
        spacing="tight"
      >
        <BandHeading id={`${c.directions.id}-heading`}>
          {c.directions.heading}
        </BandHeading>
        <LinkIndex
          className="mt-6"
          items={c.directions.items.map((item) => ({
            id: item.page,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
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
