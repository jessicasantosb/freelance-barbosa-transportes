import * as motion from "motion/react-client";
import { homeMessageVariants } from "../shared/animation-variants";
import { MessageTrigger } from "./message-trigger";

export function HomeMessage() {
  return (
    <motion.div initial="hidden" animate="visible" className="flex-1">
      <div className="overflow-hidden">
        <motion.h1
          variants={homeMessageVariants}
          className="pb-2 uppercase tracking-tighter text-5xl md:text-6xl font-bold"
        >
          Entregas e Fretes Rápidos com{" "}
          <div className="inline sm:inline-flex pr-1 overflow-hidden">
            <span className="text-secondary">Qualidade e Confiança</span>
          </div>{" "}
          em Belo Horizonte
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h3
          variants={homeMessageVariants}
          className="pb-6 text-xl text-muted-foreground"
        >
          Serviço de transporte ágil com um caminhão pequeno, ideal para
          mudanças, entregas e fretes personalizados. Precisão e cuidado para
          atender suas necessidades!
        </motion.h3>
      </div>
      <MessageTrigger />
    </motion.div>
  );
}
