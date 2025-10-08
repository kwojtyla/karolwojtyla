"use client";

import { TipLink } from "@/components/tip-link";
import { Certification } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";

type CertificationItemProps = Pick<
  Certification,
  "title" | "issuer" | "badge" | "badgeUrl" | "startYear" | "endYear"
>;

export default function CertificationItem({
  title,
  issuer,
  badge,
  badgeUrl,
  startYear,
  endYear,
}: CertificationItemProps) {
  const t = useTranslations("Tooltips");
  return (
    <TipLink href={`${badgeUrl}`} target="_blank" tip={t("certification-item")}>
      <div className="bg-card border-accent flex min-h-fit w-full items-center gap-4 rounded-lg border px-6 py-3 text-left transition-all duration-300 hover:shadow-sm md:w-fit">
        <Image
          src={`${badge}`}
          alt={`Badge da Certificação ${title}`}
          width={80}
          height={95}
          className="flex-shrink-0"
        />
        <div className="min-w-0 flex-1 md:flex-shrink-0">
          <h5 className="text-card-foreground text-base leading-6 font-medium md:whitespace-nowrap">
            {title}
          </h5>
          <p className="text-muted-foreground text-sm leading-6 font-medium md:whitespace-nowrap">
            {issuer}
          </p>
          <p className="text-muted-foreground text-sm leading-6 font-normal md:whitespace-nowrap">{`${startYear} - ${endYear}`}</p>
        </div>
      </div>
    </TipLink>
  );
}
