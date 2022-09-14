import { makeFindAllUsersUsecase } from '@/main/factory/usecases/user/find-all-users/find-all-users-usecase'
import { FindAllUsersController } from '@/presentation/controllers/find-all-users/find-all-users-controller'
import { IController } from '@/presentation/protocols'

export const makeFindAllUsersController = (): IController => {
  return new FindAllUsersController(
    makeFindAllUsersUsecase()
  )
}
