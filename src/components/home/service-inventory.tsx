import { Check } from "lucide-react";

import { QuoteButton } from "@/components/quote/quote-button";
import { SectionHeading } from "@/components/shared/section-heading";

const services = [
  {
    title: "Mudança residencial",
    description:
      "Móveis, caixas e o que você não quer arranhar. O HR leva o volume de uma casa pequena com cuidado de ponta a ponta.",
  },
  {
    title: "Transporte comercial",
    description:
      "Mercadorias e equipamentos para o seu negócio, com coleta e entrega combinadas direto com quem dirige.",
  },
  {
    title: "Documentos e itens pequenos",
    description:
      "Coletas rápidas em BH, com a mesma responsabilidade de uma carga grande. O que importa chega inteiro.",
  },
  {
    title: "Fretes personalizados",
    description:
      "Carga específica, rota diferente ou horário apertado? Conte o que precisa e a gente monta o frete junto.",
  },
];

export function ServiceInventory() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container">
        <SectionHeading
          title={
            <>
              O que vai <span className="text-primary">na caixa</span>
            </>
          }
          aside="Quatro jeitos de usar o HR. O mesmo cuidado em cada volume — do primeiro ao último."
        />

        <div className="mt-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group grid gap-3 border-b border-dashed border-border py-7 transition-colors hover:bg-accent/10 sm:grid-cols-[2.5rem_1fr_1.15fr_1.5rem] sm:items-baseline sm:gap-6 sm:py-8"
            >
              <span className="mono-data text-xs font-medium text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl uppercase leading-[0.95] tracking-tight sm:text-3xl">
                {service.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="hidden justify-self-end sm:block">
                <Check
                  className="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Não sabe em qual se encaixa? Descreva a carga e o Sidinei responde
            com o melhor formato.
          </p>
          <QuoteButton variant="link" size="sm" className="h-auto p-0">
            Tirar a dúvida no orçamento
          </QuoteButton>
        </div>
      </div>
    </section>
  );
}
