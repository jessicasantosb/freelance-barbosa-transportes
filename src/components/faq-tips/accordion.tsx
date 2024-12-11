import { accordionVariants, MotionDiv } from "../shared/motion";
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
    <>
      {items.map(({ item, content }, index) => (
        <MotionDiv
          initial="hidden"
          animate="visible"
          custom={index}
          variants={accordionVariants}
          key={item}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={item}>
              <AccordionTrigger className="text-xl lg:text-2xl">
                {item}
              </AccordionTrigger>
              <AccordionContent className="text-md lg:text-lg text-muted-foreground">
                {content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </MotionDiv>
      ))}
    </>
  );
}
