"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { AvatarGroup, type Avatar } from "@/components/ui/avatar-group";
import {
  HTML5,
  CSS,
  JavaScript,
  TypeScript,
  React as ReactIcon,
  Nextjs,
  TailwindCSS,
  ShadcnUI,
} from "@/components/icons";
import { SiFramer, SiGit, SiGithub } from "react-icons/si";
import { Code2 } from "lucide-react";

export interface FlipItem {
  text: string;
  avatars?: Avatar[];
}

export type LayoutTextFlipWord = string | FlipItem;

export interface LayoutTextFlipProps {
  words?: LayoutTextFlipWord[];
  items?: FlipItem[];
  duration?: number;
  className?: string;
  bare?: boolean;
}

const INDIVIDUAL_SKILL_ICONS: Record<string, Avatar> = {
  html: { name: "HTML5", icon: <HTML5 className="size-4 shrink-0" /> },
  html5: { name: "HTML5", icon: <HTML5 className="size-4 shrink-0" /> },
  css: { name: "CSS3", icon: <CSS className="size-4 shrink-0" /> },
  css3: { name: "CSS3", icon: <CSS className="size-4 shrink-0" /> },
  js: {
    name: "JavaScript",
    icon: <JavaScript className="size-4 shrink-0 rounded-[2px]" />,
  },
  javascript: {
    name: "JavaScript",
    icon: <JavaScript className="size-4 shrink-0 rounded-[2px]" />,
  },
  ts: {
    name: "TypeScript",
    icon: <TypeScript className="size-4 shrink-0 rounded-[2px]" />,
  },
  typescript: {
    name: "TypeScript",
    icon: <TypeScript className="size-4 shrink-0 rounded-[2px]" />,
  },
  react: {
    name: "React",
    icon: <ReactIcon className="size-4 shrink-0 text-[#61DAFB]" />,
  },
  reactjs: {
    name: "React",
    icon: <ReactIcon className="size-4 shrink-0 text-[#61DAFB]" />,
  },
  next: {
    name: "Next.js",
    icon: <Nextjs className="size-4 shrink-0 dark:invert" />,
  },
  nextjs: {
    name: "Next.js",
    icon: <Nextjs className="size-4 shrink-0 dark:invert" />,
  },
  "next.js": {
    name: "Next.js",
    icon: <Nextjs className="size-4 shrink-0 dark:invert" />,
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: <TailwindCSS className="size-4 shrink-0 text-[#38bdf8]" />,
  },
  "tailwind css": {
    name: "Tailwind CSS",
    icon: <TailwindCSS className="size-4 shrink-0 text-[#38bdf8]" />,
  },
  shadcn: {
    name: "Shadcn UI",
    icon: <ShadcnUI className="size-4 shrink-0 text-black dark:text-white" />,
  },
  "shadcn ui": {
    name: "Shadcn UI",
    icon: <ShadcnUI className="size-4 shrink-0 text-black dark:text-white" />,
  },
  framer: {
    name: "Framer Motion",
    icon: <SiFramer className="size-4 shrink-0 text-black dark:text-white" />,
  },
  "framer motion": {
    name: "Framer Motion",
    icon: <SiFramer className="size-4 shrink-0 text-black dark:text-white" />,
  },
  git: {
    name: "Git",
    icon: <SiGit className="size-4 shrink-0 text-[#F05032]" />,
  },
  github: {
    name: "GitHub",
    icon: <SiGithub className="size-4 shrink-0 text-black dark:text-white" />,
  },
  "front-end developer": {
    name: "Frontend",
    icon: <Code2 className="size-4 shrink-0 text-blue-500" />,
  },
  "frontend developer": {
    name: "Frontend",
    icon: <Code2 className="size-4 shrink-0 text-blue-500" />,
  },
};

