import { Band } from "@/components/site/band";
import {
  BandHeading,
  Checklist,
  CompareColumns,
  Eyebrow,
  LinkIndex,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroFrame } from "@/components/site/heroes";
import { malpensa } from "@/content/milan/malpensa";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Malpensa.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * Fiumicino — the other big airport in this project — is built around a
 * timeline, because an airport pickup is a sequence in time. Malpensa is not
 * built that way, because its distinguishing fact is not temporal but
 * geographic: it serves two completely different journeys, into Milan and out
 * to the lakes, and a visitor needs to know which one they are on.
 *
 * So the dominant module is a destination matrix — three labelled groups of
 * links, each with a note saying what that direction involves. It is the only
 * module of its kind in either cluster, and it sits where Fiumicino puts its
 * timeline.
 *
 * The hero lets the photograph bleed off the right edge, which reads as scale
 * and distinguishes the opening from Fiumicino's contained split at a glance.
 *
 * That photograph was a generic check-in hall shared with the Fiumicino page
 * until the final review found one of Malpensa itself. It shows the terminal
 * from the approach road — the part of an airport a transfer actually meets —
 * rather than a kerb, which would have implied a pickup arrangement the page
 * explicitly refuses to promise.
 */
export function MalpensaPage({ locale }: { locale: Locale }) {
  const c = malpensa[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroFrame
        id="malpensa"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: `#${c.matrix.id}`,
          label: c.hero.secondaryCta,
        }}
        note={c.hero.note}
        photoSlug="malpensa-terminal"
      />

      {/* The page's centre: where this airport actually sends people. */}
      <Band
        id={c.matrix.id}
        labelledBy={`${c.matrix.id}-heading`}
        size="wide"
      >
        <Eyebrow>{c.matrix.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.matrix.id}-heading`}
          lead={c.matrix.lead}
          className="mt-4"
        >
          {c.matrix.heading}
        </BandHeading>

        <div className="mt-10 grid gap-x-10 gap-y-10 lg:grid-cols-3">
          {c.matrix.groups.map((group) => (
            <section
              key={group.id}
              aria-labelledby={`matrix-${group.id}`}
              className="border-t-2 border-accent/40 pt-5"
            >
              <h3
                id={`matrix-${group.id}`}
                className="font-heading type-h3 text-foreground"
              >
                {group.heading}
              </h3>
              <p className="mt-2 max-w-[42ch] type-small text-muted-foreground">
                {group.note}
              </p>
              <LinkIndex
                columns={1}
                className="mt-5"
                items={group.items.map((item) => ({
                  id: item.page,
                  href: pathFor(item.page, locale),
                  label: item.label,
                  detail: item.detail,
                }))}
              />
            </section>
          ))}
        </div>
      </Band>

      <Band
        id={c.terminals.id}
        labelledBy={`${c.terminals.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.terminals.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.terminals.id}-heading`}
          lead={c.terminals.lead}
          className="mt-4"
        >
          {c.terminals.heading}
        </BandHeading>
        <CompareColumns columns={c.terminals.columns} className="mt-10" />
        <SourceNote
          href={c.terminals.source.href}
          linkText={c.terminals.source.linkText}
          className="mt-6 max-w-[74ch]"
        >
          {c.terminals.source.text}
        </SourceNote>
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
