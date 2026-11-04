import { Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

import { QuoteButton } from "@/components/quote/quote-button";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`;
const instagramHref = `https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME}`;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-kraft/35">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.2fr_1fr] lg:py-20">
        <div>
          <Logo className="h-12 w-[7.5rem]" />
          <p className="mt-7 max-w-md font-display text-2xl uppercase leading-[1.05] tracking-tight sm:text-3xl">
            Entregas e fretes em geral,
            <span className="text-primary"> com quem dirige.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sidinei Barbosa · Caminhão HR · Belo Horizonte, MG. Você fala
            direto com quem atende e leva.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <Button asChild variant="whatsapp">
              <Link href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={instagramHref} target="_blank" rel="noreferrer">
                <Instagram className="size-4" aria-hidden="true" />
                Instagram
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 self-end">
          <div>
            <p className="mono-label text-muted-foreground">Índice</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  Perguntas frequentes
                </Link>
              </li>
              <li>
                <Link
                  href="/dicas-uteis"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  Checklist de embalagem
                </Link>
              </li>
              <li>
                <QuoteButton
                  variant="link"
                  size="sm"
                  arrow={false}
                  className="h-auto p-0 text-sm font-normal text-foreground"
                >
                  Montar orçamento
                </QuoteButton>
              </li>
            </ul>
          </div>

          <div>
            <p className="mono-label text-muted-foreground">Área</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Belo Horizonte e região.
              <br />
              Rotas fora da área sob consulta.
            </p>
            <div
              className="barcode mt-6 h-7 w-24 text-foreground/25"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-dashed border-border">
        <div className="container flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Barbosa Transportes. Todos os direitos reservados.
          </p>
          <p>
            Criado por{" "}
            <Link
              href={`${process.env.NEXT_PUBLIC_PORTFOLIO_LINK}`}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Jessica Bandeira
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
