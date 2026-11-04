import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { RouteName } from "@/components/sicily/airport-shared";
import { trapaniAirportPage } from "@/content/sicily";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Trapani Airport (TPS).
 *
 * ── The device: one narrow column ─────────────────────────────────────────
 * This is the smallest airport in the cluster and the page says so by being
 * small: a single `prose`-width column from top to bottom, no grid, no
 * board, no second column anywhere. At 1440px it occupies the same measure
 * as a piece of writing rather than the full width its siblings use.
 *
 * That is a deliberate editorial judgement rather than a shortcut. A page
 * padded out to look as substantial as Catania's would misrepresent an
 * airport whose traffic has fallen two years running and where the honest
 * advice is frequently "take the bus".
 *
 * ── Palette, scoped ───────────────────────────────────────────────────────
 * Birgi sits between salt pans and a runway, so this shares the Trapani
 * town page's salt and shallow-water family without repeating its layout —
 * the town page is wide flat pans, this is one column.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * No licensed image exists, and this is a dual-use military airfield where
 * a generic apron photograph would be an especially poor guess.
 */

const theme = {
  "--tb-salt": "#f9f8f3",
  "--tb-salt-deep": "#eeece3",
  "--tb-shallow": "#245c66",
  "--tb-shallow-deep": "#1b4751",
  "--tb-rust": "#8f4a1f",
  "--tb-ink": "#252420",
  "--tb-muted": "#4c4c46",
  "--tb-rule": "#d5d0c1",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div>
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--tb-rust)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--tb-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

/** Every section on this page is the same narrow column. */
function Col({
  children,
  tone = "base",
  id,
}: {
  children: React.ReactNode;
  tone?: "base" | "deep";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`border-b py-12 sm:py-16 ${id ? "scroll-mt-24" : ""}`}
      style={{
        background: tone === "deep" ? "var(--tb-salt-deep)" : "var(--tb-salt)",
        borderColor: "var(--tb-rule)",
      }}
    >
      <Container size="prose">{children}</Container>
    </section>
  );
}

