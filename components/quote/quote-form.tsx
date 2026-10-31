"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { submitQuoteRequest } from "@/app/actions/quote";
import { ctaVariants } from "@/components/site/cta";
import {
  CheckboxRow,
  Field,
  FormSection,
  Honeypot,
  Select,
  TextArea,
  TextInput,
} from "@/components/quote/fields";
import { phoneCountryLabel, phoneCountryOptions } from "@/content/quote/countries";
import type { QuoteContent } from "@/content/quote";
import { serviceKeys, type FieldName } from "@/lib/quote/schema";
import { initialQuoteState } from "@/lib/quote/state";
import type { Locale } from "@/lib/site";
import { cn } from "cn";

/**
 * The quotation form.
 *
 * ── What it keeps from the system it was modelled on ──────────────────────
 * The shape of the interaction: one page, a `useActionState` submit, a
 * pending button, a return-trip checkbox that reveals a second set of
 * fields, and a "copy the outbound details across, reversed" shortcut that
 * saves the most tedious typing on the page.
 *
 * ── What it does differently, deliberately ────────────────────────────────
 * 1. **Field-level errors.** The reference has none: a failed submission
 *    returns one sentence for the whole form and the visitor hunts for the
 *    problem. Here every message is attached to its own control, with
 *    `aria-invalid` and `aria-describedby`.
 * 2. **The form is not replaced on success.** The reference swaps the whole
 *    form out, so sending a second journey means reloading the page and
 *    checking what you just sent is impossible. Here the outcome appears
 *    above the form and the form stays.
 * 3. **The phone is two controls**, validated together against the chosen
 *    country's numbering plan.
 *
 * ── Why every field is controlled ─────────────────────────────────────────
 * React 19 resets a form automatically once its action resolves. For an
 * uncontrolled field that means everything the visitor typed disappears the
 * moment validation rejects one of them — the worst possible time to empty a
 * form. Holding the values in state makes the reset a no-op, so a failed
 * submission costs the visitor one correction rather than the whole form.
 *
 * It is also why `Send another journey` exists: with nothing resetting
 * itself, clearing has to be something the visitor asks for.
 */

type Values = Record<FieldName, string>;

const emptyValues: Values = {
  service: "",
  tripType: "one-way",
  pickup: "",
  dropoff: "",
  date: "",
  time: "",
  travelReference: "",
  returnPickup: "",
  returnDropoff: "",
  returnDate: "",
  returnTime: "",
  returnTravelReference: "",
  adults: "1",
  children: "0",
  childAges: "",
  holdBags: "0",
  cabinBags: "0",
  name: "",
  email: "",
  phoneCountry: "",
  phoneNational: "",
  notes: "",
};

