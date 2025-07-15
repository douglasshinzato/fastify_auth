import Fastify from 'fastify'
import jwtPlugin from './plugins/jwt'
// import { authRoutes } from './routes/authRoutes'

export const app = Fastify()
// Fastify({ logger: true }) traz o log de requisições e respostas no console.aa

//Rregistro das rotas
app.register(jwtPlugin)
// app.register(authRoutes)

app.get('/', async () => {
  return { message: 'Hello!' }
})