"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Button from "@/shared/ui/Button";
import { useEffect, useRef } from "react";

const textRevealItem = {
  hidden: { y: 100, opacity: 0, rotate: 10 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring" as const, damping: 12, stiffness: 100 },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden [perspective:1000px]"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          x: useTransform(springX, (v) => v * -0.05),
          y: useTransform(springY, (v) => v * -0.05),
          scale,
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-3000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen animate-float" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        {/* Floating Orbs */}
        <motion.div
          animate={{ y: [0, -50, 0], x: [0, 30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, -40, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        style={{ y, opacity }}
      >
        <motion.h1
          className="text-6xl md:text-9xl font-bold font-display tracking-tighter mb-6 overflow-hidden flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          <div className="overflow-hidden">
            <motion.span
              variants={textRevealItem}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 pb-2"
            >
              WE CRAFT
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              variants={textRevealItem}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient pb-4"
            >
              DIGITAL DREAMS
            </motion.span>
          </div>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          Elevating brands through futuristic design and deeply immersive
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button>Start Project</Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
