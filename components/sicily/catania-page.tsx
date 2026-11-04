import Link from "next/link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { Cta } from "@/components/site/cta";
import { cataniaPage } from "@/content/sicily";
import { pageName } from "@/content/page-names";
import { isPublished, pathFor, type PageId } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Catania.
 *
 * ── The device: a vertical axis ───────────────────────────────────────────
 * Catania's geography is one line: the sea at the bottom, the city on it,
 * the volcano above. So the page hangs off a single drawn axis running down
 * the left of the content, with each section pegged to it — the opposite of
 * Palermo's horizontal strata and of the pillar's three-corner grid.
 *
 * The axis is drawn with a border rather than a pseudo-element so it
 * survives forced-colours mode, and it is hidden from assistive technology:
 * it encodes nothing that the headings do not already say.
 *
 * ── Dark, and scoped ──────────────────────────────────────────────────────
 * The city is built from its own basalt and reads almost black in the
 * street. This is the only dark destination page in the cluster, which is
 * the point of it. The palette lives on this component's wrapper and is
 * never added to the global theme.
 *
 * Every foreground/background pair here was measured against WCAG AA before
 * it shipped: body text on the page ground, on the raised panels, and the
 * lava accent in both roles.
 *
 * ── No photographs ────────────────────────────────────────────────────────
 * Nothing of Sicily exists in the image library, and a stock volcano
 * captioned as Etna would be a claim about a specific place that we cannot
 * support.
 */

const cataniaTheme = {
  "--ct-basalt": "#1b1a19",
  "--ct-basalt-raised": "#262422",
  "--ct-rule": "#413c38",
  "--ct-bright": "#f6f3ed",
  "--ct-ash": "#cfc9c0",
  "--ct-lava": "#e08a5f",
  "--ct-lava-deep": "#c4603a",
} as React.CSSProperties;

