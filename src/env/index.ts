import 'dotenv/config'
import { z } from 'zod'

// Aqui as variaveis do arquivo .env são carregadas e validadas.
const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.log('Invalid environment variables.', z.treeifyError(_env.error))

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
