"use client";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { Block } from "../block";

export function CallToAction() {
  return (
    <Block>
      <div className="dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] relative my-8 flex flex-col justify-between gap-y-4 border-y bg-neutral-50 px-4 py-8 dark:bg-transparent">
        <DecorIcon className="size-4" position="top-left" />
        <DecorIcon className="size-4" position="top-right" />
        <DecorIcon className="size-4" position="bottom-left" />
        <DecorIcon className="size-4" position="bottom-right" />

        <div className="pointer-events-none absolute -inset-y-6 -left-px w-px border-l" />
        <div className="pointer-events-none absolute -inset-y-6 -right-px w-px border-r" />

        <div className="absolute top-0 left-1/2 -z-10 h-full border-l border-dashed" />

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="text-vj-primary dark:text-vj-primary-dark mb-2 text-lg font-medium md:text-xl"
            >
              Let&apos;s Build Something Exceptional
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="text-vj-secondary dark:text-vj-secondary-dark text-sm"
            >
              I&apos;m always open to working on meaningful products and
              collaborating with teams that value clean architecture and refined
              user experiences. If you&apos;re building something impactful,
              I&apos;d love to contribute.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
          >
            <Button>
              <Link href="/contact" className="flex items-center gap-2">
                Start a Conversation <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </Block>
  );
}

export const DecorIconVariants = cva(
  "pointer-events-none absolute z-1 size-5 shrink-0 stroke-1 stroke-muted-foreground",
  {
    variants: {
      position: {
        "top-left":
          "top-0 left-0 -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+0.5px)]",
        "top-right":
          "top-0 right-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+0.5px)]",
        "bottom-right":
          "right-0 bottom-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]",
        "bottom-left":
          "bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]",
      },
    },
    defaultVariants: {
      position: "top-left",
    },
  },
);

type DecorIconProps = React.ComponentProps<"svg"> &
  VariantProps<typeof DecorIconVariants>;

export function DecorIcon({ position, className, ...props }: DecorIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn(DecorIconVariants({ position, className }))}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
