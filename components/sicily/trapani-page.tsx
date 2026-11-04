import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { trapaniPage } from "@/content/sicily";
import { pageName } from "@/content/page-names";
import { isPublished, pathFor, type PageId } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Trapani.
 *
 * ── The device: pans ──────────────────────────────────────────────────────
 * The road into Trapani runs between salt pans — flat rectangles of
 * different shades, divided by low banks. The page borrows that: wide, low
 * blocks laid side by side, separated by thin horizontal rules, with
 * nothing tall anywhere. Where the other pages in the cluster climb,
 * descend or cross water, this one stays level, which is also an honest
 * description of arriving here.
 *
 * Distinct from its siblings: Palermo stacks strata, Catania hangs off a
 * vertical axis, Taormina steps down, Syracuse splits across a channel, and
 * this lies flat in pans.
 *
 * ── Palette, scoped ───────────────────────────────────────────────────────
 * Salt white, shallow water and the rust of the old windmills, on this
 * component's wrapper only.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * Nothing of Sicily exists in the image library. A stock saltworks captioned
 * as Trapani would be a claim about a real place we cannot support.
 */

const trapaniTheme = {
  "--tp-salt": "#f9f7f1",
  "--tp-salt-deep": "#eeebe1",
  "--tp-shallow": "#2a6670",
  "--tp-shallow-deep": "#1f5059",
  "--tp-rust": "#9b4e21",
  "--tp-ink": "#262522",
  "--tp-muted": "#4d4d47",
  "--tp-rule": "#d7d1c2",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--tp-rust)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--tp-ink)" }}>
        {children}
      </h2>
    </div>
  );
}

/** One pan: a wide, low block with a rule beneath it. */
function Pan({
  children,
  tone = "base",
  id,
}: {
  children: React.ReactNode;
  tone?: "base" | "deep";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`border-b py-12 sm:py-16 ${id ? "scroll-mt-24" : ""}`}
      style={{
        background: tone === "deep" ? "var(--tp-salt-deep)" : "var(--tp-salt)",
        borderColor: "var(--tp-rule)",
      }}
    >
      <Container size="wide">{children}</Container>
    </section>
  );
}

function PageLink({ id, locale }: { id: PageId; locale: Locale }) {
  const label = pageName(id, locale);
  if (!isPublished(id)) {
    return <span style={{ color: "var(--tp-ink)" }}>{label}</span>;
  }
  return (
    <Link
      href={pathFor(id, locale)}
      className="underline decoration-1 underline-offset-4 hover:no-underline"
      style={{ color: "var(--tp-ink)" }}
    >
      {label}
    </Link>
  );
}

