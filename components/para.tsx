"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export const paraVariants = cva(
  "text-vj-secondary dark:text-vj-secondary-dark",
  {
    variants: {
      variant: {
        default: "text-sm",
        muted: "text-xs text-neutral-500 dark:text-neutral-400",
        lead: "text-base md:text-lg text-neutral-700 dark:text-neutral-300",
        small: "text-xs",
        large: "text-base md:text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ParaProps
  extends Omit<HTMLMotionProps<"p">, "children">,
    VariantProps<typeof paraVariants> {
  children: React.ReactNode;
}

export const Para = ({
  children,
  className,
  variant,
  initial = { opacity: 0, y: 20, filter: "blur(12px)" },
  whileInView = { opacity: 1, y: 0, filter: "blur(0px)" },
  transition = { duration: 0.3 },
  viewport = { once: true },
  ...props
}: ParaProps) => {
  return (
    <motion.p
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={cn(paraVariants({ variant, className }))}
      {...props}
    >
      {children}
    </motion.p>
  );
};
