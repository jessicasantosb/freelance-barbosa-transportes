import * as motion from "motion/react-client";
import {
  doorVariants,
  DoorVariantsType,
  fadeInVariants,
  FadeInVariantsType,
} from "../shared/animation-variants";
import { AnimatedMessage } from "./animated-message";
import { MessageTrigger } from "./message-trigger";

export function HomeMessage() {
  const custom: FadeInVariantsType = {
    duration: 0.4,
    delay: 0.8,
    ease: "easeIn",
  };

  const customHighlight: FadeInVariantsType = {
    duration: 0.4,
    delay: 1.8,
  };

  const customDoor: DoorVariantsType = {
    duration: 0.4,
    delay: 1.4,
    transformOrigin: "left",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex-1 text-center xl:text-start"
    >
      <div className="overflow-hidden">
        <motion.h1
          variants={fadeInVariants}
          custom={custom}
          className="pb-2 uppercase leading-[35px] font-archivoBlack"
        >
          <span className="text-2xl lg:text-5xl tracking-widest">
            Entregas e Fretes
          </span>
          <br />
          <span className="text-4xl lg:text-7xl tracking-widest">
            {" "}
            Rápidos com{" "}
          </span>
          <br />
          <span className="relative inline-flex pr-1 overflow-hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={doorVariants}
              custom={customDoor}
              className="hidden sm:block absolute inset-0 bg-secondary"
            />
            <motion.span
              variants={fadeInVariants}
              custom={customHighlight}
              className="whitespace-nowrap flex items-center gap-2 text-secondary text-3xl sm:text-6xl font-birthstone font-black tracking-normal"
            >
              <AnimatedMessage />
            </motion.span>
          </span>
          <br />
          <span className="text-2xl lg:text-5xl tracking-widest">
            {" "}
            em Belo Horizonte
          </span>
        </motion.h1>
      </div>
      <div className="overflow-hidden lg:w-[650px] mx-auto xl:mx-0">
        <motion.h3
          variants={fadeInVariants}
          custom={custom}
          className="pb-6 text-lg sm:text-xl text-muted-foreground lg:text-justify"
        >
          Serviço de transporte ágil com um caminhão HR, ideal para mudanças,
          entregas e fretes personalizados. Precisão e cuidado para atender suas
          necessidades!
        </motion.h3>
      </div>
      <MessageTrigger custom={custom} />
    </motion.div>
  );
}
