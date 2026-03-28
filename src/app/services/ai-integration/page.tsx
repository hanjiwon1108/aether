"use client";
import { Bot, BrainCircuit, MessageSquare, Wand2 } from "lucide-react";
import {
  ServiceCardGrid,
  ServiceCta,
  ServiceHero,
  ServicePageShell,
} from "@/entities/service/ui/ServiceDetailSections";

const capabilities = [
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    description:
      "Custom LLM-backed chatbots trained on your brand voice and product catalog.",
  },
  {
    icon: Wand2,
    title: "Generative Content",
    description:
      "Pipelines for AI-assisted copywriting, image generation, and A/B testing at scale.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning Models",
    description:
      "Custom ML models for recommendation engines, churn prediction, and pricing optimization.",
  },
  {
    icon: MessageSquare,
    title: "AI Design Tools",
    description:
      "Integrate AI into your design workflow for layout automation, image upscaling, and brand QA.",
  },
];

export default function AIServicePage() {
  return (
    <ServicePageShell>
      <ServiceHero
        eyebrow="Services / AI Integration"
        title={["AI", "INTEGRATION"]}
        description="We help you harness the power of AI without losing the human touch that makes your brand special."
        accentTone="secondary"
      />
      <ServiceCardGrid items={capabilities} accentTone="secondary" />
      <ServiceCta label="Explore AI Solutions" variant="secondary" />
    </ServicePageShell>
  );
}
