import { FaChartLine, FaCode, FaWandMagicSparkles } from "react-icons/fa6";
import { Block } from "@/components/block";
import { SectionHeading } from "@/components/section-heading";
import { techIcon } from "@/components/tech-icons";
import { FOCUS_AREAS } from "@/data/profile";

const ICONS = {
  code: FaCode,
  chart: FaChartLine,
  sparkles: FaWandMagicSparkles,
};

const FocusSection = () => {
  return (
    <Block>
      <SectionHeading className="mb-6">What I do</SectionHeading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {FOCUS_AREAS.map((area) => {
          const Icon = ICONS[area.icon];
          return (
            <div
              key={area.title}
              className="flex flex-col gap-3 rounded-xl border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                <Icon className="size-4" />
              </span>
              <h3 className="text-vj-primary dark:text-vj-primary-dark text-base font-medium tracking-tight">
                {area.title}
              </h3>
              <p className="text-vj-secondary dark:text-vj-secondary-dark text-sm">
                {area.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {area.tech.map((name) => (
                  <span
                    key={name}
                    className="dark:text-vj-secondary-dark inline-flex items-center gap-1 rounded-md bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800"
                  >
                    {techIcon(name, "size-3.5 shrink-0")}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Block>
  );
};

export default FocusSection;
