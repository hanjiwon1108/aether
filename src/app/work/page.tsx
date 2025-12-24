"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["All", "Branding", "Web Design", "Development", "Motion"];

const projects = [
  {
    title: "Neon Horizon",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Cyber Pulse",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Quantum Leap",
    category: "Development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Void Drifter",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop",
  },
  {
    title: "Aether Lens",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    title: "Data Flow",
    category: "Development",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop",
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">
          SELECTED <span className="text-secondary">WORK</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-muted-foreground border-white/10 hover:border-white/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            layout
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-3xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>
              <p className="text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
