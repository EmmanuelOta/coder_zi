// components/Nav.js

"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CTA } from "./primitives";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/my-builds", label: "What I Build" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card/80 px-4 py-3 backdrop-blur-xl transition-shadow duration-300 lg:flex lg:justify-between lg:px-5"
        style={scrolled ? { boxShadow: "var(--shadow-nav)" } : undefined}
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-foreground font-mono text-xs font-semibold text-background">
            C
          </span>

          <span className="truncate text-sm font-semibold">coder_zi</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <CTA
            to="/contact"
            variant="dark"
            className="ml-2"
            icon="none"
          >
            Start a project
          </CTA>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-card text-foreground lg:hidden"
        >
          {open ? (
            <X className="size-4" aria-hidden />
          ) : (
            <Menu className="size-4" aria-hidden />
          )}
        </button>

        {open ? (
          <div className="col-span-2 grid gap-1 border-t border-border pt-3 lg:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <CTA
              to="/contact"
              variant="dark"
              className="mt-1 w-full"
              icon="none"
            >
              Start a project
            </CTA>
          </div>
        ) : null}
      </nav>
    </header>
  );
}