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
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroTiers } from "@/components/site/heroes";
import { bolognaHub } from "@/content/bologna/bologna";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The Bologna hub.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * Rome opens on an arrival-point comparison, Milan draws two nested zones,
 * Florence confesses a rule it could not read. Bologna's restriction is fully
 * published and comes at three strengths, so the page opens by sorting the
 * reader rather than orienting them: before anything else is useful, they
 * need to know which of the three bands their address falls under.
 *
 * The tier model therefore sits in the hero rather than further down, and the
 * rest of the page serves it. The ZTL band explains the bands in prose beside
 * a callout that marks the edge of what we can honestly claim — the shape the
 * Verona and Florence hubs both use when a real fact has to be followed
 * immediately by a refusal.
 */
export function BolognaHubPage({ locale }: { locale: Locale }) {
  const c = bolognaHub[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroTiers
        id="bologna"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.ztl.id}`, label: c.hero.secondaryCta }}
        tiers={c.hero.tiers}
      />

      {/* The rule in prose, and the limit of what we may claim about it. */}
      <Band id={c.ztl.id} labelledBy={`${c.ztl.id}-heading`}>
        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <Eyebrow>{c.ztl.eyebrow}</Eyebrow>
            <BandHeading
              id={`${c.ztl.id}-heading`}
              lead={c.ztl.lead}
              className="mt-4"
            >
              {c.ztl.heading}
            </BandHeading>
            <Paragraphs items={c.ztl.paragraphs} className="mt-7" />
            <SourceNote
              href={c.ztl.source.href}
              linkText={c.ztl.source.linkText}
              className="mt-7 border-t border-border pt-5"
            >
              {c.ztl.source.text}
            </SourceNote>
          </div>
          <Callout heading={c.ztl.caution.heading} tone="accent">
            <p>{c.ztl.caution.body}</p>
          </Callout>
        </div>
      </Band>

      <Band
        id={c.arrivals.id}
        labelledBy={`${c.arrivals.id}-heading`}
        tone="sunken"
      >
        <Eyebrow>{c.arrivals.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.arrivals.id}-heading`}
          lead={c.arrivals.lead}
          className="mt-4"
        >
          {c.arrivals.heading}
        </BandHeading>
        <LinkIndex
          className="mt-8"
          items={c.arrivals.items.map((item) => ({
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
        tone="sunken"
      />
    </>
  );
}
