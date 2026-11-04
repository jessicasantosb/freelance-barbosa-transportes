import { Check, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`;

const promises = [
  "Quem responde é quem dirige",
  "Um único responsável pela carga",
  "Horário combinado direto, sem call center",
];

export function DriverCard() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
        <div className="relative">
          <div className="border border-border bg-secondary p-6 text-secondary-foreground shadow-paper sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-dashed border-secondary-foreground/25 pb-5">
              <span className="mono-label text-secondary-foreground/65">
                Credencial · Motorista
              </span>
              <span className="mono-data text-[10px] text-secondary-foreground/65">
                BH · MG
              </span>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <span className="flex size-14 items-center justify-center bg-primary font-display text-xl uppercase text-primary-foreground">
                SB
              </span>
              <div>
                <h3 className="font-display text-3xl uppercase leading-[0.9] tracking-tight sm:text-4xl">
                  Sidinei
                  <br />
                  Barbosa
                </h3>
              </div>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary-foreground/75">
              Motorista e responsável pela Barbosa Transportes. Atende, monta o
              orçamento e dirige o HR.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-dashed border-secondary-foreground/25 pt-6">
              <div>
                <dt className="mono-label text-secondary-foreground/55">Área</dt>
                <dd className="mt-1.5 text-sm">Belo Horizonte e região</dd>
              </div>
              <div>
                <dt className="mono-label text-secondary-foreground/55">
                  Veículo
                </dt>
                <dd className="mt-1.5 text-sm">Caminhão HR</dd>
              </div>
              <div>
                <dt className="mono-label text-secondary-foreground/55">
                  Serviço
                </dt>
                <dd className="mt-1.5 text-sm">Entregas e fretes em geral</dd>
              </div>
              <div>
                <dt className="mono-label text-secondary-foreground/55">
                  Contato
                </dt>
                <dd className="mt-1.5 text-sm">WhatsApp direto</dd>
              </div>
            </dl>

            <div className="mt-8 flex items-end justify-between gap-4">
              <p className="marker-note text-2xl text-secondary-foreground/90">
                Sidinei
              </p>
              <span className="barcode h-5 w-20 text-secondary-foreground/30" aria-hidden="true" />
            </div>
          </div>

          <div className="tape-strip absolute -right-3 -top-3 h-6 w-20 rotate-[8deg] sm:-right-5">
            <span className="mono-label text-[9px] font-semibold text-primary-foreground">
              Original
            </span>
          </div>
        </div>

        <div>
          <h2 className="max-w-xl font-display text-[clamp(2rem,4.4vw,3.5rem)] uppercase leading-[0.92] tracking-[-0.025em]">
            Quem carrega
            <br />
            <span className="text-primary">também atende.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sem central, sem intermediário e sem passar seu recado de mão em
            mão. Você fala com o Sidinei do primeiro orçamento até a entrega —
            a mesma pessoa que responde é a que carrega.
          </p>

          <ul className="mt-7 space-y-3">
            {promises.map((promise) => (
              <li
                key={promise}
                className="flex items-center gap-3 text-sm font-medium"
              >
                <span className="flex size-5 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {promise}
              </li>
            ))}
          </ul>

          <Button asChild variant="outline" className="mt-8">
            <Link href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar com o Sidinei
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
