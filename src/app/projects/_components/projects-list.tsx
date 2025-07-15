"use server";

import { client } from "@/sanity/client";
import { SanityProject } from "@/types";
import { Project } from "./project";

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

  function handleDivideProjects(projects: SanityProject[]) {
    return projects.reduce(
      (
        acc: { featured: SanityProject[]; notFeatured: SanityProject[] },
        project,
      ) => {
        if (project.featured === true) {
          acc.featured.push(project);
        } else {
          acc.notFeatured.push(project);
        }
        return acc;
      },
      { featured: [], notFeatured: [] },
    );
  }

  const { featured, notFeatured } = handleDivideProjects(projects);

  return (
    <>
      {featured.map((project, index) => (
        <Project
          type="featured"
          key={project._id}
          name={project.name}
          company={project.company}
          companyLink={project.companyLink}
          shortDescription={project.shortDescription}
          cover={project.coverUrl}
          stack={project.stack}
          link={`projects/${project.slug.current}`}
          reverse={index % 2 !== 0}
        />
      ))}

      {notFeatured.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Todos os projetos</h2>
          <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {notFeatured.map((project) => (
              <Project
                type="regular"
                key={project._id}
                name={project.name}
                company={project.company}
                companyLink={project.companyLink}
                shortDescription={project.shortDescription}
                cover={project.coverUrl}
                stack={project.stack}
                link={`projects/${project.slug.current}`}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
