// components/primitives.js

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-primary-foreground px-5 py-2.5 shadow-accent hover:bg-primary-hover",
  dark: "bg-foreground text-background px-5 py-2.5 hover:opacity-90",
  outline:
    "border border-border-strong bg-card text-foreground px-5 py-2.5 hover:bg-surface",
  ghost: "text-foreground px-3 py-2 hover:bg-surface",
  quiet: "text-primary px-0 py-0 hover:text-primary-hover",
};

export function CTA({
  to,
  href,
  variant = "primary",
  className,
  children,
  icon = "arrow",
  ...rest
}) {
  const content = (
    <>
      <span>{children}</span>

      {icon === "arrow" ? (
        <ArrowRight className="size-4" aria-hidden />
      ) : null}

      {icon === "external" ? (
        <ArrowUpRight className="size-4" aria-hidden />
      ) : null}
    </>
  );

  const classes = cn(
    base,
    variants[variant],
    "arrow-nudge",
    className
  );

  if (to) {
    return (
      <Link href={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer noopener" : undefined}
      className={classes}
      {...rest}
    >
      {content}
    </a>
  );
}

export function Eyebrow({ children, className }) {
  return (
    <p className={cn("label-mono", className)}>
      {children}
    </p>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}

export function Section({ children, className, id }) {
  return (
    <section
      id={id}
      className={cn("px-5 py-16 sm:px-8 sm:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl">
        {children}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  action,
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:justify-between">
      <div className="min-w-0 max-w-xl">
        {eyebrow ? (
          <Eyebrow className="mb-3">
            {eyebrow}
          </Eyebrow>
        ) : null}

        <h2 className="text-2xl font-semibold sm:text-4xl">
          {title}
        </h2>

        {copy ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {copy}
          </p>
        ) : null}
      </div>

      {action ? (
        <div className="shrink-0">
          {action}
        </div>
      ) : null}
    </div>
  );
}

export function BrowserFrame({
  src,
  alt,
  label,
  className,
  imgClassName,
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-surface shadow-card",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-card px-3 py-2">
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />

        {label ? (
          <span className="ml-2 truncate font-mono text-[10px] tracking-wide text-muted-foreground">
            {label}
          </span>
        ) : null}
      </div>

      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "block w-full object-cover object-top",
            imgClassName
          )}
        />
      ) : (
        <div
          className={cn(
            "flex items-center justify-center bg-surface px-6 text-center font-mono text-[11px] tracking-wide text-muted-foreground",
            imgClassName ?? "aspect-[16/10]"
          )}
        >
          Screenshot pending redeploy
        </div>
      )}
    </div>
  );
}