"use client";

import Button from "@/shared/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <footer
      ref={ref}
      className="relative py-32 px-4 md:px-8 bg-black overflow-hidden mt-20"
    >
      <motion.div
        style={{ scale, y, opacity }}
        className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center text-center"
      >
        <motion.h2 className="text-[10vw] font-black font-display leading-[0.85] mb-12 tracking-tighter">
          LET&apos;S <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-primary to-white">
            COLLABORATE
          </span>
        </motion.h2>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mb-24"
        >
          <Link href="/contact" className="block text-center">
            <Button
              variant="primary"
              className="text-2xl px-12 py-6 rounded-full shadow-[0_0_40px_rgba(var(--primary),0.5)]"
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8 border-t border-white/10 pt-12 text-muted-foreground text-lg">
          <div className="flex gap-8">
            <motion.a
              whileHover={{ y: -5, color: "white" }}
              href="#"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: "white" }}
              href="#"
              className="hover:text-primary transition-colors"
            >
              Twitter
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: "white" }}
              href="#"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </motion.a>
          </div>
          <p className="text-sm">
            &copy; 2024 Aether Agency. All rights reserved.
          </p>
          <div className="relative group cursor-pointer">
            <p className="text-sm">
              Designed by{" "}
              <span className="text-white font-bold group-hover:text-primary transition-colors">
                Aether AI
              </span>
            </p>
            <motion.div className="h-px bg-primary w-0 group-hover:w-full transition-all duration-300" />
          </div>
        </div>
      </motion.div>

      {/* Background Glow */}
      <motion.div
        style={{ opacity: scrollYProgress }}
        className="absolute bottom-0 left-0 w-full h-[800px] bg-gradient-to-t from-primary/20 via-primary/5 to-transparent pointer-events-none mix-blend-screen"
      />
    </footer>
  );
}
