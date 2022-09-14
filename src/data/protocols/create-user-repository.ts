import { UserModel } from '@/domain/models/user'
import { CreateUserParams } from '@/domain/usecases/user/create-user'

export interface ICreateUserRepository {
  createUser: (createUserParams: CreateUserParams) => Promise<UserModel>
}
