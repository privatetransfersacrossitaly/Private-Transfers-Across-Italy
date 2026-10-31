import Link from "next/link";
import { connection } from "next/server";
import { Container } from "@/components/site/container";
import { CrmSetupNotice } from "@/components/crm/chrome";
import { CrmLayout } from "@/components/crm/sidebar";
import {
  ActivityLog,
  MoneySummary,
  StatCards,
  WeeklyTransfers,
} from "@/components/crm/dashboard-panels";
import { isCrmConfigured, missingCrmConfig, requireCrmUser } from "@/lib/crm/auth";
import { dashboardStats, recentActivity, weeklyTransfers } from "@/lib/crm/leads";
import { isDatabaseConfigured } from "@/lib/db/d1";

/**
 * The CRM dashboard.
 *
 * ── Every figure is a query ───────────────────────────────────────────────
 * The cards, the week's transfers and the activity list are all read from D1
 * at request time. Nothing is hard-coded and nothing is cached, so a status
 * changed on a lead is reflected here on the next load with nothing to
 * invalidate.
 *
 * ── A server component ────────────────────────────────────────────────────
 * The queries run on the server, after `requireCrmUser()`. The browser
 * receives rendered rows and no database binding, so there is nothing here
 * for devtools to re-query — which is the specific failure of the reference
 * CRM, where the whole bookings table is fetched client-side with the anon
 * key.
 */
export default async function CrmDashboardPage() {
  // Request-time rendering, before anything reads the session cookie. With
  // `cacheComponents` this would otherwise be evaluated while the static
  // shell is produced, where there is no request and so no cookie.
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

  const user = await requireCrmUser();

  const [stats, week, activity] = await Promise.all([
    dashboardStats(),
    weeklyTransfers(),
    recentActivity(20),
  ]);

  return (
    <CrmLayout active="dashboard" username={user.username}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading type-h2 text-foreground">Dashboard</h1>
          <p className="mt-2 type-small text-muted-foreground">
            {stats.total === 0
              ? "No enquiries yet. They appear here the moment the quote form is used."
              : `${stats.total} ${stats.total === 1 ? "enquiry" : "enquiries"} received to date.`}
          </p>
        </div>
        <Link
          href="/crm/leads"
          className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 type-small font-medium text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          All leads
        </Link>
      </div>

      <div className="mt-7">
        <StatCards stats={stats} />
      </div>

      <MoneySummary rows={week} />
      <WeeklyTransfers rows={week} />
      <ActivityLog rows={activity} />
    </CrmLayout>
  );
}
