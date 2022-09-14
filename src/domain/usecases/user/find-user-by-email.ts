import { UserModel } from '@/domain/models/user'

export interface IFindUserByEmail {
  find: (email: string) => Promise<UserModel | null>
}
