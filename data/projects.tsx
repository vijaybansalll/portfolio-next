import {
  Bootstrap,
  ChakraUI,
  CSS,
  HTML5,
  JavaScript,
  Nextjs,
  React,
  Sass,
  ShadcnUI,
  TailwindCSS,
  TypeScript,
} from "@/components/icons";

import { ProjectItem } from "@/types/types";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    imagePath: "/projects/xchangeOn-full.webp",
    websiteURL: "https://xchangeon.io/",
    title: "Xchangeon",
    domain: "Crypto Exchange",
    description:
      "Responsive UI components and interface layouts for seamless interactions.",
    techStack: [
      {
        icon: <React />,
        name: "React",
      },
      {
        icon: <Nextjs />,
        name: "Nextjs",
      },
      {
        icon: <TypeScript />,
        name: "TypeScript",
      },
      {
        icon: <Sass />,
        name: "Sass",
      },
      {
        icon: <Bootstrap />,
        name: "Bootstrap",
      },
    ],
  },
  {
    imagePath: "/projects/gtify-protocol-full.webp",
    websiteURL: "https://wallet.gtifyprotocol.io/",
    title: "Gtify Protocol",
    domain: "Web3 / DeFi",
    description:
      "Clean, responsive interfaces and intuitive layouts for enhanced usability.",
    techStack: [
      {
        icon: <Nextjs />,
        name: "Nextjs",
      },
      {
        icon: <ShadcnUI />,
        name: "Shadcn UI",
      },
      {
        icon: <React />,
        name: "React",
      },
      {
        icon: <TypeScript />,
        name: "TypeScript",
      },
      {
        icon: <TailwindCSS />,
        name: "Tailwind CSS",
      },
    ],
  },

  {
    imagePath: "/projects/everest-remit-full.webp",
    websiteURL: "https://vijaybansal2004.github.io/Everest-Remit/",
    title: "Everest Remit",
    domain: "Remittance",
    description:
      "Responsive interface elements with clear visual hierarchy and navigation.",
    techStack: [
      {
        icon: <HTML5 />,
        name: "HTML5",
      },
      {
        icon: <CSS />,
        name: "CSS",
      },
      {
        icon: <JavaScript />,
        name: "JavaScript",
      },

      {
        icon: <Bootstrap />,
        name: "Bootstrap",
      },
    ],
  },
  {
    imagePath: "/projects/xauras-full.webp",
    websiteURL: "https://xauras.io/",
    title: "Xausas",
    domain: "DeFi",
    description:
      "Interactive admin panel components with smooth and intuitive micro-interactions.",
    techStack: [
      {
        icon: <CSS />,
        name: "CSS",
      },
      {
        icon: <TypeScript />,
        name: "TypeScript",
      },
      {
        icon: <React />,
        name: "React",
      },
      {
        icon: <ChakraUI />,
        name: "Chakra UI",
      },
    ],
  },
  {
    imagePath: "/projects/bitnetx-full.webp",
    websiteURL: "https://vijaybansal2004.github.io/bitnetX",
    title: "BitnetX",
    domain: "Crypto Exchange",
    description:
      "Polished responsive components delivering a smooth, consistent browsing experience.",

    techStack: [
      {
        icon: <HTML5 />,
        name: "HTML5",
      },
      {
        icon: <CSS />,
        name: "CSS",
      },
      {
        icon: <JavaScript />,
        name: "JavaScript",
      },
      {
        icon: <Bootstrap />,
        name: "Bootstrap",
      },
    ],
  },
  {
    imagePath: "/projects/finsaix-full.webp",
    websiteURL: "https://finsaix.com/",
    title: "FinsaiX",
    domain: "Trading",
    description:
      "Modern trading platform UI components with refined visual consistency.",
    techStack: [
      {
        icon: <CSS />,
        name: "CSS",
      },
      {
        icon: <Bootstrap />,
        name: "Bootstrap",
      },
      {
        icon: <TypeScript />,
        name: "TypeScript",
      },
      {
        icon: <Nextjs />,
        name: "Nextjs",
      },
      {
        icon: <React />,
        name: "React",
      },
    ],
  },
];