function Heading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="max-w-[64ch]">
      {eyebrow ? (
        <p className="type-label" style={{ color: "var(--ct-lava)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading type-h2" style={{ color: "var(--ct-bright)" }}>
        {children}
      </h2>
    </div>
  );
}

/**
 * A section pegged to the page's vertical axis.
 *
 * The rule is drawn on the wrapper's left edge and the content is inset
 * from it, so every section on the page reads as hanging off one line.
 */
function Pegged({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className={`py-14 sm:py-18 ${id ? "scroll-mt-24" : ""}`}>
      <Container size="content">
        <div
          className="border-l-2 pl-6 sm:pl-10"
          style={{ borderColor: "var(--ct-rule)" }}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}

function PageLink({ id, locale }: { id: PageId; locale: Locale }) {
  const label = pageName(id, locale);
  if (!isPublished(id)) {
    return <span style={{ color: "var(--ct-bright)" }}>{label}</span>;
  }
  return (
    <Link
      href={pathFor(id, locale)}
      className="underline decoration-1 underline-offset-4 hover:no-underline"
      style={{ color: "var(--ct-bright)" }}
    >
      {label}
    </Link>
  );
}

export function CataniaPageView({ locale }: { locale: Locale }) {
  const c = cataniaPage[locale];
  const quoteHref = quotePathFor(locale);
  const en = locale === "en";

  return (
    <div style={cataniaTheme}>
      <header style={{ background: "var(--ct-basalt)" }}>
        <Container size="wide" className="py-10 sm:py-14 lg:py-18">
          <Breadcrumbs id="catania" locale={locale} label={c.hero.eyebrow} />

          <p className="mt-8 type-label" style={{ color: "var(--ct-lava)" }}>
            {c.hero.eyebrow}
          </p>
          <h1
            className="mt-3 max-w-[20ch] font-heading type-h1"
            style={{ color: "var(--ct-bright)" }}
          >
            {c.hero.h1}
          </h1>
          <p className="mt-6 max-w-[68ch] type-lead" style={{ color: "var(--ct-ash)" }}>
            {c.hero.lead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta href={quoteHref}>{c.hero.primaryCta}</Cta>
            <Cta href="#going" variant="outline">
              {c.hero.secondaryCta}
            </Cta>
          </div>

          <dl
            className="mt-10 grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "var(--ct-rule)" }}
          >
            {c.hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="type-caption" style={{ color: "var(--ct-ash)" }}>
                  {f.label}
                </dt>
                <dd
                  className="mt-1 type-small font-medium"
                  style={{ color: "var(--ct-bright)" }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <main id="main" style={{ background: "var(--ct-basalt)" }}>
        <Pegged>
          <Heading>{c.intro.heading}</Heading>
          <div className="mt-6 max-w-[68ch] space-y-5">
            {c.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="type-body" style={{ color: "var(--ct-ash)" }}>
                {p}
              </p>
            ))}
          </div>
        </Pegged>

        <Pegged>
          <Heading eyebrow={en ? "Arriving" : "L'arrivo"}>{c.arrival.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ct-ash)" }}>
            {c.arrival.lead}
          </p>

          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {c.arrival.options.map((o) => (
              <div
                key={o.id}
                className="rounded-xl border p-6"
                style={{ borderColor: "var(--ct-rule)", background: "var(--ct-basalt-raised)" }}
              >
                <p
                  className="type-caption font-medium uppercase tracking-[0.1em]"
                  style={{ color: "var(--ct-lava)" }}
                >
                  {o.label}
                </p>
                <h3 className="mt-2 font-heading type-h3">
                  <PageLink id={o.id} locale={locale} />
                </h3>
                <p className="mt-3 type-small" style={{ color: "var(--ct-ash)" }}>
                  {o.body}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-8 max-w-[68ch] border-l-4 py-1 pl-5 type-body"
            style={{ borderColor: "var(--ct-lava)", color: "var(--ct-bright)" }}
          >
            {c.arrival.note}
          </p>
        </Pegged>

        {/* ── Where a car can stop ──────────────────────────────────────
            Hung off the axis as a ruled sequence that climbs: centre,
            restricted streets, the mountain road, the coast. The order is
            the city's own geography read upwards. */}
        <Pegged>
          <Heading eyebrow={en ? "On the ground" : "A terra"}>{c.kerb.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ct-ash)" }}>
            {c.kerb.lead}
          </p>
          <ol className="mt-9">
            {c.kerb.items.map((item) => (
              <li
                key={item.title}
                className="border-t py-5"
                style={{ borderColor: "var(--ct-rule)" }}
              >
                <h3 className="font-heading type-h3" style={{ color: "var(--ct-bright)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[70ch] type-small" style={{ color: "var(--ct-ash)" }}>
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Pegged>

        {/* ── What people go for ────────────────────────────────────────── */}
        {c.going ? (
          <Pegged id="going">
            <Heading>{c.going.heading}</Heading>
            <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ct-ash)" }}>
              {c.going.lead}
            </p>
            <ul className="mt-9 grid gap-5 sm:grid-cols-2">
              {c.going.items.map((d) => (
                <li
                  key={d.name}
                  className="border-t pt-4"
                  style={{ borderColor: "var(--ct-lava-deep)" }}
                >
                  <h3 className="font-heading type-h3" style={{ color: "var(--ct-bright)" }}>
                    {d.name}
                  </h3>
                  <p className="mt-2 type-small" style={{ color: "var(--ct-ash)" }}>
                    {d.body}
                  </p>
                </li>
              ))}
            </ul>
          </Pegged>
        ) : null}

        <Pegged>
          <Heading>{c.nearby.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ct-ash)" }}>
            {c.nearby.lead}
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {c.nearby.items.map((n) => (
              <li
                key={n.id}
                className="rounded-xl border p-6"
                style={{ borderColor: "var(--ct-rule)", background: "var(--ct-basalt-raised)" }}
              >
                <h3 className="font-heading type-h3">
                  <PageLink id={n.id} locale={locale} />
                </h3>
                <p className="mt-2 type-small" style={{ color: "var(--ct-ash)" }}>
                  {n.body}
                </p>
              </li>
            ))}
          </ul>
        </Pegged>

        <Pegged>
          <Heading>{c.practical.heading}</Heading>
          <p className="mt-4 max-w-[64ch] type-lead" style={{ color: "var(--ct-ash)" }}>
            {c.practical.lead}
          </p>
          <dl className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {c.practical.items.map((item) => (
              <div key={item.term}>
                <dt className="font-heading type-h3" style={{ color: "var(--ct-bright)" }}>
                  {item.term}
                </dt>
                <dd className="mt-2 type-small" style={{ color: "var(--ct-ash)" }}>
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Pegged>

        <Pegged>
          <Heading>{c.faq.heading}</Heading>
          <div className="mt-9 max-w-[72ch] space-y-8">
            {c.faq.items.map((item) => (
              <article key={item.question}>
                <h3 className="font-heading type-h3" style={{ color: "var(--ct-bright)" }}>
                  {item.question}
                </h3>
                <p className="mt-2 type-body" style={{ color: "var(--ct-ash)" }}>
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </Pegged>

        {/* ── Close. The axis stops here: the band runs full width. ────── */}
        <section className="py-16 sm:py-20" style={{ background: "var(--ct-basalt-raised)" }}>
          <Container size="content">
            <h2 className="font-heading type-h2" style={{ color: "var(--ct-bright)" }}>
              {c.close.heading}
            </h2>
            <p className="mt-4 max-w-[62ch] type-lead" style={{ color: "var(--ct-ash)" }}>
              {c.close.body}
            </p>
            <Cta href={quoteHref} className="mt-8">
              {c.close.cta}
            </Cta>
          </Container>
        </section>
      </main>
    </div>
  );
}
