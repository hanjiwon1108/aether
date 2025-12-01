"use client";

import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Digital Strategy",
    description: "Navigating the digital landscape with data-driven insights and futuristic vision.",
    icon: Rocket,
    className: "md:col-span-2",
  },
  {
    title: "UI/UX Design",
    description: "Crafting immersive interfaces that blend aesthetics with intuitive functionality.",
    icon: Palette,
    className: "md:col-span-1",
  },
  {
    title: "Development",
    description: "Building robust, scalable applications using cutting-edge technologies.",
    icon: Code2,
    className: "md:col-span-1",
  },
  {
    title: "Brand Identity",
    description: "Forging unique brand narratives that resonate in a crowded marketplace.",
    icon: Zap,
    className: "md:col-span-2",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Our Expertise</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We combine creativity and technology to deliver exceptional digital solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(service.className, "h-full")}
          >
            <Card className="h-full p-8 flex flex-col justify-between hover:border-primary/50 transition-colors duration-500">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
