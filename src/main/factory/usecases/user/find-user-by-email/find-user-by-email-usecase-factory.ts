import { FindUserByEmailUseCase } from '@/data/usecases/user/find-user-by-email-usecase'
import { IFindUserByEmail } from '@/domain/usecases/user/find-user-by-email'

export const makeFindUserByEmailUseCase = (): IFindUserByEmail => {
  return new FindUserByEmailUseCase()
}
