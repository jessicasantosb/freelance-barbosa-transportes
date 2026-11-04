import { z } from "zod";

export const stepUserSchema = z.object({
  name: z.string().min(3, "Digite pelo menos 3 letras"),
});
