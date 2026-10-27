import { CallToAction } from "@/components/ui/cta";
import TechStackSection from "@/sections/TechStackSection";
import HomeCompaniesSection from "@/sections/HomeCompaniesSection";

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
