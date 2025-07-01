import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { siteConfig } from "@/config/site";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Lattes } from "../../public/icons";

export default function Social() {
  return (
    <div className="flex gap-3.5">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={siteConfig.links.github} target="_blank">
            <Github className="transition-colors duration-200 hover:text-blue-500" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>Ver Github</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={siteConfig.links.linkedin} target="_blank">
            <Linkedin className="transition-colors duration-200 hover:text-blue-500" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>Ver LinkedIn</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={siteConfig.links.instagram} target="_blank">
            <Instagram className="transition-colors duration-200 hover:text-blue-500" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>Ver Instagram</TooltipContent>
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
        <TooltipContent>Ver Lattes</TooltipContent>
      </Tooltip>
    </div>
  );
}
