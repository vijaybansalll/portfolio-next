"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";
import { Para } from "./para";
import { AvatarGroup } from "./ui/avatar-group";
import { motion } from "motion/react";
import { Pointer } from "./ui/pointer";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  index: number;
  websiteURL: string;
  img: string;
  title: string;
  domain?: string;
  description: React.ReactNode;
  techStack: { icon: React.ReactNode; name: string }[];
}

export const ProjectCard = ({
  index,
  img,
  title,
  domain,
  description,
  techStack,
}: ProjectCardProps) => {
  return (
    <div>
      <Pointer className="fill-blue-500" title={title} />

      <motion.div
        className="h-full list-none"
        initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          delay: index * 0.1,
          duration: 0.3,
        }}
      >
        <div
          className={cn(
            "group relative h-full overflow-hidden rounded-xl border border-neutral-100 p-2 dark:border-neutral-900",
            "after:absolute after:inset-0 after:z-1 after:h-full after:w-full after:bg-[linear-gradient(0deg,#fff_40%,transparent)] dark:after:bg-[linear-gradient(0deg,#000_40%,transparent)]",
          )}
        >
          <Image
            src={img}
            alt={title}
            width={500}
            height={300}
            className={cn(
              "pointer-events-none absolute top-0 right-0 left-0 size-full scale-125 object-cover opacity-100 blur-[100px] brightness-600 saturate-150",
            )}
          />

          <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-md">
            <div className="relative z-2 flex flex-col gap-3">
              <div className="h-full max-h-37.5 w-full overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={1500}
                  className={cn(
                    "h-full w-full object-cover object-top transition-all duration-3000 ease-in-out",
                    "group-hover:object-bottom",
                  )}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-vj-primary dark:text-vj-primary-dark text-base leading-5 font-medium tracking-tight">
                    {domain} Platform
                  </h3>
                </div>
                <Para className="w-11/12 tracking-tight sm:w-full md:w-56">
                  {description}
                </Para>
                <AvatarGroup
                  className="mt-4 select-none"
                  avatarUrls={techStack}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
