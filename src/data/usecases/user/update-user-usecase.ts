import { IUpdateUserByIdRepository } from '@/data/protocols/update-user-by-id-repository'
import { UserModel } from '@/domain/models/user'
import { IUpdateUser, UpdateUserParams } from '@/domain/usecases/user/update-user'

export class UpdateUserUseCase implements IUpdateUser {
  constructor (
    private readonly updateUserByIdRepository: IUpdateUserByIdRepository
  ) { }

  async update (id: string, updateUserParams: UpdateUserParams): Promise<UserModel> {
    return await this.updateUserByIdRepository.updateById(id, updateUserParams)
  }
}
