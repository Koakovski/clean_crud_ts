import { InvalidParamError } from '@/presentation/errors'
import { IValidation } from '@/presentation/protocols'
import { ICpfValidator } from '../protocols/cpf-validator'

export class CpfValidation implements IValidation {
  constructor (
    private readonly fieldName: string,
    private readonly cpfValidator: ICpfValidator
  ) { }

  validate (input: any): Error | null {
    if (!input[this.fieldName]) { return null }
    const isValid = this.cpfValidator.isValidCpf(input[this.fieldName])
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
    return null
  }
}
