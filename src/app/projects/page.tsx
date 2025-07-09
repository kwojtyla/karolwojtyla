import { Navbar } from "@/components/navbar";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import {
  PageHeader,
  PageHeadline,
  PagePresentation,
  PageWrapper,
} from "@/components/page";
import { FeaturedProject } from "./_components/featured-project";
import Footer from "@/components/footer";
import { LetsConnect } from "@/components/lets-connect";

const options = { next: { revalidate: 30 } };

const PROJECTS_QUERY = `*[
  _type == "project" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  "coverUrl": cover.asset->url,
  shortDescription,
  name,
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

export default async function Projects() {
  const projects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    options,
  );
  console.log(projects);
  return (
    <>
      <Navbar />
      <main>
        <PageWrapper className="flex flex-col gap-8">
          <PageHeadline>
            <PageHeader>
              Lorem ipsum dolor sit amet consectetur. Amet nisl lacus pharetra
              dolor tincidunt eget interdum pellentesque.
            </PageHeader>
            <PagePresentation>
              Lorem ipsum dolor sit amet. Qui natus accusamus ea eveniet
              similique ut odio molestiae quo doloribus perferendis non eaque
              <span className="text-primary"> rerum</span>! Ut iure assumenda At
              corrupti aspernatur nam ipsam esse est facilis nemo.
            </PagePresentation>
          </PageHeadline>

          {projects.map((project, index) => (
            <FeaturedProject
              key={project.name}
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
          <LetsConnect />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
