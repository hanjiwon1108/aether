"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/features/ContactForm/ui/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
            LET&apos;S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              LAUNCH?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            Let&apos;s build something extraordinary together. Tell us about
            your project.
          </p>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <span className="text-xl">📧</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <span className="text-xl">🐦</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <span className="text-xl">💼</span>
            </div>
          </div>
        </motion.div>

        <ContactForm />
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </section>
  );
}
