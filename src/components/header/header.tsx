"use client";

import { Lightbulb, ShieldQuestion } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { QuoteButton } from "@/components/quote/quote-button";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";
import { HeaderMenu } from "./header-menu";
import { ModeToggle } from "./mode-toggle";

const links = [
  { href: "/faq", label: "Perguntas frequentes", icon: ShieldQuestion },
  { href: "/dicas-uteis", label: "Checklist de embalagem", icon: Lightbulb },
];

function NavLink({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative flex items-center gap-2 py-2 text-sm font-medium transition-colors",
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon className="size-4 text-primary" aria-hidden="true" />
      <span>{label}</span>
      <span
        aria-hidden="true"
        className={cn(
          "absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-primary transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-dashed border-border bg-background">
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-20">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {links.map((link) => (
            <NavLink
              key={link.href}
              {...link}
              active={pathname === link.href}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <QuoteButton size="sm" className="hidden sm:inline-flex">
            Orçamento
          </QuoteButton>
          <div className="md:hidden">
            <HeaderMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
