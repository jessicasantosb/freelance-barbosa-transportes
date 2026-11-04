import { Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type AnimatedAccordionProps = {
  items: {
    item: string;
    content: string;
  }[];
};

export function AnimatedAccordion({ items }: AnimatedAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map(({ item, content }, index) => (
        <AccordionItem
          key={item}
          value={item}
          className="animate-settle"
          style={{ animationDelay: `${80 + index * 55}ms` }}
        >
          <AccordionTrigger>
            <span className="mono-data w-7 shrink-0 pt-1 text-xs font-medium text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-display text-xl uppercase leading-[1.05] tracking-tight sm:text-2xl">
              {item}
            </span>
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center border border-border bg-card transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-data-[state=open]:border-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
              <Plus
                className="size-4 transition-transform duration-300 group-data-[state=open]:rotate-45"
                aria-hidden="true"
              />
            </span>
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
