import { UserModel } from '@/domain/models/user'

export interface IFindAllUsersRepository {
  findAll: () => Promise<UserModel[]>
}
