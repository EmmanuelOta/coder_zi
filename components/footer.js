// components/Footer.js

import Link from "next/link";
import { CTA } from "./primitives";
import { Socials } from "./socials";

export function Footer() {
  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="surface-panel accent-wash grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="label-mono">Available for new projects</p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Have something you want built properly?
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Websites, web apps, mobile apps and custom software — designed
              and engineered end to end. Tell me what you have in mind and I
              will tell you honestly how I would build it.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <CTA to="/contact">Start a project</CTA>

              <CTA to="/work" variant="outline" icon="none">
                See the work
              </CTA>
            </div>
          </div>

          <div className="grid min-w-0 content-start gap-4">
            <p className="label-mono">Elsewhere</p>

            <Socials className="sm:grid-cols-1 lg:grid-cols-1" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-xs text-muted-foreground sm:flex sm:justify-between">
          <p className="min-w-0 truncate font-mono">
            © {new Date().getFullYear()} Emmanuel — coder_zi
          </p>

          <nav
            aria-label="Footer"
            className="flex shrink-0 flex-wrap gap-4"
          >
            <Link href="/work" className="hover:text-foreground">
              Work
            </Link>

            <Link href="/my-builds" className="hover:text-foreground">
              What I Build
            </Link>

            <Link href="/about" className="hover:text-foreground">
              About
            </Link>

            <Link href="/insights" className="hover:text-foreground">
              Insights
            </Link>

            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}