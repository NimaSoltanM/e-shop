import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6).max(50),
    confirmPassword: z.string().min(6).max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
