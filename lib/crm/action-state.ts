/**
 * The state the CRM's forms and their actions pass back and forth.
 *
 * It lives here rather than beside the actions for the same reason
 * `lib/quote/state.ts` does: a `"use server"` module may export async
 * functions and nothing else. Exporting the initial object from there
 * compiles, and then fails at build time with "A 'use server' file can only
 * export async functions, found object".
 */
export type CrmActionState = { ok: boolean; message: string | null };

export const initialCrmActionState: CrmActionState = { ok: false, message: null };
