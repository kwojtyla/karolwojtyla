"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PAGES } from "@/config/pages";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeButton } from "./theme-button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import BrazilFlag from "../../public/icons/brazil-flag";
import USFlag from "../../public/icons/us-flag";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-auto block lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent className="p-12" side="top">
          <SheetHeader className="sr-only">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Todas as páginas do site</SheetDescription>
          </SheetHeader>

          <nav>
            <ul className="text-md flex flex-col items-center gap-6 font-normal">
              {PAGES.map((page) => (
                <li key={page.label}>
                  <Link href={page.href} onClick={() => setOpen(false)}>
                    {page.label}
                  </Link>
                </li>
              ))}
              <div className="flex items-center gap-2.5">
                <ThemeButton />
                <Select defaultValue="pt-br">
                  <SelectTrigger>
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt-br">
                      <BrazilFlag size={24} />
                    </SelectItem>
                    <SelectItem value="en">
                      <USFlag size={24} />
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
