import { UpdateUserUseCase } from '@/data/usecases/user/update-user-usecase'
import { IUpdateUser } from '@/domain/usecases/user/update-user'
import { UserPrismaRepository } from '@/infra/db/user/user-prisma-repository'

export const makeUpdateUserUseCase = (): IUpdateUser => {
  const userPrismaRepository = new UserPrismaRepository()
  return new UpdateUserUseCase(
    userPrismaRepository
  )
}
