"use client";

import { useState } from "react";
import { Band } from "@/components/site/band";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { Container } from "@/components/site/container";
import { QuoteForm } from "@/components/quote/quote-form";
import { quote } from "@/content/quote";
import type { Locale } from "@/lib/site";

/**
 * Get a Quote.
 *
 * ── The opening is deliberately short ─────────────────────────────────────
 * It used to carry an eyebrow, a lead paragraph and three assurance lines
 * above the form. On a phone that filled the first screen and most of the
 * second, so the page whose entire job is the form opened on everything
 * except the form. What is left is the breadcrumb and the heading — enough
 * to say where you are — and then the first field.
 *
 * The removed copy is still in `content/quote/*.ts`; it is the page that
 * stopped rendering it, not the content that was deleted.
 *
 * ── Why this is a client component ────────────────────────────────────────
 * Only so that a successful submission can clear the page down to the
 * confirmation. The heading and the aside are siblings of the form, not its
 * children, so the form cannot hide them on its own — it reports upward
 * instead. Nothing here fetches or computes; the content is a plain object
 * passed straight through.
 *
 * ── The aside, and why it is beside rather than below ─────────────────────
 * "What happens next" answers the question a visitor has *while* filling the
 * form in, not after. On a wide screen it sits in a sticky column alongside;
 * below the large breakpoint it drops under the form, which is the same
 * reading order a screen reader gets.
 */
export function QuotePage({ locale }: { locale: Locale }) {
  const c = quote[locale];
  const [delivered, setDelivered] = useState(false);

  return (
    <>
      {!delivered ? (
        <header className="border-b border-border bg-surface-sunken">
          <Container size="content" className="py-7 sm:py-9">
            <Breadcrumbs id="quote" locale={locale} label={c.breadcrumbLabel} />
            <h1 className="mt-5 type-h1 text-foreground">{c.hero.h1}</h1>
          </Container>
        </header>
      ) : null}

      <Band spacing="normal" size="wide">
        {/* The form keeps the wider track: addresses and email are the long
            values on this page, and squeezing them to make room for an aside
            would be the wrong trade. */}
        <div
          className={
            delivered
              ? "mx-auto max-w-[70ch]"
              : "grid gap-x-10 gap-y-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] xl:items-start xl:gap-x-14"
          }
        >
          {/* No `order-*` here on purpose. DOM order is form first, so on a
              phone the first field is the first thing after the heading. */}
          <div>
            <QuoteForm content={c} locale={locale} onDelivered={setDelivered} />
          </div>

          {/* Gone once the request is in: it answers a question the visitor
              no longer has, and the confirmation should be the whole page. */}
          {!delivered ? (
            <aside className="xl:sticky xl:top-28">
              <div className="rounded-lg border border-border-strong bg-surface p-6 sm:p-7">
                <h2 className="font-heading type-h3 text-foreground">
                  {c.aside.heading}
                </h2>
                {/* Stacked rather than `DefinitionList`, which lays its term
                    and detail side by side on a 14rem track. That is right in
                    a full-width band and wrong in a 21rem column, where it
                    leaves the detail nowhere to wrap. */}
                <dl className="mt-6 divide-y divide-border">
                  {c.aside.items.map((item) => (
                    <div key={item.term} className="py-4 first:pt-0 last:pb-0">
                      <dt className="font-heading type-h3 text-foreground">
                        {item.term}
                      </dt>
                      <dd className="mt-1.5 type-small text-muted-foreground">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 border-t border-border pt-5 type-caption text-muted-foreground">
                  {c.aside.note}
                </p>
              </div>
            </aside>
          ) : null}
        </div>
      </Band>
    </>
  );
}
