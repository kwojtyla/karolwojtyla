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
