import { Block } from "@/components/block";
import { SectionHeading } from "@/components/section-heading";
import { TechStake } from "@/components/techStake";
// import { Button } from "@/components/ui/button";
// import { NativeMagnetic } from "@/components/ui/native-magnetic-shadcnui";
// import { ArrowRightIcon } from "lucide-react";
// import Link from "next/link";
// import { HiDownload } from "react-icons/hi";

const TechStackSection = () => {
  return (
    <Block>
      <SectionHeading className="mx-auto mb-6">Tech Stack I use</SectionHeading>
      <TechStake />
    </Block>
  );
};

export default TechStackSection;
