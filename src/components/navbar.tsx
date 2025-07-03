"use client";

import { PAGES } from "@/config/pages";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { LogoIcon } from "../../public/icons";
import { Button, buttonVariants } from "./ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ThemeButton } from "./theme-button";
import BrazilFlag from "../../public/icons/brazil-flag";
import USFlag from "../../public/icons/us-flag";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";

export function Navbar() {
  const actualRoute = usePathname();

  return (
    <header className="bg-background supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6 md:px-11">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/">
              <LogoIcon size={32} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Ir para a Home</TooltipContent>
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
              <Button
                className={buttonVariants({
                  className:
                    "bg-secondary hover:bg-secondary max-w-40 min-w-40 justify-start rounded-lg font-normal text-gray-400 shadow-none hover:text-gray-400 focus:outline-none",
                })}
              >
                <Search size={20} />
                Pesquisar
              </Button>
            </TooltipTrigger>
            <TooltipContent>Pesquisar no site</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ThemeButton />
            </TooltipTrigger>
            <TooltipContent>Mudar tema</TooltipContent>
          </Tooltip>
          <Tooltip>
            <Select defaultValue="pt-br">
              <TooltipTrigger asChild>
                <SelectTrigger>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
              </TooltipTrigger>
              <SelectContent>
                <SelectItem value="pt-br">
                  <BrazilFlag size={24} />
                </SelectItem>
                <SelectItem value="en">
                  <USFlag size={24} />
                </SelectItem>
              </SelectContent>
            </Select>
            <TooltipContent>Mudar idioma</TooltipContent>
          </Tooltip>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
