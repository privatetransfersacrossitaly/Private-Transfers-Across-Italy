import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { ostuniPage } from "@/content/puglia";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Ostuni — the white town and its countryside.
 *
 * ── How this differs from the rest of the cluster ─────────────────────────
 * Bari is a sequence, Brindisi a scale, Lecce a symmetry. Ostuni is a
 * **split**: the page's organising idea is that there are two Ostunis a few
 * kilometres apart — the citadel on the hill and the masserie below it —
 * and that almost every question about a transfer here resolves to which of
 * the two you mean. So the signature device is a diptych: a pair of panels
 * divided by a single vertical rule, the left one white and the right one
 * olive-tinted, which recurs as the page's visual logic.
 *
 * Nothing here repeats Lecce's centred rules, Bari's numbered rail or
 * Brindisi's widening bars.
 *
 * ── Palette ───────────────────────────────────────────────────────────────
 * The town is called the White Town for its white walls and white-painted
 * architecture, so this is the palest page in the cluster: near-white
 * ground, a cool lime-plaster shadow for structure, and olive for the
 * countryside half of every split. Scoped to this component, never global.
 *
 * ── Photography ───────────────────────────────────────────────────────────
 * None exists. Ostuni is one of the most photographed towns in Italy and
 * the project holds not one image of it; a white hill town is also the page
 * that most obviously wants a photograph. It is typographic instead, and
 * the Phase 4 report records the gap.
 */

