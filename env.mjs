// env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // SERVER variables (not available on the client)
  server: {
    EMAIL_HOST: z.string(),
    EMAIL_PORT: z.coerce.number(),
    EMAIL_USER: z.string().email(),
    EMAIL_PASSWORD: z.string(),
    EMAIL_FROM: z.string().email(),
    EMAIL_FROM_NAME: z.string(),
    OWNER_EMAIL: z.string().email(),
    NEXTAUTH_SECRET: z.string(),
    RATE_LIMIT_MAX: z.coerce.number().default(10),
    RATE_LIMIT_WINDOW: z.coerce.number().default(60000),
  },
  
  // CLIENT variables (available on the client)
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_MODE: z.enum(["development", "production"]),
  },
  
  // Runtime variables
  runtimeEnv: {
    // Server
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
    OWNER_EMAIL: process.env.OWNER_EMAIL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    RATE_LIMIT_MAX: process.env.RATE_LIMIT_MAX,
    RATE_LIMIT_WINDOW: process.env.RATE_LIMIT_WINDOW,
    
    // Client
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_MODE: process.env.NEXT_PUBLIC_MODE,
  },
  
  // Settings
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});