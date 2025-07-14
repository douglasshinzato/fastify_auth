// plugins/jwt.ts
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import fp from 'fastify-plugin'
import fastifyJWT from '@fastify/jwt'

// Plugin assíncrono tipado
const jwtPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifyJWT, {
    secret: process.env.JWT_SECRET as string,
  })

  // Decorando o Fastify com o método authenticate para verificar o JWT.
  fastify.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify()
      } catch (err) {
        reply.code(401).send({ error: 'Não autorizado' })
      }
    }
  )
}

// Exportando o plugin usando fastify-plugin para garantir a tipagem correta.
export default fp(jwtPlugin)