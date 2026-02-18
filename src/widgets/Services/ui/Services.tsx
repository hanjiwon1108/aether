"use client";

import Card from "@/shared/ui/Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Palette, Rocket, Zap } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { useRef } from "react";

const services = [
  {
    title: "Digital Strategy",
    description:
      "Navigating the digital landscape with data-driven insights and futuristic vision.",
    icon: Rocket,
    className: "md:col-span-2",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting immersive interfaces that blend aesthetics with intuitive functionality.",
    icon: Palette,
    className: "md:col-span-1",
  },
  {
    title: "Development",
    description:
      "Building robust, scalable applications using cutting-edge technologies.",
    icon: Code2,
    className: "md:col-span-1",
  },
  {
    title: "Brand Identity",
    description:
      "Forging unique brand narratives that resonate in a crowded marketplace.",
    icon: Zap,
    className: "md:col-span-2",
  },
];

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={ref}
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative perspective-1000 overflow-visible"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black font-display mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary animate-gradient bg-[length:200%_auto]">
          Our Expertise
        </h2>
        <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg">
          We combine unstoppable creativity and raw technology to deliver
          exceptional digital masterpieces.
        </p>
      </motion.div>

      <motion.div
        style={{ y }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr perspective-1000"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, rotateY: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
            whileHover={{ scale: 1.05, zIndex: 10, rotateX: 5, rotateY: -5 }}
            className={cn(service.className, "h-full")}
          >
            <Card className="p-10 flex flex-col justify-between hover:border-primary/80 transition-all duration-300 shadow-xl shadow-black/50 group bg-gradient-to-br from-white/5 to-white/0 overflow-hidden">
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-500 shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                >
                  <service.icon size={32} />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Background abstract element */}
              <motion.div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
