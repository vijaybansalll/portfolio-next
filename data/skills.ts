import type { SKILL_GROUP_PROPS } from "@/types/types";

export const SKILL_GROUPS: SKILL_GROUP_PROPS[] = [
  {
    title: "Languages & Markup",
    items: [
      {
        name: "HTML5",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/docs/",
      },
      {
        name: "Sass",
        url: "https://sass-lang.com/documentation/",
      },
    ],
  },
  {
    title: "Frameworks & UI Libraries",
    items: [
      { name: "React", url: "https://react.dev/" },
      { name: "Next.js", url: "https://nextjs.org/docs" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
      { name: "Shadcn UI", url: "https://ui.shadcn.com/docs" },
      { name: "Aceternity UI", url: "https://ui.aceternity.com/components" },
      { name: "Magic UI", url: "https://magicui.design/docs" },
    ],
  },

  {
    title: "Tools & Workflow",
    items: [
      { name: "VS Code", url: "https://code.visualstudio.com/docs" },
      { name: "Git", url: "https://git-scm.com/doc" },
      { name: "GitHub", url: "https://docs.github.com/" },
      { name: "npm", url: "https://docs.npmjs.com/" },
      { name: "Bun", url: "https://bun.sh/docs" },
      { name: "Cursor", url: "https://docs.cursor.com/" },
      { name: "Google Antigravity", url: "https://antigravity.google/docs" },
      { name: "Google Stitch", url: "https://stitch.withgoogle.com/" },
      { name: "Gemini", url: "https://ai.google.dev/gemini-api/docs" },
    ],
  },
  {
    title: "Concepts",
    items: [
      { name: "Responsive Design" },
      { name: "Micro-interactions" },
      { name: "Component Architecture" },
      { name: "Performance Optimization" },
      { name: "Cross-Browser Compatibility" },
      { name: "UI/UX" },
    ],
  },
  {
    title: "Animation & Design",
    items: [
      { name: "Framer Motion", url: "https://motion.dev/docs" },
      { name: "Figma", url: "https://help.figma.com/" },
      { name: "Dribbble", url: "https://dribbble.com/" },
      { name: "Freepik", url: "https://www.freepik.com/" },
    ],
  },
];
