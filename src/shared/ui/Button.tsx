"use client";

import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/shared/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ 
  children, 
  className, 
  variant = "primary", 
  ...props 
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative px-8 py-4 rounded-full font-medium text-lg uppercase tracking-wider overflow-hidden transition-colors",
        variants[variant],
        className
      )}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={{ x: xSpring, y: ySpring } as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      {...props}
    >

      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-white/20 blur-lg pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: hovered ? 1.5 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}

