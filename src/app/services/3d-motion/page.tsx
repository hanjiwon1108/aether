"use client";
import { Box, Film, Sparkles, Zap } from "lucide-react";
import {
  ServiceCardGrid,
  ServiceCta,
  ServiceHero,
  ServicePageShell,
} from "@/entities/service/ui/ServiceDetailSections";

const offerings = [
  {
    icon: Box,
    title: "3D Modeling & Visualization",
    description:
      "Hyper-realistic product renders, architectural visualizations, and conceptual 3D worlds built in Blender and Cinema 4D.",
  },
  {
    icon: Film,
    title: "Motion Graphics",
    description:
      "Logo animations, explainer videos, broadcast packages, and social media content that demand attention.",
  },
  {
    icon: Sparkles,
    title: "WebGL Experiences",
    description:
      "Browser-based 3D that loads in seconds. Interactive product showcases, immersive landing pages, and data visualizations.",
  },
  {
    icon: Zap,
    title: "Generative Art",
    description:
      "Procedurally generated visuals and interactive installations that make your brand unforgettable.",
  },
];

export default function MotionServicePage() {
  return (
    <ServicePageShell>
      <ServiceHero
        eyebrow="Services / 3D & Motion"
        title={["3D &", "MOTION"]}
        description="We transcend the static. From hyper-real 3D to mind-bending motion, we move audiences — literally."
      />
      <ServiceCardGrid items={offerings} />
      <ServiceCta label="Start a 3D Project" />
    </ServicePageShell>
  );
}
