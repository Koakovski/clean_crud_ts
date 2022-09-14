import { FindAllUsersUseCase } from '@/data/usecases/user/find-all-users-usecase'
import { IFindAllUsers } from '@/domain/usecases/user/find-all-users'
import { UserPrismaRepository } from '@/infra/db/user/user-prisma-repository'

export const makeFindAllUsersUsecase = (): IFindAllUsers => {
  const userPrismaRepository = new UserPrismaRepository()
  return new FindAllUsersUseCase(
    userPrismaRepository
  )
}
