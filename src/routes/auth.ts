import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import { registerSchema, loginSchema } from "../schemas/user";
import { hashPassword } from "../utils/hash";
import { email } from "zod";
import { prisma } from "../lib/prisma";

export async function authRoutes(fastify: FastifyInstance) {
  // a tipagem do request e reply é feita automaticamente pelo FastifyInstance
  fastify.post('/register', async (request, reply) => {
    const body = registerSchema.parse(request.body);

    const userExists = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (userExists) {
      return reply.status(400).send({ error: 'E-mail já cadastrado' });
    }
  })
}