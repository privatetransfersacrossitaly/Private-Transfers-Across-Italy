import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

/**
 * The 404 page.
 *
 * `experimental.globalNotFound` is enabled in `next.config.ts`, and that
 * option requires this file to render a complete document of its own — which
 * is why the html and body elements and the font wiring are repeated here
 * rather than inherited. The config was left untouched by the reset, so this
 * file stays, reduced to the minimum it needs to be.
 */
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Page not found",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable} antialiased`}>
        <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-4 px-6 py-16">
          <h1 className="font-heading text-3xl font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            That address does not exist.
          </p>
          <Link
            href="/"
            className="text-base underline underline-offset-4 hover:no-underline"
          >
            Go to the homepage
          </Link>
        </main>
      </body>
    </html>
  );
}
