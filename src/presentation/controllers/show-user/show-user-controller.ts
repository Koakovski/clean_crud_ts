
import {
  IController,
  HttpRequest,
  HttpReponse,
  IFindUserById
} from './show-user-controller-protocols'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers/http-helpers'
import { NotFoundError } from '@/presentation/errors'

export class ShowUserController implements IController {
  constructor (
    private readonly findUserById: IFindUserById
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpReponse> {
    try {
      const { id } = httpRequest.params
      // FIND USER
      const user = await this.findUserById.find(id)
      if (!user) {
        return notFound(new NotFoundError('User'))
      }

      return ok(user)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
