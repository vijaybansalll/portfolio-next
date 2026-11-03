import type { Metadata } from "next";
import { CallToAction } from "@/components/ui/cta";
import ProjectHeroSection from "@/sections/ProjectHeroSection";
import ProjectProjectsSection from "@/sections/ProjectProjectsSection";

export const metadata: Metadata = {
  title: "Projects | Vijay Bansal",
  description: "Explore web development projects and apps built by Vijay Bansal.",
};

const ProjectsPage = () => {
  return (
    <div>
      <ProjectHeroSection />
      <ProjectProjectsSection />
      <CallToAction />
    </div>
  );
};

export default ProjectsPage;
