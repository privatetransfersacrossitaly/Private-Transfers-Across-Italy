import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { taorminaPage } from "@/content/sicily";
import { pageName } from "@/content/page-names";
import { isPublished, pathFor, type PageId } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Taormina.
 *
 * ── The device: terraces ──────────────────────────────────────────────────
 * The town is built on a shelf of hillside with the theatre above it and the
 * sea a long way below, so the page steps: each section is indented a little
 * further than the one before, and a short rule marks the drop between them.
 * Read top to bottom it descends, the way the town does.
 *
 * The indents are capped and only apply from `lg` upwards. A staircase that
 * kept stepping would push the last section off a narrow screen, and the
 * content is a set of practical answers, not a diagram — the shape is there
 * to be felt rather than measured, and the rules are decorative, so they are
 * hidden from assistive technology.
 *
 * Distinct from its siblings: Palermo is horizontal strata, Catania hangs
 * off one vertical axis, the pillar is a three-corner grid, and this
 * descends in steps.
 *
 * ── Palette, scoped ───────────────────────────────────────────────────────
 * Pale terracing with an Ionian blue and a bougainvillea accent, declared on
 * this component's wrapper only and never added to the global theme.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * Nothing of Sicily exists in the CC0 image library, and a stock coastline
 * captioned as Isola Bella would be a false claim about a real place.
 */

const taorminaTheme = {
  "--tm-pale": "#faf6ef",
  "--tm-pale-deep": "#f0e9dd",
  "--tm-ionian": "#1c5f77",
  "--tm-ionian-deep": "#174c60",
  "--tm-bougainvillea": "#9c2f55",
  "--tm-ink": "#262321",
  "--tm-muted": "#4e4b47",
  "--tm-rule": "#ddd2bf",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--tm-bougainvillea)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--tm-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

/**
 * One terrace. `step` is how far down the staircase this section sits;
 * it becomes a left indent at lg and above, and nothing at all below that.
 */
