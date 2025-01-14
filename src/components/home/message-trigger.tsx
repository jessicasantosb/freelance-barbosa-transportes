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
          className="text-2xl pb-2"
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
            className="h-14 uppercase text-xl bg-secondary"
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