export function TrapaniPageView({ locale }: { locale: Locale }) {
  const c = trapaniPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={trapaniTheme}>
      <header
        className="border-b"
        style={{ background: "var(--tp-salt)", borderColor: "var(--tp-rule)" }}
      >
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="trapani" locale={locale} label={c.hero.eyebrow} />

          <div className="mt-8 lg:flex lg:items-end lg:justify-between lg:gap-16">
            <div>
              <p className="type-label" style={{ color: "var(--tp-rust)" }}>
                {c.hero.eyebrow}
              </p>
              <h1
                className="mt-3 max-w-[18ch] font-heading type-h1"
                style={{ color: "var(--tp-ink)" }}
              >
                {c.hero.h1}
              </h1>
            </div>
            <p
              className="mt-6 max-w-[58ch] type-lead lg:mt-0"
              style={{ color: "var(--tp-muted)" }}
            >
              {c.hero.lead}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#ferries" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--tp-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--tp-muted)" }}>
                  {f.label}
                </dt>
                <dd className="mt-1 type-small font-medium" style={{ color: "var(--tp-ink)" }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main">
        <Pan>
          <div className="lg:grid lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-16">
            <Heading>{c.intro.heading}</Heading>
            <div className="mt-6 max-w-[66ch] space-y-5 lg:mt-0">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--tp-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Pan>

        <Pan tone="deep">
          <Heading eyebrow={en ? "Arriving" : "L'arrivo"}>{c.arrival.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--tp-muted)" }}>
            {c.arrival.lead}
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {c.arrival.options.map((o) => (
              <div key={o.id} className="border-t pt-5" style={{ borderColor: "var(--tp-shallow)" }}>
                <p
                  className="type-caption font-medium uppercase tracking-[0.1em]"
                  style={{ color: "var(--tp-shallow-deep)" }}
                >
                  {o.label}
                </p>
                <h3 className="mt-2 font-heading type-h3">
                  <PageLink id={o.id} locale={locale} />
                </h3>
                <p className="mt-3 type-small" style={{ color: "var(--tp-muted)" }}>
                  {o.body}
                </p>
              </div>
            ))}
          </div>
          <p
            className="mt-8 max-w-[70ch] border-l-4 py-1 pl-5 type-body"
            style={{ borderColor: "var(--tp-rust)", color: "var(--tp-ink)" }}
          >
            {c.arrival.note}
          </p>
        </Pan>

        <Pan>
          <Heading eyebrow={en ? "On the ground" : "A terra"}>{c.kerb.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--tp-muted)" }}>
            {c.kerb.lead}
          </p>
          {/* Four pans side by side: the flattest arrangement on the page. */}
          <ul className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.kerb.items.map((item) => (
              <li key={item.title} className="border-t pt-4" style={{ borderColor: "var(--tp-rule)" }}>
                <h3 className="font-heading type-h3" style={{ color: "var(--tp-ink)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 type-small" style={{ color: "var(--tp-muted)" }}>
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Pan>

        {/* ── Ferries. The one block on the page with a filled ground,
            because it is the one thing a transfer here cannot simply do. */}
        {c.ferries ? (
          <section
            id="ferries"
            className="scroll-mt-24 py-14 sm:py-18"
            style={{ background: "var(--tp-shallow-deep)" }}
          >
            <Container size="content">
              <h2 className="max-w-[26ch] font-heading type-h2" style={{ color: "#f2f8f8" }}>
                {c.ferries.heading}
              </h2>
              <p className="mt-5 max-w-[70ch] type-body" style={{ color: "#cadfe0" }}>
                {c.ferries.body}
              </p>
            </Container>
          </section>
        ) : null}

        <Pan tone="deep">
          <Heading>{c.nearby.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--tp-muted)" }}>
            {c.nearby.lead}
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.nearby.items.map((n) => (
              <li
                key={n.id}
                className="rounded-xl border p-5"
                style={{ borderColor: "var(--tp-rule)", background: "var(--tp-salt)" }}
              >
                <h3 className="font-heading type-h3">
                  <PageLink id={n.id} locale={locale} />
                </h3>
                <p className="mt-2 type-small" style={{ color: "var(--tp-muted)" }}>
                  {n.body}
                </p>
              </li>
            ))}
          </ul>
        </Pan>

        <Pan>
          <Heading>{c.practical.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--tp-muted)" }}>
            {c.practical.lead}
          </p>
          <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {c.practical.items.map((item) => (
              <div key={item.term}>
                <dt className="font-heading type-h3" style={{ color: "var(--tp-ink)" }}>
                  {item.term}
                </dt>
                <dd className="mt-2 type-small" style={{ color: "var(--tp-muted)" }}>
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Pan>

        <Pan tone="deep">
          <div className="mx-auto max-w-[72ch]">
            <Heading>{c.faq.heading}</Heading>
            <div className="mt-9 space-y-8">
              {c.faq.items.map((item) => (
                <article key={item.question}>
                  <h3 className="font-heading type-h3" style={{ color: "var(--tp-ink)" }}>
                    {item.question}
                  </h3>
                  <p className="mt-2 type-body" style={{ color: "var(--tp-muted)" }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Pan>

        <section className="py-16 sm:py-20" style={{ background: "var(--tp-salt)" }}>
          <Container size="content">
            <div
              className="rounded-2xl border px-7 py-10 sm:px-12 sm:py-14"
              style={{ borderColor: "var(--tp-shallow)", background: "var(--tp-salt-deep)" }}
            >
              <h2 className="font-heading type-h2" style={{ color: "var(--tp-ink)" }}>
                {c.close.heading}
              </h2>
              <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "var(--tp-muted)" }}>
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
