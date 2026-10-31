"use client";

import { useActionState, useState } from "react";
import {
  cancelBookingAction,
  confirmBookingAction,
  updateLeadDetailsAction,
} from "@/app/actions/crm";
import { initialCrmActionState } from "@/lib/crm/action-state";
import { ctaVariants } from "@/components/site/cta";
import { PAYMENT_LABELS } from "@/lib/leads/types";
import { cn } from "cn";

/**
 * Editing, confirming and cancelling a booking.
 *
 * ── None of these holds any authority ─────────────────────────────────────
 * Each posts to a server action whose first statement is
 * `requireCrmActorWithCsrf()`, so hiding or disabling a control here changes
 * what is convenient, never what is permitted. The `csrf` value is an HMAC of
 * the session id — not a credential, and worthless without the session cookie.
 *
 * ── Why cancelling is behind a confirmation step ──────────────────────────
 * It is the one action here a person would regret. The reason field is
 * required by the action, not merely by this markup, so a crafted POST
 * cannot skip it either.
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

const field =
  "mt-1.5 w-full rounded-md border border-border-strong bg-surface px-3 py-2 type-small text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const label = "block type-label text-muted-foreground";

function money(cents: number | null): string {
  return cents === null ? "" : (cents / 100).toFixed(2);
}

export type EditableLead = {
  id: string;
  full_name: string;
  email: string;
  phone_e164: string;
  pickup: string;
  dropoff: string;
  pickup_at_local: string;
  travel_reference: string | null;
  has_return: boolean;
  return_pickup: string | null;
  return_dropoff: string | null;
  return_at_local: string | null;
  return_travel_reference: string | null;
  adults: number;
  children: number;
  child_ages: string | null;
  luggage_hold: number;
  luggage_cabin: number;
  customer_message: string | null;
  quoted_amount_cents: number | null;
  supplier_cost_cents: number | null;
  commission_cents: number | null;
  customer_paid_cents: number | null;
  payment_status: string;
  currency: string;
};

export function EditLeadForm({ lead, csrf }: { lead: EditableLead; csrf: string }) {
  const [state, formAction, isPending] = useActionState(
    updateLeadDetailsAction,
    initialCrmActionState,
  );
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(ctaVariants({ variant: "outline", size: "md" }), "cursor-pointer")}
        >
          Edit details
        </button>
        <Result state={state} />
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="id" value={lead.id} />
      <input type="hidden" name="csrf" value={csrf} />

      <fieldset className="space-y-3">
        <legend className="font-heading type-h3 text-foreground">Customer</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="block">
            <span className={label}>Name</span>
            <input name="full_name" defaultValue={lead.full_name} required maxLength={190} className={field} />
          </label>
          <label className="block">
            <span className={label}>Email</span>
            <input type="email" name="email" defaultValue={lead.email} required maxLength={190} className={field} />
          </label>
          <label className="block">
            <span className={label}>Phone (E.164)</span>
            <input name="phone_e164" defaultValue={lead.phone_e164} maxLength={32} className={field} />
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-heading type-h3 text-foreground">Outbound</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className={label}>Pickup</span>
            <input name="pickup" defaultValue={lead.pickup} maxLength={300} className={field} />
          </label>
          <label className="block">
            <span className={label}>Drop-off</span>
            <input name="dropoff" defaultValue={lead.dropoff} maxLength={300} className={field} />
          </label>
          <label className="block">
            <span className={label}>Date and time (Rome local)</span>
            <input
              type="datetime-local"
              name="pickup_at_local"
              defaultValue={lead.pickup_at_local}
              required
              className={field}
            />
          </label>
          <label className="block">
            <span className={label}>Flight / train / ship</span>
            <input name="travel_reference" defaultValue={lead.travel_reference ?? ""} maxLength={60} className={field} />
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-heading type-h3 text-foreground">Return</legend>
        <p className="type-caption text-muted-foreground">
          Leave the date empty for a one-way journey.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className={label}>Pickup</span>
            <input name="return_pickup" defaultValue={lead.return_pickup ?? ""} maxLength={300} className={field} />
          </label>
          <label className="block">
            <span className={label}>Drop-off</span>
            <input name="return_dropoff" defaultValue={lead.return_dropoff ?? ""} maxLength={300} className={field} />
          </label>
          <label className="block">
            <span className={label}>Date and time (Rome local)</span>
            <input
              type="datetime-local"
              name="return_at_local"
              defaultValue={lead.return_at_local ?? ""}
              className={field}
            />
          </label>
          <label className="block">
            <span className={label}>Flight / train / ship</span>
            <input name="return_travel_reference" defaultValue={lead.return_travel_reference ?? ""} maxLength={60} className={field} />
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-heading type-h3 text-foreground">Party and luggage</legend>
        <div className="grid gap-3 sm:grid-cols-5">
          <label className="block">
            <span className={label}>Adults</span>
            <input type="number" name="adults" min={1} max={99} defaultValue={lead.adults} className={field} />
          </label>
          <label className="block">
            <span className={label}>Children</span>
            <input type="number" name="children" min={0} max={99} defaultValue={lead.children} className={field} />
          </label>
          <label className="block">
            <span className={label}>Child ages</span>
            <input name="child_ages" defaultValue={lead.child_ages ?? ""} maxLength={120} className={field} />
          </label>
          <label className="block">
            <span className={label}>Hold bags</span>
            <input type="number" name="luggage_hold" min={0} max={99} defaultValue={lead.luggage_hold} className={field} />
          </label>
          <label className="block">
            <span className={label}>Cabin bags</span>
            <input type="number" name="luggage_cabin" min={0} max={99} defaultValue={lead.luggage_cabin} className={field} />
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="font-heading type-h3 text-foreground">Money</legend>
        <p className="type-caption text-muted-foreground">
          Leave a field empty when the figure is not known. Empty is not zero —
          an unquoted booking and one quoted at nothing are different things.
          Commission is calculated as quoted minus supplier cost unless you
          enter one.
        </p>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <label className="block">
            <span className={label}>Currency</span>
            <input name="currency" defaultValue={lead.currency} maxLength={3} className={field} />
          </label>
          <label className="block">
            <span className={label}>Quoted</span>
            <input name="quoted_amount" inputMode="decimal" defaultValue={money(lead.quoted_amount_cents)} className={field} />
          </label>
          <label className="block">
            <span className={label}>Customer paid</span>
            <input name="customer_paid" inputMode="decimal" defaultValue={money(lead.customer_paid_cents)} className={field} />
          </label>
          <label className="block">
            <span className={label}>Supplier cost</span>
            <input name="supplier_cost" inputMode="decimal" defaultValue={money(lead.supplier_cost_cents)} className={field} />
          </label>
          <label className="block">
            <span className={label}>Commission</span>
            <input name="commission" inputMode="decimal" defaultValue={money(lead.commission_cents)} placeholder="auto" className={field} />
          </label>
          <label className="block">
            <span className={label}>Payment status</span>
            <select name="payment_status" defaultValue={lead.payment_status} className={field}>
              {Object.entries(PAYMENT_LABELS).map(([value, text]) => (
                <option key={value} value={value}>{text}</option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      <label className="block">
        <span className={label}>Customer message</span>
        <textarea name="customer_message" defaultValue={lead.customer_message ?? ""} maxLength={4000} className={cn(field, "min-h-24 resize-y")} />
      </label>

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={isPending}
          className={cn(ctaVariants({ variant: "primary", size: "md" }), "cursor-pointer disabled:cursor-not-allowed disabled:opacity-70")}
        >
          {isPending ? "Saving…" : "Save changes"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={cn(ctaVariants({ variant: "outline", size: "md" }), "cursor-pointer")}
        >
          Close
        </button>
      </div>
      <Result state={state} />
    </form>
  );
}

export function ConfirmBookingControl({
  lead,
  csrf,
}: {
  lead: { id: string; booking_reference: string | null; quoted_amount_cents: number | null; supplier_cost_cents: number | null; currency: string; status: string };
  csrf: string;
}) {
  const [state, formAction, isPending] = useActionState(
    confirmBookingAction,
    initialCrmActionState,
  );
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          disabled={lead.status === "cancelled"}
          className={cn(ctaVariants({ variant: "primary", size: "md" }), "cursor-pointer disabled:cursor-not-allowed disabled:opacity-60")}
        >
          {lead.booking_reference ? "Update confirmation" : "Confirm booking"}
        </button>
        {lead.status === "cancelled" ? (
          <p className="mt-2 type-caption text-muted-foreground">
            This booking is cancelled. Set it back to another status first.
          </p>
        ) : null}
        <Result state={state} />
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-lg border border-border-strong bg-surface p-5">
      <input type="hidden" name="id" value={lead.id} />
      <input type="hidden" name="csrf" value={csrf} />
      <h3 className="font-heading type-h3 text-foreground">Confirm booking</h3>
      <p className="mt-1.5 type-caption text-muted-foreground">
        Leave the reference empty and one is generated. An existing reference is
        kept, so confirming twice never issues a second one.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block">
          <span className={label}>Booking reference</span>
          <input name="booking_reference" defaultValue={lead.booking_reference ?? ""} placeholder="auto" maxLength={40} className={field} />
        </label>
        <label className="block">
          <span className={label}>Currency</span>
          <input name="currency" defaultValue={lead.currency} maxLength={3} className={field} />
        </label>
        <label className="block">
          <span className={label}>Quoted</span>
          <input name="quoted_amount" inputMode="decimal" defaultValue={money(lead.quoted_amount_cents)} className={field} />
        </label>
        <label className="block">
          <span className={label}>Supplier cost</span>
          <input name="supplier_cost" inputMode="decimal" defaultValue={money(lead.supplier_cost_cents)} className={field} />
        </label>
      </div>
      <label className="mt-3 block">
        <span className={label}>Internal note (optional)</span>
        <input name="note" maxLength={1000} className={field} />
      </label>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={isPending}
          className={cn(ctaVariants({ variant: "primary", size: "md" }), "cursor-pointer disabled:cursor-not-allowed disabled:opacity-70")}
        >
          {isPending ? "Confirming…" : "Confirm"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={cn(ctaVariants({ variant: "outline", size: "md" }), "cursor-pointer")}
        >
          Cancel
        </button>
      </div>
      <Result state={state} />
    </form>
  );
}

export function CancelBookingControl({
  lead,
  csrf,
}: {
  lead: { id: string; status: string };
  csrf: string;
}) {
  const [state, formAction, isPending] = useActionState(
    cancelBookingAction,
    initialCrmActionState,
  );
  const [open, setOpen] = useState(false);

  if (lead.status === "cancelled") {
    return (
      <p className="type-caption text-muted-foreground">
        Already cancelled. The booking and its history are kept.
      </p>
    );
  }

  if (!open) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(ctaVariants({ variant: "outline", size: "md" }), "cursor-pointer")}
        >
          Cancel booking
        </button>
        <Result state={state} />
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-lg border border-destructive/40 bg-destructive/5 p-5">
      <input type="hidden" name="id" value={lead.id} />
      <input type="hidden" name="csrf" value={csrf} />
      <h3 className="font-heading type-h3 text-foreground">Cancel this booking?</h3>
      <p className="mt-1.5 type-caption text-muted-foreground">
        Nothing is deleted. The enquiry, the customer&rsquo;s details and the full
        history stay exactly as they are — the booking is marked cancelled and
        the reason recorded.
      </p>
      <label className="mt-4 block">
        <span className={label}>Reason (required)</span>
        <input name="reason" required maxLength={1000} className={field} autoFocus />
      </label>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={isPending}
          className={cn(ctaVariants({ variant: "outline", size: "md" }), "cursor-pointer border-destructive/50 text-destructive disabled:cursor-not-allowed disabled:opacity-70")}
        >
          {isPending ? "Cancelling…" : "Yes, cancel it"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={cn(ctaVariants({ variant: "outline", size: "md" }), "cursor-pointer")}
        >
          Keep it
        </button>
      </div>
      <Result state={state} />
    </form>
  );
}
