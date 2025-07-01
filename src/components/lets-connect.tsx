import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function LetsConnect() {
  return (
    <section className="flex max-w-lg flex-col gap-3">
      <p className="text-xl font-bold">Vamos nos conectar!</p>
      <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
        Se quiser conversar sobre desenvolvimento, tecnologia, consultoria ou
        construção de produtos, fique à vontade para me chamar no{" "}
        <Link
          href={siteConfig.links.linkedin}
          className="text-primary underline"
        >
          LinkedIn
        </Link>{" "}
        ou enviar um e-mail para{" "}
        <Link
          href="mailto:karolwojtyla360@gmail.com"
          className="text-primary underline"
        >
          contato@karolwojtyla.dev
        </Link>
        .
      </p>
      <div className="flex gap-2">
        <Link
          href="mailto:karolwojtyla360@gmail.com"
          className="flex items-center gap-2 rounded-lg border border-blue-500 bg-blue-50 px-3 py-1.5 text-xs leading-6 text-blue-500 transition-colors duration-200 hover:bg-blue-100 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-300"
        >
          <Mail />
          Me mande um e-mail
        </Link>
        <Link
          href={siteConfig.links.instagram}
          className="flex items-center gap-2 rounded-lg border border-blue-500 bg-blue-50 px-3 py-1.5 text-xs leading-6 text-blue-500 transition-colors duration-200 hover:bg-blue-100 dark:border-blue-400 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-300"
        >
          <Instagram />
          Me mande uma DM
        </Link>
      </div>
    </section>
  );
}
