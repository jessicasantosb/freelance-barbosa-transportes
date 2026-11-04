"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const STORAGE_KEY = "barbosa:checklist-embalagem";

type TipsChecklistProps = {
  tips: { item: string; content: string }[];
};

export function TipsChecklist({ tips }: TipsChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setChecked(JSON.parse(stored));
    } catch {
      // A checklist sem memória ainda funciona.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // Armazenamento indisponível: segue sem salvar.
    }
  }, [checked, hydrated]);

  const done = tips.filter((tip) => checked[tip.item]).length;
  const progress = Math.round((done / tips.length) * 100);

  const toggle = (item: string) =>
    setChecked((current) => ({ ...current, [item]: !current[item] }));

  return (
    <div>
      <div className="border border-border bg-card shadow-paper-sm">
        <div className="flex items-center justify-between gap-4 border-b border-dashed border-border p-5 sm:px-6">
          <div className="flex items-baseline gap-2.5">
            <span className="mono-data text-2xl font-medium text-primary">
              {String(done).padStart(2, "0")}
            </span>
            <span className="mono-label text-muted-foreground">
              de {String(tips.length).padStart(2, "0")} itens
            </span>
          </div>
          <button
            type="button"
            onClick={() => setChecked({})}
            disabled={done === 0}
            className="mono-label text-muted-foreground underline-offset-4 transition-colors hover:text-primary disabled:pointer-events-none disabled:opacity-40"
          >
            Limpar
          </button>
        </div>

        <div
          role="progressbar"
          aria-label="Itens da checklist prontos"
          aria-valuemin={0}
          aria-valuemax={tips.length}
          aria-valuenow={done}
          className="h-1.5 w-full bg-muted"
        >
          <div
            className="h-full bg-primary transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ul>
          {tips.map((tip) => {
            const isChecked = Boolean(checked[tip.item]);

            return (
              <li
                key={tip.item}
                className="border-b border-dashed border-border last:border-b-0"
              >
                <label className="group flex cursor-pointer items-start gap-4 p-5 transition-colors hover:bg-accent/10 sm:px-6 sm:py-6">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={isChecked}
                    onChange={() => toggle(tip.item)}
                  />
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center border border-input bg-background text-primary-foreground transition-colors peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background"
                  >
                    <Check
                      className={cn(
                        "size-3.5 transition-opacity",
                        isChecked ? "opacity-100" : "opacity-0"
                      )}
                      strokeWidth={3}
                    />
                  </span>
                  <span className="flex-1">
                    <span
                      className={cn(
                        "block font-display text-lg uppercase leading-tight tracking-tight transition-colors sm:text-xl",
                        isChecked && "text-muted-foreground"
                      )}
                    >
                      {tip.item}
                    </span>
                    <span className="mt-1.5 block max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {tip.content}
                    </span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Sua marcação fica salva neste navegador. Pode voltar depois sem perder
        o que já conferiu.
      </p>
    </div>
  );
}
