
import { IFindUserByEmailRepository } from '@/data/protocols/find-user-by-email-repository'
import { UserModel } from '@/domain/models/user'
import { IFindUserByEmail } from '@/domain/usecases/user/find-user-by-email'

export class FindUserByEmailUseCase implements IFindUserByEmail {
  constructor (
    private readonly findUserByEmailRepository: IFindUserByEmailRepository
  ) { }

  async find (email: string): Promise<UserModel | null> {
    return await this.findUserByEmailRepository.findByEmail(email)
  }
}
