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
import { stepInfoSchema } from "@/schemas/step-info";
import { useInfoStore } from "@/stores/info-store";
import { SetStepProps } from "@/types/checkout-steps";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 grid grid-cols-2 gap-2">
          <FormField
            name="district"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bairro/Cidade de origem</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Bairro/Cidade de destino</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                      <SelectValue placeholder="selecione o tipo" />
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
                        Coleta e entrega de documentos ou itens pequenos
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
                      <SelectValue placeholder="selecione a urgência" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Emergência">Emergência</SelectItem>
                      <SelectItem value="Agendamento para data específica">
                        Agendamento para data específica
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
              <FormLabel>Descrição da Carga | Condições Especiais</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-4 flex justify-between gap-2">
          <Button
            type="button"
            variant={"link"}
            onClick={() => setStep("user")}
          >
            Voltar
          </Button>
          <Button type="submit">Finalizar</Button>
        </div>
      </form>
    </Form>
  );
}
