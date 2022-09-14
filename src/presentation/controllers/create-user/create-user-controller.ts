import {
  IController,
  HttpRequest,
  HttpReponse,
  IValidation,
  ICreateUser
} from './create-user-controller-protocols'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helpers'

export class CreateUserController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly CreateUser: ICreateUser
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpReponse> {
    try {
      // VALIDATE FIELDS
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      // CREATE USER
      const { name, email } = httpRequest.body

      const createUserResult = await this.CreateUser.create({ name, email })
      if (createUserResult instanceof Error) {
        return badRequest(createUserResult)
      }

      return ok({ user: createUserResult })
    } catch (error) {
      return serverError(error)
    }
  }
}
