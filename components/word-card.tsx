import Image from "next/image";
import { Para } from "@/components/para";
import { AvatarGroup } from "@/components/ui/avatar-group";
import {
  Bootstrap,
  CSS,
  HTML5,
  JavaScript,
  Nextjs,
  React,
  ShadcnUI,
  TailwindCSS,
} from "@/components/icons";
import { WORK_COMPANIES_PROPS } from "@/types/types";

const WorkCard = ({
  companyName,
  companyLogo,
  role,
  duration,
  description,
}: WORK_COMPANIES_PROPS) => {
  const techStack = [
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
    {
      icon: <React />,
      name: "React",
    },
    {
      icon: <Nextjs />,
      name: "Nextjs",
    },
    {
      icon: <TailwindCSS />,
      name: "Tailwind CSS",
    },
    {
      icon: <ShadcnUI />,
      name: "Shadcn UI",
    },
  ];
  return (
    <div className="flex items-start gap-2">
      <div className="flex-3">
        <div className="mb-3 flex items-center justify-between gap-2 sm:mb-0">
          <h3 className="text-vj-primary dark:text-vj-primary-dark font-semibold tracking-tight sm:mb-2">
            {companyName}
          </h3>
          <Image
            src={companyLogo}
            alt={`${companyName} company logo`}
            width={100}
            height={100}
            sizes="100px"
            className="object-contain sm:hidden"
          />
        </div>
        <div className="mb-1 flex gap-1 sm:flex-row sm:items-center sm:gap-2">
          <Para className="text-vj-primary dark:text-vj-primary-dark tracking-tight">
            {role}
          </Para>
          <Para>{duration}</Para>
        </div>
        <Para className="max-w-120">{description}</Para>
        <AvatarGroup
          className="mt-4 cursor-pointer select-none"
          avatarUrls={techStack}
        />
      </div>
      <div className="hidden flex-1 sm:block">
        <Image
          src={companyLogo}
          alt={`${companyName} company logo`}
          width={150}
          height={150}
          sizes="150px"
          className="size-full object-contain"
        />
      </div>
    </div>
  );
};

export default WorkCard;
