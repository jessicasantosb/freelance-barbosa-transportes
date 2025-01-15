"use client";

import * as motion from "motion/react-client";
import { useState } from "react";

import { ContactDialog } from "../contact-dialog/dialog";
import {
  fadeInVariants,
  FadeInVariantsType,
} from "../shared/animation-variants";
import { Button } from "../ui/button";

export function MessageTrigger({ custom }: { custom: FadeInVariantsType }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section>
      <div className="overflow-hidden">
        <motion.p
          variants={fadeInVariants}
          custom={custom}
          className="text-lg sm:text-xl pb-2"
        >
          Precisa de um transporte{" "}
          <span className="text-secondary">rápido e seguro</span>? Solicite já
          um orçamento!
        </motion.p>
      </div>

      <div className="overflow-hidden mt-6">
        <Button asChild>
          <motion.button
            variants={fadeInVariants}
            custom={custom}
            className="py-6 uppercase text-lg sm:text-xl bg-[#082841] text-white"
            onClick={() => setDialogOpen(true)}
          >
            Fale Comigo
          </motion.button>
        </Button>
      </div>
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
}
