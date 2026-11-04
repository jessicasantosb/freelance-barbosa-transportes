import { TipsChecklist } from "@/components/faq-tips/tips-checklist";
import { QuoteButton } from "@/components/quote/quote-button";
import { PageHeader } from "@/components/shared/page-header";
import { tips } from "@/data/tips";

export const metadata = {
  title: "Checklist de embalagem",
  description:
    "Um checklist prático para planejar sua mudança ou entrega: embalar, rotular, medir a carga e escolher o melhor horário. Marque cada item antes de chamar o caminhão.",
};

export default function DicasUteis() {
  return (
    <main className="bg-background">
      <div className="container py-12 lg:py-20">
        <PageHeader
          title="Checklist de embalagem"
          count={`${String(tips.length).padStart(2, "0")} itens`}
          description="Marque o que já está pronto antes da coleta. É a diferença entre uma mudança tranquila e uma caixa aberta no meio da rua."
        />

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_320px] lg:gap-16">
          <TipsChecklist tips={tips} />

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-border bg-card p-6 shadow-paper-sm">
              <h2 className="max-w-[14ch] font-display text-2xl uppercase leading-[0.95] tracking-tight">
                Marcou tudo? A gente leva.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Conte a origem, o destino e o que vai na caixa. O Sidinei
                responde com o valor e combina a coleta.
              </p>
              <QuoteButton className="mt-5 w-full">Montar orçamento</QuoteButton>
            </div>
            <p className="marker-note mt-4 rotate-1 text-lg text-primary">
              uma caixa por vez
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
