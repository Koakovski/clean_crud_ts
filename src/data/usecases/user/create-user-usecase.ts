import { UserModel } from '@/domain/models/user'
import { CreateUserParams, ICreateUser } from '@/domain/usecases/user/create-user'
import { FieldInUseError } from '@/presentation/errors'

export class CreateUserUseCase implements ICreateUser {
  async create (createUserParams: CreateUserParams): Promise<UserModel | Error> {
    return new FieldInUseError('email')
  }
}
