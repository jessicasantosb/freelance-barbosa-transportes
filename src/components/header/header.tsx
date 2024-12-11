import { Logo } from "@/components/shared/logo";
import { Lightbulb, ShieldQuestion } from "lucide-react";
import Link from "next/link";

import { HeaderMenu } from "./header-menu";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="w-full h-16 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Logo />
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6">
          <Link
            href={"/faq"}
            className="flex items-center gap-1 hover:underline hover:opacity-90"
          >
            <ShieldQuestion />
            Perguntas Frequentes
          </Link>
          <Link
            href={"/dicas-uteis"}
            className="flex items-center gap-1 hover:underline hover:opacity-90"
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
