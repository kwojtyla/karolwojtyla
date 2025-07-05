import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { siteConfig } from "@/config/site";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Lattes } from "../../public/icons";
import { useTranslations } from "next-intl";

export default function Social() {
  const t = useTranslations("Tooltips");
  return (
    <div className="flex gap-3.5">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={siteConfig.links.github} target="_blank">
            <Github className="transition-colors duration-200 hover:text-blue-500" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>{t("social.github")}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={siteConfig.links.linkedin} target="_blank">
            <Linkedin className="transition-colors duration-200 hover:text-blue-500" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>{t("social.linkedin")}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={siteConfig.links.instagram} target="_blank">
            <Instagram className="transition-colors duration-200 hover:text-blue-500" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>{t("social.instagram")}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={siteConfig.links.lattes} target="_blank">
            <Lattes
              size={24}
              className="transition-colors duration-200 hover:text-blue-500"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>{t("social.lattes")}</TooltipContent>
      </Tooltip>
    </div>
  );
}
