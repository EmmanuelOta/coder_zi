import {
  Code2,
  Globe,
  LayoutGrid,
  Smartphone,
} from "lucide-react";

import {
  BrowserFrame,
  CTA,
  Eyebrow,
  Section,
  SectionHead,
  Tag,
} from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

const title = "What I Build — Websites, Web Apps, Mobile & Custom Software";
const description =
  "The four kinds of work I take on, the four-step process I run, and the technology stack behind it.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/my-builds",
  },
};

const services = [
  {
    icon: Globe,
    title: "Websites",
    copy: "Brand and marketing sites built to load fast, read clearly and convert. Photography-heavy or copy-led, always responsive and SEO-ready.",
    points: ["Design & build", "CMS or static content", "SEO & performance"],
    project: projects[2],
  },
  {
    icon: LayoutGrid,
    title: "Web Apps",
    copy: "Dashboards, tools and platforms with authentication, real data and state that behaves. Built to be extended, not rewritten.",
    points: ["Product design", "APIs & data modelling", "Auth & roles"],
    project: projects[1],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    copy: "Cross-platform apps that feel native on both platforms and can share logic with an existing web product.",
    points: ["Cross-platform build", "Offline-aware UX", "Store deployment"],
    project: projects[0],
  },
  {
    icon: Code2,
    title: "Custom Software",
    copy: "Internal systems, integrations and automations shaped around how your business actually runs today.",
    points: ["Workflow automation", "Third-party integration", "Admin tooling"],
    project: projects[4],
  },
];

const steps = [
  {
    n: "01",
    t: "Discover",
    c: "We get specific about the problem, the users and what success looks like.",
  },
  {
    n: "02",
    t: "Design",
    c: "Structure and interface first, so we agree on the product before code is written.",
  },
  {
    n: "03",
    t: "Build",
    c: "Engineered in reviewable slices with a working preview you can click through.",
  },
  {
    n: "04",
    t: "Launch & support",
    c: "Deploy, monitor, then iterate on what real usage reveals.",
  },
];

const stackGroups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Postgres", "REST APIs", "Auth"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    label: "Platform",
    items: ["Vercel", "Cloudflare", "CI/CD", "Analytics"],
  },
];

export default function WhatIBuild() {
  return (
    <>
      <section className="hero-wash px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto w-full max-w-3xl rise text-center lg:text-left">
          <Eyebrow>What I build</Eyebrow>

          <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] sm:text-5xl">
            Professional services I offer.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Whatever the shape of the project, the process is the same: understand it properly,
            design it before building it, ship it in slices you can see.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <CTA to="/contact">Start a project</CTA>
          </div>
        </div>
      </section>

      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <Reveal key={s.title} delay={(i % 2) * 80}>
                <article className="surface-card lift-hover h-full p-6 sm:p-8">
                  <div className="grid size-11 place-items-center rounded-xl bg-accent-soft text-primary">
                    <Icon className="size-5" aria-hidden />
                  </div>

                  <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.copy}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li key={p}>
                        <Tag>{p}</Tag>
                      </li>
                    ))}
                  </ul>

                  <BrowserFrame
                    src={s.project.image}
                    alt={s.project.imageAlt}
                    label={s.project.url.replace(/^https?:\/\//, "")}
                    className="mt-6"
                    imgClassName="aspect-[16/10]"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="surface-panel p-8 sm:p-12">
          <SectionHead eyebrow="Process" title="How a project runs" />

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 70}
                as="li"
                className="min-w-0"
              >
                <p className="font-mono text-xs text-primary">{s.n}</p>

                <h3 className="mt-3 text-base font-semibold">{s.t}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.c}
                </p>

                <span className="mt-5 block h-px w-full bg-border" />
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead eyebrow="Technology" title="The stack behind the work" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 60}>
              <div className="surface-card h-full p-5">
                <p className="label-mono">{g.label}</p>

                <ul className="mt-4 grid gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="text-sm text-muted-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}