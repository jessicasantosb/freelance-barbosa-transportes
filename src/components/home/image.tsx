import * as motion from "motion/react-client";
import Image from "next/image";
import { homeImageVariants } from "../shared/animation-variants";

export function HomeImage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={homeImageVariants}
      className="hidden xl:block relative size-[32rem] transition-opacity"
    >
      <Image
        alt="ferramentas"
        src={"/images/truck.png"}
        fill
        className="absolute object-cover"
      />
    </motion.div>
  );
}
