"use client";

import { TipLink } from "@/components/tip-link";
import { cn } from "@/lib/utils";
import { Job } from "@/types";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Tooltips");
  return (
    <div className={cn("", className)}>
      <div className="flex items-center justify-between gap-4">
        <h5 className="text-base font-bold">{title}</h5>
        <p className="text-sm text-nowrap text-gray-500 dark:text-gray-200">{`${startYear} - ${endYear}`}</p>
      </div>
      <div>
        <TipLink
          href={`${company.link}`}
          target="_blank"
          tip={t("job-item")}
          className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-blue-500 dark:text-gray-200"
        >
          {company.name}
        </TipLink>

        {" | "}
        <span className="text-sm text-gray-500 dark:text-gray-200">{type}</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-200">{description}</p>
    </div>
  );
}
