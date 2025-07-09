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
      <div className="bg-card border-accent flex max-h-28 min-h-28 w-full items-center gap-4 rounded-lg border px-6 py-3 text-left transition-all duration-300 hover:shadow-sm">
        <Image
          src={`${badge}`}
          alt={`Badge da Certificação ${title}`}
          width={80}
          height={95}
        />
        <div>
          <h5 className="text-card-foreground text-base leading-6 font-medium">
            {title}
          </h5>
          <p className="text-muted-foreground text-sm leading-6 font-medium">
            {issuer}
          </p>
          <p className="text-muted-foreground text-sm leading-6 font-normal">{`${startYear} - ${endYear}`}</p>
        </div>
      </div>
    </TipLink>
  );
}
