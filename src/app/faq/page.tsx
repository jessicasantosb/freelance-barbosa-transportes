import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { AnimatedAccordion } from "@/components/faq-tips/accordion";
import { QuoteButton } from "@/components/quote/quote-button";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { faqQuetions } from "@/data/faq-questions";

export const metadata = {
  title: "Perguntas frequentes",
  description:
    "Tire suas dúvidas sobre entregas, mudanças e fretes com caminhão HR em Belo Horizonte: tipos de carga, regiões atendidas, prazos e como pedir um orçamento.",
};

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`;

export default function Faq() {
  return (
    <main className="bg-background">
      <div className="container py-12 lg:py-20">
        <PageHeader
          title="Perguntas frequentes"
          count={`${String(faqQuetions.length).padStart(2, "0")} perguntas`}
          description="O que costuma travar antes de fechar um frete, respondido sem rodeio. Se a sua dúvida não estiver aqui, é só chamar."
        />

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_320px] lg:gap-16">
          <AnimatedAccordion items={faqQuetions} />

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative border border-border bg-card p-6 shadow-paper-sm">
              <span
                className="stamp-ring absolute -top-5 right-6 flex size-14 items-center justify-center font-display text-3xl"
                aria-hidden="true"
              >
                ?
              </span>
              <h2 className="max-w-[13ch] font-display text-2xl uppercase leading-[0.95] tracking-tight">
                Não achou sua dúvida?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Chama no WhatsApp. O Sidinei responde direto, sem robô e sem
                passar seu recado para outra pessoa.
              </p>
              <Button asChild variant="whatsapp" className="mt-5 w-full">
                <Link href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Chamar no WhatsApp
                </Link>
              </Button>
              <div className="mt-5 border-t border-dashed border-border pt-4">
                <QuoteButton
                  variant="link"
                  size="sm"
                  arrow={false}
                  className="h-auto p-0 text-sm"
                >
                  Prefiro montar o orçamento
                </QuoteButton>
              </div>
            </div>
            <p className="marker-note mt-4 -rotate-1 text-lg text-primary">
              sem robô do outro lado
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
