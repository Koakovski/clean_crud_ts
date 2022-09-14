import { FindUserByEmailUseCase } from '@/data/usecases/user/find-user-by-email-usecase'
import { IFindUserByEmail } from '@/domain/usecases/user/find-user-by-email'
import { UserPrismaRepository } from '@/infra/db/user/user-prisma-repository'

export const makeFindUserByEmailUseCase = (): IFindUserByEmail => {
  const userPrismaRepository = new UserPrismaRepository()
  return new FindUserByEmailUseCase(
    userPrismaRepository
  )
}
