import { FindUserByIdlUseCase } from '@/data/usecases/user/find-user-by-id-usecase'
import { IFindUserById } from '@/domain/usecases/user/find-user-by-id'
import { UserPrismaRepository } from '@/infra/db/user/user-prisma-repository'

export const makeFindUserByIdUseCase = (): IFindUserById => {
  const userPrismaRepository = new UserPrismaRepository()
  return new FindUserByIdlUseCase(
    userPrismaRepository
  )
}
