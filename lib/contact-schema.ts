import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(120),
  email: z.string().trim().email("Enter a valid email"),
  message: z.string().trim().min(10, "Please add a bit more detail").max(8000),
});

export type ContactInput = z.infer<typeof contactSchema>;
