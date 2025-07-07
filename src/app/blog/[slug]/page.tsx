import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { PageWrapper } from "@/components/page";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );
  const postImageUrl = post?.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main>
          <Link href="/" className="hover:underline">
            ← Back to posts
          </Link>
          <h1 className="mb-8 text-4xl font-bold">{post?.title}</h1>
          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post?.title}
              className="aspect-video rounded-xl"
              width="550"
              height="310"
            />
          )}
          <div className="prose space-y-6">
            <p>Published: {new Date(post?.publishedAt).toLocaleDateString()}</p>
            {Array.isArray(post?.body) && <PortableText value={post?.body} />}
          </div>
        </main>
        <Footer />
      </PageWrapper>
    </>
  );
}
