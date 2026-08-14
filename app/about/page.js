import { CTA, Eyebrow, Section, SectionHead } from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

const title = "About Emmanuel — Software Engineer & Product Builder";
const description =
  "How I work, the path that got me here, and the tools I use to design and engineer software end to end.";

const facts = [
  ["Name", "Emmanuel"],
  ["Handle", "coder_zi"],
  ["Focus", "Product design + engineering"],
  ["Works with", "Founders & Businesses"],
  ["Availability", "Open to new projects"],
];

const howIWork = [
  {
    t: "Own the whole thing",
    c: "Design and engineering in one place, so nothing gets lost between the mockup and the deploy.",
  },
  {
    t: "Structure before pixels",
    c: "I decide what the product is and how it's organised before deciding what it looks like.",
  },
  {
    t: "Ship in slices",
    c: "You see a working preview early and often, instead of a big reveal at the end.",
  },
  {
    t: "Honest scope",
    c: "If something isn't worth building yet, I say so and suggest what to build instead.",
  },
];

const journey = [
  {
    y: "Then",
    t: "Self-taught start",
    c: "Began building small websites and tools, learning by shipping things people actually used.",
  },
  {
    y: "Next",
    t: "Client work",
    c: "Designed and engineered brand sites and business platforms across events, photography and services.",
  },
  {
    y: "Now",
    t: "Products",
    c: "Building full products like Clipifai and Ascend, from data model to interface.",
  },
];

const tools = [
  { label: "Design", items: ["Figma", "Design systems", "Prototyping"] },
  { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Motion"] },
  { label: "Backend", items: ["Node.js", "Postgres", "REST APIs"] },
  { label: "Ops", items: ["Vercel", "Cloudflare", "Git", "CI/CD"] },
];

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <>
      <section className="hero-wash px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Image
            src="/images/emmanuel-portrait.jpg"
            alt="Portrait of Emmanuel, software engineer and product builder"
            width={800}
            height={1000}
            className="rise mx-auto aspect-[4/5] w-full max-w-xs rounded-4xl object-cover shadow-card lg:max-w-none"
            priority
          />

          <div className="min-w-0 rise text-center lg:text-left">
            <Eyebrow>About</Eyebrow>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl">
              I&apos;m Emmanuel. I design and build software people rely on.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I work with founders and businesses who need one person accountable for the product:
              how it&apos;s structured, how it looks, how it&apos;s engineered and how it goes live. I like
              hard interfaces, clear data models and software that still reads well six months on.
            </p>

            <dl className="mt-8 grid gap-4 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2">
              {facts.map(([k, v]) => (
                <div key={k} className="min-w-0">
                  <dt className="label-mono">{k}</dt>
                  <dd className="mt-1 text-sm">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap gap-3">
              <CTA to="/contact">Work with me</CTA>
              <CTA to="/work" variant="outline" icon="none">
                See the work
              </CTA>
            </div>
          </div>
        </div>
      </section>

      <Section className="pt-8">
        <SectionHead eyebrow="How I work" title="Four things that stay constant" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {howIWork.map((h, i) => (
            <Reveal key={h.t} delay={(i % 2) * 80}>
              <div className="surface-card h-full p-6">
                <h3 className="text-base font-semibold">{h.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.c}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="surface-panel p-8 sm:p-12">
          <SectionHead eyebrow="My journey" title="How I got here" />

          <ol className="mt-10 grid gap-8">
            {journey.map((j, i) => (
              <Reveal
                key={j.t}
                as="li"
                delay={i * 70}
                className="grid gap-2 border-l border-border pl-6"
              >
                <p className="label-mono">{j.y}</p>
                <h3 className="text-lg font-semibold">{j.t}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {j.c}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHead eyebrow="Tools & technologies" title="What I build with" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((g, i) => (
            <Reveal key={g.label} delay={i * 60}>
              <div className="surface-card h-full p-5">
                <p className="label-mono">{g.label}</p>

                <ul className="mt-4 grid gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-muted-foreground">
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