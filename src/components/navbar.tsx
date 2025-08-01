"use client";

import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { LogoIcon } from "../../public/icons";
import { ThemeButton } from "./theme-button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./language-switcher";
import { getPages } from "@/config/pages";
import { useLocale, useTranslations } from "next-intl";
import { CommandPalette } from "./command-palette";

export function Navbar() {
  const actualRoute = usePathname();
  const locale = useLocale();
  const PAGES = getPages(locale);
  const t = useTranslations("Tooltips");

  return (
    <header className="bg-background supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6 md:px-11">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/">
              <LogoIcon size={32} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>{t("navbar.home")}</TooltipContent>
        </Tooltip>

        <nav className="absolute right-1/2 hidden min-w-7xl translate-x-1/2 lg:block">
          <ul className="flex gap-2.5 pl-8">
            {PAGES.map((page) => (
              <li key={page.label}>
                <Link
                  href={page.href}
                  className={`${
                    actualRoute === page.href
                      ? "bg-secondary"
                      : "bg-transparent"
                  } hover:bg-secondary rounded-lg px-3 py-2 text-sm transition-all duration-300`}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <div role="button">
                <CommandPalette />
              </div>
            </TooltipTrigger>
            <TooltipContent>{t("navbar.search")}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div role="button" tabIndex={0}>
                <ThemeButton />
              </div>
            </TooltipTrigger>
            <TooltipContent>{t("navbar.theme")}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div role="button" tabIndex={0}>
                <LanguageSwitcher />
              </div>
            </TooltipTrigger>
            <TooltipContent className="z-50">
              {t("navbar.language")}
            </TooltipContent>
          </Tooltip>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
