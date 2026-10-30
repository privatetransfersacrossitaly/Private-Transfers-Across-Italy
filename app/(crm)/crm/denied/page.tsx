import type { Metadata } from "next";
import { connection } from "next/server";
import { Container } from "@/components/site/container";
import { CrmSetupNotice } from "@/components/crm/chrome";
import { isCrmConfigured } from "@/lib/crm/auth";

export const metadata: Metadata = {
  title: { absolute: "No access — CRM" },
  robots: { index: false, follow: false },
};

/**
 * What a request that got past Cloudflare Access but is not allow-listed
 * sees. It replaced `/crm/login`.
 *
 * ── Why there is no login form any more ───────────────────────────────────
 * Cloudflare Access does the authenticating, at the edge, before this Worker
 * runs. A local sign-in form would be a second door into the same room, with
 * its own password storage, its own session cookie and its own bugs — and the
 * only thing it could add is a way in that bypasses Access. So there isn't
 * one.
 *
 * ── Why this page can exist at all ────────────────────────────────────────
 * Two cases reach it. Either Access authenticated someone whose address is
 * not in `CRM_ALLOWED_EMAILS` — the application's own second test, kept
 * deliberately independent of the Access policy so that widening one does not
 * widen the other — or the deployment is not configured.
 *
 * It renders no lead data and makes no database call, so there is nothing
 * here for an unauthorised visitor to read.
 */
export default async function CrmDeniedPage() {
  // Whether the CRM is configured is a property of the running deployment,
  // not of the build. Without this the branch below freezes at build time: a
  // site built before Access was configured would keep saying "not
  // configured" afterwards, and one built after would claim to be ready on a
  // deployment that is not.
  await connection();

  const configured = isCrmConfigured();

  const missing = [
    !process.env.CF_ACCESS_TEAM_DOMAIN && "CF_ACCESS_TEAM_DOMAIN",
    !process.env.CF_ACCESS_AUD && "CF_ACCESS_AUD",
    !process.env.CRM_ALLOWED_EMAILS && "CRM_ALLOWED_EMAILS",
  ].filter((value): value is string => Boolean(value));

  return (
    <main id="main" className="min-h-screen bg-surface-sunken py-20">
      <Container size="content">
        {configured ? (
          <div className="mx-auto max-w-md rounded-lg border border-border-strong bg-surface p-8 sm:p-10">
            <p className="type-label text-accent-ink">Internal</p>
            <h1 className="mt-3 font-heading type-h2 text-foreground">
              No access to this CRM
            </h1>
            <p className="mt-4 type-small text-muted-foreground">
              You signed in, but this address is not on the list of people
              permitted to use the CRM for Private Transfer Across Italy.
            </p>
            <p className="mt-3 type-small text-muted-foreground">
              If that is wrong, the address has to be added to the CRM&rsquo;s
              own allow-list as well as to the Cloudflare Access policy — being
              allowed through Access is deliberately not enough on its own.
            </p>
            <a
              href="/cdn-cgi/access/logout"
              className="mt-8 inline-flex min-h-11 items-center rounded-md border border-border-strong px-4 type-small font-medium text-foreground transition-colors hover:bg-surface-sunken focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Sign out and try another account
            </a>
          </div>
        ) : (
          <CrmSetupNotice missing={missing} />
        )}
      </Container>
    </main>
  );
}
