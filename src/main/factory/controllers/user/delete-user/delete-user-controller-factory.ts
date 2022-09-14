import { makeDeleteUserByIdUseCase } from '@/main/factory/usecases/user/delete-user/delete-user-usecase-factory'
import { makeFindUserByIdUseCase } from '@/main/factory/usecases/user/find-user-by-id/find-user-by-id-usecase-factory'
import { DeleteUserController } from '@/presentation/controllers/delete-user/delete-user-controller'
import { IController } from '@/presentation/protocols'

export const makeDeleteUserController = (): IController => {
  return new DeleteUserController(
    makeFindUserByIdUseCase(),
    makeDeleteUserByIdUseCase()
  )
}
