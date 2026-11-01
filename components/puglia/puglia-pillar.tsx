import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { pugliaPillar } from "@/content/puglia";
import { isPublished, pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";
import { cn } from "cn";

/**
 * The Puglia regional pillar.
 *
 * ── Why this does not reuse the city-hub layout ───────────────────────────
 * Rome, Milan and Campania are built around one city and the airports that
 * serve it, and their components assume that shape. Puglia is a long region
 * with two airports at opposite ends and accommodation that is frequently
 * not in a town at all, so it is built around a different spine: orientation
 * first, then the choice of airport, then the places, then the practical
 * detail. Nothing below is copied from those pages.
 *
 * ── The palette is scoped, not global ─────────────────────────────────────
 * Puglia reads as limestone, olive and two different seas, and the brief
 * asked for a visual identity to match. Those values are declared as CSS
 * custom properties on this component's own wrapper rather than added to the
 * global theme: a token added globally is available to every page and will
 * eventually be used by one, at which point "the Puglia palette" stops
 * meaning anything. Scoped here, it cannot leak.
 *
 * The site's own accent and focus ring are left untouched, so buttons,
 * links and keyboard focus behave exactly as they do everywhere else.
 *
 * ── Why there are no photographs ──────────────────────────────────────────
 * The project's image set is CC0 only and covers Rome, Milan, Venice,
 * Tuscany, Como and the Amalfi coast. There is no Puglia photography in it,
 * and illustrating Ostuni with a picture of Amalfi would be worse than
 * illustrating it with nothing. The page is therefore typographic, and holds
 * its structure through rule, colour and rhythm instead. See the Phase 2
 * report for what would be needed to add real imagery.
 */

/** Limestone, olive, terracotta, Adriatic — scoped to this page only. */
const pugliaTheme = {
  "--pg-limestone": "#f6f1e7",
  "--pg-limestone-deep": "#ece4d5",
  "--pg-olive": "#4a5a30",
  "--pg-sea": "#2d5566",
  "--pg-ink": "#2a2a24",
  "--pg-rule": "#d9cfbb",
} as React.CSSProperties;

function SectionHeading({
  children,
  eyebrow,
}: {
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="max-w-[62ch]">
      {eyebrow ? (
        <p
          className="type-label"
          style={{ color: "var(--pg-sea)" }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn("font-heading type-h2", eyebrow && "mt-3")}
        style={{ color: "var(--pg-ink)" }}
      >
        {children}
      </h2>
    </div>
  );
}

export function PugliaPillarPage({ locale }: { locale: Locale }) {
  const c = pugliaPillar[locale];
  const quoteHref = quotePathFor(locale);

  return (
    <div style={pugliaTheme}>
      {/* ── Hero ──────────────────────────────────────────────────────────
          Typographic and asymmetric: a tall left column of type against a
          narrow band of colour, rather than the centred photo heroes the
          other regions use. */}
      <header
        className="border-b"
        style={{
          background:
            "linear-gradient(180deg, var(--pg-limestone) 0%, var(--pg-limestone-deep) 100%)",
          borderColor: "var(--pg-rule)",
        }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-20">
          <Breadcrumbs id="puglia" locale={locale} label={c.hero.eyebrow} />

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end lg:gap-16">
            <div>
              <p className="type-label" style={{ color: "var(--pg-olive)" }}>
                {c.hero.eyebrow}
              </p>
              <h1
                className="mt-4 font-heading text-[2.25rem] leading-[1.08] tracking-tight sm:text-[3rem] lg:text-[3.75rem]"
                style={{ color: "var(--pg-ink)" }}
              >
                {c.hero.h1}
              </h1>
              <p
                className="mt-7 max-w-[58ch] type-lead"
                style={{ color: "var(--pg-sea)" }}
              >
                {c.hero.lead}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
                <Cta href="#booking" variant="outline">
                  {c.hero.secondaryCta}
                </Cta>
              </div>
            </div>

            {/* A quiet index of the two airports — the decision most
                visitors arrive here needing to make. */}
            <aside
              className="rounded-xl border p-6"
              style={{ borderColor: "var(--pg-rule)", background: "#fffdf8" }}
            >
              <p className="type-label" style={{ color: "var(--pg-olive)" }}>
                {c.airports.heading}
              </p>
              <dl className="mt-4 space-y-4">
                {c.airports.items.map((a) => (
                  <div key={a.code}>
                    <dt
                      className="font-heading type-h3"
                      style={{ color: "var(--pg-ink)" }}
                    >
                      <span className="font-mono text-[0.8em]">{a.code}</span>{" "}
                      {a.name}
                    </dt>
                    <dd className="mt-1 type-caption text-muted-foreground">
                      {a.suits[0]}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--pg-limestone)" }}>
        {/* ── Introduction ─────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <SectionHeading>{c.intro.heading}</SectionHeading>
            <div className="mt-6 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--pg-sea)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Why private transfers ────────────────────────────────────────
            Four numbered reasons in a stepped column, not a card grid. */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--pg-rule)", background: "#fffdf8" }}
        >
          <Container size="content">
            <SectionHeading>{c.why.heading}</SectionHeading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pg-sea)" }}>
              {c.why.lead}
            </p>
            <ol className="mt-10 space-y-8">
              {c.why.points.map((point, i) => (
                <li
                  key={point.title}
                  className="grid gap-x-6 gap-y-2 sm:grid-cols-[3rem_minmax(0,1fr)]"
                >
                  <span
                    className="font-heading text-[1.75rem] leading-none tabular-nums"
                    style={{ color: "var(--pg-rule)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading type-h3" style={{ color: "var(--pg-ink)" }}>
                      {point.title}
                    </h3>
                    <p className="mt-2 max-w-[62ch] type-body" style={{ color: "var(--pg-sea)" }}>
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* ── Airports ─────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <SectionHeading>{c.airports.heading}</SectionHeading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pg-sea)" }}>
              {c.airports.lead}
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {c.airports.items.map((a) => (
                <article
                  key={a.code}
                  className="rounded-xl border p-6 sm:p-7"
                  style={{ borderColor: "var(--pg-rule)", background: "#fffdf8" }}
                >
                  <p
                    className="font-mono type-label"
                    style={{ color: "var(--pg-olive)" }}
                  >
                    {a.code}
                  </p>
                  <h3 className="mt-2 font-heading type-h3" style={{ color: "var(--pg-ink)" }}>
                    {a.name}
                  </h3>
                  <p className="mt-3 type-body" style={{ color: "var(--pg-sea)" }}>
                    {a.body}
                  </p>
                  <ul className="mt-5 space-y-2 border-t pt-4" style={{ borderColor: "var(--pg-rule)" }}>
                    {a.suits.map((s) => (
                      <li key={s} className="type-caption" style={{ color: "var(--pg-sea)" }}>
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div
              className="mt-8 rounded-xl border-l-4 py-5 pl-6"
              style={{ borderColor: "var(--pg-olive)", background: "#fffdf8" }}
            >
              <h3 className="font-heading type-h3" style={{ color: "var(--pg-ink)" }}>
                {c.airports.choosing.heading}
              </h3>
              <p className="mt-2 max-w-[66ch] type-body" style={{ color: "var(--pg-sea)" }}>
                {c.airports.choosing.body}
              </p>
            </div>
          </Container>
        </section>

        {/* ── Cruise ───────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--pg-rule)", background: "var(--pg-limestone-deep)" }}
        >
          <Container size="prose">
            <SectionHeading>{c.cruise.heading}</SectionHeading>
            <div className="mt-6 space-y-5">
              {c.cruise.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--pg-sea)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The eight places ─────────────────────────────────────────────
            Each card links to its own page once that page is published.
            Until then it renders as plain text — no broken links, and no
            stub pages written only to satisfy a link. */}
        <section className="py-14 sm:py-18">
          <Container size="wide">
            <SectionHeading>{c.towns.heading}</SectionHeading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pg-sea)" }}>
              {c.towns.lead}
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {c.towns.items.map((town) => {
                const live = isPublished(town.id);
                const href = pathFor(town.id, locale);
                const inner = (
                  <>
                    <h3
                      className="font-heading type-h3"
                      style={{ color: "var(--pg-ink)" }}
                    >
                      {town.name}
                    </h3>
                    <p className="mt-2 type-small" style={{ color: "var(--pg-sea)" }}>
                      {town.summary}
                    </p>
                    <p className="mt-3 type-caption text-muted-foreground">
                      {town.travellers}
                    </p>
                    <p
                      className="mt-4 border-t pt-3 font-mono type-caption"
                      style={{ borderColor: "var(--pg-rule)", color: "var(--pg-olive)" }}
                    >
                      {town.airport}
                    </p>
                  </>
                );
                return (
                  <li key={town.id}>
                    {live ? (
                      <Link
                        href={href}
                        className="block h-full rounded-xl border p-6 transition-colors hover:border-[color:var(--pg-olive)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                        style={{ borderColor: "var(--pg-rule)", background: "#fffdf8" }}
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div
                        className="h-full rounded-xl border p-6"
                        style={{ borderColor: "var(--pg-rule)", background: "#fffdf8" }}
                      >
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        {/* ── Journeys ─────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--pg-rule)", background: "#fffdf8" }}
        >
          <Container size="content">
            <SectionHeading>{c.journeys.heading}</SectionHeading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pg-sea)" }}>
              {c.journeys.lead}
            </p>
            <ul className="mt-9 divide-y" style={{ borderColor: "var(--pg-rule)" }}>
              {c.journeys.items.map((j) => (
                <li
                  key={`${j.from}-${j.to}`}
                  className="grid gap-x-6 gap-y-1 py-5 sm:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]"
                  style={{ borderColor: "var(--pg-rule)" }}
                >
                  <p className="font-heading type-h3" style={{ color: "var(--pg-ink)" }}>
                    {j.from}{" "}
                    <span aria-hidden="true" style={{ color: "var(--pg-olive)" }}>
                      →
                    </span>{" "}
                    {j.to}
                  </p>
                  <p className="type-small" style={{ color: "var(--pg-sea)" }}>
                    {j.note}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ── Kinds of stay ────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <SectionHeading>{c.staying.heading}</SectionHeading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pg-sea)" }}>
              {c.staying.lead}
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {c.staying.groups.map((g) => (
                <article key={g.title}>
                  <h3
                    className="border-t pt-4 font-heading type-h3"
                    style={{ borderColor: "var(--pg-olive)", color: "var(--pg-ink)" }}
                  >
                    {g.title}
                  </h3>
                  <p className="mt-3 type-body" style={{ color: "var(--pg-sea)" }}>
                    {g.body}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Booking ──────────────────────────────────────────────────── */}
        <section
          id="booking"
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--pg-rule)", background: "var(--pg-limestone-deep)" }}
        >
          <Container size="content">
            <SectionHeading>{c.booking.heading}</SectionHeading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pg-sea)" }}>
              {c.booking.lead}
            </p>
            <ol className="mt-9 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {c.booking.steps.map((step, i) => (
                <li key={step.title}>
                  <p
                    className="font-mono type-caption"
                    style={{ color: "var(--pg-olive)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="mt-2 font-heading type-h3"
                    style={{ color: "var(--pg-ink)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--pg-sea)" }}>
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* ── Practical ────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <SectionHeading>{c.practical.heading}</SectionHeading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pg-sea)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 divide-y" style={{ borderColor: "var(--pg-rule)" }}>
              {c.practical.items.map((item) => (
                <div
                  key={item.term}
                  className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]"
                  style={{ borderColor: "var(--pg-rule)" }}
                >
                  <dt className="font-heading type-h3" style={{ color: "var(--pg-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="type-body" style={{ color: "var(--pg-sea)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────
            Plain headings and paragraphs, not an accordion: these answers
            are the part of the page most likely to be read by a machine as
            well as a person, and hiding them behind a toggle helps neither. */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--pg-rule)", background: "#fffdf8" }}
        >
          <Container size="prose">
            <SectionHeading>{c.faq.heading}</SectionHeading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--pg-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--pg-sea)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Close ────────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <Container size="content">
            <div
              className="rounded-2xl border px-7 py-10 sm:px-12 sm:py-14"
              style={{ borderColor: "var(--pg-olive)", background: "#fffdf8" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "var(--pg-ink)" }}>
                {c.close.heading}
              </h2>
              <p
                className="mt-4 max-w-[62ch] type-lead"
                style={{ color: "var(--pg-sea)" }}
              >
                {c.close.body}
              </p>
              <Cta href={quoteHref} className="mt-8">
                {c.close.cta}
              </Cta>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
