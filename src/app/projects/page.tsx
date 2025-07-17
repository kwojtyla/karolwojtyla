import { Navbar } from "@/components/navbar";

import {
  PageHeader,
  PageHeadline,
  PagePresentation,
  PageWrapper,
} from "@/components/page";
import Footer from "@/components/footer";
import { LetsConnect } from "@/components/lets-connect";
import { useTranslations } from "next-intl";
import { ProjectsList } from "./_components/projects-list";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <>
      <Navbar />
      <main>
        <PageWrapper className="flex flex-col gap-8">
          <PageHeadline>
            <PageHeader>{t("headline")}</PageHeader>
            <PagePresentation>{t("presentation")}</PagePresentation>
          </PageHeadline>

          <ProjectsList />

          <LetsConnect />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
