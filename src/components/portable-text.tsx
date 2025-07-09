import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  PortableTextBlockComponent,
  PortableTextListComponent,
  PortableTextListItemComponent,
} from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const portableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageSource & { alt?: string } }) => {
      const imageUrl = value && urlFor(value)?.width(800).url();
      if (!imageUrl) return null;
      return (
        <div className="relative my-4 h-80">
          <Image
            src={imageUrl}
            alt={value.alt || "Imagem do projeto"}
            fill
            className="object-contain"
          />
        </div>
      );
    },
  },
  block: {
    h2: (({ children }) => (
      <h2 className="mb-3 text-2xl font-bold">{children}</h2>
    )) as PortableTextBlockComponent,
    normal: (({ children }) => (
      <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-300">
        {children}
      </p>
    )) as PortableTextBlockComponent,
  },
  list: {
    bullet: (({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-1 text-gray-500 dark:text-gray-300">
        {children}
      </ul>
    )) as PortableTextListComponent,
    number: (({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-1 text-gray-500 dark:text-gray-300">
        {children}
      </ol>
    )) as PortableTextListComponent,
  },
  listItem: {
    bullet: (({ children }) => (
      <li className="text-gray-500 dark:text-gray-300">{children}</li>
    )) as PortableTextListItemComponent,
    number: (({ children }) => (
      <li className="text-gray-500 dark:text-gray-300">{children}</li>
    )) as PortableTextListItemComponent,
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <b className="text-primary dark:text-foreground font-bold">{children}</b>
    ),
    highlight: ({ children }: { children: React.ReactNode }) => (
      <span className="text-primary dark:text-foreground">{children}</span>
    ),
  },
};
