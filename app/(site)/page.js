import Link from "next/link";
import {
  Code2,
  Globe,
  LayoutGrid,
  Smartphone,
  Sparkles,
  Boxes,
  ServerCog,
  Palette,
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
import { ContactForm } from "@/components/contact-form";
import { projects } from "@/data/projects";

const title = "Emmanuel — Software Engineer & Product Engineer | coder_zi  | Founder Clipifai";

const description =
  "I design and build websites, web apps, mobile apps and custom software for startups and businesses — from first idea to shipped product. I've worked on quite the number of enterprise grade level software and can help your startup/business hit their goals in record time.";

const services = [
  {
    icon: Globe,
    title: "Websites",
    copy: "Marketing sites and brand presences that load fast, read clearly and earn trust.",
  },
  {
    icon: LayoutGrid,
    title: "Web Apps",
    copy: "Dashboards, tools and platforms with real data, real state and real users.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    copy: "Cross-platform apps that feel native and share a codebase with your product.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    copy: "Internal systems and automations shaped around how your business actually runs.",
  },
];

const stack = [
  {
    icon: Palette,
    label: "Interface",
    items: ["Nextjs", "React", "React Native", "TypeScript", "Javascript", "Tailwind CSS"],
  },
  {
    icon: ServerCog,
    label: "Backend",
    items: ["Node.js", "ExpressJS", "Firebase", "Supabase", "REST APIs", "Auth"],
  },
  {
    icon: Boxes,
    label: "Product",
    items: [
      "Product strategy",
      "Design Systems",
      "UX flows",
      "Roadmapping",
      "Feature prioritization",
      "Analytics & KPI",
    ],
  },
  {
    icon: Sparkles,
    label: "AI",
    items: [
      "AI product strategy",
      "Prompt engineering",
      "Workflow automation",
      "RAG + retrieval",
      "Evaluation & iteration",
      "Automation",
    ],
  },
];

export const metadata = {
  title,
  description,
  keywords: [
    "coder_zi",
    "coder_zi website",
    "coder_zi portfolio",
    "software engineer portfolio",
    "web developer portfolio",
    "web design agency",
    "web design agency portfolio",
    "software engineer",
    "Product Engineer",
    "Product Developer",
    "coderzi",
    "coder-zi",
    "coder zi",
    "Coder Zi",
    "clipifai founder",
    "clipifai",
    "Emmanuel Onwukwe",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "coder_zi — Emmanuel Onwukwe",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel — coder_zi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@coder_zi",
    title,
    description,
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel — coder_zi",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featured = projects.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="hero-wash px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:text-left">
            <div className="order-2 max-w-3xl rise lg:order-1">
              <Eyebrow>Software engineer · product builder</Eyebrow>

              <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] sm:text-6xl">
                I build the software behind the idea you keep coming back to.
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                I&apos;m Emmanuel — I design and engineer websites, web apps, mobile
                apps and custom software end to end. Fewer handoffs, one person
                accountable for how it looks and how it works.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <CTA to="/contact">Start a project</CTA>

                <CTA to="/work" variant="outline" icon="none">
                  View selected work
                </CTA>
              </div>
            </div>

            <div className="order-1 shrink-0 lg:order-2">
              <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/60 p-1 shadow-[0_18px_45px_rgba(15,23,42,0.12)] ring-1 ring-black/5">
                <img
                  src="/images/emmanuel-portrait.jpg"
                  alt="Portrait of Emmanuel, software engineer and product builder"
                  className="mx-auto aspect-[4/5] w-40 object-cover object-top sm:w-48 md:w-56 lg:w-[22rem] xl:w-[26rem]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <BrowserFrame
                  src={p.image}
                  alt={p.imageAlt}
                  label={p.url.replace(/^https?:\/\//, "")}
                  imgClassName="aspect-[16/11]"
                  className="lift-hover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <Section id="work">
        <SectionHead
          eyebrow="Selected work"
          title="Products and sites I&apos;ve shipped"
          copy="Some projects I've worked on across SaaS products, analytics tools and premium brand websites."
          action={
            <CTA to="/work" variant="quiet">
              All work
            </CTA>
          }
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <Link
                href={`/work/${p.slug}`}
                className="lift-hover group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card"
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                ) : (
                  <div className="grid aspect-[16/10] w-full place-items-center bg-surface font-mono text-[11px] text-muted-foreground">
                    Screenshot pending redeploy
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="truncate text-base font-semibold">
                      {p.title}
                    </h3>

                    <span className="font-mono text-[11px] text-muted-foreground">
                      {p.index}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.metadata.map((m) => (
                      <Tag key={m}>{m}</Tag>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="pt-0">
        <div className="surface-panel p-6 sm:p-12">
          <SectionHead
            eyebrow="What I can build"
            title="Professional services I offer"
            copy="Four engagements I take on most often — each designed, engineered and shipped end to end."
            action={
              <CTA to="/my-builds" variant="quiet">
                How I work
              </CTA>
            }
          />

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 70}
                className="min-w-0"
              >
                <div className="surface-card h-full p-5">
                  <div className="grid size-11 place-items-center rounded-xl bg-accent-soft text-primary">
                    <s.icon className="size-5" aria-hidden />
                  </div>

                  <h3 className="mt-4 text-base font-semibold">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* TECHNICAL STACK */}
      <Section className="pt-0">
        <SectionHead
          eyebrow="Technical stack"
          title="The tools I reach for"
          copy="Chosen for longevity and maintainability, not novelty."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, i) => (
            <Reveal key={group.label} delay={i * 70}>
              <div className="surface-card h-full p-5">
                <div className="flex items-center gap-2">
                  <group.icon
                    className="size-4 text-primary"
                    aria-hidden
                  />

                  <p className="label-mono">{group.label}</p>
                </div>

                <ul className="mt-4 grid gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section className="pt-0">
        <div className="surface-panel grid gap-8 p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]">
          <img
            src="/images/emmanuel-portrait.jpg"
            alt="Portrait of Emmanuel, software engineer and product builder"
            className="aspect-[4/5] w-full rounded-3xl object-cover"
            loading="lazy"
            decoding="async"
          />

          <div className="min-w-0">
            <Eyebrow>About</Eyebrow>

            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              A designer who engineers, or an engineer who designs — either way
              you get both.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I&apos;ve spent my time building products for founders and businesses
              that needed one person to own the whole thing: the interface, the
              architecture, the deploy. I care about clarity, honest timelines
              and software that still makes sense six months later.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTA to="/about" variant="outline" icon="none">
                More about me
              </CTA>

              <CTA to="/insights" variant="quiet">
                Read insights
              </CTA>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Let&apos;s talk about your build
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Send a few details and I&apos;ll come back with an honest read: what
              it takes, what I&apos;d cut, and what I&apos;d build first.
            </p>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}