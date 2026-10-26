"use client";
import React from "react";
import { motion } from "motion/react";
import { TESTIMONIAL_PROPS } from "@/types/types";

export const Testimonials = (props: {
  className?: string;
  testimonials: TESTIMONIAL_PROPS[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div
                  className="w-full max-w-xs rounded-lg border px-2 py-4 shadow-sm shadow-black/10 drop-shadow-lg md:rounded-xl dark:bg-neutral-950 dark:shadow-sm dark:shadow-white/10"
                  key={i}
                >
                  <div className="text-vj-secondary dark:text-vj-secondary-dark text-sm leading-normal font-normal">
                    {text}
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <div className="text-vj-primary dark:text-vj-primary-dark flex size-9 items-center justify-center rounded-full bg-neutral-900/10 text-sm leading-5 font-medium tracking-tight dark:bg-neutral-100/10">
                      {name.slice(0, 1).toUpperCase()}
                    </div>

                    <div className="flex flex-col">
                      <div className="text-vj-primary dark:text-vj-primary-dark text-sm leading-5 font-medium tracking-tight">
                        {name}
                      </div>
                      <div className="text-vj-secondary dark:text-vj-secondary-dark text-xs tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
