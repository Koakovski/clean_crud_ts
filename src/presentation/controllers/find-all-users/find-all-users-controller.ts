import {
  IController,
  HttpRequest,
  HttpResponse,
  IFindAllUsers
} from './find-all-users-controller-protocols'
import { ok, serverError } from '@/presentation/helpers/http-helpers'

export class FindAllUsersController implements IController {
  constructor (
    private readonly findAllUsers: IFindAllUsers
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const users = await this.findAllUsers.findAll()
      return ok({ users })
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
