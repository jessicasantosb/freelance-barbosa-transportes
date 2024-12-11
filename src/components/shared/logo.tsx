import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"} className="flex items-center gap-2 opacity-50">
      <Image alt="logo" src={"/images/logo.png"} width={40} height={25} />
      <h4 className="tracking-wider">BARBOSA FRETES</h4>
    </Link>
  );
}
