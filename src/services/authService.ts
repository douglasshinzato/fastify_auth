import { prisma } from "../lib/prisma";
import { LoginInput } from "../schemas/authSchemas";
import { comparePassword } from "../utils/hashPassword";

// Talvez seja possível refatorar para reduzir os "if's" e melhorar a legibilidade
export async function loginUser(data: LoginInput) { //tipo do parâmetro é LoginInput
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  })

  if (!user) {
    throw new Error("Credenciais inválidas");
  }
  // É necessario verificar se "user" não é "null" antes de acessar user.password
  // Isso é importante para evitar erros de runtime caso o usuário não seja encontrado
  const isPasswordValid = await comparePassword(data.password, user.password)
  // Se a senha não for válida, não é necessário retornar o usuário, apenas lançar um erro
  // Isso evita expor informações sensíveis sobre o usuário
  if (!isPasswordValid) {
    throw new Error("Credenciais inválidas");
  }
  // return user
}