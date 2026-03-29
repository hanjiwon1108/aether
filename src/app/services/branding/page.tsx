"use client";
import { Feather, Hash, Type, CircleDot } from "lucide-react";
import {
  ServiceCardGrid,
  ServiceCta,
  ServiceHero,
  ServicePageShell,
  ServiceSectionTitle,
} from "@/entities/service/ui/ServiceDetailSections";

const deliverables = [
  {
    icon: CircleDot,
    title: "Logo Design",
    description:
      "Primary logo, variations, and icon mark in all formats (SVG, PNG, EPS).",
  },
  {
    icon: Type,
    title: "Typography System",
    description:
      "Curated typeface pairing with a complete typographic scale.",
  },
  {
    icon: Hash,
    title: "Color Palette",
    description:
      "Primary, secondary, accent, and neutral palettes with accessibility ratios.",
  },
  {
    icon: Feather,
    title: "Brand Guidelines",
    description:
      "A comprehensive 60-page document covering every rule of your brand system.",
  },
];

export default function BrandingServicePage() {
  return (
    <ServicePageShell>
      <ServiceHero
        eyebrow="Services / Branding"
        title={["BRAND", "IDENTITY"]}
        description="A brand is more than a logo — it&apos;s a feeling. We build brand systems that resonate deeply and scale globally."
        accentTone="secondary"
      />
      <ServiceSectionTitle title="WHAT YOU GET" />
      <ServiceCardGrid items={deliverables} accentTone="secondary" />
      <ServiceCta label="Build Your Brand" variant="secondary" />
    </ServicePageShell>
  );
}
