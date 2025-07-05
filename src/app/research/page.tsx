import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  PageHeader,
  PageHeadline,
  PagePresentation,
  PageWrapper,
} from "@/components/page";
import PaperItem from "./_components/paper-item";
import { research } from "@/data/research";
import LetsConnect from "@/components/lets-connect";

export default function Research() {
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
            <h2 className="text-2xl font-bold">Publicações de minha autoria</h2>
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
            <h2 className="text-2xl font-bold">
              Publicações de minha co-autoria
            </h2>
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
