import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"} className="relative h-14 w-48">
      <Image
        alt="logo"
        src={"/images/logo-light.svg"}
        fill
        className="absolute object-cover dark:hidden"
      />
      <Image
        alt="logo"
        src={"/images/logo-dark.svg"} 
        fill
        className="absolute object-cover hidden dark:block"
      />
    </Link>
  );
}
