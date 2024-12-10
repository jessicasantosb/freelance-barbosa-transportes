import { HomeImage, HomeMessage } from "@/components";

export default async function Home() {
  return (
    <main className="container my-14 p-4 flex items-center gap-6">
      <div className="absolute inset-0 w-full h-dvh z-40 bg-secondary animation-open-home" />
      <HomeMessage />
      <HomeImage />
    </main>
  );
}
