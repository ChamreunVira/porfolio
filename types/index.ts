export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type PortfolioProject = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  tone: "yellow" | "pink" | "blue" | "paper";
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type CertificateAsset = {
  title: string;
  issuer: string;
  year: string;
  src: string;
  type: "image" | "pdf";
};

export type PortfolioProfile = {
  name: string;
  handle: string;
  role: string;
  intro: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    website: string;
    location: string;
  };
  education: {
    institution: string;
    program: string;
    period: string;
  }[];
  experience: {
    title: string;
    organization: string;
    period: string;
    description: string;
    technologies: string[];
  }[];
  certifications: string[];
  socials: SocialLink[];
  technologies: string[];
  skillGroups: SkillGroup[];
  projects: PortfolioProject[];
};
