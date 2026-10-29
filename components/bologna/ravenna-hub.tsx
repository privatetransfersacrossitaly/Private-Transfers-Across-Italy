import { Band } from "@/components/site/band";
import {
  BandHeading,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroBand } from "@/components/site/heroes";
import { ravennaHub } from "@/content/bologna/ravenna";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The Ravenna hub.
 *
 * ── Deliberately the shortest page in the cluster ─────────────────────────
 * Four bands and no more. It exists because the shared route type needs a
 * page id at both ends of a journey, so the terminal routes cannot be built
 * without a city page — and because there is exactly one thing a visitor must
 * be told before anything else, which is that the cruise port is not in the
 * city.
 *
 * `HeroBand` is the right opening for that: typographic, no photograph, and
 * its three facts do the work of a paragraph. Its docstring says it is for a
 * page whose job is to correct an assumption rather than sell a view, which
 * is this page exactly.
 *
 * Writing it longer would mean inventing material about a city nothing in
 * this project has researched. The Verona route set the precedent — brevity
 * is the honest answer when brevity is the truth.
 */
export function RavennaHubPage({ locale }: { locale: Locale }) {
  const c = ravennaHub[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroBand
        id="ravenna"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.port.id}`, label: c.hero.secondaryCta }}
        facts={c.hero.facts}
      />

      <Band id={c.port.id} labelledBy={`${c.port.id}-heading`} size="prose">
        <Eyebrow>{c.port.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.port.id}-heading`}
          lead={c.port.lead}
          className="mt-4"
        >
          {c.port.heading}
        </BandHeading>
        <Paragraphs items={c.port.paragraphs} className="mt-7" />
      </Band>

      <Band
        id={c.onward.id}
        labelledBy={`${c.onward.id}-heading`}
        tone="deep"
        spacing="tight"
      >
        <BandHeading id={`${c.onward.id}-heading`} tone="deep">
          {c.onward.heading}
        </BandHeading>
        <LinkIndex
          tone="deep"
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
        tone="sunken"
      />
    </>
  );
}
