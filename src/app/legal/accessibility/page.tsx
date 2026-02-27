"use client";
import { motion } from "framer-motion";
import { Eye, Keyboard, Volume2, MousePointer } from "lucide-react";
import Card from "@/shared/ui/Card";

const features = [
  { icon: Eye, title: "Visual Accessibility", desc: "High contrast ratios, scalable text, and support for system font-size preferences for users with visual impairments." },
  { icon: Keyboard, title: "Keyboard Navigation", desc: "All interactive elements are fully accessible via keyboard. Focus indicators are visible and follow a logical order." },
  { icon: Volume2, title: "Screen Reader Support", desc: "We use semantic HTML, ARIA labels, and descriptive alt text to ensure compatibility with screen readers." },
  { icon: MousePointer, title: "Reduced Motion", desc: "We respect the `prefers-reduced-motion` media query. Users can disable animations via their system settings." },
];

export default function AccessibilityPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-8">Accessibility <span className="text-primary">Statement</span></h1>
        <p className="text-xl text-muted-foreground leading-relaxed">AETHER is committed to providing an inclusive digital experience for everyone. We strive for WCAG 2.1 AA compliance across all our digital properties.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Feedback & Reporting</h2>
        <p className="text-muted-foreground">We welcome your feedback on the accessibility of our site. If you encounter any barriers, please contact us at <a href="mailto:accessibility@aether.agency" className="text-primary hover:underline">accessibility@aether.agency</a>. We aim to respond within 5 business days.</p>
      </motion.div>
    </main>
  );
}
