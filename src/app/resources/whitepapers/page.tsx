"use client";
import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { Download, FileText } from "lucide-react";

const papers = [
  { title: "The Future of Immersive Web Experiences", desc: "A 24-page deep-dive into WebGL, spatial computing, and what comes after the screen.", tags: ["Design", "Technology"], pages: 24 },
  { title: "Neon Branding in the Age of AI", desc: "How brands can leverage generative AI while maintaining authentic visual identities.", tags: ["Branding", "AI"], pages: 18 },
  { title: "Performance-First Web Apps: A Blueprint", desc: "Engineering best practices for lightning-fast load times and maximum Core Web Vitals scores.", tags: ["Development"], pages: 32 },
  { title: "Digital Strategy for Next-Gen Brands", desc: "From go-to-market to global scale: a complete strategic framework for ambitious companies.", tags: ["Strategy"], pages: 41 },
];

export default function WhitepapersPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">WHITE<span className="text-primary">PAPERS</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Deep research and actionable insights from the AETHER team, freely shared with the world.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {papers.map((paper, i) => (
          <motion.div key={paper.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="p-8 flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><FileText className="w-6 h-6 text-primary" /></div>
                <div className="flex gap-2 flex-wrap">{paper.tags.map(t => <span key={t} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full">{t}</span>)}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 flex-grow">{paper.title}</h3>
              <p className="text-muted-foreground mb-6">{paper.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{paper.pages} pages · PDF</span>
                <Button variant="outline" className="flex items-center gap-2"><Download className="w-4 h-4" />Download</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
