import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import {
  SiBootstrap,
  SiBun,
  SiChakraui,
  SiCss,
  SiCursor,
  SiDribbble,
  SiEnvato,
  SiFigma,
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
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<{ className?: string }>;

/** Official Aceternity UI brand mark from ui.aceternity.com. */
const AceternityIcon: IconComponent = ({ className }) => (
  <svg
    viewBox="48 48 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path
      d="M146 48H106.136L48 208H87.8644L116.932 128C116.932 128 122 114.5 124.4 108L131.466 88L146 48Z"
      fill="currentColor"
    />
    <path
      d="M110 48H149.864L168.032 98H127.84L110 48Z"
      fill="currentColor"
    />
    <path
      d="M139.587 113.833L171.458 208H208L172.807 113.833H139.587Z"
      fill="currentColor"
    />
    <path
      d="M173 114L140.8 208H104L139.545 114H173Z"
      fill="currentColor"
    />
  </svg>
);

/** Official Magic UI brand mark from magicui.design. */
const MagicUiIcon: IconComponent = ({ className }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <rect width="256" height="256" rx="128" fill="url(#magicui_paint0)" />
    <rect width="256" height="256" rx="128" fill="url(#magicui_paint1)" />
    <path
      d="M124.157 193.675C123.939 193.783 123.722 193.837 123.505 193.837C123.287 193.837 122.852 193.837 122.2 193.837C120.678 193.837 118.884 193.567 116.818 193.025C114.862 192.591 112.905 191.995 110.948 191.236C109.099 190.586 107.469 189.828 106.055 188.961C104.751 188.094 103.935 187.335 103.609 186.685C103.501 185.167 103.446 183.596 103.446 181.97C103.446 180.345 103.446 178.773 103.446 177.256C103.446 165.118 104.316 152.438 106.055 139.217C107.904 125.995 110.893 111.69 115.025 96.3005C115.459 94.7833 115.894 92.8867 116.329 90.6108C116.873 88.2266 117.416 85.6798 117.96 82.9704C115.351 85.0296 112.252 88.335 108.665 92.8867C105.077 97.3301 101.272 102.64 97.2492 108.818C93.3354 114.887 89.3672 121.606 85.3446 128.975C81.4308 136.236 77.8431 143.66 74.5815 151.246C71.32 158.724 68.4933 166.148 66.1015 173.517C63.8185 180.887 62.4051 187.714 61.8615 194C56.6431 192.483 53.001 190.966 50.9354 189.448C48.9785 187.931 48 186.089 48 183.921C48 181.97 48.5979 179.207 49.7938 175.631C50.9897 172.054 52.6749 167.828 54.8492 162.951C57.0236 158.074 59.6872 152.655 62.84 146.695C65.9928 140.626 69.4718 134.123 73.2769 127.187C77.6256 119.276 81.8656 111.852 85.9969 104.916C90.2369 97.9803 94.3682 91.6946 98.3908 86.0591C102.413 80.4236 106.327 75.5468 110.132 71.4286C114.046 67.3104 117.906 64.1675 121.711 62C123.233 62 125.244 62.3793 127.745 63.1379C130.354 63.8966 132.854 64.8177 135.246 65.9015C137.747 66.9852 139.921 68.1232 141.769 69.3153C143.726 70.399 144.813 71.3202 145.031 72.0788C143.509 75.1133 141.715 79.665 139.649 85.734C137.584 91.803 135.464 98.6847 133.289 106.379C131.224 114.074 129.212 122.256 127.255 130.926C125.407 139.488 123.939 147.724 122.852 155.635C125.353 149.675 128.234 143.498 131.495 137.103C134.866 130.601 138.399 124.207 142.095 117.921C145.792 111.527 149.543 105.35 153.348 99.3892C157.262 93.4286 161.067 88.0099 164.763 83.133C168.459 78.1478 171.884 73.8128 175.037 70.1281C178.298 66.4434 181.179 63.734 183.68 62C185.202 62 187.213 62.3793 189.714 63.1379C192.323 63.8966 194.824 64.8177 197.215 65.9015C199.716 66.9852 201.89 68.1232 203.738 69.3153C205.695 70.399 206.783 71.3202 207 72.0788C203.521 78.2562 200.477 85.7882 197.868 94.6749C195.258 103.562 193.03 112.882 191.182 122.635C189.442 132.389 188.083 142.089 187.105 151.734C186.235 161.271 185.8 169.833 185.8 177.419C185.8 179.911 185.8 182.512 185.8 185.222C185.8 187.931 185.909 190.749 186.126 193.675C184.604 193.675 182.756 193.458 180.582 193.025C178.516 192.7 176.45 192.212 174.385 191.562C172.428 190.911 170.634 190.153 169.003 189.286C167.372 188.527 166.231 187.66 165.578 186.685C165.47 185.167 165.415 183.596 165.415 181.97C165.415 180.345 165.415 178.773 165.415 177.256C165.415 165.118 166.285 152.438 168.025 139.217C169.873 125.995 172.863 111.69 176.994 96.3005C177.429 94.7833 177.918 92.7241 178.462 90.1232C179.005 87.5222 179.549 84.8128 180.092 81.9951C177.048 83.5123 173.569 86.4384 169.655 90.7734C165.85 95 161.936 100.202 157.914 106.379C154 112.448 150.086 119.222 146.172 126.7C142.367 134.177 138.888 141.818 135.735 149.621C132.691 157.315 130.082 165.01 127.908 172.704C125.842 180.291 124.592 187.281 124.157 193.675Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="magicui_paint0"
        x1="128"
        y1="0"
        x2="128"
        y2="256"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF786F" />
        <stop offset="1" stopColor="#D8595E" />
      </linearGradient>
      <linearGradient
        id="magicui_paint1"
        x1="78"
        y1="0"
        x2="236"
        y2="256"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9E7AFF" />
        <stop offset="0.333333" stopColor="#FE8BBB" />
        <stop offset="0.666667" stopColor="#FFBD7A" />
        <stop offset="1" stopColor="#F8EAC3" />
      </linearGradient>
    </defs>
  </svg>
);

/** Official Google Antigravity brand mark from antigravity.google. */
const AntigravityIcon: IconComponent = ({ className }) => (
  <svg
    viewBox="16 20 104 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <g transform="translate(12 10)">
      <path
        d="M89.6992 93.695C94.3659 97.195 101.366 94.8617 94.9492 88.445C75.6992 69.7783 79.7825 18.445 55.8659 18.445C31.9492 18.445 36.0325 69.7783 16.7825 88.445C9.78251 95.445 17.3658 97.195 22.0325 93.695C40.1159 81.445 38.9492 59.8617 55.8659 59.8617C72.7825 59.8617 71.6159 81.445 89.6992 93.695Z"
        fill="#3186FF"
      />
      <mask
        id="ag_fav_m"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="13"
        y="18"
        width="85"
        height="78"
      >
        <path
          d="M89.6992 93.695C94.3659 97.195 101.366 94.8617 94.9492 88.445C75.6992 69.7783 79.7825 18.445 55.8659 18.445C31.9492 18.445 36.0325 69.7783 16.7825 88.445C9.78251 95.445 17.3658 97.195 22.0325 93.695C40.1159 81.445 38.9492 59.8617 55.8659 59.8617C72.7825 59.8617 71.6159 81.445 89.6992 93.695Z"
          fill="black"
        />
      </mask>
      <g mask="url(#ag_fav_m)">
        <g filter="url(#ag_fav_f0)">
          <ellipse
            cx="22.7873"
            cy="26.8098"
            rx="22.7873"
            ry="26.8098"
            transform="matrix(-0.112784 0.99362 -0.99362 -0.112781 66.2473 -15.5344)"
            fill="#FFE432"
          />
        </g>
        <g filter="url(#ag_fav_f1)">
          <ellipse
            cx="96.491"
            cy="35.1231"
            rx="29.5007"
            ry="30.1492"
            transform="rotate(76.9243 96.491 35.1231)"
            fill="#FC413D"
          />
        </g>
        <g filter="url(#ag_fav_f2)">
          <ellipse
            cx="9.02988"
            cy="41.6647"
            rx="30.832"
            ry="39.9417"
            transform="rotate(74.1257 9.02988 41.6647)"
            fill="#00B95C"
          />
        </g>
        <g filter="url(#ag_fav_f3)">
          <ellipse
            cx="11.2212"
            cy="42.8915"
            rx="30.22"
            ry="33.2695"
            transform="rotate(45.6065 11.2212 42.8915)"
            fill="#00B95C"
          />
        </g>
        <g filter="url(#ag_fav_f4)">
          <ellipse
            cx="75.7546"
            cy="104.822"
            rx="29.0177"
            ry="27.943"
            transform="rotate(76.9243 75.7546 104.822)"
            fill="#3186FF"
          />
        </g>
        <g filter="url(#ag_fav_f5)">
          <ellipse
            cx="33.5661"
            cy="35.4043"
            rx="33.5661"
            ry="35.4043"
            transform="matrix(-0.409539 0.912293 -0.912294 -0.409537 101.25 -15.1674)"
            fill="#FBBC04"
          />
        </g>
        <g filter="url(#ag_fav_f6)">
          <path
            d="M2.56802 149.695C-15.8116 142.48 15.5987 83.1163 23.4093 63.2203C31.22 43.3244 52.4514 33.0447 70.831 40.26C89.2107 47.4753 110.996 87.2162 103.185 107.112C95.3742 127.008 20.9477 156.91 2.56802 149.695Z"
            fill="#3186FF"
          />
        </g>
        <g filter="url(#ag_fav_f7)">
          <path
            d="M113.934 75.8079C109.013 81.5509 96.1724 78.6224 85.253 69.2667C74.3335 59.911 69.4704 47.6711 74.391 41.928C79.3116 36.185 92.1525 39.1136 103.072 48.4692C113.991 57.8249 118.855 70.0648 113.934 75.8079Z"
            fill="#749BFF"
          />
        </g>
        <g filter="url(#ag_fav_f8)">
          <ellipse
            cx="92.611"
            cy="23.7962"
            rx="44.2411"
            ry="27.5016"
            transform="rotate(34.0763 92.611 23.7962)"
            fill="#FC413D"
          />
        </g>
        <g filter="url(#ag_fav_f9)">
          <ellipse
            cx="23.4949"
            cy="29.5887"
            rx="23.7071"
            ry="13.7869"
            transform="rotate(112.516 23.4949 29.5887)"
            fill="#FFEE48"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="ag_fav_f0"
        x="2.49348"
        y="-26.5423"
        width="69.0899"
        height="61.2525"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="3.89034" />
      </filter>
      <filter
        id="ag_fav_f1"
        x="28.7524"
        y="-32.0333"
        width="135.477"
        height="134.313"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="18.8078" />
      </filter>
      <filter
        id="ag_fav_f2"
        x="-62.2884"
        y="-21.9253"
        width="142.637"
        height="127.18"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="15.9884" />
      </filter>
      <filter
        id="ag_fav_f3"
        x="-52.5697"
        y="-20.8346"
        width="127.582"
        height="127.452"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="15.9884" />
      </filter>
      <filter
        id="ag_fav_f4"
        x="17.3619"
        y="45.4646"
        width="116.786"
        height="118.715"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="15.1937" />
      </filter>
      <filter
        id="ag_fav_f5"
        x="-7.44765"
        y="-60.4737"
        width="125.303"
        height="122.858"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="13.7698" />
      </filter>
      <filter
        id="ag_fav_f6"
        x="-27.7086"
        y="13.3597"
        width="157.119"
        height="162.029"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="12.297" />
      </filter>
      <filter
        id="ag_fav_f7"
        x="50.4638"
        y="16.981"
        width="87.3973"
        height="83.7738"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="11.0036" />
      </filter>
      <filter
        id="ag_fav_f8"
        x="34.2604"
        y="-28.457"
        width="116.701"
        height="104.506"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="9.29385" />
      </filter>
      <filter
        id="ag_fav_f9"
        x="-15.1522"
        y="-15.9493"
        width="77.2941"
        height="91.076"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur stdDeviation="11.5027" />
      </filter>
    </defs>
  </svg>
);

/** Official Google Stitch favicon from stitch.withgoogle.com. */
const StitchIcon: IconComponent = ({ className }) => (
  <Image
    src="/icons/stitch.png"
    alt=""
    width={16}
    height={16}
    className={cn("rounded-[3px]", className)}
    aria-hidden
  />
);

/** Official Google Gemini four-point sparkle mark. */
const GeminiIcon: IconComponent = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path
      d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z"
      fill="url(#gemini_grad)"
    />
    <defs>
      <linearGradient
        id="gemini_grad"
        x1="0"
        y1="0"
        x2="24"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#1BA1E3" />
        <stop offset="50%" stopColor="#5684D1" />
        <stop offset="100%" stopColor="#9168C0" />
      </linearGradient>
    </defs>
  </svg>
);

