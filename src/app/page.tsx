import { ClosingCta } from "@/components/home/closing-cta";
import { CoverageRoute } from "@/components/home/coverage-route";
import { DriverCard } from "@/components/home/driver-card";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { ServiceInventory } from "@/components/home/service-inventory";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceInventory />
      <HowItWorks />
      <DriverCard />
      <CoverageRoute />
      <ClosingCta />
    </main>
  );
}
