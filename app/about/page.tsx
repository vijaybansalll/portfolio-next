import type { Metadata } from "next";
import { CallToAction } from "@/components/ui/cta";
import TechStackSection from "@/sections/TechStackSection";
import HomeCompaniesSection from "@/sections/HomeCompaniesSection";

export const metadata: Metadata = {
  title: "About | Vijay Bansal",
  description: "Learn more about Vijay Bansal, his tech stack, and experience.",
};

const AboutPage = () => {
  return (
    <div>
      <TechStackSection />
      <HomeCompaniesSection />
      <CallToAction />
    </div>
  );
};

export default AboutPage;
