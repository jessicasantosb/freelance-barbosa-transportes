"use client";

import { Logo } from "@/components/shared/logo";
import { Lightbulb, ShieldQuestion } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { HeaderMenu } from "./header-menu";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Logo />
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6">
          <Link
            href={"/faq"}
            className={`flex items-center gap-1 underline-offset-2 hover:underline hover:opacity-90 ${
              pathname === "/faq" && "underline"
            }`}
          >
            <ShieldQuestion />
            Perguntas Frequentes
          </Link>
          <Link
            href={"/dicas-uteis"}
            className={`flex items-center gap-1 underline-offset-2 hover:underline hover:opacity-90 ${
              pathname === "/dicas-uteis" && "underline"
            }`}
          >
            <Lightbulb />
            Dicas úteis
          </Link>
        </div>

        <div className="md:hidden">
          <HeaderMenu />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
