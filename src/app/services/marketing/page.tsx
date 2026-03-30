"use client";
import { TrendingUp, Target, Search, BarChart2 } from "lucide-react";
import {
  ServiceCardGrid,
  ServiceCta,
  ServiceHero,
  ServiceMetricGrid,
  ServicePageShell,
} from "@/entities/service/ui/ServiceDetailSections";

const services = [
  {
    icon: Search,
    title: "SEO Strategy",
    description:
      "Comprehensive keyword research, on-page optimization, and technical SEO audits.",
  },
  {
    icon: Target,
    title: "Paid Media",
    description:
      "Results-driven campaigns across Google, Meta, LinkedIn, and programmatic display.",
  },
  {
    icon: TrendingUp,
    title: "Growth Hacking",
    description:
      "Data-driven experimentation to find your fastest path to sustainable growth.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description:
      "Custom dashboards and monthly performance reviews with clear, actionable insights.",
  },
];

const stats = [
  { value: "4.2x", label: "Average ROAS" },
  { value: "300%", label: "Av. organic traffic lift" },
  { value: "92%", label: "Client retention rate" },
];

export default function MarketingServicePage() {
  return (
    <ServicePageShell>
      <ServiceHero
        eyebrow="Services / Marketing"
        title={["DIGITAL", "MARKETING"]}
        description="We grow pipelines, not vanity metrics. Every dollar, every click, every decision backed by data."
        accentTone="accent"
      />
      <ServiceMetricGrid items={stats} accentTone="accent" />
      <ServiceCardGrid items={services} accentTone="accent" />
      <ServiceCta label="Grow My Brand" />
    </ServicePageShell>
  );
}
