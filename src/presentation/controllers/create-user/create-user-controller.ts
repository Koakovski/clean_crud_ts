import {
  IController,
  HttpRequest,
  HttpReponse,
  IValidation,
  ICreateUser,
  IFindUserByEmail
} from './create-user-controller-protocols'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helpers'
import { FieldInUseError } from '@/presentation/errors'
export class CreateUserController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findUserByEmail: IFindUserByEmail,
    private readonly createUser: ICreateUser
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpReponse> {
    try {
      // VALIDATE FIELDS
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, email } = httpRequest.body

      // VERIFY IF EMAIL IS ALREADY IN USE
      const userWithEmail = await this.findUserByEmail.find(email)
      if (userWithEmail) {
        return badRequest(new FieldInUseError('email'))
      }

      // CREATE USER
      const user = await this.createUser.create({ name, email })

      return ok({ user })
    } catch (error) {
      return serverError(error)
    }
  }
}
