"use client";

import { useState } from "react";

import { CheckoutDialog } from "./checkout/dialog";
import { Button } from "./ui/button";

export function MessageTrigger() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <section>
      <p className="text-2xl pb-2">
        Precisa de entregas ou fretes{" "}
        <span className="text-red-700">rápidos e seguros</span>? Solicite já um
        orçamento!
      </p>
      <Button
        className="h-14 uppercase text-xl bg-red-700"
        onClick={() => setCheckoutOpen(true)}
      >
        Fale Comigo
      </Button>
      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </section>
  );
}
