"use client";
import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import { Shield, BarChart, Cog, Star } from "lucide-react";

const cookieTypes = [
  { icon: Shield, name: "Essential Cookies", description: "Required for core site functionality such as navigation, security, and accessibility. Cannot be disabled.", status: "Always Active" },
  { icon: BarChart, name: "Analytics Cookies", description: "Help us understand how visitors interact with our website, which pages are most popular, and where visitors come from.", status: "Optional" },
  { icon: Star, name: "Marketing Cookies", description: "Used to track visitors across websites and display relevant ads on third-party platforms (e.g., social media).", status: "Optional" },
  { icon: Cog, name: "Preference Cookies", description: "Remember your settings and preferences (e.g., language, theme) for a personalized experience on future visits.", status: "Optional" },
];

export default function CookiesPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16">
        <p className="text-sm text-accent mb-4">Last updated: March 4, 2026</p>
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-8">Cookie <span className="text-accent">Policy</span></h1>
        <p className="text-xl text-muted-foreground leading-relaxed">We use cookies to make your experience on our site as smooth as possible. Here&apos;s a transparent look at what we use and why.</p>
      </motion.div>
      <div className="space-y-6">
        {cookieTypes.map((cookie, i) => (
          <motion.div key={cookie.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="p-8 flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <cookie.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{cookie.name}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full border ${cookie.status === "Always Active" ? "border-green-500/50 text-green-400" : "border-white/20 text-muted-foreground"}`}>{cookie.status}</span>
                </div>
                <p className="text-muted-foreground">{cookie.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
