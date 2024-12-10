"use client";

import { motion, Variants } from "motion/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const getAccordionVariants = (index: number) => {
  const delay = (index + 1) / 5;

  const accordionVariants: Variants = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.9,
      },
    },
  };

  return accordionVariants;
};

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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={getAccordionVariants(index)}
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
        </motion.div>
      ))}
    </>
  );
}
