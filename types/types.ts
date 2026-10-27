export type TESTIMONIAL_PROPS = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export type BLOG_CARDS_PROPS = {
  slug?: string;
  title?: string;
  date?: string;
  description?: string;
  content?: string;
  index?: number;
  featured?: boolean;
  tags?: string[];
};

export type WORK_COMPANIES_PROPS = {
  companyName: string;
  companyLogo: string;
  role: string;
  duration: string;
  description: string;
};

export type LinksProps = {
  link: string;
  Icon: React.ReactNode;
  name: string;
};
