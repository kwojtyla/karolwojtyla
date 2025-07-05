import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LetsConnect() {
  const t = useTranslations("LetsConnect");

  return (
    <section className="flex max-w-lg flex-col gap-3">
      <p className="text-xl font-bold">{t("title")}</p>
      <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
        {t.rich("description", {
          linkedin: (chunks) => (
            <Link
              href={siteConfig.links.linkedin}
              className="text-primary underline"
            >
              {chunks}
            </Link>
          ),
          email: (chunks) => (
            <Link href={`mailto:${chunks}`} className="text-primary underline">
              {chunks}
            </Link>
          ),
        })}
      </p>
      <div className="flex gap-2">
        <Link
          href="mailto:karolwojtyla360@gmail.com"
          className="flex items-center gap-2 rounded-lg border border-blue-500 bg-blue-50 px-3 py-1.5 text-xs leading-6 text-nowrap text-blue-500 transition-colors duration-200 hover:bg-blue-100 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-300"
        >
          <Mail />
          {t("emailButton")}
        </Link>
        <Link
          href={siteConfig.links.instagram}
          className="flex items-center gap-2 rounded-lg border border-blue-500 bg-blue-50 px-3 py-1.5 text-xs leading-6 text-nowrap text-blue-500 transition-colors duration-200 hover:bg-blue-100 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-300"
        >
          <Instagram />
          {t("dmButton")}
        </Link>
      </div>
    </section>
  );
}
