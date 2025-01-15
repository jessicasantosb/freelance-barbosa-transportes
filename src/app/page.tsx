import * as motion from "motion/react-client";

import { HomeImage } from "@/components/home/image";
import { HomeMessage } from "@/components/home/message";
import {
  doorVariants,
  DoorVariantsType,
} from "@/components/shared/animation-variants";

export default async function Home() {
  const customDoor: DoorVariantsType = {
    duration: 1,
    transformOrigin: "right",
    ease: "easeOut",
  };
  return (
    <main className="container sm:my-8 p-4 flex items-center gap-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={doorVariants}
        custom={customDoor}
        className="absolute inset-0 bg-secondary z-50"
      />
      <HomeMessage />
      <HomeImage />
    </main>
  );
}
