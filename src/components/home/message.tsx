import * as motion from "motion/react-client";
import {
  doorVariants,
  DoorVariantsType,
  fadeInVariants,
  FadeInVariantsType,
} from "../shared/animation-variants";
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
    <motion.div initial="hidden" animate="visible" className="flex-1">
      <div className="overflow-hidden">
        <motion.h1
          variants={fadeInVariants}
          custom={custom}
          className="pb-2 uppercase tracking-tighter text-5xl md:text-6xl font-bold"
        >
          Entregas e Fretes Rápidos com{" "}
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
              className="text-secondary"
            >
              Qualidade e Confiança
            </motion.span>
          </span>{" "}
          em Belo Horizonte
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h3
          variants={fadeInVariants}
          custom={custom}
          className="pb-6 text-xl text-muted-foreground"
        >
          Serviço de transporte ágil com um caminhão HR, ideal para
          mudanças, entregas e fretes personalizados. Precisão e cuidado para
          atender suas necessidades!
        </motion.h3>
      </div>
      <MessageTrigger custom={custom} />
    </motion.div>
  );
}
