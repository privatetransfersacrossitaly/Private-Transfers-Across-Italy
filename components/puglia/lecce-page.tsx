import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { leccePage } from "@/content/puglia";
import { isPublished, pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Lecce — the walled baroque city.
 *
 * ── How this differs from every other page in the cluster ─────────────────
 * The pillar is a pale typographic orientation document. Bari is a dark
 * arrivals page with a numbered timeline. Brindisi is a light page built on
 * a measured distance ladder. Lecce is none of those: it is **symmetrical**.
 * Baroque architecture is organised around a centre line, and so is this
 * page — the hero is centred between two rules, section headings are
 * centred with a rule either side, and the page's signature device is a row
 * of three arched panels for the three gates.
 *
 * The arch is drawn with border-radius on the top corners only, so it reads
 * as a gate without needing an image or an SVG, and it survives at phone
 * width where the three panels stack.
 *
 * ── Palette ───────────────────────────────────────────────────────────────
 * Lecce stone is a soft golden limestone, and the city is made of it almost
 * exclusively. The palette is therefore warm — honey, a deeper ochre for
 * rules, and a dark ecclesiastical brown for ink — against a pale cream.
 * Deliberately the warmest palette in the cluster; Bari is cold blue and
 * Ostuni is near-white. Scoped to this component, never global.
 *
 * ── Photography ───────────────────────────────────────────────────────────
 * None exists in the project for Lecce. Santa Croce's façade is the obvious
 * image this page wants and there isn't one, so the page holds its structure
 * typographically. The Phase 4 report lists what would be needed.
 */

/** Lecce stone: honey limestone, ochre, ecclesiastical brown. */
const lecceTheme = {
  "--le-cream": "#faf6ec",
  "--le-cream-deep": "#f2ebdb",
  "--le-honey": "#c08a3e",
  "--le-ochre": "#8a5f22",
  "--le-ink": "#2b2419",
  "--le-muted": "#5c5341",
  "--le-rule": "#ded2b8",
} as React.CSSProperties;

/** A centred heading with a rule running out either side of it. */
function CentredHeading({
  children,
  eyebrow,
}: {
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--le-ochre)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-3 font-heading type-h2"
        style={{ color: "var(--le-ink)" }}
      >
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="mx-auto mt-5 block h-px w-24"
        style={{ background: "var(--le-honey)" }}
      />
    </div>
  );
}

