import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <>
      <Separator />

      <footer className="py-4 px-2 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <p>Sidinei Barbosa - Entregas e Fretes em geral</p>
          <div className="flex gap-2 select-none">
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
              className="p-2 rounded-sm flex items-center gap-1 hover:underline underline-offset-2 select-none hover:bg-gradient-to-r from-[#128c7e]/60 to-[#25d366]/60"
            >
              <FaWhatsapp />
              Whatsapp
            </Link>
            <Link
              href={`https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME}`}
              target="_blank"
              className="p-2 rounded-sm flex items-center gap-1 hover:underline underline-offset-2 hover:bg-gradient-to-r from-[#5b51d8]/60 via-[#c13584]/60 to-[#f77737]/60"
            >
              <FaInstagram />
              Instagram
            </Link>
          </div>
        </div>
        <p className="pt-4 text-muted-foreground">
          &copy; Criado por{" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_PORTFOLIO_LINK}`}
            target="_blank"
            className="hover:opacity-90"
          >
            Jessica Bandeira
          </Link>
        </p>
      </footer>
    </>
  );
}
