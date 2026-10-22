"use client";

import { Block } from "./block";
import { LinksProps } from "@/types/types";
import { GitHub, LinkedIn, X } from "./icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Signature } from "./ui/signature";

const Footer = () => {
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
    <Block>
      <Signature
        text="Vijay Bansal"
        fontSize={15}
        duration={7}
        inView={true}
        className="mx-auto mb-7"
      />
      <div className="text-vj-secondary dark:text-vj-secondary-dark flex items-center justify-between gap-2 text-xs">
        <p>
          Built with love by{" "}
          <span className="text-vj-primary dark:text-vj-primary-dark font-medium">
            Vijay Bansal
          </span>
        </p>
        <div className="flex items-center gap-2">
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
    </Block>
  );
};

export default Footer;
