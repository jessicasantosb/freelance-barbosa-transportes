import * as motion from "motion/react-client";
import Image from "next/image";
import { imageCardVariants } from "../shared/animation-variants";

export function ImageCard({ imageName }: { imageName: string }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={imageCardVariants}
      className="relative hidden md:flex flex-col-reverse text-right min-w-96 h-96"
    >
      <Image
        alt="icon"
        src={`/images/${imageName}`}
        fill
        className="absolute object-cover"
      />
      <a
        href="https://storyset.com/people"
        className="text-xs text-muted-foreground"
      >
        People illustrations by Storyset
      </a>
    </motion.div>
  );
}
