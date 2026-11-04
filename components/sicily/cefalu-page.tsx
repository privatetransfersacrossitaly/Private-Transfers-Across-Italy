import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { cefaluPage } from "@/content/sicily";
import { pageName } from "@/content/page-names";
import { isPublished, pathFor, type PageId } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Cefalù.
 *
 * ── The device: the bay ───────────────────────────────────────────────────
 * The town curves along a shore under a rock, so the page is built on an
 * arc: sections alternate their alignment left and right of centre in a
 * shallow sweep, and the hero sits under a heavy band standing in for the
 * headland above everything. Nothing is centred twice in a row, which gives
 * the page the swing of a bay rather than the stack of a list.
 *
 * Distinct from its siblings: Palermo is strata, Catania one axis, Taormina
 * terraces, Syracuse a channel, Trapani flat pans, Agrigento a colonnade,
 * and this curves.
 *
 * The alternation only applies from `lg`; below that everything aligns left,
 * because an arc on a phone is just ragged text.
 *
 * ── Palette, scoped ───────────────────────────────────────────────────────
 * Shore sand, a Tyrrhenian blue lighter than Syracuse's, and the warm grey
 * of the rock. On this component's wrapper only.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * The image library holds nothing of Sicily, and a stock beach under a cliff
 * captioned as Cefalù would be a false claim about a real place.
 */

const cefaluTheme = {
  "--cf-sand": "#faf7f0",
  "--cf-sand-deep": "#f0eade",
  "--cf-tyrrhenian": "#246079",
  "--cf-tyrrhenian-deep": "#1b4a5e",
  "--cf-rock": "#6c6257",
  "--cf-ink": "#262421",
  "--cf-muted": "#4e4b46",
  "--cf-rule": "#d9d0bf",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--cf-tyrrhenian-deep)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--cf-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

/**
 * One point on the arc. `swing` moves the content a little off centre, one
 * way then the other, so the page reads as a shallow curve.
 */
function Arc({
  children,
  swing,
  tone = "base",
  id,
}: {
  children: React.ReactNode;
  swing: "out" | "mid" | "in";
  tone?: "base" | "deep";
  id?: string;
}) {
  const offset =
    swing === "out" ? "lg:ml-0" : swing === "mid" ? "lg:ml-[6%]" : "lg:ml-[11%]";
  return (
    <section
      id={id}
      className={`py-14 sm:py-18 ${id ? "scroll-mt-24" : ""}`}
      style={{ background: tone === "deep" ? "var(--cf-sand-deep)" : "var(--cf-sand)" }}
    >
      <Container size="content">
        <div className={`${offset} lg:max-w-[74%]`}>{children}</div>
      </Container>
    </section>
  );
}

function PageLink({ id, locale }: { id: PageId; locale: Locale }) {
  const label = pageName(id, locale);
  if (!isPublished(id)) {
    return <span style={{ color: "var(--cf-ink)" }}>{label}</span>;
  }
  return (
    <Link
      href={pathFor(id, locale)}
      className="underline decoration-1 underline-offset-4 hover:no-underline"
      style={{ color: "var(--cf-ink)" }}
    >
      {label}
    </Link>
  );
}

