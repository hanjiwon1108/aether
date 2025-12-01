"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formState);
    alert("Message sent! (This is a demo)");
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              LAUNCH?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            Let's build something extraordinary together. Tell us about your project.
          </p>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
               <span className="text-xl">📧</span>
            </div>
             <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
               <span className="text-xl">🐦</span>
            </div>
             <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
               <span className="text-xl">💼</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              placeholder="john@example.com"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us about your vision..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </motion.form>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </section>
  );
}
