import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { palermoPage } from "@/content/sicily";
import { pageName } from "@/content/page-names";
import { isPublished, pathFor, type PageId } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Palermo.
 *
 * ── The device: strata ────────────────────────────────────────────────────
 * Palermo is a city in layers — a Phoenician street plan under an Arab-Norman
 * one under a nineteenth-century grid — and the thing a transfer actually
 * runs into is which layer the address sits in. So the page is built as
 * horizontal bands, each one a full-width stripe in its own tone, stacked.
 * The "where a car can stop" section is the deepest band and the widest,
 * because on this page it is the answer rather than a footnote.
 *
 * Nothing here is shared with the Sicily pillar or the Catania page beyond
 * the site's own Container, Cta and Breadcrumbs. The pillar is a
 * three-corner grid, Catania is a single vertical axis, this is strata.
 *
 * ── Palette, scoped ───────────────────────────────────────────────────────
 * Limestone and ochre with a majolica blue, on this component's wrapper
 * only. Never added to the global theme: a global token is available to
 * every page and will eventually be used by one, at which point "the
 * Palermo palette" stops meaning anything.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * The image library holds nothing of Sicily and a generic Mediterranean
 * street captioned as Palermo would be a false claim about a real place.
 */

const palermoTheme = {
  "--pa-stone": "#f7f3ea",
  "--pa-stone-deep": "#ece4d4",
  "--pa-stone-deeper": "#e0d5c0",
  // Darkened from #8a5a13, which cleared AA on the two lighter bands but
  // measured only 4.07:1 on --pa-stone-deeper, where the "last 200 metres"
  // section's label sits. This value measures 4.73 / 5.44 / 6.20 across the
  // three bands, so the same token is safe on all of them.
  "--pa-ochre": "#7d5110",
  "--pa-majolica": "#1d4a72",
  "--pa-ink": "#262420",
  "--pa-muted": "#4c4a44",
  "--pa-rule": "#d3c8b2",
} as React.CSSProperties;

/** A full-width band. The page is a stack of these and nothing else. */
function Band({
  children,
  tone = "base",
  id,
}: {
  children: React.ReactNode;
  tone?: "base" | "deep" | "deeper";
  id?: string;
}) {
  const background =
    tone === "deeper"
      ? "var(--pa-stone-deeper)"
      : tone === "deep"
        ? "var(--pa-stone-deep)"
        : "var(--pa-stone)";
  return (
    <section
      id={id}
      className={`border-b py-14 sm:py-18 ${id ? "scroll-mt-24" : ""}`}
      style={{ background, borderColor: "var(--pa-rule)" }}
    >
      {children}
    </section>
  );
}

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--pa-ochre)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--pa-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

/** A linked page name, or plain text while that page is unpublished. */
function PageLink({ id, locale }: { id: PageId; locale: Locale }) {
  const label = pageName(id, locale);
  if (!isPublished(id)) {
    return <span style={{ color: "var(--pa-ink)" }}>{label}</span>;
  }
  return (
    <Link
      href={pathFor(id, locale)}
      className="underline decoration-1 underline-offset-4 hover:no-underline"
      style={{ color: "var(--pa-ink)" }}
    >
      {label}
    </Link>
  );
}

