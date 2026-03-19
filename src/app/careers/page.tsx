"use client";

import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Button from "@/shared/ui/Button";
import { Brain, Coffee, Globe, Zap, ArrowRight } from "lucide-react";

const perks = [
  { icon: Globe, title: "Work Anywhere", desc: "Remote-first culture across all times zones." },
  { icon: Zap, title: "Latest Tech", desc: "Top-tier hardware and software budgets." },
  { icon: Brain, title: "Mental Wellness", desc: "Access to therapy and unlimited PTO." },
  { icon: Coffee, title: "Annual Retreats", desc: "Yearly meetups in iconic global locations." }
];

const jobs = [
  { title: "Senior UI/UX Designer", dept: "Design", type: "Full-time", location: "Remote" },
  { title: "Creative Developer (WebGL)", dept: "Engineering", type: "Full-time", location: "Remote" },
  { title: "Digital Strategist", dept: "Strategy", type: "Contract", location: "New York / Remote" },
  { title: "Motion Designer", dept: "Design", type: "Full-time", location: "Remote" }
];

export default function CareersPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">
          JOIN <span className="text-secondary">THE MISSION</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We are constantly looking for visionaries to help us shape the future of digital experiences.
        </p>
      </motion.div>

      <section className="mb-32">
        <h2 className="text-4xl font-bold mb-12 text-center">WHY AETHER?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 h-full text-center hover:border-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6">
                  <perk.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                <p className="text-muted-foreground text-sm">{perk.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-12 text-center">OPEN POSITIONS</h2>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="text-primary/80">{job.dept}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <a href={`mailto:careers@aether.com?subject=Application for ${job.title}`}>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-black group-hover:border-primary pointer-events-none">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
