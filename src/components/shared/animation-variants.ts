"use client";

import { Variants } from "motion/react";

export const accordionVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: (custom + 1) / 5,
      duration: 0.5,
    },
  }),
};

export const titleVariants: Variants = {
  hidden: {
    transform: "translateY(100%)",
    opacity: 0,
  },
  visible: {
    transform: "translateX(0)",
    opacity: 1,
    transition: { duration: 0.8, delay: 0.5 },
  },
};
