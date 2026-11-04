"use client";

import { ArrowUpRight, Home, Lightbulb, Menu, ShieldQuestion } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { QuoteButton } from "@/components/quote/quote-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  {
    href: "/",
    label: "Página inicial",
    icon: Home,
    number: "00",
  },
  {
    href: "/faq",
    label: "Perguntas frequentes",
    icon: ShieldQuestion,
    number: "01",
  },
  {
    href: "/dicas-uteis",
    label: "Checklist de embalagem",
    icon: Lightbulb,
    number: "02",
  },
];

export function HeaderMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Abrir menu">
          <Menu className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="kraft-board flex w-[86%] flex-col border-l border-border p-6 sm:max-w-sm"
      >
        <SheetHeader>
          <SheetTitle className="mono-label text-left text-muted-foreground">
            Índice da caixa
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Menu móvel" className="mt-10 flex flex-col">
          {menuItems.map(({ href, label, icon: Icon, number }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 border-b border-dashed border-border py-5"
            >
              <span className="mono-data text-xs text-primary">{number}</span>
              <Icon className="size-5 text-foreground/70" aria-hidden="true" />
              <span className="font-display text-xl uppercase tracking-tight text-foreground">
                {label}
              </span>
              <ArrowUpRight
                className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-4 pt-10">
          <QuoteButton className="w-full" size="lg">
            Montar meu orçamento
          </QuoteButton>
          <p className="mono-label text-muted-foreground">
            Belo Horizonte · MG
            <br />
            Caminhão HR · Entregas e fretes
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
