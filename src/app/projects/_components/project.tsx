"use client";

import { TipLink } from "@/components/tip-link";
import { Badge } from "@/components/ui/badge";
import { parseStack } from "@/utils/parse-stack";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

interface FeaturedProjectProps {
  type: "featured" | "regular";
  name?: string;
  company?: string;
  companyLink?: string;
  shortDescription?: string;
  stack?: string;
  cover?: string;
  link?: string;
  reverse?: boolean;
}

export function Project({
  type = "featured",
  name,
  company,
  companyLink,
  shortDescription,
  stack,
  cover,
  link,
  reverse = false,
}: FeaturedProjectProps) {
  const stackList = parseStack(stack || "React, Nextjs, Tailwind");
  const isFeatured = type === "featured";
  const isRegular = type === "regular";

  const containerClasses = clsx("flex w-full items-center", {
    "flex-row": isFeatured,
    "flex-row-reverse": isFeatured && reverse,

    "flex-col gap-4 rounded-lg border border-gray-300 p-4": isRegular,
  });

  const imageContainerClasses = clsx("relative rounded-lg", {
    "h-96 w-1/2": isFeatured,

    "h-64 w-full": isRegular,
  });

  const contentContainerClasses = clsx(
    "flex flex-col gap-3 text-base text-gray-500 dark:text-gray-300",
    {
      "w-1/2": isFeatured,
      "pl-12": isFeatured && !reverse,
      "pr-12": isFeatured && reverse,

      "w-full": isRegular,
    },
  );

  const badgeContainerClasses = clsx("flex gap-1", {
    "order-5": isFeatured,
    "order-1": isRegular,
  });

  return (
    <div className={containerClasses}>
      <div className={imageContainerClasses}>
        <Image
          src={
            cover ||
            "https://cdn.sanity.io/images/dxlzuxy8/production/960f73a8da823e9799cca35fcd09120cc6718819-640x390.jpg"
          }
          alt="Teste"
          className="rounded-lg object-cover"
          fill
        />
      </div>

      <div className={contentContainerClasses}>
        <TipLink
          href={`${link}` || "/"}
          tip="Abrir página do projeto"
          className="order-0 w-fit"
        >
          <h2
            className={clsx(
              "text-primary w-fit font-bold transition-colors duration-200 hover:text-blue-500",
              {
                "text-3xl": isFeatured,
                "text-2xl": isRegular,
              },
            )}
          >
            {name || "Lorem ipsum"}
          </h2>
        </TipLink>

        <p
          className={clsx({
            "text-base": isFeatured,
            "text-sm": isRegular,
          })}
        >
          Feito na{" "}
          <TipLink
            href={`${companyLink}` || "/"}
            target="_blank"
            tip="Abrir site da empresa"
            className="text-primary order-3 underline underline-offset-2"
          >
            {company || "Lorem"}
          </TipLink>
        </p>

        <p
          className={clsx("order-4", {
            "text-base": isFeatured,
            "text-sm": isRegular,
          })}
        >
          {shortDescription ||
            "Lorem ipsum dolor sit amet. Qui natus accusamus ea eveniet similique ut odio molestiae quo doloribus perferendis non eaque rerum! Ut iure assumenda At corrupti aspernatur nam ipsam esse est facilis nemo."}
        </p>

        <div className={badgeContainerClasses}>
          {stackList.map((stack) => (
            <Badge
              className="rounded-full border border-blue-500 bg-blue-50 text-nowrap text-blue-500 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-400"
              key={stack}
            >
              {stack}
            </Badge>
          ))}
        </div>

        <TipLink
          href={`${link}`}
          tip="Abrir página do projeto"
          className="text-primary order-6 flex w-fit items-center gap-1 underline underline-offset-2 transition-all duration-200 hover:gap-2"
        >
          <span
            className={clsx({
              "text-base": isFeatured,
              "text-sm": isRegular,
            })}
          >
            Ver case
          </span>
          <ArrowRight size={16} className="mt-1" />
        </TipLink>
      </div>
    </div>
  );
}
