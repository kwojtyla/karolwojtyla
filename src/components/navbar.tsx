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
import { usePathname, useSearchParams } from "next/navigation";

export function Navbar() {
  const actualRoute = usePathname();

  console.log(actualRoute);
  return (
    <header className="bg-background supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex px-6 md:px-11 h-16 items-center justify-between">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/">
              <LogoIcon size={32} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Ir para a Home</TooltipContent>
        </Tooltip>

        <nav className="absolute min-w-7xl right-1/2 hidden translate-x-1/2 md:block">
          <ul className="flex gap-2.5">
            {PAGES.map((page) => (
              <li key={page.label}>
                <Link
                  href={page.href}
                  className={`${
                    actualRoute === page.href
                      ? "bg-secondary"
                      : "bg-transparent"
                  } text-sm px-3 py-2 rounded-lg hover:bg-secondary transition-all duration-300`}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex gap-2.5 items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={buttonVariants({
                  className:
                    "rounded-lg font-normal max-w-40 bg-secondary focus:outline-none text-gray-400 min-w-40 justify-start hover:text-gray-400 hover:bg-secondary shadow-none",
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
