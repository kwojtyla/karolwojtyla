import { Navbar } from "@/components/navbar";
import { WidthWrapper } from "@/components/width-wrapper";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <WidthWrapper className="flex h-screen flex-col items-center justify-center">
          Contact
        </WidthWrapper>
      </main>
    </>
  );
}
