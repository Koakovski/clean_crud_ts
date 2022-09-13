import {
  IController,
  HttpRequest,
  HttpReponse
} from './create-user-controller-protocols'
import { ok, serverError } from '@/presentation/helpers/http-helpers'

export class CreateUserController implements IController {
  async handle (httpRequest: HttpRequest): Promise<HttpReponse> {
    try {
      const body = httpRequest.body
      return ok({ body })
    } catch (error) {
      return serverError(error)
    }
  }
}
