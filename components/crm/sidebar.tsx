import Image from "next/image";
import Link from "next/link";
import { signOutAction } from "@/app/actions/crm-auth";
import { siteName } from "@/lib/site";
import { cn } from "cn";

/**
 * The CRM's navigation.
 *
 * ── Only sections that exist appear ───────────────────────────────────────
 * Drivers, Invoices and Reports are later phases. They are deliberately not
 * listed yet: a sidebar entry that opens an empty page teaches you to
 * distrust the sidebar, and then you stop noticing when something real is
 * broken. Each one joins this list when its phase lands.
 *
 * ── Why the brand plate ───────────────────────────────────────────────────
 * This panel is `bg-deep`, and two of the three words in the logo are dark
 * navy, so the lockup needs a light ground to be legible — the same reason
 * the public footer uses one.
 */

export type CrmSection = "dashboard" | "leads";

const sections: { id: CrmSection; href: string; label: string; hint: string }[] = [
  { id: "dashboard", href: "/crm", label: "Dashboard", hint: "Overview and this week" },
  { id: "leads", href: "/crm/leads", label: "Leads & Bookings", hint: "Every enquiry" },
];

export function CrmSidebar({
  active,
  username,
}: {
  active: CrmSection;
  username: string;
}) {
  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-deep-line bg-deep text-deep-foreground lg:h-dvh lg:w-64 lg:border-r lg:border-b-0">
      <div className="p-5">
        <Link
          href="/crm"
          className="inline-flex rounded-lg bg-background p-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Image
            src="/brand/logo.png"
            alt={siteName}
            width={480}
            height={105}
            className="h-7 w-auto"
          />
        </Link>
        <p className="mt-3 type-label text-accent-glow">Operations</p>
      </div>

      <nav aria-label="CRM sections" className="flex gap-2 px-3 pb-4 lg:flex-col lg:gap-1">
        {sections.map((section) => {
          const current = section.id === active;
          return (
            <Link
              key={section.id}
              href={section.href}
              aria-current={current ? "page" : undefined}
              className={cn(
                "block rounded-md px-3 py-2.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                current
                  ? "bg-deep-foreground/12 text-deep-foreground"
                  : "text-deep-muted hover:bg-deep-foreground/6 hover:text-deep-foreground",
              )}
            >
              <span className="block type-small font-medium">{section.label}</span>
              <span className="hidden type-caption text-deep-muted lg:block">
                {section.hint}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-deep-line p-4">
        <p className="type-caption text-deep-muted">Signed in as</p>
        <p className="mt-0.5 type-small text-deep-foreground">{username}</p>
        {/*
          A form, not a link. Signing out deletes the session row, and a GET
          that mutates state can be fired by anything that prefetches a URL.
        */}
        <form action={signOutAction} className="mt-3">
          <button
            type="submit"
            className="inline-flex min-h-9 w-full cursor-pointer items-center justify-center rounded-md border border-deep-muted/60 px-3.5 type-caption font-medium text-deep-foreground transition-colors hover:bg-deep-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Sign out
          </button>
        </form>
      </div>
    </aside>
  );
}

/** The page frame every CRM screen sits in. */
export function CrmLayout({
  active,
  username,
  children,
}: {
  active: CrmSection;
  username: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-surface-sunken lg:flex">
      <CrmSidebar active={active} username={username} />
      <main id="main" className="min-w-0 flex-1 px-5 py-8 sm:px-8 lg:overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
