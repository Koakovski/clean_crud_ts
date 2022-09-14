import { InvalidFieldError } from '@/presentation/errors/invalid-field-error'
import { IValidation } from '@/presentation/protocols'
import { IEmailValidator } from '../protocols/email-validator'

export class EmailValidation implements IValidation {
  constructor (
    private readonly fieldName: string,
    private readonly emailValidator: IEmailValidator
  ) { }

  validate (input: any): Error | null {
    const isValid = this.emailValidator.isValidEmail(input[this.fieldName])
    if (!isValid) {
      return new InvalidFieldError(this.fieldName)
    }
    return null
  }
}
