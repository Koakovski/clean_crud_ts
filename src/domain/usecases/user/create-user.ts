import { UserModel } from '@/domain/models/user'

export type CreateUserParams = Omit<UserModel, 'id' | 'createdAt' | 'updatedAt'>

export interface ICreateUser {
  create: (createUserParams: CreateUserParams) => Promise<UserModel>
}
