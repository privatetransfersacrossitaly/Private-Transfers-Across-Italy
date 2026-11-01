import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { alberobelloPage } from "@/content/puglia";
import { isPublished, pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Alberobello — the listed trulli districts.
 *
 * ── How this differs from the rest of the cluster ─────────────────────────
 * Four pages precede this one and each has its own organising idea: a
 * sequence (Bari), a scale (Brindisi), a symmetry (Lecce), a split
 * (Ostuni). Alberobello's is a **plaque**. The town is a World Heritage
 * property, and the page opens by saying exactly what is inscribed, under
 * which criteria, over how many hectares — set as a monument tablet in
 * reversed type, the way a listing is posted on a wall.
 *
 * That device does real work rather than decorating: it separates the facts
 * that come from the official listing from the much softer numbers that
 * circulate in travel writing, and the note beneath it says which is which.
 *
 * The second device is the stacked roof motif on the district cards — three
 * narrowing bars above each heading, a conical roof reduced to its
 * courses. It is drawn in CSS, costs nothing, and appears nowhere else.
 *
 * ── Palette ───────────────────────────────────────────────────────────────
 * Dry limestone and the grey of a trullo's stone roof, against the
 * whitewash of the walls, with the valley's green as the one warm note.
 * Cooler and greyer than Lecce's honey, darker than Ostuni's near-white.
 * Scoped to this component; nothing is added to the global theme.
 *
 * ── Photography ───────────────────────────────────────────────────────────
 * None. A page about a UNESCO site with no photograph of it is a real
 * shortcoming and worth stating plainly rather than papering over: the
 * project's image set holds nothing of Alberobello, and a stock trullo is
 * not something we can license here. The Phase 4 report lists the images
 * this page should eventually carry.
 */

/** Dry limestone, trullo-roof grey, whitewash, valley green. */
const alberobelloTheme = {
  "--al-wash": "#f8f7f4",
  "--al-wash-deep": "#eceae4",
  // Darkened from #6d6a62, which measured 4.49:1 on --al-wash-deep — a
  // hair under the 4.5:1 the district scale line needs.
  "--al-stone": "#686560",
  "--al-slate": "#3d4044",
  "--al-valley": "#4f6b43",
  "--al-ink": "#24241f",
  "--al-muted": "#56544c",
  "--al-rule": "#d6d3ca",
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
        <p className="type-label" style={{ color: "var(--al-valley)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--al-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

/** Three narrowing courses: a conical roof, reduced. Decorative only. */
function RoofMark({ tone }: { tone: string }) {
  return (
    <span aria-hidden="true" className="flex flex-col items-start gap-1">
      {[3.5, 2.5, 1.5].map((w) => (
        <span
          key={w}
          className="block h-1 rounded-full"
          style={{ width: `${w}rem`, background: tone }}
        />
      ))}
    </span>
  );
}

export function AlberobelloPageView({ locale }: { locale: Locale }) {
  const c = alberobelloPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={alberobelloTheme}>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <header
        className="border-b"
        style={{ background: "var(--al-wash)", borderColor: "var(--al-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="alberobello" locale={locale} label={c.hero.eyebrow} />

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-16">
            <div>
              <RoofMark tone="var(--al-slate)" />
              <p className="mt-5 type-label" style={{ color: "var(--al-valley)" }}>
                {c.hero.eyebrow}
              </p>
              <h1
                className="mt-3 font-heading type-h1"
                style={{ color: "var(--al-ink)" }}
              >
                {c.hero.h1}
              </h1>
              <p className="mt-6 type-lead" style={{ color: "var(--al-muted)" }}>
                {c.hero.lead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
                <Cta href="#districts" variant="outline">
                  {c.hero.secondaryCta}
                </Cta>
              </div>
            </div>

            <dl
              className="h-fit rounded-xl border p-6"
              style={{ borderColor: "var(--al-rule)", background: "var(--al-wash-deep)" }}
            >
              {c.hero.facts.map((f, i) => (
                <div
                  key={f.label}
                  className={i === 0 ? "" : "mt-4 border-t pt-4"}
                  style={{ borderColor: "var(--al-rule)" }}
                >
                  <dt className="type-caption" style={{ color: "var(--al-muted)" }}>
                    {f.label}
                  </dt>
                  <dd
                    className="mt-1 type-small font-medium"
                    style={{ color: "var(--al-ink)" }}
                  >
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--al-wash)" }}>
        {/* ── The listing plaque ─────────────────────────────────────────
            The page's signature device. Reversed out of slate, like a
            tablet on a wall, and carrying only what the official listing
            records. The note below draws the line between that and the
            softer figures used later on the page. */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-9 sm:px-10 sm:py-11"
              style={{ background: "var(--al-slate)" }}
            >
              <h2 className="type-label" style={{ color: "#aab3ab" }}>
                {c.listing.heading}
              </h2>
              <p
                className="mt-4 font-heading type-h2"
                style={{ color: "#f6f5f1" }}
              >
                {c.listing.officialName}
              </p>
              <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
                {c.listing.rows.map((row) => (
                  <div
                    key={row.label}
                    className="border-t pt-3"
                    style={{ borderColor: "#5a5e62" }}
                  >
                    <dt className="type-caption" style={{ color: "#a7aeb3" }}>
                      {row.label}
                    </dt>
                    <dd
                      className="mt-1 type-small font-medium"
                      style={{ color: "#f1f0ec" }}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <p
              className="mt-5 max-w-[70ch] type-small"
              style={{ color: "var(--al-muted)" }}
            >
              {c.listing.note}
            </p>
          </Container>
        </section>

        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--al-rule)", background: "#fcfbf9" }}
        >
          <Container size="prose">
            <Heading>{c.intro.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--al-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The two districts ──────────────────────────────────────────
            Each card carries the roof mark, in slate for the busy district
            and valley green for the quiet one. */}
        <section id="districts" className="scroll-mt-24 py-14 sm:py-18">
          <Container size="content">
            <Heading eyebrow={en ? "Rione Monti · Aia Piccola" : "Rione Monti · Aia Piccola"}>
              {c.districts.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--al-muted)" }}>
              {c.districts.lead}
            </p>

            <div className="mt-11 grid gap-6 md:grid-cols-2">
              {c.districts.items.map((d, i) => (
                <div
                  key={d.name}
                  className="rounded-xl border p-7"
                  style={{
                    borderColor: "var(--al-rule)",
                    background: i === 0 ? "var(--al-wash-deep)" : "#fcfbf9",
                  }}
                >
                  <RoofMark tone={i === 0 ? "var(--al-slate)" : "var(--al-valley)"} />
                  <h3
                    className="mt-5 font-heading type-h3"
                    style={{ color: "var(--al-ink)" }}
                  >
                    {d.name}
                  </h3>
                  <p
                    className="mt-1 type-small font-medium"
                    style={{ color: i === 0 ? "var(--al-stone)" : "var(--al-valley)" }}
                  >
                    {d.scale} · {d.character}
                  </p>
                  <p className="mt-4 type-small" style={{ color: "var(--al-muted)" }}>
                    {d.body}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5 type-small"
              style={{ borderColor: "var(--al-valley)", color: "var(--al-muted)" }}
            >
              {c.districts.note}
            </p>
          </Container>
        </section>

        {/* ── Arriving ──────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--al-rule)", background: "var(--al-wash-deep)" }}
        >
          <Container size="content">
            <Heading>{c.arriving.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--al-muted)" }}>
              {c.arriving.lead}
            </p>

            <ul className="mt-10">
              {c.arriving.routes.map((r) => (
                <li
                  key={r.from}
                  className="grid gap-x-8 gap-y-2 border-t py-6 sm:grid-cols-[14rem_minmax(0,1fr)]"
                  style={{ borderColor: "var(--al-rule)" }}
                >
                  <div>
                    <h3 className="font-heading type-h3" style={{ color: "var(--al-ink)" }}>
                      {r.from}
                    </h3>
                    <p
                      className="mt-1 type-small font-medium"
                      style={{ color: "var(--al-valley)" }}
                    >
                      {r.distance}
                    </p>
                  </div>
                  <p className="type-small" style={{ color: "var(--al-muted)" }}>
                    {r.body}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[68ch] type-small" style={{ color: "var(--al-muted)" }}>
              {c.arriving.note}
            </p>

            <p className="mt-6 type-small" style={{ color: "var(--al-muted)" }}>
              <Link
                href={pathFor("bari", locale)}
                className="underline decoration-1 underline-offset-4 hover:no-underline"
                style={{ color: "var(--al-valley)" }}
              >
                {en ? "Bari airport and cruise port" : "Aeroporto e porto di Bari"}
              </Link>
              {" · "}
              <Link
                href={pathFor("brindisi", locale)}
                className="underline decoration-1 underline-offset-4 hover:no-underline"
                style={{ color: "var(--al-valley)" }}
              >
                {en ? "Brindisi airport" : "Aeroporto di Brindisi"}
              </Link>
            </p>
          </Container>
        </section>

        {/* ── The day visit ─────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.dayVisit.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--al-muted)" }}>
              {c.dayVisit.lead}
            </p>
            <div className="mt-7 max-w-[68ch] space-y-5">
              {c.dayVisit.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--al-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-11 grid gap-7 md:grid-cols-4">
              {c.dayVisit.steps.map((s) => (
                <li key={s.title}>
                  <h3
                    className="border-t pt-4 font-heading type-h3"
                    style={{ borderColor: "var(--al-slate)", color: "var(--al-ink)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--al-muted)" }}>
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ── Staying ───────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--al-rule)", background: "#fcfbf9" }}
        >
          <Container size="prose">
            <Heading>{c.staying.heading}</Heading>
            <p className="mt-4 type-lead" style={{ color: "var(--al-muted)" }}>
              {c.staying.lead}
            </p>
            <div className="mt-6 space-y-5">
              {c.staying.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--al-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The valley ────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.valley.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--al-muted)" }}>
              {c.valley.lead}
            </p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.valley.towns.map((t) => {
                const live = t.id !== null && isPublished(t.id);
                const name = (
                  <span className="font-heading type-h3" style={{ color: "var(--al-ink)" }}>
                    {t.name}
                  </span>
                );
                return (
                  <li
                    key={t.name}
                    className="rounded-xl border p-6"
                    style={{ borderColor: "var(--al-rule)", background: "var(--al-wash-deep)" }}
                  >
                    {live && t.id ? (
                      <Link
                        href={pathFor(t.id, locale)}
                        className="underline decoration-1 underline-offset-4 hover:no-underline"
                      >
                        {name}
                      </Link>
                    ) : (
                      name
                    )}
                    <p className="mt-2 type-small" style={{ color: "var(--al-muted)" }}>
                      {t.note}
                    </p>
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 max-w-[68ch] type-small" style={{ color: "var(--al-muted)" }}>
              {c.valley.footnote}
            </p>
          </Container>
        </section>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--al-rule)", background: "var(--al-wash-deep)" }}
        >
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--al-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--al-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--al-muted)" }}>
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
                  <h3 className="font-heading type-h3" style={{ color: "var(--al-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--al-muted)" }}>
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
          style={{ borderColor: "var(--al-rule)", background: "#fcfbf9" }}
        >
          <Container size="content">
            <h2 className="font-heading type-h2" style={{ color: "var(--al-ink)" }}>
              {en ? "Elsewhere in Puglia" : "Altrove in Puglia"}
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-3">
              {(
                [
                  ["puglia", en ? "Private transfers in Puglia" : "Transfer privati in Puglia",
                    en ? "The regional page: both airports and how far apart everything is."
                       : "La pagina regionale: i due aeroporti e quanto dista ogni cosa."],
                  ["bari", en ? "Bari airport and cruise port" : "Aeroporto e porto di Bari",
                    en ? "The nearest airport, and the terminal most excursions start from."
                       : "Lo scalo più vicino e il terminal da cui partono le escursioni."],
                  ["ostuni", en ? "Ostuni and the masserie" : "Ostuni e le masserie",
                    en ? "Beyond the southern edge of the valley."
                       : "Oltre il margine sud della valle."],
                ] as const
              ).map(([id, title, blurb]) => (
                <li
                  key={id}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--al-rule)", background: "var(--al-wash)" }}
                >
                  <Link
                    href={pathFor(id, locale)}
                    className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline"
                    style={{ color: "var(--al-ink)" }}
                  >
                    {title}
                  </Link>
                  <p className="mt-2 type-small" style={{ color: "var(--al-muted)" }}>
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
              style={{ borderColor: "var(--al-slate)", background: "#fcfbf9" }}
            >
              <RoofMark tone="var(--al-slate)" />
              <h2 className="mt-5 font-heading type-h2" style={{ color: "var(--al-ink)" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "var(--al-muted)" }}>
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
