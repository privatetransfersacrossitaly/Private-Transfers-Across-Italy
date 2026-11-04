import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { syracusePage } from "@/content/sicily";
import { pageName } from "@/content/page-names";
import { isPublished, pathFor, type PageId } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Syracuse.
 *
 * ── The device: a channel ─────────────────────────────────────────────────
 * Syracuse is a mainland city and an island joined by two bridges, and the
 * whole transfer question is which side of the water an address is on. So
 * the page is split by a drawn channel: sections alternate across it, and
 * the "getting onto Ortigia" section is the one that crosses, rendered as a
 * pair of panels with the channel between them.
 *
 * Below `lg` the channel collapses and the sections stack, because a column
 * of alternating half-width blocks on a phone is a worse read than a plain
 * one. The channel is decorative — every fact it suggests is written out —
 * so it is hidden from assistive technology.
 *
 * Distinct from its siblings: Palermo is horizontal strata, Catania hangs
 * off a vertical axis, Taormina steps down in terraces, the pillar is a
 * three-corner grid, and this is split either side of water.
 *
 * ── Palette, scoped ───────────────────────────────────────────────────────
 * Limestone, a deeper sea than Taormina's, and a papyrus green. On this
 * component's wrapper only; never added to the global theme.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * Nothing of Sicily exists in the image library, and a stock harbour
 * captioned as Ortigia would be a false claim about a real place.
 */

const syracuseTheme = {
  "--sy-limestone": "#f8f5ed",
  "--sy-limestone-deep": "#eee8da",
  "--sy-sea": "#15515e",
  "--sy-sea-deep": "#10404b",
  "--sy-papyrus": "#5c6b2f",
  "--sy-ink": "#242321",
  "--sy-muted": "#4d4b46",
  "--sy-rule": "#dad1bd",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--sy-papyrus)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--sy-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

/**
 * A section on one bank or the other.
 *
 * `side` decides which half of the grid the content occupies at lg and
 * above; the channel is the gap between the two halves, marked by a rule
 * that runs down the middle of the page.
 */
