"use client";

import { motion } from "framer-motion";

const testimonials = [
  "Visionary Design",
  "Future Proof",
  "Digital Alchemy",
  "Beyond Boundaries",
  "Aether Aesthetic",
  "Next Gen",
  "Limitless",
];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16">
          {testimonials.concat(testimonials).map((text, index) => (
            <span
              key={index}
              className="text-8xl md:text-9xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/30 uppercase tracking-tighter"
            >
              {text}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16">
           {testimonials.concat(testimonials).map((text, index) => (
            <span
              key={index}
              className="text-8xl md:text-9xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/30 uppercase tracking-tighter"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
