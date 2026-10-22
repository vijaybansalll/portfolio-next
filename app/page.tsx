import { CallToAction } from "@/components/ui/cta";
import HomeHeroSection from "@/sections/HomeHeroSection";
import LogoCarousel from "@/components/ui/logo-carousel";
import HomeBlogSection from "@/sections/HomeBlogSection";
import HomeProjectsSection from "@/sections/HomeProjectsSection";
import HomeCompaniesSection from "@/sections/HomeCompaniesSection";
import TestimonialSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <div>
      {/* <HomeHeroSection /> */}
      <HomeProjectsSection />
      <LogoCarousel />
      <HomeBlogSection />
      <HomeCompaniesSection />
      <TestimonialSection />
      <CallToAction />
    </div>
  );
}
