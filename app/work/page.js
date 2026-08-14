import WorkClient from "@/components/work-client";

export const metadata = {
  title: "Work — Selected projects by Emmanuel (coder_zi)",
  description:
    "Case studies from shipped work: Clipifai, Ascend, Hermes Events, First Choice Studio, JK Shotit Photography and Zootrek.",
  openGraph: {
    title: "Work — Selected projects by Emmanuel (coder_zi)",
    description:
      "Case studies from shipped work: Clipifai, Ascend, Hermes Events, First Choice Studio, JK Shotit Photography and Zootrek.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}