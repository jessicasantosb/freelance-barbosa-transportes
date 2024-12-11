import { Lightbulb } from "lucide-react";

import { AnimatedAccordion } from "@/components/faq-tips/accordion";
import { ImageCard } from "@/components/faq-tips/image-card";
import { tips } from "@/data/tips";

export const metadata = {
  title: "Dicas",
  description:
    "Precisa de um transporte ágil e seguro? Descubra dicas práticas para planejar mudanças, embalar mercadorias e otimizar suas entregas. Garantimos que você terá a melhor experiência ao utilizar nossos serviços!",
};

export default function DicasUteis() {
  return (
    <main className="container min-h-[70dvh] my-14 p-4">
      <div className="overflow-hidden">
        <h1 className="text-xl md:text-6xl text-tertiary flex items-center md:justify-center gap-1 uppercase tracking-tighter font-bold text-nowrap animation-title">
          <span className="md:hidden">
            <Lightbulb />
          </span>
          Dicas Úteis
        </h1>
      </div>

      <div className="flex md:items-start justify-between gap-6">
        <div className="w-full pt-8 md:pt-14 flex flex-col gap-4">
          <AnimatedAccordion items={tips} />
        </div>

        <ImageCard imageName="tips.svg" />
      </div>
    </main>
  );
}
