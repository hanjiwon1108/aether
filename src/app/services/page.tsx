"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Code2, Palette, Rocket, Zap, Check } from "lucide-react";

const services = [
  {
    title: "Digital Strategy",
    description: "We analyze your market position and craft data-driven strategies to elevate your brand.",
    icon: Rocket,
    features: ["Market Analysis", "Brand Positioning", "Growth Hacking", "SEO Optimization"],
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning interfaces that captivate your audience.",
    icon: Palette,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "Development",
    description: "Robust and scalable code that powers your digital presence with speed and security.",
    icon: Code2,
    features: ["Web Applications", "Mobile Apps", "E-commerce", "API Integration"],
  },
  {
    title: "Brand Identity",
    description: "Forging a unique visual and verbal identity that resonates with your customers.",
    icon: Zap,
    features: ["Logo Design", "Typography", "Color Theory", "Brand Guidelines"],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">
          OUR <span className="text-primary">EXPERTISE</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your unique needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full p-10 hover:border-primary/50 transition-colors duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                <service.icon size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-foreground text-lg mb-8">{service.description}</p>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-primary">
                      <Check size={14} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
