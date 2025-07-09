import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Image from "next/image";
import { PageWrapper } from "@/components/page";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import ProjectInfo from "../_components/project-info";
import { LetsConnect } from "@/components/lets-connect";
import { portableTextComponents } from "@/components/portable-text";
import { TipLink } from "@/components/tip-link";

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    PROJECT_QUERY,
    await params,
    options,
  );
  const postImageUrl = post?.logo
    ? urlFor(post.logo)?.width(640).height(640).url()
    : null;
  console.log(post);
  return (
    <>
      <Navbar />
      <main>
        <PageWrapper className="flex flex-col gap-8 pt-8">
          <TipLink
            href="/projects"
            className="flex w-fit items-center gap-1 text-base transition-all duration-200 hover:underline"
            tip="Voltar para Projetos"
          >
            <ArrowLeft size={16} />
            Voltar
          </TipLink>

          <div className="flex flex-col gap-8">
            {postImageUrl && (
              <Image
                src={postImageUrl}
                alt={post?.name}
                className="object-contain"
                width={90}
                height={90}
              />
            )}
            <h1 className="text-4xl font-bold">{post?.name}</h1>
            <ProjectInfo
              companyName={post?.company}
              companyLink={post?.companyLink}
              position={post?.position}
              period={post?.period}
              projectLink={post?.projectLink}
              stack={post?.stack}
            />
          </div>

          <div className="prose">
            {Array.isArray(post?.body) && (
              <PortableText
                value={post?.body}
                components={portableTextComponents}
              />
            )}
          </div>
          <LetsConnect />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
