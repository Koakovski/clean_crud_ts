import {
  HttpResponse,
  HttpRequest,
  IController,
  IFindUserById
} from './delete-user-controller-protocols'
import { noContent, notFound, serverError } from '@/presentation/helpers/http-helpers'
import { NotFoundError } from '@/presentation/errors'
import { IDeleteUserById } from '@/domain/usecases/user/delete-user-by-id'

export class DeleteUserController implements IController {
  constructor (
    private readonly findUserById: IFindUserById,
    private readonly deleteUserById: IDeleteUserById
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      // VERIFY IF USER EXIST
      const user = await this.findUserById.find(id)
      if (!user) {
        return notFound(new NotFoundError('User'))
      }

      // DELETE USER
      await this.deleteUserById.delete(id)

      return noContent()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
