import * as motion from "motion/react-client";
import { ComponentProps } from "react";

import { titleVariants } from "../shared/animation-variants";

type TitleProps = ComponentProps<typeof motion.h1>;

export function Title({ ...props }: TitleProps) {
  return (
    <div className="overflow-hidden py-1">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="text-xl md:text-6xl text-secondary flex items-center md:justify-center gap-1 uppercase tracking-tighter font-bold text-nowrap"
        {...props}
      />
    </div>
  );
}
