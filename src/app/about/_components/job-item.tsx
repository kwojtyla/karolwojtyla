"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Job } from "@/types";
import Link from "next/link";

type JobItemProps = Pick<
  Job,
  | "title"
  | "company"
  | "type"
  | "description"
  | "startYear"
  | "endYear"
  | "className"
>;

export default function JobItem({
  title,
  company,
  type,
  description,
  startYear,
  endYear,
  className,
}: JobItemProps) {
  return (
    <div className={cn("", className)}>
      <div className="flex items-center justify-between">
        <h5 className="text-base font-bold">{title}</h5>
        <p className="text-sm text-gray-500 dark:text-gray-200">{`${startYear} - ${endYear}`}</p>
      </div>
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={`${company.link}`}
              target="_blank"
              className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-blue-500 dark:text-gray-200"
            >
              {company.name}
            </Link>
          </TooltipTrigger>
          <TooltipContent>Ir para o site da empresa</TooltipContent>
        </Tooltip>
        {" | "}
        <span className="text-sm text-gray-500 dark:text-gray-200">{type}</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-200">{description}</p>
    </div>
  );
}
