import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    APP_BASE_URL: z.string().url(),
  },

  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },

  runtimeEnv: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
})
