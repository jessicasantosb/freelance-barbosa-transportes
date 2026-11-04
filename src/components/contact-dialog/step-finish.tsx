import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { generateMessage } from "@/lib/generate-message";
import { useInfoStore } from "@/stores/info-store";
import { SetStepProps } from "@/types/checkout-steps";

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) {
  if (!value) return null;

  return (
    <div className="flex items-start justify-between gap-6 py-2.5 text-sm">
      <dt className="mono-label shrink-0 pt-0.5 text-muted-foreground">
        {label}
      </dt>
      <dd className="text-right font-medium text-foreground">{value}</dd>
    </div>
  );
}

export function StepFinish({ setStep }: SetStepProps) {
  const { name, info } = useInfoStore((state) => state);

  const message = generateMessage({ name, info });
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Perfeito, <strong className="text-foreground">{name}</strong>. Confira
        abaixo e envie a ficha para o Sidinei.
      </p>

      <div className="relative border border-border bg-paper p-4">
        <div className="flex items-center justify-between gap-4 border-b border-dashed border-border pb-3">
          <span className="mono-label text-muted-foreground">
            Resumo da ficha
          </span>
          <span className="mono-data text-[10px] text-primary">Nº 001</span>
        </div>

        <dl className="divide-y divide-dashed divide-border">
          <SummaryRow label="Nome" value={name} />
          <SummaryRow label="Origem" value={info.district} />
          <SummaryRow label="Destino" value={info.city} />
          <SummaryRow label="Categoria" value={info.category} />
          <SummaryRow label="Urgência" value={info.urgency} />
          <SummaryRow label="Descrição" value={info.description} />
        </dl>

        <div
          className="stamp-ring animate-stamp absolute -right-3 -top-4 px-3 py-1.5"
          aria-hidden="true"
        >
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em]">
            Pronto
          </span>
        </div>
      </div>

      <Button asChild variant="whatsapp" size="lg" className="w-full">
        <Link href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle className="size-5" aria-hidden="true" />
          Enviar para o WhatsApp
        </Link>
      </Button>
      <p className="-mt-2 text-center text-xs leading-relaxed text-muted-foreground">
        A conversa abre com a mensagem já preenchida. É só enviar.
      </p>

      <Button
        type="button"
        variant="ghost"
        onClick={() => setStep("info")}
        className="justify-start gap-2 border-t border-dashed border-border pt-4 text-muted-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Editar os dados
      </Button>
    </div>
  );
}
