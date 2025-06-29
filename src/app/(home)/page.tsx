"use client";
import LastArticle from "@/components/last-article";
import { Navbar } from "@/components/navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import { WidthWrapper } from "@/components/width-wrapper";
import { Download, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Lattes } from "../../../public/icons";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <WidthWrapper className="flex flex-col p-8 justify-center lg:p-0 lg:h-[calc(100vh-65px)]">
          <section className="flex max-w-5xl flex-col gap-5 pl-2">
            <div className="space-y-2 text-base">
              <div className="relative size-20 border-2 border-gray-950 rounded-full">
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
                  Engenheiro de Software
                </p>
              </div>
            </div>

            <div className="text-2xl font-bold md:text-5xl md:leading-14">
              Oi! Eu sou o Karol - Engenheiro de Software apaixonado por
              transformar experiências digitais com tecnologia 💡
            </div>
            <LastArticle
              title="Passive View: Simplificando a separação entre lógica e interface no desenvolvimento de interfaces"
              link="/"
            />
            <div className="flex gap-3.5">
              <Link href={siteConfig.links.github}>
                <Github />
              </Link>
              <Link href={siteConfig.links.linkedin}>
                <Linkedin />
              </Link>
              <Link href={siteConfig.links.instagram}>
                <Instagram />
              </Link>
              <Link href={siteConfig.links.lattes}>
                <Lattes size={24} />
              </Link>
            </div>
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
            <div className="flex gap-2 items-center ">
              <Button variant="default">Vamos nos conhecer!</Button>
              <Button variant="ghost">
                <Download /> Baixar currículo
              </Button>
            </div>
          </section>
        </WidthWrapper>
      </main>
    </>
  );
}
