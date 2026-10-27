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
import { NativeMagnetic } from "@/components/ui/native-magnetic-shadcnui";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { HiDownload } from "react-icons/hi";
import AboutDescription from "@/components/aboutDescription";

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
            <AboutDescription />
          </Para>

          <div className="mt-6 flex items-center justify-center gap-2 sm:flex-row md:items-start md:justify-start">
            <Link href={"/contact"} className="flex items-center gap-2">
              <NativeMagnetic className="w-full sm:w-fit">
                <Button className="w-full">
                  Start a Conversation <ArrowRightIcon data-icon="inline-end" />
                </Button>
              </NativeMagnetic>
            </Link>
            <NativeMagnetic className="w-full sm:w-fit">
              <Link href={"/vijay-bansal-resume.pdf"} download={true}>
                <Button variant={"outline"} className="w-full">
                  Download CV
                  <HiDownload />
                </Button>
              </Link>
            </NativeMagnetic>
          </div>
        </div>
      </div>
    </Block>
  );
};

export default HomeHeroSection;
