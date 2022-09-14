import { DeleteUserUseCase } from '@/data/usecases/user/delete-user-by-id-usecase'
import { IDeleteUserById } from '@/domain/usecases/user/delete-user-by-id'
import { UserPrismaRepository } from '@/infra/db/user/user-prisma-repository'

export const makeDeleteUserByIdUseCase = (): IDeleteUserById => {
  const userPrismaRepository = new UserPrismaRepository()
  return new DeleteUserUseCase(
    userPrismaRepository
  )
}
