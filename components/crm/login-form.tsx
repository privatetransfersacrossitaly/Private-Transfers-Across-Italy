"use client";

import { useActionState } from "react";
import { signInAction } from "@/app/actions/crm";
import { initialCrmActionState } from "@/lib/crm/action-state";
import { Field, TextInput } from "@/components/quote/fields";
import { ctaVariants } from "@/components/site/cta";
import { cn } from "cn";

/**
 * CRM sign-in.
 *
 * The only client component in the CRM, and it holds no authority: it posts
 * to a server action, and the decision about whether the credentials are
 * good — and whether the address is allow-listed — is made entirely on the
 * server. Nothing here can be bypassed by editing it in a browser, because
 * nothing here is what keeps anyone out.
 *
 * The error message is the same whatever went wrong. A form that said "no
 * such user" would confirm which addresses exist on the project, and one
 * that said "not permitted" would confirm which are allow-listed.
 */
export function CrmLoginForm() {
  const [state, formAction, isPending] = useActionState(signInAction, initialCrmActionState);

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {state.message ? (
        <p
          role="alert"
          className="rounded-md border border-accent/40 bg-accent-wash p-4 type-small text-accent-ink"
        >
          {state.message}
        </p>
      ) : null}

      <Field id="crm-email" label="Email address" required>
        <TextInput
          id="crm-email"
          name="email"
          type="email"
          autoComplete="username"
          required
        />
      </Field>

      <Field id="crm-password" label="Password" required>
        <TextInput
          id="crm-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </Field>

      <button
        type="submit"
        disabled={isPending}
        className={cn(
          ctaVariants({ variant: "primary", size: "lg" }),
          "w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-70",
        )}
      >
        {isPending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
