import Link from "next/link";
import Image from "next/image";
import { Para } from "@/components/para";
import { Block } from "@/components/block";
import { HiDownload } from "react-icons/hi";
import { ArrowRightIcon } from "lucide-react";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Ripple } from "@/components/ui/ripple";
import { NativeMagnetic } from "@/components/ui/native-magnetic-shadcnui";

const AboutHeroSection = () => {
  return (
    <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div>
          <Heading>About Me</Heading>
          <Para className="max-w-lg pt-4 text-sm md:text-base">
            Hi, I&apos;m Vijay Bansal, A Frontend Developer specializing in
            React and Next.js. I build modern, high-performance web applications
            with a strong focus on clean UI, performance, and seamless user
            experiences. I enjoy transforming complex problems into intuitive
            digital solutions.
          </Para>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <Link href={"/contact"} className="flex items-center gap-2">
              <NativeMagnetic className="w-full sm:w-fit">
                <Button className="w-full">
                  Start a Conversation <ArrowRightIcon data-icon="inline-end" />
                </Button>
              </NativeMagnetic>
            </Link>
            <NativeMagnetic className="w-full sm:w-fit">
              <Link href={"/vijay-bansal-resume.pdf"} download={true}>
                <Button variant={"outline"} className="w-full">
                  Download CV
                  <HiDownload />
                </Button>
              </Link>
            </NativeMagnetic>
          </div>
        </div>
        <div className="relative mt-5 flex h-full min-h-82.5 w-full flex-col items-center justify-center overflow-hidden md:mt-0 md:min-h-87.5">
          <div className="relative z-2 flex size-25 items-center justify-center overflow-hidden rounded-full">
            <Image src="/logo.jpg" alt="logo" width={500} height={500} />
          </div>
          <Ripple />
        </div>
      </div>
    </Block>
  );
};

export default AboutHeroSection;