/** Whitewash, lime-plaster shadow, olive. */
const ostuniTheme = {
  "--os-white": "#fcfcfa",
  "--os-shade": "#eef0ee",
  "--os-shade-deep": "#e2e6e3",
  "--os-olive": "#5e6b3a",
  "--os-olive-deep": "#434d29",
  "--os-ink": "#232521",
  "--os-muted": "#53584f",
  "--os-rule": "#d3d8d2",
} as React.CSSProperties;

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
        <p className="type-label" style={{ color: "var(--os-olive)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--os-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

export function OstuniPageView({ locale }: { locale: Locale }) {
  const c = ostuniPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={ostuniTheme}>
      {/* ── Hero ──────────────────────────────────────────────────────────
          Almost entirely white, with the facts set as a single row of thin
          columns divided by rules — the first statement of the page's
          dividing-line idea. */}
      <header
        className="border-b"
        style={{ background: "var(--os-white)", borderColor: "var(--os-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="ostuni" locale={locale} label={c.hero.eyebrow} />

          <div className="mt-9 max-w-[60ch]">
            <p className="type-label" style={{ color: "var(--os-olive)" }}>
              {c.hero.eyebrow}
            </p>
            <h1
              className="mt-3 font-heading type-h1"
              style={{ color: "var(--os-ink)" }}
            >
              {c.hero.h1}
            </h1>
            <p className="mt-6 type-lead" style={{ color: "var(--os-muted)" }}>
              {c.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
              <Cta href="#masserie" variant="outline">
                {c.hero.secondaryCta}
              </Cta>
            </div>
          </div>

          <dl className="mt-11 grid gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.hero.facts.map((f, i) => (
              <div
                key={f.label}
                className={i === 0 ? "lg:pr-7" : "lg:border-l lg:px-7"}
                style={{ borderColor: "var(--os-rule)" }}
              >
                <dt className="type-caption" style={{ color: "var(--os-muted)" }}>
                  {f.label}
                </dt>
                <dd
                  className="mt-1 type-small font-medium"
                  style={{ color: "var(--os-ink)" }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--os-white)" }}>
        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.intro.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--os-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The diptych ────────────────────────────────────────────────
            The page's signature device. Two halves, one rule between them,
            the right one olive-tinted. On a phone the rule becomes a
            horizontal divider and the halves stack — the idea survives the
            reflow because it was never about the columns. */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--os-rule)", background: "var(--os-shade)" }}
        >
          <Container size="content">
            <Heading>{c.twoWorlds.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--os-muted)" }}>
              {c.twoWorlds.lead}
            </p>

            <div className="mt-11 grid md:grid-cols-2">
              {([c.twoWorlds.town, c.twoWorlds.country] as const).map((side, i) => {
                const country = i === 1;
                return (
                  <div
                    key={side.heading}
                    className={
                      country
                        ? "border-t pt-9 md:border-t-0 md:border-l md:pt-0 md:pl-9"
                        : "pb-9 md:pb-0 md:pr-9"
                    }
                    style={{
                      borderColor: "var(--os-rule)",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="block h-1 w-14 rounded-full"
                      style={{
                        background: country ? "var(--os-olive)" : "var(--os-ink)",
                      }}
                    />
                    <h3
                      className="mt-5 font-heading type-h3"
                      style={{ color: "var(--os-ink)" }}
                    >
                      {side.heading}
                    </h3>
                    <p className="mt-3 type-body" style={{ color: "var(--os-muted)" }}>
                      {side.body}
                    </p>
                    <ul className="mt-6">
                      {side.points.map((pt) => (
                        <li
                          key={pt}
                          className="border-t py-3 type-small"
                          style={{
                            borderColor: "var(--os-rule)",
                            color: country ? "var(--os-olive-deep)" : "var(--os-muted)",
                          }}
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ── Masserie ──────────────────────────────────────────────────── */}
        <section id="masserie" className="scroll-mt-24 py-14 sm:py-18">
          <Container size="content">
            <Heading eyebrow={en ? "The country half" : "La metà di campagna"}>
              {c.masserie.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--os-muted)" }}>
              {c.masserie.lead}
            </p>

            <div className="mt-7 max-w-[68ch] space-y-5">
              {c.masserie.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--os-muted)" }}>
                  {p}
                </p>
              ))}
            </div>

            {/* The four failure modes, as a tight grid — stated as problems
                rather than as reasons to buy something. */}
            <ul className="mt-11 grid gap-px sm:grid-cols-2">
              {c.masserie.problems.map((p) => (
                <li
                  key={p.title}
                  className="border-t pt-5"
                  style={{ borderColor: "var(--os-olive)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--os-ink)" }}>
                    {p.title}
                  </h3>
                  <p className="mt-2 pb-6 type-small" style={{ color: "var(--os-muted)" }}>
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>

            <div
              className="mt-10 rounded-xl border p-7"
              style={{ borderColor: "var(--os-olive)", background: "var(--os-shade)" }}
            >
              <h3 className="font-heading type-h3" style={{ color: "var(--os-ink)" }}>
                {c.masserie.send.heading}
              </h3>
              <ul className="mt-5 grid gap-x-10 sm:grid-cols-2">
                {c.masserie.send.items.map((item) => (
                  <li
                    key={item}
                    className="border-t py-3 type-small"
                    style={{ borderColor: "var(--os-rule)", color: "var(--os-muted)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* ── Airports ──────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--os-rule)", background: "var(--os-shade)" }}
        >
          <Container size="content">
            <Heading>{c.airports.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--os-muted)" }}>
              {c.airports.lead}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {c.airports.options.map((o) => (
                <div
                  key={o.airport}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--os-rule)", background: "var(--os-white)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--os-ink)" }}>
                    {o.airport}
                  </h3>
                  <p
                    className="mt-1 type-small font-medium"
                    style={{ color: "var(--os-olive-deep)" }}
                  >
                    {o.distance}
                  </p>
                  <p className="mt-3 type-small" style={{ color: "var(--os-muted)" }}>
                    {o.body}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-8 max-w-[66ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--os-olive)", color: "var(--os-ink)" }}
            >
              {c.airports.note}
            </p>

            <p className="mt-6 type-small" style={{ color: "var(--os-muted)" }}>
              <Link
                href={pathFor("brindisi", locale)}
                className="underline decoration-1 underline-offset-4 hover:no-underline"
                style={{ color: "var(--os-olive-deep)" }}
              >
                {en ? "Brindisi airport transfers" : "Transfer dall'aeroporto di Brindisi"}
              </Link>
              {en ? " · " : " · "}
              <Link
                href={pathFor("bari", locale)}
                className="underline decoration-1 underline-offset-4 hover:no-underline"
                style={{ color: "var(--os-olive-deep)" }}
              >
                {en ? "Bari airport and cruise port" : "Aeroporto e porto di Bari"}
              </Link>
            </p>
          </Container>
        </section>

        {/* ── Weddings ──────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.weddings.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--os-muted)" }}>
              {c.weddings.lead}
            </p>
            <div className="mt-7 max-w-[68ch] space-y-5">
              {c.weddings.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--os-muted)" }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Four phases across the wedding, as a horizontal band — a
                sequence in time rather than a list of services. */}
            <ol className="mt-11 grid gap-7 md:grid-cols-4">
              {c.weddings.phases.map((phase) => (
                <li key={phase.title}>
                  <h3
                    className="border-t pt-4 font-heading type-h3"
                    style={{ borderColor: "var(--os-olive)", color: "var(--os-ink)" }}
                  >
                    {phase.title}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--os-muted)" }}>
                    {phase.body}
                  </p>
                </li>
              ))}
            </ol>

            <p
              className="mt-10 max-w-[68ch] rounded-xl px-6 py-5 type-body"
              style={{ background: "var(--os-shade-deep)", color: "var(--os-ink)" }}
            >
              {c.weddings.limits}
            </p>
          </Container>
        </section>

        {/* ── Luxury ────────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--os-rule)", background: "var(--os-shade)" }}
        >
          <Container size="prose">
            <Heading>{c.luxury.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.luxury.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--os-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--os-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--os-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--os-muted)" }}>
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
          style={{ borderColor: "var(--os-rule)", background: "var(--os-shade)" }}
        >
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--os-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--os-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Elsewhere ─────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <h2 className="font-heading type-h2" style={{ color: "var(--os-ink)" }}>
              {en ? "Elsewhere in Puglia" : "Altrove in Puglia"}
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-3">
              {(
                [
                  ["puglia", en ? "Private transfers in Puglia" : "Transfer privati in Puglia",
                    en ? "The regional page: both airports, the towns, the distances."
                       : "La pagina regionale: i due aeroporti, i centri, le distanze."],
                  ["alberobello", en ? "Alberobello and the trulli" : "Alberobello e i trulli",
                    en ? "Up in the Valle d'Itria, north of here."
                       : "Su in Valle d'Itria, a nord di qui."],
                  ["lecce", en ? "Lecce" : "Lecce",
                    en ? "The baroque city further south, and the usual Salento base."
                       : "La città barocca più a sud, base abituale per il Salento."],
                ] as const
              ).map(([id, title, blurb]) => (
                <li
                  key={id}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--os-rule)", background: "var(--os-shade)" }}
                >
                  <Link
                    href={pathFor(id, locale)}
                    className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline"
                    style={{ color: "var(--os-ink)" }}
                  >
                    {title}
                  </Link>
                  <p className="mt-2 type-small" style={{ color: "var(--os-muted)" }}>
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
              style={{ background: "var(--os-olive-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f6f8f3" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#dde3d3" }}>
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
