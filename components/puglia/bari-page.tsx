import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { bariPage } from "@/content/puglia";
import { pageName } from "@/content/page-names";
import { isPublished, pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Bari — airport and cruise port.
 *
 * ── How this differs from the pillar and from Brindisi ────────────────────
 * The pillar is a pale, typographic page built on a limestone ground: it is
 * an orientation document and it reads like one. Bari is an *arrivals* page,
 * so it is built around sequence and a dark hero — you land, you walk, you
 * meet a driver — and its spine is a numbered timeline with a drawn rail,
 * a device that appears nowhere else in the cluster. Brindisi, by contrast,
 * is organised around distance and uses a measured ladder.
 *
 * Concretely, nothing here is shared with either page except the site's own
 * Container, Cta and Breadcrumbs. The palette, the hero, the section rhythm,
 * the comparison grid and the ledger of onward journeys are all specific to
 * this page.
 *
 * ── Palette ───────────────────────────────────────────────────────────────
 * Bari is a port city on the Adriatic: deep harbour blue, wet stone, and the
 * warm terracotta of the old town. Declared as scoped custom properties on
 * this component's wrapper, never added to the global theme, so they cannot
 * leak into another page. The site's own accent and focus ring are left
 * alone, so buttons and keyboard focus behave as they do everywhere else.
 *
 * ── Photography ───────────────────────────────────────────────────────────
 * There is none. The project's CC0 image set covers Rome, Milan, Venice,
 * Tuscany, Como and the Amalfi coast, and holds nothing of Bari, the airport
 * or the port. Illustrating a Bari arrivals page with a photograph of
 * somewhere else would be worse than illustrating it with nothing, so the
 * page carries its structure through rule, colour and rhythm. The Phase 3
 * report records exactly which images would be needed.
 */

/** Adriatic harbour: deep blue, wet stone, old-town terracotta. */
const bariTheme = {
  "--ba-deep": "#13303f",
  "--ba-deep-soft": "#1b4053",
  "--ba-stone": "#f2efe9",
  "--ba-stone-deep": "#e5e0d6",
  "--ba-terracotta": "#a85436",
  "--ba-ink": "#21262a",
  "--ba-muted": "#4c5b63",
  "--ba-rule": "#d5cec2",
} as React.CSSProperties;

function Heading({
  children,
  eyebrow,
  onDeep = false,
}: {
  children: React.ReactNode;
  eyebrow?: string;
  onDeep?: boolean;
}) {
  return (
    <div>
      {eyebrow ? (
        <p
          className="type-label"
          style={{ color: onDeep ? "#9db6c2" : "var(--ba-terracotta)" }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-3 font-heading type-h2"
        style={{ color: onDeep ? "#f4f1ea" : "var(--ba-ink)" }}
      >
        {children}
      </h2>
    </div>
  );
}

export function BariPageView({ locale }: { locale: Locale }) {
  const c = bariPage[locale];
  const quoteHref = quotePathFor(locale);
  const pillarHref = pathFor("puglia", locale);
  const brindisiHref = pathFor("brindisi", locale);

  return (
    <div style={bariTheme}>
      {/* ── Hero ──────────────────────────────────────────────────────────
          Inverted: a deep harbour band with the type reversed out of it.
          The pillar's hero is pale limestone and Brindisi's is whitewash,
          so the three heroes cannot be mistaken for one another. */}
      <header style={{ background: "var(--ba-deep)" }}>
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="bari" locale={locale} label={c.hero.eyebrow} tone="deep" />

          <div className="mt-8 max-w-[52ch]">
            <p className="type-label" style={{ color: "#9db6c2" }}>
              {c.hero.eyebrow}
            </p>
            <h1
              className="mt-3 font-heading type-h1"
              style={{ color: "#f7f4ee" }}
            >
              {c.hero.h1}
            </h1>
            <p className="mt-6 type-lead" style={{ color: "#cfdbe2" }}>
              {c.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
              <Cta href="#port" variant="onDeep">
                {c.hero.secondaryCta}
              </Cta>
            </div>
          </div>
        </Container>

        {/* Fact strip: four verified facts, set as a rule-separated band
            across the foot of the hero. */}
        <div
          className="border-t"
          style={{ borderColor: "#2b4e60", background: "var(--ba-deep-soft)" }}
        >
          <Container size="wide">
            <dl className="grid gap-x-8 gap-y-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.hero.facts.map((f) => (
                <div key={f.label}>
                  {/* Lightened from #8fa9b6, which measured 4.47:1 on the
                      band behind it — just under the 4.5:1 this text needs. */}
                  <dt className="type-caption" style={{ color: "#9ab3bf" }}>
                    {f.label}
                  </dt>
                  <dd
                    className="mt-1 type-small font-medium"
                    style={{ color: "#eef3f6" }}
                  >
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      </header>

      <main id="main" style={{ background: "var(--ba-stone)" }}>
        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.intro.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--ba-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The arrival sequence ────────────────────────────────────────
            This page's signature device: a drawn rail with numbered nodes,
            because an arrival is a sequence and a card grid would lose the
            one thing that matters about it — the order. */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ba-rule)", background: "#fbf9f5" }}
        >
          <Container size="content">
            <Heading eyebrow="BRI">{c.airport.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ba-muted)" }}>
              {c.airport.lead}
            </p>

            <ol className="mt-10 max-w-[70ch]">
              {c.airport.steps.map((step, i) => {
                const last = i === c.airport.steps.length - 1;
                return (
                  <li key={step.title} className="relative flex gap-5 sm:gap-7">
                    {/* The rail itself, plus the node. Drawn with a border
                        rather than a pseudo-element so it is visible when
                        backgrounds are overridden by forced-colours mode. */}
                    <div className="flex flex-col items-center" aria-hidden="true">
                      <span
                        className="flex size-9 shrink-0 items-center justify-center rounded-full border type-caption font-medium"
                        style={{
                          borderColor: "var(--ba-deep)",
                          background: "var(--ba-deep)",
                          color: "#f7f4ee",
                        }}
                      >
                        {i + 1}
                      </span>
                      {!last ? (
                        <span
                          className="w-px grow"
                          style={{ background: "var(--ba-rule)" }}
                        />
                      ) : null}
                    </div>
                    <div className={last ? "pb-0" : "pb-9"}>
                      <h3
                        className="font-heading type-h3"
                        style={{ color: "var(--ba-ink)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 type-body" style={{ color: "var(--ba-muted)" }}>
                        {step.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p
              className="mt-10 max-w-[64ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--ba-terracotta)", color: "var(--ba-ink)" }}
            >
              {c.airport.note}
            </p>
          </Container>
        </section>

        {/* ── Ways into the city ─────────────────────────────────────────
            A real comparison, with the drawback of each option stated. It
            is a definition list on a phone and a three-column grid above
            that — not a table, because a table of prose scrolls badly on a
            narrow screen. */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.waysIn.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ba-muted)" }}>
              {c.waysIn.lead}
            </p>

            <ul className="mt-10 space-y-px">
              {c.waysIn.rows.map((row) => (
                <li
                  key={row.mode}
                  className="grid gap-x-8 gap-y-3 border-t py-6 md:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)]"
                  style={{ borderColor: "var(--ba-rule)" }}
                >
                  <h3
                    className="font-heading type-h3"
                    style={{ color: "var(--ba-ink)" }}
                  >
                    {row.mode}
                  </h3>
                  <div>
                    <p className="type-caption" style={{ color: "var(--ba-terracotta)" }}>
                      {locale === "en" ? "Good for" : "Va bene per"}
                    </p>
                    <p className="mt-1 type-small" style={{ color: "var(--ba-muted)" }}>
                      {row.suits}
                    </p>
                  </div>
                  <div>
                    <p className="type-caption" style={{ color: "var(--ba-muted)" }}>
                      {locale === "en" ? "Against it" : "Contro"}
                    </p>
                    <p className="mt-1 type-small" style={{ color: "var(--ba-muted)" }}>
                      {row.against}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p
              className="mt-10 max-w-[66ch] rounded-xl border px-6 py-5 type-body"
              style={{
                borderColor: "var(--ba-rule)",
                background: "var(--ba-stone-deep)",
                color: "var(--ba-ink)",
              }}
            >
              {c.waysIn.verdict}
            </p>
          </Container>
        </section>

        {/* ── The port ──────────────────────────────────────────────────── */}
        <section
          id="port"
          className="scroll-mt-24 border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ba-rule)", background: "var(--ba-stone-deep)" }}
        >
          <Container size="content">
            <Heading eyebrow={locale === "en" ? "Porto di Bari" : "Porto di Bari"}>
              {c.port.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ba-muted)" }}>
              {c.port.lead}
            </p>

            <div className="mt-7 max-w-[68ch] space-y-5">
              {c.port.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--ba-muted)" }}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {c.port.terminals.map((t) => (
                <div
                  key={t.title}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--ba-rule)", background: "#fbf9f5" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--ba-ink)" }}>
                    {t.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--ba-muted)" }}>
                    {t.body}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-8 max-w-[66ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--ba-terracotta)", color: "var(--ba-ink)" }}
            >
              {c.port.shoreNote}
            </p>

            {/* Cruise passengers reading this page are usually planning more
                than one call, so the other Italian ports the site covers are
                linked from here rather than from a generic footer list. */}
            <div
              className="mt-10 border-t pt-6"
              style={{ borderColor: "var(--ba-rule)" }}
            >
              <h3 className="type-label" style={{ color: "var(--ba-terracotta)" }}>
                {locale === "en"
                  ? "Other Italian cruise ports we cover"
                  : "Altri porti crociere italiani che seguiamo"}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {(["ravenna-terminal", "civitavecchia", "naples-cruise-port"] as const).map(
                  (id) => (
                    <li key={id}>
                      <Link
                        href={pathFor(id, locale)}
                        className="type-small underline decoration-1 underline-offset-4 hover:no-underline"
                        style={{ color: "var(--ba-deep)" }}
                      >
                        {pageName(id, locale)}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Container>
        </section>

        {/* ── Onward journeys ────────────────────────────────────────────
            Set as a ledger, with the distance in the left margin. Each row
            links to its own page only when the registry says that page is
            published; otherwise it is plain text. */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.onward.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ba-muted)" }}>
              {c.onward.lead}
            </p>

            <ul className="mt-10">
              {c.onward.items.map((item) => {
                const live = item.id !== null && isPublished(item.id);
                const name = (
                  <span className="font-heading type-h3" style={{ color: "var(--ba-ink)" }}>
                    {item.name}
                  </span>
                );
                return (
                  <li
                    key={item.name}
                    className="grid gap-x-8 gap-y-2 border-t py-6 sm:grid-cols-[12rem_minmax(0,1fr)]"
                    style={{ borderColor: "var(--ba-rule)" }}
                  >
                    <p
                      className="type-small font-medium"
                      style={{ color: "var(--ba-terracotta)" }}
                    >
                      {item.distance}
                    </p>
                    <div>
                      {live && item.id ? (
                        <Link
                          href={pathFor(item.id, locale)}
                          className="underline decoration-1 underline-offset-4 hover:no-underline"
                        >
                          {name}
                        </Link>
                      ) : (
                        name
                      )}
                      <p className="mt-2 type-small" style={{ color: "var(--ba-muted)" }}>
                        {item.note}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <p
              className="mt-8 max-w-[66ch] type-small"
              style={{ color: "var(--ba-muted)" }}
            >
              {c.onward.footnote}
            </p>
          </Container>
        </section>

        {/* ── Staying ───────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ba-rule)", background: "#fbf9f5" }}
        >
          <Container size="content">
            <Heading>{c.staying.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ba-muted)" }}>
              {c.staying.lead}
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {c.staying.groups.map((g) => (
                <div key={g.title}>
                  <h3
                    className="border-t pt-4 font-heading type-h3"
                    style={{ borderColor: "var(--ba-deep)", color: "var(--ba-ink)" }}
                  >
                    {g.title}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--ba-muted)" }}>
                    {g.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ba-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--ba-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--ba-muted)" }}>
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
          style={{ borderColor: "var(--ba-rule)", background: "var(--ba-stone-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--ba-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--ba-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Elsewhere in Puglia ────────────────────────────────────────
            Contextual links out, so this page is not a cul-de-sac. */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <h2 className="font-heading type-h2" style={{ color: "var(--ba-ink)" }}>
              {locale === "en" ? "Elsewhere in Puglia" : "Altrove in Puglia"}
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              <li
                className="rounded-xl border p-6"
                style={{ borderColor: "var(--ba-rule)", background: "#fbf9f5" }}
              >
                <Link href={pillarHref} className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline" style={{ color: "var(--ba-ink)" }}>
                  {locale === "en" ? "Private transfers in Puglia" : "Transfer privati in Puglia"}
                </Link>
                <p className="mt-2 type-small" style={{ color: "var(--ba-muted)" }}>
                  {locale === "en"
                    ? "The regional page: both airports, the towns and how far apart everything really is."
                    : "La pagina regionale: i due aeroporti, i centri e quanto dista davvero ogni cosa."}
                </p>
              </li>
              <li
                className="rounded-xl border p-6"
                style={{ borderColor: "var(--ba-rule)", background: "#fbf9f5" }}
              >
                <Link href={brindisiHref} className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline" style={{ color: "var(--ba-ink)" }}>
                  {locale === "en" ? "Brindisi airport transfers" : "Transfer dall'aeroporto di Brindisi"}
                </Link>
                <p className="mt-2 type-small" style={{ color: "var(--ba-muted)" }}>
                  {locale === "en"
                    ? "The other Puglia airport, and the better one for Lecce, Ostuni and Salento."
                    : "L'altro scalo pugliese, più comodo per Lecce, Ostuni e il Salento."}
                </p>
              </li>
            </ul>
          </Container>
        </section>

        {/* ── Close ─────────────────────────────────────────────────────── */}
        <section className="pb-16 sm:pb-20">
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--ba-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f7f4ee" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#cfdbe2" }}>
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
