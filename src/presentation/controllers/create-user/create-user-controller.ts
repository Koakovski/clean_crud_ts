import {
  IController,
  HttpRequest,
  HttpReponse,
  IValidation,
  ICreateUser,
  IFindUserByEmail,
  IFindUserByCpf
} from './create-user-controller-protocols'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helpers'
import { FieldInUseError } from '@/presentation/errors'
export class CreateUserController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findUserByEmail: IFindUserByEmail,
    private readonly findUserByCpf: IFindUserByCpf,
    private readonly createUser: ICreateUser
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpReponse> {
    try {
      // VALIDATE FIELDS
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, email, cpf } = httpRequest.body

      // VERIFY IF EMAIL IS ALREADY IN USE
      const userWithEmail = await this.findUserByEmail.find(email)
      if (userWithEmail) {
        return badRequest(new FieldInUseError('email'))
      }

      // VERIFY IF CPF IS ALREADY IN USE
      const userWithCpf = await this.findUserByCpf.find(cpf)
      if (userWithCpf) {
        return badRequest(new FieldInUseError('cpf'))
      }

      // CREATE USER
      const user = await this.createUser.create({ name, email, cpf })

      return ok({ user })
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
