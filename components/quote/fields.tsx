import { useId } from "react";
import { cn } from "cn";

/**
 * The form primitives this site did not have until now.
 *
 * Every other page here is read, not filled in, so the shared kit had no
 * input, select or textarea. These six are built from the same tokens as
 * everything else — `type-*` for size, the ivory/navy/terracotta palette for
 * colour, `--color-ring` for focus — so the form looks like the site rather
 * than like a form dropped into it.
 *
 * ── Error presentation ────────────────────────────────────────────────────
 * The system this was modelled on has no field-level errors at all: it
 * relies on the browser's native `required` bubbles and, on the server,
 * returns one sentence for the whole form. A visitor who mistypes an email
 * is told something is wrong but not what or where.
 *
 * Here every field can carry its own message. The control gets
 * `aria-invalid`, the message gets an id, and `aria-describedby` ties them
 * together, so a screen reader announces the problem with the field rather
 * than leaving it to be hunted for.
 */

/**
 * One numbered step of the form.
 *
 * The form used to be a run of `legend`s in small caps with nothing between
 * them, which read as a list of fields rather than a document with a
 * structure. A number, a heading at the same size as the rest of the site's
 * subheadings, and a hairline above each section give it an order a reader
 * can hold — and make it obvious how much is left.
 *
 * `legend` has to be the fieldset's first child to be announced as its
 * caption, so the number and the text live inside it rather than in a
 * wrapper around it. The number is `aria-hidden`: "01" read aloud before
 * every heading is noise, and the heading already says what the section is.
 */
export function FormSection({
  step,
  title,
  description,
  first,
  children,
}: {
  step: number;
  title: string;
  description?: string;
  /** The first section carries no rule above it. */
  first?: boolean;
  children: React.ReactNode;
}) {
  const headingId = useId();
  return (
    <fieldset
      aria-labelledby={headingId}
      className={cn(
        "border-0 p-0",
        !first && "mt-10 border-t border-border pt-10 sm:mt-12 sm:pt-12",
      )}
    >
      {/*
        A heading rather than a `legend`.

        `legend` is the obvious element here and it was the first attempt, but
        browsers lay it out inside the fieldset's border box with reserved
        space that no margin or padding reaches: it added about 48px under
        every section title, and the gap differed between sections depending
        on whether they had a description. `aria-labelledby` names the
        fieldset just as well, and an `h2` additionally puts the section into
        the document outline, which a `legend` does not.
      */}
      <h2 id={headingId} className="flex items-baseline gap-3">
        <span
          aria-hidden="true"
          className="font-heading type-small tabular-nums text-accent-ink"
        >
          {String(step).padStart(2, "0")}
        </span>
        <span className="font-heading type-h3 text-foreground">{title}</span>
      </h2>
      {description ? (
        <p className="mt-2 max-w-[62ch] pl-[2.1rem] type-small text-muted-foreground">
          {description}
        </p>
      ) : null}
      <div className="mt-6">{children}</div>
    </fieldset>
  );
}

const controlBase =
  "block min-h-11 w-full rounded-md border bg-surface px-3.5 py-2.5 type-small text-foreground transition-colors placeholder:text-muted-foreground/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60";

const controlTone = (invalid: boolean) =>
  invalid
    ? "border-accent bg-accent-wash/40"
    : "border-border-strong hover:border-foreground/40";

export function Field({
  id,
  label,
  hint,
  error,
  required,
  optionalLabel,
  className,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  /** Localised word for "optional". Shown when `required` is not set. */
  optionalLabel?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    /*
      A column, so a row of fields keeps its controls on one line.

      Labels and hints wrap by different amounts — "Country" has a two-line
      hint where "Phone number" has one — and with everything in normal flow
      that pushed one control below its neighbour. Letting the label block
      grow means the controls sit at the same height however the text above
      them wraps.
    */
    <div className={cn("flex min-w-0 flex-col", className)}>
      <div className="flex-1">
        <label
          htmlFor={id}
          className="flex flex-wrap items-baseline gap-x-2 type-label text-muted-foreground"
        >
          <span>{label}</span>
          {required ? (
            <span aria-hidden="true" className="text-accent-ink">*</span>
          ) : (
            <span className="type-caption font-normal tracking-normal normal-case text-muted-foreground/70">
              {optionalLabel ?? "Optional"}
            </span>
          )}
        </label>
        {hint ? (
          <p id={`${id}-hint`} className="mt-1.5 type-caption text-muted-foreground">
            {hint}
          </p>
        ) : null}
      </div>
      <div className="mt-2">{children}</div>
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 flex items-start gap-1.5 type-caption text-accent-ink"
        >
          <span aria-hidden="true" className="mt-[0.35em] block size-1.5 shrink-0 rounded-full bg-accent" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Ties a control to its hint and its error for assistive technology. */
function describedBy(id: string, hint?: string, error?: string): string | undefined {
  const ids = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

export function TextInput({
  id,
  name,
  error,
  hint,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  error?: string;
  hint?: string;
}) {
  return (
    <input
      {...props}
      id={id}
      name={name}
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy(id, hint, error)}
      className={cn(controlBase, controlTone(!!error), className)}
    />
  );
}

export function Select({
  id,
  name,
  error,
  hint,
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  error?: string;
  hint?: string;
}) {
  return (
    <div className="relative">
      <select
        {...props}
        id={id}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={cn(controlBase, controlTone(!!error), "appearance-none pr-10", className)}
      >
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        className="pointer-events-none absolute top-1/2 right-3.5 size-3 -translate-y-1/2 text-muted-foreground"
        fill="none"
      >
        <path
          d="M2.5 4.5 6 8l3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function TextArea({
  id,
  name,
  error,
  hint,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  name: string;
  error?: string;
  hint?: string;
}) {
  return (
    <textarea
      {...props}
      id={id}
      name={name}
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy(id, hint, error)}
      className={cn(controlBase, controlTone(!!error), "min-h-28 resize-y", className)}
    />
  );
}

export function CheckboxRow({
  id,
  name,
  label,
  description,
  checked,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  description?: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-3.5 rounded-lg border border-border-strong bg-surface p-4 transition-colors hover:border-foreground/40 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring sm:p-5"
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-0.5 size-4 shrink-0 accent-[var(--color-accent)]"
      />
      <span className="min-w-0">
        <span className="block font-heading type-h3 text-foreground">{label}</span>
        {description ? (
          <span className="mt-1 block type-small text-muted-foreground">{description}</span>
        ) : null}
      </span>
    </label>
  );
}

/**
 * The honeypot.
 *
 * Not `display:none` — some bots skip anything hidden that way, and a few
 * screen readers used to read it anyway. This takes it out of the layout,
 * out of the tab order and out of the accessibility tree, so no human can
 * reach it by any route while an automated form-filler still sees a field
 * called "company" and fills it in.
 */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor="company">Company</label>
      <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
