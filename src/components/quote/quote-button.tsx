"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ContactDialog } from "../contact-dialog/dialog";

type QuoteButtonProps = ButtonProps & {
  children?: React.ReactNode;
  arrow?: boolean;
};

export function QuoteButton({
  children = "Montar meu orçamento",
  className,
  variant = "default",
  size = "default",
  arrow = true,
  ...props
}: QuoteButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        {...props}
        onClick={() => setOpen(true)}
        className={cn("group", className)}
      >
        {children}
        {arrow && (
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        )}
      </Button>
      <ContactDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
