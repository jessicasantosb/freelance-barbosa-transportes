import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqQuetions } from "@/data/faq-questions";
import { ShieldQuestion } from "lucide-react";
import Image from "next/image";

export default function Faq() {
  return (
    <main className="container min-h-[70dvh] my-14 p-4">
      <h1 className="text-xl md:text-6xl text-muted-foreground dark:text-muted flex items-center md:justify-center gap-1 uppercase tracking-tighter font-bold text-nowrap">
        <span className="md:hidden">
          <ShieldQuestion />
        </span>
        Perguntas Frequentes
      </h1>

      <div className="flex md:items-start justify-between gap-6">
        <div className="w-full">
          <div className="pt-8 md:pt-14 flex flex-col gap-4">
            {faqQuetions.map(({ question, answer }) => (
              <Accordion
                key={question}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={question}>
                  <AccordionTrigger className="text-xl lg:text-2xl text-secondary">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-md lg:text-lg">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        <div className="relative hidden md:flex flex-col-reverse text-right min-w-96 h-96">
          <Image
            alt="icon"
            src={"/images/faq.svg"}
            fill
            className="absolute object-cover"
          />
          <a
            href="https://storyset.com/people"
            className="text-xs text-muted-foreground"
          >
            People illustrations by Storyset
          </a>
        </div>
      </div>
    </main>
  );
}
