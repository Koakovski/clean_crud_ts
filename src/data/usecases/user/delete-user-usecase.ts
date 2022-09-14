import { IDeleteUserByIdRepository } from '@/data/protocols/delete-user-by-id-repository'
import { IDeleteUser } from '@/domain/usecases/user/delete-user'

export class DeleteUserUseCase implements IDeleteUser {
  constructor (
    private readonly deleteUserRepository: IDeleteUserByIdRepository
  ) { }

  async delete (id: string): Promise<void> {
    return await this.deleteUserRepository.deleteById(id)
  }
}
