"use client";

import { TipLink } from "@/components/tip-link";
import { cn } from "@/lib/utils";
import { Degree } from "@/types";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Tooltips");
  return (
    <div className={cn("", className)}>
      <h5 className="text-base font-bold">{title}</h5>

      <TipLink
        href={`${institution.link}`}
        target="_blank"
        tip={t("education-item")}
        className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-blue-500 dark:text-gray-200"
      >
        {institution.name}
      </TipLink>

      <p className="text-sm text-gray-500 dark:text-gray-200">{`${startYear} - ${endYear}`}</p>
    </div>
  );
}
