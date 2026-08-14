import Image from "next/image";
import { Eyebrow, Section } from "@/components/primitives";
import { ContactForm } from "@/components/contact-form";
import { Socials } from "@/components/socials";

const title = "Contact — Start a project with Emmanuel (coder_zi)";
const description =
  "Tell me about your website, web app, mobile app or custom software project and I'll come back with an honest read on scope and approach.";

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
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      <section className="hero-wash px-5 pb-12 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="min-w-0 rise text-center lg:text-left">
            <Eyebrow>Contact</Eyebrow>

            <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] sm:text-5xl">
              Tell me what you want to build.
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground lg:mx-0">
              A few details are enough to start. I'll reply with how I'd approach it, what I'd build
              first, and a realistic timeline.
            </p>

            <Socials className="mt-8 text-left" />
          </div>

          <ContactForm />
        </div>
      </section>

      <Section className="pt-4">
        <Image
          src="/images/first-choice-studio.jpg"
          alt="Cinematic photography from a recent client project"
          width={1600}
          height={700}
          className="aspect-[16/7] w-full rounded-4xl object-cover shadow-card"
        />
      </Section>
    </>
  );
}