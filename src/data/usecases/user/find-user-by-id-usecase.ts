
import { IFindUserByIdRepository } from '@/data/protocols/find-user-by-id-repository'
import { UserModel } from '@/domain/models/user'
import { IFindUserById } from '@/domain/usecases/user/find-user-by-id'

export class FindUserByIdlUseCase implements IFindUserById {
  constructor (
    private readonly findUserByIdRepository: IFindUserByIdRepository
  ) { }

  async find (id: string): Promise<UserModel | null> {
    return await this.findUserByIdRepository.findById(id)
  }
}
