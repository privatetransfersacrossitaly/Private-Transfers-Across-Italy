"use client";

import { useActionState } from "react";
import { updateLeadNotesAction, updateLeadStatusAction } from "@/app/actions/crm";
import { initialCrmActionState } from "@/lib/crm/action-state";
import { ctaVariants } from "@/components/site/cta";
import { cn } from "cn";

/**
 * The two things the CRM can change about a lead.
 *
 * Both are client components only because they want pending state and an
 * inline result. Neither holds any authority: each posts to a server action
 * whose first statement is `requireCrmActorWithCsrf()`, so hiding or
 * disabling a control here changes what is convenient, never what is
 * permitted.
 *
 * The `csrf` prop is not a secret and is not a credential. It is an HMAC of
 * the session id, rendered into the form so the action can tell a submission
 * that came from this page apart from one a third-party site caused. Without
 * a valid session cookie it authorises nothing at all.
 *
 * That distinction is the one the reference system loses. Its CRM decides
 * what to render based on a client-side session check, and its actions then
 * accept whatever arrives.
 */

function Result({ state }: { state: { ok: boolean; message: string | null } }) {
  if (!state.message) return null;
  return (
    <p
      role="status"
      className={cn(
        "mt-3 type-caption",
        state.ok ? "text-success" : "text-accent-ink",
      )}
    >
      {state.message}
    </p>
  );
}

export function StatusControl({
  id,
  status,
  derived,
  csrf,
}: {
  id: string;
  status: string;
  derived: string;
  csrf: string;
}) {
  const [state, formAction, isPending] = useActionState(
    updateLeadStatusAction,
    initialCrmActionState,
  );

  // `completed` is derived from the trip date, so it is shown but never
  // offered: letting it be set by hand would make the stored value and the
  // derived one disagree.
  const options = [
    { value: "pending", label: "Pending" },
    { value: "confirmed", label: "Confirmed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="csrf" value={csrf} />
      <label htmlFor="lead-status" className="block type-label text-muted-foreground">
        Status
      </label>
      {derived === "completed" ? (
        <p className="mt-2 type-caption text-muted-foreground">
          This journey&rsquo;s last leg is in the past, so it shows as
          completed. Setting it back to pending or cancelled is still possible
          below.
        </p>
      ) : null}
      <div className="mt-2 flex flex-wrap gap-3">
        <select
          id="lead-status"
          name="status"
          defaultValue={status}
          className="min-w-[10rem] rounded-md border border-border-strong bg-surface px-3.5 py-2.5 type-small text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            ctaVariants({ variant: "outline", size: "md" }),
            "cursor-pointer disabled:cursor-not-allowed disabled:opacity-70",
          )}
        >
          {isPending ? "Saving…" : "Save status"}
        </button>
      </div>
      <Result state={state} />
    </form>
  );
}

export function NotesControl({
  id,
  notes,
  csrf,
}: {
  id: string;
  notes: string;
  csrf: string;
}) {
  const [state, formAction, isPending] = useActionState(
    updateLeadNotesAction,
    initialCrmActionState,
  );

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="csrf" value={csrf} />
      <label htmlFor="lead-notes" className="block type-label text-muted-foreground">
        Internal notes
      </label>
      <p className="mt-1.5 type-caption text-muted-foreground">
        Not sent to the customer. Visible only here.
      </p>
      <textarea
        id="lead-notes"
        name="notes"
        defaultValue={notes}
        maxLength={4000}
        className="mt-2 min-h-32 w-full resize-y rounded-md border border-border-strong bg-surface px-3.5 py-2.5 type-small text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      />
      <button
        type="submit"
        disabled={isPending}
        className={cn(
          ctaVariants({ variant: "outline", size: "md" }),
          "mt-3 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70",
        )}
      >
        {isPending ? "Saving…" : "Save notes"}
      </button>
      <Result state={state} />
    </form>
  );
}
