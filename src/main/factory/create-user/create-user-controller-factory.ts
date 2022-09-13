import { CreateUserController } from '@/presentation/controllers/create-user/create-user-controller'
import { IController } from '@/presentation/protocols'

export const makeCreateUserController = (): IController => {
  return new CreateUserController()
}
