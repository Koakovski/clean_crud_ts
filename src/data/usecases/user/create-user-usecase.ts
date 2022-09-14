import { ICreateUserRepository } from '@/data/protocols/create-user-repository'
import { UserModel } from '@/domain/models/user'
import { CreateUserParams, ICreateUser } from '@/domain/usecases/user/create-user'
import { FieldInUseError } from '@/presentation/errors'

export class CreateUserUseCase implements ICreateUser {
  constructor (
    private readonly createUserRepository: ICreateUserRepository
  ) { }

  async create (createUserParams: CreateUserParams): Promise<UserModel> {
    return await this.createUserRepository.createUser(createUserParams)
  }
}
