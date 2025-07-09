import { siteConfig } from "@/config/site";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Lattes } from "../../public/icons";
import { useTranslations } from "next-intl";
import { TipLink } from "./tip-link";

export function Social() {
  const t = useTranslations("Tooltips");
  return (
    <div className="flex gap-3.5">
      <TipLink
        href={siteConfig.links.github}
        target="_blank"
        tip={t("social.github")}
      >
        <Github className="transition-colors duration-200 hover:text-blue-500" />
      </TipLink>
      <TipLink
        href={siteConfig.links.linkedin}
        target="_blank"
        tip={t("social.linkedin")}
      >
        <Linkedin className="transition-colors duration-200 hover:text-blue-500" />
      </TipLink>
      <TipLink
        href={siteConfig.links.instagram}
        target="_blank"
        tip={t("social.instagram")}
      >
        <Instagram className="transition-colors duration-200 hover:text-blue-500" />
      </TipLink>
      <TipLink
        href={siteConfig.links.lattes}
        target="_blank"
        tip={t("social.lattes")}
      >
        <Lattes
          size={24}
          className="transition-colors duration-200 hover:text-blue-500"
        />
      </TipLink>
    </div>
  );
}
