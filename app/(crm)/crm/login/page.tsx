import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { Container } from "@/components/site/container";
import { CrmSetupNotice } from "@/components/crm/chrome";
import { LoginForm } from "@/components/crm/login-form";
import { getCrmUser, isCrmConfigured, missingCrmConfig } from "@/lib/crm/auth";
import { isDatabaseConfigured } from "@/lib/db/d1";

export const metadata: Metadata = {
  title: { absolute: "Sign in — CRM" },
  robots: { index: false, follow: false },
};

/**
 * The CRM sign-in page. It replaced `/crm/denied`, which existed only to
 * explain why Cloudflare Access had let someone through but the application
 * had not.
 *
 * ── It renders no lead data and makes no lead query ───────────────────────
 * Which is what makes it safe to be the one page under `/crm` that an
 * unauthenticated request may reach. The only database work it can cause is
 * the session lookup below, and the login action's rate-limit read.
 *
 * ── Already signed in? Go to the CRM ──────────────────────────────────────
 * So that a bookmarked login URL is not a dead end after a session exists.
 */
export default async function CrmLoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  // Whether the CRM is configured is a property of the running deployment,
  // not of the build. Without this the branch below freezes at build time and
  // a site built before the secrets were set would keep saying "not
  // configured" afterwards.
  await connection();

  if (!isCrmConfigured() || !isDatabaseConfigured()) {
    const missing = [
      ...missingCrmConfig(),
      !isDatabaseConfigured() && "DB (D1 binding in wrangler.jsonc)",
    ].filter((value): value is string => Boolean(value));
    return (
      <main id="main" className="min-h-screen bg-surface-sunken py-20">
        <Container size="content">
          <CrmSetupNotice missing={missing} />
        </Container>
      </main>
    );
  }

  if (await getCrmUser()) redirect("/crm");

  const params = await searchParams;
  const signedOut = params.signedOut === "1";

  return (
    <main id="main" className="min-h-screen bg-surface-sunken py-20">
      <Container size="content">
        <div className="mx-auto max-w-md rounded-lg border border-border-strong bg-surface p-8 sm:p-10">
          <p className="type-label text-accent-ink">Internal</p>
          <h1 className="mt-3 font-heading type-h2 text-foreground">
            Sign in to the CRM
          </h1>
          <p className="mt-4 type-small text-muted-foreground">
            This area holds customer enquiries. It is for the administrator of
            Private Transfer Across Italy.
          </p>

          <LoginForm signedOut={signedOut} />
        </div>
      </Container>
    </main>
  );
}
