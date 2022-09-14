
import { IFindUserByCpfRepository } from '@/data/protocols/find-user-by-cpf-repository'
import { UserModel } from '@/domain/models/user'
import { IFindUserByCpf } from '@/domain/usecases/user/find-user-by-cpf'

export class FindUserByCpflUseCase implements IFindUserByCpf {
  constructor (
    private readonly findUserByCpfRepository: IFindUserByCpfRepository
  ) { }

  async find (cpf: string): Promise<UserModel | null> {
    return await this.findUserByCpfRepository.findByCpf(cpf)
  }
}
