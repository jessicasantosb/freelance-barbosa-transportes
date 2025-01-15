import * as motion from "motion/react-client";
import Image from "next/image";
import { homeImageVariants } from "../shared/animation-variants";

export function HomeImage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={homeImageVariants}
      className="hidden lg:block relative w-64 h-64 lg:w-96 lg:h-96"
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
