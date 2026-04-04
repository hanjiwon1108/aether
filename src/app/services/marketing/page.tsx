"use client";

import {
  ServiceCardGrid,
  ServiceCta,
  ServiceHero,
  ServiceMetricGrid,
  ServicePageShell,
} from "@/entities/service/ui/ServiceDetailSections";
import { SERVICES_DATA, STATS_DATA } from "./constants";

export default function MarketingServicePage() {
  return (
    <ServicePageShell>
      <ServiceHero
        eyebrow="Services / Marketing"
        title={["DIGITAL", "MARKETING"]}
        description="We grow pipelines, not vanity metrics. Every dollar, every click, every decision backed by data."
        accentTone="accent"
      />
      <ServiceMetricGrid items={STATS_DATA} accentTone="accent" />
      <ServiceCardGrid items={SERVICES_DATA} accentTone="accent" />
      <ServiceCta label="Grow My Brand" />
    </ServicePageShell>
  );
}
