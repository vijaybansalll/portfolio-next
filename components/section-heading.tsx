"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { DecorIcon } from "./sharp-box";

export const SectionHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative w-fit max-w-lg bg-neutral-800 px-2 py-1 text-sm leading-none font-normal text-neutral-100 md:text-sm dark:bg-neutral-100 dark:text-neutral-900",
        className,
      )}
    >
      <DecorIcon
        className="m-0 size-3 stroke-neutral-900 dark:stroke-neutral-100"
        position="top-left"
      />
      <DecorIcon
        className="m-0 size-3 stroke-neutral-900 dark:stroke-neutral-100"
        position="top-right"
      />
      <DecorIcon
        className="m-0 size-3 stroke-neutral-900 dark:stroke-neutral-100"
        position="bottom-left"
      />
      <DecorIcon
        className="m-0 size-3 stroke-neutral-900 dark:stroke-neutral-100"
        position="bottom-right"
      />
      {children}
    </motion.h2>
  );
};
