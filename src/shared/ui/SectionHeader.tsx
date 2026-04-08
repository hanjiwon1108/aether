"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/shared/lib/utils";

interface SectionHeaderProps extends HTMLMotionProps<"div"> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  ...props
}: SectionHeaderProps) {
  // Default animation props, which can be overridden by passed props
  const defaultAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const animationProps = Object.keys(props).some(key => ['initial', 'whileInView', 'animate'].includes(key)) 
    ? props 
    : { ...defaultAnimation, ...props };

  return (
    <motion.div
      className={cn("mb-16 text-center", className)}
      {...animationProps}
    >
      <h2
        className={cn(
          "text-4xl md:text-5xl font-bold font-display mb-4",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground text-lg max-w-2xl mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}