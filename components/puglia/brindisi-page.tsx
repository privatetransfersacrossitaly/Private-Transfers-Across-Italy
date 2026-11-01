import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { brindisiPage } from "@/content/puglia";
import { isPublished, pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Brindisi — the southern gateway.
 *
 * ── How this differs from Bari and from the pillar ────────────────────────
 * Bari is an arrivals page: a dark hero and a numbered timeline, because an
 * arrival is a sequence. Brindisi answers a different question — everyone
 * who lands here wants to know how long the drive south is — so its spine
 * is a *measured ladder*: a scale running down the page with each
 * destination pegged to it, the rung widening as the distance grows. That
 * device exists only here.
 *
 * The hero is also structurally different: light, full-width, with the facts
 * set as a horizontal rule-separated row rather than Bari's reversed band,
 * and the lead sitting beside the heading rather than beneath it.
 *
 * ── Palette ───────────────────────────────────────────────────────────────
 * Salento is whitewashed walls, Ionian turquoise and baroque sandstone —
 * deliberately lighter and cooler than Bari's harbour blues. Scoped to this
 * component, never added to the global theme. The site's accent and focus
 * ring are untouched.
 *
 * ── Photography ───────────────────────────────────────────────────────────
 * None exists in the project for Brindisi, Lecce, Ostuni or Salento, and
 * substituting a photograph of somewhere else would be worse than none. The
 * Phase 3 report lists the images that would be needed.
 */

/** Whitewash, Ionian turquoise, baroque sandstone. */
const brindisiTheme = {
  "--bd-wash": "#fbfaf6",
  "--bd-wash-deep": "#f1efe7",
  // Darkened from #2e7f84, which measured 4.48:1 on --bd-wash and only
  // 4.07:1 on --bd-wash-deep. This value clears 4.5:1 on both, which it has
  // to: it carries the ladder's distance figures, not just decoration.
  "--bd-ionian": "#277073",
  "--bd-ionian-deep": "#1f5e63",
  "--bd-sandstone": "#b08344",
  "--bd-ink": "#26282a",
  "--bd-muted": "#555c5e",
  "--bd-rule": "#ddd8c9",
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
        <p className="type-label" style={{ color: "var(--bd-ionian)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-3 font-heading type-h2"
        style={{ color: "var(--bd-ink)" }}
      >
        {children}
      </h2>
    </div>
  );
}

export function BrindisiPageView({ locale }: { locale: Locale }) {
  const c = brindisiPage[locale];
  const quoteHref = quotePathFor(locale);
  const pillarHref = pathFor("puglia", locale);
  const bariHref = pathFor("bari", locale);

  return (
    <div style={brindisiTheme}>
      {/* ── Hero ──────────────────────────────────────────────────────────
          Light and horizontal: heading and lead side by side above a rule,
          with the facts as a row beneath it. Structurally the opposite of
          Bari's reversed, stacked hero. */}
      <header
        className="border-b"
        style={{ background: "var(--bd-wash)", borderColor: "var(--bd-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="brindisi" locale={locale} label={c.hero.eyebrow} />

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,34ch)] lg:items-end lg:gap-16">
            <div>
              <p className="type-label" style={{ color: "var(--bd-ionian)" }}>
                {c.hero.eyebrow}
              </p>
              <h1
                className="mt-3 font-heading type-h1"
                style={{ color: "var(--bd-ink)" }}
              >
                {c.hero.h1}
              </h1>
            </div>
            <p className="type-body" style={{ color: "var(--bd-muted)" }}>
              {c.hero.lead}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#bari-or-brindisi" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--bd-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--bd-muted)" }}>
                  {f.label}
                </dt>
                <dd
                  className="mt-1 type-small font-medium"
                  style={{ color: "var(--bd-ink)" }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--bd-wash)" }}>
        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.intro.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--bd-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The distance ladder ────────────────────────────────────────
            This page's signature device. Each stop is a rung pegged to a
            scale running down the left; the coloured bar widens as the
            distance grows, so the shape of the region is legible before a
            word is read. The bar is decorative — every figure it encodes is
            also written out — so it is hidden from assistive technology
            rather than given a value it cannot honestly report, since the
            underlying distances are ranges, not points. */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--bd-rule)", background: "var(--bd-wash-deep)" }}
        >
          <Container size="content">
            <Heading eyebrow="BDS">{c.ladder.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--bd-muted)" }}>
              {c.ladder.lead}
            </p>

            <ol className="mt-10">
              {c.ladder.stops.map((stop, i) => {
                const live = stop.id !== null && isPublished(stop.id);
                // Widths grow with position in the ladder, which is ordered
                // by distance. A proportional scale would imply a precision
                // the sources do not support.
                const width = 34 + i * 16;
                const name = (
                  <span className="font-heading type-h3" style={{ color: "var(--bd-ink)" }}>
                    {stop.name}
                  </span>
                );
                return (
                  <li
                    key={stop.name}
                    className="border-t py-6"
                    style={{ borderColor: "var(--bd-rule)" }}
                  >
                    <div className="grid gap-x-8 gap-y-3 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
                      <div>
                        {live && stop.id ? (
                          <Link
                            href={pathFor(stop.id, locale)}
                            className="underline decoration-1 underline-offset-4 hover:no-underline"
                          >
                            {name}
                          </Link>
                        ) : (
                          name
                        )}
                        <p
                          className="mt-1 type-small font-medium"
                          style={{ color: "var(--bd-ionian)" }}
                        >
                          {stop.distance}
                        </p>
                        <p className="type-caption" style={{ color: "var(--bd-muted)" }}>
                          {stop.drive}
                        </p>
                      </div>
                      <div>
                        <div
                          aria-hidden="true"
                          className="h-1.5 rounded-full"
                          style={{
                            width: `${width}%`,
                            background: "var(--bd-ionian)",
                            opacity: 0.85,
                          }}
                        />
                        <p className="mt-3 type-small" style={{ color: "var(--bd-muted)" }}>
                          {stop.note}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p
              className="mt-8 max-w-[66ch] border-l-4 py-1 pl-5 type-small"
              style={{ borderColor: "var(--bd-sandstone)", color: "var(--bd-muted)" }}
            >
              {c.ladder.footnote}
            </p>
          </Container>
        </section>

        {/* ── Bari or Brindisi ──────────────────────────────────────────── */}
        <section id="bari-or-brindisi" className="scroll-mt-24 py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.versusBari.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--bd-muted)" }}>
              {c.versusBari.lead}
            </p>

            <p
              className="mt-8 max-w-[62ch] rounded-xl px-6 py-5 font-heading type-h3"
              style={{ background: "var(--bd-ionian-deep)", color: "#f4f8f8" }}
            >
              {c.versusBari.rule}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {c.versusBari.columns.map((col) => (
                <div
                  key={col.heading}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--bd-rule)", background: "var(--bd-wash-deep)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--bd-ink)" }}>
                    {col.heading}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {col.points.map((pt) => (
                      <li
                        key={pt}
                        className="border-t pt-2 type-small"
                        style={{ borderColor: "var(--bd-rule)", color: "var(--bd-muted)" }}
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[66ch] type-body" style={{ color: "var(--bd-muted)" }}>
              {c.versusBari.caveat}
            </p>

            <p className="mt-6 type-small" style={{ color: "var(--bd-muted)" }}>
              <Link
                href={bariHref}
                className="underline decoration-1 underline-offset-4 hover:no-underline"
                style={{ color: "var(--bd-ionian-deep)" }}
              >
                {locale === "en"
                  ? "Bari airport and cruise port transfers"
                  : "Transfer dall'aeroporto e dal porto di Bari"}
              </Link>
            </p>
          </Container>
        </section>

        {/* ── Leaving the airport ───────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--bd-rule)", background: "var(--bd-wash-deep)" }}
        >
          <Container size="content">
            <Heading>{c.airport.heading}</Heading>
            <div className="mt-6 max-w-[68ch] space-y-5">
              {c.airport.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--bd-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {c.airport.meeting.map((m) => (
                <div key={m.title}>
                  <h3
                    className="border-t pt-4 font-heading type-h3"
                    style={{ borderColor: "var(--bd-ionian)", color: "var(--bd-ink)" }}
                  >
                    {m.title}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--bd-muted)" }}>
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Lecce ─────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.lecce.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.lecce.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--bd-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Masserie ──────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--bd-rule)", background: "var(--bd-wash-deep)" }}
        >
          <Container size="content">
            <Heading>{c.masserie.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--bd-muted)" }}>
              {c.masserie.lead}
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
              <div className="space-y-5">
                {c.masserie.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--bd-muted)" }}>
                    {p}
                  </p>
                ))}
              </div>

              <div
                className="h-fit rounded-xl border p-6"
                style={{ borderColor: "var(--bd-sandstone)", background: "var(--bd-wash)" }}
              >
                <h3 className="font-heading type-h3" style={{ color: "var(--bd-ink)" }}>
                  {c.masserie.send.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {c.masserie.send.items.map((item) => (
                    <li
                      key={item}
                      className="border-t pt-3 type-small"
                      style={{ borderColor: "var(--bd-rule)", color: "var(--bd-muted)" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Two coasts ────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.coasts.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--bd-muted)" }}>
              {c.coasts.lead}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {c.coasts.sides.map((side) => (
                <div
                  key={side.heading}
                  className="rounded-xl border-t-4 border-x border-b p-6"
                  style={{
                    borderTopColor: "var(--bd-ionian)",
                    borderLeftColor: "var(--bd-rule)",
                    borderRightColor: "var(--bd-rule)",
                    borderBottomColor: "var(--bd-rule)",
                    background: "var(--bd-wash-deep)",
                  }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--bd-ink)" }}>
                    {side.heading}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--bd-muted)" }}>
                    {side.body}
                  </p>
                  <p
                    className="mt-4 border-t pt-3 type-caption"
                    style={{ borderColor: "var(--bd-rule)", color: "var(--bd-ionian-deep)" }}
                  >
                    {side.places}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--bd-rule)", background: "var(--bd-wash-deep)" }}
        >
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--bd-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--bd-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--bd-muted)" }}>
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
                  <h3 className="font-heading type-h3" style={{ color: "var(--bd-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--bd-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Elsewhere in Puglia ───────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--bd-rule)", background: "var(--bd-wash-deep)" }}
        >
          <Container size="content">
            <h2 className="font-heading type-h2" style={{ color: "var(--bd-ink)" }}>
              {locale === "en" ? "Elsewhere in Puglia" : "Altrove in Puglia"}
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              <li
                className="rounded-xl border p-6"
                style={{ borderColor: "var(--bd-rule)", background: "var(--bd-wash)" }}
              >
                <Link href={pillarHref} className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline" style={{ color: "var(--bd-ink)" }}>
                  {locale === "en" ? "Private transfers in Puglia" : "Transfer privati in Puglia"}
                </Link>
                <p className="mt-2 type-small" style={{ color: "var(--bd-muted)" }}>
                  {locale === "en"
                    ? "The regional page: both airports, the towns, and how the region fits together."
                    : "La pagina regionale: i due aeroporti, i centri e come si tiene insieme la regione."}
                </p>
              </li>
              <li
                className="rounded-xl border p-6"
                style={{ borderColor: "var(--bd-rule)", background: "var(--bd-wash)" }}
              >
                <Link href={bariHref} className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline" style={{ color: "var(--bd-ink)" }}>
                  {locale === "en" ? "Bari airport and cruise port" : "Aeroporto e porto di Bari"}
                </Link>
                <p className="mt-2 type-small" style={{ color: "var(--bd-muted)" }}>
                  {locale === "en"
                    ? "The northern airport, the cruise terminal, and the runs to Alberobello and Matera."
                    : "Lo scalo a nord, il terminal crociere e le tratte per Alberobello e Matera."}
                </p>
              </li>
            </ul>

            {/* Puglia and the Amalfi Coast are frequently booked as one trip,
                and the drive between them is long enough that people ask about
                it. Linking the Campania hub here is useful rather than
                decorative — it is the page that answers the other half. */}
            <p className="mt-6 type-small" style={{ color: "var(--bd-muted)" }}>
              {locale === "en"
                ? "Combining Puglia with the Amalfi Coast? See "
                : "State unendo la Puglia alla Costiera Amalfitana? Vedete "}
              <Link
                href={pathFor("naples", locale)}
                className="underline decoration-1 underline-offset-4 hover:no-underline"
                style={{ color: "var(--bd-ionian-deep)" }}
              >
                {locale === "en"
                  ? "Naples and Campania"
                  : "Napoli e la Campania"}
              </Link>
              {locale === "en" ? "." : "."}
            </p>
          </Container>
        </section>

        {/* ── Close ─────────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <Container size="content">
            <div
              className="rounded-2xl border px-7 py-10 sm:px-12 sm:py-14"
              style={{ borderColor: "var(--bd-ionian)", background: "var(--bd-wash-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "var(--bd-ink)" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "var(--bd-muted)" }}>
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
