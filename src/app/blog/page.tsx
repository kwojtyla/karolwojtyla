import { Navbar } from "@/components/navbar";
import { PageWrapper } from "@/components/page";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main>
        <PageWrapper>Blog</PageWrapper>
      </main>
    </>
  );
}
