import { Para } from "@/components/para";
import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { PROFILE } from "@/data/profile";
import { CopyEmail } from "@/components/copy-email";

const ContactHeroSection = () => {
  return (
    <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
      <Heading>Contact Me</Heading>
      <Para className="max-w-lg pt-4 text-sm md:text-base">
        If you have any questions or inquiries, please feel free to contact me
        below or write to me directly.
      </Para>
      <div className="mt-3 flex items-center gap-2">
        <a
          href={`mailto:${PROFILE.email}`}
          className="text-vj-primary dark:text-vj-primary-dark text-sm font-medium underline underline-offset-4 md:text-base"
        >
          {PROFILE.email}
        </a>
        <CopyEmail email={PROFILE.email} />
      </div>
    </Block>
  );
};

export default ContactHeroSection;
