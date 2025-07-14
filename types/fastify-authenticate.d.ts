import 'fastify'
import { FastifyRequest, FastifyReply } from 'fastify'

// Definindo a interface para o método authenticate que será adicionado ao Fastify
// Isso permite que o TypeScript reconheça o método quando usado em outros lugares.
// Isso é útil para garantir que o método esteja disponível em todas as instâncias do Fastify
// e que seja tipado corretamente.
declare module 'fastify' {
  interface FastifyInstance {
    authenticate(request: FastifyRequest, reply: FastifyReply): Promise<void>
  }
}
