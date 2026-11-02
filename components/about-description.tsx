"use client";
import { usePathname } from "next/navigation";

const AboutDescription = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/about"
        ? "A Frontend Developer specializing in React and Next.js. I build modern, high-performance web applications with a strong focus on clean UI, performance, and seamless user experiences. I enjoy transforming complex problems into intuitive digital solutions."
        : "I'm a front-end developer with an eye for design. I'm passionate about building beautiful, user-friendly interfaces that are both functional and aesthetically pleasing."}
    </>
  );
};

export default AboutDescription;
