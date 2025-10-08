import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  PageHeader,
  PageHeadline,
  PagePresentation,
  PageWrapper,
} from "@/components/page";
import JobItem from "./_components/job-item";
import EducationItem from "./_components/education-item";
import CertificationItem from "./_components/certification-item";
import { certifications } from "@/data/certifications";
import { LetsConnect } from "@/components/lets-connect";
import { useLocale, useTranslations } from "next-intl";
import { getExperiences } from "@/data/experience";
import { getEducation } from "@/data/education";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

export default function About() {
  const t = useTranslations("About");
  const locale = useLocale();
  const experiences = getExperiences(locale);
  const education = getEducation(locale);

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
            <h2 className="text-2xl font-bold">{t("experiences-title")}</h2>
            <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-10 md:gap-y-4">
              {experiences.map((experience) => (
                <JobItem
                  key={experience.id}
                  title={experience.title}
                  company={experience.company}
                  type={experience.type}
                  startYear={experience.startYear}
                  endYear={experience.endYear}
                  description={experience.description}
                  className={experience.className}
                />
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{t("education-title")}</h2>
            {education.map((item) => (
              <EducationItem
                key={item.id}
                title={item.title}
                institution={item.institution}
                startYear={item.startYear}
                endYear={item.endYear}
              />
            ))}
          </section>
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{t("certifications-title")}</h2>
            <Carousel className="hidden md:block">
              <CarouselContent className="flex flex-col gap-3 md:ml-0.5 md:flex-row md:gap-4">
                {certifications.map((certification) => (
                  <CertificationItem
                    key={certification.id}
                    title={certification.title}
                    issuer={certification.issuer}
                    badge={certification.badge}
                    badgeUrl={certification.badgeUrl}
                    startYear={certification.startYear}
                    endYear={certification.endYear}
                  />
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex flex-col gap-3 md:hidden">
              {certifications.map((certification) => (
                <CertificationItem
                  key={certification.id}
                  title={certification.title}
                  issuer={certification.issuer}
                  badge={certification.badge}
                  badgeUrl={certification.badgeUrl}
                  startYear={certification.startYear}
                  endYear={certification.endYear}
                />
              ))}
            </div>
          </section>
          <LetsConnect />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
