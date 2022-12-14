import { MissingFieldError } from '@/presentation/errors'
import { IValidation } from '@/presentation/protocols'

export class RequiredFieldValidation implements IValidation {
  constructor (
    private readonly fieldName: string
  ) { }

  validate (input: any): Error | null {
    if (!input[this.fieldName]) {
      return new MissingFieldError(this.fieldName)
    }
    return null
  }
}
