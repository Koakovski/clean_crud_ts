import { IFindAllUsersRepository } from '@/data/protocols/find-all-users-repository'
import { UserModel } from '@/domain/models/user'
import { IFindAllUsers } from '@/domain/usecases/user/find-all-users'

export class FindAllUsersUseCase implements IFindAllUsers {
  constructor (
    private readonly findAllUsersRepository: IFindAllUsersRepository
  ) { }

  async findAll (): Promise<UserModel[]> {
    return await this.findAllUsersRepository.findAll()
  }
}