export function LeccePageView({ locale }: { locale: Locale }) {
  const c = leccePage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={lecceTheme}>
      {/* ── Hero ──────────────────────────────────────────────────────────
          Centred and framed, because the city is. The two rules above and
          below the title are the page's organising gesture and they recur
          at every section heading. */}
      <header
        className="border-b"
        style={{
          background:
            "linear-gradient(180deg, var(--le-cream) 0%, var(--le-cream-deep) 100%)",
          borderColor: "var(--le-rule)",
        }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="lecce" locale={locale} label={c.hero.eyebrow} />

          <div className="mx-auto mt-10 max-w-[56ch] text-center">
            <p className="type-label" style={{ color: "var(--le-ochre)" }}>
              {c.hero.eyebrow}
            </p>
            <span
              aria-hidden="true"
              className="mx-auto mt-5 block h-px w-full max-w-[18rem]"
              style={{ background: "var(--le-honey)" }}
            />
            <h1
              className="mt-6 font-heading type-h1"
              style={{ color: "var(--le-ink)" }}
            >
              {c.hero.h1}
            </h1>
            <span
              aria-hidden="true"
              className="mx-auto mt-6 block h-px w-full max-w-[18rem]"
              style={{ background: "var(--le-honey)" }}
            />
            <p className="mt-7 type-lead" style={{ color: "var(--le-muted)" }}>
              {c.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
              <Cta href="#gates" variant="outline">
                {c.hero.secondaryCta}
              </Cta>
            </div>
          </div>

          <dl
            className="mx-auto mt-12 grid max-w-4xl gap-x-8 gap-y-5 border-t pt-7 text-center sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--le-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--le-muted)" }}>
                  {f.label}
                </dt>
                <dd
                  className="mt-1 type-small font-medium"
                  style={{ color: "var(--le-ink)" }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--le-cream)" }}>
        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <CentredHeading>{c.intro.heading}</CentredHeading>
            <div className="mt-8 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--le-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Getting here ──────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--le-rule)", background: "#fdfbf5" }}
        >
          <Container size="content">
            <CentredHeading>{c.arriving.heading}</CentredHeading>
            <p
              className="mx-auto mt-6 max-w-[62ch] text-center type-lead"
              style={{ color: "var(--le-muted)" }}
            >
              {c.arriving.lead}
            </p>

            <div className="mt-11 grid gap-6 md:grid-cols-3">
              {c.arriving.routes.map((r) => (
                <div
                  key={r.from}
                  className="border-t pt-5"
                  style={{ borderColor: "var(--le-honey)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--le-ink)" }}>
                    {r.from}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--le-muted)" }}>
                    {r.body}
                  </p>
                  <p
                    className="mt-3 type-small italic"
                    style={{ color: "var(--le-ochre)" }}
                  >
                    {r.detail}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="mx-auto mt-11 max-w-[64ch] rounded-xl border px-6 py-5 text-center type-body"
              style={{
                borderColor: "var(--le-rule)",
                background: "var(--le-cream-deep)",
                color: "var(--le-ink)",
              }}
            >
              {c.arriving.note}
            </p>
          </Container>
        </section>

        {/* ── The three gates ────────────────────────────────────────────
            The page's signature device: three arched panels, one per gate.
            The arch is a top-only border radius rather than an image, so it
            costs nothing to load and degrades to a rounded card on a phone. */}
        <section id="gates" className="scroll-mt-24 py-14 sm:py-18">
          <Container size="content">
            <CentredHeading eyebrow={en ? "Porta Napoli · San Biagio · Rudiae" : "Porta Napoli · San Biagio · Rudiae"}>
              {c.gates.heading}
            </CentredHeading>
            <p
              className="mx-auto mt-6 max-w-[64ch] text-center type-lead"
              style={{ color: "var(--le-muted)" }}
            >
              {c.gates.lead}
            </p>

            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {c.gates.items.map((gate) => (
                <li
                  key={gate.name}
                  className="flex flex-col border px-6 pt-10 pb-7 text-center"
                  style={{
                    borderColor: "var(--le-rule)",
                    background: "#fdfbf5",
                    // Top corners only: a gate, not a card.
                    borderRadius: "999px 999px 0.75rem 0.75rem",
                  }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--le-ink)" }}>
                    {gate.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mx-auto mt-4 block h-px w-12"
                    style={{ background: "var(--le-honey)" }}
                  />
                  <p className="mt-4 type-small" style={{ color: "var(--le-muted)" }}>
                    {gate.detail}
                  </p>
                  <p
                    className="mt-auto pt-5 type-caption"
                    style={{ color: "var(--le-ochre)" }}
                  >
                    {gate.serves}
                  </p>
                </li>
              ))}
            </ul>

            <p
              className="mx-auto mt-11 max-w-[66ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--le-honey)", color: "var(--le-ink)" }}
            >
              {c.gates.note}
            </p>
          </Container>
        </section>

        {/* ── Staying ───────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--le-rule)", background: "var(--le-cream-deep)" }}
        >
          <Container size="content">
            <CentredHeading>{c.staying.heading}</CentredHeading>
            <p
              className="mx-auto mt-6 max-w-[62ch] text-center type-lead"
              style={{ color: "var(--le-muted)" }}
            >
              {c.staying.lead}
            </p>
            <div className="mx-auto mt-8 max-w-[68ch] space-y-5">
              {c.staying.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--le-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-11 grid gap-7 md:grid-cols-3">
              {c.staying.tips.map((t) => (
                <div key={t.title}>
                  <h3
                    className="border-t pt-4 font-heading type-h3"
                    style={{ borderColor: "var(--le-honey)", color: "var(--le-ink)" }}
                  >
                    {t.title}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--le-muted)" }}>
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Weddings ──────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <CentredHeading>{c.weddings.heading}</CentredHeading>
            <p
              className="mx-auto mt-6 max-w-[62ch] text-center type-lead"
              style={{ color: "var(--le-muted)" }}
            >
              {c.weddings.lead}
            </p>
            <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
              <div className="space-y-5">
                {c.weddings.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--le-muted)" }}>
                    {p}
                  </p>
                ))}
              </div>
              <ul
                className="h-fit rounded-xl border p-6"
                style={{ borderColor: "var(--le-honey)", background: "#fdfbf5" }}
              >
                {c.weddings.covers.map((item, i) => (
                  <li
                    key={item}
                    className={i === 0 ? "type-small" : "mt-3 border-t pt-3 type-small"}
                    style={{ borderColor: "var(--le-rule)", color: "var(--le-muted)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* ── Around the city ───────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--le-rule)", background: "#fdfbf5" }}
        >
          <Container size="content">
            <CentredHeading>{c.around.heading}</CentredHeading>
            <p
              className="mx-auto mt-6 max-w-[62ch] text-center type-lead"
              style={{ color: "var(--le-muted)" }}
            >
              {c.around.lead}
            </p>
            <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.around.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--le-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--le-muted)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        {/* ── Onward ────────────────────────────────────────────────────
            Named, not described: the keyword map puts Gallipoli and Otranto
            on the Salento page, and a second description here would set two
            of our own pages against each other. */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <CentredHeading>{c.onward.heading}</CentredHeading>
            <p
              className="mx-auto mt-6 max-w-[62ch] text-center type-lead"
              style={{ color: "var(--le-muted)" }}
            >
              {c.onward.lead}
            </p>
            <ul className="mx-auto mt-10 max-w-[70ch]">
              {c.onward.items.map((item) => {
                const live = item.id !== null && isPublished(item.id);
                const name = (
                  <span className="font-heading type-h3" style={{ color: "var(--le-ink)" }}>
                    {item.name}
                  </span>
                );
                return (
                  <li
                    key={item.name}
                    className="border-t py-5"
                    style={{ borderColor: "var(--le-rule)" }}
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
                    <p className="mt-2 type-small" style={{ color: "var(--le-muted)" }}>
                      {item.note}
                    </p>
                  </li>
                );
              })}
            </ul>
            <p
              className="mx-auto mt-8 max-w-[66ch] text-center type-small"
              style={{ color: "var(--le-muted)" }}
            >
              {c.onward.footnote}
            </p>
          </Container>
        </section>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--le-rule)", background: "var(--le-cream-deep)" }}
        >
          <Container size="content">
            <CentredHeading>{c.practical.heading}</CentredHeading>
            <p
              className="mx-auto mt-6 max-w-[62ch] text-center type-lead"
              style={{ color: "var(--le-muted)" }}
            >
              {c.practical.lead}
            </p>
            <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--le-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--le-muted)" }}>
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
            <CentredHeading>{c.faq.heading}</CentredHeading>
            <div className="mt-10 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--le-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--le-muted)" }}>
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
          style={{ borderColor: "var(--le-rule)", background: "#fdfbf5" }}
        >
          <Container size="content">
            <h2 className="text-center font-heading type-h2" style={{ color: "var(--le-ink)" }}>
              {en ? "Elsewhere in Puglia" : "Altrove in Puglia"}
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {(
                [
                  ["puglia", en ? "Private transfers in Puglia" : "Transfer privati in Puglia",
                    en ? "The regional page: both airports and how the region fits together."
                       : "La pagina regionale: i due aeroporti e come si tiene insieme la regione."],
                  ["brindisi", en ? "Brindisi airport" : "Aeroporto di Brindisi",
                    en ? "The near airport for Lecce, and the drive south."
                       : "Lo scalo vicino a Lecce e i tragitti verso sud."],
                  ["ostuni", en ? "Ostuni and the masserie" : "Ostuni e le masserie",
                    en ? "The White Town and the country stays below it."
                       : "La Città Bianca e le strutture di campagna sotto il paese."],
                ] as const
              ).map(([id, title, blurb]) => (
                <li
                  key={id}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--le-rule)", background: "var(--le-cream)" }}
                >
                  <Link
                    href={pathFor(id, locale)}
                    className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline"
                    style={{ color: "var(--le-ink)" }}
                  >
                    {title}
                  </Link>
                  <p className="mt-2 type-small" style={{ color: "var(--le-muted)" }}>
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
              className="mx-auto max-w-3xl rounded-2xl border px-7 py-10 text-center sm:px-12 sm:py-14"
              style={{ borderColor: "var(--le-honey)", background: "#fdfbf5" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "var(--le-ink)" }}>
                {c.close.heading}
              </h2>
              <p
                className="mx-auto mt-4 max-w-[58ch] type-lead"
                style={{ color: "var(--le-muted)" }}
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
