import { FastifyReply, FastifyRequest } from "fastify";
import { registerUserSchema } from "src/schemas/userSchemas";
import * as userService from "src/services/userService";
import { ZodError } from "zod";

export async function registerNewUser(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = registerUserSchema.parse(request.body)
    const newUser = await userService.registerNewUser(data);

    return reply.status(201).send(newUser)
  } catch (error) {
    // Neste bloco vamos capturar erros de validação do Zod
    // Se o erro for uma instância de ZodError, significa que a validação falhou
    // e podemos retornar uma resposta de erro com os detalhes
    if (error instanceof ZodError) {
      return reply.status(400).send({
        error: 'Erro de validação',
        // Antes era error.errors, mas agora é error.issues
        details: error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }))
      })
    }
    // Neste bloco vamos capturar erros relacionados ao serviço, como o erro de usuário já cadastrado
    // A mensagem do 'includes' deve ser exatamente a mesma que foi lançada no serviço
    if (error instanceof Error && error.message.includes('Usuário já cadastrado com este e-mail')) {
      return reply.status(409).send({ error: 'Usuário já cadastrado com este e-mail' })
      // É melhor o 'send' não enviar o erro original, pois isso pode expor detalhes internos
    }
    //Aqui tratamos outros erros que podem ocorrer, como problemas de conexão com o banco de dados
    return reply.status(500).send({
      error: 'Erro interno do servidor',
    })
  }
}