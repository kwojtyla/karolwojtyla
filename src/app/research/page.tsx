import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  PageHeader,
  PageHeadline,
  PagePresentation,
  PageWrapper,
} from "@/components/page";
import PaperItem from "./_components/paper-item";
import LetsConnect from "@/components/lets-connect";
import { useLocale, useTranslations } from "next-intl";
import { getResearch } from "@/data/research";

export default function Research() {
  const locale = useLocale();
  const research = getResearch(locale);
  const t = useTranslations("Research");

  return (
    <>
      <Navbar />
      <main>
        <PageWrapper className="flex flex-col gap-8">
          <PageHeadline>
            <PageHeader>{t("headline")}</PageHeader>
            <PagePresentation>{t("presentation")}</PagePresentation>
          </PageHeadline>
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{t("authored-title")}</h2>
            {research.asAuthor.map((paper) => (
              <PaperItem
                key={paper.id}
                title={paper.title}
                category={paper.category}
                year={paper.year}
                event={paper.event}
                link={paper.link}
              />
            ))}
          </section>
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{t("coauthored-title")}</h2>
            {research.asCoauthor.map((paper) => (
              <PaperItem
                key={paper.id}
                title={paper.title}
                category={paper.category}
                year={paper.year}
                event={paper.event}
                link={paper.link}
              />
            ))}
          </section>
          <LetsConnect />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
