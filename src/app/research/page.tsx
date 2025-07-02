import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  PageHeader,
  PageHeadline,
  PagePresentation,
  PageWrapper,
} from "@/components/page";

export default function Home() {
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
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
