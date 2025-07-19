"use server";

import { client } from "@/sanity/client";
import { SanityProject } from "@/types";
import { ProjectsListClient } from "./projects-list-client";

const options = { next: { revalidate: 30 } };

const PROJECTS_QUERY = `*[
  _type == "project" && defined(slug.current)
]|order(publishedAt asc)[0...12]{
  _id,
  "coverUrl": cover.asset->url,
  shortDescription,
  name,
  featured,
  company,
  companyLink,
  position,
  period,
  projectLink,
  stack,
  slug,
  publishedAt,
  "logoUrl": logo.asset->url,
  body[]{
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt
    }
  }
}`;

export async function ProjectsList() {
  const projects = await client.fetch<SanityProject[]>(
    PROJECTS_QUERY,
    {},
    options,
  );

  return <ProjectsListClient projects={projects} />;
}
