"use client";
import { Monitor, Layers, Paintbrush, Code2 } from "lucide-react";
import {
  ServiceCta,
  ServiceHero,
  ServiceHighlightGrid,
  ServicePageShell,
  ServiceSectionTitle,
  ServiceTimeline,
} from "@/entities/service/ui/ServiceDetailSections";

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We study your users, market, and goals to establish a crystal-clear design brief.",
  },
  {
    step: "02",
    title: "Wireframing",
    description:
      "Information architecture and low-fidelity wireframes define the structural skeleton.",
  },
  {
    step: "03",
    title: "Visual Design",
    description:
      "High-fidelity screens with your brand system applied — every pixel intentional.",
  },
  {
    step: "04",
    title: "Prototyping",
    description:
      "Interactive Figma prototypes for real user testing before a single line of code is written.",
  },
  {
    step: "05",
    title: "Handoff",
    description:
      "Production-ready design tokens, specs, and assets handed to your dev team or ours.",
  },
];

const capabilities = [
  { icon: Monitor, label: "UI Design" },
  { icon: Layers, label: "Design Systems" },
  { icon: Paintbrush, label: "Visual Identity" },
  { icon: Code2, label: "Frontend Dev" },
];

export default function WebDesignServicePage() {
  return (
    <ServicePageShell>
      <ServiceHero
        eyebrow="Services / Web Design"
        title={["WEB", "DESIGN"]}
        description="We craft interfaces that are achingly beautiful and intuitively usable. Design that doesn&apos;t just look good — it converts."
      />
      <ServiceHighlightGrid items={capabilities} />
      <ServiceSectionTitle title="OUR PROCESS" />
      <ServiceTimeline items={process} />
      <ServiceCta label="Start Your Project" />
    </ServicePageShell>
  );
}
