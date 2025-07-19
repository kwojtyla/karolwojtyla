"use client";

import { useEffect, useState } from "react";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { SanityProject } from "@/types";
import { Project } from "./project";

interface ProjectsListClientProps {
  projects: SanityProject[];
}

export function ProjectsListClient({ projects }: ProjectsListClientProps) {
  const [isMounted, setIsMounted] = useState(false);
  const redirectToLink = useFeatureFlagEnabled("redirect-to-project-page");

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  if (!isMounted) {
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
          link={
            redirectToLink
              ? project.projectLink
              : `projects/${project.slug.current}`
          }
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
                link={
                  redirectToLink
                    ? project.projectLink
                    : `projects/${project.slug.current}`
                }
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
