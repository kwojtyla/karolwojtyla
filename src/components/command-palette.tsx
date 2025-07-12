"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CornerDownLeft,
  Search,
} from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useLocale, useTranslations } from "next-intl";
import { getPages } from "@/config/pages";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Input } from "./ui/input";

export function CommandPalette() {
  const locale = useLocale();
  const t = useTranslations("CommandPalette");
  const PAGES = [{ label: "Home", href: "/" }, ...getPages(locale)];
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredPages = PAGES.filter((page) =>
    page.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    setHoveredIndex(0);
  }, [searchQuery]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHoveredIndex((prev) =>
            prev < filteredPages.length - 1 ? prev + 1 : 0,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHoveredIndex((prev) =>
            prev > 0 ? prev - 1 : filteredPages.length - 1,
          );
          break;
        case "Enter":
          e.preventDefault();
          if (filteredPages[hoveredIndex]) {
            const linkElement = document.querySelector(
              `[data-page-index="${hoveredIndex}"]`,
            ) as HTMLAnchorElement;
            if (linkElement) {
              linkElement.click();
              setIsOpen(false);
            }
          }
          break;
        case "Escape":
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, hoveredIndex, filteredPages]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setSearchQuery("");
      setHoveredIndex(0);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          className={buttonVariants({
            className:
              "bg-secondary hover:bg-secondary max-w-40 min-w-40 justify-between rounded-lg font-normal text-gray-400 shadow-none hover:text-gray-400 focus:outline-none",
          })}
        >
          <div className="flex items-center gap-2">
            <Search size={20} />
            {t("label")}
          </div>
          <div className="flex items-center gap-1">
            <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-3 p-0">
        <DialogHeader className="px-4 pt-4">
          <DialogTitle>{t("title")}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 px-4 pb-4 md:pb-0">
          <Input
            ref={inputRef}
            icon={<Search size={16} />}
            placeholder={t("search-placeholder")}
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-500">{t("pages-subtitle")}</p>
            <div className="flex w-full flex-col gap-2">
              {filteredPages.length > 0 ? (
                filteredPages.map((page, index) => (
                  <Link
                    key={page.label}
                    href={page.href}
                    data-page-index={index}
                    className={`flex w-full items-center gap-1.5 rounded-lg p-2 text-sm font-semibold transition-all duration-300 ${
                      hoveredIndex === index
                        ? "bg-secondary"
                        : "hover:bg-secondary"
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() => setIsOpen(false)}
                  >
                    <ArrowRight
                      size={14}
                      className={
                        hoveredIndex === index
                          ? "ml-1 transition-all duration-300"
                          : "ml-0"
                      }
                    />
                    {page.label}
                  </Link>
                ))
              ) : (
                <div className="flex w-full items-center justify-center py-8 text-sm text-gray-500">
                  {t("no-results")}
                </div>
              )}
            </div>
          </div>
        </div>
        <DialogFooter className="dark:bg-card hidden w-full rounded-b-lg bg-gray-200 px-4 py-2 text-xs sm:justify-start md:flex">
          <div className="bg-primary-foreground dark:border-muted flex size-4 items-center justify-center rounded-xs border border-gray-100">
            <CornerDownLeft size={8} />
          </div>
          <span className="font-medium text-gray-500">
            {t("enter-instruction")}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <div className="bg-primary-foreground dark:border-muted flex size-4 items-center justify-center rounded-xs border">
              <ArrowUp size={8} />
            </div>
            <div className="bg-primary-foreground dark:border-muted flex size-4 items-center justify-center rounded-xs border border-gray-100">
              <ArrowDown size={8} />
            </div>
            <span className="font-medium text-gray-500">
              {t("navigate-instruction")}
            </span>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
