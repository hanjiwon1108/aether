"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Neon Horizon",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    slug: "neon-horizon",
  },
  {
    title: "Cyber Pulse",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    slug: "cyber-pulse",
  },
  {
    title: "Quantum Leap",
    category: "Digital Strategy",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    slug: "quantum-leap",
  },
  {
    title: "Void Drifter",
    category: "Motion Design",
    image:
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop",
    slug: "void-drifter",
  },
];

export default function Showcase() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 100,
  });
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left z-50 shadow-[0_0_20px_rgba(var(--primary),0.8)]"
          style={{ scaleX: smoothProgress }}
        />

        <motion.div
          style={{ x }}
          className="flex gap-16 md:gap-24 px-10 md:px-32 items-center"
        >
          <div className="flex flex-col justify-center min-w-[300px] md:min-w-[500px]">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-9xl font-bold font-display leading-[1.1]"
            >
              SELECTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                WORKS
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-white/20 mt-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>

          {projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: -10,
                  rotateX: 10,
                  zIndex: 10,
                }}
                className="relative h-[60vh] md:h-[70vh] w-[85vw] md:w-[45vw] min-w-[320px] md:min-w-[500px] rounded-3xl overflow-hidden group shadow-2xl shadow-primary/10 border border-white/10 [perspective:1000px] flex-shrink-0 cursor-pointer block"
              >
                <Link href={`/work/${project.slug}`} className="block w-full h-full">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 45vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-500 flex flex-col justify-end p-10 md:p-14 pointer-events-none"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="translate-y-6 group-hover:translate-y-0 transition-all duration-500"
                    >
                      <p className="text-primary text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-md">
                        {project.category}
                      </p>
                      <h3 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg leading-tight">
                        {project.title}
                      </h3>
                    </motion.div>
                  </motion.div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
