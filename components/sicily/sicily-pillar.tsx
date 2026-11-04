import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { sicilyPillar } from "@/content/sicily";
import { isPublished, pathFor, type PageId } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";
import { pageName } from "@/content/page-names";

/**
 * The Sicily regional pillar.
 *
 * ── The device: three corners, not a list ─────────────────────────────────
 * Puglia's pillar is a ladder, because Puglia is a strip and the only
 * question is how far down it you are going. Sicily is a triangle with two
 * airports at two of its corners and nothing at the third, so the spine here
 * is a three-part corner block — each corner carrying its arrival point and
 * the places inside it. A visitor who reads only that block has had the one
 * question that matters answered.
 *
 * Nothing below is copied from the Puglia components. The shared pieces are
 * the site's own: Container, Cta, Breadcrumbs and the focus ring.
 *
 * ── The palette is scoped ─────────────────────────────────────────────────
 * Declared as custom properties on this component's wrapper, never added to
 * the global theme: a global token is available to every page and will
 * eventually be used by one, at which point "the Sicily palette" stops
 * meaning anything. Sicily reads as tufa, Ionian blue and the dark of
 * volcanic stone.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * The image library is CC0 and holds nothing of Sicily. A generic
 * Mediterranean view captioned as Palermo or Taormina would be a false
 * claim about a specific place, so the page carries its structure through
 * rule, colour and rhythm instead, as the Puglia cluster does.
 */

/** Tufa, Ionian, volcanic stone — scoped to this page only. */
const sicilyTheme = {
  "--sc-tufa": "#f7f3ea",
  "--sc-tufa-deep": "#ece5d6",
  "--sc-ionian": "#1f5d70",
  "--sc-ionian-deep": "#174757",
  "--sc-lava": "#2b2724",
  "--sc-ember": "#9c4a22",
  "--sc-ink": "#262522",
  "--sc-muted": "#4f5250",
  "--sc-rule": "#d8cfbc",
} as React.CSSProperties;

function Heading({
  children,
  eyebrow,
  onDark = false,
}: {
  children: React.ReactNode;
  eyebrow?: string;
  onDark?: boolean;
}) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p
          className="type-label"
          style={{ color: onDark ? "#d9a781" : "var(--sc-ember)" }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-3 font-heading type-h2"
        style={{ color: onDark ? "#f6f2ea" : "var(--sc-ink)" }}
      >
        {children}
      </h2>
    </div>
  );
}

/**
 * A place name that becomes a link once its page exists.
 *
 * The pillar names all thirteen supporting pages from the day it ships. Any
 * that are not published yet render as plain text — a tile that looks
 * clickable and is not is worse than one that never pretended.
 */
function PlaceName({
  id,
  locale,
  className,
  style,
}: {
  id: PageId;
  locale: Locale;
  className?: string;
  style?: React.CSSProperties;
}) {
  const label = pageName(id, locale);
  if (!isPublished(id)) {
    return (
      <span className={className} style={style}>
        {label}
      </span>
    );
  }
  return (
    <Link
      href={pathFor(id, locale)}
      className={`${className ?? ""} underline decoration-1 underline-offset-4 hover:no-underline`}
      style={style}
    >
      {label}
    </Link>
  );
}

