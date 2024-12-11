"use client";

import { useState } from "react";

import { ContactDialog } from "../contact-dialog/dialog";
import { Button } from "../ui/button";

export function MessageTrigger() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section>
      <p className="text-2xl pb-2">
        Precisa de entregas ou fretes{" "}
        <span className="text-secondary">rápidos e seguros</span>? Solicite já
        um orçamento!
      </p>
      <Button
        className="h-14 uppercase text-xl bg-secondary"
        onClick={() => setDialogOpen(true)}
      >
        Fale Comigo
      </Button>
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
}
