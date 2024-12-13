"use client";

import { Home, Lightbulb, ShieldQuestion } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function HeaderMenu() {
  const [open, setOpen] = useState(false);

  const handleCloseMenu = () => setOpen(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={handleCloseMenu}>
          <Home />
          <Link href={"/"}>Página inicial</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCloseMenu}>
          <ShieldQuestion />
          <Link href={"/faq"}>Perguntas Frequentes</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCloseMenu}>
          <Lightbulb />
          <Link href={"/dicas-uteis"}>Dicas úteis</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
