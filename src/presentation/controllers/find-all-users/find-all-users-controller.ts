import {
  IController,
  HttpRequest,
  HttpReponse
} from './find-all-users-controller-protocols'
import { ok, serverError } from '@/presentation/helpers/http-helpers'
import { IFindAllUsers } from '@/domain/usecases/user/find-all-users'

export class FindAllUsersController implements IController {
  constructor (
    private readonly findAllUsers: IFindAllUsers
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpReponse> {
    try {
      const users = await this.findAllUsers.findAll()
      return ok({ users })
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
