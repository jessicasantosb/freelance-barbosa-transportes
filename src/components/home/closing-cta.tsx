import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { QuoteButton } from "@/components/quote/quote-button";

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`;

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 12px)",
        }}
        aria-hidden="true"
      />
      <div className="container relative flex flex-col gap-9 py-16 sm:flex-row sm:items-center sm:justify-between lg:py-20">
        <div>
          <h2 className="max-w-xl font-display text-[clamp(2.4rem,5.5vw,4.4rem)] uppercase leading-[0.88] tracking-[-0.03em]">
            Vamos fechar
            <br />
            a caixa?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Conte o que precisa. O orçamento sai direto com o Sidinei, no
            WhatsApp, sem cadastro e sem espera.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-4 sm:items-end">
          <QuoteButton
            size="lg"
            className="bg-paper text-ink hover:bg-paper/90"
            arrow={false}
          >
            Montar meu orçamento
          </QuoteButton>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 self-center text-sm font-medium underline-offset-4 hover:underline sm:self-end"
          >
            ou chamar no WhatsApp
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
