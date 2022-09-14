import { makeFindUserByCpflUseCase } from '@/main/factory/usecases/user/find-user-by-cpf/find-user-by-cpf-usecase-factory'
import { makeFindUserByEmailUseCase } from '@/main/factory/usecases/user/find-user-by-email/find-user-by-email-usecase-factory'
import { makeFindUserByIdUseCase } from '@/main/factory/usecases/user/find-user-by-id/find-user-by-id-usecase-factory'
import { makeUpdateUserUseCase } from '@/main/factory/usecases/user/update-user/update-user-usecase-factory'
import { UpdateUserController } from '@/presentation/controllers/update-user/update-user-controller'
import { IController } from '@/presentation/protocols'
import { makeUpdateUserValidation } from './update-user-validation-factory'

export const makeUpdateUserController = (): IController => {
  return new UpdateUserController(
    makeUpdateUserValidation(),
    makeFindUserByIdUseCase(),
    makeFindUserByCpflUseCase(),
    makeFindUserByEmailUseCase(),
    makeUpdateUserUseCase()
  )
} 
