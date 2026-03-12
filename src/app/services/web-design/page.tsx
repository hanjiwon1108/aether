"use client";
import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { Monitor, Layers, Cpu, Paintbrush, Code2 } from "lucide-react";

const process = [
  { step: "01", title: "Discovery", desc: "We study your users, market, and goals to establish a crystal-clear design brief." },
  { step: "02", title: "Wireframing", desc: "Information architecture and low-fidelity wireframes define the structural skeleton." },
  { step: "03", title: "Visual Design", desc: "High-fidelity screens with your brand system applied — every pixel intentional." },
  { step: "04", title: "Prototyping", desc: "Interactive Figma prototypes for real user testing before a single line of code is written." },
  { step: "05", title: "Handoff", desc: "Production-ready design tokens, specs, and assets handed to your dev team or ours." },
];

export default function WebDesignServicePage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-24">
          <span className="text-sm text-primary uppercase tracking-widest mb-4 block">Services / Web Design</span>
          <h1 className="text-6xl md:text-9xl font-bold font-display mb-8 leading-none">WEB <br /><span className="text-primary">DESIGN</span></h1>
          <p className="text-2xl text-muted-foreground max-w-2xl leading-relaxed">We craft interfaces that are achingly beautiful and intuitively usable. Design that doesn&apos;t just look good — it converts.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[{ icon: Monitor, label: "UI Design" }, { icon: Layers, label: "Design Systems" }, { icon: Paintbrush, label: "Visual Identity" }, { icon: Code2, label: "Frontend Dev" }].map(({icon: Icon, label}, i) => (
            <motion.div key={label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-6 text-center hover:border-primary/50 transition-colors">
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" /><p className="font-medium">{label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-12">OUR PROCESS</h2>
        <div className="space-y-4 mb-16">
          {process.map((p, i) => (
            <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-6 md:p-8 flex items-start gap-8 hover:bg-white/5 transition-colors">
                <span className="text-5xl font-black text-primary/20 shrink-0">{p.step}</span>
                <div><h3 className="text-xl font-bold mb-2">{p.title}</h3><p className="text-muted-foreground">{p.desc}</p></div>
              </Card>
            </motion.div>
          ))}
        </div>
        <Button>Start Your Project</Button>
      </div>
    </main>
  );
}
