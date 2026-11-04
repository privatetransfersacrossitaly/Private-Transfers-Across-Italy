import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { RouteName } from "@/components/sicily/airport-shared";
import { cataniaAirportPage } from "@/content/sicily";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Catania Airport (CTA).
 *
 * ── The device: a comparison grid ─────────────────────────────────────────
 * One airport, three directions. The routes section is the page's spine and
 * is laid out as an even grid of equal cards rather than a list, because
 * the question here is genuinely a choice between directions, not a ranking
 * of them. Everything else on the page is built from the same square unit.
 *
 * Deliberately unlike its siblings: PMO is a ruled departures board, TPS is
 * a single narrow column. This is a grid, and nothing on it is a row.
 *
 * ── Palette, scoped ───────────────────────────────────────────────────────
 * The Catania town page is the cluster's only dark destination; this keeps
 * the family resemblance with a dark hero and a light body, so the two read
 * as related without being the same page twice.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * No licensed image of this airport exists in the library.
 */

const theme = {
  "--ca-page": "#f6f4f0",
  "--ca-page-deep": "#eae6df",
  "--ca-basalt": "#221f1d",
  "--ca-lava": "#9d4a21",
  "--ca-ink": "#262320",
  "--ca-muted": "#4e4a45",
  "--ca-rule": "#d6cfc3",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--ca-lava)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--ca-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

/** The page's repeating unit: a bordered square of content. */
function Cell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border p-6"
      style={{ borderColor: "var(--ca-rule)", background: "var(--ca-page)" }}
    >
      {children}
    </div>
  );
}

export function CataniaAirportPageView({ locale }: { locale: Locale }) {
  const c = cataniaAirportPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={theme}>
      <header style={{ background: "var(--ca-basalt)" }}>
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="catania-airport" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "#e09a6e" }}>
            {c.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-[22ch] font-heading type-h1" style={{ color: "#f6f3ef" }}>
            {c.hero.h1}
          </h1>
          <p className="mt-6 max-w-[68ch] type-lead" style={{ color: "#cdc7c0" }}>
            {c.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#routes" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "#453f3a" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "#aea79f" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "#f6f3ef" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--ca-page-deep)" }}>
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.identity.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.identity.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--ca-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* Four equal cells: the page's unit, introduced. */}
        <section className="pb-14 sm:pb-18">
          <Container size="content">
            <Heading eyebrow={en ? "Arrivals" : "Arrivi"}>{c.meeting.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ca-muted)" }}>
              {c.meeting.lead}
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {c.meeting.steps.map((s) => (
                <Cell key={s.title}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--ca-ink)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--ca-muted)" }}>
                    {s.body}
                  </p>
                </Cell>
              ))}
            </div>
            <p
              className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--ca-lava)", color: "var(--ca-ink)" }}
            >
              {c.meeting.note}
            </p>
          </Container>
        </section>

        {/* ── The comparison grid: the spine of the page ─────────────────
            The city sits apart above the grid, because it is the one
            journey that is not a choice between directions. */}
        <section
          id="routes"
          className="scroll-mt-24 border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ca-rule)", background: "var(--ca-page)" }}
        >
          <Container size="content">
            <Heading eyebrow={en ? "Three directions" : "Tre direzioni"}>
              {c.routes.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ca-muted)" }}>
              {c.routes.lead}
            </p>

            <div
              className="mt-9 rounded-xl border-2 p-6"
              style={{ borderColor: "var(--ca-basalt)", background: "var(--ca-page-deep)" }}
            >
              <h3 className="font-heading type-h3">
                <RouteName route={c.routes.city} locale={locale} color="var(--ca-ink)" />
              </h3>
              <p className="mt-2 max-w-[70ch] type-small" style={{ color: "var(--ca-muted)" }}>
                {c.routes.city.note}
              </p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {c.routes.items.map((r) => (
                <Cell key={r.id ?? r.name}>
                  <h3 className="font-heading type-h3">
                    <RouteName route={r} locale={locale} color="var(--ca-ink)" />
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--ca-muted)" }}>
                    {r.note}
                  </p>
                </Cell>
              ))}
            </div>

            <p
              className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5 type-small"
              style={{ borderColor: "var(--ca-basalt)", color: "var(--ca-muted)" }}
            >
              {c.routes.footnote}
            </p>
          </Container>
        </section>

        {c.ports ? (
          <section className="py-14 sm:py-18">
            <Container size="content">
              <Heading>{c.ports.heading}</Heading>
              <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ca-muted)" }}>
                {c.ports.lead}
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {c.ports.items.map((p) => (
                  <Cell key={p.id ?? p.name}>
                    <h3 className="font-heading type-h3">
                      <RouteName route={p} locale={locale} color="var(--ca-ink)" />
                    </h3>
                    <p className="mt-2 type-small" style={{ color: "var(--ca-muted)" }}>
                      {p.note}
                    </p>
                  </Cell>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ca-rule)", background: "var(--ca-page)" }}
        >
          <Container size="content">
            <Heading>{c.alternatives.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ca-muted)" }}>
              {c.alternatives.lead}
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {c.alternatives.modes.map((m) => (
                <Cell key={m.mode}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--ca-ink)" }}>
                    {m.mode}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--ca-muted)" }}>
                    <span className="font-medium" style={{ color: "var(--ca-ink)" }}>
                      {en ? "Good for. " : "Va bene per. "}
                    </span>
                    {m.suits}
                  </p>
                  <p className="mt-2 type-small" style={{ color: "var(--ca-muted)" }}>
                    <span className="font-medium" style={{ color: "var(--ca-ink)" }}>
                      {en ? "Against it. " : "Contro. "}
                    </span>
                    {m.against}
                  </p>
                </Cell>
              ))}
            </div>
            <p className="mt-9 max-w-[70ch] type-body" style={{ color: "var(--ca-ink)" }}>
              {c.alternatives.verdict}
            </p>
          </Container>
        </section>

        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ca-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--ca-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--ca-muted)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ca-rule)", background: "var(--ca-page)" }}
        >
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--ca-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--ca-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--ca-basalt)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f6f3ef" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#cdc7c0" }}>
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
