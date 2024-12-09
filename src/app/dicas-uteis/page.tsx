import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { tips } from "@/data/tips";
import { Lightbulb } from "lucide-react";
import Image from "next/image";

export default function DicasUteis() {
  return (
    <main className="container min-h-[70dvh] my-14 p-4">
      <h1 className="text-xl md:text-6xl text-muted-foreground dark:text-muted flex items-center md:justify-center gap-1 uppercase tracking-tighter font-bold text-nowrap">
        <span className="md:hidden">
          <Lightbulb />
        </span>
        Dicas Úteis
      </h1>

      <div className="flex md:items-start justify-between gap-6">
        <div className="w-full">
          <div className="pt-8 md:pt-14 flex flex-col gap-4">
            {tips.map(({ tip, description }) => (
              <Accordion key={tip} type="single" collapsible className="w-full">
                <AccordionItem value={tip}>
                  <AccordionTrigger className="text-xl lg:text-2xl">
                    {tip}
                  </AccordionTrigger>
                  <AccordionContent className="text-md lg:text-lg text-muted-foreground">
                    {description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        <div className="relative hidden md:flex flex-col-reverse text-right min-w-96 h-96">
          <Image
            alt="icon"
            src={"/images/tips.svg"}
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
