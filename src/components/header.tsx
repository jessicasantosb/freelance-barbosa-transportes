import { Logo } from "@/components/logo";
import { HeaderMenu } from "./header-menu";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="w-full h-16 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Logo />
      <div className="flex items-center gap-4">
        <HeaderMenu />
        <ModeToggle />
      </div>
    </header>
  );
}
