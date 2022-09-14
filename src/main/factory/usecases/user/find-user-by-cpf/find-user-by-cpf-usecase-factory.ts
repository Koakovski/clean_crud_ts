import { FindUserByCpflUseCase } from '@/data/usecases/user/find-user-by-cpf-usecase'
import { IFindUserByCpf } from '@/domain/usecases/user/find-user-by-cpf'
import { UserPrismaRepository } from '@/infra/db/user/user-prisma-repository'

export const makeFindUserByCpflUseCase = (): IFindUserByCpf => {
  const userPrismaRepository = new UserPrismaRepository()
  return new FindUserByCpflUseCase(
    userPrismaRepository
  )
}
