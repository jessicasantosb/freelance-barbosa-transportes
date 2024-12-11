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

export function HeaderMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Home />
          <Link href={"/"}>Página inicial</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShieldQuestion />
          <Link href={"/faq"}>Perguntas Frequentes</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Lightbulb />
          <Link href={"/dicas-uteis"}>Dicas úteis</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
