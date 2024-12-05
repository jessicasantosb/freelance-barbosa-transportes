import { z } from "zod";

export const stepInfoSchema = z.object({
  district: z.string().min(1, "O origem é obrigatória"),
  city: z.string().min(1, "O destino é obrigatório"),
  category: z.string().min(1, "A categoria é obrigatória"),
  urgency: z.string().min(1, "A urgência é obrigatória"),
  description: z.string().optional(),
});
