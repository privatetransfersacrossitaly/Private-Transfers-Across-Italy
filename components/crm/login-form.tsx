"use client";

import { useActionState } from "react";
import { signInAction } from "@/app/actions/crm-auth";
import { initialLoginState } from "@/lib/crm/login-state";

/**
 * The CRM sign-in form.
 *
 * ── A client component for one reason only ────────────────────────────────
 * `useActionState`, so the error message and the pending state render
 * without a full reload. Nothing secret is here: the action runs on the
 * server, the password is posted and never stored, and no part of the
 * authentication decision happens in this file. A browser can lie about
 * everything it sends from here and still get nowhere.
 *
 * ── Why the fields are named and typed the way they are ───────────────────
 * `autoComplete="username"` and `"current-password"` let a password manager
 * fill it, which is what makes a long generated password practical to use —
 * and a long generated password is what actually defends this login, given
 * the iteration count the free plan's CPU limit allows.
 */
export function LoginForm({ signedOut }: { signedOut: boolean }) {
  const [state, formAction, isPending] = useActionState(
    signInAction,
    initialLoginState,
  );

  return (
    <form action={formAction} className="mt-8 space-y-5">
      {signedOut && state.status === "idle" ? (
        <p
          role="status"
          className="rounded-md border border-border bg-surface-sunken px-4 py-3 type-small text-muted-foreground"
        >
          You have been signed out.
        </p>
      ) : null}

      {state.status === "error" ? (
        // `role="alert"` so a screen reader announces it: a sighted user sees
        // the message appear, and this is the equivalent event.
        <p
          role="alert"
          className="rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 type-small text-destructive"
        >
          {state.message}
        </p>
      ) : null}

      <label className="block">
        <span className="block type-label text-muted-foreground">Username</span>
        <input
          type="text"
          name="username"
          required
          autoComplete="username"
          autoCapitalize="none"
          spellCheck={false}
          className="mt-2 w-full rounded-md border border-border-strong bg-surface px-3.5 py-2.5 type-small text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        />
      </label>

      <label className="block">
        <span className="block type-label text-muted-foreground">Password</span>
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          className="mt-2 w-full rounded-md border border-border-strong bg-surface px-3.5 py-2.5 type-small text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        />
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-md bg-accent px-5 type-small font-medium text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
