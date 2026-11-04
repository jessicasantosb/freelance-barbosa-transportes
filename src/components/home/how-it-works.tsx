import { ClipboardList, MessageCircle, Truck } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  {
    title: "Conte o que vai",
    description:
      "Nome, origem, destino e o que precisa levar. São três campos e dois minutos.",
    icon: ClipboardList,
  },
  {
    title: "Combine o valor",
    description:
      "O Sidinei responde no WhatsApp com o valor e o melhor horário para a coleta.",
    icon: MessageCircle,
  },
  {
    title: "Receba no combinado",
    description:
      "Você acompanha pelo WhatsApp e recebe na data e no horário que ficaram acertados.",
    icon: Truck,
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-muted/40 py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          title={
            <>
              Do recado <span className="text-primary">à entrega</span>
            </>
          }
          aside="Três passos, sem central de atendimento e sem intermediário no meio."
        />

        <ol className="mt-10 grid border border-border bg-card sm:grid-cols-3">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              className="relative border-b border-dashed border-border p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="mono-data text-xs font-medium text-primary">
                  Passo {String(index + 1).padStart(2, "0")}
                </span>
                <Icon
                  className="size-5 text-muted-foreground"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-10 font-display text-2xl uppercase leading-[0.95] tracking-tight lg:text-3xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex justify-end">
          <p className="marker-note -rotate-1 text-lg text-primary">
            o orçamento sai no WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
