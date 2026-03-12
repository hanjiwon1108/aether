"use client";
import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { Feather, Hash, Type, CircleDot } from "lucide-react";

const deliverables = [
  { icon: CircleDot, title: "Logo Design", desc: "Primary logo, variations, and icon mark in all formats (SVG, PNG, EPS)." },
  { icon: Type, title: "Typography System", desc: "Curated typeface pairing with a complete typographic scale." },
  { icon: Hash, title: "Color Palette", desc: "Primary, secondary, accent, and neutral palettes with accessibility ratios." },
  { icon: Feather, title: "Brand Guidelines", desc: "A comprehensive 60-page document covering every rule of your brand system." },
];

export default function BrandingServicePage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-24">
          <span className="text-sm text-secondary uppercase tracking-widest mb-4 block">Services / Branding</span>
          <h1 className="text-6xl md:text-9xl font-bold font-display mb-8 leading-none">BRAND <br /><span className="text-secondary">IDENTITY</span></h1>
          <p className="text-2xl text-muted-foreground max-w-2xl leading-relaxed">A brand is more than a logo — it&apos;s a feeling. We build brand systems that resonate deeply and scale globally.</p>
        </motion.div>

        <h2 className="text-4xl font-bold mb-12">WHAT YOU GET</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {deliverables.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-8 h-full hover:border-secondary/50 transition-colors">
                <d.icon className="w-10 h-10 text-secondary mb-6" />
                <h3 className="text-2xl font-bold mb-3">{d.title}</h3>
                <p className="text-muted-foreground">{d.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <Button>Build Your Brand</Button>
      </div>
    </main>
  );
}
