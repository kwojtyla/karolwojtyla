import { Navbar } from "@/components/navbar";
import { WidthWrapper } from "@/components/width-wrapper";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <WidthWrapper className="flex flex-col justify-center items-center h-screen">
          Contact
        </WidthWrapper>
      </main>
    </>
  );
}
