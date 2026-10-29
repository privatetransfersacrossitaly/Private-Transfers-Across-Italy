import { Band } from "@/components/site/band";
import {
  BandHeading,
  Checklist,
  DataTable,
  Eyebrow,
  LinkIndex,
  QuestionList,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroConstraint } from "@/components/site/heroes";
import { OwnerNote } from "@/components/campania/owner-note";
import { naplesCruisePort } from "@/content/campania/cruise-port";
import { faqIllustration } from "@/content/faq-illustrations";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The Naples cruise terminal at the Stazione Marittima.
 *
 * ── Why the constraint hero again ─────────────────────────────────────────
 * `HeroConstraint` carries a page whose central subject is partly unresolved.
 * Florence uses it because a municipal rule could not be read; the Ravenna
 * terminal because three official sources disagreed; the Bologna Majestic
 * because a hotel's permission is not ours.
 *
 * Here the unresolved thing is narrower and, for a cruise passenger, sharper:
 * **where a vehicle may actually wait inside the port.** No public source
 * read establishes it, and the terminal operator's own site returned HTTP 403
 * to every attempt. Putting that in the hero rather than the FAQ means a
 * reader who skims still learns that no meeting point has been promised.
 *
 * ── Two modules, deliberately unlike each other ───────────────────────────
 * The quay table is the same shape as the Naples hub's, one level deeper:
 * the hub compares four gateways including the airport, this compares the
 * three waterfront facilities a cruise passenger can confuse. Scanning beats
 * prose for both.
 *
 * `OwnerNote` then carries the one thing we *can* say about collection — that
 * arrangements exist — on a neutral surface, under a label naming it as the
 * business's own statement. It sits in its own band so it can never be read
 * as part of the sourced material above it.
 */
export function NaplesCruisePortPage({ locale }: { locale: Locale }) {
  const c = naplesCruisePort[locale];
  const quote = quotePathFor(locale);
  const t = c.quays.split;

  return (
    <>
      <HeroConstraint
        id="naples-cruise-port"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.quays.id}`, label: c.hero.secondaryCta }}
        constraint={c.hero.constraint}
      />

      <Band id={c.quays.id} labelledBy={`${c.quays.id}-heading`} size="wide">
        <Eyebrow>{c.quays.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.quays.id}-heading`}
          lead={c.quays.lead}
          className="mt-4"
        >
          {c.quays.heading}
        </BandHeading>
        <DataTable
          className="mt-10"
          caption={t.caption}
          columns={[t.columns.facility, t.columns.serves, t.columns.detail]}
          rows={t.items.map((item) => ({
            id: item.id,
            cells: [item.name, item.serves, item.detail],
          }))}
        />
        <p className="mt-6 max-w-[70ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.quays.note}
        </p>
      </Band>

      <Band
        id="coverage"
        labelledBy="coverage-heading"
        tone="sunken"
        size="prose"
      >
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
        <QuestionList
          items={c.faq.items}
          illustration={faqIllustration("naples-cruise-port", locale)} className="mt-10" />
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
