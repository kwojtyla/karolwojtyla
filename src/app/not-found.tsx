import { Navbar } from "@/components/navbar";
import { PageWrapper } from "@/components/page";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <>
      <Navbar />
      <main>
        <PageWrapper className="flex h-[calc(100vh-65px)] flex-col items-center justify-center gap-3">
          <Badge>404</Badge>
          <p className="text-center text-5xl font-bold">{t("headline")}</p>
          <p className="text-center text-base text-gray-500 dark:text-gray-200">
            {t("description")}
          </p>
          <Link className={buttonVariants({ variant: "default" })} href="/">
            <ArrowLeft />
            {t("button")}
          </Link>
        </PageWrapper>
      </main>
    </>
  );
}
