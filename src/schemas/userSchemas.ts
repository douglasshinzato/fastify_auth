import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.email(),
  name: z.string().min(3).max(20),
  password: z.string().min(6),
})

export type RegisterUserInput = z.infer<typeof registerUserSchema>;