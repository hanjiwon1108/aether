"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-24 px-4 md:px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <div className="mb-12 md:mb-0">
            <h2 className="text-6xl md:text-8xl font-bold font-display leading-none mb-6">
              LET'S <br />
              COLLABORATE
            </h2>
            <Button variant="primary">Get in Touch</Button>
          </div>
          
          <div className="flex flex-col gap-4 text-lg text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Aether Agency. All rights reserved.</p>
          <p>Designed by Aether AI</p>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
    </footer>
  );
}
