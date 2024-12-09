import { FaqIcon } from "@/components/faq-icon";
import { faqQuetions } from "@/data/faq-questions";
import { ShieldQuestion } from "lucide-react";
import Image from "next/image";

export default function Faq() {
  return (
    <main className="min-h-[70dvh] mt-20 mb-14 p-4">
      <h1 className="text-xl md:text-6xl flex items-center md:justify-center gap-1 uppercase tracking-tighter font-bold text-nowrap">
        <span className="md:hidden">
          <ShieldQuestion />
        </span>
        Perguntas Frequentes
      </h1>

      <div className="flex md:items-center justify-between gap-6">
        <div className="w-full">
          <div className="pt-8 md:pt-14 flex flex-col gap-4">
            {faqQuetions.map(({ question, answer }) => (
              <div key={question}>
                <h3 className="pb-2 text-xl md:text-3xl text-secondary">
                  {question}
                </h3>
                <p className="text-md md:text-lg">{answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block w-96 lg:w-[60%] h-96">
          <Image
            alt="icon"
            src={"/images/faq.svg"}
            fill
            className="absolute object-cover"
          />
        </div>
      </div>
    </main>
  );
}
