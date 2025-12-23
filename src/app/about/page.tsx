"use client";

import { motion } from "framer-motion";
import Contact from "@/components/sections/Contact";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-32">
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-bold font-display mb-8">
              WHO <span className="text-accent">WE ARE</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Aether is not just an agency; it&apos;s a collective of visionaries, dreamers, and doers. We believe that the future belongs to those who dare to imagine it.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2024, we bridge the gap between art and technology, creating digital experiences that are not only functional but emotionally resonant.
            </p>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
             <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Team"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-white/5 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">THE TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
               <div key={i} className="group">
                 <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
                   <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder */}
                 </div>
                 <h3 className="text-2xl font-bold">Member Name</h3>
                 <p className="text-primary">Position</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
