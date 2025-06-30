import { PAGES } from "@/config/pages";
import { Lattes, LogoIcon } from "../../public/icons";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col gap-8 border-t border-gray-300 bg-gray-100 pt-12">
      <div className="flex flex-col items-center gap-8">
        <LogoIcon size={32} />
        <nav>
          <ul className="flex gap-4 text-sm md:gap-10">
            {PAGES.map((page) => (
              <li key={page.label}>
                <Link href={page.href}>{page.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-center text-sm">
          <p>ⓒ 2025 Karol Wojtyla</p>
          <p>Feito com ☕ e muito ❤️</p>
        </div>
      </div>
      <div className="flex items-center gap-6 md:gap-16">
        <div className="h-14 w-full rounded-tr-full bg-gray-300" />
        <div className="flex gap-3.5">
          <Link href={siteConfig.links.github}>
            <Github />
          </Link>
          <Link href={siteConfig.links.linkedin}>
            <Linkedin />
          </Link>
          <Link href={siteConfig.links.instagram}>
            <Instagram />
          </Link>
          <Link href={siteConfig.links.lattes}>
            <Lattes size={24} />
          </Link>
        </div>
        <div className="h-14 w-full rounded-tl-full bg-gray-300" />
      </div>
    </footer>
  );
}
