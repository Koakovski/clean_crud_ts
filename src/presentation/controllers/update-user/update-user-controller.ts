import {
  IController,
  HttpRequest,
  HttpResponse,
  IUpdateUser,
  IFindUserById,
  IFindUserByCpf,
  IFindUserByEmail,
  IValidation
} from './update-user-controller-protocols'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers/http-helpers'
import { FieldInUseError, NotFoundError } from '@/presentation/errors'

export class UpdateUserController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findUserById: IFindUserById,
    private readonly findUserByEmail: IFindUserByEmail,
    private readonly findUserByCpf: IFindUserByCpf,
    private readonly updateUser: IUpdateUser,
  ) { }
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // VALIDATE FIELDS
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { id } = httpRequest.params
      const { name, email, cpf } = httpRequest.body

      // VERIFY IF USER EXIST
      const userById = await this.findUserById.find(id)
      if (!userById) {
        return notFound(new NotFoundError('User'))
      }

      // VERIFY IF EMAIL IS ALREADY IN USE
      if (email) {
        const userWithEmail = await this.findUserByEmail.find(email)
        if (userWithEmail || email !== userById.email) {
          return badRequest(new FieldInUseError('email'))
        }
      }

      // VERIFY IF CPF IS ALREADY IN USE
      if (cpf) {
        const userWithCpf = await this.findUserByCpf.find(cpf)
        if (userWithCpf || cpf !== userById.cpf) {
          return badRequest(new FieldInUseError('cpf'))
        }
      }

      // UPDATE USER
      const user = await this.updateUser.update(id, { name, email, cpf })

      return ok({ user })
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
