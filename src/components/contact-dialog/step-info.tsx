import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { stepInfoSchema } from "@/schemas/step-info";
import { useInfoStore } from "@/stores/info-store";
import { SetStepProps } from "@/types/checkout-steps";

export function StepInfo({ setStep }: SetStepProps) {
  const { info, setInfo } = useInfoStore((state) => state);

  const form = useForm<z.infer<typeof stepInfoSchema>>({
    resolver: zodResolver(stepInfoSchema),
    defaultValues: { ...info },
  });

  const onSubmit = (values: z.infer<typeof stepInfoSchema>) => {
    setInfo(values);
    setStep("finish");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
          <FormField
            name="district"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origem</FormLabel>
                <FormControl>
                  <Input
                    autoFocus
                    placeholder="Bairro ou cidade"
                    autoComplete="address-level3"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="city"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destino</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Bairro ou cidade"
                    autoComplete="address-level3"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mudança residencial">
                        Mudança residencial
                      </SelectItem>
                      <SelectItem value="Transporte comercial">
                        Transporte comercial
                      </SelectItem>
                      <SelectItem value="Entrega de mercadorias">
                        Entrega de mercadorias
                      </SelectItem>
                      <SelectItem value="Coleta e entrega de documentos ou itens pequenos">
                        Documentos ou itens pequenos
                      </SelectItem>
                      <SelectItem value="Outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="urgency"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Urgência</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a urgência" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Emergência">Emergência</SelectItem>
                      <SelectItem value="Agendamento para data específica">
                        Agendar para uma data
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição da carga (opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex.: sofá de 3 lugares, 12 caixas, precisa de ajuda para carregar."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col-reverse gap-3 border-t border-dashed border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStep("user")}
            className="justify-start gap-2"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar
          </Button>
          <Button type="submit" className="justify-between gap-3 sm:min-w-40">
            Revisar e enviar
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