export function CefaluPageView({ locale }: { locale: Locale }) {
  const c = cefaluPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={cefaluTheme}>
      {/* The rock: a heavy band above everything, as it is in the town. */}
      <div aria-hidden="true" className="h-3" style={{ background: "var(--cf-rock)" }} />

      <header
        className="border-b"
        style={{ background: "var(--cf-sand)", borderColor: "var(--cf-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="cefalu" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "var(--cf-tyrrhenian-deep)" }}>
            {c.hero.eyebrow}
          </p>
          <h1
            className="mt-3 max-w-[18ch] font-heading type-h1"
            style={{ color: "var(--cf-ink)" }}
          >
            {c.hero.h1}
          </h1>
          <p
            className="mt-6 max-w-[66ch] type-lead lg:ml-[6%]"
            style={{ color: "var(--cf-muted)" }}
          >
            {c.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3 lg:ml-[6%]">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#arrival" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          {/* Two of these four are sourced road distances, which is rare
              enough in this cluster to be worth the prominence. */}
          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--cf-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--cf-muted)" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "var(--cf-ink)" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main">
        <Arc swing="out">
          <Heading>{c.intro.heading}</Heading>
          <div className="mt-6 space-y-5">
            {c.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--cf-muted)" }}>
                {p}
              </p>
            ))}
          </div>
        </Arc>

        <Arc swing="mid" tone="deep" id="arrival">
          <Heading eyebrow={en ? "Arriving" : "L'arrivo"}>{c.arrival.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--cf-muted)" }}>
            {c.arrival.lead}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {c.arrival.options.map((o) => (
              <div
                key={o.id}
                className="border-t pt-5"
                style={{ borderColor: "var(--cf-tyrrhenian)" }}
              >
                <p
                  className="type-caption font-medium uppercase tracking-[0.1em]"
                  style={{ color: "var(--cf-tyrrhenian-deep)" }}
                >
                  {o.label}
                </p>
                <h3 className="mt-2 font-heading type-h3">
                  <PageLink id={o.id} locale={locale} />
                </h3>
                <p className="mt-3 type-small" style={{ color: "var(--cf-muted)" }}>
                  {o.body}
                </p>
              </div>
            ))}
          </div>
          <p
            className="mt-8 border-l-4 py-1 pl-5 type-body"
            style={{ borderColor: "var(--cf-rock)", color: "var(--cf-ink)" }}
          >
            {c.arrival.note}
          </p>
        </Arc>

        <Arc swing="in">
          <Heading eyebrow={en ? "On the ground" : "A terra"}>{c.kerb.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--cf-muted)" }}>
            {c.kerb.lead}
          </p>
          <ol className="mt-9">
            {c.kerb.items.map((item) => (
              <li key={item.title} className="border-t py-5" style={{ borderColor: "var(--cf-rule)" }}>
                <h3 className="font-heading type-h3" style={{ color: "var(--cf-ink)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 type-small" style={{ color: "var(--cf-muted)" }}>
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Arc>

        {c.going ? (
          <Arc swing="mid" tone="deep">
            <Heading>{c.going.heading}</Heading>
            <p className="mt-4 type-lead" style={{ color: "var(--cf-muted)" }}>
              {c.going.lead}
            </p>
            <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.going.items.map((d) => (
                <div key={d.name}>
                  <dt
                    className="border-t pt-3 font-heading type-h3"
                    style={{ borderColor: "var(--cf-tyrrhenian)", color: "var(--cf-ink)" }}
                  >
                    {d.name}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--cf-muted)" }}>
                    {d.body}
                  </dd>
                </div>
              ))}
            </dl>
          </Arc>
        ) : null}

        <Arc swing="out">
          <Heading>{c.nearby.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--cf-muted)" }}>
            {c.nearby.lead}
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {c.nearby.items.map((n) => (
              <li
                key={n.id}
                className="rounded-xl border p-6"
                style={{ borderColor: "var(--cf-rule)", background: "var(--cf-sand-deep)" }}
              >
                <h3 className="font-heading type-h3">
                  <PageLink id={n.id} locale={locale} />
                </h3>
                <p className="mt-2 type-small" style={{ color: "var(--cf-muted)" }}>
                  {n.body}
                </p>
              </li>
            ))}
          </ul>
        </Arc>

        <Arc swing="mid" tone="deep">
          <Heading>{c.practical.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--cf-muted)" }}>
            {c.practical.lead}
          </p>
          <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {c.practical.items.map((item) => (
              <div key={item.term}>
                <dt className="font-heading type-h3" style={{ color: "var(--cf-ink)" }}>
                  {item.term}
                </dt>
                <dd className="mt-2 type-small" style={{ color: "var(--cf-muted)" }}>
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Arc>

        <section className="py-14 sm:py-18" style={{ background: "var(--cf-sand)" }}>
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--cf-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--cf-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20" style={{ background: "var(--cf-sand-deep)" }}>
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--cf-tyrrhenian-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f2f7f9" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#cbdde4" }}>
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
