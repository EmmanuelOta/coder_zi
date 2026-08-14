import Image from "next/image";
import { Eyebrow, Section, SectionHead, Tag } from "@/components/primitives";
import { Reveal } from "@/components/reveal";

const title = "Insights — Notes on building software | Emmanuel (coder_zi)";
const description =
  "Short essays on product engineering, design decisions and shipping software as a team of one.";

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
    canonical: "/insights",
  },
};

const featured = {
  category: "Product engineering",
  title: "Design the data model before you design the dashboard",
  excerpt:
    "Most analytics products fail at the modelling stage, not the charting stage. If reach, engagement and growth aren't defined consistently across sources, no interface can make them comparable — and the user ends up doing the reconciliation in their head.",
  read: "6 min read",
  date: "Coming soon",
};

const articles = [
  {
    category: "Craft",
    title: "Why I structure a site before I style it",
    excerpt:
      "Layout decisions made before content structure exists are guesses that get expensive later.",
    read: "4 min read",
  },
  {
    category: "Process",
    title: "Shipping in slices beats the big reveal",
    excerpt:
      "Clients don't need a finished product to give useful feedback — they need a clickable one.",
    read: "5 min read",
  },
  {
    category: "Engineering",
    title: "Queue the slow work, keep the interface honest",
    excerpt:
      "What building Clipifai's conversion pipeline taught me about visible progress and trust.",
    read: "7 min read",
  },
  {
    category: "Design",
    title: "Restraint is a feature in data-dense UI",
    excerpt:
      "One accent colour, consistent chart treatments, and numbers typeset for scanning.",
    read: "4 min read",
  },
];

export default function Insights() {
  return (
    <>
      <section className="hero-wash px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto w-full max-w-3xl rise text-center lg:text-left">
          <Eyebrow>Insights</Eyebrow>

          <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] sm:text-5xl">
            Notes on building software properly.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Short, practical pieces on product engineering and design decisions — written from
            actual projects. New writing is published here as it's finished.
          </p>
        </div>
      </section>

      <Section className="pt-8">
        <Reveal>
          <article className="surface-card lift-hover grid overflow-hidden lg:grid-cols-[1.1fr_1fr]">
            <Image
              src="/images/ascend.jpg"
              alt="Analytics dashboard interface from the Ascend project"
              width={1200}
              height={800}
              className="h-full w-full object-cover object-top"
            />

            <div className="min-w-0 p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <Tag>Featured article</Tag>

                <span className="font-mono text-[11px] text-muted-foreground">
                  {featured.category}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
                {featured.title}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {featured.excerpt}
              </p>

              <p className="mt-6 font-mono text-[11px] tracking-wide text-muted-foreground">
                {featured.read} · {featured.date}
              </p>
            </div>
          </article>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <SectionHead eyebrow="More writing" title="In the pipeline" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 80}>
              <article className="surface-card lift-hover h-full p-6">
                <p className="label-mono">{a.category}</p>

                <h3 className="mt-3 text-lg font-semibold">{a.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>

                <p className="mt-5 font-mono text-[11px] tracking-wide text-muted-foreground">
                  {a.read} · Coming soon
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}