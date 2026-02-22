"use client";

import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import { Cloud, Database, Layout, Shield } from "lucide-react";

const partners = [
  { name: "Vercel", description: "Our preferred hosting and deployment network.", icon: Cloud },
  { name: "Supabase", description: "Scalable open-source backend for our robust apps.", icon: Database },
  { name: "Framer", description: "The physics engine behind our buttery animations.", icon: Layout },
  { name: "Cloudflare", description: "Ensuring our global experiences are fast and secure.", icon: Shield },
];

export default function PartnersPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">
          OUR <span className="text-primary">PARTNERS</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We collaborate with the world&apos;s best technology providers to deliver unmatched digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-10 flex flex-col md:flex-row items-center md:items-start gap-8 hover:border-primary/40 transition-colors text-center md:text-left">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <partner.icon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">{partner.name}</h3>
                <p className="text-muted-foreground text-lg">{partner.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
