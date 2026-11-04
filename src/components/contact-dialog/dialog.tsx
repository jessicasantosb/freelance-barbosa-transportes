"use client";

import { useEffect, useState } from "react";

import { StepFinish } from "@/components/contact-dialog/step-finish";
import { StepInfo } from "@/components/contact-dialog/step-info";
import { StepUser } from "@/components/contact-dialog/step-user";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { StepsProps } from "@/types/checkout-steps";

type ContactDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type StepsElementsProps = {
  progressBar: number;
  stepTitle: string;
  stepDescription: string;
  stepField: JSX.Element;
};

const steps: { id: StepsProps; short: string }[] = [
  { id: "user", short: "Dados" },
  { id: "info", short: "Carga" },
  { id: "finish", short: "Envio" },
];

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [step, setStep] = useState<StepsProps>("user");

  useEffect(() => {
    if (open) setStep("user");
  }, [open]);

  const elements: Record<StepsProps, StepsElementsProps> = {
    user: {
      progressBar: 33,
      stepTitle: "Quem está falando?",
      stepDescription: "Para o Sidinei saber com quem está combinando.",
      stepField: <StepUser setStep={setStep} />,
    },
    info: {
      progressBar: 66,
      stepTitle: "O que vai na caixa?",
      stepDescription: "Origem, destino e o tipo de carga. Sem detalhe demais.",
      stepField: <StepInfo setStep={setStep} />,
    },
    finish: {
      progressBar: 100,
      stepTitle: "Fechar a caixa",
      stepDescription: "Confira o resumo e envie direto para o WhatsApp.",
      stepField: <StepFinish setStep={setStep} />,
    },
  };

  const currentIndex = steps.findIndex((item) => item.id === step);
  const { progressBar, stepTitle, stepDescription, stepField } =
    elements[step];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader className="kraft-board border-b border-border px-6 py-5 text-ink">
          <div className="flex items-center justify-between gap-4 pr-8">
            <span className="mono-label text-ink/60">Ficha de frete</span>
            <span className="mono-data text-[10px] text-ink/60">
              Nº 001 · {String(currentIndex + 1).padStart(2, "0")}/03
            </span>
          </div>
          <DialogTitle className="mt-2">{stepTitle}</DialogTitle>
          <p className="mt-1.5 text-xs leading-relaxed text-ink/70">
            {stepDescription}
          </p>
        </DialogHeader>

        <div className="px-6 pb-6 pt-5">
          <Progress
            value={progressBar}
            aria-label="Progresso do orçamento"
            aria-valuetext={`Etapa ${currentIndex + 1} de 3`}
          />

          <div className="mt-2 flex justify-between">
            {steps.map((item, index) => (
              <span
                key={item.id}
                className={cn(
                  "mono-label text-[9px] transition-colors",
                  index <= currentIndex
                    ? "text-primary"
                    : "text-muted-foreground/60"
                )}
              >
                {String(index + 1).padStart(2, "0")} {item.short}
              </span>
            ))}
          </div>

          <div key={step} className="animate-settle mt-6">
            {stepField}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