function Bank({
  children,
  side,
  tone = "base",
  id,
}: {
  children: React.ReactNode;
  side: "left" | "right";
  tone?: "base" | "deep";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-18 ${id ? "scroll-mt-24" : ""}`}
      style={{
        background: tone === "deep" ? "var(--sy-limestone-deep)" : "var(--sy-limestone)",
      }}
    >
      <Container size="wide">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-16">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 hidden w-px lg:block"
            style={{ background: "var(--sy-rule)" }}
          />
          <div className={side === "right" ? "lg:col-start-2" : "lg:col-start-1"}>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PageLink({ id, locale }: { id: PageId; locale: Locale }) {
  const label = pageName(id, locale);
  if (!isPublished(id)) {
    return <span style={{ color: "var(--sy-ink)" }}>{label}</span>;
  }
  return (
    <Link
      href={pathFor(id, locale)}
      className="underline decoration-1 underline-offset-4 hover:no-underline"
      style={{ color: "var(--sy-ink)" }}
    >
      {label}
    </Link>
  );
}

export function SyracusePageView({ locale }: { locale: Locale }) {
  const c = syracusePage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={syracuseTheme}>
      <header
        className="border-b"
        style={{ background: "var(--sy-limestone)", borderColor: "var(--sy-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="syracuse" locale={locale} label={c.hero.eyebrow} />

          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="type-label" style={{ color: "var(--sy-papyrus)" }}>
                {c.hero.eyebrow}
              </p>
              <h1
                className="mt-3 max-w-[18ch] font-heading type-h1"
                style={{ color: "var(--sy-ink)" }}
              >
                {c.hero.h1}
              </h1>
            </div>
            <p
              className="mt-6 max-w-[60ch] type-lead lg:mt-0"
              style={{ color: "var(--sy-muted)" }}
            >
              {c.hero.lead}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#kerb" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--sy-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--sy-muted)" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "var(--sy-ink)" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main">
        <Bank side="left">
          <Heading>{c.intro.heading}</Heading>
          <div className="mt-6 space-y-5">
            {c.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--sy-muted)" }}>
                {p}
              </p>
            ))}
          </div>
        </Bank>

        <Bank side="right" tone="deep">
          <Heading eyebrow={en ? "Arriving" : "L'arrivo"}>{c.arrival.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--sy-muted)" }}>
            {c.arrival.lead}
          </p>
          <div className="mt-8 space-y-6">
            {c.arrival.options.map((o) => (
              <div key={o.id} className="border-t pt-5" style={{ borderColor: "var(--sy-sea)" }}>
                <p
                  className="type-caption font-medium uppercase tracking-[0.1em]"
                  style={{ color: "var(--sy-sea-deep)" }}
                >
                  {o.label}
                </p>
                <h3 className="mt-2 font-heading type-h3">
                  <PageLink id={o.id} locale={locale} />
                </h3>
                <p className="mt-3 type-small" style={{ color: "var(--sy-muted)" }}>
                  {o.body}
                </p>
              </div>
            ))}
          </div>
          <p
            className="mt-8 border-l-4 py-1 pl-5 type-body"
            style={{ borderColor: "var(--sy-papyrus)", color: "var(--sy-ink)" }}
          >
            {c.arrival.note}
          </p>
        </Bank>

        {/* ── The crossing ─────────────────────────────────────────────
            The one section that uses both banks, because it is about
            getting from one to the other. */}
        <section
          id="kerb"
          className="scroll-mt-24 py-14 sm:py-18"
          style={{ background: "var(--sy-limestone)" }}
        >
          <Container size="wide">
            <Heading eyebrow={en ? "Across the water" : "Oltre l'acqua"}>
              {c.kerb.heading}
            </Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--sy-muted)" }}>
              {c.kerb.lead}
            </p>

            <div className="relative mt-10 lg:grid lg:grid-cols-2 lg:gap-16">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-1/2 hidden w-px lg:block"
                style={{ background: "var(--sy-sea)" }}
              />
              {c.kerb.items.map((item, i) => (
                <div
                  key={item.title}
                  className={`border-t py-6 ${i % 2 === 1 ? "lg:col-start-2" : "lg:col-start-1"}`}
                  style={{ borderColor: "var(--sy-rule)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--sy-ink)" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--sy-muted)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Bank side="left" tone="deep">
          <Heading>{c.nearby.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--sy-muted)" }}>
            {c.nearby.lead}
          </p>
          <ul className="mt-8 space-y-4">
            {c.nearby.items.map((n) => (
              <li
                key={n.id}
                className="rounded-xl border p-6"
                style={{ borderColor: "var(--sy-rule)", background: "var(--sy-limestone)" }}
              >
                <h3 className="font-heading type-h3">
                  <PageLink id={n.id} locale={locale} />
                </h3>
                <p className="mt-2 type-small" style={{ color: "var(--sy-muted)" }}>
                  {n.body}
                </p>
              </li>
            ))}
          </ul>
        </Bank>

        <Bank side="right">
          <Heading>{c.practical.heading}</Heading>
          <p className="mt-4 type-lead" style={{ color: "var(--sy-muted)" }}>
            {c.practical.lead}
          </p>
          <dl className="mt-8 space-y-6">
            {c.practical.items.map((item) => (
              <div key={item.term}>
                <dt className="font-heading type-h3" style={{ color: "var(--sy-ink)" }}>
                  {item.term}
                </dt>
                <dd className="mt-2 type-small" style={{ color: "var(--sy-muted)" }}>
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Bank>

        <section className="py-14 sm:py-18" style={{ background: "var(--sy-limestone-deep)" }}>
          <Container size="prose">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--sy-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--sy-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20" style={{ background: "var(--sy-limestone)" }}>
          <Container size="content">
            <div
              className="rounded-2xl px-7 py-10 sm:px-12 sm:py-14"
              style={{ background: "var(--sy-sea-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "#f2f8f9" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "#cadee2" }}>
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
