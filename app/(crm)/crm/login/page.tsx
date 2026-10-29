import type { Metadata } from "next";
import { connection } from "next/server";
import { Container } from "@/components/site/container";
import { CrmLoginForm } from "@/components/crm/login-form";
import { CrmSetupNotice } from "@/components/crm/chrome";
import { isCrmConfigured } from "@/lib/crm/auth";

export const metadata: Metadata = {
  title: { absolute: "Sign in — CRM" },
  robots: { index: false, follow: false },
};

/**
 * The only CRM route reachable without a session, which is why the
 * middleware exempts it.
 *
 * It renders no lead data and makes no privileged database call, so there is
 * nothing here for an unauthenticated visitor to see beyond a form.
 */
export default async function CrmLoginPage() {
  // Whether the CRM is configured is a property of the running deployment,
  // not of the build. Without this the branch below is frozen at build time:
  // a site built before Supabase was attached would keep serving "not
  // configured" afterwards, and one built after would claim to be ready on a
  // deployment that is not.
  await connection();

  const configured = isCrmConfigured();

  const missing = [
    !process.env.NEXT_PUBLIC_SUPABASE_URL && "NEXT_PUBLIC_SUPABASE_URL",
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    !process.env.SUPABASE_SERVICE_ROLE_KEY && "SUPABASE_SERVICE_ROLE_KEY",
    !process.env.CRM_ALLOWED_EMAILS && "CRM_ALLOWED_EMAILS",
  ].filter((value): value is string => Boolean(value));

  return (
    <main id="main" className="min-h-screen bg-surface-sunken py-20">
      <Container size="content">
        {configured ? (
          <div className="mx-auto max-w-md rounded-lg border border-border-strong bg-surface p-8 sm:p-10">
            <p className="type-label text-accent-ink">Internal</p>
            <h1 className="mt-3 font-heading type-h2 text-foreground">
              Private Transfer CRM
            </h1>
            <p className="mt-4 type-small text-muted-foreground">
              Lead management for Private Transfer Across Italy.
            </p>
            <div className="mt-8">
              <CrmLoginForm />
            </div>
          </div>
        ) : (
          <CrmSetupNotice missing={missing} />
        )}
      </Container>
    </main>
  );
}
