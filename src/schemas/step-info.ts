import { z } from "zod";

export const stepInfoSchema = z.object({
  district: z.string().min(1, "O bairro é obrigatório"),
  city: z.string().min(1, "A cidade é obrigatória"),
  category: z.string().min(1, "A categoria é obrigatória"),
  urgency: z.string().min(1, "A urgência é obrigatória"),
  description: z.string().optional(),
});
