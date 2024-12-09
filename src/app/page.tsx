import { HomeImage, HomeMessage } from "@/components";

export default async function Home() {
  return (
    <main className="container my-14 p-4 flex items-center gap-6">
      <HomeMessage />
      <HomeImage />
    </main>
  );
}
