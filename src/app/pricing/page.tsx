"use client";
import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Launchpad",
    price: "$4,900",
    desc: "Perfect for startups and lean teams needing a strong brand and digital presence fast.",
    features: ["Brand Identity Kit", "5-Page Website", "Mobile-Responsive Design", "Basic SEO Setup", "2 Revision Rounds", "30-day Support"],
    accent: "border-white/20",
    cta: "Get Started",
  },
  {
    name: "Orbit",
    price: "$14,900",
    desc: "For established companies ready to elevate every aspect of their digital presence.",
    features: ["Complete Brand System", "Custom Web Application", "WebGL / 3D Interactions", "CMS Integration", "Analytics Dashboard", "Unlimited Revisions", "6-month Support"],
    accent: "border-primary/60",
    cta: "Let's Talk",
    featured: true,
  },
  {
    name: "Nebula",
    price: "Custom",
    desc: "Full-service partnership for enterprises looking for a world-class dedicated agency team.",
    features: ["All Orbit features", "Dedicated Creative Team", "Global Campaign Strategy", "Bespoke 3D Experiences", "Priority 24/7 Support", "Quarterly Strategy Reviews"],
    accent: "border-secondary/50",
    cta: "Contact Us",
  },
];

export default function PricingPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">TRANS<span className="text-primary">PARENT</span> PRICING</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">No hidden costs. No surprises. Just clear value for world-class work.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
            <Card className={`p-8 flex flex-col h-full border-2 ${plan.accent} ${plan.featured ? "bg-white/5" : ""} relative`}>
              {plan.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className={`text-5xl font-black mb-4 ${plan.featured ? "text-primary" : ""}`}>{plan.price}</div>
              <p className="text-muted-foreground mb-8 flex-grow">{plan.desc}</p>
              <ul className="space-y-3 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full">
                <Button variant={plan.featured ? "primary" : "outline"} className="w-full">{plan.cta}</Button>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
