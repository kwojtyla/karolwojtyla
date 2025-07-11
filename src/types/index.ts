export type Job = {
  id: number;
  title: string;
  company: Organization;
  type: string;
  description: string;
  startYear: number;
  endYear: number | string;
  className?: string;
};

export type Degree = {
  id: number;
  title: string;
  institution: Organization;
  startYear: number;
  endYear: number | string;
};

export type Organization = {
  name: string;
  link: string;
};

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  badge: string;
  badgeUrl?: string;
  startYear: number;
  endYear?: number | string;
};

export type Paper = {
  id: number;
  category: "Artigo" | "Resumo Expandido" | "Article" | "Extended Summary";
  title: string;
  year: number;
  event: string;
  link: string;
};

export type Research = {
  asAuthor: Paper[];
  asCoauthor: Paper[];
};

interface SanitySlug {
  current: string;
  _type: "slug";
}

interface SanityImage {
  _type: "image";
  imageUrl: string;
  alt?: string;
}

interface SanityBodyBlock {
  _type: string;
  [key: string]: unknown;
}

export interface SanityProject {
  _id: string;
  coverUrl: string;
  shortDescription: string;
  name: string;
  featured: boolean;
  company: string;
  companyLink: string;
  position: string;
  period: string;
  projectLink: string;
  stack: string;
  slug: SanitySlug;
  publishedAt: string;
  logoUrl: string;
  body: Array<SanityBodyBlock | SanityImage>;
}
