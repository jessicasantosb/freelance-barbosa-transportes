import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <>
      <Separator />

      <footer className="pt-8 flex flex-col items-center justify-center gap-4">
        <Link
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
          target="_blank"
          className="p-2 rounded-sm flex items-center gap-1 hover:underline underline-offset-2 select-none hover:bg-gradient-to-r from-[#128c7e]/60 to-[#25d366]/60"
        >
          <FaWhatsapp />
          Whatsapp
        </Link>
        <p className="opacity-50">Sidinei Barbosa - Entregas e Fretes</p>
      </footer>
    </>
  );
}
