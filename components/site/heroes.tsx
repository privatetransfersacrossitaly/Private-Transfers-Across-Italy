import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { Eyebrow } from "@/components/site/blocks";
import { Photo } from "@/components/site/photo";
import { photo, type PhotoSlug } from "@/content/photos";
import type { EndpointSplit } from "@/content/veneto/types";
import { EndpointPanels } from "@/components/veneto/endpoint-panels";
import type { PageId } from "@/lib/routes";
import type { Locale } from "@/lib/site";

/**
 * Six openings, one brand.
 *
 * The architecture document is blunt about this: changing the heading and the
 * photograph is not a different design. So the cluster's pages do not share a
 * hero — they share a type scale, a palette and a breadcrumb, and then each
 * one opens in the way its own content wants to be opened.
 *
 * Rome and Lazio:
 * - `HeroBackdrop` the photograph behind the words, under a measured scrim
 *                  (Rome hub, Civitavecchia)
 * - `HeroSplit`    text beside a photograph (Fiumicino)
 * - `HeroBand`     dense, typographic, no photograph at all (Ciampino)
 * - `HeroNarrow`   a reading measure beside a tall image (Rome stations)
 *
 * Milan and Lombardy:
 * - `HeroChooser`  the decision itself, inside the hero (Milan hub)
 * - `HeroFrame`    text in the measure, photograph bleeding off the edge
 *                  (Malpensa)
 * - `HeroMeta`     compact, one rule-separated line of facts (Linate)
 * - `HeroGeo`      a drawn distance, because the page corrects a geographic
 *                  assumption (Bergamo)
 * - `HeroTowns`    a backdrop with a destination selector along its foot
 *                  (Lake Como)
 *
 * Venice, Verona and the Veneto:
 * - `HeroEndpoints` two panels that contradict each other: where a car can
 *                   go, and where it cannot (Venice hub)
 * - `HeroModes`     three ways into an ordinary road city, laid flat
 *                   (Verona hub)
 *
 * Florence and Tuscany:
 * - `HeroConstraint` a restriction the page cannot fully resolve, stated in
 *                    the opening rather than buried in an FAQ (Florence hub,
 *                    and the Ravenna cruise terminal, whose published record
 *                    is incomplete in the same way)
 *
 * Bologna and Romagna:
 * - `HeroTiers`    one restriction at three strengths, stacked by severity,
 *                  so a reader can find which one their address falls under
 *                  (Bologna hub)
 *
 * Shared by page type:
 * - `HeroRoute`    a journey strip: where from, where to (every route page)
 *
 * They are in one file so the family is visible at a glance, and so a
 * fifteenth cannot be added without seeing the fourteen it has to differ
 * from. Where a cluster reuses one — Treviso takes Bergamo's drawn distance,
 * because the problem genuinely recurs — that is recorded in the relevant
 * design-differentiation document rather than disguised.
 */

type Common = {
  id: PageId;
  locale: Locale;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  lead: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  note?: string;
};

/* ── Pages whose photograph is the backdrop ──────────────────────────── */

/**
 * The photograph sits behind the words rather than beneath them.
 *
 * A full-width image stacked under a block of text reads as two unrelated
 * things; as a backdrop it reads as one. What makes that safe is the scrim:
 * two layers of the deep brand colour over the photograph, the flat one at
 * 84% opacity.
 *
 * That figure is measured, not guessed. Against the worst case a photograph
 * can present — a pure white frame — 84% puts the heading at 9.4:1 and the
 * muted body text at 5.3:1 against the plate behind them, so both clear
 * WCAG AA whatever image is used, and a darker photograph only improves it.
 * The second, horizontal layer adds modelling on the text side and can only
 * darken further.
 */
