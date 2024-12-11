import { AnimatedAccordion } from "@/components/faq-tips/accordion";
import { ImageCard } from "@/components/faq-tips/image-card";
import { Title } from "@/components/faq-tips/title";
import { tips } from "@/data/tips";
import { Lightbulb } from "lucide-react";

export const metadata = {
  title: "Dicas",
  description:
    "Precisa de um transporte ágil e seguro? Descubra dicas práticas para planejar mudanças, embalar mercadorias e otimizar suas entregas. Garantimos que você terá a melhor experiência ao utilizar nossos serviços!",
};

export default function DicasUteis() {
  return (
    <main className="container min-h-[70dvh] my-14 p-4">
      <Title icon={<Lightbulb />} text="Dicas Úteis" />
      <div className="flex md:items-start justify-between gap-6">
        <div className="w-full pt-8 md:pt-14 flex flex-col gap-4">
          <AnimatedAccordion items={tips} />
        </div>

        <ImageCard imageName="tips.svg" />
      </div>
    </main>
  );
}
