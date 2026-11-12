import { ArrowUpRight } from "lucide-react";
import { Block } from "@/components/block";
import { SectionHeading } from "@/components/section-heading";
import { techIcon } from "@/components/tech-icons";
import { SKILL_GROUPS } from "@/data/skills";

const pillClassName =
  "dark:text-vj-secondary-dark inline-flex items-center gap-1.5 rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700/60 dark:hover:text-neutral-100";

const SkillsSection = () => {
  return (
    <Block>
      <SectionHeading className="mb-6">Skills</SectionHeading>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="text-vj-primary dark:text-vj-primary-dark mb-3 text-sm font-semibold tracking-tight">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) =>
                item.url ? (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.name} documentation`}
                    className={`group ${pillClassName}`}
                  >
                    {techIcon(item.name)}
                    {item.name}
                    <ArrowUpRight className="size-3 shrink-0 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                ) : (
                  <span key={item.name} className={pillClassName}>
                    {techIcon(item.name)}
                    {item.name}
                  </span>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </Block>
  );
};

export default SkillsSection;
