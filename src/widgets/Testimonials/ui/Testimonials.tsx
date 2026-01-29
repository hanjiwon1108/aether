"use client";

import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";

const testimonials = [
  {
    quote: "Working with this team was an absolute pleasure. Their attention to detail and innovative approach transformed our vision into a stunning reality. Highly recommend!",
    author: "Sarah Chen",
    role: "CEO, TechSolutions Inc.",
  },
  {
    quote: "The design quality exceeded our expectations. They truly understood our brand and delivered a product that not only looks great but also performs flawlessly.",
    author: "David Lee",
    role: "Marketing Director, GlobalCorp",
  },
  {
    quote: "Professional, responsive, and incredibly talented. They made the complex process feel simple and delivered ahead of schedule. A top-tier experience!",
    author: "Emily White",
    role: "Founder, Creative Hub",
  },
  {
    quote: "Their strategic insights were invaluable. They didn't just build a website; they crafted a digital experience that has significantly boosted our engagement.",
    author: "Michael Brown",
    role: "Product Manager, InnovateX",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">What Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from the brands we&apos;ve helped elevate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div>
                  <p className="text-lg italic mb-6 text-muted-foreground whitespace-pre-line leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

