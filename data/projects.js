// data/projects.js

const clipifaiShot = "/images/clipifai.jpg";
const ascendShot = "/images/ascend.jpg";
const hermesShot = "/images/hermes-events.jpg";
const firstChoiceShot = "/images/first-choice-studio.jpg";
const jkShot = "/images/jk-shotit-photography.jpg";
const zootrek = "/images/zootrek.png";

export const projects = [
  {
    slug: "clipifai",
    index: "01",
    title: "Clipifai",
    tagline: "Document → Audio",
    summary: "Turn documents into engaging audio experiences.",
    description:
      "Clipifai transforms documents into engaging audio experiences, making long-form information easier to consume.",
    url: "https://clipifai.xyz",
    type: "Document-to-audiobook SaaS",
    position: "Product Engineering",
    category: "Platforms",
    metadata: ["Product Engineering", "Web App"],
    year: "2026",
    role: "Product Engineer",
    scope: "Product design · Frontend · Backend · Integration",
    platform: "Web",
    stack: ["React", "TypeScript", "Node.js", "Text-to-speech APIs"],
    image: clipifaiShot,
    imageAlt:
      "Clipifai landing page showing document to audiobook conversion",
    sections: {
      problem:
        "People collect far more reading material than they can realistically sit down and read. Ebooks, reports, essays and personal notes pile up while the time to read them does not. The problem is not a lack of interest, it is the format: reading demands full attention and a screen, and most of the day offers neither.",
      approach:
        "Before writing feature code I shaped the product around one path: bring in a document, choose how it should sound, listen anywhere. Everything that did not serve that path was pushed out of the first version, which kept the interface small and the processing pipeline focused on doing one job reliably.",
      design:
        "The interface leans on a calm surface, a single clear primary action and progressive disclosure. Conversion state is always visible, because waiting on processing is the moment a product like this either earns trust or loses it. Playback controls follow familiar audio conventions rather than inventing new ones.",
      engineering:
        "The product is a typed React frontend over an API layer that handles upload, text extraction, voice synthesis and delivery of the finished audio. Long-running work is queued rather than handled inline, so the interface stays responsive and can report progress instead of blocking on a request.",
      outcome:
        "Clipifai is live at clipifai.xyz with document upload, voice selection, conversion and in-browser playback working end to end.",
    },
  },

  {
    slug: "ascend",
    index: "02",
    title: "Ascend",
    tagline: "Analytics for content creators",
    summary:
      "Analytics and insights designed to help content creators understand what is working.",
    description:
      "Ascend brings a creator's performance across platforms into one place, so the numbers turn into decisions instead of dashboards.",
    url: "https://ascendai-beta.vercel.app",
    type: "Analytics product for content creators",
    position: "Product Engineering",
    category: "Web Apps",
    metadata: ["Product Engineering", "Web App"],
    year: "2026",
    role: "Product Engineer",
    scope:
      "Product design · Frontend · Data modelling · Integration",
    platform: "Web",
    stack: ["React", "TypeScript", "Charting", "REST APIs"],
    image: ascendShot,
    imageAlt: "Ascend analytics platform hero with performance charts",
    sections: {
      problem:
        "Creators publish across several platforms and each one reports on its own terms. The raw numbers exist, but they are fragmented, inconsistently defined and rarely answer the only question that matters: what is actually working, and what should I do more of.",
      approach:
        "I modelled the product around comparison rather than collection. Metrics are grouped so reach, engagement and audience growth can be read against each other and across time, and the default view answers a question instead of presenting every available chart at once.",
      design:
        "Data-dense screens fail when everything competes for attention, so the interface uses a quiet surface, restrained accent colour for the values that matter and consistent chart treatments. Numbers are typeset for scanning, with change indicators carrying the signal.",
      engineering:
        "A typed frontend consumes normalised metric shapes from an API layer, which keeps platform-specific quirks out of the interface. Aggregation and time-window logic live behind that boundary so new sources can be added without redesigning the dashboard.",
      outcome:
        "Ascend is live in beta with the multi-platform analytics dashboard, time-range comparison and performance breakdowns implemented.",
    },
  },

  {
    slug: "hermes-events",
    index: "03",
    title: "Hermes Events",
    tagline: "Luxury event planning",
    summary:
      "A premium digital experience for a luxury event planning business in Mauritius.",
    description:
      "A premium digital experience for a luxury event planning and management business in Mauritius, built around photography and credibility.",
    url: "https://hermeseventsmauritius.com",
    type: "Luxury event planning website",
    position: "Web Design + Engineering",
    category: "Websites",
    metadata: ["Web Design", "Frontend Engineering"],
    year: "2026",
    role: "Designer & Frontend Engineer",
    scope:
      "Web design · Frontend engineering · Content structure",
    platform: "Web",
    stack: ["React", "Tailwind CSS", "Motion"],
    image: hermesShot,
    imageAlt:
      "Hermes Events Mauritius website hero with wedding photography",
    sections: {
      problem:
        "A luxury event business is judged on taste before it is judged on services. The previous online presence could not carry that impression, and clients planning weddings and destination events had no way to gauge the quality of the work before making contact.",
      approach:
        "I treated the site as a portfolio first and a service page second. Photography leads, structure follows: what they do, how the process works, and a direct route to an enquiry, in that order.",
      design:
        "Editorial type with generous space, full-bleed imagery and a restrained gold accent taken from the brand. Motion is slow and deliberate — image reveals and gentle transitions — because sudden movement reads as cheap in this category.",
      engineering:
        "A component-driven frontend with a gallery and carousel system built for large photography: correct aspect-ratio handling, responsive sources and lazy loading below the fold so image weight never blocks the first view.",
      outcome:
        "The site is live at hermeseventsmauritius.com with the full service, gallery and enquiry experience across mobile and desktop.",
    },
  },

  {
    slug: "first-choice-studio",
    index: "04",
    title: "First Choice Studio",
    tagline: "Business / professional services",
    summary:
      "A polished digital presence designed to communicate expertise and build trust.",
    description:
      "A polished digital presence for a professional photography studio, designed to communicate expertise and make booking obvious.",
    url: "https://firstchoicestudio.com.ng",
    type: "Professional business website",
    position: "Web Design + Engineering",
    category: "Websites",
    metadata: ["Website", "Frontend Engineering"],
    year: "2026",
    role: "Designer & Frontend Engineer",
    scope: "Web design · Frontend engineering",
    platform: "Web",
    stack: ["React", "Tailwind CSS"],
    image: firstChoiceShot,
    imageAlt:
      "First Choice Studio website hero with cinematic wedding photography",
    sections: {
      problem:
        "The studio's work was strong but the digital presence did not reflect it. Prospective clients arriving from social platforms had nowhere to understand the range of services, see the work presented properly, or book a session without a back-and-forth conversation.",
      approach:
        "I structured the site around the decision a visitor is actually making: is this studio right for my moment, and how do I book it. Services, gallery and booking sit on one clear path, with the work carrying the persuasion.",
      design:
        "A cinematic hero, warm accent colour drawn from the photography and typography with enough contrast to stay readable over imagery. Sections alternate between image-led and quiet, so the gallery has room to land.",
      engineering:
        "Built as reusable sections with responsive image handling and lazy loading, so a photography-heavy page still loads quickly on mobile connections.",
      outcome:
        "The site is live at firstchoicestudio.com.ng with services, galleries and a booking route in place.",
    },
  },

  {
    slug: "jk-shotit-photography",
    index: "05",
    title: "JK Shotit Photography",
    tagline: "Photography",
    summary:
      "A visual-first website designed around photography, storytelling and conversion.",
    description:
      "A visual-first website for a photography brand, designed around the work, the story behind it and a clear path to an enquiry.",
    url: "https://jkshotitphotography.vercel.app",
    type: "Photography website",
    position: "Web Design + Engineering",
    category: "Websites",
    metadata: ["Website", "Frontend Engineering"],
    year: "2026",
    role: "Designer & Frontend Engineer",
    scope: "Web design · Frontend engineering",
    platform: "Web",
    stack: ["React", "Tailwind CSS"],
    image: jkShot,
    imageAlt:
      "JK Shotit Photography website hero with portrait photography",
    sections: {
      problem:
        "Photography brands live on platforms they do not control, where the work is compressed, reordered and mixed with everything else. The brand needed a home where the images are presented deliberately and an enquiry is one action away.",
      approach:
        "Image quality sets the hierarchy. I designed around a small number of strong frames per view rather than an exhaustive archive, then let the specialisms — weddings, maternity, graduation — organise the rest.",
      design:
        "Dark, warm surfaces so the photography carries the colour, editorial headlines and a single accent for actions. Hover and reveal states are subtle: the image moves, the interface does not.",
      engineering:
        "A frontend built from composable gallery and section components, with responsive sizing, correct object-fit and deferred loading for below-the-fold imagery to avoid layout shift.",
      outcome:
        "The site is live with the portfolio, specialism pages and enquiry flow implemented.",
    },
  },

  {
    slug: "zootrek",
    index: "06",
    title: "Zootrek",
    tagline: "Digital product",
    summary:
      "A digital product experience designed around exploration and interaction.",
    description:
      "A travel and tours product experience designed around exploration, browsing and interaction rather than static pages.",
    url: "https://zootrek.vercel.app",
    type: "Digital product / web experience",
    position: "Product Engineering",
    category: "Web Apps",
    metadata: ["Web Product", "Engineering"],
    year: "2026",
    role: "Product Engineer",
    scope: "Product design · Frontend engineering",
    platform: "Web",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: zootrek,
    imageAlt: "Zootrek project screenshot placeholder",
    sections: {
      problem:
        "Travel and tour content is usually presented as a brochure: long pages that describe destinations but give no real way to explore them. The interesting part — comparing options and following curiosity — happens somewhere else entirely.",
      approach:
        "I approached it as a product rather than a website: destinations and tours modelled as data, with browsing, filtering and detail views built on top so the experience can grow without a redesign.",
      design:
        "Imagery-led cards with clear structure underneath, so exploration stays fast and the interface never gets in the way of the destination itself.",
      engineering:
        "A typed React frontend over a content model for destinations and tours, with routing and state shaped so that a view is always a readable, shareable URL.",
      outcome:
        "The product experience is implemented. Live screenshots are pending a redeploy of the hosted build, so no product imagery is shown here yet.",
    },
  },
];

export function projectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function nextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug);

  return projects[(index + 1) % projects.length];
}