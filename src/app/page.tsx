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
    <main className="max-w-[1048px] lg:max-w-full my-4 sm:my-8 p-4 lg:p-14 flex items-center">
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
