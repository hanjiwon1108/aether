"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/features/ContactForm/ui/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -30 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
          className="perspective-1000"
        >
          <motion.h2
            className="text-6xl md:text-8xl font-black font-display mb-8"
            initial={{ filter: "blur(20px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            LET&apos;S <br />
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] inline-block"
            >
              LAUNCH?
            </motion.span>
          </motion.h2>
          <p className="text-2xl text-muted-foreground mb-12 max-w-md leading-relaxed">
            Let&apos;s build something extraordinary together. Tell us about
            your futuristic vision.
          </p>

          <div className="flex gap-6">
            <motion.div
              whileHover={{ y: -10, rotate: -10, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer shadow-lg hover:shadow-primary/50"
            >
              <span className="text-2xl">📧</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -10, rotate: 10, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer shadow-lg hover:shadow-primary/50"
            >
              <span className="text-2xl">🐦</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -10, rotate: -10, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer shadow-lg hover:shadow-primary/50"
            >
              <span className="text-2xl">💼</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: 30 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen"
      />
    </section>
  );
}
