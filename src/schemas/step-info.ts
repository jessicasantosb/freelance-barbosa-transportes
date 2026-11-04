import { z } from "zod";

export const stepInfoSchema = z.object({
  district: z.string().min(1, "Informe a origem"),
  city: z.string().min(1, "Informe o destino"),
  category: z.string().min(1, "Selecione a categoria"),
  urgency: z.string().min(1, "Selecione a urgência"),
  description: z.string().optional(),
});
