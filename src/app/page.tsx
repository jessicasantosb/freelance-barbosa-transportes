import { Footer, Header, HomeImage, HomeMessage } from "@/components";

export default async function Home() {
  return (
    <main className="container px-2 py-10 md:p-10">
      <Header />
      <div className="my-14 flex items-center gap-6">
        <HomeMessage />
        <HomeImage />
      </div>
      <Footer />
    </main>
  );
}
