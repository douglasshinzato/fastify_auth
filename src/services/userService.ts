import { prisma } from "src/lib/prisma";
import { RegisterUserInput } from "src/schemas/userSchemas";
import { hashPassword } from "src/utils/hashPassword";

// RegisterUserInput é o tipo inferido do schema registerSchema
export async function registerNewUser(data: RegisterUserInput) {
  // prisma.(tabela que irá ser acessada).findUnique({ where: { campo: valor } });
  const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
  if (existingUser) {
    throw new Error('Usuário já cadastrado com este e-mail');
  }
  // Chama a função hashPassword para criptografar a senha do usuário
  const hashedPassword = await hashPassword(data.password)

  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  })

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  }
}