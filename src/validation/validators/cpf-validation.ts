import { InvalidFieldError } from '@/presentation/errors/invalid-field-error'
import { IValidation } from '@/presentation/protocols'
import { ICpfValidator } from '../protocols/cpf-validator'

export class CpfValidation implements IValidation {
  constructor (
    private readonly fieldName: string,
    private readonly cpfValidator: ICpfValidator
  ) { }

  validate (input: any): Error | null {
    const isValid = this.cpfValidator.isValidCpf(input[this.fieldName])
    if (!isValid) {
      return new InvalidFieldError(this.fieldName)
    }
    return null
  }
}
