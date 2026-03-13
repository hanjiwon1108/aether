"use client";
import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { TrendingUp, Target, Search, BarChart2 } from "lucide-react";

const services = [
  { icon: Search, title: "SEO Strategy", desc: "Comprehensive keyword research, on-page optimization, and technical SEO audits." },
  { icon: Target, title: "Paid Media", desc: "Results-driven campaigns across Google, Meta, LinkedIn, and programmatic display." },
  { icon: TrendingUp, title: "Growth Hacking", desc: "Data-driven experimentation to find your fastest path to sustainable growth." },
  { icon: BarChart2, title: "Analytics & Reporting", desc: "Custom dashboards and monthly performance reviews with clear, actionable insights." },
];

const stats = [
  { value: "4.2x", label: "Average ROAS" },
  { value: "300%", label: "Av. organic traffic lift" },
  { value: "92%", label: "Client retention rate" },
];

export default function MarketingServicePage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-24">
          <span className="text-sm text-accent uppercase tracking-widest mb-4 block">Services / Marketing</span>
          <h1 className="text-6xl md:text-9xl font-bold font-display mb-8 leading-none">DIGITAL <br /><span className="text-accent">MARKETING</span></h1>
          <p className="text-2xl text-muted-foreground max-w-2xl leading-relaxed">We grow pipelines, not vanity metrics. Every dollar, every click, every decision backed by data.</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 mb-24">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center border border-white/10 rounded-2xl p-8">
              <div className="text-5xl font-black text-accent mb-3">{s.value}</div>
              <p className="text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-8 h-full hover:border-accent/50 transition-colors">
                <s.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <Button>Grow My Brand</Button>
      </div>
    </main>
  );
}
