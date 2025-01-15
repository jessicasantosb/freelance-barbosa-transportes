"use client";

import * as motion from "motion/react-client";
import { useState } from "react";

import Image from "next/image";
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
        <motion.div
          variants={fadeInVariants}
          custom={custom}
          className="text-lg sm:text-xl pt-2 flex gap-2"
        >
          <div className="relative h-[2em] w-[5em] mt-4 sm:-mt-2">
            <Image
              alt="caminhão"
              src={"/images/truck.svg"}
              fill
              className="absolute object-fill"
            />
          </div>
          <p>
            Precisa de um transporte{" "}
            <span className="text-secondary">rápido e seguro</span>? Solicite já
            um orçamento!
          </p>
        </motion.div>
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
