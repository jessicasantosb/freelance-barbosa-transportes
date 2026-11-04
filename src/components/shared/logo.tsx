import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Barbosa Transportes — página inicial"
      className={cn(
        "relative block h-10 w-[6.25rem] shrink-0 sm:h-11 sm:w-[6.875rem]",
        className
      )}
    >
      <Image
        alt="Barbosa Transportes"
        src="/images/logo-light.svg"
        fill
        priority
        sizes="110px"
        className="object-contain object-left dark:hidden"
      />
      <Image
        alt="Barbosa Transportes"
        src="/images/logo-dark.svg"
        fill
        sizes="110px"
        className="hidden object-contain object-left dark:block"
      />
    </Link>
  );
}
