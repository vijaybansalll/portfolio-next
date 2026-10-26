import { Block } from "@/components/block";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

const ProjectProjectsSection = () => {
  return (
    <Block>
      <SectionHeading className="mb-6">I love building things</SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
        {PROJECTS_DATA.map((item, index) => (
          <ProjectCard
            key={index}
            index={index}
            websiteURL={item.websiteURL}
            img={item.imagePath}
            title={item.title}
            domain={item.domain}
            description={item.discription}
            techStack={item.techStack}
          />
        ))}
      </div>
    </Block>
  );
};

export default ProjectProjectsSection;
