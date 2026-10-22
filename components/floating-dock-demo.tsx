"use client";

import { useState } from "react";
import { FloatingDock, FloatingDockItem } from "@/components/ui/floating-dock";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  IconHome,
  IconBriefcase,
  IconUser,
  IconMail,
  IconArticle,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;

    // Always keep visible when near the top of the page
    if (current < 50) {
      setVisible(true);
    } else if (diff > 5) {
      // Scroll down -> hide
      setVisible(false);
    } else if (diff < -5) {
      // Scroll up -> show
      setVisible(true);
    }
  });

  const links: FloatingDockItem[] = [
    // 🔹 Pages links
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Blogs",
      icon: (
        <IconArticle className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/blog",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      href: "/contact",
    },

    {
      separator: true,
    },

    // 🔹 Dark-Light mode toggle at the end item
    {
      title: "Toggle Theme",
      icon: (
        <AnimatedThemeToggler
          className="flex h-full w-full cursor-pointer items-center justify-center rounded-full border-none p-0 text-inherit hover:bg-transparent focus:outline-none dark:hover:bg-transparent"
          iconClassName="h-full w-full text-neutral-600 dark:text-neutral-300"
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
