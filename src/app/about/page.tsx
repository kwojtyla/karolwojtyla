import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  PageHeader,
  PageHeadline,
  PagePresentation,
  PageWrapper,
} from "@/components/page";
import JobItem from "./_components/job-item";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import EducationItem from "./_components/education-item";
import CertificationItem from "./_components/certification-item";
import { certifications } from "@/data/certifications";
import LetsConnect from "@/components/lets-connect";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <PageWrapper className="flex flex-col gap-8">
          <PageHeadline>
            <PageHeader>
              Lorem ipsum dolor sit amet consectetur. Amet nisl lacus pharetra
              dolor tincidunt eget interdum pellentesque.
            </PageHeader>
            <PagePresentation>
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
            </PagePresentation>
          </PageHeadline>
          <section className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Experiências profissionais</h2>
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
            <h2 className="text-2xl font-bold">Formação acadêmica</h2>
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
            <h2 className="text-2xl font-bold">Certificações</h2>
            <div className="flex flex-col gap-3 md:flex-row md:gap-4">
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
