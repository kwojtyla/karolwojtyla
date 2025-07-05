"use client";
import LastArticle from "@/components/last-article";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { WidthWrapper } from "@/components/width-wrapper";
import { Download } from "lucide-react";
import Image from "next/image";
import Social from "@/components/social";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

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

            <LastArticle
              placeholder={t("article-placeholder")}
              title="Passive View: Simplificando a separação entre lógica e interface no desenvolvimento de interfaces"
              link="/"
            />

            <Social />

            <p className="text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet. Qui natus accusamus ea eveniet
              similique ut odio molestiae quo doloribus perferendis non eaque
              <span className="text-primary"> rerum</span>! Ut iure assumenda At
              corrupti aspernatur nam ipsam esse est facilis nemo.
              <br />
              <br />
              Ut fugiat accusamus ut enim tempore quo voluptate incidunt nam
              voluptate repudiandae quo dicta dignissimos ea repellat sapiente.
              Est eligendi dignissimos est quia laboriosam sed tempora neque vel
              numquam sunt qui iste quia!
              <br />
              <br />
              Ea quibusdam accusamus et ratione adipisci qui cumque molestias et
              totam molestiae. Sit accusantium ipsum aut reprehenderit ipsam et
              labore beatae 33 alias expedita ab eveniet natus. Eum quas harum
              et ipsa mollitia ab molestiae dolorum qui dolores totam.
            </p>

            <div className="flex items-center gap-2">
              <Button variant="default">{t("cta-button")}</Button>
              <Button variant="ghost">
                <Download /> {t("resume-button")}
              </Button>
            </div>
          </section>
        </WidthWrapper>
      </main>
    </>
  );
}
