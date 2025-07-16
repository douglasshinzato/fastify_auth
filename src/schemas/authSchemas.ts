import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6)
  // Não é recomendado uma mensagem de erro específica para cada campo, pois pode expor informações sensíveis, isso será tratado no serviço.
})

export type LoginInput = z.infer<typeof loginSchema>;