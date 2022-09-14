import { UserModel } from '@/domain/models/user'
import { UpdateUserParams } from '@/domain/usecases/user/update-user'


export interface IUpdateUserByIdRepository {
  updateById: (id: string, updateUserParams: UpdateUserParams) => Promise<UserModel>
}
