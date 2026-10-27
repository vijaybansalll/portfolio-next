import Image from "next/image";
import { Para } from "./para";
import { AvatarGroup } from "./ui/avatar-group";
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
    <div className="flex gap-2">
      <div className="flex-4">
        <h3 className="text-vj-primary dark:text-vj-primary-dark mb-2 font-semibold tracking-tight">
          {companyName}
        </h3>
        <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
          <Para className="text-vj-primary dark:text-vj-primary-dark tracking-tight">
            {role}
          </Para>
          <Para>{duration}</Para>
        </div>
        <Para>{description}</Para>
        <AvatarGroup
          className="mt-4 cursor-pointer select-none"
          avatarUrls={techStack}
        />
      </div>
      <div className="hidden flex-1 sm:block">
        <Image src={companyLogo} alt="Webcom Logo" width={150} height={150} />
      </div>
    </div>
  );
};

export default WorkCard;
