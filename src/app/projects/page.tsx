import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import {
  PageHeader,
  PageHeadline,
  PagePresentation,
  PageWrapper,
} from "@/components/page";

const options = { next: { revalidate: 30 } };

const PROJECTS_QUERY = `*[
  _type == "project" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
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

          <ul className="flex flex-col gap-y-4">
            {projects.map((project) => (
              <li className="hover:underline" key={project._id}>
                <Link href={`/projects/${project.slug.current}`}>
                  <h2 className="text-xl font-semibold">{project.name}</h2>
                  <p>{new Date(project.publishedAt).toLocaleDateString()}</p>
                </Link>
              </li>
            ))}
          </ul>
        </PageWrapper>
      </main>
    </>
  );
}
