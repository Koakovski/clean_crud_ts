import { ICreateUserRepository } from '@/data/protocols/create-user-repository'
import { IFindUserByEmailRepository } from '@/data/protocols/find-user-by-email-repository'
import { UserModel } from '@/domain/models/user'
import { CreateUserParams, ICreateUser } from '@/domain/usecases/user/create-user'
import { FieldInUseError } from '@/presentation/errors'

export class CreateUserUseCase implements ICreateUser {
  constructor (
    private readonly findUserByEmailRepository: IFindUserByEmailRepository,
    private readonly createUserRepository: ICreateUserRepository
  ) { }

  async create (createUserParams: CreateUserParams): Promise<UserModel | Error> {
    // VERIFY IF EMAIL ALREADY EXIST IN SYSTEM
    const userWithEmail = await this.findUserByEmailRepository.findByEmail(createUserParams.email)
    console.log(userWithEmail)
    if (userWithEmail) {
      return new FieldInUseError('email')
    }

    // CREATE USER
    const user = await this.createUserRepository.createUser(createUserParams)
    return user
  }
}
