import { AnimatedAccordion } from "@/components/accordion";
import { ImageCard } from "@/components/image-card";
import { faqQuetions } from "@/data/faq-questions";
import { ShieldQuestion } from "lucide-react";

export const metadata = {
  title: "FAQ",
  description:
    "Tenha todas as suas dúvidas respondidas de forma clara e objetiva. Confira as perguntas mais frequentes sobre nossos serviços de entregas rápidas e fretes com caminhões pequenos. Aqui você encontra informações sobre prazos, áreas atendidas e muito mais!",
};

export default function Faq() {
  return (
    <main className="container min-h-[70dvh] my-14 p-4">
      <h1 className="text-xl md:text-6xl text-secondary flex items-center md:justify-center gap-1 uppercase tracking-tighter font-bold text-nowrap">
        <span className="md:hidden">
          <ShieldQuestion />
        </span>
        Perguntas Frequentes
      </h1>

      <div className="flex md:items-start justify-between gap-6">
        <div className="w-full pt-8 md:pt-14 flex flex-col gap-4">
          <AnimatedAccordion items={faqQuetions} />
        </div>

        <ImageCard imageName="faq.svg" />
      </div>
    </main>
  );
}
