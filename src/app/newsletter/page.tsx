"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/shared/ui/Button";
import { Mail, Check } from "lucide-react";

export default function NewsletterPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 flex items-center justify-center min-h-screen">
      <div className="text-center max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10"
        >
          <Mail className="w-12 h-12 text-primary" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
            STAY IN THE <span className="text-primary">LOOP</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join 8,000+ creative leaders who get our bi-weekly transmissions. No spam, no noise. Just pure signal on design, tech, and culture.
          </p>
        </motion.div>

        {!submitted ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-grow bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 text-lg"
            />
            <Button onClick={() => setSubmitted(true)} className="px-8 py-4 text-lg whitespace-nowrap">Subscribe</Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring" }}
            className="flex items-center justify-center gap-4 text-xl font-semibold text-green-400">
            <Check className="w-8 h-8" />You&apos;re in! Welcome to the crew.
          </motion.div>
        )}

        <p className="text-muted-foreground text-sm mt-6">We send 2 issues per month. Unsubscribe anytime.</p>
      </div>
    </main>
  );
}
