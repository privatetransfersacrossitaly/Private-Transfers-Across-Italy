import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { monopoliPage } from "@/content/puglia";
import { isPublished, pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Monopoli — the harbour town and its coastline.
 *
 * ── How this differs from the other seven pages ───────────────────────────
 * Each page in the cluster has its own organising idea: a sequence (Bari),
 * a vertical scale (Brindisi), a symmetry (Lecce), a split (Ostuni), a
 * plaque (Alberobello). Monopoli's is a **horizontal rail** — the coast
 * itself, read left to right from north to south, with the harbour as the
 * middle marker.
 *
 * That is deliberately the opposite axis to Brindisi's ladder, which runs
 * down the page. A coastline is a line you travel along, not a list you
 * descend, and drawing it horizontally is the one layout in this cluster
 * that matches the geography it describes. Below `md` it rotates to a
 * vertical rail, because a horizontal scroll is never the right answer on
 * a phone — the markers and the rule survive, only the axis changes.
 *
 * ── Palette ───────────────────────────────────────────────────────────────
 * A working Adriatic port: sea-green, wet harbour stone, sailcloth, and the
 * red of a fishing boat's hull as the single accent. Cooler than Lecce's
 * honey, greener than Bari's navy. Scoped to this component; nothing is
 * added to the global theme, and the site's own accent and focus ring are
 * untouched.
 *
 * ── Photography ───────────────────────────────────────────────────────────
 * None exists for Monopoli in the project. A harbour page with no picture
 * of the harbour is a real gap; the Phase 5 report records it rather than
 * substituting a photograph of somewhere else.
 */

/** Adriatic port: sea-green, harbour stone, sailcloth, hull red. */
const monopoliTheme = {
  "--mo-sail": "#f9f8f4",
  "--mo-sail-deep": "#edeee9",
  "--mo-sea": "#2b6358",
  "--mo-sea-deep": "#1d4a41",
  "--mo-hull": "#a44a3a",
  "--mo-ink": "#21251f",
  "--mo-muted": "#4f564e",
  "--mo-rule": "#d3d6cf",
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
        <p className="type-label" style={{ color: "var(--mo-sea)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--mo-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

export function MonopoliPageView({ locale }: { locale: Locale }) {
  const c = monopoliPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={monopoliTheme}>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <header
        className="border-b"
        style={{ background: "var(--mo-sail)", borderColor: "var(--mo-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="monopoli" locale={locale} label={c.hero.eyebrow} />

          <div className="mt-9 max-w-[58ch]">
            <p className="type-label" style={{ color: "var(--mo-sea)" }}>
              {c.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-heading type-h1" style={{ color: "var(--mo-ink)" }}>
              {c.hero.h1}
            </h1>
            <p className="mt-6 type-lead" style={{ color: "var(--mo-muted)" }}>
              {c.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
              <Cta href="#coast" variant="outline">
                {c.hero.secondaryCta}
              </Cta>
            </div>
          </div>

          <dl className="mt-11 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.hero.facts.map((f) => (
              <div
                key={f.label}
                className="border-t pt-3"
                style={{ borderColor: "var(--mo-sea)" }}
              >
                <dt className="type-caption" style={{ color: "var(--mo-muted)" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "var(--mo-ink)" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--mo-sail)" }}>
        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.intro.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--mo-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The coast rail ─────────────────────────────────────────────
            The page's signature device, and the only horizontal spine in
            the cluster: a drawn shoreline with the four stretches pegged
            along it, north on the left. On a phone the same rail runs
            vertically — the rule and the markers are unchanged, so the
            idea survives the reflow. */}
        <section
          id="coast"
          className="scroll-mt-24 border-y py-14 sm:py-18"
          style={{ borderColor: "var(--mo-rule)", background: "var(--mo-sail-deep)" }}
        >
          <Container size="wide">
            <Heading eyebrow={en ? "North to south" : "Da nord a sud"}>
              {c.coast.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--mo-muted)" }}>
              {c.coast.lead}
            </p>

            <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
              {c.coast.stops.map((stop, i) => {
                const harbour = i === 1;
                return (
                  <li key={stop.name} className="relative flex gap-5 md:block md:gap-0">
                    {/* The rail. Vertical on a phone, horizontal from md. */}
                    <div
                      aria-hidden="true"
                      className="flex shrink-0 flex-col items-center md:mb-6 md:h-auto md:w-full md:flex-row"
                    >
                      <span
                        className="hidden h-px grow md:block"
                        style={{
                          background: i === 0 ? "transparent" : "var(--mo-sea)",
                        }}
                      />
                      <span
                        className="block shrink-0 rounded-full"
                        style={{
                          width: harbour ? "0.95rem" : "0.6rem",
                          height: harbour ? "0.95rem" : "0.6rem",
                          background: harbour ? "var(--mo-hull)" : "var(--mo-sea)",
                        }}
                      />
                      <span
                        className="w-px grow md:h-px md:w-auto"
                        style={{
                          background:
                            i === c.coast.stops.length - 1
                              ? "transparent"
                              : "var(--mo-sea)",
                        }}
                      />
                    </div>

                    <div className="pb-2 md:pb-0">
                      <p
                        className="type-caption"
                        style={{ color: harbour ? "var(--mo-hull)" : "var(--mo-sea)" }}
                      >
                        {stop.position}
                      </p>
                      <h3
                        className="mt-1 font-heading type-h3"
                        style={{ color: "var(--mo-ink)" }}
                      >
                        {stop.name}
                      </h3>
                      <p className="mt-2 type-small" style={{ color: "var(--mo-muted)" }}>
                        {stop.note}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p
              className="mt-11 max-w-[68ch] border-l-4 py-1 pl-5 type-body"
              style={{ borderColor: "var(--mo-hull)", color: "var(--mo-ink)" }}
            >
              {c.coast.footnote}
            </p>
          </Container>
        </section>

        {/* ── The harbour ───────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.harbour.heading}</Heading>
            <div className="mt-6 max-w-[68ch] space-y-5">
              {c.harbour.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--mo-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {c.harbour.sights.map((s) => (
                <li
                  key={s.title}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--mo-rule)", background: "var(--mo-sail-deep)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--mo-ink)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--mo-muted)" }}>
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ── Arriving ──────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--mo-rule)", background: "var(--mo-sail-deep)" }}
        >
          <Container size="content">
            <Heading>{c.arriving.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--mo-muted)" }}>
              {c.arriving.lead}
            </p>
            <ul className="mt-10">
              {c.arriving.routes.map((r) => (
                <li
                  key={r.from}
                  className="grid gap-x-8 gap-y-2 border-t py-6 sm:grid-cols-[15rem_minmax(0,1fr)]"
                  style={{ borderColor: "var(--mo-rule)" }}
                >
                  <div>
                    <h3 className="font-heading type-h3" style={{ color: "var(--mo-ink)" }}>
                      {r.from}
                    </h3>
                    <p
                      className="mt-1 type-small font-medium"
                      style={{ color: "var(--mo-sea)" }}
                    >
                      {r.distance}
                    </p>
                  </div>
                  <p className="type-small" style={{ color: "var(--mo-muted)" }}>
                    {r.body}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[66ch] type-body" style={{ color: "var(--mo-muted)" }}>
              {c.arriving.note}
            </p>
            <p className="mt-6 type-small" style={{ color: "var(--mo-muted)" }}>
              <Link
                href={pathFor("bari", locale)}
                className="underline decoration-1 underline-offset-4 hover:no-underline"
                style={{ color: "var(--mo-sea-deep)" }}
              >
                {en ? "Bari airport and cruise port" : "Aeroporto e porto di Bari"}
              </Link>
            </p>
          </Container>
        </section>

        {/* ── Staying ───────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.staying.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--mo-muted)" }}>
              {c.staying.lead}
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {c.staying.groups.map((g) => (
                <div key={g.title}>
                  <h3
                    className="border-t pt-4 font-heading type-h3"
                    style={{ borderColor: "var(--mo-sea)", color: "var(--mo-ink)" }}
                  >
                    {g.title}
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--mo-muted)" }}>
                    {g.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Excursions ────────────────────────────────────────────────── */}
        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--mo-rule)", background: "var(--mo-sail-deep)" }}
        >
          <Container size="content">
            <Heading>{c.excursions.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--mo-muted)" }}>
              {c.excursions.lead}
            </p>
            <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.excursions.items.map((item) => {
                const live = item.id !== null && isPublished(item.id);
                const name = (
                  <span className="font-heading type-h3" style={{ color: "var(--mo-ink)" }}>
                    {item.name}
                  </span>
                );
                return (
                  <li
                    key={item.name}
                    className="rounded-xl border p-6"
                    style={{ borderColor: "var(--mo-rule)", background: "var(--mo-sail)" }}
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
                    <p className="mt-2 type-small" style={{ color: "var(--mo-muted)" }}>
                      {item.note}
                    </p>
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 max-w-[68ch] type-small" style={{ color: "var(--mo-muted)" }}>
              {c.excursions.footnote}
            </p>
          </Container>
        </section>

        {/* ── Practical ─────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--mo-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--mo-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--mo-muted)" }}>
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
          style={{ borderColor: "var(--mo-rule)", background: "var(--mo-sail-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--mo-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--mo-muted)" }}>
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
            <h2 className="font-heading type-h2" style={{ color: "var(--mo-ink)" }}>
              {en ? "Elsewhere in Puglia" : "Altrove in Puglia"}
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-3">
              {(
                [
                  ["puglia", en ? "Private transfers in Puglia" : "Transfer privati in Puglia",
                    en ? "The regional page: both airports and how the region fits together."
                       : "La pagina regionale: i due aeroporti e come si tiene insieme la regione."],
                  ["polignano-a-mare", en ? "Polignano a Mare" : "Polignano a Mare",
                    en ? "The next town up the coast, built on a cliff above the sea."
                       : "Il comune successivo sulla costa, costruito su una falesia."],
                  ["alberobello", en ? "Alberobello and the trulli" : "Alberobello e i trulli",
                    en ? "Inland, and closer than most people expect — the comuni border one another."
                       : "Verso l'interno, più vicina di quanto si creda: i comuni confinano."],
                ] as const
              ).map(([id, title, blurb]) => (
                <li
                  key={id}
                  className="rounded-xl border p-6"
                  style={{ borderColor: "var(--mo-rule)", background: "var(--mo-sail-deep)" }}
                >
                  <Link
                    href={pathFor(id, locale)}
                    className="font-heading type-h3 underline decoration-1 underline-offset-4 hover:no-underline"
                    style={{ color: "var(--mo-ink)" }}
                  >
                    {title}
                  </Link>
                  <p className="mt-2 type-small" style={{ color: "var(--mo-muted)" }}>
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
              style={{ background: "var(--mo-sea-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f4f8f6" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#d3e0db" }}>
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
