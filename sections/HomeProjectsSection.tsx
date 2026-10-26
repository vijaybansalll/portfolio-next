import { Block } from "@/components/block";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ImagesBadge } from "@/components/ui/images-badge";
import { PROJECTS_DATA } from "@/data/projects";
import Link from "next/link";

const HomeProjectsSection = () => {
  return (
    <Block>
      <SectionHeading className="mb-6">I love building things</SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
        {PROJECTS_DATA.slice(0, 3).map((item, index) => (
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

      <div className="mx-auto mt-10 sm:w-fit">
        <Button variant={"link"}>
          <Link href="/projects">
            <ImagesBadge
              hoverImageSize={{ width: 80, height: 50 }}
              hoverTranslateY={-60}
              text="View all Projects"
              images={[
                "/projects/finsaix-full.webp",
                "/projects/everest-remit-full.webp",
                "/projects/bitnetx-full.webp",
              ]}
            />
          </Link>
        </Button>
      </div>
    </Block>
  );
};

export default HomeProjectsSection;
