import { CallToAction } from "@/components/ui/cta";
import TechStackSection from "@/sections/TechStackSection";
// import AboutHeroSection from "@/sections/AboutHeroSection";
import HomeCompaniesSection from "@/sections/HomeCompaniesSection";

const AboutPage = () => {
  return (
    <div>
      {/* <AboutHeroSection /> */}
      <TechStackSection />
      <HomeCompaniesSection />
      <CallToAction />
    </div>
  );
};

export default AboutPage;
