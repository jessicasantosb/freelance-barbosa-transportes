import { MessageTrigger } from "@/components";

export function HomeMessage() {
  return (
    <div className="flex-1 animation-fadeIn">
      <h1 className="pb-2 uppercase tracking-tighter text-5xl md:text-6xl font-bold">
        Entregas e Fretes Rápidos com{" "}
        <div className="animation-highlight-wrap inline-flex pr-1 overflow-hidden">
          <span className="text-secondary animation-highlight">
            Qualidade e Confiança
          </span>
        </div>{" "}
        em Belo Horizonte
      </h1>
      <h3 className="pb-6 text-xl text-muted-foreground">
        Serviço de transporte ágil com um caminhão pequeno, ideal para mudanças,
        entregas e fretes personalizados. Precisão e cuidado para atender suas
        necessidades!
      </h3>
      <MessageTrigger />
    </div>
  );
}
