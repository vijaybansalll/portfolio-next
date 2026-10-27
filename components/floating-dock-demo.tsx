"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  IconHome,
  IconBriefcase,
  IconUser,
  IconMail,
  IconArticle,
} from "@tabler/icons-react";
import { FloatingDock, FloatingDockItem } from "@/components/ui/floating-dock";

export default function FloatingDockDemo() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;

    if (current < 50) {
      setVisible(true);
    } else if (diff > 5) {
      setVisible(false);
    } else if (diff < -5) {
      setVisible(true);
    }
  });

  const links: FloatingDockItem[] = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-900 dark:text-neutral-100" />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-900 dark:text-neutral-100" />
      ),
      href: "/projects",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-900 dark:text-neutral-100" />
      ),
      href: "/about",
    },
    {
      title: "Blogs",
      icon: (
        <IconArticle className="h-full w-full text-neutral-900 dark:text-neutral-100" />
      ),
      href: "/blog",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-900 dark:text-neutral-100" />
      ),
      href: "/contact",
    },

    {
      separator: true,
    },

    {
      title: "Toggle Theme",
      icon: (
        <AnimatedThemeToggler
          className="flex h-full w-full cursor-pointer items-center justify-center rounded-full border-none p-0 text-inherit hover:bg-transparent focus:outline-none dark:hover:bg-transparent"
          iconClassName="h-full w-full text-neutral-900 dark:text-neutral-100"
        />
      ),
    },
  ];

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: visible ? 0 : 120,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="fixed inset-x-0 bottom-6 z-80 mx-auto flex w-fit items-center justify-center"
      style={{
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <FloatingDock items={links} />
    </motion.div>
  );
}