export function SicilyPillarPage({ locale }: { locale: Locale }) {
  const c = sicilyPillar[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={sicilyTheme}>
      {/* ── Hero ──────────────────────────────────────────────────────────
          Tufa-coloured and wide, with the facts as a ruled row. Deliberately
          the opposite of Catania's page, which will be dark. */}
      <header
        className="border-b"
        style={{ background: "var(--sc-tufa)", borderColor: "var(--sc-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="sicily" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "var(--sc-ember)" }}>
            {c.hero.eyebrow}
          </p>
          <h1
            className="mt-3 max-w-[18ch] font-heading type-h1"
            style={{ color: "var(--sc-ink)" }}
          >
            {c.hero.h1}
          </h1>
          <p
            className="mt-6 max-w-[68ch] type-lead"
            style={{ color: "var(--sc-muted)" }}
          >
            {c.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#airports" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--sc-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--sc-muted)" }}>
                  {f.label}
                </dt>
                <dd
                  className="mt-1 type-small font-medium"
                  style={{ color: "var(--sc-ink)" }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--sc-tufa)" }}>
        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.intro.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--sc-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The three corners ─────────────────────────────────────────
            This page's signature device. Three blocks, each headed by the
            corner and its arrival point, with the places in that corner as
            a ruled list beneath. The numeral is decorative — the corner is
            named in text — so it is hidden from assistive technology. */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--sc-rule)", background: "var(--sc-tufa-deep)" }}
        >
          <Container size="content">
            <Heading eyebrow={en ? "Orientation" : "Orientarsi"}>
              {c.corners.heading}
            </Heading>
            <p
              className="mt-4 max-w-[64ch] type-lead"
              style={{ color: "var(--sc-muted)" }}
            >
              {c.corners.lead}
            </p>

            <ol className="mt-10 grid gap-x-8 gap-y-10 lg:grid-cols-3">
              {c.corners.items.map((corner, i) => (
                <li key={corner.corner}>
                  <div className="flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="font-heading"
                      style={{
                        color: "var(--sc-ember)",
                        fontSize: "clamp(2rem, 4vw, 2.75rem)",
                        lineHeight: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                    <h3
                      className="font-heading type-h3"
                      style={{ color: "var(--sc-ink)" }}
                    >
                      {corner.corner}
                    </h3>
                  </div>

                  <p
                    className="mt-4 border-t pt-4 type-caption font-medium uppercase tracking-[0.08em]"
                    style={{ borderColor: "var(--sc-rule)", color: "var(--sc-ionian-deep)" }}
                  >
                    {corner.arrival}
                  </p>

                  <p className="mt-4 type-small" style={{ color: "var(--sc-muted)" }}>
                    {corner.body}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {corner.places.map((id) => (
                      <li
                        key={id}
                        className="border-t pt-2 type-small"
                        style={{ borderColor: "var(--sc-rule)" }}
                      >
                        <PlaceName
                          id={id}
                          locale={locale}
                          style={{ color: "var(--sc-ink)" }}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* ── Airports ──────────────────────────────────────────────────── */}
        <section id="airports" className="scroll-mt-24 py-14 sm:py-18">
          <Container size="content">
            <Heading eyebrow="PMO · CTA · TPS">{c.airports.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--sc-muted)" }}>
              {c.airports.lead}
            </p>

            <ul className="mt-10 space-y-8">
              {c.airports.items.map((a) => (
                <li
                  key={a.code}
                  className="border-t pt-6"
                  style={{ borderColor: "var(--sc-rule)" }}
                >
                  <div className="grid gap-x-8 gap-y-3 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
                    <div>
                      <p
                        aria-hidden="true"
                        className="font-heading"
                        style={{
                          color: "var(--sc-ionian)",
                          fontSize: "clamp(2.25rem, 5vw, 3rem)",
                          lineHeight: 1,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {a.code}
                      </p>
                      <h3
                        className="mt-3 font-heading type-h3"
                        style={{ color: "var(--sc-ink)" }}
                      >
                        <PlaceName id={a.id} locale={locale} style={{ color: "var(--sc-ink)" }} />
                      </h3>
                      <p className="mt-2 type-caption" style={{ color: "var(--sc-muted)" }}>
                        {a.name}
                      </p>
                    </div>
                    <div>
                      <p className="type-body" style={{ color: "var(--sc-muted)" }}>
                        {a.body}
                      </p>
                      <p
                        className="mt-4 border-l-4 py-1 pl-4 type-small"
                        style={{ borderColor: "var(--sc-ember)", color: "var(--sc-ink)" }}
                      >
                        <span className="font-medium">
                          {en ? "Serves: " : "Serve: "}
                        </span>
                        {a.serves}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="mt-10 rounded-xl border p-6 sm:p-7"
              style={{ borderColor: "var(--sc-ionian)", background: "var(--sc-tufa-deep)" }}
            >
              <h3 className="font-heading type-h3" style={{ color: "var(--sc-ink)" }}>
                {c.airports.choosing.heading}
              </h3>
              <p className="mt-3 max-w-[70ch] type-body" style={{ color: "var(--sc-muted)" }}>
                {c.airports.choosing.body}
              </p>
            </div>
          </Container>
        </section>

        {/* ── Ports ─────────────────────────────────────────────────────
            Dark band: the only one on the page, so the sea section reads
            as a different kind of arrival from the air section above it. */}
        <section className="py-14 sm:py-18" style={{ background: "var(--sc-lava)" }}>
          <Container size="content">
            <Heading eyebrow={en ? "By sea" : "Via mare"} onDark>
              {c.ports.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "#cfc7bb" }}>
              {c.ports.lead}
            </p>

            <ul className="mt-10 grid gap-6 lg:grid-cols-3">
              {c.ports.items.map((p) => (
                <li
                  key={p.name}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "#4a443e", background: "#332e2a" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "#f6f2ea" }}>
                    <PlaceName id={p.id} locale={locale} style={{ color: "#f6f2ea" }} />
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "#cfc7bb" }}>
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>

            <div
              className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5"
              style={{ borderColor: "#d9a781" }}
            >
              <h3 className="font-heading type-h3" style={{ color: "#f6f2ea" }}>
                {c.ports.ferries.heading}
              </h3>
              <p className="mt-2 type-body" style={{ color: "#cfc7bb" }}>
                {c.ports.ferries.body}
              </p>
            </div>
          </Container>
        </section>

        {/* ── Destinations ──────────────────────────────────────────────── */}
        <section
          className="border-b py-14 sm:py-18"
          style={{ borderColor: "var(--sc-rule)" }}
        >
          <Container size="content">
            <Heading>{c.places.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--sc-muted)" }}>
              {c.places.lead}
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.places.items.map((place) => (
                <li
                  key={place.id}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--sc-rule)", background: "var(--sc-tufa-deep)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--sc-ink)" }}>
                    <PlaceName
                      id={place.id}
                      locale={locale}
                      style={{ color: "var(--sc-ink)" }}
                    />
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--sc-muted)" }}>
                    {place.summary}
                  </p>
                  <p
                    className="mt-4 border-t pt-3 type-caption"
                    style={{ borderColor: "var(--sc-rule)", color: "var(--sc-ionian-deep)" }}
                  >
                    {place.arrival}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ── Distances ─────────────────────────────────────────────────
            Every figure carries its source in the row with it. The type
            makes that impossible to omit; the layout makes it impossible
            to overlook. */}
        <section className="py-14 sm:py-18" style={{ background: "var(--sc-tufa-deep)" }}>
          <Container size="content">
            <Heading eyebrow={en ? "Sourced figures" : "Dati con fonte"}>
              {c.distances.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--sc-muted)" }}>
              {c.distances.lead}
            </p>

            <dl className="mt-9">
              {c.distances.rows.map((row) => (
                <div
                  key={row.between}
                  className="grid gap-x-8 gap-y-1 border-t py-5 sm:grid-cols-[minmax(0,18rem)_minmax(0,10rem)_minmax(0,1fr)]"
                  style={{ borderColor: "var(--sc-rule)" }}
                >
                  <dt className="type-small font-medium" style={{ color: "var(--sc-ink)" }}>
                    {row.between}
                  </dt>
                  <dd
                    className="type-small font-medium"
                    style={{ color: "var(--sc-ionian-deep)" }}
                  >
                    {row.figure}
                  </dd>
                  <dd className="type-caption" style={{ color: "var(--sc-muted)" }}>
                    {row.source}
                  </dd>
                </div>
              ))}
            </dl>

            <p
              className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5 type-small"
              style={{ borderColor: "var(--sc-ember)", color: "var(--sc-muted)" }}
            >
              {c.distances.footnote}
            </p>
          </Container>
        </section>

        {/* ── Alternatives ──────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--sc-rule)" }}
        >
          <Container size="content">
            <Heading>{c.alternatives.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--sc-muted)" }}>
              {c.alternatives.lead}
            </p>

            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {c.alternatives.modes.map((m) => (
                <div
                  key={m.mode}
                  className="border-t pt-5"
                  style={{ borderColor: "var(--sc-ionian)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--sc-ink)" }}>
                    {m.mode}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--sc-muted)" }}>
                    <span className="font-medium" style={{ color: "var(--sc-ink)" }}>
                      {en ? "Good for. " : "Va bene per. "}
                    </span>
                    {m.suits}
                  </p>
                  <p className="mt-2 type-small" style={{ color: "var(--sc-muted)" }}>
                    <span className="font-medium" style={{ color: "var(--sc-ink)" }}>
                      {en ? "Against it. " : "Contro. "}
                    </span>
                    {m.against}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-9 max-w-[70ch] type-body"
              style={{ color: "var(--sc-ink)" }}
            >
              {c.alternatives.verdict}
            </p>
          </Container>
        </section>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--sc-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--sc-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--sc-muted)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--sc-rule)", background: "var(--sc-tufa-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--sc-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--sc-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Close ─────────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--sc-ionian-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f4f8f8" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#cfdee2" }}>
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
