import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import {
  BrowserFrame,
  CTA,
  Eyebrow,
  Section,
  Tag,
} from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { nextProject, projectBySlug } from "@/data/projects";

const sectionList = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The Challenge" },
  { id: "approach", label: "Approach" },
  { id: "design", label: "Design" },
  { id: "engineering", label: "Engineering" },
  { id: "outcome", label: "Outcome" },
];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) {
    return {
      title: "Case study unavailable",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${project.title} — ${project.tagline} | Case study`;

  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      type: "article",
      url: `/work/${slug}`,
      ...(project.image
        ? {
            images: [
              {
                url: project.image,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      ...(project.image
        ? {
            images: [project.image],
          }
        : {}),
    },
    alternates: {
      canonical: `/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  const project = projectBySlug(slug);

  if (!project) {
    notFound();
  }

  const next = nextProject(project.slug);

  return (
    <>
      {/* HERO */}
      <section className="hero-wash px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto w-full max-w-6xl">
          <Link
            href="/work"
            className="label-mono transition-colors hover:text-foreground"
          >
            ← All work
          </Link>

          <div className="mt-6 max-w-3xl rise">
            <Eyebrow>
              Case study · {project.index}
            </Eyebrow>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.description}
            </p>

            <div className="mt-7">
              <CTA
                href={project.url}
                variant="dark"
                icon="external"
              >
                Visit live site
              </CTA>
            </div>
          </div>

          <div className="mt-12">
            <BrowserFrame
              src={project.image}
              alt={project.imageAlt}
              label={project.url.replace(/^https?:\/\//, "")}
              imgClassName="aspect-[16/9]"
            />
          </div>

          <dl className="mt-8 grid gap-6 rounded-3xl border border-border bg-card p-6 sm:grid-cols-4 sm:p-8">
            {[
              ["Role", project.role],
              ["Scope", project.scope],
              ["Platform", project.platform],
              ["Year", project.year],
            ].map(([key, value]) => (
              <div key={key} className="min-w-0">
                <dt className="label-mono">{key}</dt>
                <dd className="mt-1 text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CASE STUDY CONTENT */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[200px_minmax(0,1fr)]">
          {/* Desktop section navigation */}
          <nav
            aria-label="Case study sections"
            className="hidden lg:block"
          >
            <div className="sticky top-28 grid gap-2">
              {sectionList.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="grid gap-12">
            {/* OVERVIEW */}
            <Reveal
              id="overview"
              className="scroll-mt-28"
            >
              <Eyebrow>Overview</Eyebrow>

              <p className="mt-4 text-lg leading-relaxed sm:text-xl">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((stackItem) => (
                  <Tag key={stackItem}>
                    {stackItem}
                  </Tag>
                ))}
              </div>
            </Reveal>

            {/* REMAINING SECTIONS */}
            {[
              {
                id: "challenge",
                label: "The Challenge",
                body: project.sections.problem,
              },
              {
                id: "approach",
                label: "Approach",
                body: project.sections.approach,
              },
              {
                id: "design",
                label: "Design",
                body: project.sections.design,
              },
              {
                id: "engineering",
                label: "Engineering",
                body: project.sections.engineering,
              },
              {
                id: "outcome",
                label: "Outcome",
                body: project.sections.outcome,
              },
            ].map(({ id, label, body }) => (
              <Reveal
                key={id}
                id={id}
                className="scroll-mt-28 border-t border-border pt-10"
              >
                <Eyebrow>{label}</Eyebrow>

                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  {label}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* NEXT PROJECT */}
      <Section className="pt-0">
        <Link
          href={`/work/${next.slug}`}
          className="surface-panel lift-hover grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-8 sm:flex sm:justify-between sm:p-10"
        >
          <div className="min-w-0">
            <p className="label-mono">Next project</p>

            <p className="mt-2 truncate text-2xl font-semibold">
              {next.title}
            </p>
          </div>

          <ArrowUpRight
            className="size-6 shrink-0 text-primary"
            aria-hidden
          />
        </Link>
      </Section>
    </>
  );
}