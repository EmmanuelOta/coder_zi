// components/socials.js

import {
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const socialLinks = [
  {
    label: "Email",
    handle: "emmyraddo4@gmail.com",
    href: "mailto:emmyraddo4@gmail.com",
    icon: Mail,
    note: "Fastest way to reach me",
  },
  {
    label: "LinkedIn",
    handle: "in/coderzi",
    href: "https://www.linkedin.com/in/coder-zi",
    icon: Linkedin,
    note: "Work history & updates",
  },
  {
    label: "X",
    handle: "@coder_zi",
    href: "https://x.com/coder_zi",
    icon: Twitter,
    note: "Build notes in public",
  },
  {
    label: "Instagram",
    handle: "@coder_zi",
    href: "https://instagram.com/coder_zi",
    icon: Instagram,
    note: "Behind the screens",
  },
];

export function Socials({ className }) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <li key={social.label} className="min-w-0">
            <a
              href={social.href}
              target={
                social.href.startsWith("http") ? "_blank" : undefined
              }
              rel="noreferrer noopener"
              className="group relative flex h-full min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="size-4" aria-hidden />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">
                  {social.label}
                </span>

                <span className="block truncate font-mono text-[11px] text-muted-foreground">
                  {social.handle}
                </span>
              </span>

              <ArrowUpRight
                className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}