"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const faqs = [
  { q: "How does a typical project start?", a: "All projects begin with a discovery call where we learn about your brand, goals, and target audience. From there, we craft a detailed proposal with timeline and pricing tailored to your vision." },
  { q: "What is your average project turnaround time?", a: "Timelines depend on scope. Branding projects typically take 4–8 weeks. Web design and development projects range from 8–20 weeks. We always establish clear milestones upfront." },
  { q: "Do you work with international clients?", a: "Absolutely. We work with clients across North America, Europe, Asia, and beyond. Our remote-first model ensures seamless collaboration across all time zones." },
  { q: "What is your payment structure?", a: "We require a 50% deposit to begin. The remaining 50% is due upon final delivery. For larger retainer engagements, we offer monthly billing." },
  { q: "Can you help with ongoing maintenance after launch?", a: "Yes, we offer flexible retainer packages for ongoing design, development, and strategy support post-launch." },
  { q: "What industries do you work with?", a: "We work with forward-thinking brands across tech, fashion, music, luxury, SaaS, finance, and entertainment. If you have an interesting vision, we want to hear it." },
  { q: "Do you offer NDAs?", a: "Yes, we are happy to sign a mutual NDA before any sensitive information is shared. Client confidentiality is a cornerstone of how we operate." },
];

function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
        <span className="font-semibold text-lg">{item.q}</span>
        <ChevronDown className={cn("w-5 h-5 text-primary shrink-0 transition-transform duration-300", open ? "rotate-180" : "")} />
      </button>
      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="px-6 pb-6 text-muted-foreground leading-relaxed">
          {item.a}
        </motion.div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">HAVE <span className="text-accent">QUESTIONS?</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We&apos;ve compiled answers to the most common questions about working with AETHER.</p>
      </motion.div>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <FAQItem item={faq} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
