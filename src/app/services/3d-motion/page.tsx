"use client";
import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { Box, Film, Sparkles, Zap } from "lucide-react";

const offerings = [
  { icon: Box, title: "3D Modeling & Visualization", desc: "Hyper-realistic product renders, architectural visualizations, and conceptual 3D worlds built in Blender and Cinema 4D." },
  { icon: Film, title: "Motion Graphics", desc: "Logo animations, explainer videos, broadcast packages, and social media content that demand attention." },
  { icon: Sparkles, title: "WebGL Experiences", desc: "Browser-based 3D that loads in seconds. Interactive product showcases, immersive landing pages, and data visualizations." },
  { icon: Zap, title: "Generative Art", desc: "Procedurally generated visuals and interactive installations that make your brand unforgettable." },
];

export default function MotionServicePage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-24">
          <span className="text-sm text-primary uppercase tracking-widest mb-4 block">Services / 3D & Motion</span>
          <h1 className="text-6xl md:text-9xl font-bold font-display mb-8 leading-none">3D & <br /><span className="text-primary">MOTION</span></h1>
          <p className="text-2xl text-muted-foreground max-w-2xl leading-relaxed">We transcend the static. From hyper-real 3D to mind-bending motion, we move audiences — literally.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {offerings.map((o, i) => (
            <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-8 h-full hover:border-primary/50 transition-colors">
                <o.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-3">{o.title}</h3>
                <p className="text-muted-foreground">{o.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <Button>Start a 3D Project</Button>
      </div>
    </main>
  );
}
