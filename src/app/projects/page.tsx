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
            <PagePresentation>
              Lorem ipsum dolor sit amet. Qui natus accusamus ea eveniet
              similique ut odio molestiae quo doloribus perferendis non eaque
              <span className="text-primary"> rerum</span>! Ut iure assumenda At
              corrupti aspernatur nam ipsam esse est facilis nemo.
            </PagePresentation>
          </PageHeadline>

          <ProjectsList />

          <LetsConnect />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
