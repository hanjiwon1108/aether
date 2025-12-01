"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Neon Horizon",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Cyber Pulse",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Quantum Leap",
    category: "Digital Strategy",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Void Drifter",
    category: "Motion Design",
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop",
  },
];

export default function Showcase() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 md:gap-10 px-4 md:px-10">
          <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px]">
            <h2 className="text-5xl md:text-8xl font-bold font-display leading-tight">
              SELECTED <br />
              <span className="text-primary">WORKS</span>
            </h2>
          </div>
          {projects.map((project, index) => (
            <div key={index} className="relative h-[50vh] md:h-[60vh] w-[80vw] md:w-[40vw] min-w-[300px] md:min-w-[400px] rounded-2xl overflow-hidden group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary text-lg">{project.category}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
