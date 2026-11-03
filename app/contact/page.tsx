import type { Metadata } from "next";
import ContactHeroSection from "@/sections/ContactHeroSection";
import ContactContactFormSection from "@/sections/ContactContactFormSection";

export const metadata: Metadata = {
  title: "Contact | Vijay Bansal",
  description: "Get in touch with Vijay Bansal for frontend opportunities, collaborations, and inquiries.",
};

const ContactPage = () => {
  return (
    <div className="m-auto max-w-lg">
      <ContactHeroSection />
      <ContactContactFormSection />
    </div>
  );
};

export default ContactPage;
