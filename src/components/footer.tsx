import { PAGES } from "@/config/pages";
import { LogoIcon } from "../../public/icons";
import Link from "next/link";
import Social from "./social";

export default function Footer() {
  return (
    <footer className="bg-card flex w-full flex-col gap-8 border-t border-gray-300 pt-12 dark:border-gray-600">
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
        <div className="bg-accent h-14 w-full rounded-tr-full" />
        <Social />
        <div className="bg-accent h-14 w-full rounded-tl-full" />
      </div>
    </footer>
  );
}
