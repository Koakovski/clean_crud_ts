import { InvalidParamError } from '@/presentation/errors'
import { IValidation } from '@/presentation/protocols'
import { IEmailValidator } from '../protocols/email-validator'

export class EmailValidation implements IValidation {
  constructor (
    private readonly fieldName: string,
    private readonly emailValidator: IEmailValidator
  ) { }

  validate (input: any): Error | null {
    if (!input[this.fieldName]) { return null }
    const isValid = this.emailValidator.isValidEmail(input[this.fieldName])
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
    return null
  }
}
