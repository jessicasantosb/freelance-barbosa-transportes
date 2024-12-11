import { zodResolver } from "@hookform/resolvers/zod";
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
import { stepUserSchema } from "@/schemas/step-user";
import { useInfoStore } from "@/stores/info-store";
import { SetStepProps } from "@/types/checkout-steps";

export function StepUser({ setStep }: SetStepProps) {
  const { name, setName } = useInfoStore((state) => state);

  const form = useForm<z.infer<typeof stepUserSchema>>({
    resolver: zodResolver(stepUserSchema),
    defaultValues: { name },
  });

  const onSubmit = (values: z.infer<typeof stepUserSchema>) => {
    setName(values.name);
    setStep("info");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant={"outline"}>
          Próximo
        </Button>
      </form>
    </Form>
  );
}
