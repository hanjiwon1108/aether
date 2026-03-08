"use client";
import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { Video, Calendar } from "lucide-react";

const webinars = [
  { title: "Designing Living Brands in 2026", date: "March 20, 2026", time: "2:00 PM EST", status: "Upcoming", host: "Elena Rostova" },
  { title: "WebGL for Non-Developers", date: "April 8, 2026", time: "11:00 AM EST", status: "Upcoming", host: "Marcus Chen" },
  { title: "AI-Assisted Brand Strategy", date: "Feb 14, 2026", time: "3:00 PM EST", status: "On Demand", host: "Sarah Jenkins" },
  { title: "Next.js for Agencies: Best Practices", date: "Jan 22, 2026", time: "1:00 PM EST", status: "On Demand", host: "David Alaba" },
];

export default function WebinarsPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">WEB<span className="text-secondary">INARS</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Learn directly from AETHER&apos;s experts. Join live or catch up on demand — always free.</p>
      </motion.div>
      <div className="space-y-6">
        {webinars.map((w, i) => (
          <motion.div key={w.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0"><Video className="w-7 h-7 text-secondary" /></div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{w.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{w.date} · {w.time}</span>
                  <span>Host: <span className="text-white/80">{w.host}</span></span>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className={`text-xs px-3 py-1 rounded-full border ${w.status === "Upcoming" ? "border-green-500/50 text-green-400" : "border-secondary/50 text-secondary"}`}>{w.status}</span>
                <Button variant="outline">{w.status === "Upcoming" ? "Register" : "Watch Now"}</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