export const DEFAULT_SKILL_MAP: Record<string, Avatar[]> = {
  "Front-end Developer": [
    {
      name: "Frontend",
      icon: <Code2 className="size-4 shrink-0 text-blue-500" />,
    },
  ],
  "HTML, CSS, JS, TS": [
    { name: "HTML5", icon: <HTML5 className="size-4 shrink-0" /> },
    { name: "CSS3", icon: <CSS className="size-4 shrink-0" /> },
    {
      name: "JavaScript",
      icon: <JavaScript className="size-4 shrink-0 rounded-[2px]" />,
    },
    {
      name: "TypeScript",
      icon: <TypeScript className="size-4 shrink-0 rounded-[2px]" />,
    },
  ],
  "ReactJS, NextJS": [
    {
      name: "React",
      icon: <ReactIcon className="size-4 shrink-0 text-[#61DAFB]" />,
    },
    {
      name: "Next.js",
      icon: <Nextjs className="size-4 shrink-0 dark:invert" />,
    },
  ],
  "Tailwind CSS, Shadcn UI": [
    {
      name: "Tailwind CSS",
      icon: <TailwindCSS className="size-4 shrink-0 text-[#38bdf8]" />,
    },
    {
      name: "Shadcn UI",
      icon: <ShadcnUI className="size-4 shrink-0 text-black dark:text-white" />,
    },
  ],
  "Framer Motion": [
    {
      name: "Framer Motion",
      icon: <SiFramer className="size-4 shrink-0 text-black dark:text-white" />,
    },
  ],
  "Git/Github": [
    {
      name: "Git",
      icon: <SiGit className="size-4 shrink-0 text-[#F05032]" />,
    },
    {
      name: "GitHub",
      icon: <SiGithub className="size-4 shrink-0 text-black dark:text-white" />,
    },
  ],
};

function resolveSkillAvatars(text: string): Avatar[] {
  if (DEFAULT_SKILL_MAP[text]) {
    return DEFAULT_SKILL_MAP[text];
  }

  // Attempt splitting by comma or slash for compound skills (e.g. "HTML, CSS", "Git/Github")
  const parts = text
    .split(/[,/]+/)
    .map((p) => p.trim())
    .filter(Boolean);
  const resolved: Avatar[] = [];

  for (const part of parts) {
    const key = part.toLowerCase();
    if (INDIVIDUAL_SKILL_ICONS[key]) {
      resolved.push(INDIVIDUAL_SKILL_ICONS[key]);
    }
  }

  return resolved;
}

export const LayoutTextFlip = ({
  words = [""],
  items,
  duration = 3000,
  className,
  bare = true,
}: LayoutTextFlipProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const rawList = items && items.length > 0 ? items : words;

  const normalizedItems: FlipItem[] = rawList.map((entry) => {
    if (typeof entry === "string") {
      return {
        text: entry,
        avatars: resolveSkillAvatars(entry),
      };
    }
    return {
      text: entry.text,
      avatars: entry.avatars ?? resolveSkillAvatars(entry.text),
    };
  });

  useEffect(() => {
    if (normalizedItems.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % normalizedItems.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, normalizedItems.length, isPaused]);

  const currentItem = normalizedItems[currentIndex] || {
    text: "",
    avatars: [],
  };

  return (
    <motion.span
      layout
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={cn(
        "relative w-fit overflow-hidden rounded-sm bg-blue-100 px-2 py-1 text-sm backdrop-blur-sm md:bg-white/70 dark:bg-neutral-100/10",
        className,
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={currentIndex}
          initial={{ y: -40, filter: "blur(20px)", opacity: 0 }}
          animate={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          exit={{ y: 50, filter: "blur(20px)", opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="inline-flex items-center gap-2 whitespace-nowrap"
        >
          {currentItem.avatars && currentItem.avatars.length > 0 && (
            <AvatarGroup
              avatarUrls={currentItem.avatars}
              showNameOnHover={false}
              bare={bare}
            />
          )}
          <span className="font-medium text-neutral-800 dark:text-neutral-200">
            {currentItem.text}
          </span>
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};