export function HeroBackdrop({
  photoSlug,
  ...props
}: Common & { photoSlug: PhotoSlug }) {
  const image = photo(photoSlug);

  return (
    <header className="relative isolate overflow-hidden border-b border-deep-line bg-deep text-deep-foreground">
      <Image
        src={image.src}
        alt={image.alt[props.locale]}
        fill
        sizes="100vw"
        priority
        className="-z-10 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep/84" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-deep/70 via-deep/30 to-transparent"
      />

      <Container size="wide" className="py-12 sm:py-16 lg:py-24">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
          tone="deep"
        />
        <Eyebrow tone="deep" className="mt-8">
          {props.eyebrow}
        </Eyebrow>
        <h1 className="mt-5 max-w-[18ch] type-display text-deep-foreground">
          {props.h1}
        </h1>
        <p className="mt-6 max-w-[58ch] type-lead text-deep-foreground/90">
          {props.lead}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Cta href={props.primaryCta.href} size="lg">
            {props.primaryCta.label}
          </Cta>
          {props.secondaryCta ? (
            <Cta href={props.secondaryCta.href} variant="onDeep" size="lg">
              {props.secondaryCta.label}
            </Cta>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

/* ── Airport hub ──────────────────────────────────────────────────────── */

export function HeroSplit({
  photoSlug,
  ...props
}: Common & { photoSlug: PhotoSlug }) {
  return (
    <header className="border-b border-border bg-surface-sunken">
      <Container size="wide" className="py-10 sm:py-14 lg:py-16">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />
        <div className="mt-8 grid items-center gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
          <div>
            <Eyebrow>{props.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-[17ch] type-h1 text-foreground">
              {props.h1}
            </h1>
            <p className="mt-5 max-w-[58ch] type-lead text-muted-foreground">
              {props.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta href={props.primaryCta.href} size="lg">
                {props.primaryCta.label}
              </Cta>
              {props.secondaryCta ? (
                <Cta
                  href={props.secondaryCta.href}
                  variant="outline"
                  size="lg"
                >
                  {props.secondaryCta.label}
                </Cta>
              ) : null}
            </div>
            {props.note ? (
              <p className="mt-8 max-w-[62ch] border-t border-border pt-5 type-small text-muted-foreground">
                {props.note}
              </p>
            ) : null}
          </div>
          <Photo
            photo={photo(photoSlug)}
            locale={props.locale}
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 28rem, 92vw"
            priority
          />
        </div>
      </Container>
    </header>
  );
}

/* ── A page that has no photograph to show ────────────────────────────── */

/**
 * Typography only.
 *
 * This is not a fallback for a missing asset — it is the right opening for a
 * page whose job is to correct an assumption rather than to sell a view, and
 * it is the one hero in the family that makes the page look different before
 * a word is read. `facts` sets a line of plain data under the lead.
 */
export function HeroBand({
  facts,
  ...props
}: Common & { facts: { label: string; value: string }[] }) {
  return (
    <header className="bg-deep text-deep-foreground">
      <Container size="content" className="py-10 sm:py-14 lg:py-16">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
          tone="deep"
        />
        <Eyebrow tone="deep" className="mt-8">
          {props.eyebrow}
        </Eyebrow>
        <h1 className="mt-5 max-w-[20ch] type-h1 text-deep-foreground">
          {props.h1}
        </h1>
        <p className="mt-5 max-w-[62ch] type-lead text-deep-muted">
          {props.lead}
        </p>

        <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-deep-line pt-6">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="type-label text-deep-muted">{fact.label}</dt>
              <dd className="mt-1.5 font-heading type-h3 text-deep-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Cta href={props.primaryCta.href} size="lg">
            {props.primaryCta.label}
          </Cta>
          {props.secondaryCta ? (
            <Cta href={props.secondaryCta.href} variant="onDeep" size="lg">
              {props.secondaryCta.label}
            </Cta>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

/* ── Reference page ───────────────────────────────────────────────────── */

export function HeroNarrow({
  photoSlug,
  ...props
}: Common & { photoSlug: PhotoSlug }) {
  return (
    <header className="border-b border-border">
      <Container size="content" className="py-10 sm:py-14">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />
        <div className="mt-8 grid gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,34rem)_minmax(0,1fr)]">
          <div>
            <Eyebrow>{props.eyebrow}</Eyebrow>
            <h1 className="mt-5 type-h1 text-foreground">{props.h1}</h1>
            <p className="mt-5 max-w-[56ch] type-lead text-muted-foreground">
              {props.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta href={props.primaryCta.href}>{props.primaryCta.label}</Cta>
              {props.secondaryCta ? (
                <Cta href={props.secondaryCta.href} variant="outline">
                  {props.secondaryCta.label}
                </Cta>
              ) : null}
            </div>
          </div>
          <Photo
            photo={photo(photoSlug)}
            locale={props.locale}
            aspect="aspect-[3/4] lg:aspect-[4/5]"
            sizes="(min-width: 1024px) 24rem, 92vw"
            priority
          />
        </div>
      </Container>
    </header>
  );
}

/* ── Route pages ──────────────────────────────────────────────────────── */

/**
 * A journey, stated before anything is explained.
 *
 * The strip names both endpoints with a rule between them, so the page says
 * what it is about in the first glance — which is what someone arriving on a
 * route page from a search result needs.
 */
export function HeroRoute({
  from,
  to,
  ...props
}: Common & { from: string; to: string }) {
  return (
    <header className="border-b border-border bg-surface-sunken">
      <Container size="content" className="py-10 sm:py-14">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <span className="font-heading type-h3 text-foreground">{from}</span>
          <span
            aria-hidden="true"
            className="hidden h-px flex-1 bg-border-strong sm:block"
          />
          <span
            aria-hidden="true"
            className="h-6 w-px bg-border-strong sm:hidden"
          />
          <span className="font-heading type-h3 text-accent-ink">{to}</span>
        </div>

        <Eyebrow className="mt-9">{props.eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-[20ch] type-h1 text-foreground">
          {props.h1}
        </h1>
        <p className="mt-5 max-w-[62ch] type-lead text-muted-foreground">
          {props.lead}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Cta href={props.primaryCta.href} size="lg">
            {props.primaryCta.label}
          </Cta>
          {props.secondaryCta ? (
            <Cta href={props.secondaryCta.href} variant="outline" size="lg">
              {props.secondaryCta.label}
            </Cta>
          ) : null}
        </div>
        {props.note ? (
          <p className="mt-8 max-w-[64ch] border-t border-border pt-5 type-small text-muted-foreground">
            {props.note}
          </p>
        ) : null}
      </Container>
    </header>
  );
}

/* ── Milan hub: the decision is the hero ──────────────────────────────── */

/**
 * A hero that contains the choice the page exists to help with.
 *
 * Milan's defining problem is that three airports are sold under one city
 * name, and two different companies run them. Someone arriving here usually
 * wants one thing: which of the three am I actually flying into, and what
 * does that change? So the selector is not a section further down the page —
 * it is in the hero, beside the heading, and it is the first thing reachable
 * by keyboard after the breadcrumb.
 */
export function HeroChooser({
  chooser,
  ...props
}: Common & {
  chooser: {
    heading: string;
    note: string;
    rows: {
      id: string;
      name: string;
      code: string;
      fact: string;
      href: string;
    }[];
  };
}) {
  return (
    <header className="border-b border-border bg-surface-sunken">
      <Container size="wide" className="py-10 sm:py-14 lg:py-16">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />
        <div className="mt-8 grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)]">
          <div>
            <Eyebrow>{props.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-[16ch] type-h1 text-foreground">
              {props.h1}
            </h1>
            <p className="mt-5 max-w-[56ch] type-lead text-muted-foreground">
              {props.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta href={props.primaryCta.href} size="lg">
                {props.primaryCta.label}
              </Cta>
              {props.secondaryCta ? (
                <Cta href={props.secondaryCta.href} variant="outline" size="lg">
                  {props.secondaryCta.label}
                </Cta>
              ) : null}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
            <h2 className="type-label text-accent-ink">{chooser.heading}</h2>
            <ul className="mt-4">
              {chooser.rows.map((row) => (
                <li key={row.id} className="border-t border-border">
                  <Link
                    href={row.href}
                    className="group flex items-baseline gap-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <span className="font-heading type-caption tracking-[0.18em] text-accent-ink tabular-nums">
                      {row.code}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-heading type-h3 text-foreground underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-accent">
                        {row.name}
                      </span>
                      <span className="mt-1 block type-small text-muted-foreground">
                        {row.fact}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-border pt-4 type-caption text-muted-foreground">
              {chooser.note}
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}

/* ── Malpensa: the photograph runs off the edge ───────────────────────── */

/**
 * Text held inside the measure, photograph bleeding to the viewport edge.
 *
 * `HeroSplit` keeps both halves inside the container, which makes a tidy,
 * contained opening. This one lets the image escape, which reads as scale —
 * the right note for the country's largest airport. On a narrow screen the
 * image becomes a band beneath the text, because a 42% column at 360px would
 * be a stripe.
 */
export function HeroFrame({
  photoSlug,
  ...props
}: Common & { photoSlug: PhotoSlug }) {
  const image = photo(photoSlug);

  return (
    <header className="relative border-b border-border bg-background lg:min-h-[30rem]">
      <Container size="wide" className="py-10 sm:py-14 lg:py-16">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />
        <div className="mt-8 lg:w-[54%]">
          <Eyebrow>{props.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[17ch] type-h1 text-foreground">
            {props.h1}
          </h1>
          <p className="mt-5 max-w-[56ch] type-lead text-muted-foreground">
            {props.lead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta href={props.primaryCta.href} size="lg">
              {props.primaryCta.label}
            </Cta>
            {props.secondaryCta ? (
              <Cta href={props.secondaryCta.href} variant="outline" size="lg">
                {props.secondaryCta.label}
              </Cta>
            ) : null}
          </div>
          {props.note ? (
            <p className="mt-8 max-w-[62ch] border-t border-border pt-5 type-small text-muted-foreground">
              {props.note}
            </p>
          ) : null}
        </div>
      </Container>

      <div className="relative h-56 w-full sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[42%]">
        <Image
          src={image.src}
          alt={image.alt[props.locale]}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          priority
          className="object-cover"
        />
      </div>
    </header>
  );
}

/* ── Linate: the shortest hero on the site ────────────────────────────── */

/**
 * Compact and dense, because the page's argument is compactness.
 *
 * Linate is the city airport: close in, small, quick to describe. A tall
 * hero would contradict the text. The facts run as one rule-separated line
 * rather than a four-cell grid, which is both tighter than `FactStrip` and
 * visibly not it.
 */
export function HeroMeta({
  facts,
  ...props
}: Common & { facts: { label: string; value: string }[] }) {
  return (
    <header className="border-b border-border">
      <Container size="content" className="py-9 sm:py-12">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />
        <Eyebrow className="mt-7">{props.eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-[20ch] type-h1 text-foreground">
          {props.h1}
        </h1>
        <p className="mt-4 max-w-[62ch] type-lead text-muted-foreground">
          {props.lead}
        </p>

        <dl className="mt-7 flex flex-wrap items-stretch gap-y-3 border-y border-border py-4">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={cn(
                "pr-6",
                index > 0 && "border-l border-border pl-6",
              )}
            >
              <dt className="type-caption text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-1 font-heading type-h3 text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Cta href={props.primaryCta.href}>{props.primaryCta.label}</Cta>
          {props.secondaryCta ? (
            <Cta href={props.secondaryCta.href} variant="outline">
              {props.secondaryCta.label}
            </Cta>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

/* ── Bergamo: the correction, drawn ───────────────────────────────────── */

/**
 * A hero that draws a distance.
 *
 * This page exists because an airport sold as Milan is about fifty kilometres
 * from Milan and about five from Bergamo. Writing that in a sentence buries
 * it; drawing it makes it the first thing understood.
 *
 * The diagram is built from real elements with real text rather than an image
 * or an SVG of type, so it reflows at 320px, scales with the type scale, and
 * is read aloud in the right order. The rules between the nodes are
 * `aria-hidden`; the distances themselves are text.
 *
 * Its note is a paragraph rather than a `figcaption`, and the wrapper is a
 * `div` rather than a `figure`. The site bans visible captions because they
 * were being used to credit image sources, and although this one credits a
 * factual claim instead, every other factual attribution on the site is a
 * `SourceNote` paragraph. Consistency beats a special case the audit would
 * have to learn about.
 */
export function HeroGeo({
  diagram,
  ...props
}: Common & {
  diagram: {
    caption: string;
    nodes: { id: string; label: string; detail: string; emphasis?: boolean }[];
    gaps: string[];
  };
}) {
  return (
    <header className="border-b border-border bg-surface-sunken">
      <Container size="content" className="py-10 sm:py-14">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />
        <Eyebrow className="mt-8">{props.eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-[19ch] type-h1 text-foreground">
          {props.h1}
        </h1>
        <p className="mt-5 max-w-[60ch] type-lead text-muted-foreground">
          {props.lead}
        </p>

        <div className="mt-10 rounded-lg border border-border bg-surface p-6 sm:p-8">
          <ol className="flex flex-col sm:flex-row sm:items-start">
            {diagram.nodes.map((node, index) => (
              <li key={node.id} className="flex flex-1 gap-4 sm:block sm:gap-0">
                {index > 0 ? (
                  <>
                    <span className="flex w-16 shrink-0 flex-col items-center sm:hidden">
                      <span
                        aria-hidden="true"
                        className="h-5 w-px bg-border-strong"
                      />
                      <span className="py-1 type-caption text-accent-ink">
                        {diagram.gaps[index - 1]}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-5 w-px bg-border-strong"
                      />
                    </span>
                    <span className="hidden sm:mb-3 sm:flex sm:items-center sm:gap-2">
                      <span
                        aria-hidden="true"
                        className="h-px flex-1 bg-border-strong"
                      />
                      <span className="type-caption whitespace-nowrap text-accent-ink">
                        {diagram.gaps[index - 1]}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px flex-1 bg-border-strong"
                      />
                    </span>
                  </>
                ) : (
                  <span
                    aria-hidden="true"
                    className="hidden sm:mb-3 sm:block sm:h-5"
                  />
                )}
                <span className="block pb-6 sm:pb-0">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mb-3 block h-3 w-3 rounded-full",
                      node.emphasis ? "bg-accent" : "bg-border-strong",
                    )}
                  />
                  <span
                    className={cn(
                      "block font-heading type-h3",
                      node.emphasis ? "text-accent-ink" : "text-foreground",
                    )}
                  >
                    {node.label}
                  </span>
                  <span className="mt-1 block max-w-[28ch] type-small text-muted-foreground">
                    {node.detail}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-5 border-t border-border pt-4 type-caption text-muted-foreground">
            {diagram.caption}
          </p>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Cta href={props.primaryCta.href} size="lg">
            {props.primaryCta.label}
          </Cta>
          {props.secondaryCta ? (
            <Cta href={props.secondaryCta.href} variant="outline" size="lg">
              {props.secondaryCta.label}
            </Cta>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

/* ── Lake Como: choose a town before anything else ────────────────────── */

/**
 * A backdrop with a destination selector along its foot.
 *
 * "Lake Como" is not a destination — it is three arms of water with different
 * roads to different towns. So the hero asks the only question that matters
 * before the page can be useful at all, and the answers sit on the image as a
 * row of anchors into the page.
 *
 * The scrim is the measured one from `HeroBackdrop`: the flat layer at 84%
 * keeps heading and body text above WCAG AA against any photograph.
 */
export function HeroTowns({
  photoSlug,
  towns,
  ...props
}: Common & {
  photoSlug: PhotoSlug;
  towns: {
    heading: string;
    items: { id: string; label: string; href: string }[];
  };
}) {
  const image = photo(photoSlug);

  return (
    <header className="relative isolate overflow-hidden border-b border-deep-line bg-deep text-deep-foreground">
      <Image
        src={image.src}
        alt={image.alt[props.locale]}
        fill
        sizes="100vw"
        priority
        className="-z-10 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep/84" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent"
      />

      <Container size="wide" className="py-12 sm:py-16 lg:py-20">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
          tone="deep"
        />
        <Eyebrow tone="deep" className="mt-8">
          {props.eyebrow}
        </Eyebrow>
        <h1 className="mt-5 max-w-[17ch] type-display text-deep-foreground">
          {props.h1}
        </h1>
        <p className="mt-5 max-w-[56ch] type-lead text-deep-foreground/90">
          {props.lead}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Cta href={props.primaryCta.href} size="lg">
            {props.primaryCta.label}
          </Cta>
          {props.secondaryCta ? (
            <Cta href={props.secondaryCta.href} variant="onDeep" size="lg">
              {props.secondaryCta.label}
            </Cta>
          ) : null}
        </div>

        <nav
          aria-label={towns.heading}
          className="mt-10 border-t border-deep-foreground/25 pt-5"
        >
          <p className="type-label text-accent-glow">{towns.heading}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {towns.items.map((town) => (
              <li key={town.id}>
                <Link
                  href={town.href}
                  className="inline-flex min-h-11 items-center rounded-md border border-deep-foreground/35 px-4 type-small text-deep-foreground transition-colors hover:bg-deep-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {town.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

/* ── Venice: the one place a car cannot finish the journey ────────────── */

/**
 * A hero built as a contradiction.
 *
 * Every other destination hub in this project opens by orienting a visitor.
 * Venice has to open by correcting them, because the assumption people
 * arrive with — that a car can be sent to the address — is false for most of
 * the city, and no amount of prose further down the page undoes a false
 * assumption formed in the first five seconds.
 *
 * So the hero is two panels side by side: where a road vehicle can take you,
 * and where it cannot. The split is not decoration — the same structure is
 * modelled in the content type, so a page physically cannot describe a Venice
 * destination without placing it on one side or the other.
 *
 * The water panel is the one that matters, and it carries the refusal
 * explicitly: a boat, a vaporetto, a water taxi or a porter is not part of a
 * road transfer unless it has been separately agreed.
 */
export function HeroEndpoints({
  split,
  ...props
}: Common & { split: EndpointSplit }) {
  return (
    <header className="border-b border-border bg-surface-sunken">
      <Container size="wide" className="py-10 sm:py-14 lg:py-16">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />

        <div className="mt-8 max-w-[60ch]">
          <Eyebrow>{props.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[17ch] type-h1 text-foreground">
            {props.h1}
          </h1>
          <p className="mt-5 type-lead text-muted-foreground">{props.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta href={props.primaryCta.href} size="lg">
              {props.primaryCta.label}
            </Cta>
            {props.secondaryCta ? (
              <Cta href={props.secondaryCta.href} variant="outline" size="lg">
                {props.secondaryCta.label}
              </Cta>
            ) : null}
          </div>
        </div>

        <EndpointPanels
          split={split}
          headingLevel="h2"
          className="mt-10 lg:mt-12"
        />
      </Container>
    </header>
  );
}

/* ── Verona: three ways in, none of them complicated ──────────────────── */

/**
 * A hero that answers "how are you getting here?" across the foot of itself.
 *
 * Verona exists in this cluster partly as Venice's opposite: an ordinary road
 * city where the arrival mode does not constrain the destination. So where
 * the Venice hero splits into two panels that contradict each other, this one
 * runs three equal modes across a single strip — parallel, not opposed, which
 * is the honest shape of the choice.
 *
 * Milan's `HeroChooser` also puts a decision in the hero, and the difference
 * is worth naming: there the three options are *airports*, stacked in a
 * bordered card, and picking the wrong one is a fifty-kilometre mistake. Here
 * they are *modes of arrival*, laid flat, and none of them is a trap.
 */
export function HeroModes({
  modes,
  ...props
}: Common & {
  modes: { id: string; label: string; name: string; detail: string }[];
}) {
  return (
    <header className="border-b border-border">
      <Container size="wide" className="py-10 sm:py-14">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />
        <div className="mt-8 max-w-[62ch]">
          <Eyebrow>{props.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[18ch] type-h1 text-foreground">
            {props.h1}
          </h1>
          <p className="mt-5 type-lead text-muted-foreground">{props.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta href={props.primaryCta.href} size="lg">
              {props.primaryCta.label}
            </Cta>
            {props.secondaryCta ? (
              <Cta href={props.secondaryCta.href} variant="outline" size="lg">
                {props.secondaryCta.label}
              </Cta>
            ) : null}
          </div>
        </div>

        <ul className="mt-11 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {modes.map((mode) => (
            <li key={mode.id} className="border-t-2 border-accent/45 pt-5">
              <p className="type-label text-accent-ink">{mode.label}</p>
              <h2 className="mt-2 font-heading type-h3 text-foreground">
                {mode.name}
              </h2>
              <p className="mt-2 max-w-[42ch] type-small text-muted-foreground">
                {mode.detail}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}

/* ── Florence: the rule we could not read ─────────────────────────────── */

/**
 * A hero that states a restriction the page cannot fully resolve.
 *
 * Every other hero in this family opens by telling a visitor something. This
 * one opens by telling them what it does not know, and that is the point.
 *
 * Florence's historic centre is a sector-based limited-traffic zone, and the
 * question that decides where a car can stop — whether a private-hire vehicle
 * may enter one of those sectors — could not be answered from a primary
 * source for this build. Rome's and Milan's pages could each quote the city's
 * own words on exactly that point. Florence's cannot.
 *
 * The tempting move is to borrow Milan's `ZoneDiagram`, which draws two
 * nested zones with their hours in them, and let the reader assume Florence
 * works the same way. That would be the single most likely way this cluster
 * could mislead someone, so the composition does the opposite: what is known
 * is set out as plain terms, what is not known is given its own marked row
 * with an accent rule against it, and the link to the authority is the first
 * outbound reference on the page rather than a footnote at the bottom.
 *
 * No hours appear here. Secondary sources disagree about them and they change
 * by ordinance and by season, so the page sends the reader to the Comune
 * instead of averaging guesses.
 */
export function HeroConstraint({
  constraint,
  ...props
}: Common & {
  constraint: {
    label: string;
    heading: string;
    known: { term: string; detail: string }[];
    unknown: { label: string; body: string };
    source: { text: string; linkText: string; href: string };
  };
}) {
  return (
    <header className="border-b border-border bg-surface-sunken">
      <Container size="wide" className="py-10 sm:py-14 lg:py-16">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />

        <div className="mt-8 grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)]">
          <div>
            <Eyebrow>{props.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-[16ch] type-h1 text-foreground">
              {props.h1}
            </h1>
            <p className="mt-5 max-w-[56ch] type-lead text-muted-foreground">
              {props.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta href={props.primaryCta.href} size="lg">
                {props.primaryCta.label}
              </Cta>
              {props.secondaryCta ? (
                <Cta href={props.secondaryCta.href} variant="outline" size="lg">
                  {props.secondaryCta.label}
                </Cta>
              ) : null}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
            <p className="type-label text-accent-ink">{constraint.label}</p>
            <h2 className="mt-3 font-heading type-h3 text-foreground">
              {constraint.heading}
            </h2>

            <dl className="mt-5">
              {constraint.known.map((item) => (
                <div key={item.term} className="border-t border-border py-4">
                  <dt className="type-label text-muted-foreground">
                    {item.term}
                  </dt>
                  <dd className="mt-1.5 type-small text-foreground">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>

            {/* The gap, marked rather than mentioned. */}
            <div className="border-l-2 border-accent bg-accent-wash p-4">
              <p className="type-label text-accent-ink">
                {constraint.unknown.label}
              </p>
              <p className="mt-2 type-small text-foreground">
                {constraint.unknown.body}
              </p>
            </div>

            <p className="mt-4 border-t border-border pt-4 type-caption text-muted-foreground">
              {constraint.source.text}{" "}
              <Link
                href={constraint.source.href}
                className="font-medium text-accent-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {constraint.source.linkText}
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}

/* ── Bologna: one rule at three strengths ─────────────────────────────── */

/**
 * A restriction stacked by severity, rather than drawn by geography.
 *
 * Milan's `ZoneDiagram` is the nearest thing in the family and it is the
 * wrong shape for Bologna. Milan draws two nested zones because its
 * restriction really is containment — Area C sits inside Area B. Bologna's is
 * not nested: Area T lies *within* the wider limited-traffic zone but is
 * stricter in **time**, not in position. Drawing it as boxes inside boxes
 * would state something false about how the rule works.
 *
 * So this is a vertical scale, strongest last, and the question it answers is
 * "which band is my address in?" rather than "which ring am I inside?". Each
 * band carries the rule and the one consequence that follows from it, because
 * on this subject the consequence is the only part a traveller can act on.
 *
 * It is also the opposite move from `HeroConstraint`, which exists because
 * Florence's rule could not be read at all. Bologna's can be, and is.
 */
export function HeroTiers({
  tiers,
  ...props
}: Common & {
  tiers: {
    heading: string;
    note: string;
    items: {
      id: string;
      label: string;
      rule: string;
      consequence: string;
      /** How much freedom the traveller actually has. */
      strength: "none" | "timed" | "absolute";
    }[];
  };
}) {
  return (
    <header className="border-b border-border bg-surface-sunken">
      <Container size="wide" className="py-10 sm:py-14 lg:py-16">
        <Breadcrumbs
          id={props.id}
          locale={props.locale}
          label={props.breadcrumbLabel}
        />

        <div className="mt-8 grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)]">
          <div>
            <Eyebrow>{props.eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-[16ch] type-h1 text-foreground">
              {props.h1}
            </h1>
            <p className="mt-5 max-w-[56ch] type-lead text-muted-foreground">
              {props.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta href={props.primaryCta.href} size="lg">
                {props.primaryCta.label}
              </Cta>
              {props.secondaryCta ? (
                <Cta href={props.secondaryCta.href} variant="outline" size="lg">
                  {props.secondaryCta.label}
                </Cta>
              ) : null}
            </div>
          </div>

          <div>
            <h2 className="type-label text-accent-ink">{tiers.heading}</h2>
            <ol className="mt-4">
              {tiers.items.map((tier) => (
                <li
                  key={tier.id}
                  className={cn(
                    "border-l-2 bg-surface p-4 sm:p-5",
                    "mt-3 first:mt-0",
                    tier.strength === "none" && "border-border-strong",
                    tier.strength === "timed" && "border-accent/55",
                    tier.strength === "absolute" && "border-accent",
                  )}
                >
                  <p className="type-label text-muted-foreground">
                    {tier.label}
                  </p>
                  <p className="mt-2 font-heading type-h3 text-foreground">
                    {tier.rule}
                  </p>
                  <p
                    className={cn(
                      "mt-2 type-small",
                      tier.strength === "absolute"
                        ? "text-accent-ink"
                        : "text-muted-foreground",
                    )}
                  >
                    {tier.consequence}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-4 border-t border-border pt-4 type-caption text-muted-foreground">
              {tiers.note}
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}
