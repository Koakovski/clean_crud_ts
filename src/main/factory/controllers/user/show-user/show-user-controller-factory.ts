import { makeFindUserByIdUseCase } from '@/main/factory/usecases/user/find-user-by-id/find-user-by-id-usecase-factory'
import { ShowUserController } from '@/presentation/controllers/show-user/show-user-controller'
import { IController } from '@/presentation/protocols'

export const makeShowUserController = (): IController => {
  return new ShowUserController(
    makeFindUserByIdUseCase()
  )
}
