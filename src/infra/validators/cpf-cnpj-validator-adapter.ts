import { ICpfValidator } from '@/validation/protocols/cpf-validator'
import { cpf as cpfValidator } from 'cpf-cnpj-validator'

export class CpfCnpjValidatorAdapter implements ICpfValidator {
  isValidCpf (cpf: string): boolean {
    return cpfValidator.isValid(cpf)
  }
}
