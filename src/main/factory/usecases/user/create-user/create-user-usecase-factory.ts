import { CreateUserUseCase } from '@/data/usecases/user/create-user-usecase'
import { ICreateUser } from '@/domain/usecases/user/create-user'

export const makeCreateUserUseCase = (): ICreateUser => {
  return new CreateUserUseCase()
}