export function QuoteForm({
  content,
  locale,
  onDelivered,
}: {
  content: QuoteContent;
  locale: Locale;
  /**
   * Told when the request has been accepted, so the page around the form can
   * clear itself down to the confirmation. The form cannot do that alone:
   * the heading and the aside are siblings, not children.
   */
  onDelivered?: (delivered: boolean) => void;
}) {
  const [state, formAction, isPending] = useActionState(
    submitQuoteRequest,
    initialQuoteState,
  );
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const [values, setValues] = useState<Values>(emptyValues);
  const [hasReturn, setHasReturn] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * Put the DOM back in step with React after an action resolves.
   *
   * React 19 resets a form once its action settles. Controlled text inputs
   * survive that, because React's value tracking notices the DOM drifting
   * from the virtual DOM and writes it back. A `<select>` does not: the
   * reset moves `selectedIndex`, React still believes the value it rendered,
   * so nothing re-renders and the control silently shows nothing.
   *
   * The visible symptom is a visitor correcting one field, submitting, and
   * finding their country has emptied itself. So after every settled action
   * each control is compared with the state that is supposed to be driving
   * it, and any that drifted is written back.
   */
  useEffect(() => {
    const form = formRef.current;
    if (!form || state.status === "idle") return;
    for (const [field, value] of Object.entries(values)) {
      const el = form.elements.namedItem(field);
      if (el instanceof HTMLSelectElement && el.value !== value) el.value = value;
    }
  }, [state, values]);

  const set =
    (field: FieldName) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((current) => ({ ...current, [field]: event.target.value }));

  const errorFor = (field: FieldName): string | undefined => {
    const code = state.errors[field];
    return code ? content.errors[code] : undefined;
  };

  /** Copies the outbound leg into the return, with the two ends swapped. */
  const swap = () =>
    setValues((current) => ({
      ...current,
      returnPickup: current.dropoff,
      returnDropoff: current.pickup,
      returnDate: current.date,
      returnTime: current.time,
      returnTravelReference: "",
    }));

  const startAgain = () => {
    setValues(emptyValues);
    setHasReturn(false);
    setDismissed(true);
  };

  const countries = phoneCountryOptions(locale);
  const delivered = state.status === "delivered";
  const showConfirmation = delivered && !dismissed;

  /**
   * Tell the page, and put the confirmation where the eye already is.
   *
   * The outcome used to render above a form that is several screens tall, so
   * on a phone a successful submission scrolled nothing: the visitor was left
   * looking at the fields they had just filled, with the confirmation far
   * above the fold, unable to tell whether anything had happened.
   */
  useEffect(() => {
    onDelivered?.(showConfirmation);
    if (showConfirmation && typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showConfirmation, onDelivered]);

  const outcome = dismissed
    ? null
    : state.status === "delivered"
      ? content.outcomes.delivered
      : state.status === "not_delivered" && state.reason === "not_configured"
        ? content.outcomes.notConfigured
        : state.status === "not_delivered"
          ? content.outcomes.unreachable
          : state.status === "error" && state.reason === "rejected"
            ? content.outcomes.rejected
            : state.status === "error"
              ? content.outcomes.unreachable
              : null;

  /**
   * A successful submission replaces the form rather than sitting above it.
   *
   * Everything the visitor needs now is here — the confirmation, the
   * reference, what happens next, and a way to send another. Leaving the
   * completed form on screen underneath invites a second submission of the
   * same journey, and buries the reference under it.
   */
  if (showConfirmation) {
    return (
      <div aria-live="polite" aria-atomic="true">
        <div className="rounded-xl border border-accent/40 bg-accent-wash p-7 sm:p-10">
          <h2 className="font-heading type-h2 text-foreground">
            {content.outcomes.delivered.heading}
          </h2>
          <p className="mt-4 max-w-[64ch] type-lead text-muted-foreground">
            {content.outcomes.delivered.body}
          </p>

          {state.reference ? (
            <div className="mt-7 border-t border-accent/30 pt-6">
              <p className="type-label text-accent-ink">
                {content.outcomes.delivered.referenceLabel}
              </p>
              <p className="mt-2 font-heading type-h2 tracking-[0.12em] text-foreground">
                {state.reference}
              </p>
            </div>
          ) : null}

          <p className="mt-6 max-w-[64ch] border-t border-accent/30 pt-6 type-small text-muted-foreground">
            {content.outcomes.delivered.note}
          </p>
          <button
            type="button"
            onClick={startAgain}
            className="mt-6 type-small font-medium text-accent-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {content.actions.another}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Failures still render above the form, where the fields that caused
          them are still on screen and can be corrected. */}
      <div aria-live="polite" aria-atomic="true">
        {outcome ? (
          <div
            className={cn(
              "mb-10 rounded-lg border p-6 sm:p-7",
              delivered ? "border-accent/40 bg-accent-wash" : "border-border-strong bg-surface",
            )}
          >
            <h2 className="font-heading type-h3 text-foreground">{outcome.heading}</h2>
            <p className="mt-3 max-w-[64ch] type-body text-muted-foreground">{outcome.body}</p>

            {delivered && state.reference ? (
              <div className="mt-5 border-t border-accent/30 pt-5">
                <p className="type-label text-accent-ink">
                  {content.outcomes.delivered.referenceLabel}
                </p>
                <p className="mt-2 font-heading type-h2 tracking-[0.12em] text-foreground">
                  {state.reference}
                </p>
              </div>
            ) : null}

            {delivered ? (
              <>
                <p className="mt-5 max-w-[64ch] border-t border-accent/30 pt-5 type-small text-muted-foreground">
                  {content.outcomes.delivered.note}
                </p>
                <button
                  type="button"
                  onClick={startAgain}
                  className="mt-5 type-small font-medium text-accent-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {content.actions.another}
                </button>
              </>
            ) : null}
          </div>
        ) : null}

        {state.status === "invalid" && !dismissed ? (
          <p
            role="alert"
            className="mb-10 rounded-lg border border-accent/40 bg-accent-wash p-5 type-small text-accent-ink"
          >
            {content.outcomes.invalid}
          </p>
        ) : null}
      </div>

      {/* ── The form, as one object on the page ──────────────────────────
          It used to sit directly on the band, which made it read as a run of
          loose fields rather than a document to work through. One bordered
          surface, six numbered steps, a hairline between each. */}
      <form
        ref={formRef}
        action={formAction}
        onSubmit={() => setDismissed(false)}
        className="relative overflow-hidden rounded-xl border border-border bg-surface"
        noValidate
      >
        <Honeypot />
        <input type="hidden" name="locale" value={locale} />

        <div className="p-6 sm:p-9 lg:p-10">
          {/* ── 1. The journey ─────────────────────────────────────────── */}
          <FormSection
            step={1}
            first
            title={content.sections.journey}
            description={content.sectionNotes.journey}
          >
            <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
              {/* Transfer type leads this section rather than standing alone
                  above it, where it left a half-empty row of its own. */}
              <Field
                id={id("service")}
                label={content.labels.service}
                error={errorFor("service")}
                required
                className="sm:col-span-2 sm:max-w-sm"
              >
                <Select
                  id={id("service")}
                  name="service"
                  error={errorFor("service")}
                  value={values.service}
                  onChange={set("service")}
                >
                  <option value="" disabled>
                    —
                  </option>
                  {serviceKeys.map((key) => (
                    <option key={key} value={key}>
                      {content.services[key]}
                    </option>
                  ))}
                </Select>
              </Field>

              {/* The two addresses matter more than anything else here, so
                  they keep the full measure instead of half a row each. */}
              <Field
                id={id("pickup")}
                label={content.labels.pickup}
                hint={content.hints.pickup}
                error={errorFor("pickup")}
                required
                className="sm:col-span-2"
              >
                <TextInput
                  id={id("pickup")}
                  name="pickup"
                  hint={content.hints.pickup}
                  error={errorFor("pickup")}
                  autoComplete="off"
                  placeholder={content.placeholders.pickup}
                  value={values.pickup}
                  onChange={set("pickup")}
                />
              </Field>

              <Field
                id={id("dropoff")}
                label={content.labels.dropoff}
                hint={content.hints.dropoff}
                error={errorFor("dropoff")}
                required
                className="sm:col-span-2"
              >
                <TextInput
                  id={id("dropoff")}
                  name="dropoff"
                  hint={content.hints.dropoff}
                  error={errorFor("dropoff")}
                  autoComplete="off"
                  placeholder={content.placeholders.dropoff}
                  value={values.dropoff}
                  onChange={set("dropoff")}
                />
              </Field>

              <Field
                id={id("date")}
                label={content.labels.date}
                error={errorFor("date")}
                required
              >
                <TextInput
                  id={id("date")}
                  name="date"
                  type="date"
                  error={errorFor("date")}
                  value={values.date}
                  onChange={set("date")}
                />
              </Field>

              <Field
                id={id("time")}
                label={content.labels.time}
                error={errorFor("time")}
                required
              >
                <TextInput
                  id={id("time")}
                  name="time"
                  type="time"
                  error={errorFor("time")}
                  value={values.time}
                  onChange={set("time")}
                />
              </Field>

              <Field
                id={id("travelReference")}
                label={content.labels.travelReference}
                optionalLabel={content.optionalLabel}
                hint={content.hints.travelReference}
                error={errorFor("travelReference")}
                className="sm:col-span-2 sm:max-w-sm"
              >
                <TextInput
                  id={id("travelReference")}
                  name="travelReference"
                  hint={content.hints.travelReference}
                  error={errorFor("travelReference")}
                  autoComplete="off"
                  placeholder={content.placeholders.travelReference}
                  value={values.travelReference}
                  onChange={set("travelReference")}
                />
              </Field>
            </div>
          </FormSection>

          {/* ── 2. Coming back ─────────────────────────────────────────── */}
          <FormSection step={2} title={content.sections.return}>
            <CheckboxRow
              id={id("tripType")}
              name="tripTypeToggle"
              label={content.labels.tripType}
              description={content.labels.tripTypeDescription}
              checked={hasReturn}
              onChange={setHasReturn}
            />
            {/* The value the server reads. The checkbox above is a UI control
                with its own name, so the word the validator expects is carried
                here rather than depending on a checkbox's "on". */}
            <input
              type="hidden"
              name="tripType"
              value={hasReturn ? "return" : "one-way"}
            />

            {hasReturn ? (
              <div className="mt-6 rounded-lg border border-accent/30 bg-accent-wash/40 p-5 sm:p-6">
                {/* No heading here: the section above already says "coming
                    back", and printing it twice made the panel look like a
                    separate form. */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <p className="type-caption text-muted-foreground">
                    {content.hints.swap}
                  </p>
                  <button
                    type="button"
                    onClick={swap}
                    className="type-caption text-muted-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:text-foreground hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {content.actions.swapLegs}
                  </button>
                </div>
                <div className="mt-6 grid gap-x-6 gap-y-6 sm:grid-cols-2">
                  <Field
                    id={id("returnPickup")}
                    label={content.labels.returnPickup}
                    error={errorFor("returnPickup")}
                    required
                    className="sm:col-span-2"
                  >
                    <TextInput
                      id={id("returnPickup")}
                      name="returnPickup"
                      error={errorFor("returnPickup")}
                      autoComplete="off"
                      placeholder={content.placeholders.dropoff}
                      value={values.returnPickup}
                      onChange={set("returnPickup")}
                    />
                  </Field>

                  <Field
                    id={id("returnDropoff")}
                    label={content.labels.returnDropoff}
                    error={errorFor("returnDropoff")}
                    required
                    className="sm:col-span-2"
                  >
                    <TextInput
                      id={id("returnDropoff")}
                      name="returnDropoff"
                      error={errorFor("returnDropoff")}
                      autoComplete="off"
                      placeholder={content.placeholders.pickup}
                      value={values.returnDropoff}
                      onChange={set("returnDropoff")}
                    />
                  </Field>

                  <Field
                    id={id("returnDate")}
                    label={content.labels.returnDate}
                    error={errorFor("returnDate")}
                    required
                  >
                    <TextInput
                      id={id("returnDate")}
                      name="returnDate"
                      type="date"
                      error={errorFor("returnDate")}
                      value={values.returnDate}
                      onChange={set("returnDate")}
                    />
                  </Field>

                  <Field
                    id={id("returnTime")}
                    label={content.labels.returnTime}
                    error={errorFor("returnTime")}
                    required
                  >
                    <TextInput
                      id={id("returnTime")}
                      name="returnTime"
                      type="time"
                      error={errorFor("returnTime")}
                      value={values.returnTime}
                      onChange={set("returnTime")}
                    />
                  </Field>

                  <Field
                    id={id("returnTravelReference")}
                    label={content.labels.returnTravelReference}
                    optionalLabel={content.optionalLabel}
                    error={errorFor("returnTravelReference")}
                    className="sm:col-span-2 sm:max-w-sm"
                  >
                    <TextInput
                      id={id("returnTravelReference")}
                      name="returnTravelReference"
                      error={errorFor("returnTravelReference")}
                      autoComplete="off"
                      placeholder={content.placeholders.travelReference}
                      value={values.returnTravelReference}
                      onChange={set("returnTravelReference")}
                    />
                  </Field>
                </div>
              </div>
            ) : null}
          </FormSection>

          {/* ── 3. Who is travelling ───────────────────────────────────── */}
          <FormSection
            step={3}
            title={content.sections.party}
            description={content.sectionNotes.party}
          >
            {/* Four counts in one row is cramped at desktop and lopsided
                below it. Two pairs, each under its own label, reads as the
                two questions it actually is. */}
            <div className="grid gap-x-6 gap-y-6 lg:grid-cols-2 lg:gap-x-8">
              {/* No label on the card: the section heading above already
                  says who this is about, and each field labels itself. */}
              <div className="rounded-lg border border-border bg-background p-5">
                <div className="grid grid-cols-1 gap-x-5 gap-y-5 min-[360px]:grid-cols-2">
                  <Field
                    id={id("adults")}
                    label={content.labels.adults}
                    error={errorFor("adults")}
                    required
                  >
                    <TextInput
                      id={id("adults")}
                      name="adults"
                      type="number"
                      inputMode="numeric"
                      min={1}
                      max={99}
                      error={errorFor("adults")}
                      value={values.adults}
                      onChange={set("adults")}
                    />
                  </Field>
                  <Field
                    id={id("children")}
                    label={content.labels.children}
                    optionalLabel={content.optionalLabel}
                    error={errorFor("children")}
                  >
                    <TextInput
                      id={id("children")}
                      name="children"
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={99}
                      error={errorFor("children")}
                      value={values.children}
                      onChange={set("children")}
                    />
                  </Field>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-5">
                <div className="grid grid-cols-1 gap-x-5 gap-y-5 min-[360px]:grid-cols-2">
                  <Field
                    id={id("holdBags")}
                    label={content.labels.holdBags}
                    optionalLabel={content.optionalLabel}
                    error={errorFor("holdBags")}
                  >
                    <TextInput
                      id={id("holdBags")}
                      name="holdBags"
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={99}
                      error={errorFor("holdBags")}
                      value={values.holdBags}
                      onChange={set("holdBags")}
                    />
                  </Field>
                  <Field
                    id={id("cabinBags")}
                    label={content.labels.cabinBags}
                    optionalLabel={content.optionalLabel}
                    error={errorFor("cabinBags")}
                  >
                    <TextInput
                      id={id("cabinBags")}
                      name="cabinBags"
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={99}
                      error={errorFor("cabinBags")}
                      value={values.cabinBags}
                      onChange={set("cabinBags")}
                    />
                  </Field>
                </div>
              </div>

              <Field
                id={id("childAges")}
                label={content.labels.childAges}
                hint={content.hints.childAges}
                error={errorFor("childAges")}
                className="lg:col-span-2 sm:max-w-md"
              >
                <TextInput
                  id={id("childAges")}
                  name="childAges"
                  hint={content.hints.childAges}
                  error={errorFor("childAges")}
                  autoComplete="off"
                  placeholder={content.placeholders.childAges}
                  value={values.childAges}
                  onChange={set("childAges")}
                />
              </Field>
            </div>
          </FormSection>

          {/* ── 4. How to reach you ────────────────────────────────────── */}
          <FormSection
            step={4}
            title={content.sections.contact}
            description={content.sectionNotes.contact}
          >
            <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
              <Field
                id={id("name")}
                label={content.labels.name}
                error={errorFor("name")}
                required
              >
                <TextInput
                  id={id("name")}
                  name="name"
                  error={errorFor("name")}
                  autoComplete="name"
                  placeholder={content.placeholders.name}
                  value={values.name}
                  onChange={set("name")}
                />
              </Field>

              <Field
                id={id("email")}
                label={content.labels.email}
                error={errorFor("email")}
                required
              >
                <TextInput
                  id={id("email")}
                  name="email"
                  type="email"
                  error={errorFor("email")}
                  autoComplete="email"
                  placeholder={content.placeholders.email}
                  value={values.email}
                  onChange={set("email")}
                />
              </Field>

              {/* The country and the number are two controls because a calling
                  code does not identify a country — +1 is twenty-two of them —
                  and the validator needs a country to judge the number. They
                  share a row so they read as one answer. */}
              <div className="grid gap-x-4 gap-y-6 sm:col-span-2 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
                <Field
                  id={id("phoneCountry")}
                  label={content.labels.phoneCountry}
                  hint={content.hints.phoneCountry}
                  error={errorFor("phoneCountry")}
                  required
                >
                  <Select
                    id={id("phoneCountry")}
                    name="phoneCountry"
                    hint={content.hints.phoneCountry}
                    error={errorFor("phoneCountry")}
                    autoComplete="tel-country-code"
                    value={values.phoneCountry}
                    onChange={set("phoneCountry")}
                  >
                    <option value="" disabled>
                      —
                    </option>
                    {countries.map((country) => (
                      <option key={country.iso} value={country.iso}>
                        {phoneCountryLabel(country, locale)}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field
                  id={id("phoneNational")}
                  label={content.labels.phoneNational}
                  hint={content.hints.phoneNational}
                  error={errorFor("phoneNational")}
                  required
                >
                  <TextInput
                    id={id("phoneNational")}
                    name="phoneNational"
                    type="tel"
                    inputMode="tel"
                    hint={content.hints.phoneNational}
                    error={errorFor("phoneNational")}
                    autoComplete="tel-national"
                    placeholder={content.placeholders.phoneNational}
                    value={values.phoneNational}
                    onChange={set("phoneNational")}
                  />
                </Field>
              </div>
            </div>
          </FormSection>

          {/* ── 5. Anything else ───────────────────────────────────────── */}
          <FormSection
            step={5}
            title={content.sections.extra}
            description={content.sectionNotes.extra}
          >
            <Field
              id={id("notes")}
              label={content.labels.notes}
              optionalLabel={content.optionalLabel}
              hint={content.hints.notes}
              error={errorFor("notes")}
            >
              <TextArea
                id={id("notes")}
                name="notes"
                hint={content.hints.notes}
                error={errorFor("notes")}
                maxLength={2000}
                placeholder={content.placeholders.notes}
                value={values.notes}
                onChange={set("notes")}
              />
            </Field>
          </FormSection>
        </div>

        {/* ── 6. Send it ───────────────────────────────────────────────────
            On its own surface at the foot of the card rather than floating
            below it, so the button is unmistakably the end of the form — and
            so the sentence about what sending actually does is the last thing
            read before it is pressed. */}
        <div className="border-t border-border bg-surface-sunken p-6 sm:p-9 lg:p-10">
          <h2 className="flex items-baseline gap-3">
            <span
              aria-hidden="true"
              className="font-heading type-small tabular-nums text-accent-ink"
            >
              06
            </span>
            <span className="font-heading type-h3 text-foreground">
              {content.sections.review}
            </span>
          </h2>
          <p className="mt-4 max-w-[68ch] type-small text-muted-foreground">
            {content.disclaimer}
          </p>
          {/* A real submit button, styled with the same variants the site's
              `Cta` links use. `Cta` renders an anchor, which is right for
              navigation and wrong here: a form needs something that submits
              on Enter and that assistive technology announces as a button. */}
          <div className="mt-7">
            <button
              type="submit"
              disabled={isPending}
              className={cn(
                ctaVariants({ variant: "primary", size: "lg" }),
                "w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
              )}
            >
              {isPending ? content.actions.submitting : content.actions.submit}
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}
