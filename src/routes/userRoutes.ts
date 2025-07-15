import { FastifyInstance } from 'fastify'
import * as userController from '../controllers/userController'

export default async function userRoutes(app: FastifyInstance) {
  app.post('/register', userController.registerNewUser)
}
