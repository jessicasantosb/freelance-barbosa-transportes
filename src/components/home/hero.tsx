import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { QuoteButton } from "@/components/quote/quote-button";
import { Button } from "@/components/ui/button";

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`;

const checks = [
  "Belo Horizonte e região",
  "Direto com o Sidinei",
  "HR para mudanças e fretes",
];

function WaybillLabel() {
  return (
    <div
      className="animate-settle border border-ink/15 bg-paper/60"
      style={{ animationDelay: "40ms" }}
    >
      <div className="grid grid-cols-2 divide-x divide-dashed divide-ink/15 sm:grid-cols-[auto_1fr_auto_1fr]">
        <span className="mono-label px-3 py-2 text-muted-foreground">
          Remetente
        </span>
        <span className="px-3 py-2 text-xs font-medium text-foreground">
          Sidinei Barbosa
        </span>
        <span className="mono-label border-t border-dashed border-ink/15 px-3 py-2 text-muted-foreground sm:border-t-0 sm:border-l">
          Destino
        </span>
        <span className="border-t border-dashed border-ink/15 px-3 py-2 text-xs font-medium text-foreground sm:border-t-0">
          Belo Horizonte · MG
        </span>
      </div>
    </div>
  );
}

function HeroBoard() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[470px] sm:h-[410px] lg:h-[470px]">
      <div
        className="animate-settle absolute left-0 top-6 w-[84%] -rotate-2 border border-border bg-[#fcf8ee] p-2.5 pb-9 shadow-paper sm:p-3 sm:pb-11"
        style={{ animationDelay: "180ms" }}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#fdfaf3]">
          <Image
            src="/images/truck.png"
            alt="Ilustração do caminhão HR usado nas entregas"
            fill
            priority
            sizes="(min-width: 1024px) 390px, 70vw"
            className="object-contain p-6 sm:p-8"
          />
        </div>
        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
          <span className="mono-label min-w-0 flex-1 text-muted-foreground text-[10px] leading-tight sm:text-xs">
            <span className="block sm:inline">Caixa 01 · </span>
            <span className="block sm:inline">Caminhão HR</span>
          </span>

          <span
            className="barcode h-4 w-12 shrink-0 text-foreground/35"
            aria-hidden="true"
          />
        </div>

        <div className="tape-strip absolute -top-3 left-5 h-6 w-24 rotate-[-7deg] sm:left-8 sm:h-7 sm:w-28">
          <span className="mono-label text-[9px] font-semibold text-primary-foreground">
            Frágil
          </span>
        </div>

        <p className="marker-note absolute right-4 top-4 z-10 -rotate-3 text-lg leading-[0.95] text-ink sm:text-xl">
          vai com
          <br />
          cuidado
          <span aria-hidden="true" className="ml-1 inline-block text-primary">
            ↙
          </span>
        </p>
      </div>

      <div
        className="animate-settle absolute -bottom-1 right-1 w-[180px] rotate-[2.5deg] border border-border bg-card p-4 shadow-paper-sm sm:w-[204px]"
        style={{ animationDelay: "340ms" }}
      >
        <div className="flex items-center justify-between border-b border-dashed border-border pb-2.5">
          <span className="mono-label text-muted-foreground">Conferido</span>
          <span className="mono-data text-[10px] text-primary">03/03</span>
        </div>
        <ul className="mt-3 space-y-2.5">
          {["Mudança", "Mercadorias", "Documentos"].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="flex size-4 items-center justify-center border border-foreground/30 bg-primary text-primary-foreground">
                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="kraft-board relative overflow-hidden border-b border-border">
      <div className="container py-6 sm:py-9 lg:py-12">
        <div className="animate-settle border border-ink/25 bg-paper/35 shadow-paper">
          <div className="flex items-center justify-between gap-4 border-b border-dashed border-ink/25 px-4 py-2.5 sm:px-6">
            <span className="mono-label text-ink/70">Ficha de transporte</span>
            <span className="mono-label hidden text-ink/50 sm:block">
              Belo Horizonte · MG
            </span>
            <div className="flex items-center gap-3">
              <span className="mono-data text-[10px] text-ink/60">Nº 001</span>
              <span
                className="barcode hidden h-3 w-14 text-ink/30 sm:block"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
            <div className="p-5 sm:p-8 lg:p-10 xl:p-12">
              <WaybillLabel />

              <h1
                className="animate-settle mt-7 font-display text-[clamp(2.6rem,6.4vw,5.1rem)] uppercase leading-[0.86] tracking-[-0.035em] text-ink"
                style={{ animationDelay: "110ms" }}
              >
                Sua carga chega
                <br />
                <span className="text-primary marker-underline">
                  como saiu.
                </span>
              </h1>

              <p
                className="animate-settle mt-6 max-w-[44ch] text-base leading-relaxed text-ink/80 sm:text-lg"
                style={{ animationDelay: "200ms" }}
              >
                Mudanças, entregas e fretes com caminhão HR em Belo Horizonte.
                Você fala direto com o Sidinei, combina o valor e acompanha cada
                etapa.
              </p>

              <div
                className="animate-settle mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
                style={{ animationDelay: "290ms" }}
              >
                <QuoteButton size="lg" className="w-full sm:w-auto">
                  Montar meu orçamento
                </QuoteButton>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-ink/30 text-ink hover:border-ink hover:bg-paper/60 sm:w-auto"
                >
                  <Link href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Chamar no WhatsApp
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative border-t border-dashed border-ink/25 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
              <HeroBoard />
            </div>
          </div>

          <ul className="grid border-t border-ink/25 sm:grid-cols-3">
            {checks.map((check, index) => (
              <li
                key={check}
                className={
                  index === 0
                    ? "flex items-center gap-2 px-4 py-3.5 sm:px-6"
                    : "flex items-center gap-2 border-t border-dashed border-ink/25 px-4 py-3.5 sm:border-l sm:border-t-0 sm:px-6"
                }
              >
                <span className="flex size-4 shrink-0 items-center justify-center border border-ink/30 bg-paper/40">
                  <Check
                    className="size-2.5"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                </span>
                <span className="mono-label text-[9px] text-ink/70 sm:text-[10px]">
                  {check}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
