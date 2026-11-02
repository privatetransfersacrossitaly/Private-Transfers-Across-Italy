import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import type { AirportPage } from "@/content/puglia";
import { isPublished, pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * The shared skeleton behind both Puglia airport pages.
 *
 * ── Why these two share a component when the town pages did not ───────────
 * Each town in this cluster got its own component because each answered a
 * genuinely different question: a sequence, a scale, a symmetry, a split.
 * BRI and BDS are not like that. They are the same kind of object — a
 * runway, an arrivals hall, a set of roads leading away — and the honest
 * thing to do with two pages that answer the same question about two
 * subjects is to give them the same spine and let the palette, the
 * content and the accent mark tell them apart.
 *
 * Writing them as two near-identical 600-line components would have been
 * ceremony, and the second one would have drifted from the first within a
 * month.
 *
 * ── The spine ─────────────────────────────────────────────────────────────
 * A *departures-board* layout: the hero sits on a dark band with the airport
 * code set large, like a flight board, and the onward routes are a ruled
 * destination list with distances in a right-hand column. Neither device
 * appears on the town pages, which are built around sequence, scale,
 * symmetry, splits, plaques, rails and strata.
 *
 * ── Photography ───────────────────────────────────────────────────────────
 * None. There is no licence-clear photograph of either terminal in this
 * project, and a generic airport interior captioned as BRI or BDS would be
 * a lie about a specific place — exactly the thing the asset manifest's
 * `location_verified` column exists to prevent. Typographic instead.
 */

export type AirportTheme = {
  /** CSS custom properties, scoped to this page's wrapper. */
  vars: React.CSSProperties;
  /** The IATA code, set large in the hero. */
  code: string;
};

function Heading({
  children,
  eyebrow,
}: {
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <div>
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--ap-accent)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--ap-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

export function AirportPageView({
  locale,
  id,
  content: c,
  theme,
}: {
  locale: Locale;
  id: "bari-airport" | "brindisi-airport";
  content: AirportPage;
  theme: AirportTheme;
}) {
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  /** A route row, linked when its destination has a published page. */
  const routeRow = (r: {
    id: Parameters<typeof pathFor>[0] | null;
    name: string;
    distance: string;
    note: string;
  }) => {
    const live = r.id !== null && isPublished(r.id);
    const name = (
      <span className="font-heading type-h3" style={{ color: "var(--ap-ink)" }}>
        {r.name}
      </span>
    );
    return (
      <li
        key={r.name}
        className="grid gap-x-8 gap-y-2 border-t py-5 sm:grid-cols-[minmax(0,1fr)_12rem]"
        style={{ borderColor: "var(--ap-rule)" }}
      >
        <div>
          {live && r.id ? (
            <Link
              href={pathFor(r.id, locale)}
              className="underline decoration-1 underline-offset-4 hover:no-underline"
            >
              {name}
            </Link>
          ) : (
            name
          )}
          <p className="mt-2 type-small" style={{ color: "var(--ap-muted)" }}>
            {r.note}
          </p>
        </div>
        {/* Right-hand distance column, like a board. */}
        <p
          className="type-small font-medium sm:text-right"
          style={{ color: "var(--ap-accent-deep)" }}
        >
          {r.distance}
        </p>
      </li>
    );
  };

  return (
    <div style={theme.vars}>
      {/* ── Hero: the board ─────────────────────────────────────────────── */}
      <header style={{ background: "var(--ap-deep)" }}>
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id={id} locale={locale} label={c.hero.eyebrow} tone="deep" />

          <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
            <div className="max-w-[54ch]">
              <p className="type-label" style={{ color: "var(--ap-on-deep-muted)" }}>
                {c.hero.eyebrow}
              </p>
              <h1
                className="mt-3 font-heading type-h1"
                style={{ color: "var(--ap-on-deep)" }}
              >
                {c.hero.h1}
              </h1>
              <p className="mt-6 type-lead" style={{ color: "var(--ap-on-deep-soft)" }}>
                {c.hero.lead}
              </p>
            </div>

            {/* The code, set large. Decorative — every page already states
                it in the fact strip below, so it is hidden from assistive
                technology rather than read out twice. */}
            <p
              aria-hidden="true"
              className="font-heading leading-none tracking-tight"
              style={{
                color: "var(--ap-accent)",
                fontSize: "clamp(4rem, 12vw, 7.5rem)",
                opacity: 0.9,
              }}
            >
              {theme.code}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#routes" variant="onDeep">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--ap-deep-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--ap-on-deep-muted)" }}>
                  {f.label}
                </dt>
                <dd
                  className="mt-1 type-small font-medium"
                  style={{ color: "var(--ap-on-deep)" }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--ap-page)" }}>
        {/* ── Identity ──────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.identity.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.identity.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--ap-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Being met ─────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ap-rule)", background: "var(--ap-page-deep)" }}
        >
          <Container size="content">
            <Heading eyebrow={theme.code}>{c.meeting.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ap-muted)" }}>
              {c.meeting.lead}
            </p>
            <div className="mt-10 grid gap-7 md:grid-cols-2">
              {c.meeting.steps.map((s) => (
                <div key={s.title}>
                  <h3
                    className="border-t pt-4 font-heading type-h3"
                    style={{ borderColor: "var(--ap-accent)", color: "var(--ap-ink)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--ap-muted)" }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="mt-10 max-w-[66ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--ap-accent-deep)", color: "var(--ap-ink)" }}
            >
              {c.meeting.note}
            </p>
          </Container>
        </section>

        {/* ── How it works ──────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.howItWorks.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ap-muted)" }}>
              {c.howItWorks.lead}
            </p>
            <ol className="mt-10 grid gap-6 md:grid-cols-4">
              {c.howItWorks.steps.map((s, i) => (
                <li
                  key={s.title}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--ap-rule)", background: "var(--ap-page-deep)" }}
                >
                  <span
                    aria-hidden="true"
                    className="flex size-7 items-center justify-center rounded-full type-caption font-medium"
                    style={{ background: "var(--ap-deep)", color: "var(--ap-on-deep)" }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="mt-4 font-heading type-h3"
                    style={{ color: "var(--ap-ink)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--ap-muted)" }}>
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* ── Routes: the destination board ─────────────────────────────── */}
        <section
          id="routes"
          className="scroll-mt-24 border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ap-rule)", background: "var(--ap-page-deep)" }}
        >
          <Container size="content">
            <Heading>{c.routes.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ap-muted)" }}>
              {c.routes.lead}
            </p>

            {/* The city the airport serves, set apart from the region. */}
            <div
              className="mt-9 rounded-xl border p-6"
              style={{ borderColor: "var(--ap-accent)", background: "var(--ap-page)" }}
            >
              <ul>{routeRow(c.routes.city)}</ul>
            </div>

            <ul className="mt-6">{c.routes.items.map(routeRow)}</ul>

            <p
              className="mt-8 max-w-[68ch] type-small"
              style={{ color: "var(--ap-muted)" }}
            >
              {c.routes.footnote}
            </p>
          </Container>
        </section>

        {/* ── Alternatives ──────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.alternatives.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ap-muted)" }}>
              {c.alternatives.lead}
            </p>
            <ul className="mt-10">
              {c.alternatives.modes.map((m) => (
                <li
                  key={m.mode}
                  className="grid gap-x-8 gap-y-3 border-t py-6 md:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)]"
                  style={{ borderColor: "var(--ap-rule)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--ap-ink)" }}>
                    {m.mode}
                  </h3>
                  <div>
                    <p className="type-caption" style={{ color: "var(--ap-accent-deep)" }}>
                      {en ? "Good for" : "Va bene per"}
                    </p>
                    <p className="mt-1 type-small" style={{ color: "var(--ap-muted)" }}>
                      {m.suits}
                    </p>
                  </div>
                  <div>
                    <p className="type-caption" style={{ color: "var(--ap-muted)" }}>
                      {en ? "Against it" : "Contro"}
                    </p>
                    <p className="mt-1 type-small" style={{ color: "var(--ap-muted)" }}>
                      {m.against}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p
              className="mt-9 max-w-[68ch] rounded-xl px-6 py-5 type-body"
              style={{ background: "var(--ap-deep)", color: "var(--ap-on-deep-soft)" }}
            >
              {c.alternatives.verdict}
            </p>
          </Container>
        </section>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ap-rule)", background: "var(--ap-page-deep)" }}
        >
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ap-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--ap-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--ap-muted)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--ap-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--ap-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Elsewhere ─────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ap-rule)", background: "var(--ap-page-deep)" }}
        >
          <Container size="content">
            <h2 className="font-heading type-h2" style={{ color: "var(--ap-ink)" }}>
              {en ? "Elsewhere in Puglia" : "Altrove in Puglia"}
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-3">
              {(
                id === "bari-airport"
                  ? ([
                      ["puglia", en ? "Private transfers in Puglia" : "Transfer privati in Puglia",
                        en ? "The regional page: both airports and how far apart everything really is."
                           : "La pagina regionale: i due aeroporti e quanto dista davvero ogni cosa."],
                      ["bari", en ? "Bari, the city and the cruise port" : "Bari, la città e il porto",
                        en ? "Bari itself, the old quarter and the Terminal Crociere."
                           : "Bari, la città vecchia e il Terminal Crociere."],
                      ["brindisi-airport", en ? "Brindisi Airport (BDS)" : "Aeroporto di Brindisi (BDS)",
                        en ? "The other Puglia airport, and the nearer one for Lecce and Salento."
                           : "L'altro scalo pugliese, più vicino a Lecce e al Salento."],
                    ] as const)
                  : ([
                      ["puglia", en ? "Private transfers in Puglia" : "Transfer privati in Puglia",
                        en ? "The regional page: both airports and how far apart everything really is."
                           : "La pagina regionale: i due aeroporti e quanto dista davvero ogni cosa."],
                      ["brindisi", en ? "Brindisi, the southern gateway" : "Brindisi, la porta del sud",
                        en ? "Brindisi as a destination, and the full Bari-or-Brindisi comparison."
                           : "Brindisi come destinazione e il confronto completo fra i due scali."],
                      ["bari-airport", en ? "Bari Airport (BRI)" : "Aeroporto di Bari (BRI)",
                        en ? "The other Puglia airport, and the nearer one for the trulli and Matera."
                           : "L'altro scalo pugliese, più vicino ai trulli e a Matera."],
                    ] as const)
              ).map(([pid, title, blurb]) => (
                <li
                  key={pid}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--ap-rule)", background: "var(--ap-page)" }}
                >
                  <Link
                    href={pathFor(pid, locale)}
                    className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline"
                    style={{ color: "var(--ap-ink)" }}
                  >
                    {title}
                  </Link>
                  <p className="mt-2 type-small" style={{ color: "var(--ap-muted)" }}>
                    {blurb}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ── Close ─────────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--ap-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "var(--ap-on-deep)" }}>
                {c.close.heading}
              </h2>
              <p
                className="mt-4 max-w-[62ch] type-lead"
                style={{ color: "var(--ap-on-deep-soft)" }}
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
