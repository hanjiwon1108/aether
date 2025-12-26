"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
          scrolled ? "bg-background/50 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
          <Link href="/" className="text-xl font-bold font-display tracking-wider">AETHER</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" className="px-6 py-2 text-sm">
            Let&apos;s Talk
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center md:hidden"
      >
        <button
          className="absolute top-6 right-6 text-foreground"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-bold font-display hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="mt-8" onClick={() => setMobileMenuOpen(false)}>
            Start Project
          </Button>
        </nav>
      </motion.div>
    </>
  );
}