function Terrace({
  children,
  step,
  tone = "base",
  id,
}: {
  children: React.ReactNode;
  step: 0 | 1 | 2 | 3;
  tone?: "base" | "deep";
  id?: string;
}) {
  const indent = ["lg:ml-0", "lg:ml-[4%]", "lg:ml-[8%]", "lg:ml-[12%]"][step];
  return (
    <section
      id={id}
      className={`py-14 sm:py-18 ${id ? "scroll-mt-24" : ""}`}
      style={{
        background: tone === "deep" ? "var(--tm-pale-deep)" : "var(--tm-pale)",
      }}
    >
      <Container size="content">
        <div className={indent}>
          {step > 0 ? (
            <span
              aria-hidden="true"
              className="mb-8 block h-px w-16"
              style={{ background: "var(--tm-ionian)" }}
            />
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}

function PageLink({ id, locale }: { id: PageId; locale: Locale }) {
  const label = pageName(id, locale);
  if (!isPublished(id)) {
    return <span style={{ color: "var(--tm-ink)" }}>{label}</span>;
  }
  return (
    <Link
      href={pathFor(id, locale)}
      className="underline decoration-1 underline-offset-4 hover:no-underline"
      style={{ color: "var(--tm-ink)" }}
    >
      {label}
    </Link>
  );
}

export function TaorminaPageView({ locale }: { locale: Locale }) {
  const c = taorminaPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={taorminaTheme}>
      <header
        className="border-b"
        style={{ background: "var(--tm-pale)", borderColor: "var(--tm-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="taormina" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "var(--tm-bougainvillea)" }}>
            {c.hero.eyebrow}
          </p>
          <h1
            className="mt-3 max-w-[20ch] font-heading type-h1"
            style={{ color: "var(--tm-ink)" }}
          >
            {c.hero.h1}
          </h1>
          <p
            className="mt-6 max-w-[66ch] type-lead lg:ml-[8%]"
            style={{ color: "var(--tm-muted)" }}
          >
            {c.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3 lg:ml-[8%]">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#kerb" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--tm-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--tm-muted)" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "var(--tm-ink)" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main">
        <Terrace step={0}>
          <Heading>{c.intro.heading}</Heading>
          <div className="mt-6 max-w-[68ch] space-y-5">
            {c.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--tm-muted)" }}>
                {p}
              </p>
            ))}
          </div>
        </Terrace>

        <Terrace step={1} tone="deep">
          <Heading eyebrow={en ? "Arriving" : "L'arrivo"}>{c.arrival.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--tm-muted)" }}>
            {c.arrival.lead}
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {c.arrival.options.map((o) => (
              <div
                key={o.id}
                className="border-t pt-5"
                style={{ borderColor: "var(--tm-ionian)" }}
              >
                <p
                  className="type-caption font-medium uppercase tracking-[0.1em]"
                  style={{ color: "var(--tm-ionian-deep)" }}
                >
                  {o.label}
                </p>
                <h3 className="mt-2 font-heading type-h3">
                  <PageLink id={o.id} locale={locale} />
                </h3>
                <p className="mt-3 type-small" style={{ color: "var(--tm-muted)" }}>
                  {o.body}
                </p>
              </div>
            ))}
          </div>
          <p
            className="mt-8 max-w-[68ch] border-l-4 py-1 pl-5 type-body"
            style={{ borderColor: "var(--tm-bougainvillea)", color: "var(--tm-ink)" }}
          >
            {c.arrival.note}
          </p>
        </Terrace>

        {/* The lowest and most important terrace: the arrival problem. */}
        <Terrace step={2} id="kerb">
          <Heading eyebrow={en ? "The last few hundred metres" : "Gli ultimi metri"}>
            {c.kerb.heading}
          </Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--tm-muted)" }}>
            {c.kerb.lead}
          </p>
          <ol className="mt-9">
            {c.kerb.items.map((item) => (
              <li
                key={item.title}
                className="border-t py-6"
                style={{ borderColor: "var(--tm-rule)" }}
              >
                <h3 className="font-heading type-h3" style={{ color: "var(--tm-ink)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[70ch] type-small" style={{ color: "var(--tm-muted)" }}>
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Terrace>

        {c.going ? (
          <Terrace step={3} tone="deep">
            <Heading>{c.going.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--tm-muted)" }}>
              {c.going.lead}
            </p>
            <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.going.items.map((d) => (
                <div key={d.name}>
                  <dt
                    className="border-t pt-3 font-heading type-h3"
                    style={{ borderColor: "var(--tm-ionian)", color: "var(--tm-ink)" }}
                  >
                    {d.name}
                  </dt>
                  <dd className="mt-2 type-small" style={{ color: "var(--tm-muted)" }}>
                    {d.body}
                  </dd>
                </div>
              ))}
            </dl>
          </Terrace>
        ) : null}

        <Terrace step={2}>
          <Heading>{c.nearby.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--tm-muted)" }}>
            {c.nearby.lead}
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {c.nearby.items.map((n) => (
              <li
                key={n.id}
                className="rounded-xl border p-6"
                style={{ borderColor: "var(--tm-rule)", background: "var(--tm-pale-deep)" }}
              >
                <h3 className="font-heading type-h3">
                  <PageLink id={n.id} locale={locale} />
                </h3>
                <p className="mt-2 type-small" style={{ color: "var(--tm-muted)" }}>
                  {n.body}
                </p>
              </li>
            ))}
          </ul>
        </Terrace>

        <Terrace step={1} tone="deep">
          <Heading>{c.practical.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--tm-muted)" }}>
            {c.practical.lead}
          </p>
          <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {c.practical.items.map((item) => (
              <div key={item.term}>
                <dt className="font-heading type-h3" style={{ color: "var(--tm-ink)" }}>
                  {item.term}
                </dt>
                <dd className="mt-2 type-small" style={{ color: "var(--tm-muted)" }}>
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Terrace>

        <Terrace step={0}>
          <Heading>{c.faq.heading}</Heading>
          <div className="mt-9 max-w-[72ch] space-y-8">
            {c.faq.items.map((item) => (
              <article key={item.question}>
                <h3 className="font-heading type-h3" style={{ color: "var(--tm-ink)" }}>
                  {item.question}
                </h3>
                <p className="mt-2 type-body" style={{ color: "var(--tm-muted)" }}>
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </Terrace>

        <section className="py-16 sm:py-20" style={{ background: "var(--tm-pale)" }}>
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--tm-ionian-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f3f8fa" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#cfe1e8" }}>
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