/** Official Motion brand mark from motion.dev. */
const MotionDevIcon: IconComponent = ({ className }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <rect width="64" height="64" rx="14" fill="#0B0B0C" />
    <g transform="translate(10 24.2) scale(1.735)">
      <path
        d="M 9.587 0 L 4.57 9 L 0 9 L 3.917 1.972 C 4.524 0.883 6.039 0 7.301 0 Z M 20.794 2.25 C 20.794 1.007 21.817 0 23.079 0 C 24.341 0 25.364 1.007 25.364 2.25 C 25.364 3.493 24.341 4.5 23.079 4.5 C 21.817 4.5 20.794 3.493 20.794 2.25 Z M 10.443 0 L 15.013 0 L 9.997 9 L 5.427 9 Z M 15.841 0 L 20.411 0 L 16.494 7.028 C 15.887 8.117 14.372 9 13.11 9 L 10.825 9 Z"
        fill="#FFFFFF"
      />
    </g>
  </svg>
);

const NEUTRAL = "text-neutral-900 dark:text-neutral-100";

type TechEntry = { label: string; Icon: IconComponent; color: string };

const TECH: Record<string, TechEntry> = {
  html5: { label: "HTML5", Icon: SiHtml5, color: "text-[#e34f26]" },
  css3: { label: "CSS3", Icon: SiCss, color: "text-[#264de4]" },
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
  figma: { label: "Figma", Icon: SiFigma, color: "text-[#f24e1e]" },
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
