import { makeCreateUserUseCase } from '@/main/factory/usecases/user/create-user/create-user-usecase-factory'
import { CreateUserController } from '@/presentation/controllers/create-user/create-user-controller'
import { IController } from '@/presentation/protocols'
import { makeCreateUserValidation } from './create-user-validation-factory'

export const makeCreateUserController = (): IController => {
  return new CreateUserController(
    makeCreateUserValidation(),
    makeCreateUserUseCase()
  )
}
