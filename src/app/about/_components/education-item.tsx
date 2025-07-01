"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Degree } from "@/types";
import Link from "next/link";

type EducationItemProps = Pick<
  Degree,
  "title" | "institution" | "startYear" | "endYear"
> & { className?: string };

export default function EducationItem({
  title,
  institution,
  startYear,
  endYear,
  className,
}: EducationItemProps) {
  return (
    <div className={cn("", className)}>
      <h5 className="text-base font-bold">{title}</h5>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={`${institution.link}`}
            target="_blank"
            className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-blue-500 dark:text-gray-200"
          >
            {institution.name}
          </Link>
        </TooltipTrigger>
        <TooltipContent>Ir para o site da instituição</TooltipContent>
      </Tooltip>

      <p className="text-sm text-gray-500 dark:text-gray-200">{`${startYear} - ${endYear}`}</p>
    </div>
  );
}
