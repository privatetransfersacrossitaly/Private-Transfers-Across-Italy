/**
 * The login form's action state.
 *
 * It lives here rather than beside the action because a `"use server"` module
 * may export only async functions — the same reason `lib/crm/action-state.ts`
 * exists for the lead actions.
 *
 * There is no `status: "success"` member. A successful sign-in redirects, so
 * the form never renders a success state; modelling one would invite code
 * that believes it can be reached.
 */
export type LoginState =
  | { status: "idle"; message: null }
  | { status: "error"; message: string };

export const initialLoginState: LoginState = { status: "idle", message: null };
