"use client";
import { motion } from "framer-motion";
import Button from "@/shared/ui/Button";
import Card from "@/shared/ui/Card";
import { MessageCircle, Mail, BookOpen, Phone } from "lucide-react";

const channels = [
  { icon: MessageCircle, title: "Live Chat", desc: "Chat with our team directly. Available Mon–Fri, 9am–6pm EST.", action: "Start Chat" },
  { icon: Mail, title: "Email Support", desc: "Send us an email and we'll respond within one business day.", action: "Send Email" },
  { icon: BookOpen, title: "Knowledge Base", desc: "Browse our guides, tutorials, and documentation anytime.", action: "Explore Docs" },
  { icon: Phone, title: "Phone", desc: "For urgent matters, reach us at +1 (800) 555-0199.", action: "Call Now" },
];

export default function SupportPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">HELP <span className="text-primary">CENTER</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We&apos;re here to support you every step of the way. Choose the channel that works best for you.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {channels.map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="p-8 flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><c.icon className="w-7 h-7 text-primary" /></div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow">{c.desc}</p>
              <Button variant="outline">{c.action}</Button>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-white/5 rounded-2xl p-10 text-center border border-white/10">
        <h2 className="text-3xl font-bold mb-4">Submit a Support Ticket</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Describe your issue and we&apos;ll route it to the right team. Typical response time: within 4 business hours.</p>
        <div className="space-y-4 max-w-xl mx-auto text-left">
          <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60" placeholder="Your name" />
          <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60" placeholder="Your email" type="email" />
          <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 resize-none" placeholder="Describe your issue..." />
          <Button className="w-full">Submit Ticket</Button>
        </div>
      </motion.div>
    </main>
  );
}
