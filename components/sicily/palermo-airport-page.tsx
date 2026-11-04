import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { RouteName } from "@/components/sicily/airport-shared";
import { palermoAirportPage } from "@/content/sicily";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Palermo Airport (PMO).
 *
 * ── The device: a departures board ────────────────────────────────────────
 * Ruled rows, a monospaced-feeling column of codes on the left, destinations
 * on the right — the airport's own vocabulary turned into a page. The routes
 * section is the board proper; everything else hangs off the same ruled
 * rhythm so the page reads as one object.
 *
 * The Puglia cluster used an arrivals-board device too, and this is
 * deliberately not that component: Puglia's runs on a dark navy ground with
 * a giant IATA code in the hero, this is pale with the board itself as the
 * organising idea and no oversized code anywhere. Reusing the Puglia
 * component would have coupled two clusters that have no reason to move
 * together.
 *
 * ── Palette, scoped ───────────────────────────────────────────────────────
 * Board grey-green with a signal amber, on this component's wrapper only.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * We hold no licensed image of this airport, and a stock terminal interior
 * captioned as Palermo would be precisely the false claim this project
 * refuses.
 */

const theme = {
  "--pm-board": "#f4f5f1",
  "--pm-board-deep": "#e7e9e2",
  "--pm-slate": "#23302e",
  "--pm-slate-soft": "#2f403d",
  "--pm-amber": "#8a5a0b",
  "--pm-ink": "#242726",
  "--pm-muted": "#4b514f",
  "--pm-rule": "#cfd4cb",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--pm-amber)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--pm-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

export function PalermoAirportPageView({ locale }: { locale: Locale }) {
  const c = palermoAirportPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={theme}>
      <header style={{ background: "var(--pm-slate)" }}>
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="palermo-airport" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "#d6a35a" }}>
            {c.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-[22ch] font-heading type-h1" style={{ color: "#f3f5f1" }}>
            {c.hero.h1}
          </h1>
          <p className="mt-6 max-w-[68ch] type-lead" style={{ color: "#c6cec9" }}>
            {c.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#routes" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          {/* The board's header row. */}
          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "#49564f" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt
                  className="type-caption uppercase tracking-[0.12em]"
                  style={{ color: "#a9b3ad" }}
                >
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "#f3f5f1" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--pm-board)" }}>
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.identity.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.identity.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--pm-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Being met: numbered rows on the board ─────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--pm-rule)", background: "var(--pm-board-deep)" }}
        >
          <Container size="content">
            <Heading eyebrow={en ? "Arrivals" : "Arrivi"}>{c.meeting.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pm-muted)" }}>
              {c.meeting.lead}
            </p>
            <ol className="mt-9">
              {c.meeting.steps.map((s, i) => (
                <li
                  key={s.title}
                  className="grid gap-x-6 gap-y-1 border-t py-5 sm:grid-cols-[3rem_minmax(0,18rem)_minmax(0,1fr)]"
                  style={{ borderColor: "var(--pm-rule)" }}
                >
                  <span
                    aria-hidden="true"
                    className="type-small font-medium tabular-nums"
                    style={{ color: "var(--pm-amber)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading type-h3" style={{ color: "var(--pm-ink)" }}>
                    {s.title}
                  </h3>
                  <p className="type-small" style={{ color: "var(--pm-muted)" }}>
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
            <p
              className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--pm-amber)", color: "var(--pm-ink)" }}
            >
              {c.meeting.note}
            </p>
          </Container>
        </section>

        {/* ── The board proper ──────────────────────────────────────────── */}
        <section id="routes" className="scroll-mt-24 py-14 sm:py-18">
          <Container size="content">
            <Heading eyebrow={en ? "Departures" : "Partenze"}>{c.routes.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pm-muted)" }}>
              {c.routes.lead}
            </p>

            <ul className="mt-9">
              {[c.routes.city, ...c.routes.items].map((r, i) => (
                <li
                  key={(r.id ?? r.name ?? "") + i}
                  className="grid gap-x-8 gap-y-2 border-t py-5 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]"
                  style={{
                    borderColor: i === 0 ? "var(--pm-slate)" : "var(--pm-rule)",
                    borderTopWidth: i === 0 ? 2 : 1,
                  }}
                >
                  <h3 className="font-heading type-h3">
                    <RouteName route={r} locale={locale} color="var(--pm-ink)" />
                  </h3>
                  <p className="type-small" style={{ color: "var(--pm-muted)" }}>
                    {r.note}
                  </p>
                </li>
              ))}
            </ul>

            <p
              className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5 type-small"
              style={{ borderColor: "var(--pm-slate)", color: "var(--pm-muted)" }}
            >
              {c.routes.footnote}
            </p>
          </Container>
        </section>

        {c.ports ? (
          <section
            className="border-y py-14 sm:py-18"
            style={{ borderColor: "var(--pm-rule)", background: "var(--pm-board-deep)" }}
          >
            <Container size="content">
              <Heading>{c.ports.heading}</Heading>
              <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pm-muted)" }}>
                {c.ports.lead}
              </p>
              <ul className="mt-8 space-y-5">
                {c.ports.items.map((p) => (
                  <li
                    key={p.id ?? p.name}
                    className="rounded-xl border p-6"
                    style={{ borderColor: "var(--pm-rule)", background: "var(--pm-board)" }}
                  >
                    <h3 className="font-heading type-h3">
                      <RouteName route={p} locale={locale} color="var(--pm-ink)" />
                    </h3>
                    <p className="mt-2 type-small" style={{ color: "var(--pm-muted)" }}>
                      {p.note}
                    </p>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        ) : null}

        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.alternatives.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pm-muted)" }}>
              {c.alternatives.lead}
            </p>
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {c.alternatives.modes.map((m) => (
                <div key={m.mode} className="border-t pt-5" style={{ borderColor: "var(--pm-slate)" }}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--pm-ink)" }}>
                    {m.mode}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--pm-muted)" }}>
                    <span className="font-medium" style={{ color: "var(--pm-ink)" }}>
                      {en ? "Good for. " : "Va bene per. "}
                    </span>
                    {m.suits}
                  </p>
                  <p className="mt-2 type-small" style={{ color: "var(--pm-muted)" }}>
                    <span className="font-medium" style={{ color: "var(--pm-ink)" }}>
                      {en ? "Against it. " : "Contro. "}
                    </span>
                    {m.against}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-9 max-w-[70ch] type-body" style={{ color: "var(--pm-ink)" }}>
              {c.alternatives.verdict}
            </p>
          </Container>
        </section>

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--pm-rule)", background: "var(--pm-board-deep)" }}
        >
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--pm-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--pm-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--pm-muted)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--pm-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--pm-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20" style={{ background: "var(--pm-board-deep)" }}>
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--pm-slate)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f3f5f1" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#c6cec9" }}>
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
