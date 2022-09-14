import { IDeleteUserByIdRepository } from '@/data/protocols/delete-user-by-id-repository'
import { IDeleteUserById } from '@/domain/usecases/user/delete-user-by-id'

export class DeleteUserUseCase implements IDeleteUserById {
  constructor (
    private readonly deleteUserRepository: IDeleteUserByIdRepository
  ) { }

  async delete (id: string): Promise<void> {
    return await this.deleteUserRepository.deleteById(id)
  }
}
