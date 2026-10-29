"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { counterpartForPath } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import { cn } from "cn";
import type { NavEntry } from "@/content/navigation";

/**
 * The global navigation: mega menus on desktop, one drawer on small screens,
 * the same configuration behind both.
 *
 * This is the site's only client component, and it is one because the
 * behaviour genuinely needs it — Escape to close, close on outside click,
 * close after navigating, a focus trap in the drawer and a scroll lock behind
 * it. The links themselves come from `content/navigation.ts`, which only ever
 * contains targets that exist.
 *
 * A menu whose group list collapses to a single link is rendered as a plain
 * top-level link instead, so the architecture can carry future groups without
 * the navbar looking padded today.
 */
export function SiteNav({
  entries,
  quote,
  strings,
  language,
}: {
  entries: NavEntry[];
  quote: { href: string; label: string };
  strings: { menuLabel: string; openMenu: string; closeMenu: string };
  language: { code: string; lang: Locale; label: string };
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openedBy, setOpenedBy] = useState<"hover" | "click">("hover");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const triggers = useRef(new Map<string, HTMLButtonElement | null>());
  const pathname = usePathname();
  const baseId = useId();

  const isCurrent = useCallback(
    (href?: string) => Boolean(href) && href!.split("#")[0] === pathname,
    [pathname],
  );

  // Adjusting state during render rather than in an effect: the menus have to
  // be closed in the frame that paints the new route.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenMenu(null);
    setDrawerOpen(false);
  }

  useEffect(() => {
    if (!openMenu && !drawerOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (drawerOpen) {
        setDrawerOpen(false);
        toggleRef.current?.focus();
      } else if (openMenu) {
        const trigger = triggers.current.get(openMenu);
        setOpenMenu(null);
        trigger?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openMenu, drawerOpen]);

  useEffect(() => {
    if (!openMenu) return;
    const onDown = (event: PointerEvent) => {
      if (!barRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [openMenu]);

  // The drawer is modal: the page behind it does not scroll and Tab stays in.
  useEffect(() => {
    if (!drawerOpen) return;
    const { body } = document;
    const previous = body.style.overflow;
    body.style.overflow = "hidden";
    const panel = drawerRef.current;
    panel?.querySelector<HTMLElement>("[data-drawer-close]")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  // `px-2` between lg and xl, `px-3` from xl.
  //
  // The desktop bar first appears at lg, where the wordmark, the six
  // entries, the language switch and the quote button together overflowed
  // the container — on every page of the site. Italian overflowed by more,
  // because its labels are longer and "Richiedi un preventivo" is a 201px
  // button that `shrink-0` stops from giving anything back. The three
  // reductions here, in site-header.tsx, all end at xl, so a wide screen
  // keeps the original spacing.
  const topLink =
    "inline-flex min-h-11 items-center rounded-md px-2 type-small font-medium text-muted-foreground transition-colors hover:bg-surface-sunken hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring xl:px-3";
  const groupHeading =
    "px-2 type-label text-accent-ink";
  const panelLink =
    "block rounded-md px-2 py-2 transition-colors hover:bg-surface-sunken focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

  /** A menu with one link in total is a link, not a menu. */
  const flatten = (entry: NavEntry) => {
    if (entry.href) return entry.href;
    const items = (entry.groups ?? []).flatMap((g) => g.items.filter((i) => i.href));
    return items.length === 1 ? items[0].href : undefined;
  };

  return (
    <>
      {/* ── Desktop ─────────────────────────────────────────────────────── */}
      <div ref={barRef} className="hidden lg:block">
        <nav aria-label="Primary">
          {/* The panels are positioned against this list, not against their
              triggers: anchored to a trigger, the right-hand menu ran off the
              edge of the viewport at 1280 and both did at 1024. */}
          <ul className="relative flex items-center gap-0.5">
            {entries.map((entry) => {
              const direct = flatten(entry);
              if (direct) {
                return (
                  <li key={entry.id}>
                    <Link
                      href={direct}
                      aria-current={isCurrent(direct) && !direct.includes("#") ? "page" : undefined}
                      className={topLink}
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              }

              const groups = (entry.groups ?? [])
                .map((g) => ({ ...g, items: g.items.filter((i) => i.href) }))
                .filter((g) => g.items.length > 0);
              if (groups.length === 0) return null;

              const panelId = `${baseId}-${entry.id}`;
              const open = openMenu === entry.id;

              return (
                <li
                  key={entry.id}
                  onPointerEnter={() => {
                    setOpenMenu(entry.id);
                    setOpenedBy("hover");
                  }}
                  onPointerLeave={() => {
                    if (openedBy === "hover") setOpenMenu(null);
                  }}
                >
                  <button
                    type="button"
                    ref={(node) => {
                      triggers.current.set(entry.id, node);
                    }}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => {
                      if (open && openedBy === "click") {
                        setOpenMenu(null);
                        return;
                      }
                      setOpenMenu(entry.id);
                      setOpenedBy("click");
                    }}
                    className={cn(topLink, "gap-1.5", open && "text-foreground")}
                  >
                    {entry.label}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 12"
                      className={cn("size-2.5 transition-transform", open && "rotate-180")}
                      fill="none"
                    >
                      <path
                        d="M2.5 4.5 6 8l3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div id={panelId} hidden={!open} className="absolute top-full left-0 z-50 w-full pt-2">
                    <div
                      className={cn(
                        "grid max-h-[min(70vh,34rem)] gap-x-8 gap-y-6 overflow-y-auto overscroll-contain rounded-lg border border-border bg-surface p-5 shadow-lg",
                        groups.length > 1
                          ? "w-[min(46rem,calc(100vw-3rem))] sm:grid-cols-2"
                          : "w-[min(24rem,calc(100vw-3rem))]",
                      )}
                    >
                      {groups.map((group) => (
                        <div key={group.id}>
                          <p className={groupHeading}>{group.heading}</p>
                          <ul className="mt-2 space-y-0.5">
                            {group.items.map((item) => (
                              <li key={item.id}>
                                <Link
                                  href={item.href!}
                                  onClick={() => setOpenMenu(null)}
                                  className={panelLink}
                                >
                                  <span className="block type-small font-medium text-foreground">
                                    {item.label}
                                  </span>
                                  {item.description ? (
                                    <span className="mt-0.5 block type-caption text-muted-foreground">
                                      {item.description}
                                    </span>
                                  ) : null}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* ── Mobile toggle ───────────────────────────────────────────────── */}
      <button
        type="button"
        ref={toggleRef}
        aria-expanded={drawerOpen}
        aria-controls={`${baseId}-drawer`}
        aria-label={drawerOpen ? strings.closeMenu : strings.openMenu}
        onClick={() => setDrawerOpen((value) => !value)}
        className="order-last inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-border-strong text-foreground transition-colors hover:bg-surface-sunken focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
          <path
            d={drawerOpen ? "M5 5l10 10M15 5L5 15" : "M3 6h14M3 10h14M3 14h14"}
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* ── Mobile drawer ───────────────────────────────────────────────── */}
      {drawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-foreground/40"
          />
          <div
            id={`${baseId}-drawer`}
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label={strings.menuLabel}
            className="absolute inset-x-0 top-0 flex max-h-[100dvh] flex-col border-b border-border bg-background shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <span className="font-heading type-h3">{strings.menuLabel}</span>
              <button
                type="button"
                data-drawer-close
                onClick={() => setDrawerOpen(false)}
                aria-label={strings.closeMenu}
                className="inline-flex size-11 items-center justify-center rounded-md border border-border-strong text-foreground transition-colors hover:bg-surface-sunken focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto overscroll-contain px-5 py-3">
              {entries.map((entry) => {
                const direct = flatten(entry);
                if (direct) {
                  return (
                    <Link
                      key={entry.id}
                      href={direct}
                      onClick={() => setDrawerOpen(false)}
                      className="flex min-h-11 items-center border-b border-border type-small font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {entry.label}
                    </Link>
                  );
                }

                const groups = (entry.groups ?? [])
                  .map((g) => ({ ...g, items: g.items.filter((i) => i.href) }))
                  .filter((g) => g.items.length > 0);
                if (groups.length === 0) return null;

                return (
                  <details key={entry.id} className="group border-b border-border">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between type-small font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                      {entry.label}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 12 12"
                        className="size-3 transition-transform group-open:rotate-180"
                        fill="none"
                      >
                        <path
                          d="M2.5 4.5 6 8l3.5-3.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </summary>
                    <div className="pb-3">
                      {groups.map((group) => (
                        <div key={group.id} className="mt-2">
                          <p className="type-label text-accent-ink">
                            {group.heading}
                          </p>
                          <ul className="mt-1">
                            {group.items.map((item) => (
                              <li key={item.id}>
                                <Link
                                  href={item.href!}
                                  onClick={() => setDrawerOpen(false)}
                                  className="flex min-h-11 items-center type-small text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                );
              })}

              <div className="mt-4 flex items-center gap-3">
                <Link
                  href={quote.href}
                  onClick={() => setDrawerOpen(false)}
                  className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-accent px-5 type-small font-medium text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {quote.label}
                </Link>
                <Link
                  href={counterpartForPath(pathname, language.lang)}
                  hrefLang={language.lang}
                  lang={language.lang}
                  aria-label={`${language.label}: ${language.code}`}
                  onClick={() => setDrawerOpen(false)}
                  className="inline-flex min-h-11 items-center rounded-md border border-border-strong px-3 type-caption font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:bg-surface-sunken hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {language.code}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
