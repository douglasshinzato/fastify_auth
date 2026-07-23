import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.email(),
  name: z.string().min(3).max(20),
  password: z.string().min(6),
})

export const getAllUsersSchema = z.object({
  name: z.string().min(3).max(20).optional(),
  email: z.email().optional(),
})

export type RegisterUserInput = z.infer<typeof registerUserSchema>;
export type GetAllUsersInput = z.infer<typeof getAllUsersSchema>;