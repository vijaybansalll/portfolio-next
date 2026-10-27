"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  CSS,
  HTML5,
  JavaScript,
  ShadcnUI,
  TypeScript,
  Bootstrap,
  GitHubOG,
  ReactFull,
  NextjsFull,
  TailwindCSSFull,
} from "../icons";
import { Block } from "../block";
import SharpBox from "../sharpBox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Logo {
  name: string;
  id: number;
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
};

interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentTime: number;
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000;
    const columnDelay = index * 200;

    const adjustedTime =
      logos.length > 0
        ? (currentTime + columnDelay) % (cycleInterval * logos.length)
        : 0;

    const currentIndex =
      logos.length > 0 ? Math.floor(adjustedTime / cycleInterval) : 0;

    return (
      <motion.div
        className="relative h-5 w-full max-w-25 overflow-hidden md:h-7 md:max-w-27"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.01,
          duration: 0.1,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex % logos.length]?.id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(5px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                {React.createElement(logos[currentIndex % logos.length].img, {
                  className: "h-full w-full object-contain",
                })}
              </TooltipTrigger>

              <TooltipContent className="z-50">
                <p>{logos[currentIndex % logos.length].name}</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  },
);

LogoColumn.displayName = "LogoColumn";

function LogoCarousel({ columnCount = 5 }: { columnCount?: number }) {
  const [currentTime, setCurrentTime] = useState(0);

  const allLogos: Logo[] = useMemo(
    () => [
      { name: "HTML", id: 1, img: HTML5 },
      { name: "CSS", id: 2, img: CSS },
      { name: "JavaScript", id: 3, img: JavaScript },
      { name: "React.js", id: 4, img: ReactFull },
      { name: "TypeScript", id: 5, img: TypeScript },
      { name: "Bootstrap", id: 6, img: Bootstrap },
      { name: "Tailwind CSS", id: 7, img: TailwindCSSFull },
      { name: "Shadcn UI", id: 8, img: ShadcnUI },
      { name: "Next.js", id: 9, img: NextjsFull },
      { name: "GitHub", id: 10, img: GitHubOG },
    ],
    [],
  );

  const logoSets = useMemo(() => {
    return distributeLogos(allLogos, columnCount);
  }, [allLogos, columnCount]);

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  return (
    <Block>
      <SharpBox>
        {logoSets.map((logos, index) => (
          <LogoColumn
            key={index}
            logos={logos}
            index={index}
            currentTime={currentTime}
          />
        ))}
      </SharpBox>
    </Block>
  );
}

export { LogoCarousel };
export default LogoCarousel;
