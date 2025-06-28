import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Home
      </main>
    </div>
  );
}
