import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`;

const stops = ["Belo Horizonte", "Região", "Sob consulta"];

export function CoverageRoute() {
  return (
    <section className="border-y border-border bg-kraft/40 py-16 lg:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <h2 className="max-w-xl font-display text-[clamp(2rem,4.4vw,3.5rem)] uppercase leading-[0.92] tracking-[-0.025em]">
            Onde a gente
            <br />
            <span className="text-primary">chega.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Atendimento em Belo Horizonte. Para rotas fora da área, é só
            consultar a disponibilidade: se der para ir, a gente combina.
          </p>
          <Button asChild variant="outline" className="mt-8">
            <Link href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" aria-hidden="true" />
              Consultar minha rota
            </Link>
          </Button>
        </div>

        <div className="border border-border bg-card p-6 shadow-paper sm:p-8">
          <div className="flex items-center justify-between border-b border-dashed border-border pb-4">
            <span className="mono-label text-muted-foreground">
              Rota de atendimento
            </span>
            <span className="mono-data text-[10px] text-primary">HR · 01</span>
          </div>

          <div className="relative mt-12 px-2">
            <div
              className="absolute left-2 right-2 top-1.5 border-t-2 border-dashed border-border"
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-3">
              {stops.map((stop, index) => (
                <div
                  key={stop}
                  className={
                    index === 1
                      ? "flex flex-col items-center text-center"
                      : index === 2
                        ? "flex flex-col items-end text-right"
                        : "flex flex-col items-start"
                  }
                >
                  <span
                    className={
                      index === 2
                        ? "size-3 border-2 border-primary bg-card"
                        : "size-3 bg-primary"
                    }
                    aria-hidden="true"
                  />
                  <span className="mono-label mt-4 text-[10px] text-foreground">
                    {stop}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 border-t border-dashed border-border pt-5 sm:grid-cols-2">
            <div>
              <span className="mono-label text-muted-foreground">Origem</span>
              <p className="mt-1.5 text-sm">Você informa no orçamento</p>
            </div>
            <div className="sm:text-right">
              <span className="mono-label text-muted-foreground">Destino</span>
              <p className="mt-1.5 text-sm">BH ou rota combinada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
