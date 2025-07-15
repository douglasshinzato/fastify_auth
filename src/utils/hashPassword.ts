import { hash, compare } from "bcrypt";

//Cria o hash da senha do usuário, utilizando o bcrypt.
export const hashPassword = (password: string) => hash(password, 10);
//Verifica se a senha digitada pelo o usuário para o login é a mesma salva no banco de dados para  respectivo usuário.
export const verifyPassword = (password: string, hashed: string) => compare(password, hashed);
//Não é necessario inferir o tipo de retorno das funções hashPassword e verifyPassword, pois o TypeScript já infere automaticamente o tipo de retorno baseado na assinatura das funções do pacote bcrypt.