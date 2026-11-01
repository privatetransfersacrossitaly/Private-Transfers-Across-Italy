import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { salentoPage } from "@/content/puglia";
import { isPublished, pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Salento — the peninsula, as a circuit.
 *
 * ── How this differs from the other nine ──────────────────────────────────
 * The cluster's other pages describe a place you go to. Salento is a place
 * you move around inside, so its organising idea is a **circuit**: the
 * destinations are laid out as a route down one coast, around the tip and
 * back up the other, each tagged with the sea it sits on. The coast tag is
 * the device — a small coloured marker, Adriatic or Ionian, that lets you
 * read the shape of the peninsula down the left edge without reading the
 * prose.
 *
 * The second device exists nowhere else in the cluster and is the most
 * useful thing on the page: a **journey counter**. Four trip shapes, each
 * with an honest range of how many transfers it actually takes, including
 * the one where the answer is "hire a car instead". No other page in this
 * site tells someone they probably need fewer of our journeys than they
 * think, and this one should, because in Salento it is true.
 *
 * ── The boundary this layout enforces ─────────────────────────────────────
 * Lecce must not be re-described here. The circuit gives it one entry among
 * five, in the same shape as the others, with a link out — and there is no
 * section on this page with room for a city description. The constraint is
 * in the structure, not in anyone's self-discipline.
 *
 * ── Palette ───────────────────────────────────────────────────────────────
 * Two seas, so genuinely two accent colours: Ionian turquoise and a deeper
 * Adriatic blue, on sand. It is the only two-accent page in the cluster,
 * which is appropriate for the only page about two coastlines. Scoped here;
 * nothing global changes.
 *
 * ── Photography ───────────────────────────────────────────────────────────
 * None exists. A sub-regional page covering five destinations across two
 * coasts is the page in the cluster that could use imagery most, and it has
 * none. Recorded in the Phase 5 report.
 */

/** Two seas on sand: Ionian turquoise, Adriatic blue. */
const salentoTheme = {
  "--sa-sand": "#faf8f2",
  "--sa-sand-deep": "#eeebe1",
  "--sa-ionian": "#1f6f72",
  "--sa-adriatic": "#27506f",
  "--sa-ink": "#23241f",
  "--sa-muted": "#54564c",
  "--sa-rule": "#dbd6c7",
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
        <p className="type-label" style={{ color: "var(--sa-ionian)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--sa-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

export function SalentoPageView({ locale }: { locale: Locale }) {
  const c = salentoPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  // The coast tag drives the marker colour. Matching on the localised
  // string keeps the content files free of presentation tokens.
  const coastTone = (coast: string) => {
    const k = coast.toLowerCase();
    if (k.startsWith("ion")) return "var(--sa-ionian)";
    if (k.startsWith("adri")) return "var(--sa-adriatic)";
    return "var(--sa-muted)";
  };

  return (
    <div style={salentoTheme}>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <header
        className="border-b"
        style={{ background: "var(--sa-sand)", borderColor: "var(--sa-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="salento" locale={locale} label={c.hero.eyebrow} />

          <div className="mt-9 max-w-[58ch]">
            {/* Two bars, two seas — the page's colour system stated once up
                front so the circuit markers read without a legend. */}
            <span aria-hidden="true" className="flex gap-1.5">
              <span
                className="block h-1.5 w-14 rounded-full"
                style={{ background: "var(--sa-adriatic)" }}
              />
              <span
                className="block h-1.5 w-14 rounded-full"
                style={{ background: "var(--sa-ionian)" }}
              />
            </span>
            <p className="mt-5 type-label" style={{ color: "var(--sa-ionian)" }}>
              {c.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-heading type-h1" style={{ color: "var(--sa-ink)" }}>
              {c.hero.h1}
            </h1>
            <p className="mt-6 type-lead" style={{ color: "var(--sa-muted)" }}>
              {c.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
              <Cta href="#planning" variant="outline">
                {c.hero.secondaryCta}
              </Cta>
            </div>
          </div>

          <dl className="mt-11 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.hero.facts.map((f) => (
              <div
                key={f.label}
                className="border-t pt-3"
                style={{ borderColor: "var(--sa-rule)" }}
              >
                <dt className="type-caption" style={{ color: "var(--sa-muted)" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "var(--sa-ink)" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--sa-sand)" }}>
        {/* ── What it is ────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.definition.heading}</Heading>
            <div className="mt-7 max-w-[68ch] space-y-5">
              {c.definition.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--sa-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
            <dl className="mt-11 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.definition.bounds.map((b) => (
                <div key={b.term}>
                  <dt
                    className="border-t pt-4 font-heading type-h3"
                    style={{ borderColor: "var(--sa-adriatic)", color: "var(--sa-ink)" }}
                  >
                    {b.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--sa-muted)" }}>
                    {b.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* ── The circuit ────────────────────────────────────────────────
            The page's signature device. Each stop carries a coast marker —
            Adriatic blue, Ionian turquoise — so the shape of the peninsula
            is legible down the left edge before a word is read. */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--sa-rule)", background: "var(--sa-sand-deep)" }}
        >
          <Container size="content">
            <Heading eyebrow={en ? "Down one coast, around the tip, back up the other" : "Giù da una costa, intorno alla punta, su dall'altra"}>
              {c.circuit.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--sa-muted)" }}>
              {c.circuit.lead}
            </p>

            <ol className="mt-11">
              {c.circuit.stops.map((stop, i) => {
                const tone = coastTone(stop.coast);
                return (
                  <li
                    key={stop.name}
                    className="grid gap-x-8 gap-y-3 border-t py-7 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
                    style={{ borderColor: "var(--sa-rule)" }}
                  >
                    <div>
                      <span aria-hidden="true" className="flex items-center gap-2">
                        <span
                          className="block size-2.5 rounded-full"
                          style={{ background: tone }}
                        />
                        <span
                          className="block h-px w-8"
                          style={{ background: tone, opacity: 0.5 }}
                        />
                      </span>
                      <h3
                        className="mt-3 font-heading type-h3"
                        style={{ color: "var(--sa-ink)" }}
                      >
                        {stop.name}
                      </h3>
                      <p className="mt-1 type-small font-medium" style={{ color: tone }}>
                        {stop.coast}
                      </p>
                      <p className="type-caption" style={{ color: "var(--sa-muted)" }}>
                        {stop.reach}
                      </p>
                    </div>
                    <p className="type-small" style={{ color: "var(--sa-muted)" }}>
                      {stop.body}
                      {/* Lecce is the one stop that must link out rather than
                          be described here. */}
                      {i === c.circuit.stops.length - 1 && isPublished("lecce") ? (
                        <>
                          {" "}
                          <Link
                            href={pathFor("lecce", locale)}
                            className="underline decoration-1 underline-offset-4 hover:no-underline"
                            style={{ color: "var(--sa-adriatic)" }}
                          >
                            {en ? "Lecce transfers" : "Transfer a Lecce"}
                          </Link>
                        </>
                      ) : null}
                    </p>
                  </li>
                );
              })}
            </ol>

            <p
              className="mt-9 max-w-[68ch] border-l-4 py-1 pl-5 type-small"
              style={{ borderColor: "var(--sa-ionian)", color: "var(--sa-muted)" }}
            >
              {c.circuit.footnote}
            </p>
          </Container>
        </section>

        {/* ── The tip ───────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.tip.heading}</Heading>
            <div className="mt-7 space-y-5">
              {c.tip.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--sa-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The journey counter ────────────────────────────────────────
            The most useful thing on the page, and the only place on this
            site that tells someone they may need fewer journeys than they
            expect. */}
        <section
          id="planning"
          className="scroll-mt-24 border-y py-14 sm:py-18"
          style={{ borderColor: "var(--sa-rule)", background: "var(--sa-sand-deep)" }}
        >
          <Container size="content">
            <Heading>{c.planning.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--sa-muted)" }}>
              {c.planning.lead}
            </p>
            <div className="mt-7 max-w-[68ch] space-y-5">
              {c.planning.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--sa-muted)" }}>
                  {p}
                </p>
              ))}
            </div>

            <ul className="mt-11 grid gap-5 sm:grid-cols-2">
              {c.planning.patterns.map((pat) => (
                <li
                  key={pat.shape}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--sa-rule)", background: "var(--sa-sand)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--sa-ink)" }}>
                    {pat.shape}
                  </h3>
                  <p
                    className="mt-2 type-small font-medium"
                    style={{ color: "var(--sa-ionian)" }}
                  >
                    {pat.journeys}
                  </p>
                  <p className="mt-3 type-small" style={{ color: "var(--sa-muted)" }}>
                    {pat.body}
                  </p>
                </li>
              ))}
            </ul>

            <p
              className="mt-9 max-w-[68ch] rounded-xl px-6 py-5 type-body"
              style={{ background: "var(--sa-adriatic)", color: "#eef3f7" }}
            >
              {c.planning.note}
            </p>
          </Container>
        </section>

        {/* ── Basing ────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.basing.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--sa-muted)" }}>
              {c.basing.lead}
            </p>
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {c.basing.options.map((o) => {
                const live = o.id !== null && isPublished(o.id);
                const name = (
                  <span className="font-heading type-h3" style={{ color: "var(--sa-ink)" }}>
                    {o.name}
                  </span>
                );
                return (
                  <li
                    key={o.name}
                    className="border-t pt-5"
                    style={{ borderColor: "var(--sa-ionian)" }}
                  >
                    {live && o.id ? (
                      <Link
                        href={pathFor(o.id, locale)}
                        className="underline decoration-1 underline-offset-4 hover:no-underline"
                      >
                        {name}
                      </Link>
                    ) : (
                      name
                    )}
                    <p className="mt-3 type-small" style={{ color: "var(--sa-muted)" }}>
                      {o.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--sa-rule)", background: "var(--sa-sand-deep)" }}
        >
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--sa-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--sa-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--sa-muted)" }}>
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
                  <h3 className="font-heading type-h3" style={{ color: "var(--sa-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--sa-muted)" }}>
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
          style={{ borderColor: "var(--sa-rule)", background: "var(--sa-sand-deep)" }}
        >
          <Container size="content">
            <h2 className="font-heading type-h2" style={{ color: "var(--sa-ink)" }}>
              {en ? "Elsewhere in Puglia" : "Altrove in Puglia"}
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-3">
              {(
                [
                  ["puglia", en ? "Private transfers in Puglia" : "Transfer privati in Puglia",
                    en ? "The regional page: both airports and how the whole region fits together."
                       : "La pagina regionale: i due aeroporti e come si tiene insieme la regione."],
                  ["brindisi", en ? "Brindisi airport" : "Aeroporto di Brindisi",
                    en ? "Where almost every Salento holiday starts, and the drive south."
                       : "Da dove comincia quasi ogni vacanza salentina, e i tragitti verso sud."],
                  ["ostuni", en ? "Ostuni" : "Ostuni",
                    en ? "Just outside Salento, despite what the booking says — and worth knowing."
                       : "Appena fuori dal Salento, checché dica la prenotazione — e conviene saperlo."],
                ] as const
              ).map(([id, title, blurb]) => (
                <li
                  key={id}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--sa-rule)", background: "var(--sa-sand)" }}
                >
                  <Link
                    href={pathFor(id, locale)}
                    className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline"
                    style={{ color: "var(--sa-ink)" }}
                  >
                    {title}
                  </Link>
                  <p className="mt-2 type-small" style={{ color: "var(--sa-muted)" }}>
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
              className="rounded-2xl border px-7 py-10 sm:px-12 sm:py-14"
              style={{ borderColor: "var(--sa-ionian)", background: "var(--sa-sand-deep)" }}
            >
              <span aria-hidden="true" className="flex gap-1.5">
                <span
                  className="block h-1.5 w-14 rounded-full"
                  style={{ background: "var(--sa-adriatic)" }}
                />
                <span
                  className="block h-1.5 w-14 rounded-full"
                  style={{ background: "var(--sa-ionian)" }}
                />
              </span>
              <h2 className="mt-5 font-heading type-h2" style={{ color: "var(--sa-ink)" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "var(--sa-muted)" }}>
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
