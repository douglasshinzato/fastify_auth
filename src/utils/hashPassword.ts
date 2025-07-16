import { hash, compare } from "bcrypt";

// Cria o hash da senha do usuário, utilizando o bcrypt.
export const hashPassword = (password: string) => hash(password, 10);
// Verifica se a senha digitada pelo o usuário para o login é a mesma salva no banco de dados para  respectivo usuário.
// O 10 significa o número de rounds de salting, que é um processo de segurança para tornar o hash mais resistente a ataques.
// Salting é o processo de adicionar dados aleatórios a uma senha antes de aplicar o hash, para garantir que mesmo senhas iguais resultem em hashes diferentes.
export const comparePassword = (password: string, hashed: string) => compare(password, hashed);
// Não é necessario inferir o tipo de retorno das funções hashPassword e verifyPassword, pois o TypeScript já infere automaticamente o tipo de retorno baseado na assinatura das funções do pacote bcrypt.