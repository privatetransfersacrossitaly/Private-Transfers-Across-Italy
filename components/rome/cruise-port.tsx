import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Eyebrow,
  LinkIndex,
  NumberedSteps,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroBackdrop } from "@/components/site/heroes";
import { civitavecchia } from "@/content/rome/civitavecchia";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Civitavecchia.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * The page opens on the photograph itself, under a scrim, and then does
 * something none of the other pages do: it draws the geography before it
 * explains anything, as three labelled stages across the page, because the
 * misunderstanding this page exists to correct is spatial. The caveat about
 * berth access sits with that geography rather than under the hero, where it
 * was interrupting the opening.
 *
 * The checklist is then the largest thing on the page, on the dark surface,
 * and the warning sits immediately under it. On a sailing day the logistics
 * are the content; prose would be a worse answer.
 */
export function CivitavecchiaPage({ locale }: { locale: Locale }) {
  const c = civitavecchia[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroBackdrop
        id="civitavecchia"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.confirm.id}`, label: c.hero.secondaryCta }}
        photoSlug="cruise-ship-dock"
      />

      {/* The geography, drawn across the page as three connected stages. */}
      <Band
        id={c.geography.id}
        labelledBy={`${c.geography.id}-heading`}
        size="wide"
      >
        <Eyebrow>{c.geography.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.geography.id}-heading`}
          lead={c.geography.lead}
          className="mt-4"
        >
          {c.geography.heading}
        </BandHeading>

        <ol className="mt-10 grid gap-x-8 gap-y-8 lg:grid-cols-3">
          {c.geography.stages.map((stage, index) => (
            <li key={stage.label} className="relative">
              {/* The rule that joins one stage to the next, horizontal on a
                  wide screen and vertical on a narrow one. */}
              <span
                aria-hidden="true"
                className="absolute top-2.5 left-0 h-px w-full bg-border"
              />
              <span
                aria-hidden="true"
                className="absolute top-0.5 left-0 h-5 w-5 rounded-full border-2 border-accent bg-background"
              />
              <div className="pt-10">
                <p className="type-label text-accent-ink">{stage.label}</p>
                <h3 className="mt-3 font-heading type-h3 text-foreground">
                  {index + 1}. {stage.title}
                </h3>
                <p className="mt-3 max-w-[46ch] type-body text-muted-foreground">
                  {stage.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <Callout tone="accent" className="mt-10">
          <p>{c.hero.note}</p>
        </Callout>

        <SourceNote
          href={c.geography.source.href}
          linkText={c.geography.source.linkText}
          className="mt-8 max-w-[78ch]"
        >
          {c.geography.source.text}
        </SourceNote>
      </Band>

      {/* The page's centre of gravity. */}
      <Band
        id={c.confirm.id}
        labelledBy={`${c.confirm.id}-heading`}
        tone="deep"
        spacing="loose"
      >
        <Eyebrow tone="deep">{c.confirm.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.confirm.id}-heading`}
          lead={c.confirm.lead}
          tone="deep"
          className="mt-4"
        >
          {c.confirm.heading}
        </BandHeading>
        <NumberedSteps items={c.confirm.steps} tone="deep" className="mt-10" />
        <Callout
          heading={c.confirm.warning.heading}
          tone="deep"
          className="mt-12 border-accent-glow/30"
        >
          <p>{c.confirm.warning.body}</p>
        </Callout>
      </Band>

      <Band
        id={c.connections.id}
        labelledBy={`${c.connections.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.connections.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.connections.id}-heading`}
          lead={c.connections.lead}
          className="mt-4"
        >
          {c.connections.heading}
        </BandHeading>
        <LinkIndex
          className="mt-9"
          items={c.connections.items.map((item) => ({
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
