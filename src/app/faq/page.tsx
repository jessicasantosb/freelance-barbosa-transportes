import { AnimatedAccordion } from "@/components/faq-tips/accordion";
import { ImageCard } from "@/components/faq-tips/image-card";
import { Title } from "@/components/faq-tips/title";
import { faqQuetions } from "@/data/faq-questions";

export const metadata = {
  title: "FAQ",
  description:
    "Tenha todas as suas dúvidas respondidas de forma clara e objetiva. Confira as perguntas mais frequentes sobre nossos serviços de entregas rápidas e fretes com caminhões pequenos. Aqui você encontra informações sobre prazos, áreas atendidas e muito mais!",
};

export default function Faq() {
  return (
    <main className="container min-h-[70dvh] my-14 p-4">
      <Title text="Perguntas Frequentes" />
      <div className="flex md:items-start justify-between gap-6">
        <div className="w-full pt-8 md:pt-14 flex flex-col gap-4">
          <AnimatedAccordion items={faqQuetions} />
        </div>

        <ImageCard imageName="faq.svg" />
      </div>
    </main>
  );
}
