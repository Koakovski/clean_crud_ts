import { UserModel } from '@/domain/models/user'

export interface IFindUserById {
  find: (id: string) => Promise<UserModel | null>
}