export function PalermoPageView({ locale }: { locale: Locale }) {
  const c = palermoPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={palermoTheme}>
      {/* ── Hero ──────────────────────────────────────────────────────────
          The topmost stratum. Heading left, lead indented beneath it, facts
          as a ruled row — the same rhythm every band below repeats. */}
      <header
        className="border-b"
        style={{ background: "var(--pa-stone)", borderColor: "var(--pa-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="palermo" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "var(--pa-ochre)" }}>
            {c.hero.eyebrow}
          </p>
          <h1
            className="mt-3 max-w-[20ch] font-heading type-h1"
            style={{ color: "var(--pa-ink)" }}
          >
            {c.hero.h1}
          </h1>
          <p
            className="mt-6 max-w-[66ch] type-lead sm:ml-[8%]"
            style={{ color: "var(--pa-muted)" }}
          >
            {c.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#kerb" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--pa-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--pa-muted)" }}>
                  {f.label}
                </dt>
                <dd
                  className="mt-1 type-small font-medium"
                  style={{ color: "var(--pa-ink)" }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main">
        <Band>
          <Container size="prose">
            <Heading>{c.intro.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--pa-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </Band>

        {/* ── Arrival ───────────────────────────────────────────────────── */}
        <Band tone="deep">
          <Container size="content">
            <Heading eyebrow={en ? "Arriving" : "L'arrivo"}>{c.arrival.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pa-muted)" }}>
              {c.arrival.lead}
            </p>

            <div className="mt-9 grid gap-6 lg:grid-cols-2">
              {c.arrival.options.map((o) => (
                <div
                  key={o.id}
                  className="border-t pt-5"
                  style={{ borderColor: "var(--pa-majolica)" }}
                >
                  <p
                    className="type-caption font-medium uppercase tracking-[0.1em]"
                    style={{ color: "var(--pa-majolica)" }}
                  >
                    {o.label}
                  </p>
                  <h3 className="mt-2 font-heading type-h3">
                    <PageLink id={o.id} locale={locale} />
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--pa-muted)" }}>
                    {o.body}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-8 max-w-[68ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--pa-ochre)", color: "var(--pa-ink)" }}
            >
              {c.arrival.note}
            </p>
          </Container>
        </Band>

        {/* ── The kerb question ─────────────────────────────────────────
            The deepest band on the page, and the widest measure. On a
            Palermo transfer this is the answer, not a detail. Each quarter
            is its own stratum, ruled off from the one above. */}
        <Band tone="deeper" id="kerb">
          <Container size="wide">
            <Heading eyebrow={en ? "The last 200 metres" : "Gli ultimi 200 metri"}>
              {c.kerb.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pa-muted)" }}>
              {c.kerb.lead}
            </p>

            <ol className="mt-10">
              {c.kerb.items.map((item, i) => (
                <li
                  key={item.title}
                  className="grid gap-x-8 gap-y-2 border-t py-6 lg:grid-cols-[minmax(0,4rem)_minmax(0,22rem)_minmax(0,1fr)]"
                  style={{ borderColor: "var(--pa-rule)" }}
                >
                  <span
                    aria-hidden="true"
                    className="font-heading type-h3"
                    style={{ color: "var(--pa-ochre)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading type-h3" style={{ color: "var(--pa-ink)" }}>
                    {item.title}
                  </h3>
                  <p className="type-small" style={{ color: "var(--pa-muted)" }}>
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </Band>

        {/* ── What people go for ────────────────────────────────────────── */}
        {c.going ? (
          <Band>
            <Container size="content">
              <Heading>{c.going.heading}</Heading>
              <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pa-muted)" }}>
                {c.going.lead}
              </p>
              <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {c.going.items.map((d) => (
                  <div key={d.name}>
                    <dt
                      className="border-t pt-3 font-heading type-h3"
                      style={{ borderColor: "var(--pa-majolica)", color: "var(--pa-ink)" }}
                    >
                      {d.name}
                    </dt>
                    <dd className="mt-2 type-small" style={{ color: "var(--pa-muted)" }}>
                      {d.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Container>
          </Band>
        ) : null}

        {/* ── Nearby ────────────────────────────────────────────────────── */}
        <Band tone="deep">
          <Container size="content">
            <Heading>{c.nearby.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pa-muted)" }}>
              {c.nearby.lead}
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {c.nearby.items.map((n) => (
                <li
                  key={n.id}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--pa-rule)", background: "var(--pa-stone)" }}
                >
                  <h3 className="font-heading type-h3">
                    <PageLink id={n.id} locale={locale} />
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--pa-muted)" }}>
                    {n.body}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </Band>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <Band>
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pa-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--pa-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--pa-muted)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </Band>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <Band tone="deep">
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--pa-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--pa-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </Band>

        {/* ── Close ─────────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20" style={{ background: "var(--pa-stone)" }}>
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--pa-majolica)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f4f7fa" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#cdddea" }}>
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
