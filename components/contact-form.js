// components/ContactForm.js
"use client";

import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { submitInquiry } from "@/lib/inquiry.actions";

const projectTypes = [
  "Website",
  "Web app",
  "Mobile app",
  "Custom software",
  "Not sure yet",
];

const budgets = ["Under $1k", "$1k – $3k", "$3k – $8k", "$8k+", "Let's discuss"];

const timelines = ["ASAP", "2–4 weeks", "1–3 months", "Flexible"];

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none";

export function ContactForm() {
  const [state, setState] = useState("idle");
  const [error, setError] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("sending");
    setError(null);

    try {
      await submitInquiry({
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        company: String(formData.get("company") ?? ""),
        projectType: String(formData.get("projectType") ?? ""),
        budget: String(formData.get("budget") ?? ""),
        timeline: String(formData.get("timeline") ?? ""),
        message: String(formData.get("message") ?? ""),
      });

      setState("sent");
      form.reset();
    } catch (err) {
      setState("idle");

      setError(
        err instanceof Error && err.message.length < 160
          ? err.message
          : "Something went wrong. Please email hello@coderzi.dev instead.",
      );
    }
  }

  if (state === "sent") {
    return (
      <div className="surface-card grid content-center gap-3 p-8 text-center">
        <div className="mx-auto grid size-11 place-items-center rounded-full bg-accent-soft text-primary">
          <Check className="size-5" aria-hidden />
        </div>

        <h3 className="text-lg font-semibold">Got it — details received</h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Email delivery isn&apos;t wired up on this site yet, so to make sure it
          reaches me directly, send the same note to{" "}
          <a
            className="text-primary underline"
            href="mailto:emmyraddo4@gmail.com"
          >
            emmyraddo4@gmail.com
          </a>
          .
        </p>

        <button
          type="button"
          onClick={() => setState("idle")}
          className="mx-auto mt-2 text-sm text-muted-foreground underline hover:text-foreground"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="surface-card grid gap-4 p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="label-mono">Name</span>
          <input
            name="name"
            required
            maxLength={100}
            placeholder="Your name"
            className={fieldClass}
          />
        </label>

        <label className="grid gap-2">
          <span className="label-mono">Email</span>
          <input
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="label-mono">Company (optional)</span>
        <input
          name="company"
          maxLength={120}
          placeholder="Company or project name"
          className={fieldClass}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="grid gap-2">
          <span className="label-mono">Project type</span>
          <select
            name="projectType"
            required
            className={fieldClass}
            defaultValue={projectTypes[0]}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="label-mono">Budget</span>
          <select
            name="budget"
            className={fieldClass}
            defaultValue={budgets[4]}
          >
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="label-mono">Timeline</span>
          <select
            name="timeline"
            className={fieldClass}
            defaultValue={timelines[3]}
          >
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="label-mono">What are you building?</span>

        <textarea
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={2000}
          placeholder="A short description of the product, who it's for, and where you are today."
          className={fieldClass}
        />
      </label>

      {error ? (
        <p className="text-sm text-destructive">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-accent transition-colors hover:bg-primary-hover disabled:opacity-60"
      >
        {state === "sending" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden />
        ) : null}

        {state === "sending" ? "Sending" : "Send inquiry"}
      </button>

      <p className="text-xs text-muted-foreground">
        Prefer email? Write to{" "}
        <a
          className="text-primary underline"
          href="mailto:hello@coderzi.dev"
        >
          hello@coderzi.dev
        </a>
        .
      </p>
    </form>
  );
}