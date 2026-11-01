import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { polignanoPage } from "@/content/puglia";
import { isPublished, pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Polignano a Mare — the cliff town.
 *
 * ── How this differs from the other eight ─────────────────────────────────
 * The cluster already has a sequence, a vertical scale, a symmetry, a
 * split, a plaque and a horizontal coast rail. Polignano's organising idea
 * is **narrowness**. It is a small town, visited mostly by two people at a
 * time, with one real complication — so this is the only page in the
 * cluster that runs as a single narrow column almost end to end, with the
 * reading measure held constant and the full-bleed colour bands between
 * sections doing the work that grids do elsewhere.
 *
 * Those bands are the second device: thin horizontal **strata**, three
 * stacked rules in descending weight, standing in for limestone courses.
 * They separate sections instead of a border, and they are the page's only
 * ornament.
 *
 * Nothing here repeats Lecce's centred rules, Ostuni's diptych,
 * Alberobello's roof marks or Monopoli's coast rail.
 *
 * ── Palette ───────────────────────────────────────────────────────────────
 * Deep Adriatic blue-green against sun-bleached limestone — darker and more
 * saturated than Monopoli's sea-green a few kilometres down the same coast,
 * because this town is read against water rather than against a harbour.
 * Scoped to this component; nothing global changes.
 *
 * ── Photography ───────────────────────────────────────────────────────────
 * None exists. Polignano is probably the single most photographed town in
 * Puglia and the project holds no image of it, which makes this the page
 * where the gap costs the most. Recorded in the Phase 5 report; nothing
 * from somewhere else has been substituted.
 */

/** Deep Adriatic against sun-bleached limestone. */
const polignanoTheme = {
  "--po-bleach": "#faf9f5",
  "--po-bleach-deep": "#efede6",
  "--po-deep": "#15555e",
  "--po-deep-dark": "#0e3d44",
  "--po-sun": "#b9793a",
  "--po-ink": "#20231f",
  "--po-muted": "#4e544d",
  "--po-rule": "#d8d4c8",
} as React.CSSProperties;

/** Three stacked rules in descending weight: limestone courses. */
function Strata() {
  return (
    <span aria-hidden="true" className="flex flex-col gap-1">
      <span className="block h-1 w-16 rounded-full" style={{ background: "var(--po-deep)" }} />
      <span className="block h-px w-12" style={{ background: "var(--po-deep)", opacity: 0.6 }} />
      <span className="block h-px w-8" style={{ background: "var(--po-deep)", opacity: 0.35 }} />
    </span>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Strata />
      <h2 className="mt-5 font-heading type-h2" style={{ color: "var(--po-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

export function PolignanoPageView({ locale }: { locale: Locale }) {
  const c = polignanoPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={polignanoTheme}>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <header
        className="border-b"
        style={{ background: "var(--po-bleach)", borderColor: "var(--po-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="polignano-a-mare" locale={locale} label={c.hero.eyebrow} />

          <div className="mt-10 max-w-[54ch]">
            <Strata />
            <p className="mt-5 type-label" style={{ color: "var(--po-deep)" }}>
              {c.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-heading type-h1" style={{ color: "var(--po-ink)" }}>
              {c.hero.h1}
            </h1>
            <p className="mt-6 type-lead" style={{ color: "var(--po-muted)" }}>
              {c.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
              <Cta href="#the-drop" variant="outline">
                {c.hero.secondaryCta}
              </Cta>
            </div>
          </div>

          <dl className="mt-11 grid max-w-3xl gap-x-8 gap-y-5 sm:grid-cols-2">
            {c.hero.facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-4 border-b pb-2"
                style={{ borderColor: "var(--po-rule)" }}>
                <dt className="type-caption" style={{ color: "var(--po-muted)" }}>
                  {f.label}
                </dt>
                <dd className="type-small font-medium" style={{ color: "var(--po-ink)" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--po-bleach)" }}>
        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.intro.heading}</Heading>
            <div className="mt-7 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--po-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The drop ───────────────────────────────────────────────────
            The one complication, given a full-bleed band of its own. The
            four consequences sit in the same narrow measure rather than in
            a grid — the page never widens. */}
        <section
          id="the-drop"
          className="scroll-mt-24 border-y py-14 sm:py-18"
          style={{ borderColor: "var(--po-rule)", background: "var(--po-bleach-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.theDrop.heading}</Heading>
            <p className="mt-6 type-lead" style={{ color: "var(--po-muted)" }}>
              {c.theDrop.lead}
            </p>
            <div className="mt-6 space-y-5">
              {c.theDrop.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--po-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-10">
              {c.theDrop.consequences.map((item) => (
                <li
                  key={item.title}
                  className="border-t py-5"
                  style={{ borderColor: "var(--po-rule)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--po-ink)" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--po-muted)" }}>
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ── Arriving ──────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.arriving.heading}</Heading>
            <p className="mt-6 type-lead" style={{ color: "var(--po-muted)" }}>
              {c.arriving.lead}
            </p>
            <div className="mt-6 space-y-5">
              {c.arriving.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--po-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
            <dl className="mt-10">
              {c.arriving.options.map((o) => (
                <div
                  key={o.mode}
                  className="border-t py-5"
                  style={{ borderColor: "var(--po-rule)" }}
                >
                  <dt className="font-heading type-h3" style={{ color: "var(--po-ink)" }}>
                    {o.mode}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--po-muted)" }}>
                    {o.body}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 type-small" style={{ color: "var(--po-muted)" }}>
              <Link
                href={pathFor("bari", locale)}
                className="underline decoration-1 underline-offset-4 hover:no-underline"
                style={{ color: "var(--po-deep-dark)" }}
              >
                {en ? "Bari airport and cruise port" : "Aeroporto e porto di Bari"}
              </Link>
            </p>
          </Container>
        </section>

        {/* ── Staying ───────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--po-rule)", background: "var(--po-bleach-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.staying.heading}</Heading>
            <p className="mt-6 type-lead" style={{ color: "var(--po-muted)" }}>
              {c.staying.lead}
            </p>
            <div className="mt-6 space-y-5">
              {c.staying.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--po-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-9 space-y-6">
              {c.staying.kinds.map((k) => (
                <li
                  key={k.title}
                  className="border-l-4 py-1 pl-5"
                  style={{ borderColor: "var(--po-deep)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--po-ink)" }}>
                    {k.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--po-muted)" }}>
                    {k.body}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ── Weddings ──────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.weddings.heading}</Heading>
            <p className="mt-6 type-lead" style={{ color: "var(--po-muted)" }}>
              {c.weddings.lead}
            </p>
            <div className="mt-6 space-y-5">
              {c.weddings.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--po-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
            <ul
              className="mt-9 rounded-xl border p-6"
              style={{ borderColor: "var(--po-sun)", background: "var(--po-bleach-deep)" }}
            >
              {c.weddings.scope.map((item, i) => (
                <li
                  key={item}
                  className={i === 0 ? "type-small" : "mt-3 border-t pt-3 type-small"}
                  style={{ borderColor: "var(--po-rule)", color: "var(--po-muted)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 type-body" style={{ color: "var(--po-muted)" }}>
              {c.weddings.limits}
            </p>
            <p className="mt-5 type-small" style={{ color: "var(--po-muted)" }}>
              <Link
                href={pathFor("ostuni", locale)}
                className="underline decoration-1 underline-offset-4 hover:no-underline"
                style={{ color: "var(--po-deep-dark)" }}
              >
                {en
                  ? "Larger weddings: Ostuni and the masserie"
                  : "Matrimoni più grandi: Ostuni e le masserie"}
              </Link>
            </p>
          </Container>
        </section>

        {/* ── Neighbours ────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--po-rule)", background: "var(--po-bleach-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.neighbours.heading}</Heading>
            <p className="mt-6 type-lead" style={{ color: "var(--po-muted)" }}>
              {c.neighbours.lead}
            </p>
            <ul className="mt-9">
              {c.neighbours.items.map((item) => {
                const live = item.id !== null && isPublished(item.id);
                const name = (
                  <span className="font-heading type-h3" style={{ color: "var(--po-ink)" }}>
                    {item.name}
                  </span>
                );
                return (
                  <li
                    key={item.name}
                    className="border-t py-5"
                    style={{ borderColor: "var(--po-rule)" }}
                  >
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
                    <p className="mt-2 type-small" style={{ color: "var(--po-muted)" }}>
                      {item.note}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-6 type-lead" style={{ color: "var(--po-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9">
              {c.practical.items.map((item) => (
                <div
                  key={item.term}
                  className="border-t py-5"
                  style={{ borderColor: "var(--po-rule)" }}
                >
                  <dt className="font-heading type-h3" style={{ color: "var(--po-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--po-muted)" }}>
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
          style={{ borderColor: "var(--po-rule)", background: "var(--po-bleach-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--po-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--po-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Elsewhere ─────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <h2 className="font-heading type-h2" style={{ color: "var(--po-ink)" }}>
              {en ? "Elsewhere in Puglia" : "Altrove in Puglia"}
            </h2>
            <ul className="mt-7">
              {(
                [
                  ["puglia", en ? "Private transfers in Puglia" : "Transfer privati in Puglia",
                    en ? "The regional page: both airports, the towns and the distances."
                       : "La pagina regionale: i due aeroporti, i centri e le distanze."],
                  ["monopoli", en ? "Monopoli" : "Monopoli",
                    en ? "The harbour town down the coast, and a long shoreline either side of it."
                       : "La città di porto più a sud, con molta costa da entrambi i lati."],
                  ["salento", en ? "Salento" : "Salento",
                    en ? "Much further south — the peninsula, and how many journeys a week there takes."
                       : "Molto più a sud: la penisola, e quanti spostamenti serve farci in una settimana."],
                ] as const
              ).map(([id, title, blurb]) => (
                <li
                  key={id}
                  className="border-t py-5"
                  style={{ borderColor: "var(--po-rule)" }}
                >
                  <Link
                    href={pathFor(id, locale)}
                    className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline"
                    style={{ color: "var(--po-ink)" }}
                  >
                    {title}
                  </Link>
                  <p className="mt-2 type-small" style={{ color: "var(--po-muted)" }}>
                    {blurb}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ── Close ─────────────────────────────────────────────────────── */}
        <section className="pb-16 sm:pb-20">
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--po-deep-dark)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f1f7f7" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[58ch] type-lead" style={{ color: "#cfdee0" }}>
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
