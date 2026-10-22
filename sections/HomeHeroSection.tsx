import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { NavbarLogo } from "@/components/ui/resizable-navbar";
import { LinksProps } from "@/types/types";
import { GitHub, LinkedIn, X } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const HomeHeroSection = () => {
  const LINKS: LinksProps[] = [
    {
      link: "https://x.com/vijaybansalll",
      Icon: <X />,
      name: "X formally Twitter",
    },
    {
      link: "https://www.linkedin.com/in/vijaybansalll",
      Icon: <LinkedIn />,
      name: "LinkedIn",
    },
    {
      link: "https://github.com/vijaybansalll",
      Icon: <GitHub />,
      name: "GitHub",
    },
  ];
  return (
    <Block className="-mt-50 mb-10 border-0 pt-0 shadow-[none] md:mb-15 dark:shadow-[none]">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="flex flex-col justify-center gap-4">
          <NavbarLogo className="h-30 w-30" />
          <div className="flex items-center justify-center gap-4">
            {LINKS.map((link) => (
              <Tooltip key={link.link}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.link}
                    target="_blank"
                    className="h-4 w-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                  >
                    {link.Icon}
                  </Link>
                </TooltipTrigger>

                <TooltipContent className="z-50">
                  <p> {link.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <Heading className="">Vijay Bansal</Heading>

            <LayoutTextFlip
              words={[
                "Front-end Developer",
                "HTML, CSS, JS, TS",
                "ReactJS, NextJS",
                "Tailwind CSS, Shadcn UI",
                "Framer Motion",
                "Git/Github",
              ]}
            />
          </div>
          <Para className="max-w-lg pt-4 text-center text-sm text-black/80 md:text-left md:text-base dark:text-white/80">
            I&apos;m a front-end developer with an eye for design. I&apos;m
            passionate about building beautiful, user-friendly interfaces that
            are both functional and aesthetically pleasing.
          </Para>
        </div>
      </div>
    </Block>
  );
};

export default HomeHeroSection;
