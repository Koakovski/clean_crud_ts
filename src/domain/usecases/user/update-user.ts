import { UserModel } from '@/domain/models/user'

export type UpdateUserParams = {
  name?: string
  email?: string
  cpf?: string
}

export interface IUpdateUser {
  update: (id: string, updateUserParams: UpdateUserParams) => Promise<UserModel>
}
