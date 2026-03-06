"use client";
import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { Download, Newspaper, Quote } from "lucide-react";

const pressItems = [
  { pub: "TechCrunch", date: "Feb 2026", headline: "AETHER is Redefining What a Creative Agency Can Be" },
  { pub: "Fast Company", date: "Jan 2026", headline: "The 10 Most Innovative Design Agencies of 2026" },
  { pub: "Wired", date: "Dec 2025", headline: "How AETHER Uses AI Without Losing Its Soul" },
];

export default function PressPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">PRESS <span className="text-accent">KIT</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Resources and coverage for journalists, media, and partners writing about AETHER.</p>
      </motion.div>
      
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10">IN THE NEWS</h2>
        <div className="space-y-5">
          {pressItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-6 md:p-8 flex items-center gap-6 hover:bg-white/5 transition-colors group">
                <Quote className="w-8 h-8 text-accent shrink-0" />
                <div className="flex-grow">
                  <span className="text-sm text-accent font-bold">{item.pub} · {item.date}</span>
                  <p className="text-lg font-semibold mt-1 group-hover:text-white transition-colors">&ldquo;{item.headline}&rdquo;</p>
                </div>
                <Newspaper className="w-5 h-5 text-muted-foreground shrink-0" />
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-10">PRESS ASSETS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Logo Pack (SVG/PNG)", "Brand Guidelines PDF", "Executive Headshots"].map((asset, i) => (
            <motion.div key={asset} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-6 flex items-center justify-between hover:border-accent/40 transition-colors">
                <span>{asset}</span>
                <Button variant="outline" className="flex items-center gap-2 shrink-0"><Download className="w-4 h-4" /></Button>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 text-sm">Press inquiries: <a href="mailto:press@aether.agency" className="text-accent hover:underline">press@aether.agency</a></p>
      </section>
    </main>
  );
}
