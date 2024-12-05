import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <Logo />
      <ModeToggle />
    </header>
  );
}
