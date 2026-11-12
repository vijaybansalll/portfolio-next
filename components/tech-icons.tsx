import type { ComponentType, ReactNode } from "react";
import {
  SiBootstrap,
  SiBun,
  SiChakraui,
  SiCursor,
  SiDribbble,
  SiEnvato,
  SiFreepik,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNpm,
  SiReact,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaArrowPointer,
  FaCubes,
  FaGaugeHigh,
  FaGlobe,
  FaMobileScreenButton,
  FaPenRuler,
} from "react-icons/fa6";
import {
  AceternityIcon,
  AntigravityIcon,
  CSS,
  FigmaIcon,
  GeminiIcon,
  MagicUiIcon,
  MotionDevIcon,
  StitchIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<{ className?: string }>;

const NEUTRAL = "text-neutral-900 dark:text-neutral-100";

type TechEntry = { label: string; Icon: IconComponent; color: string };

const TECH: Record<string, TechEntry> = {
  html5: { label: "HTML5", Icon: SiHtml5, color: "text-[#e34f26]" },
  css3: { label: "CSS3", Icon: CSS, color: "" },
  javascript: {
    label: "JavaScript",
    Icon: SiJavascript,
    color: "text-[#f7df1e]",
  },
  typescript: {
    label: "TypeScript",
    Icon: SiTypescript,
    color: "text-[#3178c6]",
  },
  sass: { label: "Sass", Icon: SiSass, color: "text-[#cc6699]" },

  react: { label: "React", Icon: SiReact, color: "text-[#58c4dc]" },
  "next.js": { label: "Next.js", Icon: SiNextdotjs, color: NEUTRAL },
  "tailwind css": {
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "text-[#38bdf8]",
  },
  bootstrap: {
    label: "Bootstrap",
    Icon: SiBootstrap,
    color: "text-[#7952b3]",
  },
  "shadcn ui": { label: "Shadcn UI", Icon: SiShadcnui, color: NEUTRAL },
  "chakra ui": {
    label: "Chakra UI",
    Icon: SiChakraui,
    color: "text-[#319795]",
  },
  "aceternity ui": {
    label: "Aceternity UI",
    Icon: AceternityIcon,
    color: NEUTRAL,
  },
  "magic ui": {
    label: "Magic UI",
    Icon: MagicUiIcon,
    color: "",
  },

  motion: { label: "Motion", Icon: MotionDevIcon, color: "" },
  "framer motion": {
    label: "Framer Motion",
    Icon: MotionDevIcon,
    color: "",
  },
  figma: { label: "Figma", Icon: FigmaIcon, color: "" },
  dribbble: { label: "Dribbble", Icon: SiDribbble, color: "text-[#ea4c89]" },
  freepik: { label: "Freepik", Icon: SiFreepik, color: "text-[#1273eb]" },
  envato: { label: "Envato", Icon: SiEnvato, color: "text-[#81b441]" },

  "vs code": { label: "VS Code", Icon: VscVscode, color: "text-[#007acc]" },
  git: { label: "Git", Icon: SiGit, color: "text-[#f05032]" },
  github: { label: "GitHub", Icon: SiGithub, color: NEUTRAL },
  npm: { label: "npm", Icon: SiNpm, color: "text-[#cb3837]" },
  bun: { label: "Bun", Icon: SiBun, color: "text-[#d97706] dark:text-[#fbf0df]" },
  cursor: { label: "Cursor", Icon: SiCursor, color: NEUTRAL },
  "google antigravity": {
    label: "Google Antigravity",
    Icon: AntigravityIcon,
    color: "",
  },
  "google stitch": {
    label: "Google Stitch",
    Icon: StitchIcon,
    color: "",
  },
  gemini: {
    label: "Gemini",
    Icon: GeminiIcon,
    color: "",
  },

  "responsive design": {
    label: "Responsive Design",
    Icon: FaMobileScreenButton,
    color: "text-[#0ea5e9]",
  },
  "micro-interactions": {
    label: "Micro-interactions",
    Icon: FaArrowPointer,
    color: "text-[#a855f7]",
  },
  "component architecture": {
    label: "Component Architecture",
    Icon: FaCubes,
    color: "text-[#f97316]",
  },
  "performance optimization": {
    label: "Performance Optimization",
    Icon: FaGaugeHigh,
    color: "text-[#10b981]",
  },
  "cross-browser compatibility": {
    label: "Cross-Browser Compatibility",
    Icon: FaGlobe,
    color: "text-[#3b82f6]",
  },
  "ui/ux": {
    label: "UI/UX",
    Icon: FaPenRuler,
    color: "text-[#ec4899]",
  },
};

const DEFAULT_SIZE = "size-4 shrink-0";

/** Resolves a skill or technology name to its branded icon component. */
export function techIcon(name: string, className = DEFAULT_SIZE): ReactNode {
  const entry = TECH[name.trim().toLowerCase()];
  if (!entry) return null;
  return <entry.Icon className={cn(entry.color, className)} />;
}
