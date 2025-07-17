"use client";
// import LastArticle from "@/components/last-article";
import { Navbar } from "@/components/navbar";
import { buttonVariants } from "@/components/ui/button";
import { WidthWrapper } from "@/components/width-wrapper";
import { Download } from "lucide-react";
import Image from "next/image";
import { Social } from "@/components/social";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    setIsDownloading(true);

    try {
      const filename =
        locale === "pt-br"
          ? "Currículo_Karol Wojtyla.pdf"
          : "Resume_Karol Wojtyla.pdf";

      const response = await fetch(`/api/download?locale=${locale}`);

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } else {
        const errorMessage =
          locale === "pt-br"
            ? "Erro ao baixar o currículo."
            : "Error downloading resume.";
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Download error:", error);
      const errorMessage =
        locale === "pt-br"
          ? "Erro ao baixar o currículo."
          : "Error downloading resume.";
      alert(errorMessage);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <WidthWrapper className="flex flex-col justify-center p-4 lg:h-[calc(100vh-65px)] lg:p-0">
          <section className="flex max-w-5xl flex-col gap-5 pl-2">
            <div className="space-y-2 text-base">
              <div className="border-primary relative size-20 rounded-full border-2">
                <Image
                  src="/images/perfil.jpg"
                  alt="Foto do Karol Wojtyla"
                  className="absolute rounded-full"
                  fill
                />
              </div>
              <div>
                <p className="font-bold">Karol Wojtyla</p>
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  {t("position")}
                </p>
              </div>
            </div>

            <div className="text-2xl font-bold md:text-5xl md:leading-14">
              {t("title")}
            </div>

            {/* <LastArticle
              placeholder={t("article-placeholder")}
              title="Passive View: Simplificando a separação entre lógica e interface no desenvolvimento de interfaces"
              link="/"
            /> */}

            <Social />

            <p className="whitespace-pre-line text-gray-500 dark:text-gray-300">
              {t("presentation")}
            </p>

            <div className="flex items-center gap-2 pb-12 md:pb-0">
              <Link
                href="/about"
                className={buttonVariants({ variant: "default" })}
              >
                {t("cta-button")}
              </Link>
              <LoadingButton
                variant="ghost"
                onClick={handleDownloadResume}
                loading={isDownloading}
                loadingLabel={
                  locale === "pt-br" ? "Baixando..." : "Downloading..."
                }
              >
                <Download />
                {t("resume-button")}
              </LoadingButton>
            </div>
          </section>
        </WidthWrapper>
      </main>
    </>
  );
}
