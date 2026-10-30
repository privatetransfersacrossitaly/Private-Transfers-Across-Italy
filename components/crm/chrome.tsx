import Link from "next/link";
import { signOutAction } from "@/app/actions/crm-auth";
import { Container } from "@/components/site/container";
import { cn } from "cn";

/**
 * The CRM's own header and page shell.
 *
 * It uses the site's palette, type scale and container, so it is recognisably
 * the same product — but not the site's navbar and footer, which exist to
 * sell transfers to visitors and have no business on an internal tool.
 *
 * The deep band is deliberate: it makes it obvious at a glance that you are
 * looking at the back office and not at the website.
 */
export function CrmHeader({ username }: { username: string }) {
  return (
    <header className="border-b border-deep-line bg-deep text-deep-foreground">
      <Container size="wide" className="flex flex-wrap items-center gap-x-6 gap-y-3 py-4">
        <Link
          href="/crm"
          className="font-heading type-h3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span className="text-deep-foreground">Private Transfer</span>
          <span className="ml-1.5 text-accent-glow">CRM</span>
        </Link>

        <div className="ml-auto flex items-center gap-5">
          <span className="hidden type-caption text-deep-muted sm:inline">
            {username}
          </span>
          {/*
            A form, not a link. Signing out deletes the session row, which is
            a state change, and a GET that mutates state can be triggered by
            anything that prefetches a URL — including the browser itself.
          */}
          <form action={signOutAction}>
            <button
              type="submit"
              className="inline-flex min-h-9 cursor-pointer items-center rounded-md border border-deep-muted/60 px-3.5 type-caption font-medium text-deep-foreground transition-colors hover:bg-deep-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Sign out
            </button>
          </form>
        </div>
      </Container>
    </header>
  );
}

export function CrmShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main" className="min-h-[60vh] bg-surface-sunken pb-20">
      <Container size="wide" className="pt-10">
        {children}
      </Container>
    </main>
  );
}

const statusTone: Record<string, string> = {
  pending: "border-accent/40 bg-accent-wash text-accent-ink",
  confirmed: "border-success/40 bg-success/10 text-success",
  completed: "border-border-strong bg-muted text-muted-foreground",
  cancelled: "border-destructive/40 bg-destructive/10 text-destructive",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 type-caption font-medium capitalize",
        statusTone[status] ?? statusTone.completed,
      )}
    >
      {status}
    </span>
  );
}

/**
 * Shown when the CRM has not been configured for this deployment.
 *
 * It explains what is missing rather than failing with a stack trace, and —
 * because it renders no lead data — it is safe to show to anyone.
 */
export function CrmSetupNotice({ missing }: { missing: string[] }) {
  return (
    <div className="mx-auto max-w-[62ch] rounded-lg border border-border-strong bg-surface p-7 sm:p-9">
      <p className="type-label text-accent-ink">Setup required</p>
      <h1 className="mt-3 font-heading type-h2 text-foreground">
        The CRM is not configured yet
      </h1>
      <p className="mt-4 type-body text-muted-foreground">
        This deployment does not know which Cloudflare Access application to
        trust, or who is allowed in, so there is nothing to show. Nothing is
        broken — the quotation form behaves the same way and tells visitors
        plainly when it is not live.
      </p>
      <p className="mt-6 type-label text-muted-foreground">Missing</p>
      <ul className="mt-3 space-y-2">
        {missing.map((name) => (
          <li key={name} className="font-mono type-small text-foreground">
            {name}
          </li>
        ))}
      </ul>
      <p className="mt-6 border-t border-border pt-5 type-small text-muted-foreground">
        The steps are in <code className="font-mono">.env.example</code> and in{" "}
        <code className="font-mono">docs/lead-system-stage-a-report.md</code>.
      </p>
    </div>
  );
}
