"use client";
import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { Bot, BrainCircuit, MessageSquare, Wand2 } from "lucide-react";

const capabilities = [
  { icon: Bot, title: "AI-Powered Chatbots", desc: "Custom LLM-backed chatbots trained on your brand voice and product catalog." },
  { icon: Wand2, title: "Generative Content", desc: "Pipelines for AI-assisted copywriting, image generation, and A/B testing at scale." },
  { icon: BrainCircuit, title: "Machine Learning Models", desc: "Custom ML models for recommendation engines, churn prediction, and pricing optimization." },
  { icon: MessageSquare, title: "AI Design Tools", desc: "Integrate AI into your design workflow for layout automation, image upscaling, and brand QA." },
];

export default function AIServicePage() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-24">
          <span className="text-sm text-secondary uppercase tracking-widest mb-4 block">Services / AI Integration</span>
          <h1 className="text-6xl md:text-9xl font-bold font-display mb-8 leading-none">AI <br /><span className="text-secondary">INTEGRATION</span></h1>
          <p className="text-2xl text-muted-foreground max-w-2xl leading-relaxed">We help you harness the power of AI without losing the human touch that makes your brand special.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {capabilities.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-8 h-full hover:border-secondary/50 transition-colors">
                <c.icon className="w-10 h-10 text-secondary mb-6" />
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-muted-foreground">{c.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <Button>Explore AI Solutions</Button>
      </div>
    </main>
  );
}
