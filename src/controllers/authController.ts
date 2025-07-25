import { FastifyRequest, FastifyReply } from 'fastify'
import { loginSchema } from '../schemas/authSchemas'
import { ZodError } from 'zod'
import * as authService from '../services/authService'

export async function login(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = loginSchema.parse(request.body)

    const user = await authService.loginUser(data)

    const token = await reply.jwtSign({ id: user.id, email: user.email },)

    return reply.send({ token })
  } catch (error) {
    if (error instanceof ZodError) {
      return reply.status(400).send({
        error: 'Erro de validação',
        details: error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      })
    }
    if (error instanceof Error && error.message.includes('Credenciais inválidas')) {
      return reply.status(401).send({ error: 'Credenciais inválidas' })
    }
    return reply.status(500).send({ error: 'Erro interno do servidor' })
  }
}