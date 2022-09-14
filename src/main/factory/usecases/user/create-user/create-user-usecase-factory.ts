import { CreateUserUseCase } from '@/data/usecases/user/create-user-usecase'
import { ICreateUser } from '@/domain/usecases/user/create-user'
import { UserPrismaRepository } from '@/infra/db/user/user-prisma-repository'

export const makeCreateUserUseCase = (): ICreateUser => {
  const userPrismaRepository = new UserPrismaRepository()
  return new CreateUserUseCase(
    userPrismaRepository
  )
}
