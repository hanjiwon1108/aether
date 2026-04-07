"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Button from "@/shared/ui/Button";
import Card from "@/shared/ui/Card";
import { cn } from "@/shared/lib/utils";

type AccentTone = "primary" | "secondary" | "accent";

type HeroProps = {
  eyebrow: string;
  title: [string, string];
  description: string;
  accentTone?: AccentTone;
};

type CardItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type MetricItem = {
  value: string;
  label: string;
};

type HighlightItem = {
  icon: LucideIcon;
  label: string;
};

type TimelineItem = {
  step: string;
  title: string;
  description: string;
};

const accentClasses: Record<AccentTone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const borderClasses: Record<AccentTone, string> = {
  primary: "hover:border-primary/50",
  secondary: "hover:border-secondary/50",
  accent: "hover:border-accent/50",
};

const heroAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const cardAnimation = (index: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: index * 0.1 },
});

export function ServicePageShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">{children}</div>
    </main>
  );
}

export function ServiceHero({
  eyebrow,
  title,
  description,
  accentTone = "primary",
}: Readonly<HeroProps>) {
  return (
    <motion.div {...heroAnimation} className="mb-24">
      <span
        className={cn(
          "mb-4 block text-sm uppercase tracking-widest",
          accentClasses[accentTone]
        )}
      >
        {eyebrow}
      </span>
      <h1 className="mb-8 font-display text-6xl font-bold leading-none md:text-9xl">
        {title[0]} <br />
        <span className={accentClasses[accentTone]}>{title[1]}</span>
      </h1>
      <p className="max-w-2xl text-2xl leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}

export function ServiceHighlightGrid({
  items,
  accentTone = "primary",
}: Readonly<{
  items: HighlightItem[];
  accentTone?: AccentTone;
}>) {
  return (
    <div className="mb-24 grid grid-cols-2 gap-6 md:grid-cols-4">
      {items.map(({ icon: Icon, label }, index) => (
        <motion.div key={label} {...cardAnimation(index)}>
          <Card className={cn("p-6 text-center transition-colors", borderClasses[accentTone])}>
            <Icon className={cn("mx-auto mb-4 h-8 w-8", accentClasses[accentTone])} />
            <p className="font-medium">{label}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export function ServiceMetricGrid({
  items,
  accentTone = "primary",
}: Readonly<{
  items: MetricItem[];
  accentTone?: AccentTone;
}>) {
  return (
    <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map(({ value, label }, index) => (
        <motion.div
          key={label}
          {...cardAnimation(index)}
          className="rounded-2xl border border-white/10 p-8 text-center"
        >
          <div className={cn("mb-3 text-5xl font-black", accentClasses[accentTone])}>
            {value}
          </div>
          <p className="text-muted-foreground">{label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function ServiceSectionTitle({
  title,
}: Readonly<{
  title: string;
}>) {
  return <h2 className="mb-12 text-4xl font-bold">{title}</h2>;
}

export function ServiceCardGrid({
  items,
  accentTone = "primary",
}: Readonly<{
  items: CardItem[];
  accentTone?: AccentTone;
}>) {
  return (
    <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
      {items.map(({ icon: Icon, title, description }, index) => (
        <motion.div key={title} {...cardAnimation(index)}>
          <Card className={cn("h-full p-8 transition-colors", borderClasses[accentTone])}>
            <Icon className={cn("mb-6 h-10 w-10", accentClasses[accentTone])} />
            <h3 className="mb-3 text-2xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export function ServiceTimeline({
  items,
  accentTone = "primary",
}: Readonly<{
  items: TimelineItem[];
  accentTone?: AccentTone;
}>) {
  return (
    <div className="mb-16 space-y-4">
      {items.map(({ step, title, description }, index) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="flex items-start gap-8 p-6 transition-colors hover:bg-white/5 md:p-8">
            <span className={cn("shrink-0 text-5xl font-black opacity-20", accentClasses[accentTone])}>
              {step}
            </span>
            <div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export function ServiceCta({
  label,
  variant = "primary",
}: Readonly<{
  label: string;
  variant?: "primary" | "secondary" | "outline";
}>) {
  return <Button variant={variant}>{label}</Button>;
}
