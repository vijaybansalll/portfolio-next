import type React from "react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};
export type TESTIMONIAL_PROPS = Testimonial;

export type BlogCardProps = {
  slug?: string;
  title?: string;
  date?: string;
  description?: string;
  content?: string;
  index?: number;
  featured?: boolean;
  tags?: string[];
};
export type BLOG_CARDS_PROPS = BlogCardProps;

export type WorkExperience = {
  companyName: string;
  companyLogo: string;
  role: string;
  duration: string;
  description: string;
};
export type WORK_COMPANIES_PROPS = WorkExperience;

export type SocialLink = {
  link: string;
  Icon: React.ReactNode;
  name: string;
};
export type LinksProps = SocialLink;

export type TechStackItem = {
  icon: React.ReactNode;
  name: string;
};

export type ProjectItem = {
  imagePath: string;
  websiteURL: string;
  title: string;
  domain: string;
  description: string;
  techStack: TechStackItem[];
};
