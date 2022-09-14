import { DeleteUserUseCase } from '@/data/usecases/user/delete-user-usecase'
import { IDeleteUser } from '@/domain/usecases/user/delete-user'
import { UserPrismaRepository } from '@/infra/db/user/user-prisma-repository'

export const makeDeleteUserByIdUseCase = (): IDeleteUser => {
  const userPrismaRepository = new UserPrismaRepository()
  return new DeleteUserUseCase(
    userPrismaRepository
  )
}
