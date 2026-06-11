// lib/validation/schemas.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/, "Name may only contain letters, spaces and hyphens"),
  
  message: z.string()
    .max(1000, "Message must not exceed 1000 characters"),
  
  topic: z.string()
    .max(200, "Topic must not exceed 200 characters")
    .optional(),
  
  phone: z.string()
    .max(20, "Phone number must not exceed 20 characters")
});

export type CreateContactDto = z.infer<typeof contactSchema>;