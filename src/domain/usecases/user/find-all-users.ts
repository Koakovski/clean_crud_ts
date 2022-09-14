import { UserModel } from '@/domain/models/user'

export interface IFindAllUsers {
  findAll: () => Promise<UserModel[]>
}