export function TrapaniAirportPageView({ locale }: { locale: Locale }) {
  const c = trapaniAirportPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={theme}>
      <header
        className="border-b"
        style={{ background: "var(--tb-salt)", borderColor: "var(--tb-rule)" }}
      >
        <Container size="prose" className="py-10 sm:py-14">
          <Breadcrumbs id="trapani-airport" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "var(--tb-rust)" }}>
            {c.hero.eyebrow}
          </p>
          <h1 className="mt-3 font-heading type-h1" style={{ color: "var(--tb-ink)" }}>
            {c.hero.h1}
          </h1>
          <p className="mt-6 type-lead" style={{ color: "var(--tb-muted)" }}>
            {c.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#routes" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2"
            style={{ borderColor: "var(--tb-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--tb-muted)" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "var(--tb-ink)" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main">
        <Col>
          <Heading>{c.identity.heading}</Heading>
          <div className="mt-6 space-y-5">
            {c.identity.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--tb-muted)" }}>
                {p}
              </p>
            ))}
          </div>
        </Col>

        <Col tone="deep">
          <Heading eyebrow={en ? "Arrivals" : "Arrivi"}>{c.meeting.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--tb-muted)" }}>
            {c.meeting.lead}
          </p>
          <ol className="mt-8">
            {c.meeting.steps.map((s) => (
              <li key={s.title} className="border-t py-5" style={{ borderColor: "var(--tb-rule)" }}>
                <h3 className="font-heading type-h3" style={{ color: "var(--tb-ink)" }}>
                  {s.title}
                </h3>
                <p className="mt-2 type-small" style={{ color: "var(--tb-muted)" }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
          <p
            className="mt-8 border-l-4 py-1 pl-5 type-body"
            style={{ borderColor: "var(--tb-rust)", color: "var(--tb-ink)" }}
          >
            {c.meeting.note}
          </p>
        </Col>

        <Col id="routes">
          <Heading eyebrow={en ? "Departures" : "Partenze"}>{c.routes.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--tb-muted)" }}>
            {c.routes.lead}
          </p>
          <ul className="mt-8">
            {[c.routes.city, ...c.routes.items].map((r, i) => (
              <li
                key={(r.id ?? r.name ?? "") + i}
                className="border-t py-5"
                style={{
                  borderColor: i === 0 ? "var(--tb-shallow)" : "var(--tb-rule)",
                  borderTopWidth: i === 0 ? 2 : 1,
                }}
              >
                <h3 className="font-heading type-h3">
                  <RouteName route={r} locale={locale} color="var(--tb-ink)" />
                </h3>
                <p className="mt-2 type-small" style={{ color: "var(--tb-muted)" }}>
                  {r.note}
                </p>
              </li>
            ))}
          </ul>
          <p
            className="mt-8 border-l-4 py-1 pl-5 type-small"
            style={{ borderColor: "var(--tb-shallow)", color: "var(--tb-muted)" }}
          >
            {c.routes.footnote}
          </p>
        </Col>

        {/* No ports block here, and that is correct: Trapani's quayside is a
            ferry terminal, not a cruise port, and the ferry material lives
            on the town page. The optional section simply does not render. */}
        {c.ports ? (
          <Col tone="deep">
            <Heading>{c.ports.heading}</Heading>
            <p className="mt-4 type-lead" style={{ color: "var(--tb-muted)" }}>
              {c.ports.lead}
            </p>
            <ul className="mt-8 space-y-4">
              {c.ports.items.map((p) => (
                <li key={p.id ?? p.name} className="border-t pt-4" style={{ borderColor: "var(--tb-rule)" }}>
                  <h3 className="font-heading type-h3">
                    <RouteName route={p} locale={locale} color="var(--tb-ink)" />
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--tb-muted)" }}>
                    {p.note}
                  </p>
                </li>
              ))}
            </ul>
          </Col>
        ) : null}

        <Col tone="deep">
          <Heading>{c.alternatives.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--tb-muted)" }}>
            {c.alternatives.lead}
          </p>
          <div className="mt-8 space-y-7">
            {c.alternatives.modes.map((m) => (
              <div key={m.mode} className="border-t pt-5" style={{ borderColor: "var(--tb-shallow)" }}>
                <h3 className="font-heading type-h3" style={{ color: "var(--tb-ink)" }}>
                  {m.mode}
                </h3>
                <p className="mt-3 type-small" style={{ color: "var(--tb-muted)" }}>
                  <span className="font-medium" style={{ color: "var(--tb-ink)" }}>
                    {en ? "Good for. " : "Va bene per. "}
                  </span>
                  {m.suits}
                </p>
                <p className="mt-2 type-small" style={{ color: "var(--tb-muted)" }}>
                  <span className="font-medium" style={{ color: "var(--tb-ink)" }}>
                    {en ? "Against it. " : "Contro. "}
                  </span>
                  {m.against}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 type-body" style={{ color: "var(--tb-ink)" }}>
            {c.alternatives.verdict}
          </p>
        </Col>

        <Col>
          <Heading>{c.practical.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--tb-muted)" }}>
            {c.practical.lead}
          </p>
          <dl className="mt-8 space-y-6">
            {c.practical.items.map((item) => (
              <div key={item.term}>
                <dt className="font-heading type-h3" style={{ color: "var(--tb-ink)" }}>
                  {item.term}
                </dt>
                <dd className="mt-2 type-small" style={{ color: "var(--tb-muted)" }}>
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Col>

        <Col tone="deep">
          <Heading>{c.faq.heading}</Heading>
          <div className="mt-9 space-y-8">
            {c.faq.items.map((item) => (
              <article key={item.question}>
                <h3 className="font-heading type-h3" style={{ color: "var(--tb-ink)" }}>
                  {item.question}
                </h3>
                <p className="mt-2 type-body" style={{ color: "var(--tb-muted)" }}>
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </Col>

        <section className="py-16 sm:py-20" style={{ background: "var(--tb-salt)" }}>
          <Container size="prose">
            <div
              className="rounded-2xl px-7 py-10 sm:px-10 sm:py-12"
              style={{ background: "var(--tb-shallow-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f1f7f8" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 type-lead" style={{ color: "#c8dde0" }}>
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
