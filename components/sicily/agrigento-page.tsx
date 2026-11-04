import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { agrigentoPage } from "@/content/sicily";
import { pageName } from "@/content/page-names";
import { isPublished, pathFor, type PageId } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Agrigento.
 *
 * ── The device: a colonnade ───────────────────────────────────────────────
 * The page is set as a register of evenly spaced vertical columns, each
 * headed by a short rule standing on a shared base line — a colonnade
 * rather than a picture of one. It is the only page in the cluster whose
 * repeating unit is vertical and regular, which is the point: Palermo is
 * strata, Catania one axis, Taormina terraces, Syracuse a channel, Trapani
 * flat pans.
 *
 * The rules are decorative and the headings carry everything, so they are
 * hidden from assistive technology. Below `sm` the colonnade becomes a
 * single column, because three narrow columns of prose on a phone is a
 * worse read than one.
 *
 * ── Palette, scoped ───────────────────────────────────────────────────────
 * Limestone, a dry southern ground, and the deep blue of the coast below
 * the ridge. Declared on this component's wrapper only.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * The temples are among the most photographed structures in Italy and we
 * hold no licensed image of them. A stock Doric temple captioned as
 * Agrigento would be exactly the claim this project refuses to make.
 */

const agrigentoTheme = {
  "--ag-limestone": "#faf7f0",
  "--ag-limestone-deep": "#efe9dc",
  // Darkened from #8a6a2f, which cleared AA on the lighter ground but
  // measured 4.15:1 on --ag-limestone-deep, where the airports section's
  // label sits. This value measures 4.88 / 5.52 across both.
  "--ag-ground": "#7e5f28",
  "--ag-sea": "#1b4f6b",
  "--ag-sea-deep": "#153e55",
  "--ag-ink": "#262420",
  "--ag-muted": "#4e4b45",
  "--ag-rule": "#d8cfba",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--ag-ground)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--ag-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

/**
 * A column in the register. The short rule above it is the capital and the
 * shared border beneath the row is the base they all stand on.
 */
function Column({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span
        aria-hidden="true"
        className="mb-4 block h-0.5 w-10"
        style={{ background: "var(--ag-ground)" }}
      />
      {children}
    </div>
  );
}

function PageLink({ id, locale }: { id: PageId; locale: Locale }) {
  const label = pageName(id, locale);
  if (!isPublished(id)) {
    return <span style={{ color: "var(--ag-ink)" }}>{label}</span>;
  }
  return (
    <Link
      href={pathFor(id, locale)}
      className="underline decoration-1 underline-offset-4 hover:no-underline"
      style={{ color: "var(--ag-ink)" }}
    >
      {label}
    </Link>
  );
}

export function AgrigentoPageView({ locale }: { locale: Locale }) {
  const c = agrigentoPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={agrigentoTheme}>
      <header
        className="border-b"
        style={{ background: "var(--ag-limestone)", borderColor: "var(--ag-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="agrigento" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "var(--ag-ground)" }}>
            {c.hero.eyebrow}
          </p>
          <h1
            className="mt-3 max-w-[20ch] font-heading type-h1"
            style={{ color: "var(--ag-ink)" }}
          >
            {c.hero.h1}
          </h1>
          <p className="mt-6 max-w-[68ch] type-lead" style={{ color: "var(--ag-muted)" }}>
            {c.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#airports" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--ag-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--ag-muted)" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "var(--ag-ink)" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--ag-limestone)" }}>
        <section className="py-14 sm:py-18">
          <Container size="prose">
            <Heading>{c.intro.heading}</Heading>
            <div className="mt-6 space-y-5">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--ag-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Container>
        </section>

        {/* ── The airports, as a three-column register ───────────────────
            Three options standing side by side is the honest picture here:
            none is near, and none is obviously right. */}
        <section
          id="airports"
          className="scroll-mt-24 border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ag-rule)", background: "var(--ag-limestone-deep)" }}
        >
          <Container size="content">
            <Heading eyebrow={en ? "No obvious answer" : "Nessuna risposta ovvia"}>
              {c.arrival.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ag-muted)" }}>
              {c.arrival.lead}
            </p>

            <div
              className="mt-10 grid gap-x-8 gap-y-10 border-b pb-8 sm:grid-cols-3"
              style={{ borderColor: "var(--ag-ground)" }}
            >
              {c.arrival.options.map((o) => (
                <Column key={o.id}>
                  <p
                    className="type-caption font-medium uppercase tracking-[0.1em]"
                    style={{ color: "var(--ag-ground)" }}
                  >
                    {o.label}
                  </p>
                  <h3 className="mt-2 font-heading type-h3">
                    <PageLink id={o.id} locale={locale} />
                  </h3>
                  <p className="mt-3 type-small" style={{ color: "var(--ag-muted)" }}>
                    {o.body}
                  </p>
                </Column>
              ))}
            </div>

            <p className="mt-8 max-w-[70ch] type-body" style={{ color: "var(--ag-ink)" }}>
              {c.arrival.note}
            </p>
          </Container>
        </section>

        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading eyebrow={en ? "Town and site" : "Città e sito"}>{c.kerb.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ag-muted)" }}>
              {c.kerb.lead}
            </p>
            <div
              className="mt-10 grid gap-x-8 gap-y-10 border-b pb-8 sm:grid-cols-2"
              style={{ borderColor: "var(--ag-rule)" }}
            >
              {c.kerb.items.map((item) => (
                <Column key={item.title}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--ag-ink)" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--ag-muted)" }}>
                    {item.body}
                  </p>
                </Column>
              ))}
            </div>
          </Container>
        </section>

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ag-rule)", background: "var(--ag-limestone-deep)" }}
        >
          <Container size="content">
            <Heading>{c.nearby.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ag-muted)" }}>
              {c.nearby.lead}
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {c.nearby.items.map((n) => (
                <li
                  key={n.id}
                  className="rounded-xl border p-5"
                  style={{ borderColor: "var(--ag-rule)", background: "var(--ag-limestone)" }}
                >
                  <h3 className="font-heading type-h3">
                    <PageLink id={n.id} locale={locale} />
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--ag-muted)" }}>
                    {n.body}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-14 sm:py-18">
          <Container size="content">
            <Heading>{c.practical.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ag-muted)" }}>
              {c.practical.lead}
            </p>
            <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {c.practical.items.map((item) => (
                <div key={item.term}>
                  <dt className="font-heading type-h3" style={{ color: "var(--ag-ink)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--ag-muted)" }}>
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section
          className="border-y py-14 sm:py-18"
          style={{ borderColor: "var(--ag-rule)", background: "var(--ag-limestone-deep)" }}
        >
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--ag-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--ag-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--ag-sea-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f3f7fa" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#cddce6" }}>
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
