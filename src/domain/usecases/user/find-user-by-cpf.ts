import { UserModel } from '@/domain/models/user'

export interface IFindUserByCpf {
  find: (cpf: string) => Promise<UserModel | null>
}
