"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { Eyebrow, Section, Tag } from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

const filters = ["All", "Websites", "Web Apps", "Platforms"];

export default function WorkClient() {
  const [filter, setFilter] = useState("All");

  const visible = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <>
      <section className="hero-wash px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-3xl rise text-center lg:mx-0 lg:text-left">
            <Eyebrow>Work</Eyebrow>

            <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] sm:text-5xl">
              Products, platforms and websites — shipped and live.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
              A closer look at what each project needed, how I approached it,
              and what it became.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                type="button"
                onClick={() => setFilter(filterOption)}
                aria-pressed={filter === filterOption}
                className={
                  filter === filterOption
                    ? "rounded-full border border-foreground bg-foreground px-4 py-2 text-xs font-medium text-background"
                    : "rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                }
              >
                {filterOption}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Section className="pt-6">
        <div className="grid gap-8">
          {visible.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <article className="surface-card lift-hover grid overflow-hidden lg:grid-cols-[1.25fr_1fr]">
                <Link
                  href={`/work/${project.slug}`}
                  className="block bg-surface"
                  aria-label={`${project.title} case study`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="grid aspect-[16/10] w-full place-items-center font-mono text-[11px] text-muted-foreground">
                      Screenshot pending redeploy
                    </div>
                  )}
                </Link>

                <div className="min-w-0 p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {project.index}
                    </span>

                    <span className="h-px flex-1 bg-border" />

                    <span className="font-mono text-[11px] text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
                    {project.title}
                  </h2>

                  <p className="mt-1 text-sm text-primary">
                    {project.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                    <div>
                      <dt className="label-mono">Type</dt>
                      <dd className="mt-1 text-sm">{project.type}</dd>
                    </div>

                    <div>
                      <dt className="label-mono">Role</dt>
                      <dd className="mt-1 text-sm">{project.position}</dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <Tag key={technology}>{technology}</Tag>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/work/${project.slug}`}
                      className="arrow-nudge inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                      View case study
                      <ArrowUpRight className="size-4" aria-hidden />
                    </Link>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Visit live site
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}