import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.email(),
  name: z.string().min(3).max(20),
  password: z.string().min(6),
})

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

export type RegisterUserInput = z.infer<typeof registerUserSchema>;
export type LoginInput = z.infer<typeof loginSchema>;