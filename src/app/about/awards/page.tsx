"use client";

import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import { Trophy, Star, Award, Hexagon } from "lucide-react";

const awards = [
  { year: "2025", title: "Agency of the Year", org: "Awwwards", icon: Trophy },
  { year: "2025", title: "Best Creative Innovation", org: "Webby Awards", icon: Star },
  { year: "2024", title: "Site of the Month (Neon Horizon)", org: "FWA", icon: Award },
  { year: "2024", title: "Gold in Digital Craft", org: "Cannes Lions", icon: Hexagon },
  { year: "2023", title: "Best UI/UX Design", org: "CSS Design Awards", icon: Star },
  { year: "2023", title: "Rising Star Agency", org: "Ad Age", icon: Trophy },
];

export default function AwardsPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">
          AWARDS & <span className="text-accent">RECOGNITION</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We don&apos;t build for trophies, but we won&apos;t say no when the industry honors our craft.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-8 flex items-start gap-6 hover:bg-white/5 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                <award.icon className="w-8 h-8 text-accent" />
              </div>
              <div>
                <span className="text-sm border border-accent/30 text-accent px-2 py-1 rounded-full mb-3 inline-block">
                  {award.year}
                </span>
                <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">{award.title}</h3>
                <p className="text-muted-foreground">{award.org}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
