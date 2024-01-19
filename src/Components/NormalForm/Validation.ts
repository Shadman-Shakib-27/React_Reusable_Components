import { z } from "zod";

export const signInSchema = z.object({
  name: z.string().min(1, { message: "Name De " }),
  email: z.string().email().min(1, { message: "Email De" }),
  password: z.string().min(8, "Too Short Bro!!!!!"),
});
// Type
export type TNormalForm = z.infer<typeof signInSchema>;
