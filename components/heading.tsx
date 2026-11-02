"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export const headingVariants = cva(
  "text-vj-primary dark:text-vj-primary-dark tracking-tighter font-bold",
  {
    variants: {
      size: {
        default: "text-2xl md:text-4xl",
        sm: "text-lg md:text-xl",
        md: "text-xl md:text-2xl",
        lg: "text-2xl md:text-4xl",
        xl: "text-3xl md:text-5xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface HeadingProps
  extends Omit<HTMLMotionProps<"h1">, "children">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

export const Heading = ({
  children,
  className,
  size,
  as = "h1",
  initial = { opacity: 0, y: 20, filter: "blur(12px)" },
  whileInView = { opacity: 1, y: 0, filter: "blur(0px)" },
  transition = { duration: 0.3 },
  viewport = { once: true },
  ...props
}: HeadingProps) => {
  const Component = motion.create(as);

  return (
    <Component
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={cn(headingVariants({ size, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};
