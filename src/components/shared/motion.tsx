"use client";

import { motion, Variants } from "motion/react";

export const MotionDiv = motion.div;

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
      duration: 0.9,
    },
  }),
};
