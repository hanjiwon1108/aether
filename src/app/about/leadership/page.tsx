"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Card from "@/shared/ui/Card";
import { Linkedin, Twitter } from "lucide-react";

const leaders = [
  { name: "Elena Rostova", role: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2676&auto=format&fit=crop" },
  { name: "Marcus Chen", role: "Chief Creative Officer", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop" },
  { name: "Sarah Jenkins", role: "Head of Strategy", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop" },
  { name: "David Alaba", role: "Lead Technologist", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=2574&auto=format&fit=crop" },
];

export default function LeadershipPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">
          OUR <span className="text-secondary">LEADERSHIP</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The visionaries guiding AETHER towards the next frontier of digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaders.map((leader, index) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden group">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <Linkedin className="w-5 h-5 text-white hover:text-primary cursor-pointer" />
                    <Twitter className="w-5 h-5 text-white hover:text-primary cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center border-t border-white/10">
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-sm text-primary">{leader.role}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
