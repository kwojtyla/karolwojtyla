"use client";

import { TipLink } from "@/components/tip-link";
import { Badge } from "@/components/ui/badge";
import { parseStack } from "@/utils/parse-stack";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface FeaturedProjectProps {
  name: string;
  company: string;
  companyLink: string;
  shortDescription: string;
  stack: string;
  cover: string;
  link: string;
}

export function FeaturedProject({
  name,
  company,
  companyLink,
  shortDescription,
  stack,
  cover,
  link,
}: FeaturedProjectProps) {
  const stackList = parseStack(stack);

  return (
    <div className="flex w-full items-center">
      <div className="relative h-96 w-1/2 rounded-lg">
        <Image
          src={cover}
          alt="Teste"
          className="rounded-lg object-contain"
          fill
        />
      </div>
      <div className="flex w-1/2 flex-col gap-3 pl-12 text-base text-gray-500 dark:text-gray-300">
        <h2 className="text-primary text-3xl font-bold">{name}</h2>
        <p>
          Feito na{" "}
          <TipLink
            href={`${companyLink}`}
            target="_blank"
            tip="Abrir site da empresa"
            className="text-primary underline underline-offset-2"
          >
            {company}
          </TipLink>
        </p>
        <p>{shortDescription}</p>
        <div className="flex gap-1">
          {stackList.map((stack) => {
            return (
              <Badge
                className="rounded-full border border-blue-500 bg-blue-50 text-nowrap text-blue-500 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-400"
                key={stack}
              >
                {stack}
              </Badge>
            );
          })}
        </div>
        <TipLink
          href={`${link}`}
          tip="Abrir página do projeto"
          className="text-primary flex w-fit items-center gap-1 underline underline-offset-2 transition-all duration-200 hover:gap-2"
        >
          <span>Ver case</span>
          <ArrowRight size={16} />
        </TipLink>
      </div>
    </div>
  );
}
